'use client';

import { motion } from 'framer-motion';
import { Quote, TrendingUp, Users } from 'lucide-react';

const creators = [
  {
    name: 'Frenciel Bill',
    handle: '@fren.ciel',
    role: 'Informational Content Creator (25k+ followers)',
    content: "Mintu's editing style is revolutionary. My average view duration increased by 2.5 minutes since we started working together. He doesn't just cut; he builds a narrative.",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    stats: { views: '4.3M', growth: '+28%' }
  },
  {
    name: 'Sarah Chen',
    handle: '@sarahvlogs',
    role: 'Lifestyle Creator',
    content: "Finding an editor who understands emotional pacing is rare. Mintu brings a cinematic soul to my vlogs that keeps the audience hooked from the first second to the last.",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    stats: { views: '1.2M', growth: '+45%' }
  },
  {
    name: 'Marcus Thorne',
    handle: '@marcustech',
    role: 'Documentary Filmmaker',
    content: "A DaVinci Resolve virtuoso. The color grading and sound design are Hollywood caliber. He transformed my raw footage into a high-stakes masterpiece.",
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
    stats: { views: '950K', growth: '+15%' }
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-6 md:px-12 bg-black overflow-hidden">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {creators.map((creator, index) => (
            <motion.div
              key={creator.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col p-8 md:p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500"
            >
              <div className="flex items-center gap-5 mb-8">
                <div className="relative">
                  <img
                    src={creator.avatar}
                    alt={creator.name}
                    className="w-16 h-16 rounded-2xl object-cover border border-white/10"
                  />
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-black border border-white/10 rounded-full flex items-center justify-center">
                    <Quote size={14} className="text-white/40" />
                  </div>
                </div>
                <div>
                  <h4 className="font-black text-xl leading-tight">{creator.name}</h4>
                  <p className="text-xs text-white/40 font-mono tracking-wider uppercase mt-1">{creator.handle}</p>
                </div>
              </div>

              <div className="flex-1">
                <p className="text-lg md:text-xl text-white/70 leading-relaxed font-medium italic mb-10">
                  "{creator.content}"
                </p>
              </div>

              <div className="pt-8 border-t border-white/5">
                <p className="text-[10px] font-black tracking-[0.2em] text-white/20 uppercase mb-4">Channel Impact</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                      <Users size={14} className="text-white/40" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">{creator.stats.views}</p>
                      <p className="text-[8px] font-bold text-white/20 uppercase tracking-widest">Reach</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                      <TrendingUp size={14} className="text-green-500/60" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-green-500">{creator.stats.growth}</p>
                      <p className="text-[8px] font-bold text-white/20 uppercase tracking-widest">Growth</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-10 right-10 opacity-[0.03] pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-700">
                <Quote size={80} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
