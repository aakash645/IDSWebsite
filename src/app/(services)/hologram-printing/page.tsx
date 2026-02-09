'use client';

import Link from 'next/link';
import { Printer, Shield, Tag, Sparkles, QrCode, Layers } from 'lucide-react';
import { FadeIn } from '@/components/ui';

export default function HologramPrintingPage() {
  const solutions = [
    { title: "3D Holograms", icon: Layers, desc: "High-security 3D holographic labels and stickers.", path: "/solutions/3d-holograms" },
    { title: "Tamper Evident", icon: Shield, desc: "Security seals that show evidence of tampering.", path: "/solutions/tamper-evident" },
    { title: "Hot Stamping", icon: Sparkles, desc: "Premium metallic foil stamping for authentication.", path: "/solutions/hot-stamping" },
    { title: "QR Labels", icon: QrCode, desc: "Track and trace solutions with QR integration.", path: "/solutions/track-trace" },
    { title: "Security Printing", icon: Printer, desc: "UV ink, micro-text, and other security features.", path: "/solutions/uv-printing" },
    { title: "Brand Protection", icon: Tag, desc: "Anti-counterfeiting solutions for your products.", path: "/solutions/brand-protection" }
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#0f172a] text-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2032&auto=format&fit=crop" 
            alt="Hologram Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/90 via-transparent to-[#0f172a]"></div>
        </div>

        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-400/30 mb-8">
                <Printer size={16} className="text-purple-400" />
                <span className="text-xs font-bold tracking-widest uppercase text-purple-100">Security Solutions</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                Hologram Label <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-500">
                  Printing
                </span>
              </h1>
              
              <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Protect your brand with state-of-the-art holographic security. Our solutions make counterfeiting virtually impossible.
              </p>

              <div className="flex justify-center gap-4">
                <button className="px-8 py-3 bg-purple-500 hover:bg-purple-400 text-white font-bold rounded-full transition-all">
                  View Products
                </button>
                <Link href="/contact" className="px-8 py-3 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-bold rounded-full transition-colors">
                  Get Samples
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
              <h2 className="text-3xl font-bold mb-4">Security Products</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive anti-counterfeiting and brand protection solutions.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 50}>
                <Link href={item.path} className="block h-full">
                  <div className="p-8 rounded-3xl bg-[#1e293b]/50 border border-white/5 hover:border-purple-500/30 hover:bg-purple-900/10 transition-all group h-full">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                      <item.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-200 transition-colors">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    <div className="mt-6 flex items-center text-purple-400 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
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
