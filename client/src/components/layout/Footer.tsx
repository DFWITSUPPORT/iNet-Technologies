import { Link } from "wouter";
import logo from "@/assets/inet-gear-logo-white.svg";
import { SITE, STATES_SENTENCE } from "@/lib/site";
import { OFFERS } from "@/content/offers";
import { MAGNET_LIST } from "@/content/magnets";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <img src={logo} alt="iNet Technologies" width={166} height={64} className="h-12 w-auto mb-4" />
            <p className="text-sm text-muted-foreground mb-4">
              We find where your business loses time and money, fix the process, and embed AI where it
              pays off.
            </p>
            <address className="not-italic text-sm text-muted-foreground space-y-1">
              <p className="text-foreground font-medium">{SITE.name}</p>
              <p>{SITE.city}, {SITE.region}</p>
              <p>
                <a href={`mailto:${SITE.email}`} className="hover:text-foreground">{SITE.email}</a>
              </p>
              <p>
                <a href={`tel:${SITE.phoneE164}`} className="hover:text-foreground">{SITE.phone}</a>
              </p>
            </address>
          </div>
          <div>
            <h2 className="text-base font-bold mb-4">Services</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {Object.values(OFFERS).map((o) => (
                <li key={o.slug}>
                  <Link href={o.path} className="hover:text-accent transition-colors">{o.name.replace(" for Field-Service Contractors", "")}</Link>
                </li>
              ))}
              <li><Link href="/ai-employee" className="hover:text-accent transition-colors">AI Employee Setup</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-base font-bold mb-4">Free guides</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {MAGNET_LIST.map((m) => (
                <li key={m.slug}>
                  <Link href={m.path} className="hover:text-accent transition-colors">{m.shortTitle}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-base font-bold mb-4">Who we serve</h2>
            <p className="text-sm text-muted-foreground mb-3">
              HVAC, plumbing, electrical and restoration contractors.
            </p>
            <p className="text-sm text-muted-foreground">Service area: {STATES_SENTENCE}.</p>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p suppressHydrationWarning>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-foreground">Terms & EULA</Link>
            <Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
