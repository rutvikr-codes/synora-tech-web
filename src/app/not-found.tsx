import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, Home, Compass, MessageSquare } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-midnight text-cloud-white">
      <Navbar />

      <main id="main-content" className="flex-grow flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-grid-pattern">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-deep-slate border border-slate-700 font-mono text-2xl font-bold text-electric-indigo shadow-lg shadow-indigo-950/40">
            404
          </div>

          <div className="space-y-2">
            <h1 className="font-heading text-3xl font-bold text-white">
              Page Not Found
            </h1>
            <p className="text-sm text-slate-400 leading-relaxed">
              The operational route or resource you requested does not exist or has been relocated within the Synora platform architecture.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-deep-slate/60 border border-slate-800 space-y-2.5 text-xs text-left">
            <span className="font-mono text-slate-500 uppercase tracking-wider block">
              Quick Navigation
            </span>
            <div className="grid grid-cols-1 gap-2">
              <Link
                href="/"
                className="flex items-center gap-2 p-2 rounded-lg bg-midnight hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              >
                <Home className="w-4 h-4 text-electric-indigo" />
                <span>Return to Homepage</span>
              </Link>
              <Link
                href="/platform"
                className="flex items-center gap-2 p-2 rounded-lg bg-midnight hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              >
                <Compass className="w-4 h-4 text-electric-indigo" />
                <span>Explore Platform Architecture</span>
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2 p-2 rounded-lg bg-midnight hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-electric-indigo" />
                <span>Contact Operations Team</span>
              </Link>
            </div>
          </div>

          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-soft-periwinkle hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to synoratech.in</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
