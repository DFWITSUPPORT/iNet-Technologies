import { Link } from "wouter";
import {
  ArrowRight,
  Calculator,
  ClipboardList,
  FileSpreadsheet,
  Keyboard,
  MapPin,
  Route as RouteIcon,
  Search,
  Sparkles,
  Truck,
  Wrench,
  LineChart,
  FileDown,
  CheckCircle2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Eyebrow } from "./Cta";
import Guarantee from "./Guarantee";
import { MAGNET_LIST } from "@/content/magnets";
import type { Faq, Offer } from "@/content/offers";
import { STATES, STATES_SENTENCE, SITE } from "@/lib/site";

export interface Leak {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const DEFAULT_LEAKS: Leak[] = [
  {
    icon: Keyboard,
    title: "Re-keying jobs into QuickBooks",
    desc: "The job is done in the field app. Then someone in the office types it again as an invoice. Every re-type costs time and invites mistakes.",
  },
  {
    icon: Truck,
    title: "Dispatch doesn't talk to accounting",
    desc: "The schedule says one thing, the books say another. Nobody can tell which jobs were billed without checking both.",
  },
  {
    icon: FileSpreadsheet,
    title: "Change orders that never get billed",
    desc: "The tech adds work on site. It's approved verbally, written on a phone, and never makes it to the invoice.",
  },
  {
    icon: Calculator,
    title: "Job costing you can't trust",
    desc: "Materials and hours land in the wrong job or no job at all. You find out which jobs lost money months later, if ever.",
  },
  {
    icon: ClipboardList,
    title: "Estimates that go quiet",
    desc: "Quotes go out and nobody tracks what closed. The gap between quoted and closed revenue is usually bigger than anyone thinks.",
  },
  {
    icon: LineChart,
    title: "Reports built by hand",
    desc: "The owner report gets rebuilt every week from three systems and a spreadsheet. By the time it's done, it's stale.",
  },
];

export function LeakGrid({
  eyebrow = "Where the money leaks",
  title = "Your field software and your books don't agree. That gap costs real money.",
  intro = "Most HVAC, plumbing, electrical and restoration shops we see run a field platform next to separate accounting. The leaks live in the handoffs between them.",
  leaks = DEFAULT_LEAKS,
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  leaks?: Leak[];
}) {
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-12">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-5">{title}</h2>
          <p className="text-lg text-muted-foreground">{intro}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {leaks.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <div className="h-11 w-11 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: RouteIcon,
    title: "Map",
    desc: "We trace real jobs from the first call to the paid invoice, across dispatch, estimating, job costing and accounting, and the people in between.",
  },
  {
    icon: Search,
    title: "Find the leaks",
    desc: "We measure where hours, dollars and data fall through, and rank every leak by what it costs you and what it takes to fix.",
  },
  {
    icon: Wrench,
    title: "Fix",
    desc: "We fix the process, then connect the systems you already own so a job gets entered once and posts everywhere.",
  },
  {
    icon: Sparkles,
    title: "Embed AI",
    desc: "AI goes in only where it pays: reading vendor bills, automating data entry, chasing quiet estimates, building the weekly report. A person reviews the output.",
  },
  {
    icon: LineChart,
    title: "Measure",
    desc: "Before-and-after numbers: hours saved, errors removed, revenue recovered. If it didn't move a number, it didn't count.",
  },
];

export function AuditSteps({ id = "how-it-works" }: { id?: string }) {
  return (
    <section id={id} className="py-20 md:py-24 bg-card/30 border-y border-white/5 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-12">
          <Eyebrow>How the Leak Audit works</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-5">
            Map. Find the leaks. Fix. Embed AI. Measure.
          </h2>
          <p className="text-lg text-muted-foreground">
            Process first, then software, then AI. In that order, every time.
          </p>
        </div>
        <ol className="grid md:grid-cols-5 gap-4">
          {STEPS.map(({ icon: Icon, title, desc }, i) => (
            <li key={title} className="relative p-6 rounded-xl bg-background border border-border">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-mono text-sm font-bold">
                  {i + 1}
                </span>
                <Icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const INCLUDED = [
  {
    title: "Fixed-scope AI Operations Audit",
    desc: "Two to four weeks across dispatch, estimating, job costing and the accounting handoff. Fixed scope, no open-ended hourly meter.",
  },
  {
    title: "Your leak map",
    desc: "Every place a job, an hour or a dollar falls through, drawn on one page your office manager will recognize.",
  },
  {
    title: "Prioritized automation roadmap",
    desc: "What to fix first, what it saves per step, and what it takes. Quick wins up front.",
  },
  {
    title: "Integration and custom-software recommendations",
    desc: "Specific fixes for your stack: QuickBooks sync, field-platform connections, custom tools where off-the-shelf falls short. No software to resell.",
  },
];

export function AuditIncluded() {
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-5 gap-10 items-start">
        <div className="lg:col-span-2">
          <Eyebrow>What's included</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-5">
            You walk away with a plan you can act on Monday.
          </h2>
          <p className="text-muted-foreground mb-6">
            Keep it and build it yourself, hand it to your software vendor, or have us do the work.
            The audit stands on its own.
          </p>
          <Guarantee />
        </div>
        <ul className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
          {INCLUDED.map((item) => (
            <li key={item.title} className="p-6 rounded-xl bg-card border border-border">
              <CheckCircle2 className="w-5 h-5 text-accent mb-3" />
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Proof({
  title = "We've found these leaks before.",
  intro = "Founder-led. More than 20 years building databases, ERP, CRM and integrations. We work with the systems you already have. No rip-and-replace.",
}: { title?: string; intro?: string }) {
  return (
    <section className="py-20 md:py-24 bg-card/30 border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-12">
          <Eyebrow>Proof</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-5">{title}</h2>
          <p className="text-lg text-muted-foreground">{intro}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="p-7 rounded-2xl bg-background border border-primary/40 md:col-span-2">
            <p className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-3">
              A DFW specialty contractor
            </p>
            <p className="text-5xl md:text-6xl font-display font-bold text-foreground mb-3">$5.6M</p>
            <p className="text-lg text-foreground/90 mb-2">gap between quoted and closed revenue, surfaced.</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Quotes and follow-ups lived in disconnected tools, with no view of what was quoted vs
              what closed. We built a custom CRM integrated with their ERP, automated lead workflows
              and executive reporting. It now serves 65,000+ customers in one system.
            </p>
          </div>
          <div className="grid gap-5">
            <div className="p-6 rounded-2xl bg-background border border-border">
              <p className="text-3xl font-display font-bold mb-1">65,000+</p>
              <p className="text-sm text-muted-foreground">customers served by a CRM we built from scratch</p>
            </div>
            <div className="p-6 rounded-2xl bg-background border border-border">
              <p className="text-3xl font-display font-bold mb-1">20+ years</p>
              <p className="text-sm text-muted-foreground">
                in databases, ERP and CRM: Sage 300, QuickBooks, Salesforce, Zoho
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MagnetCards({ title = "Start with a free guide" }: { title?: string }) {
  return (
    <section id="free-guides" className="py-20 md:py-24 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-12">
          <Eyebrow>Free for contractors</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-5">{title}</h2>
          <p className="text-lg text-muted-foreground">
            No call required. Pick the one that matches the problem you're living with.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {MAGNET_LIST.map((m) => (
            <Link
              key={m.slug}
              href={m.path}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/60 transition-colors flex flex-col"
            >
              <FileDown className="w-6 h-6 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">{m.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">{m.pitch}</p>
              <span className="text-sm font-semibold text-accent inline-flex items-center gap-1">
                Get it free <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OfferCards({
  offers,
  title,
  eyebrow = "Focused audits",
}: {
  offers: Offer[];
  title: string;
  eyebrow?: string;
}) {
  return (
    <section className="py-20 md:py-24 bg-card/30 border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-12">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-display font-bold">{title}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {offers.map((o) => (
            <Link
              key={o.slug}
              href={o.path}
              className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/60 transition-colors flex flex-col"
            >
              <h3 className="text-xl font-bold mb-3">{o.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">{o.summary}</p>
              <span className="text-sm font-semibold text-accent inline-flex items-center gap-1">
                Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection({ faqs, title = "Questions contractors ask" }: { faqs: Faq[]; title?: string }) {
  return (
    <section id="faq" className="py-20 md:py-24 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">{title}</h2>
        {/* Native <details> keeps answers in the HTML for crawlers (Radix unmounts closed panels). */}
        <div className="divide-y divide-border border-y border-border">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                <h3 className="text-lg font-semibold">{f.q}</h3>
                <span className="mt-1 text-accent transition-transform group-open:rotate-45 text-2xl leading-none" aria-hidden>
                  +
                </span>
              </summary>
              <p className="mt-3 text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceArea({ who = "field-service contractors" }: { who?: string }) {
  return (
    <section className="py-16 bg-background border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
        <div className="flex items-center gap-3 shrink-0">
          <MapPin className="w-6 h-6 text-accent" />
          <h2 className="text-xl font-display font-bold">Where we work</h2>
        </div>
        <p className="text-muted-foreground">
          Based in {SITE.city}, Texas. We work with {who} across {STATES_SENTENCE},
          remotely and on site in DFW.
        </p>
        <ul className="flex flex-wrap gap-2 md:ml-auto" aria-label="States served">
          {STATES.map((s) => (
            <li key={s.code} className="px-3 py-1 rounded-full border border-white/10 text-sm font-mono">
              {s.code}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
