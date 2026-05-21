"use client";

import { motion } from "framer-motion";
import { Code2, Database, Globe, Zap, Award, Users } from "lucide-react";
import dynamic from "next/dynamic";

const Background3D = dynamic(() => import("@/components/Background3D"), {
  ssr: false,
  loading: () => null,
});

import Stats from "@/components/Stats";
import Interests from "@/components/Interests";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Link from "next/link";

const About = () => {
  const skills = {
    frontend: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Material-UI", level: 85 },
      { name: "HTML & CSS", level: 95 },
    ],
    backend: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 92 },
      { name: "PHP", level: 80 },
      { name: "Laravel", level: 80 },
    ],
    database: [
      { name: "MongoDB", level: 90 },
      { name: "MySQL", level: 88 },
      { name: "REST APIs", level: 95 },
    ],
    tools: [
      { name: "SEO (Search Engine Opt.)", level: 95 },
      { name: "Git & GitHub", level: 90 },
      { name: "Postman", level: 95 },
      { name: "JWT Auth", level: 90 },
      { name: "AWS & Vercel", level: 85 },
      { name: "CloudPanel", level: 80 },
    ],
  };

  const highlights = [
    {
      icon: <Code2 size={32} />,
      title: "2+ Years Experience",
      description: "Full Stack Architecture & Development",
    },
    {
      icon: <Database size={32} />,
      title: "MERN Stack Expert",
      description: "MongoDB, Express, React, Node",
    },
    {
      icon: <Globe size={32} />,
      title: "E-Commerce Solutions",
      description: "Building scalable platforms",
    },
    {
      icon: <Zap size={32} />,
      title: "SEO Optimized",
      description: "High rankings and performance",
    },
  ];

  return (
    <>
      {/* Background is cleanly removed for better 3D visibility */}
      <div className="relative min-h-screen pt-32 pb-16 px-6 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-[120px] -z-10" />

        <div className="container mx-auto max-w-6xl">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block mb-4 px-4 py-1 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-400 text-sm font-medium backdrop-blur-sm"
            >
              The Developer Behind the Code
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              About <span className="gradient-text">Rahul Jangir</span>
            </h1>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
              Full-Stack Web Developer | MERN, Next.js, PHP, Laravel | Ecommerce, LMS & Enterprise Solutions Expert
            </p>
          </motion.div>

          {/* Stats Section */}
          {/* Stats is left generic or can be removed if not needed, but it adds good UI */}
          <Stats />

          {/* Bio & Interactive Highlights */}
          <div className="grid lg:grid-cols-12 gap-12 items-start mb-32 mt-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="glass p-10 rounded-3xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-1 bg-primary-500 rounded-full" />
                  My Journey
                </h2>
                <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                  <p>
                    Hi, I&apos;m a Full Stack Web Developer based in Jaipur, Rajasthan. I enjoy building things that
                    work smoothly and look good. I work mostly with the MERN Stack (MongoDB, Express.js, React.js, Node.js) and have real experience
                    handling both frontend and backend development.
                  </p>
                  <p>
                    Over time, I&apos;ve worked on several practical projects — like admin
                    dashboards, login systems, dynamic forms, and REST APIs. I like
                    solving problems, writing clean code, and making sure the user has
                    a good experience.
                  </p>
                  <p>
                    I&apos;ve worked both in teams and alone, and I always try to learn
                    something new while making things better and more efficient. I
                    believe in writing code that&apos;s easy to read and reuse, and I enjoy
                    learning from real work, not just tutorials.
                  </p>
                  <p>
                    Right now, I&apos;m focused on improving my backend skills and
                    understanding system design better. I&apos;m open to opportunities where I can keep growing — full-time roles,
                    internships, or freelance work. Let&apos;s connect and build something meaningful together.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 grid grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass p-6 rounded-2xl text-center flex flex-col items-center justify-center border border-white/5 hover:border-primary-500/30 transition-all"
                >
                  <div className="text-primary-400 mb-4 p-3 bg-primary-500/10 rounded-xl">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-xs uppercase tracking-widest font-medium">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Professional Journey / Experience Section */}
          <div className="mb-32">
            <Experience />
          </div>

          {/* Enhanced Skills Section */}
          <div className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-display font-bold mb-4">
                Mastered <span className="gradient-text">Technologies</span>
              </h2>
              <p className="text-slate-400">The arsenal I use to bring ideas to life.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, skillList], catIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.1 }}
                  className="glass p-8 rounded-3xl group hover:border-primary-500/20 transition-all"
                >
                  <h3 className="text-2xl font-bold mb-8 capitalize flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary-500" />
                    {category}
                  </h3>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                    {skillList.map((skill: any, index: number) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-end">
                          <span className="text-slate-300 font-medium">{skill.name}</span>
                          <span className="text-slate-500 text-xs">{skill.level}%</span>
                        </div>
                        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.05 }}
                            className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full shadow-[0_0_10px_rgba(14,165,233,0.3)]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications and Resume Section */}
          <Certifications />

          {/* Interests Section */}
          <Interests />

          {/* Values / DNA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 pt-20 border-t border-white/5"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 glass rounded-2xl flex items-center justify-center text-primary-400 group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white transition-all duration-500">
                  <Award size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p className="text-slate-400 leading-relaxed">
                  I don&apos;t just build; I optimize. Every solution is refined until it reaches peak performance and reliability.
                </p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 glass rounded-2xl flex items-center justify-center text-primary-400 group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white transition-all duration-500">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Collaboration</h3>
                <p className="text-slate-400 leading-relaxed">
                  The best products are born from synergy. I value open communication and shared goals in every partnership.
                </p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 glass rounded-2xl flex items-center justify-center text-primary-400 group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white transition-all duration-500">
                  <Zap size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Agile & Fast</h3>
                <p className="text-slate-400 leading-relaxed">
                  Utilizing Agile methodologies to stay ahead of the curve, constantly experimenting with technologies to deliver fast solutions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Collaboration CTA */}
          <section className="mt-40">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-16 rounded-[3rem] text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-[80px] -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/10 rounded-full blur-[80px] -ml-32 -mb-32" />
              
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Let&apos;s Build the <br />
                <span className="gradient-text">Future Together</span>
              </h2>
              <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
                I&apos;m always open to new opportunities and collaborations on exciting projects.
              </p>
              <Link href="/contact" className="btn-primary px-10 py-4 text-lg">
                Get in Touch
              </Link>
            </motion.div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
