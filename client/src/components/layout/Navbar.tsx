import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-display font-bold text-xl tracking-tight flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white">IT</div>
          <span className="hidden sm:inline-block">Inet Technologies</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('readiness')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Readiness</button>
          <button onClick={() => scrollToSection('agents')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Agents</button>
          <button onClick={() => scrollToSection('process')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Process</button>
          <button className="h-9 px-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm font-medium cursor-pointer">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-white/5 p-4 flex flex-col gap-4 shadow-xl z-50">
          <button onClick={() => scrollToSection('readiness')} className="text-sm font-medium p-2 hover:bg-white/5 rounded text-left">Readiness</button>
          <button onClick={() => scrollToSection('agents')} className="text-sm font-medium p-2 hover:bg-white/5 rounded text-left">Agents</button>
          <button onClick={() => scrollToSection('process')} className="text-sm font-medium p-2 hover:bg-white/5 rounded text-left">Process</button>
          <button className="w-full h-10 rounded-lg bg-primary text-primary-foreground font-medium">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
}
