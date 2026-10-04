import { createFileRoute } from "@tanstack/react-router";
import { ArrowButton } from "@/components/site/ArrowButton";
import { PageIntro, Process, SectionHead, FinalCta } from "@/components/site/sections";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/how-we-work")({
  head: () =>
    seo(
      "How We Work — Direct Growth Partners",
      "A four-stage process — discovery, setup, delivery and review — and engagement options from 30-day pilots to monthly telesales support.",
    ),
  component: HowWeWork,
});

const options = [
  { title: "30 Day Pilot", body: "A focused campaign for one customer segment, including setup, customer follow-ups, weekly reporting and a final review.", service: "Not sure yet" },
  { title: "Monthly Telesales Support", body: "Recurring customer contact, repeat-order follow-ups, enquiry handling and agreed sales administration.", service: "Telesales and Repeat Orders" },
  { title: "Customer Recovery Campaign", body: "A defined project to contact inactive accounts and pursue approved recovery opportunities.", service: "Inactive Customer Recovery" },
  { title: "Promotions & Activations", body: "Campaign planning, promoter coordination, customer engagement and an agreed event report.", service: "Promotions and Brand Activations" },
];

function HowWeWork() {
  return (
    <>
      <PageIntro eyebrow="How We Work" title="A clear process from first conversation to review">
        Scope, hours, reporting and responsibilities are agreed before any activity begins.
      </PageIntro>
      <section className="section-y">
        <div className="container-x">
          <p className="eyebrow">Process</p>
          <h2 className="h-section mt-4 text-navy">Four stages</h2>
          <Process />
        </div>
      </section>
      <section className="section-y border-t bg-secondary">
        <div className="container-x">
          <SectionHead eyebrow="Engagement options" title="Ways to work with us">
            Each option is scoped to your business. Fees are agreed in the proposal once we understand your requirements.
          </SectionHead>
          <div className="mt-16 grid border-t md:grid-cols-2">
            {options.map((o, i) => (
              <article key={o.title} className={`flex flex-col border-b py-10 md:px-10 ${i % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0"}`}>
                <p className="text-[14px] font-semibold text-teal tabular-nums">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-[24px] font-semibold tracking-[-0.01em] text-navy">{o.title}</h3>
                <p className="mt-4 max-w-md text-[16px] leading-relaxed text-muted-foreground">{o.body}</p>
                <div className="mt-8">
                  <ArrowButton to="/contact" search={{ service: o.service }} variant="outline">Discuss this option</ArrowButton>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
