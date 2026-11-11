"use client";

import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;

    // Disable on touch/coarse-pointer devices
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) {
      return;
    }

    let isVisible = false;
    let lastHover = false;

    const handleMouseMove = (e: MouseEvent) => {
      // Direct synchronous transform update — zero RAF/React lag (1:1 with OS pointer)
      el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      if (!isVisible) {
        isVisible = true;
        el.style.opacity = "1";
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const hovering = Boolean(
        target &&
          (target.tagName === "A" ||
            target.tagName === "BUTTON" ||
            target.closest("a") ||
            target.closest("button"))
      );
      if (hovering !== lastHover) {
        lastHover = hovering;
        el.setAttribute("data-hover", hovering ? "true" : "false");
      }
    };

    const handleMouseLeave = () => {
      isVisible = false;
      el.style.opacity = "0";
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleMouseLeave, {
      passive: true,
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        @media (hover: hover) and (pointer: fine) and (min-width: 769px) {
          * {
            cursor: none !important;
          }
        }
        .custom-cursor-root {
          will-change: transform;
          opacity: 0;
          transition: opacity 120ms ease;
        }
        .custom-cursor-ring {
          transition: transform 140ms cubic-bezier(0.22, 1, 0.36, 1),
            background-color 140ms ease, border-color 140ms ease;
        }
        .custom-cursor-root[data-hover="true"] .custom-cursor-ring {
          transform: translate(-50%, -50%) scale(2.35);
          background-color: rgba(14, 165, 233, 0.15);
          border-color: rgba(14, 165, 233, 0.5);
        }
        .custom-cursor-dot {
          transition: transform 120ms ease;
        }
        .custom-cursor-root[data-hover="true"] .custom-cursor-dot {
          transform: translate(-50%, -50%) scale(0);
        }
        .custom-cursor-code {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.5);
          transition: opacity 140ms ease, transform 140ms ease;
        }
        .custom-cursor-root[data-hover="true"] .custom-cursor-code {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }
        @media (max-width: 768px), (hover: none), (pointer: coarse) {
          .custom-cursor-root {
            display: none !important;
          }
        }
      `}</style>

      {/* Single composited wrapper moved directly via translate3d */}
      <div
        ref={cursorRef}
        data-hover="false"
        className="custom-cursor-root fixed top-0 left-0 pointer-events-none z-[9999]"
      >
        {/* Outer Ring */}
        <div
          className="custom-cursor-ring fixed top-0 left-0 w-8 h-8 border border-primary-500 rounded-full"
          style={{ transform: "translate(-50%, -50%) scale(1)" }}
        />

        {/* Inner Dot */}
        <div
          className="custom-cursor-dot fixed top-0 left-0 w-1.5 h-1.5 bg-primary-400 rounded-full"
          style={{ transform: "translate(-50%, -50%) scale(1)" }}
        />

        {/* Floating </> text on hover */}
        <div className="custom-cursor-code fixed top-0 left-0 text-primary-400 font-display font-bold text-xs whitespace-nowrap">
          {"</>"}
        </div>
      </div>
    </>
  );
};

export default CustomCursor;
