"use client";

import React, { useState } from "react";
import Link from "next/link";
import { contactFormSchema, ContactFormData } from "@/lib/validations/contact";
import {
  Send,
  CheckCircle2,
  AlertTriangle,
  Loader2,
  Mail,
  Building2,
  User,
  Briefcase,
  HelpCircle,
  FileText,
  ShieldCheck,
} from "lucide-react";

interface FormState {
  fullName: string;
  workEmail: string;
  companyName: string;
  role: string;
  areaOfInterest: ContactFormData["areaOfInterest"];
  message: string;
  consent: boolean;
  websiteUrlHoneypot: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    workEmail: "",
    companyName: "",
    role: "",
    areaOfInterest: "custom-workflow",
    message: "",
    consent: false,
    websiteUrlHoneypot: "",
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    referenceId: string;
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear specific field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError(null);
    setFieldErrors({});

    // 1. Client-side Zod validation
    const clientValidation = contactFormSchema.safeParse(formData);
    if (!clientValidation.success) {
      const errors: Record<string, string> = {};
      clientValidation.error.issues.forEach((err) => {
        const field = err.path[0]?.toString() || "form";
        if (!errors[field]) {
          errors[field] = err.message;
        }
      });
      setFieldErrors(errors);
      setGeneralError("Please review and resolve the errors indicated below.");
      return;
    }

    // 2. Submit to Server
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        if (result.fieldErrors) {
          setFieldErrors(result.fieldErrors);
        }
        setGeneralError(
          result.error ||
            "Unable to submit inquiry. Please check your network and try again."
        );
        return;
      }

      // Success
      setSubmittedData({
        referenceId: result.referenceId || "SYN-REC",
        message: result.message,
      });
    } catch {
      setGeneralError(
        "Network connection failure. Please verify your internet connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submittedData) {
    return (
      <div className="p-8 sm:p-10 rounded-2xl bg-deep-slate/90 border border-emerald-500/30 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h3 className="font-heading text-2xl font-bold text-white">
            Inquiry Successfully Transmitted
          </h3>
          <p className="text-slate-300 max-w-md mx-auto text-sm leading-relaxed">
            {submittedData.message}
          </p>
        </div>

        <div className="inline-block px-4 py-2 rounded-lg bg-midnight border border-slate-700 font-mono text-xs text-soft-periwinkle">
          Reference ID: <span className="font-bold text-white">{submittedData.referenceId}</span>
        </div>

        <p className="text-xs text-slate-400 max-w-sm mx-auto">
          An engineer or operations specialist from Synora Technologies will review
          your operational requirements and respond to your work email.
        </p>

        <div className="pt-2">
          <button
            type="button"
            onClick={() => {
              setSubmittedData(null);
              setFormData({
                fullName: "",
                workEmail: "",
                companyName: "",
                role: "",
                areaOfInterest: "custom-workflow",
                message: "",
                consent: false,
                websiteUrlHoneypot: "",
              });
            }}
            className="text-xs font-semibold text-soft-periwinkle hover:text-white underline underline-offset-4"
          >
            Submit another inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="p-6 sm:p-8 rounded-2xl bg-deep-slate/90 border border-slate-700/60 shadow-xl space-y-6"
    >
      {/* General Error Banner */}
      {generalError && (
        <div
          role="alert"
          className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-red-300 text-sm"
        >
          <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5 text-red-400" />
          <div className="space-y-1">
            <p className="font-semibold text-red-200">Submission Notice</p>
            <p className="text-xs text-red-300/90 leading-relaxed">
              {generalError}
            </p>
          </div>
        </div>
      )}

      {/* Honeypot field (hidden from legitimate users, catches spam bots) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="websiteUrlHoneypot">Leave this blank</label>
        <input
          id="websiteUrlHoneypot"
          type="text"
          name="websiteUrlHoneypot"
          value={formData.websiteUrlHoneypot || ""}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div className="space-y-2">
          <label
            htmlFor="fullName"
            className="block text-xs font-semibold text-slate-300 uppercase tracking-wider"
          >
            Full Name <span className="text-electric-indigo">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              maxLength={100}
              placeholder="e.g. Maya Sharma"
              value={formData.fullName || ""}
              onChange={handleChange}
              aria-invalid={Boolean(fieldErrors.fullName)}
              aria-describedby={fieldErrors.fullName ? "fullName-error" : undefined}
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-midnight border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                fieldErrors.fullName
                  ? "border-red-500/80 focus:border-red-500"
                  : "border-slate-700 focus:border-electric-indigo"
              }`}
            />
          </div>
          {fieldErrors.fullName && (
            <p id="fullName-error" className="text-xs text-red-400">
              {fieldErrors.fullName}
            </p>
          )}
        </div>

        {/* Work Email */}
        <div className="space-y-2">
          <label
            htmlFor="workEmail"
            className="block text-xs font-semibold text-slate-300 uppercase tracking-wider"
          >
            Work Email <span className="text-electric-indigo">*</span>
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="workEmail"
              name="workEmail"
              type="email"
              required
              maxLength={120}
              placeholder="e.g. maya@company.com"
              value={formData.workEmail || ""}
              onChange={handleChange}
              aria-invalid={Boolean(fieldErrors.workEmail)}
              aria-describedby={fieldErrors.workEmail ? "workEmail-error" : undefined}
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-midnight border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                fieldErrors.workEmail
                  ? "border-red-500/80 focus:border-red-500"
                  : "border-slate-700 focus:border-electric-indigo"
              }`}
            />
          </div>
          {fieldErrors.workEmail && (
            <p id="workEmail-error" className="text-xs text-red-400">
              {fieldErrors.workEmail}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Company Name */}
        <div className="space-y-2">
          <label
            htmlFor="companyName"
            className="block text-xs font-semibold text-slate-300 uppercase tracking-wider"
          >
            Company Name <span className="text-slate-500">(Optional)</span>
          </label>
          <div className="relative">
            <Building2 className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="companyName"
              name="companyName"
              type="text"
              maxLength={120}
              placeholder="e.g. Acme Enterprise"
              value={formData.companyName || ""}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-midnight border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-electric-indigo transition-colors"
            />
          </div>
        </div>

        {/* Role */}
        <div className="space-y-2">
          <label
            htmlFor="role"
            className="block text-xs font-semibold text-slate-300 uppercase tracking-wider"
          >
            Your Role <span className="text-slate-500">(Optional)</span>
          </label>
          <div className="relative">
            <Briefcase className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="role"
              name="role"
              type="text"
              maxLength={80}
              placeholder="e.g. VP Operations, CTO, Tech Lead"
              value={formData.role || ""}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-midnight border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-electric-indigo transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Area of Interest */}
      <div className="space-y-2">
        <label
          htmlFor="areaOfInterest"
          className="block text-xs font-semibold text-slate-300 uppercase tracking-wider"
        >
          Primary Area of Interest <span className="text-electric-indigo">*</span>
        </label>
        <div className="relative">
          <HelpCircle className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <select
            id="areaOfInterest"
            name="areaOfInterest"
            value={formData.areaOfInterest}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-midnight border border-slate-700 text-sm text-white focus:outline-none focus:border-electric-indigo transition-colors"
          >
            <option value="custom-workflow">Custom Operational Workflow Discussion</option>
            <option value="client-onboarding">Client Intake & Onboarding Automation</option>
            <option value="document-processing">Document Extraction & Reconciliation</option>
            <option value="system-integration">Cross-System ERP / CRM Orchestration</option>
            <option value="general-inquiry">General Corporate / Technical Inquiry</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label
            htmlFor="message"
            className="block text-xs font-semibold text-slate-300 uppercase tracking-wider"
          >
            Workflow Description or Inquiry <span className="text-electric-indigo">*</span>
          </label>
          <span className="text-[11px] text-slate-500">
            {(formData.message?.length || 0)} / 2500
          </span>
        </div>
        <div className="relative">
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            maxLength={2500}
            placeholder="Tell us about the business process, systems involved (e.g. SAP, Salesforce, Postgres, custom APIs), and current operational friction..."
            value={formData.message || ""}
            onChange={handleChange}
            aria-invalid={Boolean(fieldErrors.message)}
            aria-describedby={fieldErrors.message ? "message-error" : undefined}
            className={`w-full p-4 rounded-xl bg-midnight border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
              fieldErrors.message
                ? "border-red-500/80 focus:border-red-500"
                : "border-slate-700 focus:border-electric-indigo"
            }`}
          />
        </div>
        {fieldErrors.message && (
          <p id="message-error" className="text-xs text-red-400">
            {fieldErrors.message}
          </p>
        )}
      </div>

      {/* Privacy Consent Checkbox */}
      <div className="space-y-2">
        <label className="flex items-start gap-3 cursor-pointer select-none">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            checked={Boolean(formData.consent)}
            onChange={handleChange}
            aria-invalid={Boolean(fieldErrors.consent)}
            aria-describedby={fieldErrors.consent ? "consent-error" : undefined}
            className="mt-1 h-4 w-4 rounded border-slate-700 bg-midnight text-electric-indigo focus:ring-electric-indigo"
          />
          <span className="text-xs text-slate-400 leading-relaxed">
            I agree that Synora Technologies Private Limited may process my
            submitted contact details to respond to my operational inquiry in
            accordance with the{" "}
            <Link
              href="/privacy"
              target="_blank"
              className="text-soft-periwinkle hover:text-white underline underline-offset-2"
            >
              Privacy Policy
            </Link>
            .
          </span>
        </label>
        {fieldErrors.consent && (
          <p id="consent-error" className="text-xs text-red-400">
            {fieldErrors.consent}
          </p>
        )}
      </div>

      {/* Submit Action */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-electric-indigo hover:bg-indigo-600 disabled:bg-indigo-950 disabled:text-slate-500 rounded-xl shadow-lg shadow-indigo-600/25 transition-all duration-200 active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-electric-indigo"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Validating & Dispatching...</span>
            </>
          ) : (
            <>
              <span>Transmit Inquiry</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

      {/* Security note */}
      <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 text-center">
        <ShieldCheck className="w-4 h-4 text-slate-400" />
        <span>End-to-end encrypted transport &bull; Strict rate limits apply</span>
      </div>
    </form>
  );
}
