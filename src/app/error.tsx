"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error securely without exposing secrets
    console.error("Application error boundary triggered:", error?.message);
  }, [error]);

  return (
    <div className="min-h-screen bg-midnight text-cloud-white flex items-center justify-center p-6 bg-grid-pattern">
      <div className="max-w-md w-full text-center space-y-6 p-8 rounded-2xl bg-deep-slate border border-slate-800 shadow-2xl">
        <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 mx-auto flex items-center justify-center">
          <AlertTriangle className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <h1 className="font-heading text-2xl font-bold text-white">
            Operational Service Notice
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            An unexpected error occurred while rendering this interface. Our
            monitoring systems have recorded the event.
          </p>
        </div>

        {error.digest && (
          <div className="p-3 rounded-lg bg-midnight border border-slate-800 text-[11px] font-mono text-slate-400">
            Digest: {error.digest}
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-electric-indigo hover:bg-indigo-600 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Attempt Recovery</span>
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-midnight hover:bg-slate-800 border border-slate-700 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
