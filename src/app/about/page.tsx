import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Building2,
  ShieldCheck,
  Target,
  Eye,
  Layers,
  Cpu,
  ArrowRight,
  Sparkles,
  Compass,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Synora Technologies | Mission, Vision & Principles",
  description:
    "Learn about Synora Technologies Private Limited, our mission to build intelligent digital workers for real business operations, and our principles of operational reliability.",
  alternates: {
    canonical: "https://synoratech.in/about",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-midnight text-cloud-white">
      <Navbar />

      <main id="main-content" className="flex-grow">
        {/* Header */}
        <section className="relative overflow-hidden py-16 lg:py-24 bg-grid-pattern border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-deep-slate border border-slate-700 text-xs font-semibold uppercase tracking-wider text-soft-periwinkle">
                <Compass className="w-3.5 h-3.5 text-electric-indigo" />
                Corporate Profile
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Engineering Intelligent Digital Workers for Real Operations
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                Synora Technologies Private Limited is an enterprise technology
                company developing a dependable Digital Workforce platform designed
                to execute business processes with precision, security, and oversight.
              </p>
              <div className="pt-2 text-xs font-mono text-slate-400">
                Founded with a focus on workflow execution over superficial conversation.
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-deep-slate/30 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Mission */}
              <div className="p-8 rounded-2xl bg-midnight/90 border border-slate-800 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-electric-indigo/10 border border-indigo-500/20 flex items-center justify-center text-electric-indigo">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-white">
                  Our Mission
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  To bridge the divide between modern artificial intelligence and
                  daily enterprise operations by building coordinated, reliable
                  Digital Employees that get real work done safely within existing
                  corporate infrastructure.
                </p>
              </div>

              {/* Long-term Vision */}
              <div className="p-8 rounded-2xl bg-midnight/90 border border-slate-800 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-electric-indigo/10 border border-indigo-500/20 flex items-center justify-center text-electric-indigo">
                  <Eye className="w-6 h-6" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-white">
                  Our Long-Term Vision
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  We envision an enterprise operating model where skilled human teams
                  are freed from mechanical coordination and repetitive data friction,
                  orchestrating a dependable digital workforce with complete
                  transparency, control, and auditability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Design Principles */}
        <section className="py-24 bg-midnight">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-soft-periwinkle">
                Engineering Tenets
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
                Core Design Principles
              </h2>
              <p className="text-base sm:text-lg text-slate-300">
                The foundational decisions that guide how we architect our platform
                and write our software.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-7 rounded-2xl bg-deep-slate/50 border border-slate-800 space-y-3">
                <span className="font-mono text-xs text-soft-periwinkle font-semibold">
                  PRINCIPLE 01
                </span>
                <h3 className="font-heading text-lg font-bold text-white">
                  Reliability Over Novelty
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Enterprise operations cannot gamble on unpredictable generative
                  hallucinations. We prioritize deterministic state machines,
                  schema validation, and retry guarantees over flashy, unbounded autonomy.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-deep-slate/50 border border-slate-800 space-y-3">
                <span className="font-mono text-xs text-soft-periwinkle font-semibold">
                  PRINCIPLE 02
                </span>
                <h3 className="font-heading text-lg font-bold text-white">
                  Human-in-the-Loop Governance
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Autonomous capabilities require unambiguous operational boundaries.
                  Synora is built from the ground up with mandatory human approval
                  gates for high-risk actions, anomaly flags, and policy thresholds.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-deep-slate/50 border border-slate-800 space-y-3">
                <span className="font-mono text-xs text-soft-periwinkle font-semibold">
                  PRINCIPLE 03
                </span>
                <h3 className="font-heading text-lg font-bold text-white">
                  Minimal Disruption to Existing Stack
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Enterprises shouldn’t need to rip and replace their software to
                  benefit from digital workers. Our platform connects securely to your
                  existing databases, ERPs, CRMs, and APIs via authenticated adapters.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-deep-slate/50 border border-slate-800 space-y-3">
                <span className="font-mono text-xs text-soft-periwinkle font-semibold">
                  PRINCIPLE 04
                </span>
                <h3 className="font-heading text-lg font-bold text-white">
                  Deterministic Auditability
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Every decision, input payload, external call, and status transition
                  is recorded with cryptographic integrity. When an auditor or
                  engineer needs to inspect what happened, the full trail is clear.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-deep-slate/50 border border-slate-800 space-y-3">
                <span className="font-mono text-xs text-soft-periwinkle font-semibold">
                  PRINCIPLE 05
                </span>
                <h3 className="font-heading text-lg font-bold text-white">
                  Bounded Authority & Least Privilege
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Digital workers do not possess blanket credentials. Each worker is
                  assigned an isolated role with narrow API scopes, preventing
                  lateral movement or unauthorized actions across systems.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-deep-slate/50 border border-slate-800 space-y-3">
                <span className="font-mono text-xs text-soft-periwinkle font-semibold">
                  PRINCIPLE 06
                </span>
                <h3 className="font-heading text-lg font-bold text-white">
                  Operational Transparency
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  We believe in truthful engineering. We communicate our verified
                  functionality, active development stages, and roadmap milestones
                  clearly without inflated claims or unverified certifications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Responsible AI & Operational Reliability Philosophy */}
        <section className="py-20 bg-deep-slate/30 border-y border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="text-center space-y-3 mb-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-soft-periwinkle">
                Operational Philosophy
              </span>
              <h2 className="font-heading text-3xl font-bold text-white">
                Responsible AI & Operational Reliability
              </h2>
            </div>

            <div className="p-8 rounded-2xl bg-midnight/90 border border-slate-800 space-y-4 text-sm text-slate-300 leading-relaxed">
              <p>
                At Synora Technologies, we distinguish sharply between exploratory
                creative AI and operational execution AI. In mission-critical
                workflows—such as billing, invoice processing, patient intake, or
                cross-database synchronization—an error is not an acceptable creative
                quirk; it is an operational failure.
              </p>
              <p>
                Our philosophy centers on <strong className="text-white">supervised autonomy</strong>.
                AI models should be utilized for their strengths—pattern recognition,
                document parsing, entity extraction, and schema mapping—while
                deterministic workflow engines, transactional ledgers, and human
                supervisors govern policy decisions, state changes, and external side effects.
              </p>
              <p>
                By keeping data within strict tenancy boundaries, enforcing
                least-privilege credential isolation, and providing intuitive human
                review queues, Synora delivers the productivity of AI without
                sacrificing compliance, security, or peace of mind.
              </p>
            </div>
          </div>
        </section>

        {/* Corporate Legal Identity */}
        <section className="py-20 bg-midnight">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 rounded-2xl bg-deep-slate/40 border border-slate-800 space-y-5">
              <h3 className="font-heading text-lg font-bold text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-electric-indigo" />
                Corporate Entity Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
                <div className="p-4 rounded-xl bg-midnight/80 border border-slate-800 space-y-1">
                  <span className="text-slate-500 uppercase font-mono block">
                    Full Legal Entity
                  </span>
                  <span className="font-bold text-white">
                    Synora Technologies Private Limited
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-midnight/80 border border-slate-800 space-y-1">
                  <span className="text-slate-500 uppercase font-mono block">
                    Jurisdiction
                  </span>
                  <span className="font-bold text-white">India</span>
                </div>

                <div className="p-4 rounded-xl bg-midnight/80 border border-slate-800 space-y-1">
                  <span className="text-slate-500 uppercase font-mono block">
                    Official Domain
                  </span>
                  <span className="font-mono text-soft-periwinkle font-semibold">
                    https://synoratech.in
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-midnight/80 border border-slate-800 space-y-1">
                  <span className="text-slate-500 uppercase font-mono block">
                    Corporate Contact
                  </span>
                  <span className="font-mono text-soft-periwinkle font-semibold">
                    sales@synoratech.in
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-12 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-electric-indigo hover:bg-indigo-600 rounded-xl shadow-md transition-all"
              >
                <span>Discuss Partnership or Platform Inquiries</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
