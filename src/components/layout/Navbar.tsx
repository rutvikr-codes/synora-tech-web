"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SynoraLogo } from "../brand/SynoraLogo";
import { Menu, X, ArrowRight } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Platform", href: "/platform" },
  { name: "Use Cases", href: "/use-cases" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-electric-indigo text-cloud-white font-medium rounded-md shadow-lg outline-none ring-2 ring-soft-periwinkle"
      >
        Skip to main content
      </a>

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-midnight/90 backdrop-blur-md border-b border-slate-700/40 shadow-sm shadow-black/20"
            : "bg-midnight/60 backdrop-blur-sm border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <SynoraLogo variant="dark" size="md" />
            </div>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center space-x-1 lg:space-x-2"
              aria-label="Main Navigation"
            >
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                      isActive
                        ? "text-cloud-white bg-deep-slate border border-slate-700/50"
                        : "text-slate-grey hover:text-cloud-white hover:bg-deep-slate/50"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Primary Action CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-electric-indigo hover:bg-indigo-600 rounded-lg shadow-sm hover:shadow-indigo-500/25 transition-all duration-200 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-electric-indigo focus-visible:ring-offset-midnight"
              >
                <span>Discuss Your Use Case</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-slate-grey hover:text-cloud-white hover:bg-deep-slate focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-indigo"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            className="md:hidden fixed inset-x-0 top-20 bottom-0 bg-midnight/98 backdrop-blur-xl border-t border-slate-800 z-50 flex flex-col p-6 animate-in fade-in duration-200 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            <nav className="flex flex-col space-y-2 pt-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? "text-cloud-white bg-deep-slate border border-slate-700/60"
                        : "text-slate-grey hover:text-cloud-white hover:bg-deep-slate/40"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-6 mt-6 border-t border-slate-800">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 text-base font-medium text-white bg-electric-indigo hover:bg-indigo-600 rounded-lg shadow-md transition-colors"
              >
                <span>Discuss Your Use Case</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="text-center text-xs text-slate-500 mt-4">
                Synora Technologies Private Limited
              </p>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
