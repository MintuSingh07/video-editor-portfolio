'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Play, X, Volume2, VolumeX, TrendingUp, Users } from 'lucide-react';
import { useState, useRef } from 'react';

const creators = [
  {
    name: 'Alex Rivera',
    handle: '@alexedits',
    role: 'Tech Authority (2M+ Subs)',
    content: "Mintu's editing style is revolutionary. My average view duration increased by 2.5 minutes since we started working together. He doesn't just cut; he builds a narrative.",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    stats: { views: '4.3M', growth: '+28%' }
  },
  {
    name: 'Sarah Chen',
    handle: '@sarahvlogs',
    role: 'Lifestyle Creator',
    content: "Finding an editor who understands emotional pacing is rare. Mintu brings a cinematic soul to my vlogs that keeps the audience hooked from the first second to the last.",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    stats: { views: '1.2M', growth: '+45%' }
  },
  {
    name: 'Marcus Thorne',
    handle: '@marcustech',
    role: 'Documentary Filmmaker',
    content: "A DaVinci Resolve virtuoso. The color grading and sound design are Hollywood caliber. He transformed my raw footage into a high-stakes masterpiece.",
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    stats: { views: '950K', growth: '+15%' }
  }
];

function VideoModal({ creator, onClose }: { creator: typeof creators[0]; onClose: () => void }) {
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
        className="relative w-full max-w-6xl bg-black border border-white/10 rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,1)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center backdrop-blur-md"
        >
          <X size={24} />
        </button>

        <div className="grid grid-cols-1 xl:grid-cols-5">
          <div className="xl:col-span-3 relative aspect-video bg-neutral-900">
            <video
              src={creator.videoUrl}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted={muted}
              playsInline
            />
            <button
              onClick={() => setMuted(!muted)}
              className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 transition-colors flex items-center justify-center backdrop-blur-md"
            >
              {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
          </div>

          <div className="xl:col-span-2 p-10 flex flex-col justify-center">
            <div className="flex items-center gap-5 mb-8">
              <img
                src={creator.avatar}
                alt={creator.name}
                className="w-20 h-20 rounded-2xl object-cover border-2 border-white/10"
              />
              <div>
                <h3 className="text-2xl font-black">{creator.name}</h3>
                <p className="text-white/40 font-mono text-sm uppercase tracking-wider">{creator.role}</p>
              </div>
            </div>

            <Quote className="w-10 h-10 text-white/10 mb-6" />
            <p className="text-xl text-white/80 leading-relaxed italic mb-10">
              "{creator.content}"
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="flex items-center gap-2 text-white/40 mb-2">
                  <Users size={14} />
                  <span className="text-[10px] font-bold tracking-widest uppercase">Reach</span>
                </div>
                <p className="text-2xl font-black">{creator.stats.views}</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="flex items-center gap-2 text-green-500/60 mb-2">
                  <TrendingUp size={14} />
                  <span className="text-[10px] font-bold tracking-widest uppercase">Growth</span>
                </div>
                <p className="text-2xl font-black text-green-500">{creator.stats.growth}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Testimonials() {
  const [selectedCreator, setSelectedCreator] = useState<typeof creators[0] | null>(null);

  return (
    <section id="testimonials" className="py-32 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-6"
          >
            Social Proof
          </motion.div>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 uppercase">
            Trusted by the <span className="gradient-text">Top 1%</span>
          </h2>
          <p className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Join the creators who have scaled their channels and retention with cinematic storytelling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {creators.map((creator, index) => (
            <motion.div
              key={creator.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col"
            >
              <div 
                className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden cursor-pointer mb-8"
                onClick={() => setSelectedCreator(creator)}
              >
                <img
                  src={creator.thumbnail}
                  alt={creator.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500">
                    <Play size={32} fill="white" className="ml-1.5" />
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={creator.avatar} alt={creator.name} className="w-12 h-12 rounded-xl object-cover border border-white/20" />
                    <div>
                      <h4 className="font-black text-lg">{creator.name}</h4>
                      <p className="text-xs text-white/50 font-mono tracking-wider">{creator.handle}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-4">
                <Quote className="w-6 h-6 text-white/20 mb-4" />
                <p className="text-white/60 leading-relaxed italic text-sm line-clamp-3 mb-4">
                  "{creator.content}"
                </p>
                <div className="flex items-center gap-4 text-[10px] font-black tracking-widest text-white/30">
                  <span className="flex items-center gap-1.5"><Users size={12} /> {creator.stats.views} REACH</span>
                  <div className="w-1 h-1 rounded-full bg-white/10" />
                  <span className="text-green-500/60 uppercase">{creator.stats.growth} GROWTH</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCreator && (
          <VideoModal creator={selectedCreator} onClose={() => setSelectedCreator(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
