import { motion } from "framer-motion";
import { AlertTriangle, FileWarning, SearchX, GitGraph } from "lucide-react";

export default function Problem() {
  const problems = [
    {
      icon: <FileWarning className="w-6 h-6" />,
      title: "Data Fragmentation",
      desc: "Data fragmentation across business units, systems, and regions prevents true intelligence."
    },
    {
      icon: <GitGraph className="w-6 h-6" />,
      title: "Legacy Infrastructure",
      desc: "Outdated infrastructure blocking enterprise automation and scalability."
    },
    {
      icon: <SearchX className="w-6 h-6" />,
      title: "Inaccurate Outputs",
      desc: "AI produces inaccurate or non-compliant outputs without unified governance."
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Escalating Tech Debt",
      desc: "Rapidly expanding technical debt due to duplicate systems and non-scalable AI pilots."
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center mb-16">
          <span className="text-destructive font-mono text-sm tracking-wider uppercase mb-2">The Hidden Risks of Inaction</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            AI Is Not a Tool. <br />
            <span className="text-destructive">It's an Operating Model Shift.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            AI cannot produce enterprise value on top of fragmented systems and inconsistent data models. 
            Moving toward AI without readiness creates unmanageable technical debt and security vulnerabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-card border border-border hover:border-destructive/40 transition-colors group flex flex-col items-center text-center"
            >
              <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4 text-destructive group-hover:bg-destructive/20 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
