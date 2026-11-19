// Single source of truth for business facts used in copy, schema and the prerender step.

export const SITE = {
  name: "iNet Technologies",
  url: "https://inet-technologies.com",
  email: "support@inet-technologies.com",
  phone: "817-769-2202",
  phoneE164: "+18177692202",
  city: "Fort Worth",
  region: "TX",
  country: "US",
  founder: "Tim Wilson",
  ogImage: "/opengraph.png",
  logo: "/icon-512.png",
} as const;

export const STATES = [
  { code: "TX", name: "Texas" },
  { code: "FL", name: "Florida" },
  { code: "GA", name: "Georgia" },
  { code: "NC", name: "North Carolina" },
  { code: "OK", name: "Oklahoma" },
] as const;

export const STATES_SENTENCE = "Texas, Florida, Georgia, North Carolina and Oklahoma";

export const TRADES = ["HVAC", "Plumbing", "Electrical", "Restoration"] as const;

/**
 * 3x savings guarantee: NOT approved by Tim yet.
 * Flip to false to remove every guarantee mention from the site (copy + nothing else references it).
 */
export const SHOW_GUARANTEE = true;
export const GUARANTEE_TEXT =
  "If the audit doesn't find savings of at least 3× the fee, the audit is free.";
