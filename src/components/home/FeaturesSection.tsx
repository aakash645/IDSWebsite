'use client';

import Link from 'next/link';
import { Tag, Lightbulb, Bell, ThumbsUp, MessageSquare, ArrowUpRight } from 'lucide-react';
import { FadeIn } from '@/components/ui';
import type { FeatureCardProps } from '@/types';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description,
  iconColor,
  iconBg
}: FeatureCardProps) => (
  <div className="bg-[#111827] rounded-3xl p-8 hover:bg-[#1f2937] transition-all duration-300 group border border-white/5 flex flex-col items-start h-full">
    <div className={`w-14 h-14 rounded-full ${iconBg} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform`}>
      <Icon className={iconColor} size={28} />
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </div>
);

export const FeaturesSection = () => {
  return (
    <section className="py-24 bg-[#0f172a] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <FadeIn>
          <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 mb-6">
                <Tag size={12} className="text-indigo-400" />
                <span className="text-xs font-bold tracking-widest uppercase text-indigo-300">Special Features</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                Transition from brick and mortar to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">digital powerhouse!</span> 😍
              </h2>
            </div>
            <div className="max-w-md mt-4 lg:mt-16">
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                Leverage our cutting-edge IoT and Identity solutions to transform your physical infrastructure into a smart, data-driven digital ecosystem.
              </p>
              <Link href="/products" className="inline-flex items-center text-white font-bold border-b border-white pb-1 hover:text-indigo-400 hover:border-indigo-400 transition-colors">
                Discover More <ArrowUpRight size={18} className="ml-1" />
              </Link>
            </div>
          </div>
        </FadeIn>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FadeIn delay={100}>
            <FeatureCard 
              icon={Lightbulb}
              iconBg="bg-purple-500/20"
              iconColor="text-purple-400"
              title="Turning Data into Intelligence"
              description="Advanced analytics turning raw IoT data into actionable business insights for smarter decision making."
            />
          </FadeIn>

          <FadeIn delay={200}>
            <FeatureCard 
              icon={Bell}
              iconBg="bg-orange-500/20"
              iconColor="text-orange-400"
              title="Real-time Security Alerts"
              description="Instant notifications for unauthorized access or system anomalies, keeping your premises secure 24/7."
            />
          </FadeIn>

          <FadeIn delay={300}>
            <FeatureCard 
              icon={ThumbsUp}
              iconBg="bg-blue-500/20"
              iconColor="text-blue-400"
              title="Transform Ops with Automation"
              description="Streamline complex workflows and reduce manual overhead using our autonomous robotics solutions."
            />
          </FadeIn>

          <FadeIn delay={400}>
            <FeatureCard 
              icon={MessageSquare}
              iconBg="bg-cyan-500/20"
              iconColor="text-cyan-400"
              title="Seamless Communication"
              description="Integrated dashboards for team collaboration, ensuring everyone stays aligned with real-time reporting."
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
