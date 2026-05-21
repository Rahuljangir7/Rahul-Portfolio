"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, Database, Palette, Zap, Download } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";

const Background3D = dynamic(() => import("@/components/Background3D"), {
  ssr: false,
  loading: () => null,
});

import Process from "@/components/Process";
import BentoSkills from "@/components/BentoSkills";
import SkillLogos3D from "@/components/SkillLogos3D";
import Hero from "@/components/Hero";


const Home = () => {
  const features = [
    {
      icon: <Code2 size={32} />,
      title: "Full Stack Development",
      description: "Building scalable applications with modern technologies",
    },
    {
      icon: <Database size={32} />,
      title: "Database Design",
      description: "Designing efficient and scalable database architectures",
    },
    {
      icon: <Palette size={32} />,
      title: "3D Web Experiences",
      description: "Creating immersive 3D experiences with Three.js",
    },
    {
      icon: <Zap size={32} />,
      title: "Performance Optimization",
      description: "Optimizing applications for maximum performance",
    },
  ];

  return (
    <>
      <Background3D />

      <Hero />

      <div className="relative min-h-screen pb-12 overflow-hidden">
        <div className="container mx-auto px-6">
          {/* 3D Infinite Skill Logos Marquee */}
          <SkillLogos3D />

          {/* Process Section */}
            <Process />

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 md:mt-20"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="glass p-8 rounded-2xl text-center relative group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="text-primary-400 mb-6 flex justify-center transform group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Bento Skills Section */}
            <BentoSkills />



            {/* Final CTA Section */}
            <section className="pt-[10px] pb-[5px] md:py-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass px-6 py-10 md:p-16 rounded-[2rem] md:rounded-[3rem] text-center relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 md:mb-8 leading-tight">
                  Ready to Build Your <br />
                  <span className="gradient-text">Next Masterpiece?</span>
                </h2>
                <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
                  Whether you have a fully-formed idea or just a spark of inspiration, 
                  let&apos;s collaborate to bring it to life in 3D.
                </p>
                <Link
                  href="/contact"
                  className="btn-primary px-12 py-5 text-xl relative z-10"
                >
                  Let&apos;s Connect
                </Link>
              </motion.div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
