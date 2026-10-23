import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact";
import { checkRateLimit } from "@/lib/rate-limit";
import { sendContactEmail, isEmailConfigured } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    // 1. Determine client identifier for rate limiting
    const forwarded = req.headers.get("x-forwarded-for");
    const clientIp = forwarded ? forwarded.split(",")[0].trim() : "127.0.0.1";

    // 2. Check rate limit (5 requests per 15 minutes)
    const rateLimit = checkRateLimit(clientIp, {
      windowMs: 15 * 60 * 1000,
      maxRequests: 5,
    });

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Too many requests from this address. For security and spam prevention, please try again in a few minutes.",
          resetTimeMs: rateLimit.resetTimeMs,
        },
        { status: 429 }
      );
    }

    // 3. Parse JSON body
    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON payload." },
        { status: 400 }
      );
    }

    // 4. Validate with Zod
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      const fieldErrors: Record<string, string> = {};
      validationResult.error.issues.forEach((err) => {
        const fieldName = err.path[0]?.toString() || "form";
        if (!fieldErrors[fieldName]) {
          fieldErrors[fieldName] = err.message;
        }
      });

      return NextResponse.json(
        {
          success: false,
          error: "Validation failed. Please review the highlighted fields.",
          fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // 5. Anti-spam honeypot detection
    if (data.websiteUrlHoneypot && data.websiteUrlHoneypot.length > 0) {
      // Silently reject bot submissions without disclosing detection mechanism
      return NextResponse.json(
        { success: false, error: "Submission could not be processed." },
        { status: 400 }
      );
    }

    // 6. Check if email provider is configured
    if (!isEmailConfigured()) {
      return NextResponse.json(
        {
          success: false,
          isConfigured: false,
          error:
            "Email integration is not configured on this environment (missing RESEND_API_KEY / SMTP variables). To prevent message loss, submissions cannot be accepted until destination credentials are set.",
        },
        { status: 503 }
      );
    }

    // 7. Dispatch email
    const dispatchResult = await sendContactEmail(data, clientIp);

    if (!dispatchResult.success) {
      return NextResponse.json(
        {
          success: false,
          isConfigured: dispatchResult.isConfigured,
          error: dispatchResult.error || "Failed to deliver message.",
        },
        { status: 502 }
      );
    }

    // 8. Return success confirmation with reference
    const referenceId = `SYN-${Date.now().toString(36).toUpperCase()}`;
    return NextResponse.json(
      {
        success: true,
        referenceId,
        message:
          "Thank you for reaching out to Synora Technologies. Your inquiry has been received and routed to our team.",
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    // Avoid returning internal stack traces to clients
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected server error occurred while processing your request.",
      },
      { status: 500 }
    );
  }
}
