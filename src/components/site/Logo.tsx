import { Link } from "@tanstack/react-router";

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={className}>
      <rect width="40" height="40" rx="9" className="fill-navy" />
      <path d="M10 27 L19 18 L23 22 L30 13" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="stroke-teal" />
      <path d="M24.5 13 H30 V18.5" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="stroke-teal" />
    </svg>
  );
}

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Direct Growth Partners — home">
      <LogoMark className="h-9 w-9 shrink-0" />
      <span className="leading-none">
        <span className={`block text-[14px] font-bold tracking-[0.08em] ${inverted ? "text-on-navy" : "text-navy"}`}>
          DIRECT GROWTH PARTNERS
        </span>
        <span className={`mt-1 block text-[11px] font-medium tracking-[0.06em] ${inverted ? "text-on-navy-muted" : "text-muted-foreground"}`}>
          Sales &amp; Marketing Agency
        </span>
      </span>
    </Link>
  );
}
