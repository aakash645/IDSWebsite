'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Handshake, Building2, Truck, Fingerprint, Building, Server, Car, Smartphone, Train, Sparkles } from 'lucide-react';

interface Partner {
  id: number;
  title: string;
  icon: React.ElementType;
  color: string;
  isLarge?: boolean;
}

const partners: Partner[] = [
  { id: 1, title: 'Government of India', icon: Building2, color: '#f97316', isLarge: true },
  { id: 2, title: 'Ministry of Transport', icon: Truck, color: '#a855f7' },
  { id: 3, title: 'UIDAI', icon: Fingerprint, color: '#3b82f6' },
  { id: 4, title: 'Smart City', icon: Building, color: '#22c55e' },
  { id: 5, title: 'NIC', icon: Server, color: '#6366f1' },
  { id: 6, title: 'RTO India', icon: Car, color: '#ec4899' },
  { id: 7, title: 'Digital India', icon: Smartphone, color: '#14b8a6' },
  { id: 8, title: 'State Transport', icon: Train, color: '#f59e0b' },
];

export const TrustedBySection = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);

  const largePartner = partners.filter(p => p.isLarge);
  const regularPartners = partners.filter(p => !p.isLarge);

  const PartnerCard = ({ partner, isLarge = false }: { partner: Partner; isLarge?: boolean }) => (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
      transition={{ duration: 0.5, delay: 0.05 * partner.id, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.02, y: -3 }}
      className={`bg-white rounded-2xl flex items-center justify-center gap-3 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 ${
        isLarge ? 'p-8 md:p-10 col-span-2' : 'p-5 md:p-6'
      }`}
    >
      {/* Icon */}
      <partner.icon size={isLarge ? 28 : 22} style={{ color: partner.color }} />
      
      {/* Text */}
      <span className={`font-semibold text-foreground ${isLarge ? 'text-xl md:text-2xl' : 'text-base md:text-lg'}`}>
        {partner.title}
      </span>
    </motion.div>
  );

  return (
    <section ref={containerRef} className="bg-[#e8f4fa] relative py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          
          {/* Left Side - Title & CTA */}
          <motion.div
            ref={sectionRef}
            style={{ y, opacity }}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-32"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-secondary border border-border mb-4 md:mb-6">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent" />
              <span className="text-foreground font-semibold text-xs md:text-sm tracking-widest uppercase">Our Partners</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-poppins md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-12">
              Where Industry<br />
              Leaders <span className="poppins font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9cd0ec] via-[#fed356] to-[#ee6d31]">Unite</span>
            </h2>

            {/* CTA Card */}
            <div className="bg-white  rounded-2xl p-6 max-w-sm shadow-lg">
              <div className="mb-4">
                <Handshake size={32} className="text-primary" />
              </div>
              <p className="text-foreground-muted font-poppins text-sm mb-5">
                Trusted by government bodies and leading organizations across India.
              </p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2 transition-colors"
              >
                Partner With Us
                <Sparkles size={16} />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side - Partner Cards Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            {/* Large Card */}
            {largePartner.map(partner => (
              <PartnerCard key={partner.id} partner={partner} isLarge />
            ))}

            {/* Regular Cards - 2 per row */}
            <div className="grid grid-cols-2 gap-4">
              {regularPartners.slice(0, 2).map(partner => (
                <PartnerCard key={partner.id} partner={partner} />
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {regularPartners.slice(2, 4).map(partner => (
                <PartnerCard key={partner.id} partner={partner} />
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {regularPartners.slice(4, 6).map(partner => (
                <PartnerCard key={partner.id} partner={partner} />
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {regularPartners.slice(6, 8).map(partner => (
                <PartnerCard key={partner.id} partner={partner} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
