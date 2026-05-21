"use client";

import { useParams, useRouter } from "next/navigation";
import { BLOG_POSTS } from "@/lib/data/blog";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import ReactMarkdown from "react-markdown";

const BlogPost = () => {
  const params = useParams();
  const router = useRouter();
  
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center relative">
        <div className="text-center z-10">
          <h2 className="text-3xl font-semibold mb-6">Post not found</h2>
          <button
            onClick={() => router.push("/blog")}
            className="btn-primary"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-6 relative">
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.push("/blog")}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft size={20} />
          Back to Blog
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 text-slate-400 text-sm font-medium mb-6">
              <span className="bg-primary-500/10 text-primary-400 px-3 py-1 rounded-full border border-primary-500/20">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={16} />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={16} />
                {post.readTime}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-slate-400 mb-8 max-w-3xl">
              {post.excerpt}
            </p>
          </div>

          {/* Content */}
          <div className="glass p-8 md:p-12 rounded-[2rem] border border-white/5 prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary-400 hover:prose-a:text-primary-300">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;
