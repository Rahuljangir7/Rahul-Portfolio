import type { ReactNode } from "react";

interface TechLogo {
  name: string;
  render: () => ReactNode;
}

const logos: TechLogo[] = [
  {
    name: "React",
    render: () => (
      <svg viewBox="0 0 32 32" className="w-full h-full text-[#61DAFB]" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="2.6" fill="currentColor" />
        <ellipse cx="16" cy="16" rx="12" ry="4.8" stroke="currentColor" strokeWidth="1.6" />
        <ellipse cx="16" cy="16" rx="12" ry="4.8" stroke="currentColor" strokeWidth="1.6" transform="rotate(60 16 16)" />
        <ellipse cx="16" cy="16" rx="12" ry="4.8" stroke="currentColor" strokeWidth="1.6" transform="rotate(120 16 16)" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    render: () => (
      <svg viewBox="0 0 32 32" className="w-full h-full text-white" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="12.5" stroke="currentColor" strokeWidth="1.7" />
        <path d="M11.5 21V11.2L22 24.5M20.5 11.2V18" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    render: () => (
      <svg viewBox="0 0 32 32" className="w-full h-full text-[#5FA04E]" fill="none" aria-hidden="true">
        <path d="M16 3.5L26.8 9.75V22.25L16 28.5L5.2 22.25V9.75L16 3.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M12.5 19.5V12.5L19.5 19.5V12.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    render: () => (
      <svg viewBox="0 0 32 32" className="w-full h-full text-[#47A248]" fill="none" aria-hidden="true">
        <path d="M16 4C16 4 22.5 10.5 22.5 17.5C22.5 22.5 19.2 25.8 16 27.5C12.8 25.8 9.5 22.5 9.5 17.5C9.5 10.5 16 4 16 4Z" stroke="currentColor" strokeWidth="1.8" fill="currentColor" fillOpacity="0.18" strokeLinejoin="round" />
        <path d="M16 11V28.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    render: () => (
      <svg viewBox="0 0 32 32" className="w-full h-full text-[#38BDF8]" fill="currentColor" aria-hidden="true">
        <path d="M16 9.5C12.8 9.5 10.8 11.1 10 14.3C11.2 12.7 12.6 12.1 14.2 12.5C15.1 12.7 15.8 13.4 16.5 14.1C17.7 15.3 19.1 16.7 22 16.7C25.2 16.7 27.2 15.1 28 11.9C26.8 13.5 25.4 14.1 23.8 13.7C22.9 13.5 22.2 12.8 21.5 12.1C20.3 10.9 18.9 9.5 16 9.5ZM10 16.7C6.8 16.7 4.8 18.3 4 21.5C5.2 19.9 6.6 19.3 8.2 19.7C9.1 19.9 9.8 20.6 10.5 21.3C11.7 22.5 13.1 23.9 16 23.9C19.2 23.9 21.2 22.3 22 19.1C20.8 20.7 19.4 21.3 17.8 20.9C16.9 20.7 16.2 20 15.5 19.3C14.3 18.1 12.9 16.7 10 16.7Z" />
      </svg>
    ),
  },
  {
    name: "Three.js",
    render: () => (
      <svg viewBox="0 0 32 32" className="w-full h-full text-slate-200" fill="none" aria-hidden="true">
        <path d="M5 7L27 12.5L11.5 27L5 7Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M8.5 17L19 10.5L16.5 22L8.5 17Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const SkillLogos3D = () => {
  // 2x logos per half ensures each 50% seamless loop exceeds 2500px on ultra-wide monitors
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="w-full py-10 my-10 overflow-hidden relative flex items-center justify-center">
      {/* 3D Perspective Container */}
      <div className="w-full overflow-hidden" style={{ perspective: "1000px" }}>
        <div
          className="flex flex-nowrap items-center gap-12 sm:gap-20 pr-12 sm:pr-20 w-max animate-marquee hover:[animation-play-state:paused]"
          style={{ transform: "rotateX(12deg)" }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              title={logo.name}
              aria-label={logo.name}
              className="relative w-24 h-24 sm:w-32 sm:h-32 glass rounded-3xl flex flex-col items-center justify-center gap-2 p-5 shrink-0 group border border-white/10 hover:border-primary-500/50 hover:scale-105 hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] transition-all duration-300"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 transition-all duration-300 opacity-85 group-hover:opacity-100 md:opacity-65 md:grayscale md:group-hover:grayscale-0">
                {logo.render()}
              </div>
              <span className="text-[10px] sm:text-xs font-medium text-slate-400 group-hover:text-slate-200 transition-colors">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-slate-950 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-slate-950 to-transparent z-10" />
    </div>
  );
};

export default SkillLogos3D;
