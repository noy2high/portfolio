"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Globe, Share2, ArrowUpRight } from "lucide-react";

const SOCIALS = [
  {
    name: "Email",
    value: "aryasmeo@gmail.com",
    href: "mailto:aryasmeo@gmail.com",
    icon: Mail,
    color: "hover:text-purple-400 hover:border-purple-500/50",
  },
  {
    name: "WhatsApp",
    value: "+62 822 9979 4279",
    href: "https://wa.me/6282299794279",
    icon: MessageCircle,
    color: "hover:text-emerald-400 hover:border-emerald-500/50",
  },
  {
    name: "LinkedIn",
    value: "Arya Yonas Pratama",
    href: "https://www.linkedin.com/in/arya-yonas-pratama-9864a6223/",
    icon: Share2,
    color: "hover:text-blue-400 hover:border-blue-500/50",
  },
  {
    name: "GitHub",
    value: "@noy2high",
    href: "https://github.com/noy2high",
    icon: Globe,
    color: "hover:text-zinc-200 hover:border-zinc-500",
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="py-24 px-8 md:px-16 max-w-7xl mx-auto z-10 relative border-t border-zinc-900">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-16">
        <div>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-purple-400 font-mono text-sm tracking-wider uppercase"
          >
            // Get In Touch
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-extrabold tracking-tight mt-2 text-zinc-100"
          >
            Let's build <br /> something great.
          </motion.h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
        {SOCIALS.map((soc) => {
          const Icon = soc.icon;
          return (
            <motion.a
              key={soc.name}
              href={soc.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className={`p-5 bg-zinc-900/50 border border-zinc-800 rounded-2xl flex flex-col justify-between min-h-[140px] transition-all group ${soc.color}`}
            >
              <div className="flex justify-between items-center text-zinc-400 group-hover:text-inherit">
                <Icon size={22} />
                <ArrowUpRight size={18} className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>

              <div>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-1">
                  {soc.name}
                </span>
                <span className="text-sm font-semibold text-zinc-200 group-hover:text-white truncate block">
                  {soc.value}
                </span>
              </div>
            </motion.a>
          );
        })}
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-zinc-600 font-mono pt-8 border-t border-zinc-900/80 gap-4">
        <span>© {new Date().getFullYear()} ARYA. All rights reserved.</span>
        <span>Built with Next.js, Tailwind & Framer Motion</span>
      </div>

    </footer>
  );
}
