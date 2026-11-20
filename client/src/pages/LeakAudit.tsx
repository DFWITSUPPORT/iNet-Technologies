import PageLayout from "@/components/layout/PageLayout";
import { PageHero } from "@/components/leak/Heroes";
import {
  AuditIncluded,
  AuditSteps,
  FaqSection,
  LeakGrid,
  MagnetCards,
  Proof,
  ServiceArea,
} from "@/components/leak/Sections";
import { Eyebrow } from "@/components/leak/Cta";
import LeadForm from "@/components/leak/LeadForm";
import Guarantee from "@/components/leak/Guarantee";
import { OFFERS } from "@/content/offers";
import { STATES_SENTENCE } from "@/lib/site";

const offer = OFFERS["leak-audit"];

export default function LeakAudit() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="AI Operations Audit for field-service contractors"
        h1="The Six-Figure Leak Audit for HVAC and field-service contractors"
        intro={
          <>
            <p>
              We map how your field, estimating and accounting systems talk to each other, show you the
              six figures of waste between them, and rebuild the workflow around automation and AI.
            </p>
            <p className="text-base">
              For owners and ops leads at established HVAC, plumbing, electrical and restoration
              contractors running a field platform or ERP next to separate accounting.
            </p>
          </>
        }
        primary={{ href: "#request", label: "Request the Leak Audit" }}
      />
      <LeakGrid
        title="What the audit looks for"
        intro="These are the leaks we find most often. Your audit measures each one in hours and dollars."
      />
      <AuditSteps />
      <AuditIncluded />
      <Proof />

      <section id="request" className="py-20 md:py-24 bg-background scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <Eyebrow>Request the audit</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-5">
              Tell us where you run. We'll tell you if the audit fits.
            </h2>
            <p className="text-muted-foreground mb-4">
              Send the basics. We reply with a few questions about your stack (field platform,
              accounting, estimating) and a fixed scope. No pitch deck, no 20-minute discovery call
              to get started.
            </p>
            <p className="text-muted-foreground mb-6">
              We work with contractors across {STATES_SENTENCE}.
            </p>
            <Guarantee />
          </div>
          <div className="p-6 md:p-8 rounded-2xl bg-card border border-border">
            <LeadForm request="Six-Figure Leak Audit request" keyword="audit" buttonLabel="Request the Leak Audit" />
          </div>
        </div>
      </section>

      <FaqSection faqs={offer.faqs} title="Leak Audit questions" />
      <MagnetCards title="Not ready for the audit? Start with a free guide." />
      <ServiceArea />
    </PageLayout>
  );
}
