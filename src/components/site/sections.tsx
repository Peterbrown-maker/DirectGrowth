import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { services, industries, steps } from "@/lib/site";
import { ArrowButton } from "./ArrowButton";
import { LogoMark } from "./Logo";
import type { ReactNode } from "react";

const pad = (n: number) => String(n).padStart(2, "0");

export function SectionHead({ eyebrow, title, children, inverted = false }: { eyebrow: string; title: string; children?: ReactNode; inverted?: boolean }) {
  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
      <div className="lg:col-span-5">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className={`h-section mt-4 ${inverted ? "text-on-navy" : "text-navy"}`}>{title}</h2>
      </div>
      {children && (
        <div className={`lede lg:col-span-6 lg:col-start-7 lg:pt-9 ${inverted ? "text-on-navy-muted" : "text-muted-foreground"}`}>{children}</div>
      )}
    </div>
  );
}

export function ServicesList() {
  return (
    <ol className="mt-16 border-t">
      {services.map((s, i) => (
        <li key={s.slug} className="group relative border-b transition-colors hover:bg-secondary">
          <span className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-teal transition-transform duration-300 group-hover:scale-y-100" />
          <div className="grid gap-4 py-9 lg:grid-cols-12 lg:gap-8 lg:px-6">
            <span className="text-[15px] font-semibold text-teal lg:col-span-1 tabular-nums">{pad(i + 1)}</span>
            <h3 className="text-[17px] font-semibold uppercase tracking-[0.06em] text-navy lg:col-span-4">{s.title}</h3>
            <p className="text-[16px] leading-relaxed text-muted-foreground lg:col-span-4">{s.body}</p>
            <div className="lg:col-span-3 lg:text-right">
              <Link
                to="/contact"
                search={{ service: s.title }}
                className="inline-flex items-center gap-2 text-[14.5px] font-semibold text-navy hover:text-teal"
              >
                Enquire About This Service
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function WhoWeSupport() {
  return (
    <section className="bg-navy section-y" aria-labelledby="who">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="eyebrow">Sectors</p>
            <h2 id="who" className="h-section mt-4 text-on-navy">Who We Support</h2>
            <p className="lede mt-6 text-on-navy-muted">
              We work with small suppliers, wholesalers and growing businesses in food and FMCG, gas, cleaning products,
              packaging, beauty and related consumer products.
            </p>
          </div>
          <ol className="lg:col-span-6 lg:col-start-7 border-t border-navy-line">
            {industries.map((name, i) => (
              <li key={name} className="flex items-baseline gap-8 border-b border-navy-line py-6">
                <span className="w-8 text-[14px] font-semibold text-teal tabular-nums">{pad(i + 1)}</span>
                <span className="text-[22px] lg:text-[28px] font-medium tracking-[-0.01em] text-on-navy">{name}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-8">
      <span aria-hidden className="absolute left-0 right-0 top-[7px] hidden h-px bg-border md:block" />
      <span aria-hidden className="absolute left-0 top-[7px] hidden h-px w-1/4 bg-teal md:block" />
      {steps.map((s, i) => (
        <li key={s.title} className="relative">
          <span className="relative block h-[15px] w-[15px] rounded-full border-2 border-teal bg-background" />
          <p className="mt-8 text-[14px] font-semibold text-teal tabular-nums">{pad(i + 1)}</p>
          <h3 className="mt-2 text-[17px] font-semibold uppercase tracking-[0.08em] text-navy">{s.title}</h3>
          <p className="mt-3 text-[16px] leading-relaxed text-muted-foreground">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}

export function FinalCta() {
  return (
    <section className="cta-glow relative overflow-hidden" aria-labelledby="cta">
      <LogoMark className="pointer-events-none absolute -right-16 -bottom-16 h-80 w-80 opacity-[0.06]" />
      <div className="container-x section-y relative grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="eyebrow">Next step</p>
          <h2 id="cta" className="h-section mt-4 text-on-navy">Let us discuss your sales support needs</h2>
          <p className="lede mt-6 max-w-xl text-on-navy-muted">
            Tell us what you sell, who you want to reach and where you need support. We will use this information to
            discuss a suitable scope and proposal.
          </p>
        </div>
        <div className="lg:col-span-4 lg:col-start-9 lg:text-right">
          <ArrowButton to="/contact" variant="light">Request a Proposal</ArrowButton>
        </div>
      </div>
    </section>
  );
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="border-b bg-secondary">
      <div className="container-x pt-20 pb-16 lg:pt-28 lg:pb-24 reveal">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="h-display mt-5 max-w-4xl text-navy">{title}</h1>
        {children && <div className="lede mt-7 max-w-2xl text-muted-foreground">{children}</div>}
      </div>
    </section>
  );
}
