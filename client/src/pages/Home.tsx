import { CalendarClock, Clock, GitMerge, GraduationCap, Calculator, Puzzle } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { FinalCta, PageHero } from "@/components/leak/Heroes";
import { AuditSteps, FaqSection, LeakGrid, OfferCards, Proof, ServiceArea } from "@/components/leak/Sections";
import { OFFERS } from "@/content/offers";
import { HOME_FAQS } from "@/content/home";

// Layout mirrors /construction-erp-vs-integration (Tim's pick, 2026-11-20).
export default function Home() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="The Six-Figure Leak Audit for field-service contractors"
        h1="New software or better integration? Get the answer before the demos."
        intro={
          <>
            <p>
              Field service software, construction ERP and QuickBooks each do their job. The money
              leaks between them: jobs re-typed, change orders never billed, job cost nobody trusts.
            </p>
            <p className="text-base">
              We find those leaks for HVAC, plumbing, electrical and restoration contractors, then tell
              you whether to fix, connect or replace. Founder-led, 20+ years, vendor-neutral. Nothing
              to resell.
            </p>
          </>
        }
        magnet="checklist"
      />
      <LeakGrid
        eyebrow="Fix, connect or replace?"
        title="What we weigh before you buy anything"
        intro="We score your situation on the things that decide whether you need new software or better integration."
        leaks={[
          { icon: GitMerge, title: "Where re-keying happens", desc: "Every place a job gets typed twice: field app to QuickBooks, estimate to work order, tech hours to a timesheet spreadsheet." },
          { icon: Calculator, title: "Job cost you can trust", desc: "Do materials, labor and change orders land on the right job, or do you find out which jobs lost money months later?" },
          { icon: CalendarClock, title: "Dispatch ↔ accounting handoffs", desc: "Does what got scheduled and done match what got billed, without someone checking both systems?" },
          { icon: Clock, title: "Implementation time", desc: "An honest estimate of months-to-value for each path: fix the mapping, build a connector, or migrate." },
          { icon: GraduationCap, title: "Retraining cost", desc: "Every new system means retraining the office and the field. We count that cost before you sign." },
          { icon: Puzzle, title: "What you keep", desc: "Which of your current tools are worth keeping and connecting, and which are holding you back." },
        ]}
      />
      <AuditSteps />
      <Proof />
      <FaqSection faqs={HOME_FAQS} title="Questions contractors ask" />
      <OfferCards
        eyebrow="Pick your starting point"
        title="Start where it hurts."
        offers={[OFFERS["leak-audit"], OFFERS.quickbooks, OFFERS["field-service"], OFFERS.erp, OFFERS["law-firms"]]}
      />
      <FinalCta magnet="checklist" showGuides />
      <ServiceArea />
    </PageLayout>
  );
}
