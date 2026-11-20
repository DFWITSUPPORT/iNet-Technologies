import type { Faq } from "./offers";

/**
 * Home FAQ: the best questions across the offer pages, reworded so no question duplicates
 * another page's FAQPage entry word for word.
 */
export const HOME_FAQS: Faq[] = [
  {
    q: "Does our field service software sync with QuickBooks?",
    a: "Usually, but not the way your books need. Jobber syncs one way to QuickBooks Online only; QuickBooks Desktop isn't supported. Housecall Pro and ServiceTitan offer QuickBooks integrations that vary by plan and edition, so confirm with the vendor. The gaps we see most are job cost, deposits and duplicate customers. We fix the mapping or build a connector.",
  },
  {
    q: "Is a field service CRM the same as field service management software?",
    a: "Not quite. A CRM tracks customers, estimates and follow-ups. Field service management software runs the work: scheduling, dispatch, work orders and invoicing on site. Plenty of platforms blend both. What matters is that sales, dispatch and accounting share one customer and one job record.",
  },
  {
    q: "Do we need an ERP, or just better integration?",
    a: "Most contractors need integration first. An ERP earns its cost when you run several entities, need deep committed-cost and WIP tracking, or have outgrown your accounting system's reporting. If the pain is typing the same job into three tools, connecting them is faster and cheaper.",
  },
  {
    q: "We already bought software. Can you still help?",
    a: "Yes, and that's where we usually start. We don't sell or resell software. We work with what you run today (field platforms, QuickBooks, ERPs such as Sage 300, spreadsheets) and close the gaps between them. No rip-and-replace.",
  },
  {
    q: "How do we get started?",
    a: "Grab the free Leak Checklist and walk one job through it. If you find more than a couple of places where work gets re-typed, request the Six-Figure Leak Audit: a fixed-scope, two-to-four-week review that ends with a prioritized plan.",
  },
];
