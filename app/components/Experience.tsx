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
    <section id="about" className="py-24 px-8 md:px-16 max-w-5xl mx-auto z-10 relative">
      
      {/* Header */}
      <div className="mb-16">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-purple-400 font-mono text-sm tracking-wider uppercase"
        >
          // Background
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight mt-2 text-zinc-100"
        >
          Past Experience
        </motion.h2>
      </div>

      {/* Timeline List */}
      <div className="space-y-12 relative before:absolute before:inset-0 before:left-3 md:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-purple-500/50 before:via-zinc-800 before:to-transparent">
        {EXPERIENCES.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative flex flex-col md:flex-row items-start group"
          >
            {/* Center Timeline Node */}
            <div className="absolute left-3 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-zinc-950 border-2 border-purple-500 group-hover:bg-purple-500 transition-colors z-10 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>

            {/* Experience Card */}
            <div className={`ml-10 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"}`}>
              <div className="p-6 bg-zinc-900/60 border border-zinc-800/80 rounded-2xl hover:border-zinc-700 transition-colors">
                <div className={`flex items-center gap-2 text-xs font-mono text-purple-400 mb-2 ${index % 2 === 0 ? "md:justify-end" : "justify-start"}`}>
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                </div>

                <h3 className="text-xl font-bold text-zinc-100">{exp.role}</h3>
                <h4 className="text-sm text-zinc-400 font-medium mb-4 flex items-center gap-1.5 justify-start md:group-odd:justify-end">
                  <Briefcase size={14} className="text-zinc-500" />
                  <span>{exp.company}</span>
                </h4>

                <ul className="space-y-2 text-sm text-zinc-400 font-light text-left">
                  {exp.bullets.map((item, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
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
