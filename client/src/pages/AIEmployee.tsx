import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/BookingModal";
import { 
  Bot, Clock, Zap, MessageSquare, Calendar, Target, 
  BarChart, BrainCircuit, CheckCircle2, ChevronRight, XCircle
} from "lucide-react";

export default function AIEmployee() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium mb-8">
              <Bot className="w-4 h-4 text-primary" />
              <span>Powered by iNet Technologies</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">
              Your Business Running <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                24/7 on Autopilot
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Stop losing leads to slow response times. Hire an AI employee that handles inquiries, books appointments, and follows up instantly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <BookingModal>
                <button className="h-14 px-8 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] cursor-pointer flex items-center gap-2">
                  Book Your Discovery Call
                  <ChevronRight className="w-5 h-5" />
                </button>
              </BookingModal>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-20">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col items-center">
                <Clock className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-3xl font-bold font-display mb-1">24/7</h3>
                <p className="text-muted-foreground font-medium">Always Responding</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col items-center">
                <Zap className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-3xl font-bold font-display mb-1">&lt;30s</h3>
                <p className="text-muted-foreground font-medium">Response Time</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col items-center">
                <Target className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-3xl font-bold font-display mb-1">48hr</h3>
                <p className="text-muted-foreground font-medium">Average Setup</p>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-24 border-t border-white/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">The Old Way is Breaking</h2>
              <p className="text-xl text-muted-foreground">If you rely on humans to catch every lead, you are losing money every day.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-8 rounded-2xl bg-destructive/10 border border-destructive/20 relative overflow-hidden">
                <XCircle className="w-10 h-10 text-destructive mb-6" />
                <h3 className="text-xl font-bold mb-3">Leads Go Cold</h3>
                <p className="text-muted-foreground">Every minute you delay responding to a new inquiry, the chance of closing drops dramatically.</p>
              </div>
              <div className="p-8 rounded-2xl bg-destructive/10 border border-destructive/20 relative overflow-hidden">
                <XCircle className="w-10 h-10 text-destructive mb-6" />
                <h3 className="text-xl font-bold mb-3">Admin Overwhelm</h3>
                <p className="text-muted-foreground">Your team spends hours answering the same basic questions instead of doing high-value work.</p>
              </div>
              <div className="p-8 rounded-2xl bg-destructive/10 border border-destructive/20 relative overflow-hidden">
                <XCircle className="w-10 h-10 text-destructive mb-6" />
                <h3 className="text-xl font-bold mb-3">Missed After-Hours</h3>
                <p className="text-muted-foreground">Customers are searching for your services at 9 PM and on weekends. You aren't there to answer.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white/5 border-y border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Meet Your Perfect Employee</h2>
              <p className="text-xl text-muted-foreground">It never sleeps, never takes days off, and has perfect memory.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { icon: MessageSquare, title: "Instant Responses", desc: "Replies to every inquiry in seconds, keeping leads warm and engaged." },
                { icon: Calendar, title: "Books Appointments", desc: "Integrates with your calendar to automatically schedule qualified prospects." },
                { icon: Target, title: "Qualifies Leads", desc: "Asks the right questions to ensure you only speak with ideal customers." },
                { icon: Zap, title: "Relentless Follow-up", desc: "Automatically chases unresponsive leads until they reply or opt out." },
                { icon: BrainCircuit, title: "Knows Your Business", desc: "Trained entirely on your FAQs, website, and past successful interactions." },
                { icon: BarChart, title: "Reports Everything", desc: "Logs every conversation to your CRM with a concise summary." },
              ].map((feature, i) => (
                <div key={i} className="p-8 rounded-2xl bg-background border border-white/10 hover:border-primary/50 transition-colors group">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">4 Steps to Automation</h2>
              <p className="text-xl text-muted-foreground">We handle the technical heavy lifting. You reap the rewards.</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { step: "01", title: "Discovery", desc: "We map your current lead flow and document your exact qualification criteria." },
                { step: "02", title: "We Build", desc: "Our engineers construct and train your custom AI agent on your business data." },
                { step: "03", title: "Go Live", desc: "We connect the agent to your SMS, website chat, Facebook, or Instagram." },
                { step: "04", title: "You Win", desc: "Watch qualified appointments appear on your calendar while you sleep." },
              ].map((step, i) => (
                <div key={i} className="relative">
                  <div className="text-7xl font-display font-black text-white/5 absolute -top-8 -left-4 pointer-events-none">{step.step}</div>
                  <h3 className="text-2xl font-bold mb-4 relative z-10">{step.title}</h3>
                  <p className="text-muted-foreground relative z-10">{step.desc}</p>
                  {i < 3 && <div className="hidden md:block absolute top-8 right-[-10%] w-1/5 border-t border-dashed border-white/20" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 bg-black/40 border-y border-white/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium mb-6">
                <span className="text-primary font-bold tracking-wider uppercase">Small Business Solutions</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Simple, Transparent Pricing</h2>
              <p className="text-xl text-muted-foreground">Hire a top-performing employee for a fraction of minimum wage.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
              {/* Starter */}
              <div className="p-8 rounded-3xl bg-background border border-white/10 shadow-xl">
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <p className="text-muted-foreground mb-6">For small businesses needing basic coverage.</p>
                <div className="mb-6">
                  <span className="text-5xl font-black">$497</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /><span>1 Channel (Web or SMS)</span></li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /><span>Basic FAQ Training</span></li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /><span>Lead Capture</span></li>
                  <li className="flex items-center gap-3 opacity-50"><XCircle className="w-5 h-5" /><span>Calendar Integration</span></li>
                  <li className="flex items-center gap-3 opacity-50"><XCircle className="w-5 h-5" /><span>CRM Sync</span></li>
                </ul>
                <BookingModal>
                  <button className="w-full h-12 rounded-xl bg-white/10 hover:bg-white/20 font-medium transition-colors">Select Starter</button>
                </BookingModal>
              </div>

              {/* Professional */}
              <div className="p-8 rounded-3xl bg-gradient-to-b from-primary/20 to-background border border-primary relative transform md:-translate-y-4 shadow-[0_0_40px_rgba(37,99,235,0.2)]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold mb-2">Professional</h3>
                <p className="text-muted-foreground mb-6">Complete automation for growing teams.</p>
                <div className="mb-6">
                  <span className="text-5xl font-black">$997</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /><span>Up to 3 Channels</span></li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /><span>Advanced Sales Training</span></li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /><span>Direct Calendar Booking</span></li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /><span>Basic CRM Integration</span></li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /><span>Automated Follow-ups</span></li>
                </ul>
                <BookingModal>
                  <button className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors shadow-lg">Select Professional</button>
                </BookingModal>
              </div>

              {/* Elite */}
              <div className="p-8 rounded-3xl bg-background border border-white/10 shadow-xl">
                <h3 className="text-2xl font-bold mb-2">Elite</h3>
                <p className="text-muted-foreground mb-6">Custom workflows for complex operations.</p>
                <div className="mb-6">
                  <span className="text-5xl font-black">$2,497</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /><span>Unlimited Channels</span></li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /><span>Complex Multi-Step Flows</span></li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /><span>Custom API Integrations</span></li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /><span>Voice Calling Agent (Inbound)</span></li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /><span>Dedicated Support Rep</span></li>
                </ul>
                <BookingModal>
                  <button className="w-full h-12 rounded-xl bg-white/10 hover:bg-white/20 font-medium transition-colors">Select Elite</button>
                </BookingModal>
              </div>
            </div>
            <p className="text-center text-muted-foreground mt-8">*All tiers require a one-time $1,500 setup and training fee.</p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-4xl font-display font-bold mb-12 text-center">Common Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                { q: "Will the AI sound like a robot?", a: "No. Our agents use state-of-the-art natural language processing. They use varied phrasing, natural conversational fillers, and match your brand's specific tone." },
                { q: "What if it doesn't know the answer?", a: "We program strict 'fallback' rules. If the agent isn't 100% sure, it gracefully hands the conversation over to a human team member via SMS or email notification." },
                { q: "How long does setup take?", a: "Typically 48 to 72 hours from the time we receive your onboarding questionnaire and calendar links." },
                { q: "Do I have to sign a long-term contract?", a: "No. Our service is month-to-month. If your AI employee isn't generating significantly more value than it costs, you can fire it anytime." }
              ].map((faq, i) => (
                <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10">
                  <h3 className="text-xl font-bold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-primary/20 pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-5xl font-display font-bold mb-6">Stop Leaving Money on the Table</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">Schedule a quick 15-minute discovery call to see exactly how an AI employee would handle your leads.</p>
            <BookingModal>
              <button className="h-14 px-10 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_0_40px_rgba(37,99,235,0.5)] cursor-pointer">
                Book Discovery Call
              </button>
            </BookingModal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
