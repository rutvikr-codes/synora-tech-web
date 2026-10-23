import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/contact/ContactForm";
import {
  Mail,
  Building,
  ShieldAlert,
  Clock,
  Sparkles,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Discuss Your Use Case | Contact Synora Technologies",
  description:
    "Connect with the engineering and operations team at Synora Technologies to discuss digital worker orchestration for your business processes.",
  alternates: {
    canonical: "https://synoratech.in/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-midnight text-cloud-white">
      <Navbar />

      <main id="main-content" className="flex-grow py-16 lg:py-24 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-deep-slate border border-slate-700 text-xs font-semibold uppercase tracking-wider text-soft-periwinkle">
              <Sparkles className="w-3.5 h-3.5 text-electric-indigo" />
              Direct Engagement
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Discuss Your Operational Use Case
            </h1>
            <p className="text-base sm:text-lg text-slate-300">
              Tell us about the workflows you want to modernize. We collaborate
              directly with technology and operations leaders during our enterprise
              platform rollout.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
            {/* Left Column: Context & Expectations */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-7 rounded-2xl bg-deep-slate/80 border border-slate-700/60 space-y-5">
                <h2 className="font-heading text-xl font-bold text-white">
                  What to Expect
                </h2>

                <ul className="space-y-4 text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-electric-indigo shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block">
                        Technical Workflow Review
                      </span>
                      <span className="text-xs text-slate-400">
                        We analyze your process steps, integrations, and human
                        approval points.
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-electric-indigo shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block">
                        Platform Alignment
                      </span>
                      <span className="text-xs text-slate-400">
                        Honest evaluation of which capabilities are current MVP
                        vs. upcoming roadmap milestones.
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-electric-indigo shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block">
                        No Sales Pressure
                      </span>
                      <span className="text-xs text-slate-400">
                        Direct conversation with software architects focused on
                        real operations.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Corporate Identity & Inquiries */}
              <div className="p-7 rounded-2xl bg-deep-slate/40 border border-slate-800 space-y-4 text-sm">
                <h3 className="font-heading text-base font-bold text-white flex items-center gap-2">
                  <Building className="w-4 h-4 text-soft-periwinkle" />
                  Corporate Information
                </h3>
                <div className="space-y-2 text-xs text-slate-400 leading-relaxed">
                  <p>
                    <strong className="text-slate-300">Entity:</strong> Synora
                    Technologies Private Limited
                  </p>
                  <p>
                    <strong className="text-slate-300">Registered In:</strong>{" "}
                    India
                  </p>
                  <p>
                    <strong className="text-slate-300">Corporate Domain:</strong>{" "}
                    <span className="font-mono text-soft-periwinkle">
                      https://synoratech.in
                    </span>
                  </p>
                  <p>
                    <strong className="text-slate-300">Inquiry Routing:</strong>{" "}
                    <span className="font-mono text-soft-periwinkle">
                      sales@synoratech.in
                    </span>
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-500 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Responses typically dispatched within 1-2 business days</span>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
