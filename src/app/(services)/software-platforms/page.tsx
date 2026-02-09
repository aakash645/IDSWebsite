'use client';

import Link from 'next/link';
import { Code, Globe, Layout, Database, Monitor, Cloud } from 'lucide-react';
import { FadeIn } from '@/components/ui';

export default function SoftwarePlatformsPage() {
  const solutions = [
    { title: "Enterprise Software", icon: Database, desc: "Custom software solutions for complex business needs.", path: "/solutions/tms" },
    { title: "Web Development", icon: Globe, desc: "Modern, responsive websites and web applications.", path: "/solutions/web-development" },
    { title: "E-Commerce", icon: Monitor, desc: "Full-featured online stores and marketplaces.", path: "/solutions/ecommerce" },
    { title: "UI/UX Design", icon: Layout, desc: "User-centered design for exceptional experiences.", path: "/solutions/ui-ux" },
    { title: "Cloud Platforms", icon: Cloud, desc: "Scalable cloud infrastructure and DevOps.", path: "/solutions/access-software" },
    { title: "Custom Development", icon: Code, desc: "Tailored solutions built from the ground up.", path: "/solutions/citizen-enrollment" }
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#0f172a] text-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" 
            alt="Software Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/90 via-transparent to-[#0f172a]"></div>
        </div>

        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-400/30 mb-8">
                <Code size={16} className="text-orange-400" />
                <span className="text-xs font-bold tracking-widest uppercase text-orange-100">Digital Excellence</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                Software & <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-red-500">
                  Platforms
                </span>
              </h1>
              
              <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Build your digital empire with cutting-edge software solutions. From enterprise platforms to consumer apps, we deliver excellence.
              </p>

              <div className="flex justify-center gap-4">
                <button className="px-8 py-3 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-full transition-all">
                  Start Project
                </button>
                <Link href="/contact" className="px-8 py-3 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-bold rounded-full transition-colors">
                  Get Quote
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-[#0f172a]">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Services</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">End-to-end software development and digital transformation.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 50}>
                <Link href={item.path} className="block h-full">
                  <div className="p-8 rounded-3xl bg-[#1e293b]/50 border border-white/5 hover:border-orange-500/30 hover:bg-orange-900/10 transition-all group h-full">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 transition-transform">
                      <item.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-200 transition-colors">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    <div className="mt-6 flex items-center text-ids-orange text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more <span className="ml-1">→</span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
