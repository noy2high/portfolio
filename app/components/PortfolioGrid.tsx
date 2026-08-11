"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ExternalLink, X, Film, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

// Complete project list sorted from newest (top) to oldest (bottom)
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
  {
    id: "project-2",
    platform: "TikTok",
    category: "TikTok Video",
    title: "@soonieofficial",
    date: "April 9, 2026",
    type: "tiktok",
    embedId: "7626476588481219861",
    directUrl: "https://www.tiktok.com/@soonieofficial/video/7626476588481219861",
    thumbnail: "/thumbnails/soonie4-9.jpg",
  },
  {
    id: "project-3",
    platform: "Instagram",
    category: "Instagram Reel",
    title: "@kroma.space",
    date: "April 11, 2026",
    type: "instagram",
    embedId: "DW-mnmAgUBK",
    directUrl: "https://www.instagram.com/p/DW-mnmAgUBK/",
    thumbnail: "/thumbnails/kroma.spaceapril11.jpg",
  },
  {
    id: "project-4",
    platform: "TikTok",
    category: "TikTok Video",
    title: "@soonieofficial",
    date: "April 2, 2026",
    type: "tiktok",
    embedId: "7624068088484482325",
    directUrl: "https://www.tiktok.com/@soonieofficial/video/7624068088484482325",
    thumbnail: "/thumbnails/soonie4-2.jpg",
  },
  {
    id: "project-5",
    platform: "TikTok",
    category: "TikTok Video",
    title: "@soonieofficial",
    date: "March 29, 2026",
    type: "tiktok",
    embedId: "7622660464337554708",
    directUrl: "https://www.tiktok.com/@soonieofficial/video/7622660464337554708",
    thumbnail: "/thumbnails/soonie3-29.jpg",
  },
  {
    id: "project-6",
    platform: "TikTok",
    category: "TikTok Video",
    title: "@soonieofficial",
    date: "March 27, 2026",
    type: "tiktok",
    embedId: "7621882844540898580",
    directUrl: "https://www.tiktok.com/@soonieofficial/video/7621882844540898580",
    thumbnail: "/thumbnails/soonie3-27.jpg",
  },
  {
    id: "project-7",
    platform: "Instagram",
    category: "Instagram Reel",
    title: "@kroma.space",
    date: "March 19, 2026",
    type: "instagram",
    embedId: "DWEVLH0AS5q",
    directUrl: "https://www.instagram.com/p/DWEVLH0AS5q/",
    thumbnail: "/thumbnails/kroma.spacemarch19.jpg",
  },
  {
    id: "project-8",
    platform: "TikTok",
    category: "TikTok Video",
    title: "@soonieofficial",
    date: "March 12, 2026",
    type: "tiktok",
    embedId: "7616248817565846804",
    directUrl: "https://www.tiktok.com/@soonieofficial/video/7616248817565846804",
    thumbnail: "/thumbnails/soonie3-12.jpg",
  },
  {
    id: "project-9",
    platform: "TikTok",
    category: "TikTok Video",
    title: "@soonieofficial",
    date: "March 10, 2026",
    type: "tiktok",
    embedId: "7615511555148483861",
    directUrl: "https://www.tiktok.com/@soonieofficial/video/7615511555148483861",
    thumbnail: "/thumbnails/soonie3-10.jpg",
  },
  {
    id: "project-10",
    platform: "TikTok",
    category: "TikTok Video",
    title: "@soonieofficial",
    date: "March 9, 2026",
    type: "tiktok",
    embedId: "7614978783451417877",
    directUrl: "https://www.tiktok.com/@soonieofficial/video/7614978783451417877",
    thumbnail: "/thumbnails/soonie3-9.jpg",
  },
  {
    id: "project-11",
    platform: "Instagram",
    category: "Instagram Reel",
    title: "@kroma.lab",
    date: "March 1, 2026",
    type: "instagram",
    embedId: "DVVfwmnEhLR",
    directUrl: "https://www.instagram.com/reel/DVVfwmnEhLR/",
    thumbnail: "/thumbnails/kroma.labmarch1.jpg",
  },
  {
    id: "project-12",
    platform: "TikTok",
    category: "TikTok Video",
    title: "@soonieofficial",
    date: "February 11, 2026",
    type: "tiktok",
    embedId: "7605583672237968661",
    directUrl: "https://www.tiktok.com/@soonieofficial/video/7605583672237968661",
    thumbnail: "/thumbnails/soonie2-11.jpg",
  },
  {
    id: "project-13",
    platform: "Instagram",
    category: "Instagram Reel",
    title: "@kroma.lab",
    date: "February 10, 2026",
    type: "instagram",
    embedId: "DUkQq28gWRp",
    directUrl: "https://www.instagram.com/reel/DUkQq28gWRp/",
    thumbnail: "/thumbnails/kroma.labfebruary10.jpg",
  },
  {
    id: "project-14",
    platform: "YouTube",
    category: "YouTube Short",
    title: "@iFerr.",
    date: "January 15, 2025",
    type: "youtube",
    embedId: "3HWT4bDch0A",
    directUrl: "https://www.youtube.com/shorts/3HWT4bDch0A",
    thumbnail: "/thumbnails/jan15.jpg",
  },
  {
    id: "project-15",
    platform: "YouTube",
    category: "YouTube Short",
    title: "@iFerr.",
    date: "December 26, 2024",
    type: "youtube",
    embedId: "0Yoe6YmzLiY",
    directUrl: "https://www.youtube.com/shorts/0Yoe6YmzLiY",
    thumbnail: "/thumbnails/dec26.jpg",
  },
  {
    id: "project-16",
    platform: "YouTube",
    category: "YouTube Short",
    title: "@iFerr.",
    date: "December 19, 2024",
    type: "youtube",
    embedId: "j8MvSdR-A1s",
    directUrl: "https://www.youtube.com/shorts/j8MvSdR-A1s",
    thumbnail: "/thumbnails/dec24.jpg",
  },
  {
    id: "project-17",
    platform: "YouTube",
    category: "YouTube Short",
    title: "@iFerr.",
    date: "December 5, 2024",
    type: "youtube",
    embedId: "YPqdxB_3K48",
    directUrl: "https://www.youtube.com/shorts/YPqdxB_3K48",
    thumbnail: "/thumbnails/dec5.jpg",
  },
  {
    id: "project-18",
    platform: "YouTube",
    category: "YouTube Short",
    title: "@iFerr.",
    date: "November 25, 2024",
    type: "youtube",
    embedId: "CD9NRNRPT0Y",
    directUrl: "https://www.youtube.com/shorts/CD9NRNRPT0Y",
    thumbnail: "/thumbnails/nov25.jpg",
  },
];

const ITEMS_PER_PAGE = 8; // 4-column compact layout

export default function PortfolioGrid() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(PROJECTS.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = PROJECTS.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const workElement = document.getElementById("work");
    if (workElement) {
      workElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="work" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto w-full z-10 relative scroll-mt-24">
      
      {/* Section Header */}
      <div className="mb-12 text-left flex justify-between items-end">
        <div>
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

        <span className="text-xs font-mono text-zinc-500 hidden sm:block">
          Showing {startIndex + 1}–{Math.min(startIndex + ITEMS_PER_PAGE, PROJECTS.length)} of {PROJECTS.length}
        </span>
      </div>

      {/* Grid List — Neat & Compact 4-Column Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-12">
        {currentProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -6 }}
            onClick={() => setSelectedProject(project)}
            className="group glass-card rounded-2xl flex flex-col justify-between min-h-[230px] cursor-pointer hover:border-purple-500/50 transition-all shadow-xl relative overflow-hidden p-5"
          >
            {/* Background Thumbnail */}
            {project.thumbnail && (
              <div className="absolute inset-0 z-0 bg-zinc-900">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-55 group-hover:scale-105 transition-all duration-500"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/20" />
              </div>
            )}

            {/* Top Bar */}
            <div className="flex justify-between items-center z-10 relative">
              <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-zinc-950/80 border border-zinc-800 text-[10px] text-zinc-300 font-medium backdrop-blur-md">
                <Film size={11} className="text-purple-400" />
                {project.platform}
              </span>

              <div className="w-7 h-7 rounded-full bg-zinc-950/80 border border-zinc-800 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:bg-purple-600 transition-all shadow-md backdrop-blur-md">
                <Play size={12} className="fill-current ml-0.5" />
              </div>
            </div>

            {/* Bottom Info */}
            <div className="mt-auto pt-6 z-10 relative text-left">
              <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider block mb-0.5">
                {project.category}
              </span>
              <h3 className="text-xl font-extrabold text-zinc-100 group-hover:text-white mb-0.5 tracking-tight truncate">
                {project.title}
              </h3>
              <p className="text-zinc-400 text-[11px] font-mono">
                {project.date}
              </p>
            </div>
          </motion.div>
        ))}

        {/* End-of-List Indicator Card (Renders on the last page) */}
        {currentPage === totalPages && (
          <div className="glass-card rounded-2xl flex flex-col items-center justify-center text-center p-5 min-h-[230px] border border-zinc-800/80 bg-zinc-900/30">
            <div className="w-9 h-9 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-2 shadow-lg">
              <Sparkles size={16} />
            </div>
            <h4 className="text-base font-bold text-zinc-200">... and many more</h4>
            <p className="text-[11px] text-zinc-500 font-mono mt-0.5">Additional client media archive</p>
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft size={18} />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`w-9 h-9 text-xs font-mono rounded-full border transition-all ${
                currentPage === page
                  ? "bg-zinc-100 text-zinc-950 border-white font-bold scale-105"
                  : "bg-zinc-900/80 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-white"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}

      {/* Video Embed Modal */}
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
                {selectedProject.type === "tiktok" ? (
                  <iframe
                    src={`https://www.tiktok.com/embed/v2/${selectedProject.embedId}`}
                    className="w-full h-full border-0"
                    allow="encrypted-media;"
                  />
                ) : selectedProject.type === "youtube" ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedProject.embedId}?autoplay=1`}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <iframe
                    src={`https://www.instagram.com/p/${selectedProject.embedId}/embed`}
                    className="w-full h-full border-0"
                    allowTransparency={true}
                  />
                )}
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
