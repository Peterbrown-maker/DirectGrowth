export const services = [
  {
    slug: "new-customer-acquisition",
    title: "New Customer Acquisition",
    body: "We identify and contact potential buyers within your target market, introduce your products and pass qualified opportunities back to you.",
  },
  {
    slug: "telesales-repeat-orders",
    title: "Telesales and Repeat Orders",
    body: "Scheduled telephone follow-ups with existing customers to confirm needs, capture repeat orders and keep accounts active between deliveries.",
  },
  {
    slug: "inactive-customer-recovery",
    title: "Inactive Customer Recovery",
    body: "A structured approach to re-engaging accounts that have stopped ordering, understanding why and pursuing approved recovery opportunities.",
  },
  {
    slug: "order-capture-administration",
    title: "Order Capture and Sales Administration",
    body: "Accurate order capture against your catalogue and pricing, with clear handover to your operations and delivery teams.",
  },
  {
    slug: "promotions-activations",
    title: "Promotions and Brand Activations",
    body: "Planning and coordination of in-store promotions and activations, including promoter coordination and an agreed event report.",
  },
  {
    slug: "sales-activity-reporting",
    title: "Sales Activity Reporting",
    body: "Regular, readable reports on calls made, orders captured, customer feedback and issues requiring your attention.",
  },
] as const;

export const serviceOptions = [...services.map((s) => s.title), "Not sure yet"] as const;

export const industries = ["Food & FMCG", "Gas", "Cleaning Products", "Packaging", "Beauty", "Related Consumer Products"];

export const steps = [
  { title: "Discovery", body: "Agree the sales challenge, target customers and desired outcomes." },
  { title: "Setup", body: "Confirm scope, hours, fees, permissions, scripts and reporting." },
  { title: "Delivery", body: "Conduct the agreed activity and escalate issues promptly." },
  { title: "Review", body: "Assess results and decide whether to continue or adjust the service." },
];

/** Contact details — set these once confirmed. Left empty on purpose; nothing is shown until supplied. */
export const contact = {
  phone: "",
  email: "",
  whatsapp: "",
};

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/how-we-work", label: "How We Work" },
  { to: "/contact", label: "Contact" },
] as const;
