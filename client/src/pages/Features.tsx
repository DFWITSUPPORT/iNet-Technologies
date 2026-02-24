import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/BookingModal";
import { 
  MessageSquare, Calendar, Users, CreditCard, Share2, 
  Star, ShoppingCart, Briefcase, Zap, CheckCircle2, ChevronRight 
} from "lucide-react";

export default function Features() {
  const integrationCategories = [
    {
      title: "Communication Channels",
      description: "Respond to customers wherever they reach out",
      icon: MessageSquare,
      items: [
        { name: "Instagram DM", desc: "Instantly responds to DMs, answers product questions, qualifies leads, sends booking links" },
        { name: "Facebook Messenger", desc: "Handles customer inquiries, FAQ responses, appointment scheduling, lead capture" },
        { name: "WhatsApp Business", desc: "Text conversations, media sharing, booking confirmations, order updates" },
        { name: "SMS / Text", desc: "Responds to texts, sends appointment reminders, follow-up sequences, quick updates" },
        { name: "Website Chat", desc: "Live chat widget for your site. Captures leads, answers questions in real-time" },
        { name: "Email", desc: "Reads inbox, responds to inquiries, sends follow-ups, triages messages by priority" },
        { name: "Telegram", desc: "Messaging support, notifications, customer service automation" },
        { name: "Voice / Phone", desc: "Answers calls, takes messages, routes to the right person, voicemail transcription" },
      ]
    },
    {
      title: "Calendar & Scheduling",
      description: "Book appointments automatically, no more phone tag",
      icon: Calendar,
      items: [
        { name: "Google Calendar", desc: "Checks your availability, books appointments, sends calendar invites automatically" },
        { name: "Outlook / Microsoft 365", desc: "Syncs with your work calendar, manages availability across teams" },
        { name: "Calendly", desc: "Sends booking links, confirms appointments, handles reschedules automatically" },
        { name: "Cal.com", desc: "Open-source scheduling, full booking management, team calendars" },
        { name: "Acuity Scheduling", desc: "Appointment booking with payment collection, intake forms, reminders" },
      ]
    },
    {
      title: "CRM & Lead Management",
      description: "Capture and track every lead automatically",
      icon: Users,
      items: [
        { name: "HubSpot", desc: "Creates contacts, logs conversations, updates deal stages, triggers workflows" },
        { name: "Salesforce", desc: "Lead capture, opportunity tracking, activity logging, custom object updates" },
        { name: "GoHighLevel", desc: "Full CRM integration — leads, pipelines, automations, SMS, email all in one" },
        { name: "Pipedrive", desc: "Deal tracking, contact management, activity logging, pipeline updates" },
        { name: "Zoho CRM", desc: "Contact creation, lead scoring, follow-up task creation, deal management" },
        { name: "Airtable", desc: "Flexible database for custom CRM, lead tracking, project management" },
        { name: "Google Sheets", desc: "Simple lead logging, data capture, custom reporting, easy exports" },
        { name: "Notion", desc: "Database management, client tracking, notes, documentation" },
      ]
    },
    {
      title: "Payments & Invoicing",
      description: "Get paid faster with automated billing",
      icon: CreditCard,
      items: [
        { name: "Stripe", desc: "Sends payment links, checks payment status, subscription management, invoice reminders" },
        { name: "Square", desc: "Payment processing, appointment deposits, invoice creation" },
        { name: "QuickBooks", desc: "Creates invoices, sends payment reminders, checks payment history, expense tracking" },
        { name: "PayPal", desc: "Payment links, transaction tracking, invoice management" },
        { name: "Invoice Ninja", desc: "Automated invoicing, recurring billing, payment reminders" },
      ]
    },
    {
      title: "Social Media & Marketing",
      description: "Stay active online without the effort",
      icon: Share2,
      items: [
        { name: "LinkedIn", desc: "Posts content, responds to messages, connection requests, engagement" },
        { name: "Twitter / X", desc: "Auto-posting, mention monitoring, DM responses, engagement" },
        { name: "TikTok", desc: "Comment responses, DM management, content scheduling" },
        { name: "Mailchimp", desc: "Adds leads to email lists, triggers welcome sequences, campaign management" },
        { name: "ConvertKit", desc: "Email automations, subscriber tagging, sequence triggers" },
        { name: "ActiveCampaign", desc: "Email marketing + CRM automation combined, lead scoring" },
        { name: "Publer / Buffer", desc: "Schedules posts across all platforms, content calendar management" },
      ]
    },
    {
      title: "Reviews & Reputation",
      description: "Build social proof automatically",
      icon: Star,
      items: [
        { name: "Google Business", desc: "Responds to reviews, requests reviews from happy customers, monitors reputation" },
        { name: "Yelp", desc: "Review monitoring, response drafting, reputation alerts" },
        { name: "Facebook Reviews", desc: "Auto-responds to reviews, flags negative feedback for attention" },
        { name: "Trustpilot", desc: "Review management, automated responses, reputation tracking" },
      ]
    },
    {
      title: "E-commerce",
      description: "Support customers and manage orders",
      icon: ShoppingCart,
      items: [
        { name: "Shopify", desc: "Order status updates, product questions, inventory checks, customer support" },
        { name: "WooCommerce", desc: "WordPress e-commerce support, order tracking, customer inquiries" },
        { name: "BigCommerce", desc: "Product information, order management, customer support" },
        { name: "Gumroad", desc: "Digital product support, purchase verification, customer help" },
      ]
    },
    {
      title: "Industry-Specific Tools",
      description: "Deep integrations for your business type",
      icon: Briefcase,
      items: [
        { name: "Jobber", desc: "(Home Services) Scheduling, quotes, invoicing, customer management" },
        { name: "ServiceTitan", desc: "(HVAC/Plumbing) Dispatch, booking, customer management" },
        { name: "Housecall Pro", desc: "(Field Service) Appointment booking, estimates, payments" },
        { name: "Mindbody", desc: "(Fitness/Wellness) Class booking, memberships, client management" },
        { name: "Vagaro", desc: "(Salons/Spas) Appointment scheduling, client management, payments" },
        { name: "Clio", desc: "(Legal) Client intake, matter management, billing" },
        { name: "Practice Better", desc: "(Health Coaches) Scheduling, client portal, programs" },
        { name: "Buildertrend", desc: "(Construction) Project management, client communication, scheduling" },
      ]
    },
    {
      title: "Automation Hubs",
      description: "Connect to 5,000+ additional apps",
      icon: Zap,
      items: [
        { name: "Zapier", desc: "Connects any app to any app via triggers and actions. 5,000+ integrations." },
        { name: "Make (Integromat)", desc: "Complex multi-step automations, visual workflow builder" },
        { name: "n8n", desc: "Self-hosted automation, unlimited workflows, full customization" },
      ]
    }
  ];

  const capabilities = [
    { name: "Answer Inquiries", desc: "Responds instantly on any channel — DM, text, email, chat" },
    { name: "Book Appointments", desc: "Checks calendar, offers times, confirms, sends reminders" },
    { name: "Qualify Leads", desc: "Asks questions, scores leads, routes hot ones to you" },
    { name: "Follow Up", desc: "Nurtures leads, checks in after quotes, never forgets" },
    { name: "Collect Payments", desc: "Sends invoices, payment links, reminders" },
    { name: "Get Reviews", desc: "Asks happy customers for reviews automatically" },
    { name: "Post Content", desc: "Keeps your social media active without effort" },
    { name: "Report Everything", desc: "Daily summaries of activity, leads, and results" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">
              Everything Your AI Employee <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                Can Do For You
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
              One AI. Every channel. Every tool. Working 24/7 so you don't have to.
            </p>
          </div>
        </section>

        {/* Integration Categories */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-24">
              {integrationCategories.map((category, i) => (
                <div key={i} className="scroll-mt-24">
                  <div className="flex items-center gap-4 mb-10 pb-4 border-b border-white/10">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                      <category.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-display font-bold">{category.title}</h2>
                      <p className="text-muted-foreground text-lg">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((item, j) => (
                      <div key={j} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                        <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                          {item.name}
                        </h3>
                        <p className="text-muted-foreground ml-7">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Your AI Employee Can Do */}
        <section className="py-24 bg-white/5 border-y border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/10 to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">What Your AI Employee Can Do</h2>
              <p className="text-xl text-muted-foreground">The ultimate multi-tasker, handling every aspect of your customer journey.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {capabilities.map((cap, i) => (
                <div key={i} className="p-6 rounded-2xl bg-background border border-white/10 shadow-lg group hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{cap.name}</h3>
                  <p className="text-muted-foreground">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-primary/20 pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-5xl font-display font-bold mb-6">Ready to connect everything?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">Get your AI Employee set up with all your tools in 48 hours.</p>
            <div className="flex flex-col items-center gap-4">
              <BookingModal>
                <button className="h-14 px-10 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_0_40px_rgba(37,99,235,0.5)] cursor-pointer flex items-center gap-2">
                  Get Started — From $497
                  <ChevronRight className="w-5 h-5" />
                </button>
              </BookingModal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
