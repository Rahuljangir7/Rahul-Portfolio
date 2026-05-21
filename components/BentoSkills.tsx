"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, Layout, Layers, Shield, Zap } from "lucide-react";

const BentoSkills = () => {
  const skills = [
    {
      title: "Frontend Mastery",
      description: "Expertise in React, Next.js, and Three.js for immersive UIs.",
      icon: <Layout className="w-8 h-8" />,
      size: "md:col-span-2 md:row-span-2",
      color: "bg-blue-500/10 text-blue-400"
    },
    {
      title: "Backend Core",
      description: "Node.js & Python systems.",
      icon: <Cpu className="w-6 h-6" />,
      size: "md:col-span-1 md:row-span-1",
      color: "bg-purple-500/10 text-purple-400"
    },
    {
      title: "Global Reach",
      description: "Scalable cloud infrastructures.",
      icon: <Globe className="w-6 h-6" />,
      size: "md:col-span-1 md:row-span-1",
      color: "bg-emerald-500/10 text-emerald-400"
    },
    {
      title: "Full Stack Depth",
      description: "Bridging frontend and backend seamlessly with optimized architectures.",
      icon: <Layers className="w-8 h-8" />,
      size: "md:col-span-2 md:row-span-1",
      color: "bg-orange-500/10 text-orange-400"
    },
    {
      title: "High Octane",
      description: "Blazing fast performance.",
      icon: <Zap className="w-6 h-6" />,
      size: "md:col-span-1 md:row-span-1",
      color: "bg-yellow-500/10 text-yellow-400"
    },
    {
      title: "Secure by Design",
      description: "Robust data protection.",
      icon: <Shield className="w-6 h-6" />,
      size: "md:col-span-1 md:row-span-1",
      color: "bg-rose-500/10 text-rose-400"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-brand-darker/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Technical <span className="gradient-text">DNA</span>
          </h2>
          <p className="text-slate-400">My core technical pillars and specialized expertise.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`${skill.size} glass p-8 rounded-[2rem] flex flex-col justify-between group overflow-hidden relative`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-current opacity-[0.03] blur-3xl -mr-16 -mt-16 group-hover:opacity-[0.08] transition-opacity ${skill.color.split(' ')[1]}`} />
              
              <div className={`p-4 rounded-2xl w-fit mb-6 ${skill.color}`}>
                {skill.icon}
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-3">{skill.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{skill.description}</p>
              </div>
              
              <div className="mt-8 flex items-center gap-2 text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-50 transition-opacity">
                <span>View Details</span>
                <Zap size={12} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoSkills;
