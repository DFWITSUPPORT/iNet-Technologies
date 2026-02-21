import { motion } from "framer-motion";
import { CheckCircle2, Search, Database, Code2 } from "lucide-react";

export default function Readiness() {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Enterprise AI Readiness Assessment",
      price: "$2,500",
      desc: "We conduct an executive diagnostic to identify fragmentation, risks, and ROI potential before any code is written.",
      details: ["Executive Diagnostic", "Data Governance Review", "ROI Projection & Roadmap"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Enterprise Data Foundation",
      price: "$15,000+",
      desc: "We prepare your data and align your systems so AI has a secure, compliant, and unified foundation to operate on.",
      details: ["System Integration & Alignment", "Data Cleaning & Unification", "Security & Governance Setup"]
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Custom Enterprise Integration",
      price: "Custom",
      desc: "We unlock data trapped in legacy infrastructure across business units, regions, and conflicting reporting systems.",
      details: ["Legacy System Unblocking", "Cross-Department Alignment", "Enterprise Architecture"]
    }
  ];

  return (
    <section className="py-24 bg-secondary/30 relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-16 flex flex-col items-center text-center">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Enterprise Service Packages</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-2 mb-4">We Prepare Complex Organizations for AI Deployment</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Enterprises don't need more tools—they need clarity, alignment, and a unified data foundation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-white/5 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 shadow-lg relative group overflow-hidden flex flex-col items-center text-center"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                {step.icon}
              </div>
              
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
              <div className="text-xl font-mono text-accent mb-4">{step.price}</div>
              <p className="text-muted-foreground mb-8">{step.desc}</p>
              
              <ul className="space-y-3 w-full">
                {step.details.map((detail, i) => (
                  <li key={i} className="flex items-center justify-center gap-3 text-sm text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
