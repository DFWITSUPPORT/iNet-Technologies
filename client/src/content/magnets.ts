export type MagnetSlug = "checklist" | "compare" | "sync";

export interface Magnet {
  slug: MagnetSlug;
  path: string;
  /** The word buyers reply with by email. */
  keyword: string;
  title: string;
  shortTitle: string;
  h1: string;
  pitch: string;
  inside: string[];
  forWho: string;
}

export const MAGNETS: Record<MagnetSlug, Magnet> = {
  checklist: {
    slug: "checklist",
    path: "/texas-leak-checklist",
    keyword: "checklist",
    title: "Texas Field-Service Systems Leak Checklist",
    shortTitle: "The Leak Checklist",
    h1: "The Texas Field-Service Leak Checklist: 10 places your jobs get re-typed",
    pitch:
      "Every time someone in your office types a job a second time, you pay for it twice and risk getting it wrong. This checklist walks the path of one job, from the first call to the paid invoice, and shows the 10 places it usually gets re-keyed.",
    inside: [
      "Call or web lead re-typed into the field software",
      "Estimate re-built as a job or work order",
      "Approved estimate re-keyed into a purchase order",
      "Field change orders that never reach the invoice",
      "Tech hours copied from the app into a timesheet spreadsheet",
      "Materials used on site that never hit job cost",
      "Completed job re-entered as a QuickBooks invoice",
      "Payments taken in the field re-entered as deposits",
      "Vendor bills keyed in without the job they belong to",
      "Owner reports rebuilt by hand from three systems every week",
    ],
    forWho:
      "HVAC, plumbing, electrical and restoration contractors running a field platform next to QuickBooks or another accounting system.",
  },
  compare: {
    slug: "compare",
    path: "/jobber-vs-housecall-pro-vs-servicetitan",
    keyword: "compare",
    title: "Jobber vs Housecall Pro vs ServiceTitan: Questions to Ask Before You Switch",
    shortTitle: "Jobber vs Housecall Pro vs ServiceTitan",
    h1: "Jobber vs Housecall Pro vs ServiceTitan: questions to ask before you switch",
    pitch:
      "Switching field service software is expensive and slow. Most contractors switch because of a gap between the field and the books, and the new platform often has the same gap. This guide is the list of questions to answer before you sign anything.",
    inside: [
      "What actually posts to QuickBooks: invoices, payments, line items, job cost or just totals",
      "How each platform handles change orders, memberships and multi-visit jobs",
      "What your data looks like on the way out if you leave later",
      "Per-user and per-tech pricing questions to ask in the demo",
      "Which reports your bookkeeper still has to build by hand",
      "When fixing the integration beats switching platforms",
    ],
    forWho:
      "Owners and ops leads who are unhappy with their current field service software and are shopping for a replacement.",
  },
  sync: {
    slug: "sync",
    path: "/quickbooks-sync-review",
    keyword: "sync",
    title: "QuickBooks + Field Software Sync Review: What Actually Posts, What Doesn't",
    shortTitle: "QuickBooks Sync Review",
    h1: "QuickBooks + field software sync review: what actually posts, what doesn't",
    pitch:
      "\"It syncs with QuickBooks\" usually means invoices and customers. It rarely means job cost, change orders or clean deposits. This review shows you how to check what your sync is really doing, record by record.",
    inside: [
      "A record-by-record test: customers, items, invoices, payments, deposits",
      "How to spot duplicate customers and items before they spread",
      "Sales tax and payment-processor fees: where they usually break",
      "Why job cost rarely survives the sync, and how to tell",
      "The QuickBooks Online vs Desktop questions that change the answer",
      "When a better mapping fixes it, and when you need a custom connector",
    ],
    forWho:
      "Contractors whose bookkeeper still fixes the field-software-to-QuickBooks sync by hand every month.",
  },
};

export const MAGNET_LIST: Magnet[] = [MAGNETS.checklist, MAGNETS.compare, MAGNETS.sync];
