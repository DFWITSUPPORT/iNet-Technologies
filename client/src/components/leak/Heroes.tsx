import { Link } from "wouter";
import { MAGNET_LIST } from "@/content/magnets";
import { Eyebrow, BookCallButton, MagnetCta, PrimaryCta } from "./Cta";
import type { MagnetSlug } from "@/content/magnets";

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

export function FinalCta({
  magnet = "checklist" as MagnetSlug,
  showGuides = false,
}: {
  magnet?: MagnetSlug;
  /** Adds a one-line strip linking all three free guides. */
  showGuides?: boolean;
}) {
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
        {showGuides && (
          <p className="mt-8 text-sm text-muted-foreground">
            More free guides:{" "}
            {MAGNET_LIST.filter((m) => m.slug !== magnet).map((m, i, arr) => (
              <span key={m.slug}>
                <Link href={m.path} className="text-accent hover:underline underline-offset-4">
                  {m.shortTitle}
                </Link>
                {i < arr.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>
        )}
      </div>
    </section>
  );
}
