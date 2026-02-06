'use client';

import { motion } from 'framer-motion';
import { SiDavinciresolve, SiAdobepremierepro, SiCanva } from 'react-icons/si';

const tools = [
  {
    name: 'DaVinci Resolve',
    icon: <SiDavinciresolve className="w-16 h-16 text-[#FF6B00]" />,
    description: 'Expert Color Grading & Precision Cutting',
  },
  {
    name: 'Premiere Pro',
    icon: <SiAdobepremierepro className="w-16 h-16 text-[#9999FF]" />,
    description: 'Advanced Motion Graphics & Workflow Speed',
  },
  {
    name: 'Canva',
    icon: <SiCanva className="w-16 h-16 text-[#00C4CC]" />,
    description: 'Thumbnail Design & Visual Brand Identity',
  }
];

export function Tools() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">THE ARSENAL</h2>
            <p className="text-white/40 text-lg">
              Industry-standard tools paired with a creative eye to deliver pixel-perfect results.
            </p>
          </div>
          <div className="h-px flex-1 bg-white/10 hidden md:block mx-12 mb-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-3xl group"
            >
              <motion.div 
                className="mb-6 inline-block"
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                {tool.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">
                {tool.name}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {tool.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
