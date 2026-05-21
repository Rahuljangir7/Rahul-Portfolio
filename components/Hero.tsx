"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Code2, Database, Sparkles } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative min-h-[100vh] flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden">
      {/* Ultra-subtle background gradients for premium feel */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-500/5 rounded-full blur-[150px] -z-10" />

      <div className="container mx-auto max-w-7xl relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
          
          {/* Left Content - Pure Typography & Whitespace */}
          <div className="flex-1 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Premium Status Indicator */}
              <div className="flex items-center gap-4 mb-10">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                </div>
                <span className="uppercase tracking-[0.3em] text-xs font-semibold text-slate-400">
                  Available for opportunities
                </span>
              </div>

              {/* Massive, Highly-Controlled Headline */}
              <h1 className="text-2xl md:text-5xl lg:text-[3.5rem] font-display font-medium tracking-tight leading-[1.05] mb-8">
                <span className="text-white block">Crafting </span>
                <span className="text-slate-500 font-light italic block my-2">Exceptional</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-white to-slate-400 block">
                  Digital Experiences.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-400 max-w-xl font-light leading-relaxed mb-14">
                I&apos;m <span className="text-white font-medium">Rahul Jangir</span>. A Full Stack Architect specializing in robust backends and immersive 3D interfaces that define the next generation of the web.
              </p>

              {/* Minimalist Premium CTAs */}
              <div className="flex flex-wrap items-center gap-8 md:gap-12">
                <Link
                  href="/projects"
                  className="group relative flex items-center gap-2 text-white uppercase tracking-[0.2em] text-xs font-bold pb-2"
                >
                  <span>Explore Work</span>
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  {/* Underline Animation */}
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20"></span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary-500 group-hover:w-full transition-all duration-500 ease-out"></span>
                </Link>

                <Link
                  href="/contact"
                  className="group relative flex items-center gap-2 text-slate-400 hover:text-white uppercase tracking-[0.2em] text-xs font-bold pb-2 transition-colors duration-300"
                >
                  <span>Let&apos;s Talk</span>
                  {/* Underline Animation */}
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-transparent"></span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500 ease-out"></span>
                </Link>

                <a
                  href="/documents/Rahul_Jangir_Resume.pdf"
                  download
                  className="group relative flex items-center gap-2 text-slate-400 hover:text-white uppercase tracking-[0.2em] text-xs font-bold pb-2 transition-colors duration-300"
                >
                  <span>Resume</span>
                  {/* Underline Animation */}
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-transparent"></span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500 ease-out"></span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Pure, Clean Image */}
          <div className="flex-1 flex justify-center lg:justify-end items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative"
            >
              {/* Very subtle glow behind the image */}
              <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-[80px] -z-10 mix-blend-screen" />
              
              <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]">
                
                {/* Image Container with Glow/Border */}
                <div className="absolute inset-0 rounded-full overflow-hidden border border-white/20 shadow-[0_0_50px_rgba(14,165,233,0.15)] group-hover:border-primary-500/50 transition-colors duration-700 p-2 bg-white/5 backdrop-blur-sm">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    {/* A dark overlay gradient to blend the image perfectly with the dark theme */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10 mix-blend-multiply" />
                    <Image
                      src="/rahul.png"
                      alt="Rahul Jangir"
                      fill
                      className="object-cover object-center filter grayscale-[20%] contrast-110"
                      priority
                    />
                  </div>
                </div>

                {/* Floating "Active Now" Badge */}
                <motion.div 
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-4 -left-4 md:bottom-10 md:-left-8 glass rounded-full px-4 py-2 flex items-center gap-2 border border-white/10 shadow-xl z-20 backdrop-blur-md"
                >
                  <div className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </div>
                  <span className="text-xs font-semibold tracking-wider text-slate-200">ACTIVE NOW</span>
                </motion.div>

                {/* Floating Icons */}
                <motion.div 
                  animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-10 -right-4 md:top-16 md:-right-6 w-12 h-12 md:w-16 md:h-16 glass rounded-2xl flex items-center justify-center text-primary-400 border border-white/10 shadow-lg z-20"
                >
                  <Code2 size={24} className="md:w-8 md:h-8" />
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-20 -right-2 md:bottom-28 md:-right-4 w-10 h-10 md:w-14 md:h-14 glass rounded-full flex items-center justify-center text-accent-400 border border-white/10 shadow-lg z-20"
                >
                  <Database size={20} className="md:w-6 md:h-6" />
                </motion.div>
                
                {/* Sparkle Decorative */}
                <div className="absolute top-4 left-10 md:top-8 md:left-16 text-gold-400 animate-pulse z-20">
                  <Sparkles size={24} />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
