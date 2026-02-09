import { Hero } from '@/components/home/Hero';
import { PartnersSection } from '@/components/home/PartnersSection';
import { OurExpertiseSection } from '@/components/home/OurExpertiseSection';
import { ProvenResultsSection } from '@/components/home/ProvenResultsSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { OurApproachSection } from '@/components/home/OurApproachSection';
import { TrustedBySection } from '@/components/home/TrustedBySection';
import { CTASection } from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <div className="bg-background relative">
      {/* Zigzag Background Pattern using Logo Colors */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Zigzag stripes */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" preserveAspectRatio="none">
          <defs>
            <pattern id="zigzag" x="0" y="0" width="100" height="50" patternUnits="userSpaceOnUse">
              <path d="M0 25 L25 0 L50 25 L75 0 L100 25 L100 50 L75 25 L50 50 L25 25 L0 50 Z" fill="hsl(var(--primary))" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#zigzag)" />
        </svg>
        {/* Gradient blobs */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-highlight/5 rounded-full blur-[150px] translate-x-1/2" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/3 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] translate-y-1/2" />
      </div>
      
      <div className="relative z-10">
        <Hero />
        <PartnersSection />
        <OurExpertiseSection />
        <TestimonialsSection />
        <ProvenResultsSection />
        <OurApproachSection />
        <TrustedBySection />
        <CTASection />
      </div>
    </div>
  );
}
