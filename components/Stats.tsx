"use client";

import { motion } from "framer-motion";
import { Coffee, Code, Heart, Trophy } from "lucide-react";

const Stats = () => {
  const stats = [
    { label: "Lines of Code", value: "250K+", icon: <Code className="w-6 h-6" /> },
    { label: "Cups of Coffee", value: "1.2K", icon: <Coffee className="w-6 h-6" /> },
    { label: "Projects Completed", value: "50+", icon: <Trophy className="w-6 h-6" /> },
    { label: "Happy Clients", value: "30+", icon: <Heart className="w-6 h-6" /> },
  ];

  return (
    <section className="py-8 md:py-12 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-8 glass rounded-3xl group hover:border-primary-500/30 transition-all"
            >
              <div className="inline-flex items-center justify-center p-4 bg-primary-500/10 rounded-2xl text-primary-400 mb-6 group-hover:scale-110 transition-transform duration-500">
                {stat.icon}
              </div>
              <div className="text-4xl font-display font-bold mb-2 gradient-text">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm font-medium uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
