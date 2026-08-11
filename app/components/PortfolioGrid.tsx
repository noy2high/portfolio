"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ExternalLink, X, Film } from "lucide-react";
import Image from "next/image";

const PROJECTS = [
  {
    id: "project-1",
    title: "Client Visual Showcase",
    client: "Instagram Reel Content",
    type: "instagram",
    embedId: "DYCd6LHyXtT",
    directUrl: "https://www.instagram.com/reel/DYCd6LHyXtT/",
    thumbnail: "https://i.snapcdn.app/photo?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJodHRwczovL3Njb250ZW50LmNkbmluc3RhZ3JhbS5jb20vdi90NTEuODI3ODctMTUvNjg1MzgwMzU4XzE4MTEyMTYxNDcyODc2NjI1XzI2ODM1NTI0NTA3NzUxMjU1Nl9uLmpwZz9zdHA9ZHN0LWpwZ19lMTVfdHQ2Jl9uY19jYXQ9MTAxJmlnX2NhY2hlX2tleT1Nemc1TVRnd05EVTJPVEF5TVRnd056UTBNekU0TVRFeU1UWXhORFk1T0RjMk5qSTEuMy1jY2I3LTUmY2NiPTctNSZfbmNfc2lkPTU4Y2RhZCZlZmc9ZXlKMlpXNWpiMlJsWDNSaFp5STZJa05NU1ZCVExuaHdhV1J6TGpFd09EQXVjMlJ5TG5acFpHVnZYMlJsWm1GMWJIUmZZMjkyWlhKZlpuSmhiV1V1UXpNaWZRJTNEJTNEJl9uY19vaGM9TjZ2ZnlSeC04Rk1RN2tOdndFOUtRSE8mX25jX29jPUFkcTk3alhlQ0F3U05HRTNWem5XanJBYVVySEItT0IyLUxIcEFPbG1va01QUHdfMlJNbE1SZThudXhoQXF0aGNJWTQmX25jX2FkPXotbSZfbmNfY2lkPTAmX25jX3p0PTIzJl9uY19odD1zY29udGVudC1sZ2EzLTIuY2RuaW5zdGFncmFtLmNvbSZfbmNfZ2lkPWVhUGItLTh5TEVfLU91UFoxMEVraEEmX25jX3NzPTdhMjJlJm9oPTAwX0FRRndsdkp2aHAzbDc3MmZfQnY0Zk4xbXJWWk5odU04R2lya2hjNk5LNHFkR3cmb2U9NkE4MENENjciLCJmaWxlbmFtZSI6IlRodW1ibmFpbF82ODUzODAzNThfMTgxMTIxNjE0NzI4NzY2MjVfMjY4MzU1MjQ1MDc3NTEyNTU2X24uanBnIiwibmJmIjoxNzg2NDQ0NDQyLCJleHAiOjE3ODY0NDgwNDIsImlhdCI6MTc4NjQ0NDQ0Mn0.zgQSYbAvkOKeA9GM36Zp8DDyPKJzyapTnxKToNTWX5g",
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
            className="group glass-card rounded-3xl flex flex-col justify-between min-h-[360px] cursor-pointer hover:border-purple-500/50 transition-all shadow-xl relative overflow-hidden p-8"
          >
            {/* Background Thumbnail Image */}
            {project.thumbnail && (
              <div className="absolute inset-0 z-0">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-55 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/20" />
              </div>
            )}

            <div className="flex justify-between items-center z-10 relative">
              <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950/80 border border-zinc-800 text-xs text-zinc-300 font-medium backdrop-blur-md">
                <Film size={14} className="text-purple-400" />
                Instagram Reel
              </span>

              <div className="w-10 h-10 rounded-full bg-zinc-950/80 border border-zinc-800 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:bg-purple-600 transition-all shadow-lg backdrop-blur-md">
                <Play size={18} className="fill-current ml-0.5" />
              </div>
            </div>

            <div className="my-auto py-8 z-10 relative">
              <span className="text-xs font-mono text-purple-400 uppercase tracking-wider block mb-1">
                {project.client}
              </span>
              <h3 className="text-2xl font-bold text-zinc-100 group-hover:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-zinc-300 text-sm font-light leading-relaxed line-clamp-2">
                {project.desc}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 z-10 relative">
              {project.tags.map((tag) => (
                <span key={tag} className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-zinc-950/80 text-zinc-300 border border-zinc-800/80 backdrop-blur-md">
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
              className="glass-card rounded-3xl p-6 sm:p-8 max-w-lg w-full z-10 relative flex flex-col items-center shadow-2xl border border-zinc-700/80 max-h-[90vh] overflow-y-auto"
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
              <div className="w-full aspect-[9/16] max-h-[480px] rounded-2xl overflow-hidden bg-zinc-900/90 border border-zinc-800 flex items-center justify-center relative mb-6">
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
