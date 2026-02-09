'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BOOKING_URL } from '@/constants';
import { Breadcrumb, SolutionSidebar, identityAccessMenu } from '@/components/solutions';
import { ArrowRight, Fingerprint, UserCheck, Link2, Shield, Database, Key, RefreshCw, CheckCircle, Globe, Layers, Lock, Smartphone, CreditCard, Building2, Heart } from 'lucide-react';

// Core platform pillars
const platformPillars = [
  { icon: Fingerprint, title: 'Biometric De-duplication', desc: 'ABIS engine ensuring 1:N uniqueness verification across population-scale databases preventing duplicate identities' },
  { icon: Link2, title: 'Identity Federation', desc: 'Link multiple credentials—Aadhaar, PAN, voter ID, driving license—to a single verified identity profile' },
  { icon: Database, title: 'Master Data Management', desc: 'Golden record creation with data quality rules, conflict resolution, and audit trail for identity updates' },
  { icon: Key, title: 'Authentication Services', desc: 'Multi-factor authentication APIs—OTP, biometric, face—for service providers to verify identity claims' },
];

// Linked identity ecosystem
const linkedCredentials = [
  { icon: CreditCard, title: 'Government IDs', desc: 'Aadhaar, PAN, Voter ID, Passport, Driving License linked for cross-verification and fraud prevention.', status: 'Primary Link' },
  { icon: Building2, title: 'Financial Accounts', desc: 'Bank accounts, insurance policies, and investment accounts seeded with verified identity.', status: 'Financial Link' },
  { icon: Heart, title: 'Welfare Schemes', desc: 'Direct Benefit Transfer, pension, and subsidy disbursements tied to unique identity.', status: 'DBT Enabled' },
  { icon: Smartphone, title: 'Digital Credentials', desc: 'DigiLocker, mAadhaar, and e-Sign integration for paperless transactions.', status: 'Mobile Ready' },
];

// Platform benefits
const platformBenefits = [
  { icon: Shield, title: 'Fraud Prevention', desc: 'Eliminate ghost beneficiaries and duplicate claims across welfare programs' },
  { icon: RefreshCw, title: 'Seamless Updates', desc: 'Single point of update reflecting across all linked systems and credentials' },
  { icon: Globe, title: 'Universal Access', desc: 'Any service provider can verify identity via standardized APIs' },
  { icon: Lock, title: 'Privacy by Design', desc: 'Consent-based data sharing with minimal disclosure principles' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function OneIdentityPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="pt-24 min-h-screen bg-[#0f172a] text-white">
      <Breadcrumb pageTitle="One Identity Platform" parentService="Identity & Access" parentPath="/identity-access" />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <SolutionSidebar menuTitle="Identity & Access" sections={identityAccessMenu} />

          <main className="w-full lg:w-3/4 order-1 lg:order-2">
            {/* Hero Section */}
            <motion.div ref={heroRef} className="relative h-[60vh] min-h-[400px] rounded-3xl overflow-hidden mb-16" style={{ y: heroY }}>
              <motion.div className="absolute inset-0" style={{ opacity: heroOpacity }}>
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/30 via-purple-600/20 to-transparent z-10" />
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" alt="One Identity Platform" className="w-full h-full object-cover" />
              </motion.div>
              <div className="absolute inset-0 z-20 flex items-end p-8 md:p-12">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                  <span className="inline-block px-4 py-1 rounded-full bg-violet-500/20 text-violet-300 text-sm font-medium mb-4 border border-violet-500/30">Unified Identity Infrastructure</span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">One Identity<br /><span className="text-violet-400">Platform</span></h1>
                  <p className="text-xl text-gray-300 max-w-2xl">Federated identity management linking multiple credentials to a single, verified citizen profile for seamless service delivery.</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Platform Pillars Section */}
            <motion.section className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="text-violet-400 font-semibold tracking-wider uppercase text-sm">Core Infrastructure</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Platform Pillars</h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Foundation components enabling unique identity establishment and verification at national scale.</p>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-6">
                {platformPillars.map((pillar, i) => (
                  <motion.div key={i} variants={fadeInUp} className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-violet-500/50 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-violet-500/10 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                        <pillar.icon className="w-7 h-7 text-violet-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{pillar.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{pillar.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Linked Credentials Section */}
            <motion.section className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="text-purple-400 font-semibold tracking-wider uppercase text-sm">Identity Ecosystem</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Linked Credentials</h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Multiple identity documents and accounts unified under a single verified profile.</p>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-6">
                {linkedCredentials.map((cred, i) => (
                  <motion.div key={i} variants={fadeInUp} className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs font-medium">{cred.status}</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <cred.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{cred.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{cred.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Platform Benefits Section */}
            <motion.section className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="text-fuchsia-400 font-semibold tracking-wider uppercase text-sm">Key Outcomes</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Platform Benefits</h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Transformative outcomes for governments, service providers, and citizens alike.</p>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-6">
                {platformBenefits.map((benefit, i) => (
                  <motion.div key={i} variants={fadeInUp} className="p-6 rounded-2xl border border-white/10 bg-gradient-to-r from-fuchsia-500/5 to-transparent hover:border-fuchsia-500/30 transition-colors">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-fuchsia-500/10 flex items-center justify-center">
                        <benefit.icon className="w-5 h-5 text-fuchsia-400" />
                      </div>
                      <h3 className="text-lg font-bold">{benefit.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm">{benefit.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* CTA Section */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-transparent border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-[60px]" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <UserCheck className="w-6 h-6 text-violet-400" />
                  <span className="text-violet-300 font-medium">Unified Citizen Identity</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Build your One Identity infrastructure</h3>
                <p className="text-gray-300 mb-8 max-w-2xl">Implement federated identity management to enable seamless citizen services, eliminate duplication, and enhance governance efficiency.</p>
                <div className="flex flex-wrap gap-4">
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2">
                    Explore Platform <ArrowRight size={18} />
                  </a>
                  <button className="bg-transparent border border-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">Download Whitepaper</button>
                </div>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}
