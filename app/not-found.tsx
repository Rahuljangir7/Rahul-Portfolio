"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[150px] -z-10" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-center"
      >
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="flex justify-center mb-8 text-primary-500"
        >
          <SearchX size={100} strokeWidth={1} />
        </motion.div>

        <h1 className="text-8xl md:text-9xl font-display font-bold gradient-text mb-4">
          404
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Page Not Found
        </h2>
        
        <p className="text-slate-400 text-lg md:text-xl max-w-md mx-auto mb-10 leading-relaxed">
          Oops! The page you are looking for doesn&apos;t exist or has been moved. Let&apos;s get you back home.
        </p>

        <Link
          href="/"
          className="btn-primary inline-flex items-center gap-3 px-8 py-4 text-lg w-full sm:w-auto justify-center"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
