import React from "react";
import Link from "next/link";
import { SynoraLogo } from "../brand/SynoraLogo";
import { ShieldCheck, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-slate-800/80 bg-midnight text-slate-grey mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Company branding & mission */}
          <div className="md:col-span-5 space-y-4">
            <SynoraLogo variant="dark" size="md" />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed mt-4">
              Synora Technologies Private Limited builds an enterprise Digital
              Workforce platform to orchestrate, execute, and operate intelligent
              Digital Employees across core business workflows.
            </p>
            <div className="pt-2 text-xs text-slate-500 font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Platform in Active MVP Development
            </div>
          </div>

          {/* Platform Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold tracking-wider text-cloud-white uppercase">
              Platform & Architecture
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/platform"
                  className="hover:text-cloud-white transition-colors"
                >
                  Digital Workforce Concept
                </Link>
              </li>
              <li>
                <Link
                  href="/platform#orchestration"
                  className="hover:text-cloud-white transition-colors"
                >
                  Workflow Orchestration
                </Link>
              </li>
              <li>
                <Link
                  href="/platform#runtime"
                  className="hover:text-cloud-white transition-colors"
                >
                  Runtime Execution
                </Link>
              </li>
              <li>
                <Link
                  href="/platform#security"
                  className="hover:text-cloud-white transition-colors"
                >
                  Security & Human Oversight
                </Link>
              </li>
              <li>
                <Link
                  href="/platform#roadmap"
                  className="hover:text-cloud-white transition-colors"
                >
                  Technical Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions & Company */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold tracking-wider text-cloud-white uppercase">
              Solutions
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/use-cases"
                  className="hover:text-cloud-white transition-colors"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/use-cases#intake"
                  className="hover:text-cloud-white transition-colors"
                >
                  Client Intake
                </Link>
              </li>
              <li>
                <Link
                  href="/use-cases#documents"
                  className="hover:text-cloud-white transition-colors"
                >
                  Document Processing
                </Link>
              </li>
              <li>
                <Link
                  href="/use-cases#operations"
                  className="hover:text-cloud-white transition-colors"
                >
                  Cross-System Operations
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold tracking-wider text-cloud-white uppercase">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-cloud-white transition-colors"
                >
                  About Synora
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-cloud-white transition-colors"
                >
                  Contact & Inquiries
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-cloud-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-cloud-white transition-colors"
                >
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-electric-indigo" />
            <span>
              &copy; {currentYear} Synora Technologies Private Limited. All rights
              reserved.
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <Link
              href="/privacy"
              className="hover:text-slate-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-slate-400 transition-colors"
            >
              Terms of Use
            </Link>
            <Link
              href="/contact"
              className="hover:text-slate-400 transition-colors inline-flex items-center gap-1"
            >
              <span>Corporate Inquiries</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
