import { SITE } from "./site";

export interface LeadRequest {
  name: string;
  company: string;
  email: string;
  trade: string;
  state: string;
  /** What they asked for, e.g. the lead magnet title or "Leak Audit request". */
  request: string;
  /** Reply keyword (checklist / compare / sync / audit). Goes in the subject for inbox filtering. */
  keyword: string;
}

/**
 * Form backend. The site deploys as static files, so for now submission opens the visitor's mail
 * app with a prefilled message to support@. To switch backends (Replit endpoint, Microsoft Forms,
 * etc.), change only this function; the form component doesn't care.
 */
export function buildLeadMailto(lead: LeadRequest): string {
  const subject = `${lead.keyword}: ${lead.request} (${lead.company})`;
  const body = [
    `Request: ${lead.request}`,
    "",
    `Name: ${lead.name}`,
    `Company: ${lead.company}`,
    `Email: ${lead.email}`,
    `Trade: ${lead.trade}`,
    `State: ${lead.state}`,
  ].join("\n");
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function submitLead(lead: LeadRequest): void {
  window.location.href = buildLeadMailto(lead);
}
