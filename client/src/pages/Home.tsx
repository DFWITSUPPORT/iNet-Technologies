import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Problem from "@/components/Problem";
import Readiness from "@/components/Readiness";
import Agents from "@/components/Agents";
import Process from "@/components/Process";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Problem />
        <div id="readiness">
          <Readiness />
        </div>
        <div id="process">
          <Process />
        </div>
        <div id="agents">
          <Agents />
        </div>
        
        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/10"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Ready to upgrade your workforce?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Start with a readiness audit to see where you stand, or schedule a demo of our agents in action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="h-14 px-8 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 cursor-pointer">
                Book a Free Consultation
              </button>
              <button className="h-14 px-8 rounded-full bg-card border border-white/10 text-foreground font-medium text-lg hover:bg-white/5 transition-all cursor-pointer">
                View Pricing Details
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
