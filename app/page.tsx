"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Play, Sparkles, Film, Palette } from "lucide-react";
import PortfolioGrid from "./components/PortfolioGrid";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-zinc-950 text-zinc-100 overflow-hidden flex flex-col justify-between p-8 md:p-16">
      
      {/* Dynamic Background Glow FX */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Navigation Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-between items-center z-10 max-w-7xl mx-auto w-full"
      >
        <span className="text-xl font-bold tracking-tighter uppercase text-zinc-200">
          ARYA<span className="text-purple-500">.</span>
        </span>
        <nav className="flex gap-6 text-sm text-zinc-400 font-medium">
          <a href="#work" className="hover:text-white transition-colors duration-200">Work</a>
          <a href="#about" className="hover:text-white transition-colors duration-200">About</a>
          <a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a>
        </nav>
      </motion.header>

      {/* Main Hero Content */}
      <div className="my-auto py-20 z-10 max-w-5xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Available for Projects & Freelance</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-8xl font-extrabold tracking-tight leading-[1.05] mb-8"
        >
          Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-amber-400">visuals</span> & dynamic motion.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl font-light mb-12"
        >
          Specializing in high-impact graphic design, video editing, and motion visuals. Turning raw ideas into polished visual experiences.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap gap-4 items-center"
        >
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#work"
            className="flex items-center gap-2 px-6 py-3.5 bg-zinc-100 text-zinc-950 font-semibold rounded-full hover:bg-white transition-all shadow-lg shadow-white/5"
          >
            <span>Explore Showcase</span>
            <ArrowUpRight size={18} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="flex items-center gap-2 px-6 py-3.5 bg-zinc-900 text-zinc-200 border border-zinc-800 font-medium rounded-full hover:bg-zinc-800 hover:border-zinc-700 transition-all"
          >
            <Play size={16} className="fill-zinc-200" />
            <span>Get In Touch</span>
          </motion.a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-zinc-900 z-10 text-xs md:text-sm text-zinc-500 mb-20 max-w-5xl mx-auto w-full"
      >
        <div className="flex items-center gap-2">
          <Palette size={16} className="text-purple-400" />
          <span>Graphic Design & Branding</span>
        </div>
        <div className="flex items-center gap-2">
          <Film size={16} className="text-pink-400" />
          <span>Video Editing & Motion</span>
        </div>
        <div className="flex items-center gap-2 col-span-2 md:col-span-1">
          <Sparkles size={16} className="text-amber-400" />
          <span>High-FPS Interaction</span>
        </div>
      </motion.div>

      {/* Sections */}
      <PortfolioGrid />
      <Experience />
      <Footer />

    </main>
  );
}
