import { ContactFormData } from "./validations/contact";

export interface EmailDispatchResult {
  success: boolean;
  messageId?: string;
  error?: string;
  isConfigured: boolean;
}

/**
 * Checks whether production email dispatch environment variables are configured.
 */
export function isEmailConfigured(): boolean {
  const hasResend = Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_EMAIL_TO);
  const hasSmtp = Boolean(
    process.env.SMTP_HOST &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS &&
    process.env.CONTACT_EMAIL_TO
  );
  return hasResend || hasSmtp;
}

/**
 * Dispatches contact inquiry email.
 * If credentials are not configured, returns isConfigured: false so the server
 * can inform the user/administrator truthfully rather than claiming false success.
 */
export async function sendContactEmail(
  data: ContactFormData,
  clientIp: string
): Promise<EmailDispatchResult> {
  const recipient = process.env.CONTACT_EMAIL_TO;
  const sender = process.env.CONTACT_EMAIL_FROM || "inquiries@synoratech.in";
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!isEmailConfigured()) {
    return {
      success: false,
      isConfigured: false,
      error:
        "The inquiry delivery provider is not yet configured on this server (missing RESEND_API_KEY or SMTP credentials). The submission was safely rejected to prevent message loss.",
    };
  }

  // If Resend API is configured
  if (resendApiKey && recipient) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: sender,
          to: [recipient],
          reply_to: data.workEmail,
          subject: `[Synora Inquiries] New message from ${data.fullName} (${data.companyName || "Independent"})`,
          text: `
New Contact Inquiry - Synora Technologies Private Limited
=========================================================
Full Name: ${data.fullName}
Work Email: ${data.workEmail}
Company: ${data.companyName || "Not specified"}
Role: ${data.role || "Not specified"}
Area of Interest: ${data.areaOfInterest}
Client IP: ${clientIp}
Timestamp: ${new Date().toISOString()}

Message:
--------
${data.message}
          `.trim(),
        }),
      });

      if (!response.ok) {
        const errJson = await response.json().catch(() => ({}));
        return {
          success: false,
          isConfigured: true,
          error: `Email provider error: ${errJson.message || response.statusText}`,
        };
      }

      const resData = await response.json();
      return {
        success: true,
        isConfigured: true,
        messageId: resData.id || "resend-ok",
      };
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : "Unknown transmission error";
      return {
        success: false,
        isConfigured: true,
        error: `Failed to dispatch email: ${errorMsg}`,
      };
    }
  }

  // If SMTP is configured
  if (
    process.env.SMTP_HOST &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS &&
    recipient
  ) {
    try {
      const nodemailer = await import("nodemailer");
      const isSecure =
        process.env.SMTP_SECURE === "true" || process.env.SMTP_PORT === "465";

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || "587", 10),
        secure: isSecure,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const info = await transporter.sendMail({
        from: sender,
        to: recipient,
        replyTo: data.workEmail,
        subject: `[Synora Inquiries] New message from ${data.fullName} (${data.companyName || "Independent"})`,
        text: `
New Contact Inquiry - Synora Technologies Private Limited
=========================================================
Full Name: ${data.fullName}
Work Email: ${data.workEmail}
Company: ${data.companyName || "Not specified"}
Role: ${data.role || "Not specified"}
Area of Interest: ${data.areaOfInterest}
Client IP: ${clientIp}
Timestamp: ${new Date().toISOString()}

Message:
--------
${data.message}
        `.trim(),
      });

      return {
        success: true,
        isConfigured: true,
        messageId: info.messageId,
      };
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : "SMTP transmission failed";
      return {
        success: false,
        isConfigured: true,
        error: `SMTP error: ${errorMsg}`,
      };
    }
  }

  return {
    success: false,
    isConfigured: false,
    error: "No compatible email delivery driver detected.",
  };
}
