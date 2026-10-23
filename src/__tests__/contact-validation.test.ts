import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { contactFormSchema } from "../lib/validations/contact";

describe("Contact Form Schema Validation", () => {
  const validPayload = {
    fullName: "Arjun Verma",
    workEmail: "arjun@enterprise.com",
    companyName: "Acme Logistics",
    role: "Director of Operations",
    areaOfInterest: "custom-workflow" as const,
    message: "We need to automate client onboarding and PO reconciliation across our internal databases.",
    consent: true as const,
    websiteUrlHoneypot: "",
  };

  it("should successfully validate valid contact payload", () => {
    const result = contactFormSchema.safeParse(validPayload);
    assert.equal(result.success, true);
    if (result.success) {
      assert.equal(result.data.fullName, "Arjun Verma");
      assert.equal(result.data.workEmail, "arjun@enterprise.com");
      assert.equal(result.data.consent, true);
    }
  });

  it("should allow optional company name and role to be omitted or empty", () => {
    const minimalPayload = {
      fullName: "Priya Nair",
      workEmail: "priya@nairtech.in",
      areaOfInterest: "client-onboarding" as const,
      message: "Looking for information on your Digital Workforce platform.",
      consent: true as const,
    };
    const result = contactFormSchema.safeParse(minimalPayload);
    assert.equal(result.success, true);
  });

  it("should reject full names shorter than 2 characters", () => {
    const invalid = { ...validPayload, fullName: "A" };
    const result = contactFormSchema.safeParse(invalid);
    assert.equal(result.success, false);
    if (!result.success) {
      assert.match(result.error.issues[0].message, /at least 2 characters/i);
    }
  });

  it("should reject invalid email formats", () => {
    const invalidEmails = [
      "notanemail",
      "missingatsign.com",
      "@nodomain.com",
      "spaces in@domain.com",
    ];

    for (const email of invalidEmails) {
      const result = contactFormSchema.safeParse({
        ...validPayload,
        workEmail: email,
      });
      assert.equal(result.success, false, `Expected ${email} to fail validation`);
    }
  });

  it("should reject messages shorter than 10 characters", () => {
    const invalid = { ...validPayload, message: "Too short" };
    const result = contactFormSchema.safeParse(invalid);
    assert.equal(result.success, false);
    if (!result.success) {
      assert.match(result.error.issues[0].message, /at least 10 characters/i);
    }
  });

  it("should reject submissions when privacy consent is false", () => {
    const invalid = { ...validPayload, consent: false };
    const result = contactFormSchema.safeParse(invalid);
    assert.equal(result.success, false);
    if (!result.success) {
      assert.match(result.error.issues[0].message, /consent/i);
    }
  });

  it("should catch and reject honeypot submissions when bot populates websiteUrlHoneypot", () => {
    const botPayload = {
      ...validPayload,
      websiteUrlHoneypot: "https://spam-bot-promoter.com",
    };
    const result = contactFormSchema.safeParse(botPayload);
    assert.equal(result.success, false);
    if (!result.success) {
      assert.match(result.error.issues[0].message, /bot detected/i);
    }
  });

  it("should validate all allowable areaOfInterest options", () => {
    const validAreas = [
      "client-onboarding",
      "document-processing",
      "system-integration",
      "custom-workflow",
      "general-inquiry",
    ] as const;

    for (const area of validAreas) {
      const result = contactFormSchema.safeParse({
        ...validPayload,
        areaOfInterest: area,
      });
      assert.equal(result.success, true, `Expected ${area} to be valid`);
    }

    const invalidArea = contactFormSchema.safeParse({
      ...validPayload,
      areaOfInterest: "unsupported-area",
    });
    assert.equal(invalidArea.success, false);
  });
});
