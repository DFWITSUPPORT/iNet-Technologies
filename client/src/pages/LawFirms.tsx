import {
  BarChart3,
  Calculator,
  ClipboardCheck,
  Database,
  FileText,
  Keyboard,
  LineChart,
  Lock,
  PhoneCall,
  Plug,
  Search,
  Timer,
} from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { PageHero } from "@/components/leak/Heroes";
import { FaqSection, LeakGrid, Proof, ServiceArea } from "@/components/leak/Sections";
import { Eyebrow } from "@/components/leak/Cta";
import LeadForm from "@/components/leak/LeadForm";
import { OFFERS } from "@/content/offers";

const offer = OFFERS["law-firms"];

/** Harvey stats are from interviews at large firms; keep wording as reported (Tim's guardrail). */
const SOURCE = (
  <>
    Source: Harvey, <cite>Inside the AI-Enabled Firm</cite> (2026), interviews with 30 innovation
    leaders at large law firms.
  </>
);

const STATS = [
  { value: "80%", label: "said AI lets smaller firms compete more effectively against larger ones" },
  { value: "77%", label: "say clients now expect faster turnaround and lower cost" },
  { value: "73%", label: "say clients increasingly select firms based on their use of AI" },
  { value: "100%", label: "have seen client expectations around AI change" },
  { value: "90%", label: "are reassessing the billable-hour model; 77% say AI changed how they think about pricing" },
  { value: "93%", label: "have formal AI governance bringing IT, legal ops and lawyers together" },
  { value: "97%", label: "rate measuring AI adoption very important or essential" },
  { value: "27% / 23%", label: "expect integrated workflows and system integration to be among 2027's biggest changes" },
];

const SERVICES = [
  {
    icon: Search,
    title: "AI readiness and leak review",
    desc: "We map how a matter moves through intake, practice management, documents, time, billing and accounting. You see where time leaks, where AI pays back, and whether your data is ready for it.",
  },
  {
    icon: Plug,
    title: "Systems integration",
    desc: "Connect practice management, document management, time and billing, and accounting (for example, Clio, MyCase, NetDocuments, QuickBooks) so a client or matter is entered once.",
  },
  {
    icon: Lock,
    title: "Governed AI workflows",
    desc: "Intake, document and transcript summaries, and first drafts, with a lawyer reviewing every output. Set up with confidentiality and privilege in mind: access controls, logging and private deployment options.",
  },
  {
    icon: BarChart3,
    title: "Adoption and outcome measurement",
    desc: "Simple dashboards on who uses what and how much time it saves. Outcomes, not just activity.",
  },
  {
    icon: PhoneCall,
    title: "Optional: AI receptionist for intake",
    desc: "Answers after-hours calls and captures new-matter and conflict-check details for your team to review. It takes information; it doesn't give legal advice.",
  },
];

export default function LawFirms() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="For small and midsize law firms"
        h1="AI and systems integration for law firms ready to compete with the big ones"
        intro={
          <>
            <p>
              The largest firms have already rolled out AI. Most of their own innovation leaders now
              say it helps smaller firms compete. The catch: AI only pays off on top of connected systems and
              clean data.
            </p>
            <p className="text-base">
              We help firms of about 10 to 200 people find where time leaks between intake, practice
              management, documents and billing. Then we connect the systems and put governed AI
              where it earns its keep. Lawyers own the judgment. AI does the first pass.
            </p>
          </>
        }
        primary={{ href: "#request", label: "Request an AI readiness review" }}
      />

      <section className="py-20 md:py-24 bg-card/30 border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-12">
            <Eyebrow>What the big firms learned</Eyebrow>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-5">
              Large firms won adoption. Now the advantage is how you use it.
            </h2>
            <p className="text-lg text-muted-foreground">
              Thirty innovation leaders at large firms described what changed. Clients expect it,
              pricing is moving, and the next step is integrated workflows, not more chat windows.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STATS.map((s) => (
              <li key={s.label} className="p-6 rounded-xl bg-background border border-border">
                <p className="text-4xl font-display font-bold mb-2">{s.value}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.label}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-muted-foreground">{SOURCE}</p>
        </div>
      </section>

      <LeakGrid
        eyebrow="Where firms lose time"
        title="The barrier isn't the AI. It's the data and the handoffs."
        intro={'The same study names data readiness as a barrier: "everyone is paying for the knowledge management sins of the past." In smaller firms, that usually looks like this.'}
        leaks={[
          { icon: Keyboard, title: "Intake typed twice", desc: "A new client calls, someone takes notes, then re-keys them into practice management and the conflict check." },
          { icon: Database, title: "Documents AI can't reach", desc: "Files spread across email, shared drives and the DMS, named inconsistently, with no clean link to the matter." },
          { icon: Timer, title: "Time rebuilt at month-end", desc: "Hours reconstructed from calendars and email the week bills go out. Some never make it." },
          { icon: Calculator, title: "Billing re-keyed into accounting", desc: "Invoices and trust activity entered again in the accounting system, then reconciled by hand." },
          { icon: FileText, title: "First drafts from scratch", desc: "Summaries of depositions, medical records and transcripts, and first drafts of routine documents, all done manually." },
          { icon: LineChart, title: "No view of what's working", desc: "No one can say which tools get used or how much time they save, so nothing gets better on purpose." },
        ]}
      />

      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-12">
            <Eyebrow>What we do for firms</Eyebrow>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-5">
              Find the leaks. Connect the systems. Govern the AI. Measure it.
            </h2>
            <p className="text-lg text-muted-foreground">
              We work with the software you already have. We don't sell or resell legal software or
              AI tools.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="p-6 rounded-xl bg-card border border-border">
                <Icon className="w-5 h-5 text-accent mb-3" />
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Proof
        title="The same leak-finding method, applied to your firm."
        intro="We haven't published law-firm case studies yet. What we bring is the method: founder-led, 20+ years building databases, CRM and ERP, and a track record of finding money and time that other people missed."
      />

      <section id="request" className="py-20 md:py-24 bg-background scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <Eyebrow>Request a review</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-5">
              Request a law-firm AI readiness review.
            </h2>
            <p className="text-muted-foreground mb-4">
              Send the basics. We reply with a few questions about your practice management, document,
              billing and accounting systems, and a fixed scope for the review.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Where time leaks across intake, matters, documents and billing", "Which AI workflows will pay back first", "Data readiness and governance gaps", "A prioritized plan you can act on"].map((x) => (
                <li key={x} className="flex gap-2">
                  <ClipboardCheck className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 md:p-8 rounded-2xl bg-card border border-border">
            <LeadForm
              request="Law firm AI readiness review"
              keyword="law firm"
              buttonLabel="Request the readiness review"
              segment={{ label: "Firm size", options: ["Under 10 people", "10–49", "50–200", "Over 200"] }}
            />
          </div>
        </div>
      </section>

      <FaqSection faqs={offer.faqs} title="Questions law firms ask" />
      <ServiceArea who="law firms and field-service businesses" />
    </PageLayout>
  );
}
