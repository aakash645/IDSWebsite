'use client';

import Link from 'next/link';
import { Cpu, Cog, Bot, Gauge, Car, Factory } from 'lucide-react';
import { FadeIn } from '@/components/ui';

export default function IoTRoboticsPage() {
  const solutions = [
    { title: "IoT Sensors", icon: Gauge, desc: "Advanced sensor networks for real-time monitoring and data collection.", path: "/solutions/iot-sensors" },
    { title: "Robotics Systems", icon: Bot, desc: "Autonomous robots for manufacturing and service delivery.", path: "/solutions/robotics-kits" },
    { title: "Vehicle Access", icon: Car, desc: "ANPR and RFID solutions for smart parking and access.", path: "/solutions/vehicle-access-anpr" },
    { title: "Industrial IoT", icon: Factory, desc: "Smart factory solutions for Industry 4.0 transformation.", path: "/solutions/embedded-boards" },
    { title: "Kiosk Systems", icon: Cog, desc: "Interactive information and service kiosks.", path: "/solutions/info-kiosks" },
    { title: "Edge Computing", icon: Cpu, desc: "Real-time processing at the edge for minimal latency.", path: "/solutions/digital-devices" }
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#0f172a] text-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=2071&auto=format&fit=crop" 
            alt="IoT Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/90 via-transparent to-[#0f172a]"></div>
        </div>

        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-400/30 mb-8">
                <Cpu size={16} className="text-yellow-400" />
                <span className="text-xs font-bold tracking-widest uppercase text-yellow-100">Next-Gen Technology</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                IoT & <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-500">
                  Robotics
                </span>
              </h1>
              
              <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Transform your operations with intelligent automation. From smart sensors to autonomous robots, we build the future of connected industry.
              </p>

              <div className="flex justify-center gap-4">
                <button className="px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-full transition-all">
                  Explore Solutions
                </button>
                <Link href="/contact" className="px-8 py-3 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-bold rounded-full transition-colors">
                  Request Demo
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
              <h2 className="text-3xl font-bold mb-4">Smart Solutions</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Intelligent systems for the connected world.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 50}>
                <Link href={item.path} className="block h-full">
                  <div className="p-8 rounded-3xl bg-[#1e293b]/50 border border-white/5 hover:border-yellow-500/30 hover:bg-yellow-900/10 transition-all group h-full">
                    <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-400 mb-6 group-hover:scale-110 transition-transform">
                      <item.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-200 transition-colors">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    <div className="mt-6 flex items-center text-ids-yellow text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
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
