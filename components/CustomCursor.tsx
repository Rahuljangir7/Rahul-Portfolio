"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");

  const mouseX = useSpring(0, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
        setCursorText("</>");
      } else {
        setIsHovering(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
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
        <span className="text-[8px] font-bold text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity">
          {cursorText}
        </span>
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
        {cursorText}
      </motion.div>
    </>
  );
};

export default CustomCursor;
