import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState, type FormEvent, type ReactNode } from "react";
import { z } from "zod";
import { CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import { submitEnquiry, enquirySchema } from "@/lib/enquiry.functions";
import { serviceOptions, contact } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  validateSearch: z.object({ service: z.string().optional() }),
  head: () =>
    seo(
      "Request a Proposal — Direct Growth Partners",
      "Tell us where your business needs sales support. Share your products, target customers and the support you need.",
    ),
  component: Contact,
});

type Fields = {
  name: string; business_name: string; contact: string; business_location: string;
  products_sold: string; service: string; message: string; contact_preference: string; website: string;
};

const field =
  "mt-2 block w-full rounded-md border border-input bg-background px-4 py-3 text-[16px] text-foreground transition-colors placeholder:text-muted-foreground/70 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/15 aria-[invalid=true]:border-destructive";

function Contact() {
  const { service } = Route.useSearch();
  const send = useServerFn(submitEnquiry);
  const initialService = serviceOptions.includes(service as never) ? (service as string) : "";
  const [values, setValues] = useState<Fields>({
    name: "", business_name: "", contact: "", business_location: "", products_sold: "",
    service: initialService, message: "", contact_preference: "", website: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const set = (k: keyof Fields) => (e: { target: { value: string } }) => setValues((v) => ({ ...v, [k]: e.target.value }));

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const payload = { ...values, contact_preference: values.contact_preference || undefined };
    const parsed = enquirySchema.safeParse(payload);
    if (!parsed.success) {
      const errs: typeof errors = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof Fields;
        if (!errs[k]) errs[k] = issue.message;
      }
      setErrors(errs);
      const first = Object.keys(errs)[0];
      if (first) document.getElementById(first)?.focus();
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      await send({ data: payload });
      setStatus("success");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section className="bg-secondary border-b">
        <div className="container-x section-y">
          <div className="mx-auto max-w-2xl rounded-2xl border bg-card p-10 shadow-soft lg:p-14 reveal" role="status">
            <CheckCircle2 className="h-9 w-9 text-teal" strokeWidth={1.5} />
            <h1 className="mt-6 text-[32px] font-semibold tracking-[-0.02em] text-navy">Thank you. Your enquiry has been received.</h1>
            <p className="lede mt-4 text-muted-foreground">Sharon will review your enquiry and contact you to discuss the next step.</p>
            <Link to="/" className="group mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-navy hover:text-teal">
              Return to home <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-secondary">
      <div className="container-x pt-20 pb-24 lg:pt-28 lg:pb-32 grid gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4 reveal">
          <p className="eyebrow">Request a Proposal</p>
          <h1 className="mt-5 text-[38px] lg:text-[48px] font-semibold leading-[1.08] tracking-[-0.025em] text-navy">
            Tell us where your business needs sales support
          </h1>
          <p className="lede mt-6 text-muted-foreground">
            Share a few details about your business, the customers you want to reach and the support you need. Sharon
            will review your enquiry and contact you to discuss the next step.
          </p>
          <ol className="mt-10 space-y-3 border-t pt-8 text-[14.5px] text-muted-foreground">
            <li><span className="font-semibold text-navy">1.</span> We review your enquiry</li>
            <li><span className="font-semibold text-navy">2.</span> We contact you to discuss scope</li>
            <li><span className="font-semibold text-navy">3.</span> You receive a written proposal</li>
          </ol>
        <div className="mt-8 flex flex-col gap-3">
          <a href={`tel:${contact.phone}`} className="inline-flex h-12 items-center justify-center rounded-[9px] bg-navy px-6 text-[15px] font-semibold text-on-navy shadow-soft hover:bg-navy-deep">
            Call {contact.phone}
          </a>
          <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-[9px] px-6 text-[15px] font-semibold border border-input bg-background text-navy hover:border-navy">
            Message on WhatsApp
          </a>
        </div>
        </div>

        <form onSubmit={onSubmit} noValidate className="lg:col-span-7 lg:col-start-6 rounded-2xl border bg-card p-6 shadow-soft sm:p-10 lg:p-12">
          {status === "error" && (
            <div role="alert" className="mb-8 flex gap-3 rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-[14.5px] text-foreground">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
              <div>
                <p className="font-semibold">Your enquiry could not be sent.</p>
                <p className="mt-1 text-muted-foreground">
                  Your details have been kept — please try again in a moment.
                  {contact.email ? <> Alternatively, email <a className="underline" href={`mailto:${contact.email}`}>{contact.email}</a>.</> : null}
                  {contact.phone ? <> Or call <a className="underline" href={`tel:${contact.phone}`}>{contact.phone}</a>.</> : null}
                </p>
              </div>
            </div>
          )}

          <Group n="01" title="Your details">
            <Field id="name" label="Name" required error={errors.name}>
              <input id="name" autoComplete="name" className={field} value={values.name} onChange={set("name")} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} />
            </Field>
            <Field id="business_name" label="Business name" required error={errors.business_name}>
              <input id="business_name" autoComplete="organization" className={field} value={values.business_name} onChange={set("business_name")} aria-invalid={!!errors.business_name} aria-describedby={errors.business_name ? "business_name-err" : undefined} />
            </Field>
            <Field id="contact" label="Email or phone" required error={errors.contact} full>
              <input id="contact" className={field} value={values.contact} onChange={set("contact")} aria-invalid={!!errors.contact} aria-describedby={errors.contact ? "contact-err" : undefined} />
            </Field>
          </Group>

          <Group n="02" title="Your business">
            <Field id="business_location" label="Business location">
              <input id="business_location" className={field} placeholder="e.g. Midrand" value={values.business_location} onChange={set("business_location")} />
            </Field>
            <Field id="products_sold" label="Products sold">
              <input id="products_sold" className={field} placeholder="e.g. Cleaning products" value={values.products_sold} onChange={set("products_sold")} />
            </Field>
          </Group>

          <Group n="03" title="Your need">
            <Field id="service" label="Service needed" required error={errors.service} full>
              <select id="service" className={field} value={values.service} onChange={set("service")} aria-invalid={!!errors.service} aria-describedby={errors.service ? "service-err" : undefined}>
                <option value="">Select a service</option>
                {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </Field>
            <Field id="message" label="What support do you need?" required error={errors.message} full>
              <textarea id="message" rows={5} className={field} value={values.message} onChange={set("message")} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined} />
            </Field>
            <fieldset className="sm:col-span-2">
              <legend className="text-[14.5px] font-semibold text-foreground">Contact preference</legend>
              <div className="mt-3 flex flex-wrap gap-3">
                {["Email", "Phone", "WhatsApp"].map((p) => (
                  <label key={p} className="flex cursor-pointer items-center gap-2.5 rounded-md border border-input bg-background px-4 py-2.5 text-[15px] has-[:checked]:border-teal has-[:checked]:text-navy">
                    <input type="radio" name="pref" value={p} checked={values.contact_preference === p} onChange={set("contact_preference")} className="accent-teal" />
                    {p}
                  </label>
                ))}
              </div>
            </fieldset>
          </Group>

          <div aria-hidden className="absolute -left-[9999px]">
            <label>Website<input tabIndex={-1} autoComplete="off" value={values.website} onChange={set("website")} /></label>
          </div>

          <div className="mt-10 flex flex-col gap-5 border-t pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-sm text-[13.5px] leading-relaxed text-muted-foreground">
              We use your details only to respond to this enquiry. See our <Link to="/privacy" className="underline hover:text-navy">privacy notice</Link>.
            </p>
            <button type="submit" disabled={status === "sending"} className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-[9px] bg-navy px-7 text-[15px] font-semibold text-on-navy shadow-soft transition-colors hover:bg-navy-deep disabled:opacity-60">
              {status === "sending" ? "Sending…" : "Submit enquiry"}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Group({ n, title, children }: { n: string; title: string; children: ReactNode }) {
  return (
    <fieldset className="border-t pt-8 first-of-type:border-t-0 first-of-type:pt-0 mt-10 first-of-type:mt-0">
      <legend className="sr-only">{title}</legend>
      <p aria-hidden className="text-[12.5px] font-semibold uppercase tracking-[0.12em] text-navy">
        <span className="text-teal">{n}</span>&nbsp;&nbsp;{title}
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">{children}</div>
    </fieldset>
  );
}

function Field({ id, label, required, error, full, children }: { id: string; label: string; required?: boolean; error?: string | undefined; full?: boolean; children: ReactNode }) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label htmlFor={id} className="text-[14.5px] font-semibold text-foreground">
        {label} {required && <span className="text-teal" aria-hidden>*</span>}
        {required && <span className="sr-only">(required)</span>}
      </label>
      {children}
      {error && <p id={`${id}-err`} className="mt-2 text-[13.5px] text-destructive">{error}</p>}
    </div>
  );
}
