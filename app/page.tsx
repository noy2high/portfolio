"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import PortfolioGrid from "./components/PortfolioGrid";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import GlitterWrap from "./components/GlitterWrap";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-zinc-950 text-zinc-100 overflow-hidden flex flex-col justify-between p-5 sm:p-8 md:p-16">
      
      {/* Animated Starfield Tunnel Background */}
      <GlitterWrap />

      {/* Dynamic Background Glow FX */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none z-0" />

      {/* Navigation Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-between items-center z-20 max-w-7xl mx-auto w-full relative"
      >
        <a href="#" className="text-xl font-bold tracking-tighter uppercase text-zinc-200">
          ARYA<span className="text-purple-500">.</span>
        </a>
        <nav className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-zinc-400 font-medium">
          <a href="#about-hero" className="hover:text-white transition-colors duration-200">About</a>
          <a href="#work" className="hover:text-white transition-colors duration-200">Work</a>
          <a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a>
        </nav>
      </motion.header>

      {/* Main Hero Content */}
      <div id="about-hero" className="my-auto pt-16 pb-12 z-10 max-w-5xl mx-auto w-full relative flex flex-col items-start text-left scroll-mt-24">

        {/* Introduction Tag */}
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-purple-400 font-mono text-xs sm:text-sm tracking-wider uppercase mb-3"
        >
          // Introduction
        </motion.span>

        {/* Refined Glassmorphism Header Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-badge px-6 sm:px-10 py-2.5 sm:py-3.5 mb-8 flex items-baseline gap-0.5 shadow-2xl select-none"
        >
          <span className="font-playfair font-black text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-none">
            Port
          </span>
          <span className="font-playfair italic font-normal text-3xl sm:text-5xl md:text-6xl text-zinc-200 leading-none">
            folio
          </span>
        </motion.div>

        {/* Custom About Text */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-3xl font-light leading-relaxed mb-10"
        >
          Resourceful, intuitive, and built for collaboration. I’m someone who naturally balances creative thinking with solid discipline. Rather than staying in a single lane, I bring a fast learning curve and strong execution to whatever initiative I tackle. From administrative work to hands-on projects, I focus on clear communication, dynamic teamwork, and delivering polished results.
        </motion.p>

        {/* Interactive Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap gap-3 sm:gap-4 items-center mb-16"
        >
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#work"
            className="flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 bg-zinc-100 text-zinc-950 font-semibold text-xs sm:text-sm rounded-full hover:bg-white transition-all shadow-lg shadow-white/5"
          >
            <span>Explore Showcase</span>
            <ArrowUpRight size={16} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 bg-zinc-900 text-zinc-200 border border-zinc-800 font-medium text-xs sm:text-sm rounded-full hover:bg-zinc-800 hover:border-zinc-700 transition-all"
          >
            <Play size={15} className="fill-zinc-200" />
            <span>Get In Touch</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Sections */}
      <PortfolioGrid />
      <Experience />
      <Footer />

    </main>
  );
}
