import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Process() {
  return (
    <section className="py-24 bg-background border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-mono text-sm tracking-wider uppercase mb-2 block">Enterprise AI Readiness Framework</span>
          <h2 className="text-3xl font-display font-bold">A Systems-Level Approach Built for Scale</h2>
          <p className="text-muted-foreground mt-4">A proven 4-step framework to transition complex enterprises into AI-driven organizations.</p>
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
              <div className="flex justify-center mb-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold font-mono text-sm">1</div>
              </div>
              <h3 className="font-bold text-lg">Assess (Executive Diagnostic)</h3>
              <p className="text-sm text-muted-foreground mt-2">We analyze your daily operations, execute a comprehensive diagnostic on your infrastructure, and map out exactly where AI will deliver enterprise value.</p>
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
              className="bg-card border border-white/10 p-6 rounded-xl text-center shadow-lg relative"
            >
              <div className="flex justify-center mb-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold font-mono text-sm">2</div>
              </div>
              <h3 className="font-bold text-lg">Prepare (Data & System Alignment)</h3>
              <p className="text-sm text-muted-foreground mt-2">AI fails on messy data. We connect your APIs, resolve system fragmentation, enforce data governance, and build a unified foundation.</p>
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
              className="bg-card border border-white/10 p-6 rounded-xl text-center shadow-lg relative"
            >
              <div className="flex justify-center mb-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold font-mono text-sm">3</div>
              </div>
              <h3 className="font-bold text-lg">Deploy (AI Agents & Automations)</h3>
              <p className="text-sm text-muted-foreground mt-2">We build and train digital employees to handle complex enterprise workflows across departments safely, securely, and accurately.</p>
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
              className="bg-linear-to-br from-primary to-accent p-1 rounded-xl shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]"
            >
              <div className="bg-background rounded-[10px] p-6 text-center h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5"></div>
                <div className="flex justify-center mb-4 relative z-10">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold font-mono text-sm shadow-[0_0_15px_rgba(59,130,246,0.5)]">4</div>
                </div>
                <h3 className="font-bold text-xl text-white relative z-10">Optimize (Scale & Performance)</h3>
                <p className="text-sm text-muted-foreground mt-2 relative z-10">The automations go live. We monitor performance 24/7, refine logic, and ensure it continues to scale your margins without expanding headcount.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
