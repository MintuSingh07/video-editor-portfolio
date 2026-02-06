'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import { Play, ArrowUpRight, X, Volume2, VolumeX } from 'lucide-react';

const projects = [
  {
    title: 'One Man Business Empire',
    category: 'STORYTELLING',
    videoUrl: '/video/demo-1.mp4',
    views: '1.2M'
  },
  {
    title: 'Intelligence of top players',
    category: 'INFOGRAPHICS',
    videoUrl: '/video/demo-2.mp4',
    views: '800K'
  },
  {
    title: 'No shortcuts only grind',
    category: 'MOTIVATIONAL',
    videoUrl: '/video/demo-4.mp4',
    views: '2.5M'
  },
  {
    title: 'Thomas Edison success story',
    category: 'STORYTELLING',
    videoUrl: '/video/demo-5.mp4',
    views: '500K'
  }
];

function ProjectCard({ project, index, onClick }: { project: typeof projects[0]; index: number; onClick: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative cursor-pointer"
      onClick={onClick}
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 2;
        }
      }}
    >
      <div className="relative overflow-hidden rounded-3xl bg-white/5">
        <div className="aspect-[16/10] md:aspect-auto">
          <video 
            ref={videoRef}
            src={`${project.videoUrl}#t=2`}
            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 min-h-[300px] md:min-h-[400px]"
            muted
            loop
            playsInline
            preload="metadata"
          />
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center scale-100 md:scale-75 group-hover:scale-100 transition-transform duration-300 shadow-xl">
            <Play size={24} fill="currentColor" />
          </div>
        </div>

        <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

        <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between pointer-events-none">
          <div className="transform translate-y-0 md:translate-y-4 opacity-100 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <span className="text-[10px] font-bold tracking-widest text-white/60 mb-1 block uppercase">
              {project.category}
            </span>
            <h3 className="text-xl md:text-2xl font-bold leading-tight uppercase">
              {project.title}
            </h3>
          </div>
          <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold border border-white/5 shrink-0 ml-4">
            {project.views}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function VideoModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  const [muted, setMuted] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-2xl"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative max-w-[95vw] max-h-[90vh] bg-black border border-white/10 rounded-2xl md:rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,1)] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 transition-colors flex items-center justify-center backdrop-blur-md border border-white/10"
        >
          <X size={20} />
        </button>

        <div className="relative flex-1 min-h-0 bg-neutral-900">
          <video
            src={project.videoUrl}
            className="w-full h-full max-h-[70vh] object-contain"
            autoPlay
            controls
            muted={muted}
            playsInline
          />
          <button
            onClick={() => setMuted(!muted)}
            className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 transition-colors flex items-center justify-center backdrop-blur-md z-10"
          >
            {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
        </div>
        
        <div className="p-6 bg-white/[0.02] border-t border-white/5 shrink-0">
          <div className="flex items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-1 block">
                {project.category}
              </span>
              <h3 className="text-xl md:text-2xl font-black">{project.title}</h3>
            </div>
            <div className="bg-white/5 px-4 py-2 rounded-xl text-xs font-bold border border-white/5 whitespace-nowrap">
              {project.views} TOTAL VIEWS
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="work" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">SELECTED WORK</h2>
          <button className="hidden md:flex items-center gap-2 text-sm font-bold text-white/50 hover:text-white transition-colors">
            VIEW ALL PROJECTS <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index} 
              onClick={() => setSelectedProject(project)} 
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <VideoModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
