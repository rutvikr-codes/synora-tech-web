import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FileText, AlertCircle, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Use | Synora Technologies Private Limited",
  description:
    "Terms of use governing access to the informational website of Synora Technologies Private Limited (synoratech.in).",
  alternates: {
    canonical: "https://synoratech.in/terms",
  },
};

export default function TermsPage() {
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
              Terms of Use
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
                Informational Terms Draft
              </strong>
              <span>
                These terms govern your use of the corporate informational website
                (https://synoratech.in). This draft does not constitute bespoke legal
                counsel. Terms for pilot deployments, software licensing, or enterprise
                Master Services Agreements (MSAs) are executed separately via bilateral
                commercial contracts.
              </span>
            </div>
          </div>

          {/* Terms Content Sections */}
          <div className="space-y-8 text-sm text-slate-300 leading-relaxed">
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="font-heading text-xl font-bold text-white">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or browsing this website, you agree to be bound by these
                Terms of Use and our Privacy Policy. If you do not agree to these
                terms, please discontinue your use of this site.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="font-heading text-xl font-bold text-white">
                2. Informational Purpose & Product Development Notice
              </h2>
              <p>
                The materials and architectural descriptions presented on this website
                are for general informational and exploratory purposes regarding Synora
                Technologies Private Limited&rsquo;s Digital Workforce platform.
              </p>
              <p>
                Synora is actively developing its MVP platform. Platform capabilities,
                connector catalogs, and development roadmap milestones are subject to
                engineering updates without prior notice. Presentation of conceptual
                workflows on this website does not constitute a warranty of general
                commercial availability or a binding offer of contract.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="font-heading text-xl font-bold text-white">
                3. Intellectual Property Rights
              </h2>
              <p>
                All original content on this website, including but not limited to the
                Synora geometric mark, wordmark, graphic illustrations, workflow
                visualizations, software architecture documentation, and codebase, is
                the proprietary intellectual property of Synora Technologies Private
                Limited or its licensors.
              </p>
              <p>
                You may not copy, reproduce, scrape, mirror, or redistribute any brand
                assets or website materials without express prior written consent from
                Synora Technologies Private Limited.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="font-heading text-xl font-bold text-white">
                4. Acceptable Use
              </h2>
              <p>
                You agree to use this website in a lawful manner. Specifically, you agree not to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
                <li>Submit false, fraudulent, or deceptive inquiries through the contact forms.</li>
                <li>Attempt to bypass rate limits, probe endpoints, or interfere with web infrastructure.</li>
                <li>Transmit malicious code, viruses, or spam payloads.</li>
                <li>Use automated bots or scripts to harvest email addresses or intellectual property.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="font-heading text-xl font-bold text-white">
                5. Disclaimer of Warranties
              </h2>
              <p>
                This website and its contents are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
                basis without warranties of any kind, whether express or implied, including
                warranties of merchantability, fitness for a particular purpose, or non-infringement.
                Synora does not warrant that the website will be uninterrupted or error-free.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="font-heading text-xl font-bold text-white">
                6. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by applicable law, Synora Technologies
                Private Limited and its officers, directors, and employees shall not be liable
                for any direct, indirect, incidental, or consequential damages resulting from
                your access to or inability to access this informational website.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-3">
              <h2 className="font-heading text-xl font-bold text-white">
                7. Governing Law and Jurisdiction
              </h2>
              <p>
                These Terms of Use shall be governed by and construed in accordance with
                the laws of India, without regard to conflict of law principles. Any
                disputes arising in connection with this website shall be subject to the
                exclusive jurisdiction of the courts situated in India.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-3 border-t border-slate-800 pt-6">
              <h2 className="font-heading text-xl font-bold text-white">
                8. Contact & Legal Notices
              </h2>
              <p>
                For questions regarding these Terms of Use, please direct inquiries to:
                <br />
                <span className="font-mono text-soft-periwinkle">
                  legal@synoratech.in
                </span>{" "}
                or{" "}
                <span className="font-mono text-soft-periwinkle">
                  sales@synoratech.in
                </span>
                <br />
                Synora Technologies Private Limited
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
