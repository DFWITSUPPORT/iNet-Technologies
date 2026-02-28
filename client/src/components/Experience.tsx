import { motion } from "framer-motion";
import { ShieldCheck, History, Server, Building2 } from "lucide-react";

export default function Experience() {
  const stats = [
    {
      value: "25+",
      label: "Years Experience",
      desc: "Building enterprise systems before AI was a buzzword."
    },
    {
      value: "100+",
      label: "Systems Integrated",
      desc: "From legacy mainframes to modern cloud architectures."
    },
    {
      value: "Zero",
      label: "Tolerance for Hype",
      desc: "We build solutions that actually work in production."
    }
  ];

  return (
    <section className="py-24 bg-card/30 border-y border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground tracking-wide uppercase">Battle-Tested Engineering</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
              We are not a fly-by-night <br />
              <span className="text-muted-foreground">"AI Agency".</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Most of these overnight "AI Agencies" lack real engineering experience. They sell fragile wrappers and hype, leaving you with systems that break when it matters most.
            </p>
            <p className="text-lg text-foreground/80 mb-8">
              We are different. iNet Technologies is a true technical powerhouse, fully staffed with dedicated <strong>Developers, Business Analysts, QA Engineers, and System Architects</strong>. With over 25 years of experience integrating complex systems, we have the deep technical talent required to support our clients and build AI infrastructure that actually scales.
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-sm font-medium bg-background px-4 py-2 rounded-lg border border-border">
                <Building2 className="w-4 h-4 text-primary" />
                Enterprise Grade
              </div>
              <div className="flex items-center gap-2 text-sm font-medium bg-background px-4 py-2 rounded-lg border border-border">
                <Server className="w-4 h-4 text-primary" />
                Legacy Compatible
              </div>
              <div className="flex items-center gap-2 text-sm font-medium bg-background px-4 py-2 rounded-lg border border-border">
                <History className="w-4 h-4 text-primary" />
                Proven Track Record
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background border border-white/5 p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-6 group hover:border-primary/30 transition-colors shadow-lg"
              >
                <div className="w-24 shrink-0 text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                  {stat.value}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">{stat.label}</h3>
                  <p className="text-sm text-muted-foreground">{stat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
