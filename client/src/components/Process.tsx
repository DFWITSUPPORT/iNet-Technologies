import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Process() {
  return (
    <section className="py-24 bg-background border-y border-white/5">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold">How It All Fits Together</h2>
          <p className="text-muted-foreground mt-4">The path to an automated enterprise.</p>
        </div>

        <div className="max-w-md mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent -translate-x-1/2"></div>

          <div className="space-y-12 relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-white/10 p-6 rounded-xl text-center shadow-lg relative"
            >
              <div className="text-sm text-destructive font-mono mb-2">Current State</div>
              <h3 className="font-bold text-lg">Your Data is Messy</h3>
              <p className="text-sm text-muted-foreground mt-1">Silos, duplicates, disconnection.</p>
            </motion.div>

            <div className="flex justify-center">
              <div className="bg-background border border-border p-2 rounded-full">
                <ArrowDown className="w-5 h-5 text-muted-foreground" />
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary/5 border border-primary/20 p-6 rounded-xl text-center shadow-[0_0_30px_-10px_rgba(59,130,246,0.1)] relative"
            >
              <div className="text-sm text-primary font-mono mb-2">Phase 1: Readiness</div>
              <h3 className="font-bold text-lg">We Clean & Connect</h3>
              <p className="text-sm text-muted-foreground mt-1">One-time project ($2.5k - $15k)</p>
            </motion.div>

            <div className="flex justify-center">
              <div className="bg-background border border-border p-2 rounded-full">
                <ArrowDown className="w-5 h-5 text-muted-foreground" />
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-accent/5 border border-accent/20 p-6 rounded-xl text-center shadow-[0_0_30px_-10px_rgba(6,182,212,0.1)] relative"
            >
              <div className="text-sm text-accent font-mono mb-2">Phase 2: Execution</div>
              <h3 className="font-bold text-lg">We Deploy AI Agents</h3>
              <p className="text-sm text-muted-foreground mt-1">Recurring service ($400 - $2.5k/mo)</p>
            </motion.div>

            <div className="flex justify-center">
              <div className="bg-background border border-border p-2 rounded-full">
                <ArrowDown className="w-5 h-5 text-muted-foreground" />
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-linear-to-br from-primary to-accent p-1 rounded-xl"
            >
              <div className="bg-background rounded-[10px] p-6 text-center h-full">
                <div className="text-sm font-mono text-transparent bg-clip-text bg-linear-to-r from-primary to-accent mb-2 uppercase tracking-widest font-bold">Result</div>
                <h3 className="font-bold text-lg text-white">Automated Enterprise</h3>
                <p className="text-sm text-muted-foreground mt-1">Sticky revenue + High efficiency</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
