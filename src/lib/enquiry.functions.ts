import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { serviceOptions } from "./site";

export const enquirySchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(120),
  business_name: z.string().trim().min(1, "Please enter your business name").max(160),
  contact: z
    .string()
    .trim()
    .min(1, "Please enter an email address or phone number")
    .max(160)
    .refine(
      (v) => z.string().email().safeParse(v).success || /^\+?[\d\s()-]{9,20}$/.test(v),
      "Please enter a valid email address or phone number",
    ),
  business_location: z.string().trim().max(160).optional().default(""),
  products_sold: z.string().trim().max(300).optional().default(""),
  service: z.enum(serviceOptions as unknown as [string, ...string[]], { message: "Please choose a service" }),
  message: z.string().trim().min(10, "Please describe the support you need (at least 10 characters)").max(3000),
  contact_preference: z.enum(["Email", "Phone", "WhatsApp"]).optional(),
  website: z.string().max(0).optional().default(""), // honeypot
});

export type EnquiryInput = z.input<typeof enquirySchema>;

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => enquirySchema.parse(data))
  .handler(async ({ data }) => {
    const { website, ...row } = data;
    if (website) return { ok: true };
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("enquiries").insert({
      ...row,
      business_location: row.business_location || null,
      products_sold: row.products_sold || null,
      contact_preference: row.contact_preference ?? null,
    });
    if (error) {
      console.error("enquiry insert failed", error);
      throw new Error("Could not save enquiry");
    }
    return { ok: true };
  });
