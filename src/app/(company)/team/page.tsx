'use client';

import { FadeIn } from '@/components/ui';
import { CTASection } from '@/components/layout';
import { Linkedin, Twitter, Briefcase, Smile, Code, Coffee, Award, ArrowRight } from 'lucide-react';
import type { TeamMemberProps } from '@/types';

// Import team images
import ManagementTeam1 from '@/assets/teams/Management-Team-1.webp';
import ManagementTeam2 from '@/assets/teams/Management-Team-2.webp';
import ManagementTeam3 from '@/assets/teams/Management-Team-3.webp';
import ExecutiveLeadership1 from '@/assets/teams/Executiv- Leadership-1.webp';
import ExecutiveLeadership2 from '@/assets/teams/Executive-Leadership-2.webp';
import ExecutiveLeadership3 from '@/assets/teams/Executiv- Leadership-3.webp';
import Image, { StaticImageData } from 'next/image';

interface TeamMemberWithImageProps extends Omit<TeamMemberProps, 'img'> {
  img: StaticImageData;
}

const TeamMember = ({ name, role, img, bio }: TeamMemberWithImageProps) => (
  <div className="group relative overflow-hidden rounded-3xl bg-white border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500 h-full flex flex-col">
    <div className="aspect-[4/3] overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
      <Image src={img} alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" fill />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90"></div>
      
      {/* Social Links Overlay */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-2 translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
        <button className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors border border-border"><Linkedin size={18} /></button>
        <button className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors border border-border"><Twitter size={18} /></button>
      </div>
    </div>
    
    <div className="p-6 relative flex-grow flex flex-col justify-end">
      <div className="mb-3">
        <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{name}</h3>
        <p className="text-foreground-secondary font-medium uppercase tracking-wider text-xs">{role}</p>
      </div>
      <p className="text-foreground-secondary text-sm leading-relaxed border-t border-border pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">{bio}</p>
    </div>
  </div>
);

// Management Team Data
const managementTeam: TeamMemberWithImageProps[] = [
  {
    name: "Lakshman Narayan",
    role: "Chief Strategic Director",
    img:ManagementTeam3 ,
    bio: "Visionary leader with 25+ years in identity solutions. Spearheading IDS SmartTech's growth and innovation strategy."
  },
  {
    name: "Akhilesh Gupta",
    role: "CEO",
    img:ManagementTeam1 ,
    bio: "Operations expert driving excellence across all business verticals. Focused on scalable processes and quality delivery."
  },
  {
    name: "Vinny Antony",
    role: "Plant Head (Holographic Solution)",
    img: ManagementTeam2,
    bio: "Leading our holographic solutions division. Expert in advanced security printing and manufacturing."
  }
];

// Executive Leadership Data
const executiveLeadership: TeamMemberWithImageProps[] = [
  {
    name: "Nana Baviskar",
    role: "Lead Solution Architect",
    img: ExecutiveLeadership1,
    bio: "Technology veteran leading our R&D and product engineering teams. Expert in biometrics and secure systems."
  },
  {
    name: "Muraari Kumar",
    role: "Chief Growth Officer",
    img: ExecutiveLeadership2,
    bio: "Driving strategic partnerships and market expansion. Building relationships with government and enterprise clients."
  },
  {
    name: "Akash Mishra",
    role: "Software Developer",
    img: ExecutiveLeadership3,
    bio: "Software engineering lead building innovative solutions. Expert in modern technologies and development practices."
  }
];

export default function TeamPage() {
  return (
    <div className="pt-24 min-h-screen bg-background text-foreground">
      
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-[#e8f4fa]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px]"></div>
          <div className="absolute top-40 -left-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border mb-6">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-foreground font-semibold text-sm tracking-widest uppercase">Our Team</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
              The <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#ee6d31] via-[#fed356] to-[#9cd0ec]">Architects</span> <br/>
              of Identity.
            </h1>
            <p className="text-xl md:text-2xl text-foreground-secondary max-w-3xl font-light leading-relaxed mb-12">
              We are a collective of engineers, designers, and strategists obsessed with building the future of digital identity. United by curiosity, driven by impact.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="mb-16">
              <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">Leadership</span>
              <h2 className="text-4xl font-bold text-foreground">Management Team</h2>
              <p className="text-foreground-secondary mt-4 max-w-2xl">The strategic minds steering IDS SmartTech towards innovation and excellence.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {managementTeam.map((member, index) => (
              <FadeIn key={member.name} delay={index * 100}>
                <TeamMember {...member} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="py-24 bg-[#e8f4fa]">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="mb-16">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Team Leaders</span>
              <h2 className="text-4xl font-bold text-foreground">Executive Leadership</h2>
              <p className="text-foreground-secondary mt-4 max-w-2xl">Driving operational excellence and building the future of identity solutions.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executiveLeadership.map((member, index) => (
              <FadeIn key={member.name} delay={index * 100}>
                <TeamMember {...member} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Life at IDS */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-foreground">Life @ IDS</h2>
              <p className="text-foreground-secondary max-w-2xl mx-auto">Where innovation meets inspiration.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Smile, label: "Fun Culture", value: "Weekly Events" },
              { icon: Code, label: "Tech Talks", value: "Bi-Weekly" },
              { icon: Coffee, label: "Free Coffee", value: "Unlimited" },
              { icon: Award, label: "Learning Budget", value: "$2000/yr" }
            ].map((perk, i) => (
              <FadeIn key={i} delay={i*100}>
                <div className="text-center p-6 rounded-2xl bg-white border border-border hover:shadow-xl transition-all">
                  <perk.icon className="mx-auto mb-4 text-primary" size={40} />
                  <h3 className="font-bold text-foreground mb-1">{perk.label}</h3>
                  <p className="text-sm text-foreground-secondary">{perk.value}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-24 bg-[#e8f4fa]">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 text-accent font-bold mb-4">
              <Briefcase size={20} /> <span>Careers</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-foreground">Join Our Team</h2>
            <p className="text-foreground-secondary max-w-2xl mx-auto mb-10 text-lg">
              We&apos;re always looking for talented individuals who are passionate about security, identity, and building the future. Check out our open positions.
            </p>
            <button className="bg-foreground text-background font-bold px-10 py-4 rounded-full hover:bg-foreground/90 transition-all flex items-center gap-2 mx-auto">
              View Open Positions <ArrowRight size={20} />
            </button>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
