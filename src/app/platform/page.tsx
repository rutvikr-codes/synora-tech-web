import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Workflow,
  Cpu,
  Layers,
  Network,
  Activity,
  Lock,
  RefreshCw,
  ShieldCheck,
  ArrowRight,
  GitBranch,
  Terminal,
  CheckCircle2,
  Clock,
  Sparkles,
  Server,
  FileCheck,
  Eye,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise Platform Architecture | Synora Technologies",
  description:
    "Explore the technical architecture of the Synora Digital Workforce platform: workflow orchestration, runtime execution, system connectors, and human-in-the-loop governance.",
  alternates: {
    canonical: "https://synoratech.in/platform",
  },
};

export default function PlatformPage() {
  return (
    <div className="flex flex-col min-h-screen bg-midnight text-cloud-white">
      <Navbar />

      <main id="main-content" className="flex-grow">
        {/* =========================================================================
            HEADER & HERO
            ========================================================================= */}
        <section className="relative overflow-hidden py-16 lg:py-24 bg-grid-pattern border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-deep-slate border border-slate-700 text-xs font-semibold uppercase tracking-wider text-soft-periwinkle">
                <Workflow className="w-3.5 h-3.5 text-electric-indigo" />
                Platform Architecture
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                The Digital Workforce Platform
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                An enterprise-grade operating system designed to orchestrate,
                execute, and monitor intelligent Digital Employees across your
                mission-critical business workflows.
              </p>
              <div className="pt-2 flex items-center gap-3 text-xs font-mono text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Active MVP Architecture &bull; Technical Specifications</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            PLATFORM ARCHITECTURE MAP (HIGH LEVEL)
            ========================================================================= */}
        <section className="py-16 bg-deep-slate/30 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10 space-y-2">
              <h2 className="font-heading text-2xl font-bold text-white">
                Architectural Subsystems
              </h2>
              <p className="text-sm text-slate-400">
                How work flows from trigger ingress to validated state commit.
              </p>
            </div>

            {/* Architecture schematic grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-5 rounded-xl bg-midnight border border-slate-800 space-y-3">
                <div className="text-xs font-mono text-soft-periwinkle">LAYER 01</div>
                <h3 className="font-heading text-base font-bold text-white flex items-center gap-2">
                  <Network className="w-4 h-4 text-electric-indigo" />
                  Connector Ingress
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Webhooks, REST events, document drops, and schedule triggers
                  enter via authenticated gateway contracts.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-midnight border border-electric-indigo/40 space-y-3 shadow-lg shadow-indigo-950/20">
                <div className="text-xs font-mono text-electric-indigo">LAYER 02</div>
                <h3 className="font-heading text-base font-bold text-white flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-electric-indigo" />
                  Orchestration DAG
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Directed acyclic graphs resolve dependencies, validate schemas,
                  and manage task assignments.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-midnight border border-slate-800 space-y-3">
                <div className="text-xs font-mono text-soft-periwinkle">LAYER 03</div>
                <h3 className="font-heading text-base font-bold text-white flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-electric-indigo" />
                  Digital Worker Units
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Scoped runtime agents perform discrete steps: parsing records,
                  validating data, and invoking backend services.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-midnight border border-slate-800 space-y-3">
                <div className="text-xs font-mono text-amber-400">LAYER 04</div>
                <h3 className="font-heading text-base font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  Human Oversight Gate
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Threshold exceptions and high-impact changes pause for explicit
                  supervisor approval before state commitment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            DETAILED SUBSYSTEM SPECIFICATIONS
            ========================================================================= */}
        <section className="py-20 space-y-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            {/* 1. Digital Workforce & Digital Employees */}
            <div id="workers" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-4 space-y-3">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded text-[11px] font-mono uppercase bg-indigo-500/10 text-soft-periwinkle border border-indigo-500/20">
                  Concept & Identity
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                  Digital Employees
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed">
                  In plain English: A Digital Employee is not a generic chatbot.
                  It is a dedicated operational worker configured with defined
                  responsibilities, precise tools, and bounded authority.
                </p>
              </div>

              <div className="lg:col-span-8 p-7 rounded-2xl bg-deep-slate/60 border border-slate-800 space-y-5">
                <h3 className="text-sm font-semibold text-soft-periwinkle uppercase tracking-wider font-mono">
                  Technical Architecture
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Each Digital Employee operates as an isolated execution persona
                  equipped with:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-midnight/80 border border-slate-800">
                    <span className="font-bold text-white block mb-1">
                      Identity & Role Scoping
                    </span>
                    <span className="text-slate-400">
                      Explicit cryptographically verifiable identity tied to an
                      operational role (e.g. Accounts Payable Auditor, Patient
                      Intake Coordinator).
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-midnight/80 border border-slate-800">
                    <span className="font-bold text-white block mb-1">
                      Deterministic Tool Registry
                    </span>
                    <span className="text-slate-400">
                      Whitelisted tool execution privileges; workers cannot invoke
                      unauthorized endpoints or execute unapproved actions.
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-midnight/80 border border-slate-800">
                    <span className="font-bold text-white block mb-1">
                      State Isolation
                    </span>
                    <span className="text-slate-400">
                      Memory is scoped strictly to the active workflow job. Cross-tenant
                      data contamination is prevented by architectural boundary isolation.
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-midnight/80 border border-slate-800">
                    <span className="font-bold text-white block mb-1">
                      Policy Guardrails
                    </span>
                    <span className="text-slate-400">
                      Pre-execution input sanitization and post-execution output
                      schema enforcement ensure that data adheres to business rules.
                    </span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>Status: Core Architectural Pattern</span>
                  <span className="text-emerald-400 font-medium">Verified in MVP</span>
                </div>
              </div>
            </div>

            {/* 2. Workflow Orchestration Engine */}
            <div id="orchestration" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-4 space-y-3">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded text-[11px] font-mono uppercase bg-indigo-500/10 text-soft-periwinkle border border-indigo-500/20">
                  Execution Backbone
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                  Workflow Orchestration
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed">
                  In plain English: The conductor that coordinates all the steps
                  in an operational process, ensuring tasks happen in the correct
                  order, handling delays, and managing exceptions.
                </p>
              </div>

              <div className="lg:col-span-8 p-7 rounded-2xl bg-deep-slate/60 border border-slate-800 space-y-5">
                <h3 className="text-sm font-semibold text-soft-periwinkle uppercase tracking-wider font-mono">
                  Technical Architecture
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Synora orchestrates operations using a deterministic Directed
                  Acyclic Graph (DAG) state model:
                </p>

                <ul className="space-y-3 text-xs text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <GitBranch className="w-4 h-4 text-electric-indigo shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">DAG Dependency Resolution:</strong>{" "}
                      Steps execute concurrently when independent and sequentially
                      when downstream tasks rely on upstream outputs.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-electric-indigo shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Strict Schema Validation:</strong>{" "}
                      Every step boundary validates inputs and outputs against
                      declared JSON/Zod schemas before transitioning to the next node.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-electric-indigo shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Asynchronous Task Management:</strong>{" "}
                      Supports long-running workflows with polling, asynchronous
                      callbacks, and SLA-based timeout escalations.
                    </span>
                  </li>
                </ul>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>Status: Core Workflow Engine</span>
                  <span className="text-emerald-400 font-medium">Verified in MVP</span>
                </div>
              </div>
            </div>

            {/* 3. Runtime Execution & Job Management */}
            <div id="runtime" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-4 space-y-3">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded text-[11px] font-mono uppercase bg-indigo-500/10 text-soft-periwinkle border border-indigo-500/20">
                  Lifecycle Operations
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                  Runtime Execution & Lifecycle
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed">
                  In plain English: How each job moves through its lifecycle from
                  receipt to verified completion, with full recovery if a network
                  or service hiccup occurs.
                </p>
              </div>

              <div className="lg:col-span-8 p-7 rounded-2xl bg-deep-slate/60 border border-slate-800 space-y-5">
                <h3 className="text-sm font-semibold text-soft-periwinkle uppercase tracking-wider font-mono">
                  Execution State Machine
                </h3>

                {/* State Machine Visualization */}
                <div className="p-4 rounded-xl bg-midnight border border-slate-800 overflow-x-auto">
                  <div className="flex items-center justify-between min-w-[500px] text-xs font-mono">
                    <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300">
                      QUEUED
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-600" />
                    <span className="px-2.5 py-1 rounded bg-indigo-950 text-soft-periwinkle border border-indigo-700/50">
                      PROCESSING
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-600" />
                    <span className="px-2.5 py-1 rounded bg-amber-950/80 text-amber-300 border border-amber-700/50">
                      HUMAN_REVIEW
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-600" />
                    <span className="px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-700/50">
                      COMPLETED
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono mt-3 pt-2 border-t border-slate-800 flex justify-between">
                    <span>Alternative states: RETRYING &bull; SUSPENDED &bull; FAILED</span>
                    <span>Idempotent execution guarantee</span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  Job state transitions are transactional. When a task completes,
                  intermediate artifacts and telemetry are committed before the
                  next transition occurs.
                </p>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>Status: Runtime State Controller</span>
                  <span className="text-emerald-400 font-medium">Verified in MVP</span>
                </div>
              </div>
            </div>

            {/* 4. Integrations & Connectors */}
            <div id="connectors" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-4 space-y-3">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded text-[11px] font-mono uppercase bg-indigo-500/10 text-soft-periwinkle border border-indigo-500/20">
                  Interoperability
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                  Integrations & Connectors
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed">
                  In plain English: Bridges that allow Digital Employees to read
                  from and write to the software tools your organization already
                  relies on daily.
                </p>
              </div>

              <div className="lg:col-span-8 p-7 rounded-2xl bg-deep-slate/60 border border-slate-800 space-y-5">
                <h3 className="text-sm font-semibold text-soft-periwinkle uppercase tracking-wider font-mono">
                  Adapter Architecture
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Synora is building standardized connector abstractions for:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-midnight/80 border border-slate-800">
                    <span className="font-bold text-white block mb-1">
                      REST & Webhook Adapters
                    </span>
                    <span className="text-slate-400">
                      Standard JSON/HTTPS endpoints with OAuth2, API token, and mutual
                      TLS authentication patterns.
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-midnight/80 border border-slate-800">
                    <span className="font-bold text-white block mb-1">
                      Relational & Document Stores
                    </span>
                    <span className="text-slate-400">
                      Structured querying and transactional record validation for
                      PostgreSQL, MySQL, and enterprise data warehouses.
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-midnight/80 border border-slate-800">
                    <span className="font-bold text-white block mb-1">
                      Enterprise SaaS Interfaces
                    </span>
                    <span className="text-slate-400">
                      Targeted connectors for ERP, CRM (e.g. Salesforce, HubSpot),
                      and service desk platforms (e.g. Jira, ServiceNow).
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-midnight/80 border border-slate-800">
                    <span className="font-bold text-white block mb-1">
                      File & Document Ingestion
                    </span>
                    <span className="text-slate-400">
                      Secure processing of PDF, CSV, and tabular spreadsheets with
                      OCR extraction and validation schemas.
                    </span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>Status: REST/Webhook Ready &bull; SaaS Adapters in Development</span>
                  <span className="text-soft-periwinkle font-medium">In Active Extension</span>
                </div>
              </div>
            </div>

            {/* 5. Security, Permissions & Human Oversight */}
            <div id="security" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-4 space-y-3">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded text-[11px] font-mono uppercase bg-indigo-500/10 text-soft-periwinkle border border-indigo-500/20">
                  Trust & Governance
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                  Security, Permissions & Oversight
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed">
                  In plain English: Guaranteeing that autonomous operations cannot
                  exceed authorized bounds, with mandatory checkpoints whenever
                  a critical decision or payment is involved.
                </p>
              </div>

              <div className="lg:col-span-8 p-7 rounded-2xl bg-deep-slate/60 border border-slate-800 space-y-5">
                <h3 className="text-sm font-semibold text-soft-periwinkle uppercase tracking-wider font-mono">
                  Governance Principles
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Our architecture rejects unconstrained autonomy in favor of
                  deterministic enterprise guardrails:
                </p>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="p-4 rounded-xl bg-midnight/80 border border-slate-800 flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-electric-indigo shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block mb-0.5">
                        Human Approval Checkpoints
                      </strong>
                      <span className="text-slate-400">
                        Workflows pause execution and generate notifications when
                        risk thresholds (e.g. monetary limits, confidential data
                        exports, or low extraction confidence) are triggered.
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-midnight/80 border border-slate-800 flex items-start gap-3">
                    <Lock className="w-5 h-5 text-electric-indigo shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block mb-0.5">
                        Role-Based Access Control (RBAC) & Credential Isolation
                      </strong>
                      <span className="text-slate-400">
                        Secrets and connector tokens are never shared with or
                        exposed to the execution agent. Operations take place via
                        ephemeral scoped proxies.
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-midnight/80 border border-slate-800 flex items-start gap-3">
                    <Eye className="w-5 h-5 text-electric-indigo shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block mb-0.5">
                        Immutable Audit Logging
                      </strong>
                      <span className="text-slate-400">
                        Every task input, model inference prompt/response, policy
                        check, and system interaction is logged with timestamps
                        for compliance inspection.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>Status: Core Architectural Requirement</span>
                  <span className="text-emerald-400 font-medium">Verified in MVP</span>
                </div>
              </div>
            </div>

            {/* 6. Technical Roadmap & Milestone Status */}
            <div id="roadmap" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-4 space-y-3">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded text-[11px] font-mono uppercase bg-indigo-500/10 text-soft-periwinkle border border-indigo-500/20">
                  Evolutionary Plan
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                  Technical Roadmap
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Transparent status of our engineering roadmap. We maintain clear
                  distinction between verified capabilities, active development,
                  and planned milestones.
                </p>
              </div>

              <div className="lg:col-span-8 p-7 rounded-2xl bg-deep-slate/60 border border-slate-800 space-y-5">
                <h3 className="text-sm font-semibold text-soft-periwinkle uppercase tracking-wider font-mono">
                  Status Matrix
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-400 uppercase font-mono">
                        <th className="pb-3 font-semibold">Subsystem Feature</th>
                        <th className="pb-3 font-semibold">Focus Area</th>
                        <th className="pb-3 font-semibold text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 font-mono">
                      <tr>
                        <td className="py-3 text-white font-sans font-medium">
                          Workflow DAG Engine
                        </td>
                        <td className="py-3 text-slate-400 font-sans">
                          Deterministic multi-step orchestration
                        </td>
                        <td className="py-3 text-right">
                          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            Verified MVP
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white font-sans font-medium">
                          Human Approval Gates
                        </td>
                        <td className="py-3 text-slate-400 font-sans">
                          Policy threshold reviews
                        </td>
                        <td className="py-3 text-right">
                          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            Verified MVP
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white font-sans font-medium">
                          REST / Webhook Ingress
                        </td>
                        <td className="py-3 text-slate-400 font-sans">
                          Event triggers & payload validation
                        </td>
                        <td className="py-3 text-right">
                          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            Verified MVP
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white font-sans font-medium">
                          Intelligent Document Extraction
                        </td>
                        <td className="py-3 text-slate-400 font-sans">
                          Invoice / PO structured key-value parsing
                        </td>
                        <td className="py-3 text-right">
                          <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-soft-periwinkle border border-indigo-500/20">
                            In Active Testing
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white font-sans font-medium">
                          Pre-built ERP/CRM Connectors
                        </td>
                        <td className="py-3 text-slate-400 font-sans">
                          Turnkey SaaS catalog integration
                        </td>
                        <td className="py-3 text-right">
                          <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-soft-periwinkle border border-indigo-500/20">
                            In Active Testing
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 text-white font-sans font-medium">
                          Distributed Durable State Store
                        </td>
                        <td className="py-3 text-slate-400 font-sans">
                          Cross-region replication & automatic failover
                        </td>
                        <td className="py-3 text-right">
                          <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                            Roadmap Milestone
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
                  Notice: Synora Technologies Private Limited does not claim public
                  commercial availability or certifications that have not been
                  independently audited.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            BOTTOM CALL TO ACTION
            ========================================================================= */}
        <section className="py-16 bg-deep-slate/40 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
            <h2 className="font-heading text-3xl font-bold text-white">
              Evaluate Platform Fit for Your Workflows
            </h2>
            <p className="text-slate-300 text-sm max-w-xl mx-auto">
              Our engineering team is ready to discuss architectural
              compatibility, data flow requirements, and deployment parameters.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-electric-indigo hover:bg-indigo-600 rounded-xl shadow-md transition-all"
              >
                <span>Request Architectural Review</span>
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
