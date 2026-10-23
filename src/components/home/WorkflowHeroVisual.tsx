"use client";

import React, { useState, useEffect } from "react";
import {
  Cpu,
  Layers,
  Database,
  CheckCircle2,
  ShieldAlert,
  ArrowRight,
  GitBranch,
  Terminal,
  Clock,
  Check,
} from "lucide-react";

interface WorkflowStep {
  id: string;
  stepNumber: string;
  title: string;
  system: string;
  status: "completed" | "active" | "queued";
  latency: string;
  detail: string;
}

const mockSteps: WorkflowStep[] = [
  {
    id: "step-1",
    stepNumber: "01",
    title: "Inbound Trigger",
    system: "Webhook / API Gateway",
    status: "completed",
    latency: "14ms",
    detail: "Validated payload signature and queued execution job #SYN-8492",
  },
  {
    id: "step-2",
    stepNumber: "02",
    title: "Employee Assignment",
    system: "Orchestration Engine",
    status: "completed",
    latency: "32ms",
    detail: "Assigned to 'Finance Operations Worker' with read/write ledger scope",
  },
  {
    id: "step-3",
    stepNumber: "03",
    title: "Document Extraction",
    system: "Extraction & Matcher",
    status: "active",
    latency: "140ms",
    detail: "Extracted 18 line items; verifying against ERP purchase order PO-9912",
  },
  {
    id: "step-4",
    stepNumber: "04",
    title: "Human Approval Checkpoint",
    system: "Oversight Governance",
    status: "queued",
    latency: "--",
    detail: "Amount > $10,000 threshold flag: Routed to Finance Controller queue",
  },
  {
    id: "step-5",
    stepNumber: "05",
    title: "Downstream Sync",
    system: "ERP & Audit Ledger",
    status: "queued",
    latency: "--",
    detail: "Awaiting approval for idempotent state commit and immutable audit log",
  },
];

export function WorkflowHeroVisual() {
  const [activeStepIndex, setActiveStepIndex] = useState(2);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % mockSteps.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const activeStep = mockSteps[activeStepIndex];

  return (
    <div
      className="relative w-full max-w-xl mx-auto lg:max-w-none rounded-2xl bg-deep-slate/90 border border-slate-700/60 shadow-2xl shadow-indigo-950/40 p-5 sm:p-6 backdrop-blur-xl"
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      {/* Top Console Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-slate-700"></div>
          <div className="w-3 h-3 rounded-full bg-slate-700"></div>
          <div className="w-3 h-3 rounded-full bg-slate-700"></div>
          <span className="ml-2 font-mono text-slate-400 font-medium">
            SYNORA // ORCHESTRATION RUNTIME
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono bg-indigo-500/10 text-soft-periwinkle border border-indigo-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-indigo animate-pulse mr-1.5"></span>
            JOB #SYN-8492
          </span>
        </div>
      </div>

      {/* Central Visual Architecture Diagram */}
      <div className="py-5">
        <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center mb-5">
          {/* Node 1: Ingestion */}
          <div className="p-3 rounded-xl bg-midnight/80 border border-slate-800 flex flex-col items-center">
            <Database className="w-5 h-5 text-soft-periwinkle mb-1.5" />
            <span className="text-[11px] font-mono text-slate-400">Trigger</span>
            <span className="text-xs font-semibold text-cloud-white truncate max-w-full">
              Connected Systems
            </span>
          </div>

          {/* Node 2: Core Digital Employee */}
          <div className="p-3 rounded-xl bg-electric-indigo/15 border border-electric-indigo/40 flex flex-col items-center relative">
            <span className="absolute -top-2 px-1.5 py-0.2 bg-electric-indigo text-white text-[9px] font-mono rounded-full uppercase tracking-wider">
              Assigned
            </span>
            <Cpu className="w-5 h-5 text-electric-indigo mb-1.5" />
            <span className="text-[11px] font-mono text-soft-periwinkle">
              Digital Worker
            </span>
            <span className="text-xs font-semibold text-white truncate max-w-full">
              Operations Unit
            </span>
          </div>

          {/* Node 3: Oversight Gate */}
          <div className="p-3 rounded-xl bg-midnight/80 border border-slate-800 flex flex-col items-center">
            <ShieldAlert className="w-5 h-5 text-amber-400/90 mb-1.5" />
            <span className="text-[11px] font-mono text-slate-400">Oversight</span>
            <span className="text-xs font-semibold text-cloud-white truncate max-w-full">
              Human Checkpoint
            </span>
          </div>
        </div>

        {/* Step Progress Track */}
        <div className="flex items-center justify-between mb-4 px-1">
          {mockSteps.map((step, idx) => {
            const isCurrent = idx === activeStepIndex;
            const isPast = idx < activeStepIndex;
            return (
              <button
                key={step.id}
                onClick={() => {
                  setActiveStepIndex(idx);
                  setAutoPlay(false);
                }}
                className="group flex flex-col items-center focus:outline-none"
                aria-label={`View step ${step.stepNumber}: ${step.title}`}
              >
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-mono transition-all ${
                    isCurrent
                      ? "bg-electric-indigo text-white ring-4 ring-indigo-500/20 font-bold scale-110"
                      : isPast
                      ? "bg-indigo-950 text-soft-periwinkle border border-indigo-700/50"
                      : "bg-midnight text-slate-500 border border-slate-800"
                  }`}
                >
                  {isPast ? <Check className="w-3.5 h-3.5" /> : step.stepNumber}
                </div>
                <span
                  className={`text-[10px] sm:text-[11px] mt-1 hidden sm:block ${
                    isCurrent
                      ? "text-cloud-white font-medium"
                      : "text-slate-500"
                  }`}
                >
                  {step.title.split(" ")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Live Step Inspector Box */}
        <div className="rounded-xl bg-midnight/90 border border-slate-800 p-4 transition-all">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-deep-slate text-soft-periwinkle border border-slate-700">
                Phase {activeStep.stepNumber}
              </span>
              <h4 className="text-sm font-semibold text-cloud-white">
                {activeStep.title}
              </h4>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span>{activeStep.latency}</span>
            </div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed font-mono">
            {activeStep.detail}
          </p>

          <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
            <span className="text-slate-500 font-mono">
              Target: <span className="text-slate-400">{activeStep.system}</span>
            </span>
            <span className="text-electric-indigo font-medium inline-flex items-center gap-1">
              <span>Deterministic Policy</span>
              <CheckCircle2 className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </div>

      {/* Terminal Footer State */}
      <div className="mt-1 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
        <div className="flex items-center gap-1.5">
          <Terminal className="w-3.5 h-3.5 text-slate-400" />
          <span>Execution state: Durable Job Engine</span>
        </div>
        <div className="text-right text-[10px] text-slate-500">
          Click steps to inspect
        </div>
      </div>
    </div>
  );
}
