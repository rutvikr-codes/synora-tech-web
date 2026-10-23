import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WorkflowHeroVisual } from "@/components/home/WorkflowHeroVisual";
import {
  ArrowRight,
  Bot,
  Workflow,
  ShieldCheck,
  Cpu,
  Layers,
  Network,
  Activity,
  Lock,
  GitFork,
  FileCheck2,
  RefreshCw,
  Building2,
  AlertCircle,
  Eye,
  Sliders,
  CheckCircle2,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-midnight text-cloud-white">
      <Navbar />

      <main id="main-content" className="flex-grow">
        {/* =========================================================================
            HERO SECTION
            ========================================================================= */}
        <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 bg-grid-pattern">
          {/* Subtle atmospheric radial lighting */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-radial-glow pointer-events-none" />
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-radial-periwinkle pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Hero Copy */}
              <div className="lg:col-span-7 space-y-6 text-left">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-deep-slate border border-slate-700/80 text-xs font-semibold tracking-wider text-soft-periwinkle uppercase">
                  <span className="w-2 h-2 rounded-full bg-electric-indigo animate-pulse"></span>
                  THE DIGITAL WORKFORCE
                </div>

                {/* Primary Headline */}
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                  Meet the <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-soft-periwinkle to-electric-indigo">
                    Digital Workforce.
                  </span>
                </h1>

                {/* Supporting Statement */}
                <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
                  Build, orchestrate, and operate Digital Employees designed to
                  help your business get work done. Move beyond disconnected AI
                  assistants toward coordinated digital workers that execute
                  defined business processes with appropriate controls and
                  oversight.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <Link
                    href="/platform"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-electric-indigo hover:bg-indigo-600 rounded-xl shadow-lg shadow-indigo-600/25 transition-all duration-200 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-electric-indigo focus-visible:ring-offset-midnight"
                  >
                    <span>Explore the Platform</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-cloud-white bg-deep-slate/80 hover:bg-deep-slate border border-slate-700 hover:border-slate-600 rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                  >
                    <span>Discuss Your Use Case</span>
                  </Link>
                </div>

                {/* Honest Positioning Indicator */}
                <div className="pt-4 flex items-center gap-3 text-xs text-slate-400">
                  <span className="inline-block w-2 h-2 rounded-full bg-indigo-400"></span>
                  <span>
                    Synora Technologies Private Limited &bull; Enterprise MVP in Active Development
                  </span>
                </div>
              </div>

              {/* Hero Visual Architecture */}
              <div className="lg:col-span-5 w-full">
                <WorkflowHeroVisual />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            PROBLEM STATEMENT SECTION
            ========================================================================= */}
        <section className="py-20 bg-deep-slate/40 border-y border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-soft-periwinkle">
                The Operational Bottleneck
              </h2>
              <h3 className="font-heading text-3xl sm:text-4xl font-bold text-cloud-white">
                Work Is Trapped Between Isolated Tools and Manual Handoffs
              </h3>
              <p className="text-base sm:text-lg text-slate-300">
                Enterprises have invested in dozens of SaaS applications and
                conversational AI tools. Yet routine execution remains stuck in
                manual copy-paste loops and disconnected chats.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-7 rounded-2xl bg-midnight/90 border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-5">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <h4 className="font-heading text-lg font-semibold text-white mb-2">
                  Fragile Manual Handoffs
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Teams spend critical hours transferring unstructured records,
                  validating receipts, and manually keying numbers across ERPs,
                  CRMs, and ticketing systems.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-midnight/90 border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5">
                  <Bot className="w-6 h-6" />
                </div>
                <h4 className="font-heading text-lg font-semibold text-white mb-2">
                  Isolated AI Assistants
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  General conversational bots generate text but lack state
                  persistence, transactional boundaries, and permission models
                  to reliably execute business actions.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-midnight/90 border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-soft-periwinkle mb-5">
                  <GitFork className="w-6 h-6" />
                </div>
                <h4 className="font-heading text-lg font-semibold text-white mb-2">
                  Lack of Auditable Governance
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  When automation breaks, ops leaders lack step-level visibility,
                  durable job recovery, and clear human approval gates to ensure
                  compliance and correctness.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            INTRODUCING THE DIGITAL WORKFORCE: ARCHITECTURAL DISTINCTION
            ========================================================================= */}
        <section className="py-24 bg-midnight">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-soft-periwinkle">
                Clear Differentiation
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
                Conversational Assistants vs. Digital Employees
              </h2>
              <p className="text-base sm:text-lg text-slate-300">
                Understanding the architectural transition from open-ended chatbots to
                deterministic, orchestrated digital workers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Conventional Chatbot */}
              <div className="p-8 rounded-2xl bg-deep-slate/40 border border-slate-800">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-slate-300">
                      Conversational Chatbots
                    </h3>
                    <p className="text-xs text-slate-500">
                      Ad-hoc interaction layer
                    </p>
                  </div>
                </div>

                <ul className="space-y-4 text-sm text-slate-400">
                  <li className="flex items-start gap-3">
                    <span className="text-slate-600 mt-1 font-mono">&times;</span>
                    <span>Primarily produces text responses to human prompts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-600 mt-1 font-mono">&times;</span>
                    <span>Ephemeral chat memory; no durable transactional state</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-600 mt-1 font-mono">&times;</span>
                    <span>Cannot reliably orchestrate multi-step cross-system workflows</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-600 mt-1 font-mono">&times;</span>
                    <span>Limited auditability and no structured human review checkpoints</span>
                  </li>
                </ul>
              </div>

              {/* Synora Digital Worker */}
              <div className="p-8 rounded-2xl bg-gradient-to-b from-deep-slate to-slate-900/90 border border-electric-indigo/40 shadow-xl shadow-indigo-950/20 relative">
                <div className="absolute top-4 right-4">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-electric-indigo/20 text-soft-periwinkle border border-electric-indigo/30">
                    Synora Approach
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-electric-indigo/20 flex items-center justify-center text-electric-indigo">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white">
                      Synora Digital Employees
                    </h3>
                    <p className="text-xs text-soft-periwinkle">
                      Enterprise workflow execution
                    </p>
                  </div>
                </div>

                <ul className="space-y-4 text-sm text-slate-200">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-electric-indigo shrink-0 mt-0.5" />
                    <span>Executes defined multi-step operational procedures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-electric-indigo shrink-0 mt-0.5" />
                    <span>Durable job management with state persistence & restartability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-electric-indigo shrink-0 mt-0.5" />
                    <span>Role-based permissions and secure system connectors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-electric-indigo shrink-0 mt-0.5" />
                    <span>Deterministic policy boundaries with mandatory human approvals</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            PLATFORM CAPABILITIES
            ========================================================================= */}
        <section className="py-24 bg-deep-slate/30 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-soft-periwinkle">
                Core Architecture
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
                Platform Capabilities
              </h2>
              <p className="text-base sm:text-lg text-slate-300">
                Engineered for operational durability, system connectivity, and
                uncompromising enterprise control.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Capability 1 */}
              <div className="p-7 rounded-2xl bg-midnight/90 border border-slate-800 hover:border-slate-700 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-electric-indigo/10 border border-indigo-500/20 flex items-center justify-center text-electric-indigo mb-5 group-hover:scale-105 transition-transform">
                  <Workflow className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-2">
                  Workflow Orchestration
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  Define business processes as resilient directed graphs. Handle
                  conditional logic, parallel execution tracks, and escalation
                  paths deterministically.
                </p>
                <span className="inline-flex items-center text-xs font-mono text-soft-periwinkle">
                  Core Engine Capability
                </span>
              </div>

              {/* Capability 2 */}
              <div className="p-7 rounded-2xl bg-midnight/90 border border-slate-800 hover:border-slate-700 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-electric-indigo mb-5 group-hover:scale-105 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-2">
                  AI-Powered Task Execution
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  Leverage targeted models to parse unstructured documents, validate
                  records, classify requests, and format payloads within strict
                  schema contracts.
                </p>
                <span className="inline-flex items-center text-xs font-mono text-soft-periwinkle">
                  Bounded AI Operations
                </span>
              </div>

              {/* Capability 3 */}
              <div className="p-7 rounded-2xl bg-midnight/90 border border-slate-800 hover:border-slate-700 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-electric-indigo mb-5 group-hover:scale-105 transition-transform">
                  <Network className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-2">
                  System Connectors
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  Interconnect REST endpoints, webhooks, relational datastores,
                  and operational applications through authenticated, scoped
                  adapter interfaces.
                </p>
                <span className="inline-flex items-center text-xs font-mono text-soft-periwinkle">
                  Integration Framework
                </span>
              </div>

              {/* Capability 4 */}
              <div className="p-7 rounded-2xl bg-midnight/90 border border-slate-800 hover:border-slate-700 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-electric-indigo mb-5 group-hover:scale-105 transition-transform">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-2">
                  Execution Monitoring
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  Gain granular visibility into step-level progress, input/output
                  contracts, execution duration, and complete audit trails for
                  compliance.
                </p>
                <span className="inline-flex items-center text-xs font-mono text-soft-periwinkle">
                  Telemetry & Observability
                </span>
              </div>

              {/* Capability 5 */}
              <div className="p-7 rounded-2xl bg-midnight/90 border border-slate-800 hover:border-slate-700 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-electric-indigo mb-5 group-hover:scale-105 transition-transform">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-2">
                  Persistence & Recovery
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  Development roadmap priority: Durable state machines that
                  tolerate node failures, retry with exponential backoff, and
                  resume from interruptions.
                </p>
                <span className="inline-flex items-center text-xs font-mono text-amber-400/90">
                  Roadmap Milestone
                </span>
              </div>

              {/* Capability 6 */}
              <div className="p-7 rounded-2xl bg-midnight/90 border border-slate-800 hover:border-slate-700 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-electric-indigo mb-5 group-hover:scale-105 transition-transform">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-2">
                  Security-Conscious Design
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  Granular role-based permissions, secret isolation, encrypted
                  payload transmission, and zero trust execution environments.
                </p>
                <span className="inline-flex items-center text-xs font-mono text-soft-periwinkle">
                  Architectural Foundation
                </span>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/platform"
                className="inline-flex items-center gap-2 text-sm font-semibold text-soft-periwinkle hover:text-white transition-colors"
              >
                <span>Read detailed platform architecture and roadmap</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================================
            HOW IT WORKS: 5-STEP PROCESS
            ========================================================================= */}
        <section className="py-24 bg-midnight">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-soft-periwinkle">
                Operating Model
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
                How Synora Works
              </h2>
              <p className="text-base sm:text-lg text-slate-300">
                A structured methodology to transform manual operations into
                supervised digital execution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                {
                  step: "01",
                  title: "Define Workflow",
                  desc: "Document the operational workflow, triggers, required data schemas, decision branches, and failure criteria.",
                },
                {
                  step: "02",
                  title: "Connect Systems",
                  desc: "Configure authenticated connectors to your ERP, CRM, database, or API endpoints with scoped access.",
                },
                {
                  step: "03",
                  title: "Configure Worker",
                  desc: "Set the Digital Employee's operational bounds, execution rules, and mandatory human approval gates.",
                },
                {
                  step: "04",
                  title: "Execute & Monitor",
                  desc: "Workflows execute with durable step logging, real-time telemetry, and automated retry mechanisms.",
                },
                {
                  step: "05",
                  title: "Review & Improve",
                  desc: "Analyze execution bottlenecks, evaluate human feedback cycles, and refine the orchestration model.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="p-6 rounded-2xl bg-deep-slate/40 border border-slate-800 relative flex flex-col justify-between"
                >
                  <div>
                    <div className="font-mono text-2xl font-bold text-electric-indigo/80 mb-3">
                      {item.step}
                    </div>
                    <h3 className="font-heading text-base font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] font-mono text-slate-500 uppercase">
                    Stage {item.step}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-xs text-slate-500 mt-8 italic">
              Note: Represents Synora’s intended enterprise operating model. Individual integrations are rolled out per client architecture.
            </p>
          </div>
        </section>

        {/* =========================================================================
            ILLUSTRATIVE USE CASES OVERVIEW
            ========================================================================= */}
        <section className="py-24 bg-deep-slate/40 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-soft-periwinkle">
                  Operational Applications
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
                  Illustrative Enterprise Use Cases
                </h2>
                <p className="text-base text-slate-300">
                  Targeted business areas where coordinated digital workers eliminate
                  operational lag and reduce manual burden.
                </p>
              </div>

              <Link
                href="/use-cases"
                className="inline-flex items-center gap-2 text-sm font-semibold text-soft-periwinkle hover:text-white transition-colors"
              >
                <span>View all use-case workflows</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-7 rounded-2xl bg-midnight/90 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-electric-indigo mb-4">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">
                    Client Intake & Onboarding
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    Collect customer documentation, validate required identity fields,
                    create staging records across CRM & billing, and flag missing data.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800 text-xs text-slate-500">
                  Human Approval: Compliance verification gate
                </div>
              </div>

              <div className="p-7 rounded-2xl bg-midnight/90 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-electric-indigo mb-4">
                    <FileCheck2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">
                    Document Processing & Extraction
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    Ingest invoices, purchase orders, and contracts. Extract structured
                    key-value pairs and match against existing procurement systems.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800 text-xs text-slate-500">
                  Human Approval: Discrepancy & high-value thresholds
                </div>
              </div>

              <div className="p-7 rounded-2xl bg-midnight/90 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-electric-indigo mb-4">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">
                    Cross-System Administration
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    Automate multi-step synchronization tasks between legacy core systems,
                    cloud services, and notification platforms without brittle manual copying.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800 text-xs text-slate-500">
                  Human Approval: Schema migration & bulk state commits
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            TRUST AND RESPONSIBLE OPERATION
            ========================================================================= */}
        <section className="py-24 bg-midnight">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-soft-periwinkle">
                Governance & Control
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
                Engineered for Responsible Enterprise Operation
              </h2>
              <p className="text-base sm:text-lg text-slate-300">
                Autonomous capabilities require clear boundaries. Synora embeds
                oversight and deterministic checkpoints directly into the runtime.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-deep-slate/40 border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-electric-indigo mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-base font-bold text-white mb-2">
                  Human-in-the-Loop
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Explicit approval checkpoints for high-risk actions, anomaly detections,
                  or values exceeding financial policy rules.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-deep-slate/40 border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-electric-indigo mb-4">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-base font-bold text-white mb-2">
                  Audit Visibility
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Every decision, system input, output payload, and intermediate state
                  is captured in structured execution logs.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-deep-slate/40 border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-electric-indigo mb-4">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-base font-bold text-white mb-2">
                  Least-Privilege Scoping
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Digital workers only receive strictly scoped API permissions
                  necessary for their defined operational role.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-deep-slate/40 border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-electric-indigo mb-4">
                  <Sliders className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-base font-bold text-white mb-2">
                  Deterministic Boundaries
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Clear fallbacks prevent runaway executions, rate spikes, or
                  unauthorized side effects on downstream infrastructure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            FINAL CALL TO ACTION
            ========================================================================= */}
        <section className="py-20 bg-gradient-to-b from-deep-slate/80 to-midnight border-t border-slate-800 relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              Ready to Discuss an Operational Workflow?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
              Whether you are looking to streamline cross-system data entry or
              automate complex multi-step approvals, let’s explore how Synora
              Digital Employees can assist your operations.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-electric-indigo hover:bg-indigo-600 rounded-xl shadow-lg shadow-indigo-600/30 transition-all duration-200"
              >
                <span>Discuss Your Use Case</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/platform"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-cloud-white bg-midnight hover:bg-deep-slate border border-slate-700 rounded-xl transition-all duration-200"
              >
                <span>Explore Technical Platform</span>
              </Link>
            </div>
            <p className="text-xs text-slate-500 pt-2 font-mono">
              Synora Technologies Private Limited &bull; Enterprise Digital Workforce Solutions
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
