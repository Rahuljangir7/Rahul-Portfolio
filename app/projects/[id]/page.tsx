"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Tag } from "lucide-react";
import Image from "next/image";

import { ALL_PROJECTS } from "@/lib/data/projects";

const ProjectDetail = () => {
  const params = useParams();
  const router = useRouter();
  
  // Find project synchronously
  const project = ALL_PROJECTS.find(p => p._id === params.id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center relative">
        <div className="text-center z-10">
          <h2 className="text-3xl font-semibold mb-6">Project not found</h2>
          <button
            onClick={() => router.push("/projects")}
            className="btn-primary"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.back()}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Replaced placeholder with actual image */}
          <div className="aspect-video relative bg-slate-900 rounded-[2rem] mb-12 flex items-center justify-center overflow-hidden border border-white/10 shadow-2xl group">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover object-top transition-all duration-[10s] ease-in-out group-hover:object-bottom"
              priority
            />
          </div>

          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-4 mb-8 text-sm text-slate-400">
            {project.category && (
              <div className="flex items-center gap-2 px-4 py-2 glass rounded-full">
                <Tag size={16} className="text-primary-400" />
                <span className="capitalize">{project.category}</span>
              </div>
            )}
          </div>

          <p className="text-xl text-slate-300 mb-12 leading-relaxed font-light">
            {project.description}
          </p>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies?.map((tech: string, index: number) => (
                <span
                  key={index}
                  className="px-6 py-3 glass rounded-xl text-slate-300 border border-white/5 hover:border-primary-500/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-6 pt-4 border-t border-white/10">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2 px-8 py-4 text-lg"
              >
                <ExternalLink size={20} />
                Visit Live Site
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
