import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Building2,
  FileText,
  Layers,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Database,
  Users,
  AlertCircle,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise Use Cases | Synora Technologies",
  description:
    "Explore operational use cases for Synora Digital Employees: Client Onboarding, Intelligent Document Processing, Cross-System Data Administration, and Internal Operations.",
  alternates: {
    canonical: "https://synoratech.in/use-cases",
  },
};

interface UseCaseData {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  problem: string;
  steps: { num: string; title: string; desc: string }[];
  workerRole: string;
  systems: string[];
  approvalPoint: string;
  benefits: string[];
}

const useCases: UseCaseData[] = [
  {
    id: "intake",
    badge: "Client Operations",
    title: "Client Intake & Account Onboarding",
    subtitle: "Accelerate B2B client verification, document collection, and multi-system staging without administrative delays.",
    problem:
      "When a new corporate client signs up, customer success and operations teams spend days chasing unstructured documents, re-typing registration info into billing, CRM, and compliance databases, and verifying tax IDs manually.",
    steps: [
      {
        num: "01",
        title: "Ingest Contract & Forms",
        desc: "Digital Employee receives signed agreements, registration packets, and tax documents via secure portal or API webhook.",
      },
      {
        num: "02",
        title: "Extract & Validate Entities",
        desc: "Extracts legal name, company registration ID, billing contacts, and payment terms against declared schemas.",
      },
      {
        num: "03",
        title: "Stage Downstream Accounts",
        desc: "Creates pre-verified draft accounts in CRM (e.g. Salesforce/HubSpot) and the billing/ERP system.",
      },
      {
        num: "04",
        title: "Human Compliance Review",
        desc: "Compliance lead inspects the consolidated verification dossier and clicks 'Approve' to unlock production access.",
      },
    ],
    workerRole: "Acts as a dedicated Client Intake Coordinator, operating 24/7 to assemble dossiers, run checksums on registration credentials, and prepare downstream records.",
    systems: ["CRM (Salesforce/HubSpot)", "ERP / Billing", "Document Portal", "Identity Verification Service"],
    approvalPoint: "Final compliance sign-off on identity credentials and credit limit validation before activating live production accounts.",
    benefits: [
      "Eliminates repetitive data re-entry across three or more disconnected applications.",
      "Reduces customer onboarding cycle time from days to hours.",
      "Standardizes compliance checks so incomplete files are flagged immediately.",
    ],
  },
  {
    id: "documents",
    badge: "Finance & Accounts Payable",
    title: "Intelligent Document & Invoice Processing",
    subtitle: "Reconcile high-volume inbound vendor invoices and purchase orders with automated validation and exception routing.",
    problem:
      "Finance departments receive thousands of supplier invoices monthly in PDF and scanned formats. Accounts payable clerks manually check line items against purchase orders, match vendor bank records, and route for approval.",
    steps: [
      {
        num: "01",
        title: "Inbound Invoice Ingestion",
        desc: "Listens on dedicated accounting inboxes or storage buckets for inbound vendor bills.",
      },
      {
        num: "02",
        title: "Structured 3-Way Match",
        desc: "Extracts invoice line items, tax details, and totals; queries ERP for corresponding purchase orders and delivery notes.",
      },
      {
        num: "03",
        title: "Discrepancy Evaluation",
        desc: "Compares unit prices, quantities, and payment terms. Flags discrepancies exceeding configured tolerance rules.",
      },
      {
        num: "04",
        title: "Approval & Ledger Entry",
        desc: "Dispatches high-value or mismatched invoices to the controller queue; stages matched records directly for payment batch.",
      },
    ],
    workerRole: "Acts as an Accounts Payable Auditor, parsing unstructured documents, executing 3-way matching logic, and maintaining full audit trails for accounting controls.",
    systems: ["ERP (SAP/Oracle/NetSuite)", "Procurement System", "Email / Storage", "Vendor Registry"],
    approvalPoint: "Explicit sign-off required for any invoice with pricing discrepancies, unknown vendor bank accounts, or amounts exceeding department thresholds.",
    benefits: [
      "Eliminates manual invoice data entry and reduces costly typographical mistakes.",
      "Ensures systematic adherence to company purchase order matching guidelines.",
      "Accelerates vendor payment cycles while enforcing strict dual-control approvals.",
    ],
  },
  {
    id: "operations",
    badge: "Enterprise IT & Admin",
    title: "Cross-System Master Data Administration",
    subtitle: "Maintain consistent operational records across disparate internal databases, SaaS applications, and reporting hubs.",
    problem:
      "Enterprises run on a patchwork of software tools. When customer addresses, vendor terms, or operational assets change in one platform, downstream systems become desynchronized, leading to shipment failures and flawed reporting.",
    steps: [
      {
        num: "01",
        title: "Event Detection",
        desc: "Detects master data modification events (e.g. vendor address change or contract tier update) in source systems.",
      },
      {
        num: "02",
        title: "Schema Translation",
        desc: "Normalizes data formats, validates tax jurisdictions, and converts entity structures to meet target system schemas.",
      },
      {
        num: "03",
        title: "Impact Analysis",
        desc: "Checks pending transactions that might be affected by the master record update.",
      },
      {
        num: "04",
        title: "Synchronized Commit",
        desc: "Executes idempotent updates across ERP, CRM, and analytics data stores with transaction rollback protection.",
      },
    ],
    workerRole: "Acts as a Master Data Coordinator, executing deterministic data synchronization workflows across boundary systems with zero manual copy-paste.",
    systems: ["Core ERP", "CRM", "Warehouse Management", "Enterprise Data Lake"],
    approvalPoint: "Changes involving bank account details, high-impact contract terms, or bulk updates of over 50 entities require operations lead authorization.",
    benefits: [
      "Guarantees data integrity across legacy and cloud-native applications.",
      "Reduces manual audit overhead and reconciles sync conflicts proactively.",
      "Prevents downstream billing and shipping failures caused by stale data.",
    ],
  },
  {
    id: "reporting",
    badge: "Operations Intelligence",
    title: "Multi-Source Data Aggregation & Audit Reporting",
    subtitle: "Consolidate operational telemetry, branch reports, and compliance logs into structured, audit-ready operational packages.",
    problem:
      "Operations teams spend days at the end of each week or month manually downloading CSVs from four different platforms, normalizing headers in spreadsheets, and formatting status summaries for executive or regulatory review.",
    steps: [
      {
        num: "01",
        title: "Scheduled Extraction",
        desc: "Extracts daily operational records and telemetry from regional endpoints, relational stores, and ticketing systems.",
      },
      {
        num: "02",
        title: "Validation & Anomaly Check",
        desc: "Runs sanity checks, identifies missing entries or statistical anomalies, and highlights unexpected variances.",
      },
      {
        num: "03",
        title: "Dossier Synthesis",
        desc: "Compiles formatted summaries, structured JSON datasets, and standardized executive briefing packets.",
      },
      {
        num: "04",
        title: "Review & Sign-Off",
        desc: "Presents the aggregated pack to the operations director for review before distribution or compliance filing.",
      },
    ],
    workerRole: "Acts as an Operations Analyst, autonomously gathering raw telemetry, standardizing disparate schemas, and preparing comprehensive briefing materials.",
    systems: ["Ticketing Platforms", "Production Databases", "Analytics Warehouses", "Corporate Document Vault"],
    approvalPoint: "Operations director must review highlighted variances and authorize the generated pack before executive or external distribution.",
    benefits: [
      "Frees valuable engineering and operations personnel from routine spreadsheet wrangling.",
      "Accelerates access to dependable, up-to-date operational visibility.",
      "Maintains a complete audit trail showing exactly when each source file was ingested.",
    ],
  },
];

export default function UseCasesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-midnight text-cloud-white">
      <Navbar />

      <main id="main-content" className="flex-grow">
        {/* Header */}
        <section className="relative overflow-hidden py-16 lg:py-24 bg-grid-pattern border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-deep-slate border border-slate-700 text-xs font-semibold uppercase tracking-wider text-soft-periwinkle">
                <Sparkles className="w-3.5 h-3.5 text-electric-indigo" />
                Operational Blueprints
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Enterprise Use Cases
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                Explore how Synora Digital Employees coordinate complex,
                multi-system operational workflows with built-in human oversight.
              </p>
              <div className="pt-2 text-xs font-mono text-slate-400">
                Grounded operational workflows &bull; No fabricated performance metrics
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases List */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            {useCases.map((uc) => (
              <div
                key={uc.id}
                id={uc.id}
                className="p-8 sm:p-10 rounded-3xl bg-deep-slate/50 border border-slate-800 space-y-8"
              >
                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                  <div className="space-y-1">
                    <span className="text-xs font-mono uppercase tracking-wider text-soft-periwinkle">
                      {uc.badge}
                    </span>
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                      {uc.title}
                    </h2>
                    <p className="text-sm text-slate-300 max-w-2xl">
                      {uc.subtitle}
                    </p>
                  </div>
                  <Link
                    href={`/contact?interest=${uc.id}`}
                    className="inline-flex items-center gap-2 self-start md:self-center px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-electric-indigo hover:bg-indigo-600 transition-colors shrink-0"
                  >
                    <span>Discuss This Workflow</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Problem Statement */}
                <div className="p-5 rounded-2xl bg-midnight/80 border border-slate-800/80 space-y-2">
                  <h3 className="text-xs font-mono uppercase text-red-400 font-semibold flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    Business Problem
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {uc.problem}
                  </p>
                </div>

                {/* Workflow Steps Grid */}
                <div className="space-y-4">
                  <h3 className="text-xs font-mono uppercase text-soft-periwinkle tracking-wider font-semibold">
                    Example Workflow Architecture
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {uc.steps.map((st) => (
                      <div
                        key={st.num}
                        className="p-4 rounded-xl bg-midnight/60 border border-slate-800 flex flex-col justify-between"
                      >
                        <div className="space-y-2">
                          <span className="text-xs font-mono font-bold text-electric-indigo">
                            STAGE {st.num}
                          </span>
                          <h4 className="text-sm font-bold text-white">
                            {st.title}
                          </h4>
                          <p className="text-xs text-slate-400 leading-relaxed">
                            {st.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3-column metadata: Worker Role, Systems, Approval Gate */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-800/80 text-xs">
                  <div className="space-y-2">
                    <span className="font-mono text-soft-periwinkle uppercase tracking-wider block font-semibold">
                      Digital Employee Role
                    </span>
                    <p className="text-slate-300 leading-relaxed">
                      {uc.workerRole}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <span className="font-mono text-soft-periwinkle uppercase tracking-wider block font-semibold">
                      Systems & Teams Involved
                    </span>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {uc.systems.map((sys) => (
                        <span
                          key={sys}
                          className="px-2 py-0.5 rounded bg-midnight border border-slate-800 text-[11px] text-slate-300"
                        >
                          {sys}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="font-mono text-amber-400 uppercase tracking-wider block font-semibold flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4" />
                      Human Approval Gate
                    </span>
                    <p className="text-slate-300 leading-relaxed">
                      {uc.approvalPoint}
                    </p>
                  </div>
                </div>

                {/* Expected Benefits */}
                <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-900/30 space-y-2">
                  <span className="text-xs font-mono uppercase text-soft-periwinkle font-semibold">
                    Expected Operational Benefits
                  </span>
                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-slate-300 pt-1">
                    {uc.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Custom Workflow CTA */}
        <section className="py-20 bg-deep-slate/40 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="font-heading text-3xl font-bold text-white">
              Have a Unique Enterprise Process?
            </h2>
            <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
              Every organization operates with custom combinations of legacy
              tools, APIs, and business rules. Let’s design a tailored Digital
              Employee workflow for your operations.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-electric-indigo hover:bg-indigo-600 rounded-xl shadow-md transition-all"
              >
                <span>Discuss a Custom Workflow</span>
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
