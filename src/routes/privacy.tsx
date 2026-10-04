import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/sections";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () => seo("Privacy Notice — Direct Growth Partners", "How Direct Growth Partners collects and uses information submitted through this website."),
  component: Privacy,
});

const sections = [
  ["What we collect", "When you submit an enquiry we collect the details you provide: your name, business name, contact details, business location, products sold and a description of the support you need."],
  ["How we use it", "We use this information only to respond to your enquiry, discuss a suitable scope and prepare a proposal. We do not sell your information or use it for unrelated marketing."],
  ["Storage and access", "Enquiries are stored securely and accessed only by Direct Growth Partners for the purpose described above."],
  ["Your rights", "In line with the Protection of Personal Information Act (POPIA), you may request access to, correction of, or deletion of your personal information at any time."],
  ["Contact", "To make a privacy request, please reply to any correspondence from us or submit a request through the contact form."],
];

function Privacy() {
  return (
    <>
      <PageIntro eyebrow="Legal" title="Privacy Notice" />
      <section className="section-y">
        <div className="container-x">
          <div className="max-w-3xl divide-y border-y">
            {sections.map(([h, b]) => (
              <div key={h} className="py-8">
                <h2 className="text-[19px] font-semibold text-navy">{h}</h2>
                <p className="mt-3 text-[16px] leading-relaxed text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
