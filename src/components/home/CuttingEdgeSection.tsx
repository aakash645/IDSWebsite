'use client';

import { Zap, Shield, Cpu, Globe } from 'lucide-react';
import { FadeIn } from '@/components/ui';

export const CuttingEdgeSection = () => {
  return (
    <section className="py-24 bg-[#0b1120] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute -left-20 top-40 w-72 h-72 bg-ids-blue/10 rounded-full blur-[100px]"></div>
      <div className="absolute -right-20 bottom-40 w-72 h-72 bg-ids-orange/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-ids-blue"></span>
                <span className="text-xs font-bold tracking-widest uppercase text-gray-300">Future Ready</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                Cutting-edge <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ids-blue via-ids-yellow to-ids-orange">
                  Innovation
                </span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We stay ahead of the curve so you don&apos;t have to. Our R&D team constantly evaluates emerging technologies to ensure your infrastructure is built on the most robust, scalable, and secure foundations available.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "AI & Machine Learning", desc: "Predictive maintenance and automated decision making." },
                  { title: "Blockchain Security", desc: "Immutable audit logs for high-compliance environments." },
                  { title: "Edge Computing", desc: "Real-time processing with zero latency." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Zap size={20} className="text-ids-yellow" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Visual/Image */}
          <div className="w-full lg:w-1/2">
            <FadeIn direction="left">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-ids-blue to-ids-orange opacity-20 blur-xl rounded-3xl transform rotate-3"></div>
                <div className="relative bg-[#1e293b] border border-white/10 rounded-3xl p-8 overflow-hidden">
                  <div className="absolute top-0 right-0 p-12 opacity-5">
                    <Cpu size={200} />
                  </div>
                  <div className="grid grid-cols-2 gap-4 relative z-10">
                    <div className="bg-black/40 p-6 rounded-2xl border border-white/5">
                      <Shield className="text-ids-blue mb-4" size={32} />
                      <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                      <div className="text-xs text-gray-500 uppercase">Uptime Guaranteed</div>
                    </div>
                    <div className="bg-black/40 p-6 rounded-2xl border border-white/5">
                      <Globe className="text-ids-orange mb-4" size={32} />
                      <div className="text-2xl font-bold text-white mb-1">Global</div>
                      <div className="text-xs text-gray-500 uppercase">CDN Network</div>
                    </div>
                    <div className="col-span-2 bg-black/40 p-6 rounded-2xl border border-white/5 flex items-center justify-between">
                      <div>
                        <div className="text-xl font-bold text-white mb-1">ISO 27001</div>
                        <div className="text-xs text-gray-500 uppercase">Certified Security</div>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center">
                        <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
