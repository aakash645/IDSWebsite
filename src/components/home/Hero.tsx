'use client';

import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={heroRef} className="relative min-h-[100vh] flex items-end overflow-hidden">
      {/* Background Video */}
      <motion.div 
        style={{ scale: backgroundScale }} 
        className="absolute inset-0 z-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/final.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2940&auto=format&fit=crop" 
            alt="Technology background" 
            className="w-full h-full object-cover"
          />
        </video>
        {/* Overlays removed per request */}
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ y: textY, opacity }} 
        className="container mx-auto max-w-7xl px-4 z-20 relative pb-16 md:pb-24 lg:pb-32"
      >
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-20">
          {/* Left - Main Title */}
          <div className="lg:w-1/2">
            <motion.h1 
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl sm:text-3xl md:text-8xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight"
            >  
              <span className="Calibri font-bold">Empowering</span> Digital Identity{' '}
              <br className="hidden sm:block" />
              & <span className="Verdana text-transparent bg-clip-text bg-gradient-to-r from-[#9cd0ec] via-[#fed356] to-[#ee6d31]">Secure Access</span>{' '}
              <br className="hidden sm:block" />
              <span className="Verdana text-accent"> Solutions</span>
            </motion.h1>
          </div>

          {/* Right - Description & CTA */}
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:w-2/5"
          >
            <p className="text-white/80 text-base md:text-lg lg:text-xl leading-relaxed mb-8 max-w-lg">
              IDS SmartTech delivers cutting-edge biometric systems, smart card solutions, RFID technology, and IoT automation to empower government and enterprises across India.
            </p>
            
            <a
              href="https://go.keka.com/attendance-management-software-india?utm_source=paidsearch&utm_campaign=GS_Attendance_India&utm_medium=google&utm_content=&utm_term=attendance%20marking%20system&hsa_acc=2719990364&hsa_cam=21025353964&hsa_grp=184919522347&hsa_ad=761638300479&hsa_src=g&hsa_tgt=kwd-307083052541&hsa_kw=attendance%20marking%20system&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gad_source=1&gad_campaignid=21025353964&gbraid=0AAAAADM0n9SPExZp5fLVBsU0CKULK31k7&gclid=Cj0KCQiAjJTKBhCjARIsAIMC44-XRk91OpIus3JKQvih-8h0PSPdV6TO8PpUJBM_9DUsTFpTfcWj6wAaAqyAEALw_wcB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-card text-foreground font-bold px-6 py-3.5 md:px-8 md:py-4 rounded-full hover:bg-primary transition-all duration-300 group text-sm md:text-base"
            >
              <span>Schedule a Meeting</span>
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-accent group-hover:bg-foreground flex items-center justify-center transition-colors">
                <ArrowUpRight size={16} className="text-white transition-colors" />
              </div>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
