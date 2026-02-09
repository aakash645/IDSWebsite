'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Shield, Lock, ScanFace, Users, Key, Fingerprint } from 'lucide-react';
import { FadeIn } from '@/components/ui';
import gsap from 'gsap';

export default function IdentityAccessPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }

    // GSAP animations
    const ctx = gsap.context(() => {
      gsap.from('.hero-content', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const solutions = [
    { title: "Biometric Systems", icon: Fingerprint, desc: "Advanced fingerprint and retina scanning for high-security areas.", path: "/solutions/biometric-authentication" },
    { title: "Face Recognition", icon: ScanFace, desc: "AI-powered terminal access with liveness detection.", path: "/solutions/face-recognition" },
    { title: "Visitor Management", icon: Users, desc: "Digital logs and temporary pass issuance for guests.", path: "/solutions/visitor-management" },
    { title: "Access Control", icon: Lock, desc: "Role-based access control for physical and digital assets.", path: "/solutions/role-based-access" },
    { title: "Smart Cards", icon: Key, desc: "RFID and NFC card solutions for seamless entry.", path: "/solutions/rfid-smart-card" },
    { title: "Cloud Management", icon: Shield, desc: "Centralized dashboard for multi-site monitoring.", path: "/solutions/mobile-access" }
  ];

  return (
    <div ref={heroRef} className="pt-24 min-h-screen bg-[#c4e5f8] text-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            ref={videoRef}
            autoPlay 
            muted 
            loop 
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
          >
            <source src="https://cdn.pixabay.com/video/2020/05/25/40097-424074251_large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#0f172a]/70"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/90 via-transparent to-[#0f172a]"></div>
        </div>

        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen z-0"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="hero-content text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 mb-8 backdrop-blur-md shadow-lg shadow-blue-500/10">
              <Shield size={16} className="text-blue-400" />
              <span className="text-xs font-bold tracking-widest uppercase text-blue-100">Security First Architecture</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight drop-shadow-2xl">
              Identity & <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-500">
                Access Management
              </span>
            </h1>
            
            <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md font-light">
              Comprehensive security solutions managing the entire identity lifecycle. From biometric authentication to cloud-based access control.
            </p>

            <div className="flex justify-center gap-4">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
                Explore Solutions
              </button>
              <Link href="/contact" className="px-8 py-3 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-bold rounded-full transition-colors backdrop-blur-sm">
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-[#0f172a] relative z-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Core Ecosystem</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Seamlessly integrated hardware and software components.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 50}>
                <Link href={item.path} className="block h-full">
                  <div className="p-8 rounded-3xl bg-[#1e293b]/50 border border-white/5 hover:border-blue-500/30 hover:bg-blue-900/10 transition-all group h-full">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/5">
                      <item.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-200 transition-colors">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    <div className="mt-6 flex items-center text-ids-blue text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
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
