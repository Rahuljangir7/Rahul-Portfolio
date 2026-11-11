import Link from "next/link";
import { ArrowRight, Code2, ShoppingCart, Palette, Search, UserCheck, Clock, BadgeCheck, Globe2 } from "lucide-react";

import Background3DLoader from "@/components/Background3DLoader";
import Process from "@/components/Process";
import BentoSkills from "@/components/BentoSkills";
import SkillLogos3D from "@/components/SkillLogos3D";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import { HOME_FAQS } from "@/lib/seo";


const Home = () => {
  const features = [
    {
      icon: <Code2 size={32} />,
      title: "Website & Web App Development",
      description: "Custom business websites, dashboards, SaaS and startup MVPs built with React, Next.js and Node.js.",
    },
    {
      icon: <ShoppingCart size={32} />,
      title: "E-commerce Development",
      description: "Online stores with secure payments, inventory, admin panel and a fast checkout that converts.",
    },
    {
      icon: <Palette size={32} />,
      title: "UI/UX & 3D Websites",
      description: "Mobile-first, modern designs and immersive Three.js 3D experiences that make your brand stand out.",
    },
    {
      icon: <Search size={32} />,
      title: "SEO & Speed Optimization",
      description: "Technical SEO, schema and Core Web Vitals tuning so your website ranks on Google and loads fast.",
    },
  ];

  const reasons = [
    {
      icon: <UserCheck size={28} />,
      title: "Work Directly With the Developer",
      description: "No agency layers or account managers — you talk to the person writing your code.",
    },
    {
      icon: <BadgeCheck size={28} />,
      title: "CTO-Level Expertise, Freelancer Pricing",
      description: "Architecture and code quality I use as CTO of Zynetechs, at flexible freelance rates.",
    },
    {
      icon: <Clock size={28} />,
      title: "Fast Replies & On-Time Delivery",
      description: "Reply within 24 hours, clear milestones and regular progress updates on WhatsApp or email.",
    },
    {
      icon: <Globe2 size={28} />,
      title: "Clients in India & Worldwide",
      description: "Based in Jaipur, working remotely with businesses and startups across India and abroad.",
    },
  ];

  return (
    <>
      <Background3DLoader />

      <Hero />

      <div className="relative min-h-screen pb-12 overflow-hidden">
        <div className="container mx-auto px-6">
          {/* 3D Infinite Skill Logos Marquee */}
          <SkillLogos3D />

          {/* Process Section */}
            <Process />

            {/* Services Grid */}
            <div className="text-center mt-16 md:mt-20">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                Freelance Web Development <span className="gradient-text">Services</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Looking to hire a web developer for your project? Here&apos;s what I can build for you.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 md:mt-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="glass p-8 rounded-2xl text-center relative group overflow-hidden hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="text-primary-400 mb-6 flex justify-center transform group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/services" className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium">
                See all services <ArrowRight size={18} />
              </Link>
            </div>

            {/* Why Hire Me */}
            <section className="py-12 md:py-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                  Why Hire Me as Your <span className="gradient-text">Freelance Developer?</span>
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                  Startups, small businesses and brands choose me for direct communication, clean code and results.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {reasons.map((reason) => (
                  <div key={reason.title} className="glass p-8 rounded-2xl border border-white/5 hover:border-primary-500/30 transition-colors">
                    <div className="text-primary-400 mb-5">{reason.icon}</div>
                    <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{reason.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Bento Skills Section */}
            <BentoSkills />

            {/* FAQ Section */}
            <FAQ
              faqs={HOME_FAQS}
              subtitle="Everything you need to know before hiring me for your website or web app project."
            />



            {/* Final CTA Section */}
            <section className="pt-[10px] pb-[5px] md:py-16">
              <div className="glass px-6 py-10 md:p-16 rounded-[2rem] md:rounded-[3rem] text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 md:mb-8 leading-tight">
                  Have a Project? <br />
                  <span className="gradient-text">Let&apos;s Build It Together.</span>
                </h2>
                <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
                  Tell me what you need — a website, online store or web app. I&apos;ll reply
                  within 24 hours with a plan, timeline and a free quote.
                </p>
                <Link
                  href="/contact"
                  className="btn-primary px-12 py-5 text-xl relative z-10"
                >
                  Get a Free Quote
                </Link>
              </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
