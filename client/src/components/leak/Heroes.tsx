import { Link } from "wouter";
import { Eyebrow, BookCallButton, MagnetCta, PrimaryCta } from "./Cta";
import type { MagnetSlug } from "@/content/magnets";
import { OFFERS } from "@/content/offers";
import heroBg from "@/assets/hero-bg.jpg";

export function HomeHero() {
  return (
    <header className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-0" aria-hidden>
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-4xl">
          <Eyebrow>For HVAC, plumbing, electrical and restoration contractors</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold leading-[1.05] tracking-tight mb-6">
            Find the six figures leaking between your{" "}
            <span className="text-accent">field software and QuickBooks.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-3xl leading-relaxed">
            <strong className="text-foreground">The Six-Figure Leak Audit</strong> maps how a job moves
            from the first call to the paid invoice: dispatch, estimating, job costing, accounting. We
            show you where money and hours fall through, fix the process, connect your systems, and
            embed AI where it pays off.
          </p>
          <p className="text-base text-muted-foreground mb-10 max-w-3xl">
            Founder-led. 20+ years. Works with the software you already run. No rip-and-replace.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <MagnetCta slug="checklist" />
            <BookCallButton />
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            Ready for the full audit?{" "}
            <Link href={OFFERS["leak-audit"].path} className="text-accent underline-offset-4 hover:underline">
              See what's included and request it
            </Link>
            .
          </p>
        </div>
      </div>
    </header>
  );
}

export function PageHero({
  eyebrow,
  h1,
  intro,
  magnet,
  primary,
}: {
  eyebrow: string;
  h1: React.ReactNode;
  intro: React.ReactNode;
  magnet?: MagnetSlug;
  /** Overrides the magnet CTA (e.g. "Request the audit" on the core offer page). */
  primary?: { href: string; label: string };
}) {
  return (
    <header className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden border-b border-white/5">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-0" aria-hidden />
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-4xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-[1.08] tracking-tight mb-6">
            {h1}
          </h1>
          <div className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl leading-relaxed space-y-4">
            {intro}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            {primary ? (
              <PrimaryCta href={primary.href}>{primary.label}</PrimaryCta>
            ) : magnet ? (
              <MagnetCta slug={magnet} />
            ) : null}
            <BookCallButton />
          </div>
        </div>
      </div>
    </header>
  );
}

export function FinalCta({ magnet = "checklist" as MagnetSlug }: { magnet?: MagnetSlug }) {
  return (
    <section className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/10" aria-hidden />
      <div className="container mx-auto px-4 md:px-6 relative text-center max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-5">
          Is your office still re-keying jobs?
        </h2>
        <p className="text-lg text-muted-foreground mb-10">
          Start with the free guide. Ten minutes with it will tell you whether a full Leak Audit is
          worth your time.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <MagnetCta slug={magnet} />
          <BookCallButton />
        </div>
      </div>
    </section>
  );
}
