'use client';

import { useRef } from 'react';
import { ArrowRight, Play, ChevronsDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const HeroBackup = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={heroRef} className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image/Video with Parallax */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0f172a] z-10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-10"></div>
      </motion.div>

      <motion.div style={{ y: textY, opacity }} className="container mx-auto px-4 z-20 relative text-center">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 hover:bg-white/20 transition-colors cursor-pointer group"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ids-orange opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-ids-orange"></span>
          </span>
          <span className="text-xs font-semibold tracking-wide uppercase text-white/90">New: Hologram Technology 2.0</span>
          <ArrowRight size={12} className="text-white/60 group-hover:translate-x-1 transition-transform" />
        </motion.div>

        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-9xl font-black text-white tracking-tighter mb-8 leading-[0.9]"
        >
          Empower your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-ids-blue via-ids-yellow to-ids-orange animate-gradient-x">
            digital presence.
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-12 leading-relaxed font-light"
        >
          Certify your brand with cutting-edge holographic ID solutions. The power of intelligent automation for your work.
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="w-full sm:w-auto px-10 py-5 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all transform hover:-translate-y-1 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            Start Building Now
          </button>
          <button className="w-full sm:w-auto px-10 py-5 bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-3 group">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play size={12} className="text-white ml-0.5" fill="currentColor" />
            </div>
            View Case Studies
          </button>
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
      >
        <ChevronsDown className="text-white w-8 h-8" />
      </motion.div>
    </div>
  );
};
