"use client";

import { motion } from "framer-motion";
import { Camera, Gamepad2, Music, Plane, Dumbbell } from "lucide-react";

const Interests = () => {
  const interests = [
    { name: "Photography", icon: <Camera />, description: "Capturing the beauty of the world through a lens." },
    { name: "Gaming", icon: <Gamepad2 />, description: "Exploring immersive digital worlds and narratives." },
    { name: "Music", icon: <Music />, description: "Producing and listening to electronic and ambient beats." },
    { name: "Travel", icon: <Plane />, description: "Seeking inspiration from different cultures and landscapes." },
    { name: "Fitness", icon: <Dumbbell />, description: "Maintaining a healthy balance between body and mind." },
  ];

  return (
    <section className="py-12 md:py-16 bg-brand-darker/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Beyond the <span className="gradient-text">Screen</span>
          </h2>
          <p className="text-slate-400">What keeps me inspired when I&apos;m not in front of my monitor.</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-10 rounded-[2.5rem] w-full md:w-[300px] text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-primary-500/10 rounded-2xl flex items-center justify-center text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all duration-500">
                {interest.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{interest.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{interest.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
