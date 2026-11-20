import { Boxes, Clock, DollarSign, GitMerge, GraduationCap, Puzzle } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { FinalCta, PageHero } from "@/components/leak/Heroes";
import { AuditSteps, FaqSection, LeakGrid, OfferCards, Proof, ServiceArea } from "@/components/leak/Sections";
import { OFFERS } from "@/content/offers";

const offer = OFFERS.erp;

export default function ConstructionErp() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="ERP Reality Check for Contractors"
        h1="Construction ERP software or better integration? Get the answer before the demos."
        intro={
          <>
            <p>
              ERP vendors will happily sell you a year-long implementation. Sometimes that's right.
              Often the real problem is that your field, estimating and accounting systems don't talk,
              and connecting them costs a fraction of the time and money.
            </p>
            <p className="text-base">
              The ERP Reality Check tells you which one you need, based on how your jobs actually move.
              Vendor-neutral. Nothing to resell.
            </p>
          </>
        }
        magnet="checklist"
      />
      <LeakGrid
        eyebrow="ERP or integration?"
        title="What we weigh in the Reality Check"
        intro="We score your situation on the things that decide ERP vs integration."
        leaks={[
          { icon: GitMerge, title: "Where re-keying happens", desc: "If the pain is typing the same job into three tools, integration usually fixes it faster than an ERP." },
          { icon: DollarSign, title: "Job cost depth you need", desc: "Committed cost, WIP and multi-phase job cost push you toward ERP. Simple service work rarely needs it." },
          { icon: Boxes, title: "Entities and divisions", desc: "Multiple companies or divisions with shared back office are a real ERP signal." },
          { icon: Clock, title: "Implementation time", desc: "An honest estimate of months-to-value for each path, including data migration." },
          { icon: GraduationCap, title: "Retraining cost", desc: "Every new system means retraining the office and the field. We count that cost too." },
          { icon: Puzzle, title: "What you keep", desc: "Which of your current tools are worth keeping and connecting, and which are holding you back." },
        ]}
      />
      <AuditSteps />
      <Proof />
      <FaqSection faqs={offer.faqs} title="Construction ERP questions" />
      <OfferCards offers={[OFFERS["leak-audit"], OFFERS.quickbooks, OFFERS["field-service"]]} title="Related audits" />
      <FinalCta magnet="checklist" />
      <ServiceArea />
    </PageLayout>
  );
}
