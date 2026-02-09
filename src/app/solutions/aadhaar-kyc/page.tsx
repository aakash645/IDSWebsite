'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BOOKING_URL } from '@/constants';
import { Breadcrumb, SolutionSidebar, identityAccessMenu } from '@/components/solutions';
import { ArrowRight, Fingerprint, Smartphone, Shield, Eye, FileCheck, Building2, Wallet, Heart, Cpu, Lock, Zap, Users } from 'lucide-react';

// KYC verification modes
const kycModes = [
  { icon: Fingerprint, title: 'Biometric eKYC', desc: 'Real-time fingerprint/iris verification against UIDAI database for instant identity confirmation with highest assurance level' },
  { icon: Smartphone, title: 'OTP eKYC', desc: 'SMS-based one-time password verification linked to Aadhaar-registered mobile number for paperless onboarding' },
  { icon: Eye, title: 'Face Authentication', desc: 'UIDAI Face RD-compliant liveness detection matching captured photo against Aadhaar database for remote verification' },
  { icon: FileCheck, title: 'Offline XML KYC', desc: 'QR-code based verification using downloaded Aadhaar XML with digital signature validation for consent-based data sharing' },
];

// Industry use cases
const industryCases = [
  { icon: Building2, title: 'Banking & NBFC', desc: 'Account opening, loan onboarding, and re-KYC compliance with RBI-mandated Aadhaar authentication.', compliance: 'RBI Compliant' },
  { icon: Wallet, title: 'Insurance', desc: 'Policy issuance, claim verification, and nominee validation with IRDAI-approved eKYC processes.', compliance: 'IRDAI Approved' },
  { icon: Smartphone, title: 'Telecom', desc: 'SIM activation and porting with DoT-mandated Aadhaar-based customer acquisition processes.', compliance: 'DoT Mandated' },
  { icon: Heart, title: 'Healthcare', desc: 'Ayushman Bharat beneficiary verification and hospital registration with Aadhaar-linked health ID.', compliance: 'NHA Integrated' },
];

// Technical capabilities
const technicalFeatures = [
  { icon: Cpu, title: 'UIDAI Certified', desc: 'AUA/KUA-compliant integration with Level 1 registered device ecosystem' },
  { icon: Lock, title: 'Encrypted Payloads', desc: 'End-to-end encrypted PID blocks with UIDAI public key encryption' },
  { icon: Zap, title: 'Sub-Second Response', desc: 'Average 1.2 second verification turnaround with 99.9% uptime SLA' },
  { icon: Users, title: 'Multi-Tenant', desc: 'Single deployment serving multiple AUAs with segregated audit logs' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function AadhaarKycPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="pt-24 min-h-screen bg-[#0f172a] text-white">
      <Breadcrumb pageTitle="Aadhaar eKYC Solutions" parentService="Identity & Access" parentPath="/identity-access" />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <SolutionSidebar menuTitle="Identity & Access" sections={identityAccessMenu} />

          <main className="w-full lg:w-3/4 order-1 lg:order-2">
            {/* Hero Section */}
            <motion.div ref={heroRef} className="relative h-[60vh] min-h-[400px] rounded-3xl overflow-hidden mb-16" style={{ y: heroY }}>
              <motion.div className="absolute inset-0" style={{ opacity: heroOpacity }}>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/30 via-amber-600/20 to-transparent z-10" />
                <Image src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop" alt="Aadhaar eKYC" fill className="object-cover" />
              </motion.div>
              <div className="absolute inset-0 z-20 flex items-end p-8 md:p-12">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                  <span className="inline-block px-4 py-1 rounded-full bg-orange-500/20 text-orange-300 text-sm font-medium mb-4 border border-orange-500/30">UIDAI Certified Integration</span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">Aadhaar<br /><span className="text-orange-400">eKYC Solutions</span></h1>
                  <p className="text-xl text-gray-300 max-w-2xl">Instant identity verification using India&apos;s Aadhaar infrastructure for paperless, consent-based customer onboarding.</p>
                </motion.div>
              </div>
            </motion.div>

            {/* KYC Modes Section */}
            <motion.section className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="text-orange-400 font-semibold tracking-wider uppercase text-sm">Verification Methods</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">eKYC Authentication Modes</h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Choose the right verification method based on your use case—from biometric to OTP to offline XML.</p>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-6">
                {kycModes.map((mode, i) => (
                  <motion.div key={i} variants={fadeInUp} className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-orange-500/50 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                        <mode.icon className="w-7 h-7 text-orange-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{mode.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{mode.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Industry Use Cases Section */}
            <motion.section className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="text-amber-400 font-semibold tracking-wider uppercase text-sm">Industry Applications</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Sector-Specific eKYC</h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Tailored implementations meeting sector-specific compliance requirements from RBI, IRDAI, and other regulators.</p>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-6">
                {industryCases.map((useCase, i) => (
                  <motion.div key={i} variants={fadeInUp} className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs font-medium">{useCase.compliance}</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <useCase.icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{useCase.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{useCase.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Technical Features Section */}
            <motion.section className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="text-yellow-400 font-semibold tracking-wider uppercase text-sm">Platform Capabilities</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Technical Excellence</h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Enterprise-grade eKYC platform certified for UIDAI compliance and built for scale.</p>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-6">
                {technicalFeatures.map((feature, i) => (
                  <motion.div key={i} variants={fadeInUp} className="p-6 rounded-2xl border border-white/10 bg-gradient-to-r from-yellow-500/5 to-transparent hover:border-yellow-500/30 transition-colors">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                        <feature.icon className="w-5 h-5 text-yellow-400" />
                      </div>
                      <h3 className="text-lg font-bold">{feature.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* CTA Section */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-transparent border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/10 rounded-full blur-[60px]" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-6 h-6 text-orange-400" />
                  <span className="text-orange-300 font-medium">Aadhaar-Based Identity</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Go paperless with Aadhaar eKYC</h3>
                <p className="text-gray-300 mb-8 max-w-2xl">Integrate UIDAI-certified eKYC APIs into your onboarding workflows and reduce verification time from days to seconds.</p>
                <div className="flex flex-wrap gap-4">
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2">
                    Get API Access <ArrowRight size={18} />
                  </a>
                  <button className="bg-transparent border border-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">View Documentation</button>
                </div>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}
