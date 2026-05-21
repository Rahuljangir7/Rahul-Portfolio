"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/data/blog";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            My <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            My personal space where I share what I&apos;m learning and working on.
          </p>
        </motion.div>

        <div className="space-y-8">
          {BLOG_POSTS.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="glass p-8 md:p-10 rounded-3xl group hover:border-primary-500/30 transition-all duration-500 cursor-pointer border border-white/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
                    <div className="flex-1">
                      <div className="inline-block bg-white/5 border border-white/10 text-slate-300 text-xs px-3 py-1 rounded-full mb-4">
                        {post.category}
                      </div>
                      
                      <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary-400 transition-colors leading-tight">
                        {post.title}
                      </h2>
                      
                      <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-6">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-2 text-primary-400 font-medium text-sm mt-auto group-hover:translate-x-2 transition-transform">
                        Read Full Post <ArrowRight size={16} />
                      </div>
                    </div>

                    <div className="md:w-48 flex md:flex-col gap-4 text-slate-500 text-sm font-medium shrink-0 pt-2 border-t md:border-t-0 md:border-l border-white/10 md:pl-6">
                      <span className="flex items-center gap-2">
                        <Calendar size={16} className="text-primary-400/50" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock size={16} className="text-primary-400/50" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
