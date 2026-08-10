"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Eye, ExternalLink, Film, Image as ImageIcon } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "Cyberpunk Visual Identity",
    category: "Graphic Design",
    type: "image",
    desc: "Posters, social media kits, and brand key visuals.",
    color: "from-purple-500/20 to-indigo-500/20",
    tags: ["Branding", "Photoshop", "Typography"],
  },
  {
    id: 2,
    title: "Cinematic Showreel 2026",
    category: "Video Editing",
    type: "video",
    desc: "Fast-paced montage featuring dynamic velocity cuts & sound design.",
    color: "from-pink-500/20 to-rose-500/20",
    tags: ["Premiere Pro", "Color Grading", "VFX"],
  },
  {
    id: 3,
    title: "Minimalist Product Poster Series",
    category: "Graphic Design",
    type: "image",
    desc: "3D rendered product visuals with high-contrast typography.",
    color: "from-blue-500/20 to-cyan-500/20",
    tags: ["3D Render", "Layout", "Poster"],
  },
  {
    id: 4,
    title: "Commercial Motion Promo",
    category: "Video Editing",
    type: "video",
    desc: "High-energy commercial advertisement with kinetic typography.",
    color: "from-amber-500/20 to-orange-500/20",
    tags: ["After Effects", "Motion Graphics"],
  },
];

const CATEGORIES = ["All", "Graphic Design", "Video Editing"];

export default function PortfolioGrid() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = PROJECTS.filter(
    (p) => activeTab === "All" || p.category === activeTab
  );

  return (
    <section id="work" className="py-24 px-8 md:px-16 max-w-7xl mx-auto z-10 relative">
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
            Featured Showcase
          </motion.h2>
        </div>

        <div className="flex gap-2 p-1.5 glass-card rounded-full w-fit">
          {CATEGORIES.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-5 py-2 rounded-full text-xs md:text-sm font-medium transition-colors ${
                activeTab === tab ? "text-zinc-950 font-bold" : "text-zinc-400 hover:text-white"
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTabGlow"
                  className="absolute inset-0 bg-white rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4 }}
              key={project.id}
              className="group glass-card p-8 flex flex-col justify-between min-h-[380px] hover:border-white/40 transition-colors"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div className="flex justify-between items-center z-10">
                <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950/80 border border-zinc-800 text-xs text-zinc-300 font-medium backdrop-blur-sm">
                  {project.type === "video" ? <Film size={14} className="text-pink-400" /> : <ImageIcon size={14} className="text-purple-400" />}
                  {project.category}
                </span>

                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 45 }}
                  className="w-10 h-10 rounded-full bg-zinc-950/80 border border-zinc-800 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:bg-zinc-800 transition-all cursor-pointer"
                >
                  <ExternalLink size={18} />
                </motion.div>
              </div>

              <div className="my-auto py-8 flex flex-col items-center justify-center z-10">
                <div className="w-16 h-16 rounded-2xl bg-zinc-950/80 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-purple-400 group-hover:scale-110 group-hover:border-purple-500/50 transition-all shadow-xl">
                  {project.type === "video" ? <Play size={28} className="fill-current ml-1" /> : <Eye size={28} />}
                </div>
                <span className="text-xs text-zinc-400 font-mono mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.type === "video" ? "PREVIEW VIDEO" : "VIEW FULL HD"}
                </span>
              </div>

              <div className="z-10">
                <h3 className="text-2xl font-bold text-zinc-100 group-hover:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-zinc-300 text-sm mb-4 font-light">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-zinc-950/60 text-zinc-300 border border-zinc-800">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
