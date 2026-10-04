import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "light" | "ghostLight";

const styles: Record<Variant, string> = {
  primary: "bg-navy text-on-navy hover:bg-navy-deep shadow-soft",
  outline: "border border-input bg-background text-navy hover:border-navy",
  light: "bg-background text-navy hover:bg-secondary",
  ghostLight: "border border-navy-line text-on-navy hover:bg-on-navy/5",
};

export function ArrowButton({
  to,
  search,
  children,
  variant = "primary",
  className = "",
}: {
  to: string;
  search?: Record<string, string>;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      to={to}
      search={search as never}
      className={`group inline-flex h-12 items-center gap-2.5 rounded-[9px] px-6 text-[15px] font-semibold transition-all duration-200 ${styles[variant]} ${className}`}
    >
      {children}
      <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
    </Link>
  );
}
