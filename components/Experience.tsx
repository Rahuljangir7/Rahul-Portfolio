"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Freelance",
      duration: "January 2026 - Present",
      description: "Architect and ship custom full-stack applications for 5+ clients using MERN Stack and Laravel. Design REST APIs, integrate payment gateways like Razorpay, and deploy apps on AWS and Vercel.",
      icon: <Briefcase className="w-6 h-6" />,
      type: "work"
    },
    {
      title: "Full-stack Developer",
      company: "Podosphere Technologies",
      duration: "January 2025 - January 2026",
      description: "Built and shipped live e-commerce and LMS platforms. Refactored legacy codebase reducing load times by ~40%. Resolved production bugs and participated in Agile sprint planning.",
      icon: <Briefcase className="w-6 h-6" />,
      type: "work"
    },
    {
      title: "Full Stack Developer Probation",
      company: "Podosphere Technologies",
      duration: "May 2025 - October 2025",
      description: "Initial probation phase focusing on full-stack development using React.js, Node.js, and MySQL. Delivered on-time features and integrations.",
      icon: <Briefcase className="w-6 h-6" />,
      type: "work"
    },
    {
      title: "12th, Art/Art Studies",
      company: "SH JM BAJAJ GOVT SR SEC SCHOOL, LAXMANGARH",
      duration: "2022 - 2023",
      description: "Completed higher secondary education focusing on Art Studies.",
      icon: <GraduationCap className="w-6 h-6" />,
      type: "education"
    }
  ];

  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A timeline of my professional growth, real-world work, and educational background.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-primary-500/50 via-accent-500/50 to-transparent md:block hidden" />

          <div className="space-y-16 relative">
            {/* Mobile Vertical Line */}
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary-500/50 via-accent-500/50 to-transparent md:hidden block" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative flex flex-col md:items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                } pl-12 md:pl-0`}
              >
                {/* Content Card */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                  <div className="glass p-8 rounded-3xl group hover:border-primary-500/30 transition-all text-left md:text-inherit">
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? "md:flex-row flex-row" : "md:flex-row-reverse flex-row"}`}>
                      <div className="p-2 bg-primary-500/10 rounded-lg text-primary-400 shrink-0">
                        {exp.icon}
                      </div>
                      <span className="text-sm font-medium text-slate-500 flex items-center gap-2">
                        <Calendar size={14} />
                        {exp.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-primary-400 font-medium mb-3">{exp.company}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </div>

                {/* Center Circle */}
                <div className="absolute left-[11px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-brand-dark border-2 border-primary-500 rounded-full z-10 top-8 md:top-auto">
                  <div className="absolute inset-0 bg-primary-500 rounded-full animate-ping opacity-25" />
                </div>

                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
