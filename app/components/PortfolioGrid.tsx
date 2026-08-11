"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ExternalLink, X, Film } from "lucide-react";

// Add new projects to this list.
// Rule: Place newer projects at the top of this array, or let the array keep chronological order.
const PROJECTS = [
  {
    id: "project-1",
    platform: "Instagram",
    category: "Instagram Reel",
    title: "@kroma.lab",
    date: "May 7, 2026",
    type: "instagram",
    embedId: "DYCd6LHyXtT",
    directUrl: "https://www.instagram.com/reel/DYCd6LHyXtT/",
    thumbnail: "/thumbnails/kroma7may.jpg",
  },
];

export default function PortfolioGrid() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  return (
    <section id="work" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto w-full z-10 relative scroll-mt-24">
      
      {/* Section Header */}
      <div className="mb-12 text-left">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-purple-400 font-mono text-xs sm:text-sm tracking-wider uppercase block mb-2"
        >
          // Selected Works
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-100"
        >
          Featured Projects
        </motion.h2>
      </div>

      {/* Grid List — Displays newest projects first */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            onClick={() => setSelectedProject(project)}
            className="group glass-card rounded-3xl flex flex-col justify-between min-h-[340px] cursor-pointer hover:border-purple-500/50 transition-all shadow-xl relative overflow-hidden p-8"
          >
            {/* Local Image Background */}
            {project.thumbnail && (
              <div className="absolute inset-0 z-0 bg-zinc-900">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-55 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/20" />
              </div>
            )}

            {/* Top Bar: Platform Tag & Play Button */}
            <div className="flex justify-between items-center z-10 relative">
              <span className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-950/80 border border-zinc-800 text-xs text-zinc-300 font-medium backdrop-blur-md">
                <Film size={14} className="text-purple-400" />
                {project.platform}
              </span>

              <div className="w-10 h-10 rounded-full bg-zinc-950/80 border border-zinc-800 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:bg-purple-600 transition-all shadow-lg backdrop-blur-md">
                <Play size={18} className="fill-current ml-0.5" />
              </div>
            </div>

            {/* Bottom-Aligned Main Info */}
            <div className="mt-auto pt-12 z-10 relative text-left">
              <span className="text-xs font-mono text-purple-400 uppercase tracking-wider block mb-1">
                {project.category}
              </span>
              <h3 className="text-3xl font-extrabold text-zinc-100 group-hover:text-white mb-1 tracking-tight">
                {project.title}
              </h3>
              <p className="text-zinc-400 text-sm font-mono">
                {project.date}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Compact Video Embed Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-zinc-950/85 backdrop-blur-md"
            />

            {/* Compact Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              className="glass-card rounded-3xl p-5 sm:p-6 max-w-sm w-full z-10 relative flex flex-col items-center shadow-2xl border border-zinc-700/80 max-h-[85vh] overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white transition-colors z-20"
              >
                <X size={16} />
              </button>

              <h3 className="text-xl font-extrabold text-zinc-100 mb-0.5 text-center pr-6">
                {selectedProject.title}
              </h3>
              <span className="text-[11px] font-mono text-purple-400 mb-4 block text-center">
                {selectedProject.category} • {selectedProject.date}
              </span>

              {/* Compact Embed Frame */}
              <div className="w-full aspect-[9/16] max-h-[380px] rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 flex items-center justify-center relative mb-4">
                <iframe
                  src={`https://www.instagram.com/p/${selectedProject.embedId}/embed`}
                  className="w-full h-full border-0"
                  allowTransparency={true}
                />
              </div>

              {/* External Button */}
              <a
                href={selectedProject.directUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-zinc-100 text-zinc-950 font-semibold text-xs rounded-full hover:bg-white transition-all shadow-md"
              >
                <span>Open Original Post</span>
                <ExternalLink size={13} />
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
