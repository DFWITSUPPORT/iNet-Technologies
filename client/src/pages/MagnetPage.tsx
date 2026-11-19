import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { Eyebrow } from "@/components/leak/Cta";
import LeadForm from "@/components/leak/LeadForm";
import { MagnetCards, ServiceArea } from "@/components/leak/Sections";
import { MAGNETS, type MagnetSlug } from "@/content/magnets";
import { OFFERS } from "@/content/offers";

export default function MagnetPage({ slug }: { slug: MagnetSlug }) {
  const m = MAGNETS[slug];
  return (
    <PageLayout>
      <header className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" aria-hidden />
        <div className="container mx-auto px-4 md:px-6 relative grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <Eyebrow>Free guide for contractors</Eyebrow>
            <h1 className="text-4xl md:text-5xl font-display font-bold leading-[1.1] tracking-tight mb-6">{m.h1}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{m.pitch}</p>
            <h2 className="text-xl font-display font-bold mb-4">What's inside</h2>
            <ul className="space-y-3 mb-8">
              {m.inside.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Who it's for:</strong> {m.forWho}
            </p>
          </div>
          <div className="p-6 md:p-8 rounded-2xl bg-card border border-border lg:sticky lg:top-24">
            <h2 className="text-2xl font-display font-bold mb-2">Get the {m.shortTitle}</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Free. Tell us who you are and we'll send it over.
            </p>
            <LeadForm request={m.title} keyword={m.keyword} buttonLabel={`Send me the ${m.shortTitle}`} />
          </div>
        </div>
      </header>

      <section className="py-16 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Want us to find the leaks for you?</h2>
          <p className="text-muted-foreground mb-6">
            The guide shows you where to look. The Six-Figure Leak Audit measures every leak in your
            business and hands you a prioritized plan to close them.
          </p>
          <Link href={OFFERS["leak-audit"].path} className="font-semibold text-accent hover:underline underline-offset-4">
            See the Leak Audit →
          </Link>
        </div>
      </section>

      <MagnetCards title="More free guides" />
      <ServiceArea />
    </PageLayout>
  );
}
