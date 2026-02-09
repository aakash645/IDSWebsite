'use client';

import Link from 'next/link';
import { Calendar } from 'lucide-react';
import { FadeIn } from '@/components/ui';
import { Globe } from '@/components/ui/globe';
import type { COBEOptions } from 'cobe';

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.6,
  mapSamples: 16000,
  mapBrightness: 6,
  baseColor: [0.61, 0.82, 0.93] as [number, number, number], // IDS Blue #9cd0ec
  markerColor: [0.93, 0.43, 0.19] as [number, number, number], // IDS Orange #ee6d31
  glowColor: [0.61, 0.82, 0.93] as [number, number, number], // IDS Blue glow
  markers: [
    { location: [28.6139, 77.209], size: 0.1 }, // Delhi
    { location: [19.076, 72.8777], size: 0.08 }, // Mumbai
    { location: [13.0827, 80.2707], size: 0.06 }, // Chennai
    { location: [12.9716, 77.5946], size: 0.07 }, // Bangalore
    { location: [22.5726, 88.3639], size: 0.06 }, // Kolkata
    { location: [17.385, 78.4867], size: 0.05 }, // Hyderabad
    { location: [23.0225, 72.5714], size: 0.05 }, // Ahmedabad
    { location: [26.9124, 75.7873], size: 0.04 }, // Jaipur
  ],
};

export const CTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <FadeIn>
          <div className="relative rounded-[3rem] overflow-hidden min-h-[500px] shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #9cd0ec 0%, #c5e3f0 25%, #fed356 50%, #f5a04a 75%, #ee6d31 100%)'
            }}
          >
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent z-[1]"></div>
            
            {/* Two Column Layout */}
            <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[500px]">
              {/* Left - Content */}
              <div className="flex flex-col justify-center px-8 md:px-12 lg:px-16 py-12">
                <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/80 backdrop-blur-sm border border-white/50 mb-4 md:mb-6 w-fit">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent" />
                  <span className="text-foreground font-semibold text-xs md:text-sm tracking-widest uppercase">Future Ready</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight text-black drop-shadow-md">
                  Secure your <br />
                  <span className="text-black">
                    Digital Future
                  </span>
                </h2>
                
                <p className="text-base md:text-lg text-black mb-8 max-w-lg font-light">
                  Join 500+ enterprises leveraging IDS SmartTech for next-gen identity, IoT, and robotic solutions across India.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://go.keka.com/attendance-management-software-india"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-foreground font-bold text-base px-8 py-4 rounded-full hover:bg-white/90 transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2"
                  >
                    Schedule Meeting <Calendar size={18} />
                  </a>
                  <Link href="/products" className="bg-transparent border-2 border-white text-white font-bold text-base px-8 py-4 rounded-full hover:bg-white hover:text-foreground transition-all text-center">
                    View Solutions
                  </Link>
                </div>
              </div>

              {/* Right - Globe */}
              <div className="relative flex items-center justify-center lg:pr-8">
                <div className="relative w-full h-[400px] lg:h-full flex items-center justify-center">
                  <Globe 
                    config={GLOBE_CONFIG}
                    className="w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default CTASection;
