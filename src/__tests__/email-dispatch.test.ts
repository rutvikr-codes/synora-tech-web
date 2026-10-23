import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { isEmailConfigured, sendContactEmail } from "../lib/email";
import { ContactFormData } from "../lib/validations/contact";

describe("Email Dispatcher & Configuration Verification", () => {
  const dummyPayload: ContactFormData = {
    fullName: "Test Sender",
    workEmail: "test@example.com",
    areaOfInterest: "custom-workflow",
    message: "Verifying that unconfigured email returns truthful error status.",
    consent: true,
  };

  it("should accurately report when email environment variables are absent", () => {
    // Preserve original env
    const origKey = process.env.RESEND_API_KEY;
    const origHost = process.env.SMTP_HOST;
    delete process.env.RESEND_API_KEY;
    delete process.env.SMTP_HOST;

    const configured = isEmailConfigured();
    assert.equal(configured, false);

    // Restore
    if (origKey) process.env.RESEND_API_KEY = origKey;
    if (origHost) process.env.SMTP_HOST = origHost;
  });

  it("should refuse to dispatch and report truthful unconfigured error when credentials are missing", async () => {
    const origKey = process.env.RESEND_API_KEY;
    const origHost = process.env.SMTP_HOST;
    delete process.env.RESEND_API_KEY;
    delete process.env.SMTP_HOST;

    const result = await sendContactEmail(dummyPayload, "127.0.0.1");

    assert.equal(result.success, false);
    assert.equal(result.isConfigured, false);
    assert.match(result.error || "", /missing RESEND_API_KEY or SMTP credentials/i);

    // Restore
    if (origKey) process.env.RESEND_API_KEY = origKey;
    if (origHost) process.env.SMTP_HOST = origHost;
  });
});
