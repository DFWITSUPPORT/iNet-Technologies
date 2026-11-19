import { Calculator, Copy, Landmark, Receipt, RefreshCcw, Users } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { FinalCta, PageHero } from "@/components/leak/Heroes";
import { AuditSteps, FaqSection, LeakGrid, OfferCards, Proof, ServiceArea } from "@/components/leak/Sections";
import { OFFERS } from "@/content/offers";

const offer = OFFERS.quickbooks;

export default function QuickBooksIntegration() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="QuickBooks Sync Rescue"
        h1="QuickBooks integration for contractors that actually posts what your books need"
        intro={
          <>
            <p>
              Jobber, Housecall Pro and ServiceTitan all say they sync with QuickBooks. Then your
              bookkeeper spends the first week of every month fixing duplicates, matching deposits and
              re-keying job cost by hand.
            </p>
            <p className="text-base">
              We fix the field service software to QuickBooks sync, from the mapping up to a custom
              connector when the built-in one can't do the job. One entry, posted correctly, everywhere.
            </p>
          </>
        }
        magnet="sync"
      />
      <LeakGrid
        eyebrow="Is your QuickBooks still manual?"
        title="Where the field-to-QuickBooks sync breaks"
        intro="QuickBooks for contractors works fine until the field app and the books disagree. These are the breaks we fix most."
        leaks={[
          { icon: Copy, title: "Duplicate customers and items", desc: "The same customer exists three ways. Items don't map, so invoices post to the wrong income account." },
          { icon: Landmark, title: "Deposits that never match the bank", desc: "Payments taken in the field land as lump sums, net of processor fees, with no clean trail to the invoice." },
          { icon: Calculator, title: "Job cost doesn't survive the sync", desc: "Invoices post, but materials, labor and change orders don't land on the job. Job costing becomes a guess." },
          { icon: Receipt, title: "Sales tax surprises", desc: "Tax rates and taxable items set up differently in each system, so the numbers drift every month." },
          { icon: RefreshCcw, title: "Export, fix, re-import", desc: "Someone exports from the field platform, fixes it in a spreadsheet and imports it into QuickBooks. Every week." },
          { icon: Users, title: "Vendor bills keyed by hand", desc: "Bills arrive as PDFs and get typed in. We automate data entry with AI extraction, with a person checking the output." },
        ]}
      />
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Housecall Pro, ServiceTitan and Jobber QuickBooks integration: what we do
          </h2>
          <ul className="space-y-3 text-muted-foreground list-disc pl-5">
            <li>Audit what your current sync sends, record by record: customers, items, invoices, payments, deposits, job cost.</li>
            <li>Clean up the mapping, duplicates and sales tax setup in both systems.</li>
            <li>Build a custom connector when the built-in field service software for QuickBooks can't carry what you need.</li>
            <li>Automate data entry for vendor bills and receipts so they land on the right job.</li>
            <li>Hand your bookkeeper a short checklist so it stays clean.</li>
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            We don't sell QuickBooks or field service software. We work for you, not the vendor.
          </p>
        </div>
      </section>
      <AuditSteps />
      <Proof />
      <FaqSection faqs={offer.faqs} title="QuickBooks sync questions" />
      <OfferCards offers={[OFFERS["leak-audit"], OFFERS["field-service"], OFFERS.erp]} title="Related audits" />
      <FinalCta magnet="sync" />
      <ServiceArea />
    </PageLayout>
  );
}
