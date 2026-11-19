import { Link } from "wouter";
import PageLayout from "@/components/layout/PageLayout";
import { OFFERS } from "@/content/offers";
import { MAGNETS } from "@/content/magnets";

export default function NotFound() {
  return (
    <PageLayout>
      <section className="pt-40 pb-24">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl text-center">
          <p className="font-mono text-accent mb-3">404</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-5">That page doesn't exist.</h1>
          <p className="text-muted-foreground mb-8">But the leaks in your back office probably do.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href={OFFERS["leak-audit"].path} className="h-12 px-6 rounded-lg bg-primary text-primary-foreground font-semibold inline-flex items-center justify-center">
              See the Leak Audit
            </Link>
            <Link href={MAGNETS.checklist.path} className="h-12 px-6 rounded-lg border border-white/15 font-medium inline-flex items-center justify-center">
              Get the free checklist
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
