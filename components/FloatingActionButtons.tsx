"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";

const FloatingActionButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/919950108143", "_blank");
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col gap-3">
      {/* Scroll to Top (Appears on Scroll) */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="w-10 h-10 md:w-12 md:h-12 bg-primary-500 text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:bg-primary-600 transition-colors group relative"
            aria-label="Scroll to Top"
          >
            <ArrowUp size={20} className="md:w-6 md:h-6 group-hover:-translate-y-1 transition-transform" />
            
            {/* Tooltip */}
            <div className="hidden md:block absolute right-full mr-4 bg-slate-800 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Scroll to top
              <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-slate-800" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp Button (Permanent, positioned at bottom) */}
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={openWhatsApp}
        className="w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:bg-[#128C7E] transition-colors group relative"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} className="md:w-7 md:h-7 group-hover:scale-110 transition-transform" />
        
        {/* Tooltip */}
        <div className="hidden md:block absolute right-full mr-4 bg-slate-800 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with me
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-slate-800" />
        </div>
      </motion.button>
    </div>
  );
};

export default FloatingActionButtons;
