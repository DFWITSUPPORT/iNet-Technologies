import { BarChart3, CalendarClock, FileWarning, Layers, Repeat2, Smartphone } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { FinalCta, PageHero } from "@/components/leak/Heroes";
import { AuditSteps, FaqSection, LeakGrid, OfferCards, Proof, ServiceArea } from "@/components/leak/Sections";
import { OFFERS } from "@/content/offers";

const offer = OFFERS["field-service"];

export default function FieldServiceAudit() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Field Service Stack Leak Audit"
        h1="Field service management software audit: find the gaps before you switch platforms"
        intro={
          <>
            <p>
              Most contractors shopping for new field service software don't have a software problem.
              They have a gap between dispatch, estimating and accounting, and the next platform
              usually has the same gap.
            </p>
            <p className="text-base">
              We're integrators, not a vendor. We audit the HVAC field service software (or plumbing,
              electrical, restoration platform) you run today and everything it touches, then tell you
              whether to fix, connect or replace it.
            </p>
          </>
        }
        magnet="compare"
      />
      <LeakGrid
        eyebrow="Your field software gap"
        title="What we check in your field service stack"
        intro="We follow real jobs through your stack and score each handoff."
        leaks={[
          { icon: CalendarClock, title: "Scheduling and dispatch", desc: "Do jobs, techs and time windows match what the office promised and what accounting bills?" },
          { icon: FileWarning, title: "Estimates to work orders", desc: "Does the approved estimate become the job, or does someone rebuild it?" },
          { icon: Repeat2, title: "Field changes to invoices", desc: "Do add-ons and change orders from the field reach the invoice without a phone call?" },
          { icon: Layers, title: "Platform to accounting", desc: "What posts to QuickBooks or your ERP, and what still gets re-keyed?" },
          { icon: Smartphone, title: "Tech adoption", desc: "Are techs using the app as designed, or working around it on paper and texts?" },
          { icon: BarChart3, title: "Owner reporting", desc: "Can you see revenue, margin and callbacks per job and per tech without a spreadsheet?" },
        ]}
      />
      <AuditSteps />
      <Proof />
      <FaqSection faqs={offer.faqs} title="Field service software questions" />
      <OfferCards offers={[OFFERS["leak-audit"], OFFERS.quickbooks, OFFERS.erp]} title="Related audits" />
      <FinalCta magnet="compare" />
      <ServiceArea />
    </PageLayout>
  );
}
