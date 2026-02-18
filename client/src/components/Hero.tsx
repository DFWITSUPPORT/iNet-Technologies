import { motion } from "framer-motion";
import { ArrowRight, Database, Bot } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Abstract Data Stream" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-primary tracking-wide uppercase">AI Integration & Consulting</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 tracking-tight">
            AI is only as smart as <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-primary bg-300% animate-gradient">
              your data allows.
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            We transform your messy data into a clean foundation, then deploy intelligent AI agents to work for you 24/7.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="h-12 px-8 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all flex items-center gap-2 group shadow-[0_0_20px_-5px_hsl(var(--primary))]">
              Start with an Audit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="h-12 px-8 rounded-lg border border-white/10 hover:bg-white/5 transition-all text-foreground font-medium backdrop-blur-sm">
              Explore Agents
            </button>
          </div>
        </motion.div>

        {/* Cards preview */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          <div className="p-6 rounded-2xl bg-card/40 border border-white/5 backdrop-blur-md hover:border-primary/30 transition-colors group">
            <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
              <Database className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-display font-bold mb-2">1. AI Readiness</h3>
            <p className="text-muted-foreground">Clean your data mess. Connect your systems. Build the foundation.</p>
          </div>

          <div className="p-6 rounded-2xl bg-card/40 border border-white/5 backdrop-blur-md hover:border-cyan/30 transition-colors group">
            <div className="h-12 w-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
              <Bot className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-display font-bold mb-2">2. Agent-as-a-Service</h3>
            <p className="text-muted-foreground">Deploy digital employees that never sleep, scale instantly, and cost less.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
