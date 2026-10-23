import React from "react";

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 space-y-4">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-xl bg-electric-indigo/20 animate-ping" />
        <div className="relative w-12 h-12 rounded-xl bg-deep-slate border border-electric-indigo/50 flex items-center justify-center">
          <div className="w-5 h-5 rounded-full border-2 border-electric-indigo border-t-transparent animate-spin" />
        </div>
      </div>
      <p className="text-xs font-mono text-slate-400 animate-pulse">
        Loading Synora Platform...
      </p>
    </div>
  );
}
