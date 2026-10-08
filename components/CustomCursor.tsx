"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    let raf = 0;
    let x = 0;
    let y = 0;

    const render = () => {
      raf = 0;
      mouseX.set(x);
      mouseY.set(y);
    };

    const handleMouseMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!raf) raf = requestAnimationFrame(render);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hovering = Boolean(
        target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a") ||
          target.closest("button")
      );
      setIsHovering((prev) => (prev === hovering ? prev : hovering));
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <style jsx global>{`
        * {
          cursor: none !important;
        }
        .custom-cursor {
          will-change: transform;
        }
        @media (max-width: 768px) {
          * {
            cursor: auto !important;
          }
          .custom-cursor {
            display: none !important;
          }
        }
      `}</style>
      
      {/* Outer Ring */}
      <motion.div
        className="custom-cursor fixed top-0 left-0 w-8 h-8 border border-primary-500 rounded-full pointer-events-none z-[9999] flex items-center justify-center"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? "rgba(14, 165, 233, 0.15)" : "transparent",
          borderColor: isHovering ? "rgba(14, 165, 233, 0.5)" : "rgba(14, 165, 233, 1)",
        }}
      >
      </motion.div>

      {/* Inner Dot */}
      <motion.div
        className="custom-cursor fixed top-0 left-0 w-1.5 h-1.5 bg-primary-400 rounded-full pointer-events-none z-[9999]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 0 : 1,
        }}
      />

      {/* Floating </> text on hover */}
      <motion.div
        className="custom-cursor fixed top-0 left-0 pointer-events-none z-[9999] text-primary-400 font-display font-bold text-xs"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isHovering ? 1 : 0,
          scale: isHovering ? 1 : 0.5,
        }}
      >
        {"</>"}
      </motion.div>
    </>
  );
};

export default CustomCursor;
