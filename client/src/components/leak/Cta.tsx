import { Link } from "wouter";
import { ArrowRight, CalendarDays } from "lucide-react";
import BookingModal from "@/components/BookingModal";
import { MAGNETS, type MagnetSlug } from "@/content/magnets";
import { cn } from "@/lib/utils";

const primaryClass =
  "h-12 px-6 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all inline-flex items-center justify-center gap-2 group shadow-[0_0_24px_-6px_#1e6fd9] cursor-pointer";

export function PrimaryCta({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const inner = (
    <>
      {children}
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </>
  );
  // In-page anchors use a plain <a> so the browser handles the scroll.
  return href.startsWith("#") ? (
    <a href={href} className={cn(primaryClass, className)}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cn(primaryClass, className)}>
      {inner}
    </Link>
  );
}

export function MagnetCta({ slug, className }: { slug: MagnetSlug; className?: string }) {
  const m = MAGNETS[slug];
  return (
    <PrimaryCta href={m.path} className={className}>
      Get the free {m.shortTitle}
    </PrimaryCta>
  );
}

/** Secondary CTA: booking a call stays available, but never as the main ask. */
export function BookCallButton({ label = "Or book a call", className }: { label?: string; className?: string }) {
  return (
    <BookingModal>
      <button
        type="button"
        className={cn(
          "h-12 px-5 rounded-lg border border-white/15 text-foreground font-medium hover:bg-white/5 transition-colors inline-flex items-center justify-center gap-2 cursor-pointer",
          className,
        )}
      >
        <CalendarDays className="w-4 h-4" />
        {label}
      </button>
    </BookingModal>
  );
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("text-accent font-mono text-sm tracking-wider uppercase block mb-3", className)}>
      {children}
    </span>
  );
}
