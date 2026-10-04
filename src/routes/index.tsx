import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero.jpg";
import process from "@/assets/process.jpg";
import { ArrowButton } from "@/components/site/ArrowButton";
import { SectionHead, ServicesList, WhoWeSupport, Process, FinalCta } from "@/components/site/sections";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    seo(
      "Direct Growth Partners — Sales & Marketing Agency, Gauteng",
      "Outsourced sales, telesales, customer acquisition, promotions and brand activations for suppliers and growing businesses in Gauteng.",
    ),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <svg aria-hidden className="pointer-events-none absolute -left-10 top-24 hidden h-[520px] w-[520px] lg:block" viewBox="0 0 520 520">
          <path d="M0 470 L230 240 L300 310 L520 90" fill="none" className="stroke-teal" strokeOpacity="0.12" strokeWidth="1.5" />
        </svg>
        <div className="container-x relative grid gap-14 pt-14 pb-20 lg:grid-cols-12 lg:gap-8 lg:pt-20 lg:pb-28">
          <div className="lg:col-span-6 lg:pt-10 reveal">
            <p className="eyebrow">Sales &amp; Marketing Agency</p>
            <h1 className="h-display mt-6 text-navy">
              Sales support that helps your business reach customers and win repeat orders
            </h1>
            <p className="lede mt-7 max-w-xl text-muted-foreground">
              Direct Growth Partners provides outsourced sales, telesales, customer acquisition, promotions and brand
              activations for suppliers and growing businesses. We help you find potential buyers, follow up enquiries
              and keep existing customers engaged.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ArrowButton to="/contact">Request a Proposal</ArrowButton>
              <ArrowButton to="/services" variant="outline">Explore Our Services</ArrowButton>
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 reveal [animation-delay:150ms]">
            <div className="overflow-hidden rounded-2xl border shadow-soft">
              <img
                src={hero}
                width={1280}
                height={1440}
                alt="A supplier and a sales representative reviewing an order sheet beside product samples"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-y border-t" aria-labelledby="services">
        <div className="container-x">
          <SectionHead eyebrow="Services" title="Sales support built around your business">
            From finding new customers to following up repeat orders, we coordinate telephone and field sales activity
            around your products, target market and delivery schedule.
          </SectionHead>
          <ServicesList />
        </div>
      </section>

      <WhoWeSupport />

      <section className="section-y" aria-labelledby="how">
        <div className="container-x">
          <SectionHead eyebrow="Process" title="How We Work">
            Every engagement follows the same four stages, so scope, responsibilities and reporting are clear from the
            start.
          </SectionHead>
          <Process />
          <Link to="/how-we-work" className="group mt-14 inline-flex items-center gap-2 text-[15px] font-semibold text-navy hover:text-teal">
            See engagement options <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <section className="section-y bg-secondary border-y" aria-labelledby="about">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
          <div className="lg:col-span-6 overflow-hidden rounded-2xl border shadow-soft">
            <img src={process} loading="lazy" width={1600} height={1104} alt="Working through a printed customer list with notes and a telephone headset" className="aspect-[4/3] w-full object-cover" />
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="eyebrow">Founder experience</p>
            <h2 id="about" className="h-section mt-4 text-navy">Built on hands-on sales coordination</h2>
            <p className="lede mt-6 text-muted-foreground">
              Founder Sharon Tlhalefo Kgobudi brings experience in modern trade sales supervision, telesales management
              and customer order coordination — the day-to-day work of keeping customers ordering and orders accurate.
            </p>
            <div className="mt-9">
              <ArrowButton to="/about" variant="outline">About Direct Growth Partners</ArrowButton>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
