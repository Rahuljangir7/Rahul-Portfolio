"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github, Code } from "lucide-react";
import { ALL_PROJECTS } from "@/lib/data/projects";

// --- Typewriter Effect Components ---
const typewriterContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.03 },
  },
};

const typewriterLetter = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const TypewriterTitle = ({ text, className }: { text: string; className?: string }) => {
  return (
    <motion.h3
      variants={typewriterContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={typewriterLetter} className="inline-block">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h3>
  );
};

const typewriterWordContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const TypewriterDesc = ({ text, className }: { text: string; className?: string }) => {
  const words = text.split(" ");
  return (
    <motion.p
      variants={typewriterWordContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span key={index} variants={typewriterLetter} className="inline-block mr-[0.25em]">
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

// --- New Text-Only Project Card ---
const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, type: "spring", bounce: 0.3 }}
      className="glass rounded-3xl p-8 md:p-10 flex flex-col h-full border border-white/5 hover:border-primary-500/30 transition-all duration-500 relative group overflow-hidden"
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Header / Featured Tag */}
      <div className="flex justify-between items-start mb-6 relative z-10">
        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-400 group-hover:scale-110 transition-transform">
          <Code size={24} />
        </div>
        {project.featured && (
          <div className="bg-primary-500/10 border border-primary-500/30 text-primary-300 text-xs px-3 py-1 rounded-full backdrop-blur-md font-bold tracking-wider shadow-lg">
            FEATURED
          </div>
        )}
      </div>

      <div className="flex-1 relative z-10 flex flex-col">
        <TypewriterTitle 
          text={project.title} 
          className="text-2xl md:text-3xl font-display font-bold mb-4 group-hover:text-primary-400 transition-colors duration-300"
        />
        
        <TypewriterDesc 
          text={project.description || project.shortDescription}
          className="text-slate-400 text-sm md:text-base leading-relaxed mb-8 flex-1"
        />

        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
          {project.technologies?.map((tech: string, i: number) => (
            <span
              key={i}
              className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-4 pt-6 border-t border-white/10">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 btn-primary text-sm px-4 py-3 flex items-center justify-center gap-2 group/btn"
              aria-label="Live Demo"
            >
              <span>View Live</span>
              <ExternalLink size={16} className="group-hover/btn:scale-110 transition-transform" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 glass text-sm px-4 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 hover:text-primary-400 transition-colors border border-white/10 group/git"
              aria-label="GitHub"
            >
              <span>Source</span>
              <Github size={16} className="group-hover/git:scale-110 transition-transform" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = ALL_PROJECTS;

  return (
    <>
      <div className="min-h-screen py-12 px-6 relative">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-[120px] -z-10" />

        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 pt-10"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              My <span className="gradient-text">Masterpieces</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
              A collection of high-performance web applications and immersive digital experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project._id} project={project} index={index} />
            ))}
          </div>

          {projects.length === 0 && (
            <div className="text-center text-slate-400 py-12">
              No projects found.
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
