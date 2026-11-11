import Link from "next/link";
import { ArrowUpRight, Code2, Database, Sparkles } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative min-h-[100vh] flex items-center justify-center pt-24 pb-12 px-8 md:px-16 lg:px-24 overflow-hidden">
      {/* Ultra-subtle radial ambient glow (no heavy CSS filter blur) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(600px circle at 85% 15%, rgba(14, 165, 233, 0.08), transparent 70%), radial-gradient(500px circle at 10% 85%, rgba(100, 116, 139, 0.08), transparent 70%)",
        }}
      />

      <div className="container mx-auto max-w-7xl relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
          
          {/* Left Content - Immediate LCP visibility, zero blocking motion delay */}
          <div className="flex-1 max-w-3xl">
            <div>
              {/* Premium Status Indicator */}
              <div className="flex items-center gap-4 mb-10">
                <div className="relative flex h-2 w-2">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500 shadow-[0_0_8px_rgba(14,165,233,0.9)]"></span>
                </div>
                <span className="uppercase tracking-[0.3em] text-xs font-semibold text-slate-400">
                  Available for Freelance Projects · CTO @ Zynetechs
                </span>
              </div>

              {/* Massive, Highly-Controlled Headline */}
              <h1 className="text-2xl md:text-5xl lg:text-[3.5rem] font-display font-medium tracking-tight leading-[1.05] mb-8">
                <span className="text-white block">Freelance Full Stack</span>
                <span className="text-slate-500 font-light italic block my-2">Web Developer</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-white to-slate-400 block">
                  for Your Next Project.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-400 max-w-xl font-light leading-relaxed mb-14">
                I&apos;m <span className="text-white font-medium">Rahul Jangir</span>, a freelance full stack developer from Jaipur, India. Hire me directly to build fast, SEO-friendly websites, e-commerce stores and custom web apps with React, Next.js &amp; the MERN stack — one-to-one, no middleman. I&apos;m also CTO at <a href="https://zynetechs.com" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 font-medium underline decoration-primary-500/40 underline-offset-4 transition-colors">Zynetechs</a>.
              </p>

              {/* Minimalist Premium CTAs */}
              <div className="flex flex-wrap items-center gap-8 md:gap-12">
                <Link
                  href="/contact"
                  className="group relative flex items-center gap-2 text-white uppercase tracking-[0.2em] text-xs font-bold pb-2"
                >
                  <span>Hire Me for a Project</span>
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  {/* Underline Animation */}
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20"></span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary-500 group-hover:w-full transition-all duration-500 ease-out"></span>
                </Link>

                <Link
                  href="/projects"
                  className="group relative flex items-center gap-2 text-slate-400 hover:text-white uppercase tracking-[0.2em] text-xs font-bold pb-2 transition-colors duration-300"
                >
                  <span>View My Work</span>
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
            </div>
          </div>

          {/* Right Content - Pure, Clean Image */}
          <div className="flex-1 flex justify-center lg:justify-end items-center">
            <div className="relative">
              {/* Radial glow behind the image (GPU-free compared to blur-[80px]) */}
              <div
                aria-hidden="true"
                className="absolute -inset-12 -z-10 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(14, 165, 233, 0.22) 0%, rgba(14, 165, 233, 0) 68%)",
                }}
              />
              
              <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]">
                
                {/* Image Container with Glow/Border */}
                <div className="absolute inset-0 rounded-full overflow-hidden border border-white/20 shadow-[0_0_50px_rgba(14,165,233,0.15)] hover:border-primary-500/50 transition-colors duration-500 p-2 bg-white/5">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    {/* A dark overlay gradient to blend the image perfectly with the dark theme */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10 pointer-events-none" />
                    <Image
                      src="/rahul.webp"
                      alt="Rahul Jangir – freelance full stack web developer in Jaipur, India"
                      fill
                      sizes="(max-width: 768px) 280px, (max-width: 1024px) 400px, 450px"
                      className="object-cover object-center filter grayscale-[20%] contrast-110"
                      priority
                    />
                  </div>
                </div>

                {/* Floating "Active Now" Badge (Pure CSS compositor float) */}
                <div className="animate-float-slow absolute bottom-4 -left-4 md:bottom-10 md:-left-8 glass rounded-full px-4 py-2 flex items-center gap-2 border border-white/10 shadow-xl z-20">
                  <div className="relative flex h-2.5 w-2.5">
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                  </div>
                  <span className="text-xs font-semibold tracking-wider text-slate-200">OPEN FOR WORK</span>
                </div>

                {/* Floating Icons (Pure CSS compositor floats) */}
                <div className="animate-float-tilt absolute top-10 -right-4 md:top-16 md:-right-6 w-12 h-12 md:w-16 md:h-16 glass rounded-2xl flex items-center justify-center text-primary-400 border border-white/10 shadow-lg z-20">
                  <Code2 size={24} className="md:w-8 md:h-8" />
                </div>

                <div className="animate-float-tilt-reverse absolute bottom-20 -right-2 md:bottom-28 md:-right-4 w-10 h-10 md:w-14 md:h-14 glass rounded-full flex items-center justify-center text-accent-400 border border-white/10 shadow-lg z-20">
                  <Database size={20} className="md:w-6 md:h-6" />
                </div>
                
                {/* Sparkle Decorative */}
                <div className="absolute top-4 left-10 md:top-8 md:left-16 text-gold-400 z-20">
                  <Sparkles size={24} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
