'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Play } from 'lucide-react';

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-lg border-b border-white/5 md:px-12"
    >
      <Link href="/" className="flex items-center gap-2 group">
        <div className="bg-white text-black p-1 rounded-sm group-hover:scale-110 transition-transform">
          <Play size={18} fill="currentColor" />
        </div>
        <span className="font-bold text-xl tracking-tighter">MINTU SINGH</span>
      </Link>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
        <Link href="#work" className="hover:text-white transition-colors">WORK</Link>
        <Link href="#services" className="hover:text-white transition-colors">SERVICES</Link>
        <Link href="#testimonials" className="hover:text-white transition-colors">CLIENTS</Link>
      </div>

      <Link 
        href="#contact" 
        className="px-5 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-white/90 transition-colors"
      >
        LET'S CHAT
      </Link>
    </motion.nav>
  );
}
