'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FadeIn } from '@/components/ui';
import { CTASection } from '@/components/layout';
import { CheckCircle2, Heart, Zap, Target, BarChart2, Repeat, Cpu, Printer, Shield, CreditCard, ScanFace, Car, Flag, Radio, Server, Anchor, Wifi, Key, Lightbulb, ShieldCheck, ArrowRight } from 'lucide-react';

// Import team images
import ManagementTeam1 from '@/assets/teams/Management-Team-1.webp';
import ManagementTeam2 from '@/assets/teams/Management-Team-2.webp';
import ManagementTeam3 from '@/assets/teams/Management-Team-3.webp';

export default function CompanyPage() {
  const clients = [
    { name: "NXP", icon: Cpu },
    { name: "Zebra", icon: Printer },
    { name: "Thales", icon: Shield },
    { name: "Mastercard", icon: CreditCard },
    { name: "Regula", icon: ScanFace },
    { name: "Park+", icon: Car },
    { name: "Sport Sys", icon: Flag },
    { name: "HUAYUAN", icon: Radio },
    { name: "Gemalto", icon: Server },
    { name: "Goldantell", icon: Anchor },
    { name: "Daphne", icon: Wifi },
    { name: "Sunfre", icon: Key },
  ];

  const allClients = [...clients, ...clients, ...clients];

  return (
    <div className="pt-24 min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-foreground font-semibold text-sm tracking-widest uppercase">About Us</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tighter">
              We are <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#9cd0ec] via-[#fed356] to-[#ee6d31]">IDS SmartTech</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground-secondary max-w-3xl mx-auto font-light leading-relaxed mb-10">
              Architecting the secure digital infrastructure for the world&apos;s most forward-thinking enterprises. We don&apos;t just build technology; we build trust.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Companies Slider Section */}
      <section className="py-16 border-y border-border bg-secondary/50 relative">
        <div className="container mx-auto px-4 mb-8 text-center">
          <p className="text-sm font-bold text-foreground-secondary uppercase tracking-widest">Global Technology Partners</p>
        </div>
        <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <div className="flex w-max animate-scroll">
            {allClients.map((client, i) => (
              <div key={i} className="flex items-center justify-center gap-3 mx-8 md:mx-16 min-w-[150px] opacity-50 hover:opacity-100 transition-opacity cursor-pointer group">
                <client.icon size={32} className="text-foreground-secondary group-hover:text-primary transition-colors" />
                <span className="font-bold text-xl text-foreground-secondary group-hover:text-foreground transition-colors">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story / Mission */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#9cd0ec] to-[#ee6d31] opacity-20 blur-xl rounded-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop" 
                alt="Our Team" 
                className="relative rounded-2xl shadow-2xl border border-border grayscale group-hover:grayscale-0 transition-all duration-700 object-cover h-[500px] w-full"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-xl border border-border shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-sm font-medium text-foreground">&quot;Innovation is not just about technology, it&apos;s about the people who build it.&quot;</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-primary font-bold text-sm tracking-widest uppercase">Our Mission</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-foreground">Pioneering Trust in a <br/>Digital World</h2>
            <div className="space-y-6 text-foreground-secondary text-lg leading-relaxed">
              <p>
                Founded in 2009, IDS SmartTech began with a singular mission: to bridge the gap between physical security and digital identity. What started as a small consultancy has evolved into a global powerhouse for IoT and Access Management solutions.
              </p>
              <p>
                We look beyond the immediate problem to understand the broader context of your business. By combining deep technical expertise with strategic foresight, we create solutions that are not only effective today but scalable for tomorrow.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {['Global Reach', 'ISO 27001 Certified', '24/7 Support', 'Custom R&D'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-foreground font-medium p-3 rounded-lg bg-secondary border border-border hover:border-[#fed356]/50 transition-colors">
                    <CheckCircle2 className="text-[#fed356]" size={20} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-[#e8f4fa] relative">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Our Core Values</h2>
              <p className="text-foreground-secondary max-w-2xl mx-auto text-lg">
                These principles guide every decision we make, from the code we write to the partnerships we build.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Innovation", icon: Lightbulb, desc: "We constantly challenge the status quo to build better solutions." },
              { title: "Integrity", icon: ShieldCheck, desc: "We believe trust is earned through transparency and security." },
              { title: "Customer Success", icon: Heart, desc: "Your growth is our growth. We are obsessed with your results." },
              { title: "Agility", icon: Zap, desc: "We move fast, adapt quickly, and deliver value immediately." }
            ].map((value, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="bg-white p-8 rounded-3xl border border-border hover:shadow-xl transition-all h-full flex flex-col">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#9cd0ec] to-[#9cd0ec]/20 flex items-center justify-center mb-6 text-white shadow-lg shadow-primary/20">
                    <value.icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{value.title}</h3>
                  <p className="text-foreground-secondary leading-relaxed">{value.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-border -translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="text-center mb-20">
              <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">Methodology</span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">How We Deliver Excellence</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { step: "01", title: "Discovery", icon: Target, desc: "We dive deep into your infrastructure to identify gaps and opportunities." },
              { step: "02", title: "Strategy", icon: BarChart2, desc: "Our architects design a custom roadmap tailored to your specific KPIs." },
              { step: "03", title: "Deployment", icon: Zap, desc: "Seamless implementation with zero downtime and full system integration." },
              { step: "04", title: "Evolution", icon: Repeat, desc: "Continuous monitoring and AI-driven optimization to keep you ahead." }
            ].map((phase, i) => (
              <FadeIn key={i} delay={i * 150} direction="up">
                <div className="relative bg-white p-8 rounded-2xl border border-border hover:border-accent hover:shadow-xl transition-all group">
                  <div className="absolute -top-6 left-8 bg-background px-2 text-4xl font-black text-foreground/10 group-hover:text-accent/50 transition-colors">
                    {phase.step}
                  </div>
                  <div className="mt-4 mb-6 text-primary group-hover:scale-110 transition-transform origin-left">
                    <phase.icon size={40} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{phase.title}</h3>
                  <p className="text-foreground-secondary text-sm leading-relaxed">{phase.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#e8f4fa]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">A Decade of Disruption</h2>
              <p className="text-foreground-secondary text-lg mb-8 leading-relaxed">
                From a small garage in 2009 to a global leader in 2024, our journey has been defined by a relentless pursuit of innovation. We&apos;ve weathered market shifts, embraced new technologies, and consistently delivered for our clients.
              </p>
              <button className="text-[#fed356] font-bold text-lg flex items-center gap-2 hover:gap-4 transition-all">
                Read our full history <ArrowRight size={20} />
              </button>
            </FadeIn>
            <div className="space-y-8 relative pl-8 border-l border-border">
              {[
                { year: "2024", title: "Global Expansion", desc: "Opened new HQs in London and Singapore." },
                { year: "2020", title: "AI Integration", desc: "Launched our proprietary AI-driven security platform." },
                { year: "2015", title: "First Patent", desc: "Awarded patent for Holographic Security Labels." },
                { year: "2009", title: "Inception", desc: "IDS SmartTech founded with a team of 3 engineers." }
              ].map((event, i) => (
                <FadeIn key={i} delay={i * 100} direction="left">
                  <div className="relative">
                    <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-primary border-4 border-[#e8f4fa]"></div>
                    <span className="text-primary font-bold text-sm mb-1 block">{event.year}</span>
                    <h3 className="text-xl font-bold text-foreground mb-2">{event.title}</h3>
                    <p className="text-foreground-secondary text-sm">{event.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 container mx-auto px-4 border-t border-border">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Meet the Leadership</h2>
            <p className="text-foreground-secondary">The visionaries behind our innovation.</p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Lakshman Narayan", role: "Chief Strategic Director", img: ManagementTeam3 },
            { name: "Akhilesh Gupta", role: "CEO", img: ManagementTeam1 },
            { name: "Vinny Antony", role: "Plant Head (Holographic Solution)", img: ManagementTeam2 }
          ].map((member, i) => (
            <FadeIn key={i} delay={i * 100}>
              <Link href="/team" className="group relative overflow-hidden rounded-3xl border border-border bg-white shadow-sm hover:shadow-xl transition-all block">
                <div className="aspect-[3/4] overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
                  <Image src={member.img} alt={member.name} className="w-full h-full object-contain object-top transition-transform duration-700 group-hover:scale-105" fill sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium uppercase tracking-wider text-xs">{member.role}</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
