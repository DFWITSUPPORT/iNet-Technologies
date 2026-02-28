import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import BookingModal from "@/components/BookingModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [location, setLocation] = useLocation();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToSection = (id: string) => {
    if (location !== "/") {
      setLocation("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-display font-bold text-xl tracking-tight flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white">iN</div>
          <span className="hidden sm:inline-block">iNet Technologies</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div 
            className="relative" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer py-2">
              Services <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Dropdown Menu */}
            <div className={`absolute top-full -left-4 pt-2 transition-all duration-200 origin-top ${isServicesOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
              <div className="w-64 rounded-xl border border-white/10 bg-background/95 backdrop-blur-xl p-2 shadow-xl flex flex-col gap-1">
                <div className="px-3 py-1.5 text-xs font-bold text-muted-foreground uppercase tracking-wider">Small Business</div>
                <Link href="/ai-employee">
                  <span className="block px-3 py-2 text-sm text-foreground hover:bg-white/5 rounded-lg transition-colors cursor-pointer" onClick={() => setIsServicesOpen(false)}>AI Employee Setup</span>
                </Link>
                <Link href="/features">
                  <span className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg transition-colors cursor-pointer ml-2" onClick={() => setIsServicesOpen(false)}>└ Features</span>
                </Link>
                <div className="h-px bg-white/10 my-1"></div>
                <div className="px-3 py-1.5 text-xs font-bold text-muted-foreground uppercase tracking-wider">Enterprise</div>
                <button onClick={() => scrollToSection('enterprise-aaas')} className="w-full text-left px-3 py-2 text-sm text-foreground hover:bg-white/5 rounded-lg transition-colors">Agent-as-a-Service</button>
              </div>
            </div>
          </div>
          
          <button onClick={() => scrollToSection('process')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer py-2">Process</button>
          
          <BookingModal>
            <button className="h-9 px-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm font-medium cursor-pointer">
              Contact Us
            </button>
          </BookingModal>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-white/5 p-4 flex flex-col gap-4 shadow-xl z-50 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="flex flex-col gap-1">
            <div className="text-sm font-bold text-foreground/50 uppercase tracking-wider px-2 py-2">Services</div>
            <div className="flex flex-col gap-1 border-l border-white/10 ml-3 pl-2">
              <div className="px-2 py-1 text-xs font-bold text-muted-foreground uppercase mt-1">Small Business</div>
              <Link href="/ai-employee">
                <span className="text-sm font-medium p-2 hover:bg-white/5 rounded text-left block text-foreground" onClick={() => setIsOpen(false)}>AI Employee Setup</span>
              </Link>
              <Link href="/features">
                <span className="text-sm font-medium p-2 hover:bg-white/5 rounded text-left block text-muted-foreground ml-2" onClick={() => setIsOpen(false)}>└ Features</span>
              </Link>
              
              <div className="px-2 py-1 text-xs font-bold text-muted-foreground uppercase mt-2">Enterprise</div>
              <button onClick={() => scrollToSection('enterprise-aaas')} className="text-sm font-medium p-2 hover:bg-white/5 rounded text-left text-foreground">Agent-as-a-Service</button>
            </div>
          </div>
          <div className="h-px bg-white/5 my-1" />
          <button onClick={() => scrollToSection('process')} className="text-sm font-medium p-2 hover:bg-white/5 rounded text-left">Process</button>
          
          <BookingModal>
            <button className="w-full h-10 rounded-lg bg-primary text-primary-foreground font-medium cursor-pointer">
              Contact Us
            </button>
          </BookingModal>
        </div>
      )}
    </nav>
  );
}
