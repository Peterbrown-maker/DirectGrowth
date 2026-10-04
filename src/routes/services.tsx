import { createFileRoute } from "@tanstack/react-router";
import retail from "@/assets/retail.jpg";
import { PageIntro, ServicesList, FinalCta } from "@/components/site/sections";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () =>
    seo(
      "Services — Direct Growth Partners",
      "New customer acquisition, telesales and repeat orders, customer recovery, order administration, promotions and sales reporting.",
    ),
  component: Services,
});

function Services() {
  return (
    <>
      <PageIntro eyebrow="Services" title="Sales support built around your business">
        From finding new customers to following up repeat orders, we coordinate telephone and field sales activity
        around your products, target market and delivery schedule.
      </PageIntro>
      <section className="section-y">
        <div className="container-x">
          <ServicesList />
          <div className="mt-24 overflow-hidden rounded-2xl border shadow-soft">
            <img src={retail} loading="lazy" width={1600} height={1008} alt="Stocked shelves of food and cleaning products in a retail store aisle" className="aspect-[16/7] w-full object-cover" />
          </div>
          <p className="mt-8 max-w-3xl text-[14.5px] leading-relaxed text-muted-foreground">
            We work from agreed customer lists, product catalogues and pricing structures. Results depend on demand,
            pricing, stock and fulfilment, and no specific sales result is guaranteed.
          </p>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
