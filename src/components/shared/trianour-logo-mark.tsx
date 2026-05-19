import { cn } from "@/lib/utils";

/** Modern logomark: three nourishing arcs (Tria) + central seed (Nour) */
export function TriaNourLogoMark({
  className,
  size = 36,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <defs>
        <linearGradient id="tn-grad" x1="8" y1="4" x2="32" y2="36">
          <stop offset="0%" stopColor="oklch(0.52 0.09 165)" />
          <stop offset="100%" stopColor="oklch(0.62 0.1 165)" />
        </linearGradient>
        <linearGradient id="tn-gold" x1="20" y1="8" x2="20" y2="32">
          <stop offset="0%" stopColor="oklch(0.72 0.12 75)" />
          <stop offset="100%" stopColor="oklch(0.52 0.09 165)" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="12" fill="url(#tn-grad)" />
      <path
        d="M12 26C12 18 16 12 20 12C24 12 28 18 28 26"
        stroke="white"
        strokeOpacity="0.35"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M14 24C14 17.5 17 13 20 13C23 13 26 17.5 26 24"
        stroke="white"
        strokeOpacity="0.55"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 22C16 17.5 18 14 20 14C22 14 24 17.5 24 22"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="20" cy="22" r="3.5" fill="url(#tn-gold)" />
      <circle cx="20" cy="22" r="1.2" fill="white" fillOpacity="0.9" />
    </svg>
  );
}
