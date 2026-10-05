import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, FinalCta } from "@/components/site/sections";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    seo(
      "About — Direct Growth Partners",
      "Direct Growth Partners helps businesses build stronger customer relationships through reliable follow-up and accurate order administration.",
    ),
  component: About,
});

function About() {
  return (
    <>
      <PageIntro eyebrow="About" title="About Direct Growth Partners">
        Direct Growth Partners helps businesses build stronger customer relationships through reliable follow-up,
        coordinated sales activity and accurate order administration. We work from agreed customer lists, product
        catalogues and pricing structures so that outreach and order handling stay aligned with each client’s business.
      </PageIntro>
      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="flex aspect-[4/5] items-end rounded-2xl border bg-secondary p-6">
              <img src="/founder.jpg" alt="Sharon Tlhalefo Kgobudi — Founder" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="eyebrow">Founder</p>
            <h2 className="h-section mt-4 text-navy">Sharon Tlhalefo Kgobudi</h2>
            <div className="lede mt-8 space-y-6 text-muted-foreground">
              <p>
                Sharon brings experience in modern trade sales supervision, telesales management and customer order
                coordination at PepsiCo South Africa. Her background includes customer follow-ups, collaboration with
                sales and operations teams, and accurate order administration.
              </p>
              <p>She holds a Diploma in Business Management from Boston City Campus.</p>
            </div>
            <dl className="mt-12 grid border-t sm:grid-cols-3">
              {[
                ["Focus", "Sales coordination"],
                ["Based in", "Gauteng"],
                ["Works with", "Suppliers & wholesalers"],
              ].map(([k, v]) => (
                <div key={k} className="border-b py-5 sm:border-b-0 sm:pr-6">
                  <dt className="text-[12.5px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">{k}</dt>
                  <dd className="mt-2 text-[16px] font-medium text-navy">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-10 text-[13.5px] text-muted-foreground">
              Previous employers are listed as professional background only and are not clients of Direct Growth Partners.
            </p>
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
