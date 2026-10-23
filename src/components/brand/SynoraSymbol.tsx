import React from "react";

interface SynoraSymbolProps {
  className?: string;
  size?: number;
  variant?: "dark" | "light";
}

export function SynoraSymbol({
  className = "",
  size = 36,
  variant = "dark",
}: SynoraSymbolProps) {
  const gradientId = React.useId();
  const glowId = React.useId();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="Synora Symbol"
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="6"
          y1="8"
          x2="42"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="50%" stopColor="#818CF8" />
          <stop offset="100%" stopColor="#A5B4FC" />
        </linearGradient>
        <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx="0"
            dy="2"
            stdDeviation="3"
            floodColor="#6366F1"
            floodOpacity={variant === "dark" ? "0.45" : "0.25"}
          />
        </filter>
      </defs>

      {/* Background container soft bevel */}
      <rect
        x="2"
        y="2"
        width="44"
        height="44"
        rx="12"
        fill={variant === "dark" ? "#151D33" : "#F1F5F9"}
        stroke={variant === "dark" ? "rgba(99, 102, 241, 0.25)" : "rgba(99, 102, 241, 0.2)"}
        strokeWidth="1.5"
      />

      {/* Abstract Interconnected S Workflow Paths */}
      <g filter={`url(#${glowId})`}>
        {/* Upper Workflow Loop */}
        <path
          d="M34 14C34 14 32 10 24 10C16 10 13 15 13 19C13 24 18 26 24 28"
          stroke={`url(#${gradientId})`}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Lower Workflow Loop */}
        <path
          d="M24 28C30 30 35 32 35 37C35 41 32 46 24 46C16 46 14 42 14 42"
          stroke={`url(#${gradientId})`}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Central Core Orchestration Node */}
        <circle cx="24" cy="28" r="3" fill="#FFFFFF" />
        <circle cx="24" cy="28" r="5" stroke="#6366F1" strokeWidth="1.5" />

        {/* Input Trigger Node (Top Right) */}
        <circle cx="34" cy="14" r="2.2" fill="#A5B4FC" />

        {/* Output Execution Node (Bottom Left) */}
        <circle cx="14" cy="42" r="2.2" fill="#6366F1" />
      </g>
    </svg>
  );
}
