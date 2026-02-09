'use client';

import { FadeIn } from '@/components/ui';
import { CTASection } from '@/components/layout';
import { Scale, Shield, Users, FileText, Eye, Lock, CheckCircle2 } from 'lucide-react';

export default function GovernancePage() {
  return (
    <div className="pt-24 min-h-screen bg-background text-foreground">
      
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-[#e8f4fa]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-border mb-8">
                <Scale size={16} className="text-primary" />
                <span className="text-xs font-bold tracking-widest uppercase text-foreground">Corporate Excellence</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight text-foreground">
                Corporate <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9cd0ec] via-[#fed356] to-[#ee6d31]">
                  Governance
                </span>
              </h1>
              <p className="text-xl text-foreground-secondary max-w-2xl leading-relaxed">
                Our commitment to transparency, ethical business practices, and stakeholder accountability forms the foundation of everything we do.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Governance Pillars */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Our Governance Framework</h2>
              <p className="text-foreground-secondary max-w-2xl mx-auto">Built on principles of integrity, transparency, and accountability.</p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Board Oversight", desc: "Independent board members ensuring strategic direction and risk management." },
              { icon: Users, title: "Stakeholder Rights", desc: "Protecting the interests of shareholders, employees, and partners." },
              { icon: Eye, title: "Transparency", desc: "Regular disclosure of financial and operational information." },
              { icon: Lock, title: "Risk Management", desc: "Comprehensive framework for identifying and mitigating risks." },
              { icon: FileText, title: "Compliance", desc: "Adherence to all applicable laws, regulations, and standards." },
              { icon: Scale, title: "Ethics", desc: "Strong ethical guidelines governing all business activities." }
            ].map((pillar, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="p-8 rounded-3xl bg-white border border-border hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <pillar.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{pillar.title}</h3>
                  <p className="text-foreground-secondary text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-[#e8f4fa]">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Certifications & Compliance</h2>
              <p className="text-foreground-secondary max-w-2xl mx-auto">We maintain the highest standards of security and compliance.</p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "ISO 27001", desc: "Information Security" },
              { name: "ISO 9001", desc: "Quality Management" },
              { name: "SOC 2 Type II", desc: "Security Controls" },
              { name: "GDPR", desc: "Data Protection" }
            ].map((cert, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="text-center p-6 rounded-2xl bg-white border border-border hover:border-[#fed356]/50 hover:shadow-lg transition-all">
                  <CheckCircle2 className="mx-auto mb-4 text-[#fed356]" size={40} />
                  <h3 className="font-bold text-foreground text-lg mb-1">{cert.name}</h3>
                  <p className="text-sm text-foreground-secondary">{cert.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-12 text-foreground">Key Policies</h2>
          </FadeIn>
          
          <div className="space-y-4">
            {[
              { title: "Code of Business Conduct", desc: "Guidelines for ethical behavior in all business dealings." },
              { title: "Anti-Corruption Policy", desc: "Zero tolerance for bribery and corrupt practices." },
              { title: "Data Privacy Policy", desc: "Protection and responsible use of personal information." },
              { title: "Whistleblower Policy", desc: "Safe channels for reporting concerns without retaliation." },
              { title: "Conflict of Interest Policy", desc: "Managing potential conflicts in business relationships." }
            ].map((policy, i) => (
              <FadeIn key={i} delay={i * 50}>
                <div className="flex items-center justify-between p-6 rounded-2xl bg-white border border-border hover:shadow-lg transition-all group cursor-pointer">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{policy.title}</h3>
                    <p className="text-foreground-secondary text-sm">{policy.desc}</p>
                  </div>
                  <FileText className="text-foreground-secondary group-hover:text-primary transition-colors" size={24} />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
