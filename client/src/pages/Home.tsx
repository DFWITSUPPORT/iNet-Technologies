import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { HomeHero, FinalCta } from "@/components/leak/Heroes";
import {
  AuditIncluded,
  AuditSteps,
  LeakGrid,
  MagnetCards,
  OfferCards,
  Proof,
  ServiceArea,
} from "@/components/leak/Sections";
import { SUPPORTING_OFFERS } from "@/content/offers";

export default function Home() {
  return (
    <PageLayout>
      <HomeHero />
      <LeakGrid />
      <AuditSteps />
      <AuditIncluded />
      <Proof />
      <MagnetCards />
      <OfferCards offers={SUPPORTING_OFFERS} title="Know where it hurts? Start there." />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Not a contractor?</h2>
          <p className="text-muted-foreground mb-6">
            Same approach, any business: we find where you lose time and money, fix the process, and
            embed AI where it pays off. Small businesses can start with an AI employee that answers
            and books 24/7.
          </p>
          <Link href="/ai-employee" className="inline-flex items-center gap-1 font-semibold text-accent hover:underline underline-offset-4">
            See AI Employee Setup <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <FinalCta />
      <ServiceArea />
    </PageLayout>
  );
}
