"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="py-16 sm:py-24 px-3 sm:px-12 max-w-7xl mx-auto w-full z-10 relative scroll-mt-24 border-t border-zinc-900">
      
      <div className="mb-8 sm:mb-12 text-left">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-purple-400 font-mono text-[10px] sm:text-sm tracking-wider uppercase block mb-1 sm:mb-2"
        >
          // Get In Touch
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-7xl font-extrabold tracking-tight text-zinc-100 max-w-2xl"
        >
          Let's build something great.
        </motion.h2>
      </div>

      {/* Strictly 4-Column Layout across Mobile and Desktop */}
      <div className="grid grid-cols-4 gap-2 sm:gap-6 mb-12 sm:mb-16">
        <a
          href="mailto:aryasmeo@gmail.com"
          className="glass-card p-2.5 sm:p-6 rounded-xl sm:rounded-2xl flex flex-col justify-between hover:border-purple-500/50 transition-all group min-h-[100px] sm:min-h-0"
        >
          <Mail className="text-zinc-400 group-hover:text-purple-400 transition-colors mb-2 sm:mb-6 w-4 h-4 sm:w-6 sm:h-6" />
          <div>
            <span className="text-[8px] sm:text-xs font-mono text-zinc-500 block mb-0.5">Email</span>
            <span className="text-[9px] sm:text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors block truncate">
              aryasmeo@gmail.com
            </span>
          </div>
        </a>

        <a
          href="https://wa.me/6282299794279"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card p-2.5 sm:p-6 rounded-xl sm:rounded-2xl flex flex-col justify-between hover:border-purple-500/50 transition-all group min-h-[100px] sm:min-h-0"
        >
          <MessageSquare className="text-zinc-400 group-hover:text-purple-400 transition-colors mb-2 sm:mb-6 w-4 h-4 sm:w-6 sm:h-6" />
          <div>
            <span className="text-[8px] sm:text-xs font-mono text-zinc-500 block mb-0.5">WhatsApp</span>
            <span className="text-[9px] sm:text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors block truncate">
              +62 822 9979 4279
            </span>
          </div>
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card p-2.5 sm:p-6 rounded-xl sm:rounded-2xl flex flex-col justify-between hover:border-purple-500/50 transition-all group min-h-[100px] sm:min-h-0"
        >
          <Linkedin className="text-zinc-400 group-hover:text-purple-400 transition-colors mb-2 sm:mb-6 w-4 h-4 sm:w-6 sm:h-6" />
          <div>
            <span className="text-[8px] sm:text-xs font-mono text-zinc-500 block mb-0.5">LinkedIn</span>
            <span className="text-[9px] sm:text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors block truncate">
              Arya Yonas Pratama
            </span>
          </div>
        </a>

        <a
          href="https://github.com/noy2high"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card p-2.5 sm:p-6 rounded-xl sm:rounded-2xl flex flex-col justify-between hover:border-purple-500/50 transition-all group min-h-[100px] sm:min-h-0"
        >
          <Github className="text-zinc-400 group-hover:text-purple-400 transition-colors mb-2 sm:mb-6 w-4 h-4 sm:w-6 sm:h-6" />
          <div>
            <span className="text-[8px] sm:text-xs font-mono text-zinc-500 block mb-0.5">GitHub</span>
            <span className="text-[9px] sm:text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors block truncate">
              @noy2high
            </span>
          </div>
        </a>
      </div>

      <div className="flex flex-row justify-between items-center text-[9px] sm:text-xs text-zinc-500 pt-6 sm:pt-8 border-t border-zinc-900/60 font-mono">
        <span>© 2026 ARYA. All rights reserved.</span>
        <span>Built with Next.js & Tailwind</span>
      </div>

    </footer>
  );
}
