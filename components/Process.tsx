"use client";

import { motion } from "framer-motion";
import { Coffee, MessageSquare, Rocket, Terminal } from "lucide-react";

const Process = () => {
  const steps = [
    {
      title: "Discover",
      description: "Deep dive into goals and target audience.",
      icon: <MessageSquare size={32} />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Architect",
      description: "Designing scalable and future-proof systems.",
      icon: <Terminal size={32} />,
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Execute",
      description: "Precision coding with a focus on performance.",
      icon: <Coffee size={32} />,
      color: "from-orange-500 to-rose-500"
    },
    {
      title: "Deploy",
      description: "Launching masterpieces to the digital world.",
      icon: <Rocket size={32} />,
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Creative <span className="gradient-text">Workflow</span>
          </h2>
          <p className="text-slate-400">The methodology behind every successful project.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-16 left-0 w-full h-px bg-white/5 -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="relative mb-8 flex justify-center">
                <div className={`w-32 h-32 rounded-[2.5rem] bg-gradient-to-br ${step.color} p-px group-hover:scale-110 transition-transform duration-500`}>
                  <div className="w-full h-full bg-brand-darker rounded-[2.4rem] flex items-center justify-center relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                    <div className="text-white relative z-10">{step.icon}</div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 glass rounded-2xl flex items-center justify-center text-xl font-bold font-display opacity-50">
                  0{index + 1}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
