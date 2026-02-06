'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Play, Zap, Award, Users } from 'lucide-react';

const stats = [
  { icon: <Users size={18} />, value: '50+', label: 'Creators Served' },
  { icon: <Play size={18} />, value: '500+', label: 'Videos Edited' },
  { icon: <Zap size={18} />, value: '40%', label: 'Avg Retention Boost' },
];

const floatingVideos = [
  { 
    src: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=300&h=200&fit=crop',
    position: 'top-32 left-8 md:left-16'
  },
  { 
    src: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=300&h=200&fit=crop',
    position: 'top-48 right-8 md:right-20'
  },
  { 
    src: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=200&fit=crop',
    position: 'bottom-32 left-12 md:left-24'
  },
  { 
    src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=200&fit=crop',
    position: 'bottom-40 right-12 md:right-28'
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-20">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      {/* Floating Video Thumbnails */}
      {floatingVideos.map((video, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 + index * 0.2 }}
          className={`absolute ${video.position} hidden md:block`}
        >
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, index % 2 === 0 ? 3 : -3, 0]
            }}
            transition={{ 
              duration: 5 + index, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative group cursor-pointer"
          >
            <div className="w-28 h-20 md:w-36 md:h-24 rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
              <img 
                src={video.src}
                alt="Video thumbnail"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Play size={14} fill="white" className="ml-0.5" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full bg-green-500 border-2 border-background" />
          </motion.div>
        </motion.div>
      ))}

      {/* Animated Circles */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white/[0.03] rounded-full pointer-events-none"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-white/[0.02] rounded-full pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-5xl"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/60 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          AVAILABLE FOR PROJECTS
          <Award size={14} className="text-yellow-500" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 leading-[0.9]"
        >
          TURNING RAW FOOTAGE <br />
          <span className="gradient-text">INTO VIRAL STORIES</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-white/50 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Professional video editor specialized in high-retention content for top-tier creators. 
          I blend cinematic storytelling with data-driven editing.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.a
            href="#work"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-white/10"
          >
            VIEW MY WORK <ChevronRight size={20} />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
          >
            BOOK A CALL
          </motion.a>
        </motion.div>

        {/* Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-12"
        >
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-3 px-4 py-2">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60">
                {stat.icon}
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-xs text-white/40">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ 
          y: [0, -10, 0],
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
      >
        <span className="text-[10px] tracking-[0.2em] font-bold">SCROLL TO EXPLORE</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>

      {/* Corner Decorations */}
      <div className="absolute top-24 left-6 w-20 h-20 border-l border-t border-white/10 rounded-tl-3xl" />
      <div className="absolute top-24 right-6 w-20 h-20 border-r border-t border-white/10 rounded-tr-3xl" />
      <div className="absolute bottom-24 left-6 w-20 h-20 border-l border-b border-white/10 rounded-bl-3xl" />
      <div className="absolute bottom-24 right-6 w-20 h-20 border-r border-b border-white/10 rounded-br-3xl" />
    </section>
  );
}
