"use client";

import { motion } from "framer-motion";
import { Code2, MonitorSmartphone, Rocket, Search, Globe, Database } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Code2 size={40} />,
    title: "Custom Web Development",
    description: "Building fast, scalable, and secure custom web applications tailored to your specific business needs using React, Next.js, and Node.js.",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-blue-500/50",
    glow: "group-hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]"
  },
  {
    icon: <Globe size={40} />,
    title: "3D Web Experiences",
    description: "Creating highly immersive and interactive 3D web experiences using Three.js and WebGL that captivate your audience.",
    color: "from-purple-500/20 to-pink-500/20",
    border: "group-hover:border-purple-500/50",
    glow: "group-hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]"
  },
  {
    icon: <MonitorSmartphone size={40} />,
    title: "Responsive UI/UX Design",
    description: "Designing pixel-perfect, mobile-first interfaces that look beautiful and function flawlessly across all devices.",
    color: "from-emerald-500/20 to-teal-500/20",
    border: "group-hover:border-emerald-500/50",
    glow: "group-hover:shadow-[0_0_40px_rgba(16,185,129,0.3)]"
  },
  {
    icon: <Database size={40} />,
    title: "E-Commerce Solutions",
    description: "Developing robust e-commerce platforms with secure payment gateways, inventory management, and fast checkout flows.",
    color: "from-orange-500/20 to-amber-500/20",
    border: "group-hover:border-orange-500/50",
    glow: "group-hover:shadow-[0_0_40px_rgba(249,115,22,0.3)]"
  },
  {
    icon: <Search size={40} />,
    title: "SEO & Performance",
    description: "Optimizing your website's architecture, metadata, and load speeds to rank higher on search engines and convert more visitors.",
    color: "from-rose-500/20 to-red-500/20",
    border: "group-hover:border-rose-500/50",
    glow: "group-hover:shadow-[0_0_40px_rgba(244,63,94,0.3)]"
  },
  {
    icon: <Rocket size={40} />,
    title: "Application Scaling",
    description: "Refactoring and scaling existing applications to handle massive traffic spikes and large databases efficiently.",
    color: "from-indigo-500/20 to-blue-500/20",
    border: "group-hover:border-indigo-500/50",
    glow: "group-hover:shadow-[0_0_40px_rgba(99,102,241,0.3)]"
  }
];

const ServicesPage = () => {
  return (
    <div className="relative min-h-screen pt-24 pb-12 px-6 overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[150px] -z-10" />

      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-block mb-4 px-6 py-2 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-400 text-sm font-medium backdrop-blur-sm">
            What I Do Best
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Digital <span className="gradient-text">Services</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
            I offer a comprehensive suite of digital services designed to elevate your brand and drive business growth through technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className={`relative glass p-10 rounded-[2rem] border border-white/5 transition-all duration-500 group ${service.border} ${service.glow}`}
            >
              {/* Animated Gradient Background on Hover */}
              <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
              
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed font-light text-lg group-hover:text-slate-300 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 glass p-16 rounded-[3rem] text-center relative overflow-hidden group border border-white/5 hover:border-primary-500/30 transition-colors duration-500"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            Have a specific project in mind?
          </h2>
          <p className="text-slate-400 text-xl mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how we can tailor these services to fit your exact requirements and goals.
          </p>
          <Link
            href="/contact"
            className="btn-primary px-12 py-5 text-xl inline-flex"
          >
            Start a Conversation
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;
