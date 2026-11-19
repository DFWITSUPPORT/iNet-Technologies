import { Link } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import BookingModal from "@/components/BookingModal";
import logo from "@/assets/inet-gear-logo-white.svg";
import { OFFERS } from "@/content/offers";
import { MAGNET_LIST, MAGNETS } from "@/content/magnets";

interface NavItem {
  href: string;
  label: string;
}
interface NavGroup {
  label: string;
  sections: { heading: string; items: NavItem[] }[];
}

const GROUPS: NavGroup[] = [
  {
    label: "Services",
    sections: [
      {
        heading: "Field-service contractors",
        items: [
          { href: OFFERS["leak-audit"].path, label: "Six-Figure Leak Audit" },
          { href: OFFERS.quickbooks.path, label: "QuickBooks Sync Rescue" },
          { href: OFFERS["field-service"].path, label: "Field Service Stack Audit" },
          { href: OFFERS.erp.path, label: "ERP Reality Check" },
        ],
      },
      {
        heading: "Small business",
        items: [
          { href: "/ai-employee", label: "AI Employee Setup" },
          { href: "/features", label: "AI Employee Features" },
        ],
      },
    ],
  },
  {
    label: "Free guides",
    sections: [{ heading: "For contractors", items: MAGNET_LIST.map((m) => ({ href: m.path, label: m.shortTitle })) }],
  },
];

function Dropdown({ group }: { group: NavGroup }) {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const show = useCallback(() => {
    if (timeout.current) clearTimeout(timeout.current);
    setOpen(true);
  }, []);
  const hide = useCallback(() => {
    timeout.current = setTimeout(() => setOpen(false), 150);
  }, []);

  return (
    <div className="relative" onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer py-2"
      >
        {group.label}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <div
        className={`absolute top-full -left-4 pt-2 transition-all duration-200 origin-top ${
          open ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        <div className="w-72 rounded-xl border border-white/10 bg-background/95 backdrop-blur-xl p-2 shadow-xl flex flex-col gap-1">
          {group.sections.map((s, i) => (
            <div key={s.heading}>
              {i > 0 && <div className="h-px bg-white/10 my-1" />}
              <div className="px-3 py-1.5 text-xs font-bold text-muted-foreground uppercase tracking-wider">{s.heading}</div>
              {s.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 text-sm text-foreground hover:bg-white/5 rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/85 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity" aria-label="iNet Technologies home">
          <img src={logo} alt="iNet Technologies" width={125} height={48} className="h-10 w-auto" />
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          <Link href={OFFERS["leak-audit"].path} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2">
            Leak Audit
          </Link>
          {GROUPS.map((g) => (
            <Dropdown key={g.label} group={g} />
          ))}
          <BookingModal>
            <button type="button" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer py-2">
              Book a call
            </button>
          </BookingModal>
          <Link
            href={MAGNETS.checklist.path}
            className="h-9 px-4 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-semibold inline-flex items-center"
          >
            Get the Leak Checklist
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsOpen((o) => !o)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-background border-b border-white/5 p-4 flex flex-col gap-2 shadow-xl z-50 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <Link href={OFFERS["leak-audit"].path} onClick={close} className="text-sm font-semibold p-2 rounded hover:bg-white/5">
            Six-Figure Leak Audit
          </Link>
          {GROUPS.flatMap((g) => g.sections).map((s) => (
            <div key={s.heading} className="flex flex-col gap-1">
              <div className="px-2 pt-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">{s.heading}</div>
              {s.items.map((item) => (
                <Link key={item.href} href={item.href} onClick={close} className="text-sm p-2 rounded hover:bg-white/5">
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="h-px bg-white/5 my-2" />
          <Link
            href={MAGNETS.checklist.path}
            onClick={close}
            className="w-full h-11 rounded-lg bg-primary text-primary-foreground font-semibold inline-flex items-center justify-center"
          >
            Get the Leak Checklist
          </Link>
          <BookingModal>
            <button type="button" className="w-full h-11 rounded-lg border border-white/15 font-medium cursor-pointer">
              Book a call
            </button>
          </BookingModal>
        </div>
      )}
    </nav>
  );
}
