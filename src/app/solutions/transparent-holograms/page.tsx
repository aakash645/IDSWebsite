'use client';

import Link from 'next/link';
import { FadeIn } from '@/components/ui';
import { Breadcrumb, SolutionSidebar, SolutionHero, hologramPrintingMenu } from '@/components/solutions';
import { CircleCheck, ArrowRight } from 'lucide-react';

const capabilities = [
  { title: 'Real-time Analytics & Reporting', desc: 'Advanced capability enabled by our core platform.' },
  { title: 'Seamless API Integration', desc: 'Advanced capability enabled by our core platform.' },
  { title: 'Enterprise-Grade Security', desc: 'Advanced capability enabled by our core platform.' },
  { title: '24/7 System Monitoring', desc: 'Advanced capability enabled by our core platform.' },
  { title: 'Scalable Architecture', desc: 'Advanced capability enabled by our core platform.' },
  { title: 'Automated Workflows', desc: 'Advanced capability enabled by our core platform.' },
];

export default function TransparentHologramsPage() {
  const pageTitle = 'Transparent Holograms';
  const parentService = 'Hologram Label Printing';

  return (
    <div className="pt-24 min-h-screen bg-[#0f172a] text-white">
      <Breadcrumb pageTitle={pageTitle} parentService={parentService} parentPath="/hologram-printing" />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <SolutionSidebar menuTitle={parentService} sections={hologramPrintingMenu} />

          <main className="w-full lg:w-3/4 order-1 lg:order-2">
            <FadeIn>
              <SolutionHero 
                title={pageTitle} 
                image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
              />

              <div className="prose prose-invert prose-lg max-w-none mb-12">
                <p className="lead text-2xl text-gray-300 font-light leading-relaxed">
                  IDS SmartTech delivers cutting-edge <strong>{pageTitle}</strong> solutions designed to optimize your {parentService} infrastructure.
                </p>
                <p className="text-gray-400">
                  Our enterprise-grade implementation ensures scalability, security, and operational excellence.
                </p>
              </div>

              <h3 className="text-2xl font-bold mb-6">Key Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {capabilities.map((cap, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-colors">
                    <div className="mt-1 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-ids-blue shrink-0">
                      <CircleCheck size={14} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{cap.title}</h4>
                      <p className="text-sm text-gray-400">{cap.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-white/5 to-transparent border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px]"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to deploy {pageTitle}?</h3>
                  <p className="text-gray-300 mb-8 max-w-2xl">Schedule a consultation with our solution architects.</p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/contact" className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2">
                      Request Demo <ArrowRight size={18} />
                    </Link>
                    <button className="bg-transparent border border-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                      Download Datasheet
                    </button>
                  </div>
                </div>
              </div>
            </FadeIn>
          </main>
        </div>
      </div>
    </div>
  );
}
