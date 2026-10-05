import { Link } from "@tanstack/react-router";

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <img src="/brand-mark.png" aria-hidden="true" className={className} alt="" />
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
