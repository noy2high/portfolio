"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ExternalLink, X, Film } from "lucide-react";

const PROJECTS = [
  {
    id: "project-1",
    title: "Client Visual Showcase",
    client: "Instagram Reel Content",
    type: "instagram",
    embedId: "DYCd6LHyXtT",
    directUrl: "https://www.instagram.com/reel/DYCd6LHyXtT/",
    tags: ["Instagram Reels", "Video Editing", "Motion"],
    desc: "Short-form client visual content crafted for social engagement and high-impact motion aesthetics.",
  },
];

export default function PortfolioGrid() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  return (
    <section id="work" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto w-full z-10 relative scroll-mt-24">
      
      {/* Header */}
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

      {/* Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            onClick={() => setSelectedProject(project)}
            className="group glass-card p-8 rounded-3xl flex flex-col justify-between min-h-[320px] cursor-pointer hover:border-purple-500/50 transition-all shadow-xl relative overflow-hidden"
          >
            <div className="flex justify-between items-center z-10">
              <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950/80 border border-zinc-800 text-xs text-zinc-300 font-medium backdrop-blur-sm">
                <Film size={14} className="text-purple-400" />
                Instagram Reel
              </span>

              <div className="w-10 h-10 rounded-full bg-zinc-950/80 border border-zinc-800 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:bg-purple-600 transition-all">
                <Play size={18} className="fill-current ml-0.5" />
              </div>
            </div>

            <div className="my-auto py-8 z-10">
              <span className="text-xs font-mono text-purple-400 uppercase tracking-wider block mb-1">
                {project.client}
              </span>
              <h3 className="text-2xl font-bold text-zinc-100 group-hover:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed line-clamp-2">
                {project.desc}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 z-10">
              {project.tags.map((tag) => (
                <span key={tag} className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-zinc-950/60 text-zinc-300 border border-zinc-800">
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Video Embed Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glass-card rounded-3xl p-6 sm:p-8 max-w-lg w-full z-10 relative flex flex-col items-center shadow-2xl border border-zinc-700/80"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white transition-colors z-20"
              >
                <X size={20} />
              </button>

              <h3 className="text-xl font-bold text-zinc-100 mb-1 text-center pr-8">
                {selectedProject.title}
              </h3>
              <span className="text-xs font-mono text-purple-400 mb-6 block text-center">
                {selectedProject.client}
              </span>

              {/* Embed Iframe Container */}
              <div className="w-full aspect-[9/16] max-h-[500px] rounded-2xl overflow-hidden bg-zinc-900/90 border border-zinc-800 flex items-center justify-center relative mb-6">
                <iframe
                  src={`https://www.instagram.com/p/${selectedProject.embedId}/embed`}
                  className="w-full h-full border-0"
                  allowTransparency={true}
                />
              </div>

              {/* External Link */}
              <a
                href={selectedProject.directUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-zinc-100 text-zinc-950 font-semibold text-xs rounded-full hover:bg-white transition-all"
              >
                <span>Open Original Reel</span>
                <ExternalLink size={14} />
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
