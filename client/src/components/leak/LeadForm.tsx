import { useCallback, useState, type FormEvent } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SITE, STATES, TRADES } from "@/lib/site";
import { submitLead } from "@/lib/leads";

interface LeadFormProps {
  /** Shown on the button and used in the email subject. */
  request: string;
  keyword: string;
  buttonLabel: string;
  /** Segment dropdown; defaults to contractor trades. */
  segment?: { label: string; options: readonly string[] };
}

const DEFAULT_SEGMENT = { label: "Trade", options: [...TRADES, "Other"] } as const;

const selectClass =
  "flex h-11 w-full rounded-md border border-input bg-background px-3 text-base md:text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring";

export function CopyEmail({ keyword }: { keyword: string }) {
  const [copied, setCopied] = useState(false);
  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked (non-HTTPS or permissions): the address is still selectable text.
    }
  }, []);

  return (
    <div className="rounded-xl border border-white/10 bg-background/60 p-4 text-sm">
      <p className="text-muted-foreground mb-2">
        Prefer plain email? Send the word{" "}
        <strong className="text-foreground">"{keyword}"</strong> to:
      </p>
      <div className="flex items-center gap-2">
        <code className="select-all font-mono text-foreground bg-card px-2 py-1 rounded break-all">
          {SITE.email}
        </code>
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-1 h-8 px-3 rounded-md border border-white/10 hover:bg-white/5 text-xs font-medium cursor-pointer"
          aria-label={`Copy ${SITE.email}`}
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
}

export default function LeadForm({ request, keyword, buttonLabel, segment = DEFAULT_SEGMENT }: LeadFormProps) {
  const [sent, setSent] = useState(false);

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const f = new FormData(e.currentTarget);
      const get = (k: string) => String(f.get(k) ?? "").trim();
      submitLead({
        name: get("name"),
        company: get("company"),
        email: get("email"),
        trade: get("trade"),
        tradeLabel: segment.label,
        state: get("state"),
        request,
        keyword,
      });
      setSent(true);
    },
    [request, keyword, segment.label],
  );

  return (
    <div className="space-y-4">
      <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2" aria-label={request}>
        <div className="space-y-1.5">
          <Label htmlFor="lf-name">Name</Label>
          <Input id="lf-name" name="name" required autoComplete="name" className="h-11" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="lf-company">Company</Label>
          <Input id="lf-company" name="company" required autoComplete="organization" className="h-11" />
        </div>
        <div className="space-y-1.5 sm:col-span-2">
          <Label htmlFor="lf-email">Work email</Label>
          <Input id="lf-email" name="email" type="email" required autoComplete="email" className="h-11" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="lf-trade">{segment.label}</Label>
          <select id="lf-trade" name="trade" required defaultValue="" className={selectClass}>
            <option value="" disabled>
              Select…
            </option>
            {segment.options.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="lf-state">State</Label>
          <select id="lf-state" name="state" required defaultValue="" className={selectClass}>
            <option value="" disabled>
              Select…
            </option>
            {STATES.map((s) => (
              <option key={s.code} value={s.name}>
                {s.name}
              </option>
            ))}
            <option>Other</option>
          </select>
        </div>
        <button
          type="submit"
          className="sm:col-span-2 h-12 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
        >
          <Mail className="w-4 h-4" />
          {buttonLabel}
        </button>
        <p className="sm:col-span-2 text-xs text-muted-foreground">
          This opens your email app with the request filled in. Hit send and a person replies,
          not a drip sequence. No list, no spam.
        </p>
      </form>
      {sent && (
        <p role="status" className="text-sm text-accent">
          Your email app should have opened. If it didn't, use the address below.
        </p>
      )}
      <CopyEmail keyword={keyword} />
    </div>
  );
}
