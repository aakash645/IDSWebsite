'use client';

import { useRef, useState, useCallback } from 'react';
import { motion, useInView, useAnimationFrame } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Working with IDS SmartTech gave us back valuable time, reduced expenses, and simplified everything. Their team understood our challenges from day one and delivered solutions that truly work.",
    name: 'Rajesh Kumar',
    role: 'CTO, State Transport Authority',
    initials: 'RK',
  },
  {
    id: 2,
    quote: "Their expertise gave us the clarity to make smarter decisions and accelerate our digital transformation. The implementation was seamless and the support has been exceptional.",
    name: 'Priya Sharma',
    role: 'Director, National ID Authority',
    initials: 'PS',
  },
  {
    id: 3,
    quote: "What impressed us most was how quickly their strategies turned into real results across the organization. We saw measurable improvements within the first quarter.",
    name: 'Anil Mehta',
    role: 'CEO, Manufacturing Corp',
    initials: 'AM',
  },
  {
    id: 4,
    quote: "Their biometric solutions gave us the security we needed with minimal friction for our employees. The integration was smooth and adoption was remarkably fast.",
    name: 'Sunita Patel',
    role: 'CHRO, Tech Enterprise',
    initials: 'SP',
  },
  {
    id: 5,
    quote: "IDS SmartTech gave us clarity when we needed it most—and results that exceeded expectations. Their team's dedication to our success was evident throughout the project.",
    name: 'Vikram Singh',
    role: 'Operations Head, Logistics Co',
    initials: 'VS',
  },
  {
    id: 6,
    quote: "The IoT solutions transformed our warehouse operations with real-time visibility and control. We've reduced errors by 80% and improved efficiency across the board.",
    name: 'Deepika Nair',
    role: 'VP Operations, Retail Group',
    initials: 'DN',
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="group flex-shrink-0 w-[300px] sm:w-[320px] md:w-[360px] lg:w-[400px]">
      <div className="relative h-[215px] sm:h-[235px] md:h-[255px] rounded-2xl overflow-hidden bg-card border border-border shadow-lg p-5 md:p-6 flex flex-col transition-all duration-300 hover:border-primary/30 hover:shadow-xl">
        {/* Quote and Message */}
        <div className="flex gap-4 flex-1">
          <div className="flex-shrink-0">
            <Quote size={24} className="text-primary/60" />
          </div>
          <p className="text-foreground-secondary text-sm md:text-base leading-relaxed line-clamp-4">
            {testimonial.quote}
          </p>
        </div>

        {/* Author Info */}
        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center shadow-lg">
            <span className="text-primary-foreground font-bold font-poppins text-base">{testimonial.initials}</span>
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-foreground font-poppins text-sm md:text-base">{testimonial.name}</h4>
            <p className="text-foreground-mutednd-muted font-poppins text-xs md:text-sm">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const xRef = useRef(0);

  // Auto-scroll using useAnimationFrame for smooth animation
  useAnimationFrame((time, delta) => {
    if (!scrollRef.current || isPaused || isDragging) return;
    
    const scrollContainer = scrollRef.current;
    const maxScroll = scrollContainer.scrollWidth / 3; // Since we have 3x testimonials
    
    xRef.current += 0.5; // Speed of scroll
    
    if (xRef.current >= maxScroll) {
      xRef.current = 0;
    }
    
    scrollContainer.scrollLeft = xRef.current;
  });

  // Mouse drag handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
    xRef.current = scrollRef.current.scrollLeft;
  }, [isDragging, startX, scrollLeft]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsDragging(false);
    setIsPaused(false);
  }, []);

  // Touch handlers for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
    xRef.current = scrollRef.current.scrollLeft;
  }, [isDragging, startX, scrollLeft]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
    setIsPaused(false);
  }, []);

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-highlight/10 rounded-full blur-[100px] md:blur-[150px]" />
      <div className="absolute bottom-0 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-[100px] md:blur-[150px]" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10 md:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-secondary border border-border mb-4 md:mb-6">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent" />
            <span className="text-foreground font-semibold font-poppins text-xs md:text-sm tracking-widest uppercase">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-foreground">
            What Our <span className="poppins text-transparent bg-clip-text bg-gradient-to-r from-[#9cd0ec] via-[#fed356] to-[#ee6d31]">Clients</span> Say
          </h2>
        </motion.div>
      </div>

      {/* Horizontal Auto-Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto pb-6 md:pb-8 px-4 md:px-8 select-none"
        style={{ 
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Triple testimonials for seamless loop */}
        {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
          <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
        ))}
      </div>

      {/* Scroll hint text */}
      <div className="container mx-auto px-4 mt-6 md:mt-8">
        <p className="text-center text-foreground-muted text-xs md:text-sm">
          Hover to pause • Drag to scroll
        </p>
      </div>
    </section>
  );
};
