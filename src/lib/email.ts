import { ContactFormData } from "./validations/contact";

export interface EmailDispatchResult {
  success: boolean;
  messageId?: string;
  error?: string;
  isConfigured: boolean;
}

function cleanEnv(val: string | undefined): string {
  if (!val) return "";
  return val.trim().replace(/^["']|["']$/g, "").trim();
}

/**
 * Checks whether production email dispatch environment variables are configured.
 */
export function isEmailConfigured(): boolean {
  const recipient = cleanEnv(process.env.CONTACT_EMAIL_TO);
  const resendKey = cleanEnv(process.env.RESEND_API_KEY);
  const hasResend = Boolean(resendKey.startsWith("re_") && recipient);

  const smtpHost = cleanEnv(process.env.SMTP_HOST);
  const smtpUser = cleanEnv(process.env.SMTP_USER);
  const smtpPass = cleanEnv(process.env.SMTP_PASS);
  const hasSmtp = Boolean(smtpHost && smtpUser && smtpPass && recipient);

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
  const recipient = cleanEnv(process.env.CONTACT_EMAIL_TO);
  const sender = cleanEnv(process.env.CONTACT_EMAIL_FROM) || "sales@synoratech.in";
  const resendApiKey = cleanEnv(process.env.RESEND_API_KEY);
  const smtpHost = cleanEnv(process.env.SMTP_HOST);
  const smtpUser = cleanEnv(process.env.SMTP_USER);
  const smtpPass = cleanEnv(process.env.SMTP_PASS);

  const isResendConfigured = Boolean(resendApiKey.startsWith("re_") && recipient);
  const isSmtpConfigured = Boolean(smtpHost && smtpUser && smtpPass && recipient);

  if (!isEmailConfigured()) {
    return {
      success: false,
      isConfigured: false,
      error:
        "The inquiry delivery provider is not yet configured on this server (missing RESEND_API_KEY or SMTP credentials). The submission was safely rejected to prevent message loss.",
    };
  }

  // 1. If Resend API is configured with a valid 're_' API key
  if (isResendConfigured) {
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

      if (response.ok) {
        const resData = await response.json();
        return {
          success: true,
          isConfigured: true,
          messageId: resData.id || "resend-ok",
        };
      }

      // If Resend failed and SMTP is NOT available, return the Resend error
      if (!isSmtpConfigured) {
        const errJson = await response.json().catch(() => ({}));
        return {
          success: false,
          isConfigured: true,
          error: `Email provider error: ${errJson.message || response.statusText}`,
        };
      }
      // Otherwise fallback to SMTP
      console.warn("Resend dispatch failed, attempting SMTP fallback...");
    } catch (err: unknown) {
      if (!isSmtpConfigured) {
        const errorMsg = err instanceof Error ? err.message : "Unknown transmission error";
        return {
          success: false,
          isConfigured: true,
          error: `Failed to dispatch email: ${errorMsg}`,
        };
      }
      console.warn("Resend transmission error, attempting SMTP fallback...");
    }
  }

  // 2. If SMTP is configured
  if (isSmtpConfigured) {
    try {
      const nodemailer = await import("nodemailer");
      const smtpPort = parseInt(cleanEnv(process.env.SMTP_PORT) || "465", 10);
      const isSecure =
        cleanEnv(process.env.SMTP_SECURE) === "true" || smtpPort === 465;

      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: isSecure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
        connectionTimeout: 10000,
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
