'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView, MotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    category: 'SMART ID SOLUTIONS',
    industry: 'GOVERNMENT',
    title: 'Aadhaar-enabled citizen enrollment deployed across 500+ centers nationwide.',
    description: 'Delivered end-to-end biometric enrollment infrastructure with fingerprint, iris, and face capture capabilities, achieving 99.9% accuracy in identity verification.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    link: '/solutions/aadhaar-kyc',
  },
  {
    id: 2,
    category: 'IoT & ROBOTICS',
    industry: 'TRANSPORTATION',
    title: 'Fully automated driving test tracks deployed for 15+ RTOs across India.',
    description: 'Implemented robotic driving test systems with IoT sensors, reducing manual intervention by 95% and enabling transparent, tamper-proof license testing.',
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=2074&auto=format&fit=crop',
    link: '/solutions/driving-test-robotics',
  },
  {
    id: 3,
    category: 'RFID & ACCESS CONTROL',
    industry: 'ENTERPRISE',
    title: 'Unified access management system for 50+ corporate facilities.',
    description: 'Integrated RFID smart cards with biometric authentication, enabling seamless access control, time attendance, and real-time security monitoring.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop',
    link: '/solutions/access-software',
  },
];

const CaseStudyCard = ({ 
  study, 
  index, 
  range,
  targetScale,
  progress 
}: { 
  study: typeof caseStudies[0]; 
  index: number; 
  range: [number, number];
  targetScale: number;
  progress: MotionValue<number>;
}) => {
  const cardRef = useRef(null);
  
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div 
      ref={cardRef}
      className="h-[70vh] flex items-center justify-center sticky top-[15vh]"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        style={{ 
          scale,
          top: `calc(${index * 30}px)`,
        }}
        className="relative w-full max-w-6xl mx-auto group"
      >
        <Link href={study.link} className="block">
          <div 
            className="relative h-[400px] sm:h-[450px] md:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            style={{ 
              transformOrigin: 'top center',
            }}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />
            </div>
            
            {/* Tags - Top Left */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 flex flex-wrap gap-2 md:gap-3">
              <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] md:text-xs font-bold bg-primary text-primary-foreground uppercase tracking-wide">
                {study.category}
              </span>
              <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] md:text-xs font-bold bg-background text-foreground uppercase tracking-wide">
                {study.industry}
              </span>
            </div>

            {/* Content - Bottom Left */}
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 lg:p-10">
              <div className="max-w-2xl">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold font-poppins text-white mb-2 md:mb-4 leading-tight">
                  {study.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed font-poppins mb-4 md:mb-6 max-w-xl line-clamp-2 md:line-clamp-3">
                  {study.description}
                </p>
              </div>
            </div>

            {/* CTA Button - Bottom Right */}
            <div className="absolute bottom-5 right-5 md:bottom-8 md:right-8 lg:bottom-10 lg:right-10">
              <div className="flex items-center gap-2 md:gap-3 bg-background text-foreground font-bold font-poppins px-4 py-2 md:px-6 md:py-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-xl text-xs md:text-sm lg:text-base">
                <span>View Project</span>
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary flex items-center justify-center">
                  <ArrowUpRight size={12} className="text-primary-foreground" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export const ProvenResultsSection = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section className="bg-[#e8f4fa] relative scroll-smooth">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-64 md:w-96 h-64 md:h-96 bg-accent/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />

      {/* Section Header */}
      <div className="container mx-auto px-4 pt-16 md:pt-20">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-6 md:mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-secondary border border-border mb-4 md:mb-6">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent" />
            <span className="text-foreground font-semibold text-xs md:text-sm tracking-widest uppercase">Our Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins text-foreground">
            Proven <span className="poppins text-transparent font-bold bg-clip-text bg-gradient-to-r from-[#9cd0ec] via-[#fed356] to-[#ee6d31]">Results</span> Across Industries
          </h2>
        </motion.div>
      </div>

      {/* Case Study Cards - Sticky Stack */}
      <div ref={containerRef} className="relative px-4 pb-8">
        {caseStudies.map((study, index) => {
          const targetScale = 1 - ((caseStudies.length - index) * 0.05);
          const rangeStart = index / caseStudies.length;
          const rangeEnd = 1;
          
          return (
            <CaseStudyCard 
              key={study.id} 
              study={study} 
              index={index}
              range={[rangeStart, rangeEnd]}
              targetScale={targetScale}
              progress={scrollYProgress}
            />
          );
        })}
      </div>
    </section>
  );
};
