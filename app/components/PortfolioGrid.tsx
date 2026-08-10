"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export default function PortfolioGrid() {
  return (
    <section id="work" className="py-24 px-8 md:px-16 max-w-7xl mx-auto z-10 relative scroll-mt-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-purple-400 font-mono text-sm tracking-wider uppercase"
          >
            // Selected Works
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mt-2 text-zinc-100"
          >
            Featured Projects
          </motion.h2>
        </div>
      </div>

      {/* Rounded Maintenance Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass-card rounded-3xl p-10 sm:p-14 flex flex-col items-center justify-center text-center min-h-[300px] max-w-2xl mx-auto border border-amber-500/30 bg-amber-500/5 shadow-2xl"
      >
        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6 shadow-lg shadow-amber-500/5">
          <AlertTriangle size={32} />
        </div>

        <h3 className="text-2xl font-bold text-zinc-100 mb-3">
          Under Maintenance
        </h3>
        
        <p className="text-zinc-400 text-base max-w-md font-light leading-relaxed">
          Sorry! Arya is currently busy updating the project showcase. Check back soon!
        </p>
      </motion.div>
    </section>
  );
}
