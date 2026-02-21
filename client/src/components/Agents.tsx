import { motion } from "framer-motion";
import { Check, Bot, Zap, Crown } from "lucide-react";
import agentIcon from "@/assets/agent-icon.png";

export default function Agents() {
  const tiers = [
    {
      name: "Department Pilot",
      icon: <Bot className="w-6 h-6" />,
      price: "$2,500",
      period: "/mo",
      desc: "Automate specific departmental bottlenecks.",
      features: ["Customer Experience / Support", "Sales Operations Automation", "Internal IT / Compliance", "Error-Free Execution"],
      highlight: false
    },
    {
      name: "Enterprise Core",
      icon: <Zap className="w-6 h-6" />,
      price: "$5,000",
      period: "/mo",
      desc: "Cross-departmental digital workforce.",
      features: ["Multi-System AI Agents", "End-to-End Task Handling", "Enterprise System Integrations", "24/7 Active Monitoring", "Contextual Memory & Governance"],
      highlight: true
    },
    {
      name: "Enterprise Scale",
      icon: <Crown className="w-6 h-6" />,
      price: "$10,000+",
      period: "/mo",
      desc: "Scale entire operations automatically.",
      features: ["Replace Complex Multi-Role Processes", "Dedicated Private Infrastructure", "Advanced Analytics & ROI Dashboards", "Priority 24/7 Enterprise Support", "Custom API Actions"],
      highlight: false
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16 gap-6">
          <div className="hidden md:block">
            <img src={agentIcon} alt="AI Agent" className="w-24 h-24 animate-float opacity-80 mx-auto" />
          </div>
          <div className="max-w-2xl flex flex-col items-center">
            <span className="text-accent font-mono text-sm tracking-wider uppercase">Enterprise Agent-as-a-Service (AaaS)</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-2 mb-4">Enterprise AI Automations</h2>
            <p className="text-lg text-muted-foreground">
              Once your foundation is secure, we deploy AI agents to handle Customer Experience, Internal Efficiency, Sales Operations, and IT Compliance at scale.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl p-8 border flex flex-col items-center text-center ${
                tier.highlight 
                  ? "bg-card/80 border-primary shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)]" 
                  : "bg-card/40 border-white/5 hover:border-white/10"
              } backdrop-blur-sm transition-all duration-300`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-6 ${
                tier.highlight ? "bg-primary text-white" : "bg-white/5 text-foreground"
              }`}>
                {tier.icon}
              </div>

              <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
              <p className="text-sm text-muted-foreground mb-6 h-10">{tier.desc}</p>

              <div className="flex items-baseline justify-center gap-1 mb-8 w-full">
                <span className="text-4xl font-display font-bold">{tier.price}</span>
                <span className="text-muted-foreground">{tier.period}</span>
              </div>

              <ul className="space-y-4 mb-8 w-full">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center justify-center gap-3 text-sm">
                    <Check className={`w-5 h-5 shrink-0 ${tier.highlight ? "text-primary" : "text-muted-foreground"}`} />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-lg font-medium transition-all ${
                tier.highlight 
                  ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25" 
                  : "bg-white/5 hover:bg-white/10 text-foreground"
              }`}>
                Select Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
