'use client';

import { useRef } from 'react';
import { Cpu, Printer, Shield, CreditCard, ScanFace, Car, Key, Flag, Radio, Server, Anchor, Wifi } from 'lucide-react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const partners = [
  { name: "NXP Semiconductors", icon: Cpu, category: "Chip Technology" },
  { name: "Zebra Technologies", icon: Printer, category: "Printing Solutions" },
  { name: "Thales Group", icon: Shield, category: "Digital Security" },
  { name: "Mastercard", icon: CreditCard, category: "Payments" },
  { name: "Regula Forensics", icon: ScanFace, category: "Identity Verification" },
  { name: "Park+", icon: Car, category: "Smart Parking" },
  { name: "Sunfre", icon: Key, category: "Access Barriers" },
  { name: "Sport Systems", icon: Flag, category: "Race Management" },
  { name: "HUAYUAN", icon: Radio, category: "RFID Inlays" },
  { name: "Gemalto", icon: Server, category: "Digital Identity" },
  { name: "Daphne Systems", icon: Wifi, category: "RFID Solutions" },
  { name: "Goldantell", icon: Anchor, category: "Turnstiles" },
];

export const PartnersSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={sectionRef} className="py-20 bg-card border-y border-border relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="container mx-auto px-4 mb-12 text-center relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-secondary border border-border mb-4 md:mb-6">
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent" />
          <span className="text-foreground font-poppins text-xs md:text-sm tracking-widest uppercase">Our Technology Stack</span>
        </div>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-foreground">Powered by <span className="poppins text-transparent bg-clip-text bg-gradient-to-r from-[#9cd0ec] via-[#fed356] to-[#ee6d31]">Industry</span> Leaders</h3>
      </motion.div>

      {/* Scrolling Marquee with Parallax */}
      <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <motion.div style={{ x }} className="flex w-max animate-scroll">
          {[...partners, ...partners].map((partner, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 0.5, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: i * 0.02 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              className="flex flex-col items-center justify-center gap-3 mx-8 min-w-[160px] cursor-pointer transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary border border-border flex items-center justify-center text-foreground-muted hover:text-primary hover:bg-primary/30 hover:border-primary/50 transition-all shadow-lg">
                <partner.icon size={32} />
              </div>
              <div className="text-center">
                <span className="font-bold text-lg text-foreground-secondary hover:text-foreground transition-colors block">{partner.name}</span>
                <span className="text-xs text-foreground-muted uppercase tracking-wide hover:text-primary transition-colors">{partner.category}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
