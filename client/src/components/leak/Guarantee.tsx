import { ShieldCheck } from "lucide-react";
import { GUARANTEE_TEXT, SHOW_GUARANTEE } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Renders nothing unless SHOW_GUARANTEE is on (see lib/site.ts; pending Tim's approval). */
export default function Guarantee({ className }: { className?: string }) {
  if (!SHOW_GUARANTEE) return null;
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-xl border border-primary/40 bg-primary/10 p-4 text-sm",
        className,
      )}
    >
      <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
      <p>
        <strong className="text-foreground">The 3× guarantee.</strong>{" "}
        <span className="text-muted-foreground">{GUARANTEE_TEXT}</span>
      </p>
    </div>
  );
}
