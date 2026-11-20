import type { MagnetSlug } from "./magnets";
import { GUARANTEE_TEXT, SHOW_GUARANTEE, STATES_SENTENCE } from "@/lib/site";

export interface Faq {
  q: string;
  a: string;
}

export type OfferSlug = "leak-audit" | "quickbooks" | "field-service" | "erp" | "law-firms";

export interface Offer {
  slug: OfferSlug;
  path: string;
  name: string;
  /** One line for cards and schema. */
  summary: string;
  magnet?: MagnetSlug;
  /** schema.org audienceType; defaults to field-service contractors. */
  audience?: string;
  faqs: Faq[];
}

const NOT_A_RESELLER =
  "We don't sell or resell field service software, ERP or QuickBooks. We connect what you already run and fix the process around it.";

export const OFFERS: Record<OfferSlug, Offer> = {
  "leak-audit": {
    slug: "leak-audit",
    path: "/leak-audit",
    name: "The Six-Figure Leak Audit for Field-Service Contractors",
    summary:
      "A fixed-scope AI Operations Audit that maps how dispatch, estimating, job costing and accounting talk to each other, shows where the money leaks, and lays out the fix.",
    magnet: "checklist",
    faqs: [
      {
        q: "How long does the Leak Audit take?",
        a: "Two to four weeks, fixed scope. Most of it runs in the background. We need a few hours with your office manager, a dispatcher and whoever does the books, plus read access to your systems.",
      },
      {
        q: "Do we have to switch software?",
        a: "No. The audit starts from what you already run: Jobber, Housecall Pro, ServiceTitan, QuickBooks, an ERP, spreadsheets. Most leaks get fixed by connecting and cleaning up those systems, not replacing them.",
      },
      {
        q: "Is this an AI project?",
        a: "Only where it pays. We fix the process and the integrations first. AI gets added where it returns a measurable result, like reading vendor bills, drafting follow-ups or building the weekly owner report, with a person reviewing the output.",
      },
      {
        q: "Who does the work?",
        a: "Tim Wilson, our founder, a hands-on engineer with 20+ years in databases, ERP, CRM and integration. The person who maps your process is the person who builds the fix.",
      },
      {
        q: "What do we get at the end?",
        a: "A leak map of every place jobs, hours and dollars fall through; a prioritized roadmap with estimated savings per step; and specific integration and custom-software recommendations. You can hand it to anyone to build, or have us do it.",
      },
      ...(SHOW_GUARANTEE
        ? [{ q: "What if you don't find much?", a: GUARANTEE_TEXT }]
        : []),
      {
        q: "Where do you work?",
        a: `We're based in Fort Worth, Texas and work with contractors across ${STATES_SENTENCE}. The audit runs remotely, with on-site time in DFW when it helps.`,
      },
    ],
  },
  quickbooks: {
    slug: "quickbooks",
    path: "/quickbooks-integration-contractors",
    name: "QuickBooks Sync Rescue",
    summary:
      "We fix the sync between your field service software and QuickBooks so jobs, payments and job cost post once, correctly, without the office re-keying them.",
    magnet: "sync",
    faqs: [
      {
        q: "Does Jobber sync with QuickBooks Online or Desktop?",
        a: "Jobber syncs with QuickBooks Online only. QuickBooks Desktop isn't supported, and the sync runs one way: Jobber sends records to QuickBooks Online, nothing comes back. Either way, \"it syncs\" and \"it syncs the way your books need\" are different things. The usual gaps are job cost, deposits and duplicate customers.",
      },
      {
        q: "How do I sync Jobber with QuickBooks Online?",
        a: "You connect it from inside Jobber; follow Jobber's current setup steps. The real work is the mapping: customers, products and services, sales tax and how payments land in QuickBooks. Get those wrong and you get duplicates and deposits that never match the bank. Our Sync Review shows how to check each one.",
      },
      {
        q: "Does Housecall Pro integrate with QuickBooks?",
        a: "Yes, Housecall Pro offers a QuickBooks integration. Which QuickBooks editions and which records it sends depend on your plan and version, so confirm with Housecall Pro. We get called after it's on: when invoices post but job cost, fees or deposits don't line up.",
      },
      {
        q: "Does ServiceTitan integrate with QuickBooks?",
        a: "ServiceTitan offers accounting integrations, including QuickBooks. Setup and what syncs vary by edition and configuration, so check with ServiceTitan. The common pain is the same: the office still exports, fixes and re-imports to make the books right.",
      },
      {
        q: "Is there a QuickBooks for contractors?",
        a: "Intuit offers contractor-focused editions and project or job tracking features. Which one fits depends on how you job cost and what your field software sends it. We don't sell QuickBooks. We make your field software and QuickBooks agree.",
      },
      {
        q: "Can you build a custom connector if the built-in sync isn't enough?",
        a: "Yes. When mapping fixes won't close the gap, we build a connector against the platforms' APIs so the records you need (job cost, change orders, vendor bills) post automatically. " + NOT_A_RESELLER,
      },
    ],
  },
  "field-service": {
    slug: "field-service",
    path: "/field-service-software-audit",
    name: "Field Service Stack Leak Audit",
    summary:
      "An independent audit of your field service management software and everything it touches: scheduling, dispatch, estimating, invoicing and accounting.",
    magnet: "compare",
    faqs: [
      {
        q: "What's the difference between CRM and FSM?",
        a: "A CRM tracks customers and sales: leads, estimates, follow-ups, the pipeline. Field service management (FSM) software runs the work: scheduling, dispatch, work orders, techs in the field and invoicing on site. A \"field service CRM\" blends the two. Most contractors need both to share one customer record. When they don't, that's a leak.",
      },
      {
        q: "How much does field service software cost?",
        a: "It varies widely. Most platforms charge a monthly subscription that scales with users or techs, with tiers, add-ons and sometimes onboarding fees. Check each vendor's current pricing page. The cost that rarely shows up in the quote is the office time spent re-keying what the software doesn't connect.",
      },
      {
        q: "What are common complaints about Jobber?",
        a: "The complaints we hear about Jobber are the same ones we hear about most field service platforms: the accounting sync doesn't carry what the bookkeeper needs, reporting runs out as you grow, and costs climb as you add users. Read recent reviews for current specifics. Before you switch, check whether the problem is the platform or the integration around it.",
      },
      {
        q: "What is the best field service software?",
        a: "The one your techs will actually use and that posts cleanly to your accounting. That depends on your trade, size, memberships and how you job cost. " + NOT_A_RESELLER + " That's why our recommendation is independent.",
      },
      {
        q: "Should we switch platforms?",
        a: "Sometimes. Often the platform is fine and the leak is between it and QuickBooks, your estimating tool or your reports. The audit tells you which, before you spend months migrating.",
      },
    ],
  },
  erp: {
    slug: "erp",
    path: "/construction-erp-vs-integration",
    name: "ERP Reality Check for Contractors",
    summary:
      "Before you buy construction ERP software, find out whether you need an ERP or need the systems you already own to talk to each other.",
    magnet: "checklist",
    faqs: [
      {
        q: "What is the best ERP for construction?",
        a: "It depends on your size, whether you do project or service work, how you job cost and what you already run. Options range from accounting software with add-ons to full construction ERP suites. The better first question: do you need an ERP, or do you need your current field, estimating and accounting systems connected? We're vendor-neutral and answer that before you sit through demos.",
      },
      {
        q: "What is ERP software in construction?",
        a: "One system that covers accounting, job cost, project management, purchasing, payroll and often equipment. The promise is one source of truth. The cost is a long, expensive implementation and retraining everyone.",
      },
      {
        q: "When does a contractor actually need an ERP?",
        a: "Usually when you run multiple entities or divisions, need deep job cost and committed cost tracking, or have outgrown what your accounting system can report on. If the real pain is re-keying between tools, integration is faster and cheaper.",
      },
      {
        q: "We already have an ERP. Can you help?",
        a: "Yes. We've built custom CRM, estimating and reporting systems on top of an existing ERP (including Sage 300). Most ERP pain is the edges: what gets into it and what you can get out.",
      },
    ],
  },
  "law-firms": {
    slug: "law-firms",
    path: "/law-firms",
    name: "AI and Systems Integration for Law Firms",
    summary:
      "An AI readiness and leak review for small and midsize law firms, then the integrations and governed AI workflows that pay back, with lawyers reviewing every output.",
    audience: "Small and midsize law firms",
    faqs: [
      {
        q: "Is it safe to use AI with client confidential data?",
        a: "It can be, if it's set up for it. That means business or enterprise AI plans that don't train on your data, access controls that follow your matter permissions, logging, and private deployment where the risk calls for it. Some clients restrict AI on their matters, so check engagement terms and outside counsel guidelines. Your professional obligations are yours to judge. We build and document the technical controls so you can.",
      },
      {
        q: "Do we need a legal-specific AI tool?",
        a: "Not for everything. Legal-specific tools are strong for research and drafting against legal sources. Summarizing, intake, time entry and internal operations often run well on general-purpose AI with the right governance. We don't sell or resell AI tools, so we help you pick what fits each workflow and connect it to the systems you already use.",
      },
      {
        q: "Will AI reduce our billable hours?",
        a: "The large firms in Harvey's 2026 study are split. Asked about the next year, 47% expect no change, 30% expect AI to reduce billable hours and 13% expect an increase. 90% are reassessing the billable-hour model. For a smaller firm, the quickest win is often non-billable: intake, time capture, billing and reporting, which frees lawyer time without touching how you price.",
      },
      {
        q: "Where should a small firm start?",
        a: "With a readiness review, not a tool purchase. Map how a matter moves from intake to final bill, find where time leaks and where data isn't ready for AI, then pick one or two governed workflows such as intake or document summaries. Measure the time saved before expanding.",
      },
    ],
  },
};

export const SUPPORTING_OFFERS: Offer[] = [OFFERS.quickbooks, OFFERS["field-service"], OFFERS.erp];
