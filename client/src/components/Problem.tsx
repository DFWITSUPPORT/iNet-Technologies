import { motion } from "framer-motion";
import { AlertTriangle, FileWarning, SearchX, GitGraph } from "lucide-react";

export default function Problem() {
  const problems = [
    {
      icon: <FileWarning className="w-6 h-6" />,
      title: "Scattered Files",
      desc: "Data lives in 10 different spreadsheets, emails, and legacy systems."
    },
    {
      icon: <GitGraph className="w-6 h-6" />,
      title: "Disconnected Systems",
      desc: "Your CRM doesn't talk to your accounting software. Nothing syncs."
    },
    {
      icon: <SearchX className="w-6 h-6" />,
      title: "No Truth Source",
      desc: "Duplicates, missing info, and outdated records make decisions impossible."
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "AI Failure",
      desc: "You tried AI tools but got garbage results because the input was messy."
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            You can't hire AI if your <br />
            <span className="text-destructive">office is a mess.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Think of it like this: You wouldn't hire a new employee into an office where files are scattered on the floor and nobody knows where anything is. AI is the same — it needs structure to survive.
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
              className="p-6 rounded-xl bg-card border border-border hover:border-destructive/40 transition-colors group"
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
