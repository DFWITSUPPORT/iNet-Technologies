import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Settings, PhoneCall } from "lucide-react";

export default function CaseStudies() {
  const cases = [
    {
      icon: <Settings className="w-6 h-6" />,
      clientType: "National Roofing Contractor",
      title: "ERP Overhaul & Automation",
      challenge: "Outdated, fragmented systems causing manual entry errors, data silos, and a month-end close process that took weeks.",
      solution: "Implemented a unified ERP system, automated order processing and invoicing, and built custom data synchronization workflows.",
      results: [
        "40% reduction in manual data entry errors",
        "25% improvement in production efficiency",
        "Month-end close process reduced by 50%"
      ]
    },
    {
      icon: <PhoneCall className="w-6 h-6" />,
      clientType: "Call Center / Telecom",
      title: "Legacy Infrastructure Modernization",
      challenge: "Bound to expensive, failing copper-based hardware dialers with zero remote work capabilities and high maintenance costs.",
      solution: "Migrated to a cloud-hosted VoIP architecture using FreeSWITCH and Kamailio, with a custom-built desktop client and CRM integration.",
      results: [
        "40% increase in active call volume",
        "Zero hardware deployment delays",
        "Enabled 100% remote workforce capability"
      ]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      clientType: "Field Services Company",
      title: "Data Visualization & Alerting App",
      challenge: "Manually cross-referencing weather events with customer databases to identify service opportunities, losing days of response time.",
      solution: "Built a custom application integrating weather APIs with customer SQL databases, overlaying real-time impact zones on Google Maps.",
      results: [
        "Automated event tracking every 6 hours",
        "Instant visibility on affected customer regions",
        "Automated list generation for immediate marketing outreach"
      ]
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Proven Outcomes</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold">Real Problems. Real Solutions.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            We don't just build software; we solve complex operational bottlenecks. Here is how we've transformed businesses across industries.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card/40 border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors group flex flex-col h-full"
            >
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-3 mb-6 text-muted-foreground">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    {study.icon}
                  </div>
                  <span className="text-sm font-medium uppercase tracking-wider">{study.clientType}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                
                <div className="mb-6 flex-grow">
                  <p className="text-sm font-bold text-destructive mb-1">The Challenge:</p>
                  <p className="text-sm text-muted-foreground mb-4">{study.challenge}</p>
                  
                  <p className="text-sm font-bold text-primary mb-1">The Solution:</p>
                  <p className="text-sm text-muted-foreground">{study.solution}</p>
                </div>

                <div className="bg-background/50 -mx-8 -mb-8 p-8 mt-auto border-t border-border">
                  <p className="text-sm font-bold text-foreground mb-3 font-mono">Measurable ROI:</p>
                  <ul className="space-y-2">
                    {study.results.map((result, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
