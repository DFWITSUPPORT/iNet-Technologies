import { SITE, STATES } from "./site";
import { OFFERS, type Faq, type Offer } from "@/content/offers";
import { MAGNETS, type Magnet } from "@/content/magnets";

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  /** Excluded from sitemap and marked noindex. */
  noindex?: boolean;
  priority?: number;
  jsonLd: object[];
}

export interface HeadData {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  ogType: string;
  noindex: boolean;
  jsonLd: object;
}

const ORG_ID = `${SITE.url}/#business`;

const areaServed = STATES.map((s) => ({ "@type": "State", name: s.name }));

function businessSchema() {
  return {
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}${SITE.logo}`,
    image: `${SITE.url}${SITE.ogImage}`,
    email: SITE.email,
    telephone: SITE.phoneE164,
    description:
      "We find where field-service contractors lose time and money between dispatch, estimating, job costing and accounting, fix the process, and embed AI where it pays off.",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.city,
      addressRegion: SITE.region,
      addressCountry: SITE.country,
    },
    founder: { "@type": "Person", name: SITE.founder },
    areaServed,
    knowsAbout: [
      "QuickBooks integration",
      "Field service management software",
      "Construction ERP software",
      "Job costing",
      "Dispatch and scheduling",
      "Data entry automation",
      "AI for contractors",
    ],
    makesOffer: Object.values(OFFERS).map((o) => ({
      "@type": "Offer",
      itemOffered: { "@id": `${SITE.url}${o.path}#service` },
    })),
  };
}

function serviceSchema(o: Offer) {
  return {
    "@type": "Service",
    "@id": `${SITE.url}${o.path}#service`,
    name: o.name,
    description: o.summary,
    url: `${SITE.url}${o.path}`,
    provider: { "@id": ORG_ID },
    areaServed,
    audience: {
      "@type": "BusinessAudience",
      audienceType: "HVAC, plumbing, electrical and restoration contractors",
    },
  };
}

function faqSchema(faqs: Faq[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

function magnetSchema(m: Magnet) {
  return {
    "@type": "WebPage",
    name: m.title,
    url: `${SITE.url}${m.path}`,
    description: m.pitch,
    publisher: { "@id": ORG_ID },
  };
}

const offerRoute = (o: Offer, title: string, description: string): RouteMeta => ({
  path: o.path,
  title,
  description,
  priority: 0.9,
  jsonLd: [serviceSchema(o), faqSchema(o.faqs)],
});

const magnetRoute = (m: Magnet, title: string, description: string): RouteMeta => ({
  path: m.path,
  title,
  description,
  priority: 0.7,
  jsonLd: [magnetSchema(m)],
});

export const ROUTES: RouteMeta[] = [
  {
    path: "/",
    title: "The Six-Figure Leak Audit for Field-Service Contractors | iNet Technologies",
    description:
      "HVAC, plumbing, electrical and restoration contractors: find the money leaking between your field service software, QuickBooks and job costing.",
    priority: 1.0,
    jsonLd: [serviceSchema(OFFERS["leak-audit"])],
  },
  offerRoute(
    OFFERS["leak-audit"],
    "Leak Audit for HVAC & Field-Service Contractors | iNet Technologies",
    "A 2–4 week AI Operations Audit of dispatch, estimating, job costing and accounting. Get a leak map and a prioritized roadmap with savings per step.",
  ),
  offerRoute(
    OFFERS.quickbooks,
    "QuickBooks Integration for Contractors | iNet Technologies",
    "QuickBooks for contractors, fixed. We repair Jobber, Housecall Pro and ServiceTitan QuickBooks integrations so jobs, payments and job cost post once, correctly.",
  ),
  offerRoute(
    OFFERS["field-service"],
    "Field Service Management Software Audit for Contractors | iNet Technologies",
    "An independent audit of your field service software and everything it touches. We don't resell software. We find the leaks between dispatch and accounting.",
  ),
  offerRoute(
    OFFERS.erp,
    "Construction ERP Software vs Integration: ERP Reality Check | iNet Technologies",
    "Shopping for construction ERP software? Find out first whether you need an ERP or need your current field, estimating and accounting systems connected.",
  ),
  magnetRoute(
    MAGNETS.checklist,
    "Texas Field-Service Leak Checklist: 10 Places Jobs Get Re-Typed | iNet",
    "Free checklist for HVAC, plumbing, electrical and restoration contractors: the 10 places jobs get re-keyed between the field and QuickBooks.",
  ),
  magnetRoute(
    MAGNETS.compare,
    "Jobber vs Housecall Pro vs ServiceTitan: Questions Before You Switch | iNet",
    "Free guide: the questions to answer before you switch field service software, from QuickBooks sync to job cost and data export.",
  ),
  magnetRoute(
    MAGNETS.sync,
    "QuickBooks + Field Software Sync Review: What Actually Posts | iNet",
    "Free review: check what your field software actually sends to QuickBooks. Customers, invoices, payments, deposits and job cost, record by record.",
  ),
  {
    path: "/ai-employee",
    title: "AI Employee Setup for Small Business | iNet Technologies",
    description:
      "An AI employee that answers inquiries and books appointments 24/7, set up and supported by iNet Technologies in Fort Worth, TX.",
    priority: 0.6,
    jsonLd: [],
  },
  {
    path: "/features",
    title: "AI Employee Features | iNet Technologies",
    description: "What the iNet AI Employee handles: calls, chat, booking, follow-up and handoff to your team.",
    priority: 0.5,
    jsonLd: [],
  },
  {
    path: "/privacy",
    title: "Privacy Policy | iNet Technologies",
    description: "How iNet Technologies collects, uses and protects your information.",
    priority: 0.2,
    jsonLd: [],
  },
  {
    path: "/terms",
    title: "Terms & EULA | iNet Technologies",
    description: "Terms of service and end-user license agreement for iNet Technologies.",
    priority: 0.2,
    jsonLd: [],
  },
];

export const NOT_FOUND_META: RouteMeta = {
  path: "/404",
  title: "Page not found | iNet Technologies",
  description: "That page doesn't exist. Start with the Six-Figure Leak Audit for field-service contractors.",
  noindex: true,
  jsonLd: [],
};

export function normalizePath(path: string): string {
  const p = path.split(/[?#]/)[0] || "/";
  return p.length > 1 ? p.replace(/\/+$/, "") : "/";
}

export function findRoute(path: string): RouteMeta | undefined {
  const p = normalizePath(path);
  return ROUTES.find((r) => r.path === p);
}

export function getHeadData(path: string): HeadData {
  const meta = findRoute(path) ?? NOT_FOUND_META;
  return {
    title: meta.title,
    description: meta.description,
    canonical: `${SITE.url}${meta.path === "/" ? "/" : meta.path}`,
    ogImage: `${SITE.url}${SITE.ogImage}`,
    ogType: "website",
    noindex: !!meta.noindex,
    jsonLd: { "@context": "https://schema.org", "@graph": [businessSchema(), ...meta.jsonLd] },
  };
}

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** Serialized head tags for the prerender step. */
export function renderHeadTags(h: HeadData): string {
  // JSON-LD: escape "<" so content can never close the script tag.
  const json = JSON.stringify(h.jsonLd).replace(/</g, "\\u003c");
  return [
    `<title>${esc(h.title)}</title>`,
    `<meta name="description" content="${esc(h.description)}" />`,
    h.noindex ? `<meta name="robots" content="noindex" />` : `<link rel="canonical" href="${esc(h.canonical)}" />`,
    `<meta property="og:site_name" content="${esc(SITE.name)}" />`,
    `<meta property="og:type" content="${h.ogType}" />`,
    `<meta property="og:title" content="${esc(h.title)}" />`,
    `<meta property="og:description" content="${esc(h.description)}" />`,
    `<meta property="og:url" content="${esc(h.canonical)}" />`,
    `<meta property="og:image" content="${esc(h.ogImage)}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(h.title)}" />`,
    `<meta name="twitter:description" content="${esc(h.description)}" />`,
    `<meta name="twitter:image" content="${esc(h.ogImage)}" />`,
    `<script type="application/ld+json" id="ld-json">${json}</script>`,
  ]
    .filter(Boolean)
    .join("\n    ");
}

export function renderSitemap(): string {
  const urls = ROUTES.filter((r) => !r.noindex)
    .map(
      (r) =>
        `  <url><loc>${SITE.url}${r.path === "/" ? "/" : r.path}</loc><priority>${(r.priority ?? 0.5).toFixed(1)}</priority></url>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}
