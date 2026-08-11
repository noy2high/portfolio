"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Creative Team – Intern",
    company: "Delfin Agency",
    period: "Feb 2026 – May 2026",
    bullets: [
      "Helped develop social media strategies through client and cross-functional brainstorming sessions.",
      "Executed end-to-end content production, managing copy, video shooting, and final delivery under tight deadlines.",
      "Ensured high-quality outputs by keeping everything strictly aligned with client expectations.",
    ],
  },
  {
    role: "Content & Digital Media Specialist",
    company: "Freelance",
    period: "2024",
    bullets: [
      "Crafted custom digital visual packages, including channel assets and promotional graphics for online content creators.",
      "Produced high-engagement short-form media for TikTok and YouTube.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="about" className="py-16 sm:py-24 px-3 sm:px-12 max-w-7xl mx-auto w-full z-10 relative scroll-mt-24">
      
      {/* Header */}
      <div className="mb-8 sm:mb-16 text-left">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-purple-400 font-mono text-[10px] sm:text-sm tracking-wider uppercase block mb-1 sm:mb-2"
        >
          // Background
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-6xl font-extrabold tracking-tight text-zinc-100"
        >
          Past Experience
        </motion.h2>
      </div>

      {/* Timeline List — Split Two-Column Layout Retained Across Screen Sizes */}
      <div className="space-y-6 sm:space-y-12 relative before:absolute before:inset-0 before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-purple-500/50 before:via-zinc-800 before:to-transparent">
        {EXPERIENCES.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative flex flex-row items-start group"
          >
            {/* Center Node */}
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-zinc-950 border-2 border-purple-500 group-hover:bg-purple-500 transition-colors z-10 flex items-center justify-center">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white" />
            </div>

            {/* Card Positioned Left or Right */}
            <div className={`w-1/2 ${index % 2 === 0 ? "pr-3 sm:pr-12 text-right" : "pl-3 sm:pl-12 ml-auto text-left"}`}>
              <div className="p-3 sm:p-6 glass-card rounded-xl sm:rounded-2xl hover:border-zinc-700 transition-colors">
                <div className={`flex items-center gap-1 sm:gap-2 text-[9px] sm:text-xs font-mono text-purple-400 mb-1 sm:mb-2 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                  <Calendar size={11} className="sm:w-3.5 sm:h-3.5" />
                  <span>{exp.period}</span>
                </div>

                <h3 className="text-xs sm:text-xl font-bold text-zinc-100">{exp.role}</h3>
                <h4 className={`text-[10px] sm:text-sm text-zinc-400 font-medium mb-2 sm:mb-4 flex items-center gap-1 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                  <Briefcase size={11} className="text-zinc-500 sm:w-3.5 sm:h-3.5" />
                  <span>{exp.company}</span>
                </h4>

                <ul className="space-y-1 sm:space-y-2 text-[9px] sm:text-sm text-zinc-400 font-light text-left">
                  {exp.bullets.map((item, idx) => (
                    <li key={idx} className="flex gap-1 sm:gap-2 items-start">
                      <span className="text-purple-400 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
