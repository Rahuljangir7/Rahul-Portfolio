"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  { name: "React", src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "Next.js", src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
  { name: "Node.js", src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
  { name: "MongoDB", src: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" },
  { name: "Tailwind CSS", src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
  { name: "Three.js", src: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Three.js_Icon.svg" },
];

const SkillLogos3D = () => {
  // Multiply for seamless infinite loop width
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="w-full py-10 my-10 overflow-hidden relative flex items-center justify-center">
      
      {/* 3D Perspective Container */}
      <div 
        className="w-full flex gap-12 sm:gap-24 items-center"
        style={{ perspective: "1000px" }}
      >
        <motion.div
          animate={{ x: [0, -1500] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
          className="flex flex-nowrap items-center gap-12 sm:gap-24 shrink-0"
          style={{ transformStyle: "preserve-3d", rotateX: "15deg" }}
        >
          {duplicatedLogos.map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.15, translateZ: 60, rotateY: -10 }}
              className="relative w-24 h-24 sm:w-32 sm:h-32 glass rounded-3xl flex items-center justify-center p-6 shrink-0 group border border-white/10 hover:border-primary-500/50 hover:shadow-[0_0_40px_rgba(14,165,233,0.4)] transition-all duration-300"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="w-full h-full relative">
                <Image 
                  src={logo.src} 
                  alt={logo.name} 
                  fill
                  className="object-contain transition-all duration-500 filter grayscale-0 opacity-100 brightness-125 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] md:grayscale md:opacity-50 md:drop-shadow-none md:brightness-100 md:group-hover:grayscale-0 md:group-hover:opacity-100 md:group-hover:brightness-125 md:group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                />
              </div>
              
              {/* 3D Floor Shadow */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-3 bg-black/60 blur-xl rounded-[100%]" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-slate-950 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-slate-950 to-transparent z-10" />
    </div>
  );
};

export default SkillLogos3D;
