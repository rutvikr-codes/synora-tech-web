import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ShieldCheck, AlertCircle, Mail, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Synora Technologies Private Limited",
  description:
    "Privacy policy for Synora Technologies Private Limited describing how we collect, process, and safeguard information submitted through synoratech.in.",
  alternates: {
    canonical: "https://synoratech.in/privacy",
  },
};

export default function PrivacyPage() {
  const lastUpdated = "October 2026";

  return (
    <div className="flex flex-col min-h-screen bg-midnight text-cloud-white">
      <Navbar />

      <main id="main-content" className="flex-grow py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Header */}
          <div className="space-y-4 border-b border-slate-800 pb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-soft-periwinkle hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              Website Privacy Policy
            </h1>
            <p className="text-sm text-slate-400">
              Synora Technologies Private Limited &bull; Last updated: {lastUpdated}
            </p>
          </div>

          {/* Legal Notice Callout */}
          <div className="p-5 rounded-xl bg-indigo-950/30 border border-indigo-500/30 flex items-start gap-3 text-xs text-slate-300">
            <AlertCircle className="w-5 h-5 text-soft-periwinkle shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block mb-1">
                Notice on Corporate Legal Review
              </strong>
              <span>
                This privacy policy draft accurately reflects the technical data
                collection and operational practices of the Synora website
                (https://synoratech.in). Certain company-specific administrative
                identifiers (such as registered CIN or designated Grievance Officer
                formal appointment details) are flagged for formal legal review prior
                to final commercial contract execution.
              </span>
            </div>
          </div>

          {/* Privacy Content Sections */}
          <div className="space-y-8 text-sm text-slate-300 leading-relaxed">
            {/* Section 1: Overview */}
            <section className="space-y-3">
              <h2 className="font-heading text-xl font-bold text-white">
                1. Introduction and Scope
              </h2>
              <p>
                Synora Technologies Private Limited (&ldquo;Synora&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;)
                is committed to respecting your privacy and protecting personal data
                collected via our website at{" "}
                <span className="text-soft-periwinkle font-mono">https://synoratech.in</span>.
              </p>
              <p>
                This policy explains what information we collect when you browse our
                website or reach out to discuss operational workflows, why we collect
                it, how we handle it, and your legal rights regarding your data.
              </p>
            </section>

            {/* Section 2: Data Collected */}
            <section className="space-y-3">
              <h2 className="font-heading text-xl font-bold text-white">
                2. Information We Collect
              </h2>
              <p>We collect information in two main categories:</p>
              <ul className="list-disc pl-5 space-y-2 text-slate-400">
                <li>
                  <strong className="text-slate-200">Information You Provide Directly:</strong>{" "}
                  When you submit an inquiry through our contact form, we collect your
                  full name, work email address, company name, professional role,
                  area of operational interest, and the text of your inquiry message.
                </li>
                <li>
                  <strong className="text-slate-200">Technical & Telemetry Data:</strong>{" "}
                  For security, rate limiting, and spam prevention, our server infrastructure
                  records standard HTTP request telemetry, including client IP addresses,
                  browser user-agent strings, and request timestamps.
                </li>
              </ul>
              <p className="text-xs text-slate-400 italic">
                Note: We do not collect payment information, sensitive health data, or
                personal identification numbers on this informational corporate website.
              </p>
            </section>

            {/* Section 3: Purpose of Processing */}
            <section className="space-y-3">
              <h2 className="font-heading text-xl font-bold text-white">
                3. Purpose of Processing
              </h2>
              <p>We process collected information solely for legitimate business purposes:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
                <li>Responding to your inquiries and technical questions regarding the Synora Digital Workforce platform.</li>
                <li>Conducting preliminary architectural reviews for prospective enterprise pilots and collaborations.</li>
                <li>Protecting our servers and web applications against automated abuse, denial of service, and malicious form submissions.</li>
                <li>Complying with applicable legal, accounting, and regulatory obligations in India.</li>
              </ul>
            </section>

            {/* Section 4: Data Retention */}
            <section className="space-y-3">
              <h2 className="font-heading text-xl font-bold text-white">
                4. Data Retention
              </h2>
              <p>
                Contact form inquiries and associated communication logs are retained
                only for as long as necessary to fulfill the business inquiry and
                maintain appropriate enterprise correspondence records (typically up
                to 24 months, unless a commercial engagement ensues or a longer retention
                period is required by law). Technical server logs for rate limiting are
                ephemeral and discarded periodically.
              </p>
            </section>

            {/* Section 5: Third-Party Processors */}
            <section className="space-y-3">
              <h2 className="font-heading text-xl font-bold text-white">
                5. Third-Party Service Providers
              </h2>
              <p>
                We do not sell, rent, or trade your personal information. We may utilize
                reputable third-party infrastructure providers to operate our website:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
                <li>
                  <strong className="text-slate-200">Hosting & Edge Network:</strong> Cloud hosting
                  and edge delivery providers (such as Vercel) to deliver static assets and process API routes securely.
                </li>
                <li>
                  <strong className="text-slate-200">Transactional Email Dispatch:</strong> Authenticated
                  email delivery providers (such as Resend or enterprise SMTP relays) to transmit contact form inquiries to our designated team mailbox.
                </li>
              </ul>
            </section>

            {/* Section 6: Security Safeguards */}
            <section className="space-y-3">
              <h2 className="font-heading text-xl font-bold text-white">
                6. Security Practices
              </h2>
              <p>
                We employ technical safeguards appropriate to the nature of the data,
                including HTTPS/TLS 1.3 encryption in transit, strict Content Security
                Policies, input sanitization, automated rate limiting, and credential
                isolation. While no online transmission is 100% immune from compromise,
                we design our systems to minimize vulnerability.
              </p>
            </section>

            {/* Section 7: User Rights */}
            <section className="space-y-3">
              <h2 className="font-heading text-xl font-bold text-white">
                7. Your Rights & Privacy Requests
              </h2>
              <p>
                Depending on your jurisdiction, you may have the right to request access
                to, correction of, or deletion of personal information you have
                submitted to us. To exercise these rights, please contact us at:
              </p>
              <div className="p-4 rounded-xl bg-midnight border border-slate-800 font-mono text-xs text-soft-periwinkle">
                Email: privacy@synoratech.in &bull; Subject: Privacy Data Request
              </div>
            </section>

            {/* Section 8: Corporate Identity */}
            <section className="space-y-3 border-t border-slate-800 pt-6">
              <h2 className="font-heading text-xl font-bold text-white">
                8. Contact Information
              </h2>
              <p>
                <strong className="text-white">Synora Technologies Private Limited</strong>
                <br />
                Jurisdiction: India
                <br />
                Official Website: https://synoratech.in
                <br />
                Corporate Inquiries: sales@synoratech.in
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
