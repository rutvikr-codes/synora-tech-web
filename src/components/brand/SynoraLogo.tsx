import React from "react";
import Link from "next/link";
import { SynoraSymbol } from "./SynoraSymbol";

interface SynoraLogoProps {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  withLink?: boolean;
  className?: string;
  showSubtitle?: boolean;
}

export function SynoraLogo({
  variant = "dark",
  size = "md",
  withLink = true,
  className = "",
  showSubtitle = true,
}: SynoraLogoProps) {
  const iconSizes = {
    sm: 28,
    md: 36,
    lg: 44,
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  const subtitleSizes = {
    sm: "text-[9px] tracking-[0.2em]",
    md: "text-[10px] tracking-[0.24em]",
    lg: "text-xs tracking-[0.28em]",
  };

  const isDark = variant === "dark";

  const content = (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <SynoraSymbol
        size={iconSizes[size]}
        variant={variant}
        className="transition-transform duration-300 group-hover:scale-105"
      />
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-heading font-bold tracking-tight ${
              textSizes[size]
            } ${isDark ? "text-cloud-white" : "text-midnight"}`}
          >
            SYNORA
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-electric-indigo" />
        </div>
        {showSubtitle && (
          <span
            className={`font-sans font-medium uppercase mt-0.5 ${
              subtitleSizes[size]
            } ${isDark ? "text-slate-grey" : "text-slate-600"}`}
          >
            Technologies
          </span>
        )}
      </div>
    </div>
  );

  if (withLink) {
    return (
      <Link
        href="/"
        aria-label="Synora Technologies - Home"
        className="group inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-indigo rounded-lg"
      >
        {content}
      </Link>
    );
  }

  return content;
}
