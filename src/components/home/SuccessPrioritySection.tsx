'use client';

import { Check, Gift, Hourglass } from 'lucide-react';
import { FadeIn } from '@/components/ui';
import type { PriorityListItemProps } from '@/types';

const PriorityListItem = ({ title, description, isActive }: PriorityListItemProps) => (
  <div className="flex gap-8 relative z-10 group items-start">
    <div className="shrink-0 flex justify-center w-16 pt-1">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.4)]' : 'bg-white/20 text-white/40 group-hover:bg-ids-blue group-hover:text-black'}`}>
        <Check size={16} strokeWidth={4} />
      </div>
    </div>
    
    <div className="pb-12 group-last:pb-0 pt-0.5">
      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-ids-blue transition-colors">{title}</h3>
      <p className="text-gray-400 text-lg leading-relaxed">{description}</p>
    </div>
  </div>
);

export const SuccessPrioritySection = () => {
  return (
    <section className="py-24 bg-[#0b1120] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column: Image */}
          <FadeIn direction="right">
            <div className="relative h-[600px] w-full flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-ids-blue/20 to-purple-500/20 rounded-full blur-[100px] opacity-60 animate-pulse-slow"></div>
              
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop" 
                  alt="VR Analytics" 
                  className="relative z-10 w-auto h-[500px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 rounded-3xl"
                />
                
                <div className="absolute top-20 right-10 md:right-20 bg-[#1e293b] p-4 rounded-2xl border border-white/10 shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                  <Hourglass className="text-ids-yellow w-8 h-8" />
                </div>
                <div className="absolute bottom-40 left-0 md:left-10 bg-[#1e293b] p-4 rounded-2xl border border-white/10 shadow-xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                  <Gift className="text-ids-orange w-8 h-8" />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Animated List */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-[#1e293b] rounded-full border border-white/5 shadow-inner"></div>

            <div className="space-y-4 relative z-10 py-10">
              <FadeIn direction="up" delay={100}>
                <PriorityListItem 
                  title="Your success is our top priority"
                  description="We align our technical expertise with your business goals. Our success metric is defined solely by the measurable value we deliver to your organization."
                  isActive={false}
                />
              </FadeIn>

              <FadeIn direction="up" delay={300}>
                <PriorityListItem 
                  title="Let's Make Things Happen!"
                  description="From rapid prototyping to full-scale deployment, our agile methodology ensures we turn concepts into functioning reality faster than the competition."
                  isActive={true}
                />
              </FadeIn>

              <FadeIn direction="up" delay={500}>
                <PriorityListItem 
                  title="Moving businesses forward"
                  description="Future-proof your infrastructure with scalable IoT and software solutions designed to adapt as your enterprise grows and market needs evolve."
                  isActive={true}
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
