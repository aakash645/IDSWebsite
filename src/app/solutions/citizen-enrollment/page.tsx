'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BOOKING_URL } from '@/constants';
import { Breadcrumb, SolutionSidebar, identityAccessMenu } from '@/components/solutions';
import { ArrowRight, Fingerprint, Camera, FileText, Users, Globe, Building, Scan, UserCheck, Stamp, Database, Shield, MapPin, Landmark, Heart, GraduationCap } from 'lucide-react';

// Enrollment capture modules
const captureModules = [
  { icon: Camera, title: 'Photo Capture', desc: 'ICAO-compliant facial photography with automatic lighting correction, background removal, and quality verification' },
  { icon: Fingerprint, title: 'Biometric Capture', desc: '10-finger slap scanner, iris capture, and signature digitization with NIST quality checks and deduplication' },
  { icon: FileText, title: 'Document Scan', desc: 'High-resolution scanning of proof documents—ID cards, certificates, utility bills—with OCR extraction' },
  { icon: Scan, title: 'Form Digitization', desc: 'Handwritten form capture with ICR, checkbox detection, and automatic field-to-database mapping' },
];

// Identity programs supported
const identityPrograms = [
  { icon: Landmark, title: 'National ID Programs', desc: 'Large-scale enrollment for national identity databases with deduplication across millions of records.', scale: '100M+ Records' },
  { icon: Heart, title: 'Social Welfare Schemes', desc: 'Beneficiary enrollment for pension, subsidy, and healthcare programs with eligibility verification.', scale: 'Welfare Linkage' },
  { icon: GraduationCap, title: 'Student Registry', desc: 'State-wide student enrollment with photo ID generation for schools and higher education.', scale: 'Education Sector' },
  { icon: Users, title: 'Voter Registration', desc: 'Election commission enrollment with EPIC generation, deduplication, and constituency mapping.', scale: 'Democratic Process' },
];

// Deployment modes
const deploymentModes = [
  { icon: Building, title: 'Fixed Centers', desc: 'Permanent enrollment stations in government offices with desktop kits and dedicated operators' },
  { icon: MapPin, title: 'Camp Mode', desc: 'Portable kits with laptop, fingerprint scanner, and camera for village-level camps and door-to-door drives' },
  { icon: Globe, title: 'Online Self-Service', desc: 'Web portal for demographic updates, document uploads, and appointment booking with Aadhaar OTP verification' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function CitizenEnrollmentPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="pt-24 min-h-screen bg-[#0f172a] text-white">
      <Breadcrumb pageTitle="Citizen Enrollment Systems" parentService="Identity & Access" parentPath="/identity-access" />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <SolutionSidebar menuTitle="Identity & Access" sections={identityAccessMenu} />

          <main className="w-full lg:w-3/4 order-1 lg:order-2">
            {/* Hero Section */}
            <motion.div ref={heroRef} className="relative h-[60vh] min-h-[400px] rounded-3xl overflow-hidden mb-16" style={{ y: heroY }}>
              <motion.div className="absolute inset-0" style={{ opacity: heroOpacity }}>
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/30 via-teal-600/20 to-transparent z-10" />
                <img src="https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=2070&auto=format&fit=crop" alt="Citizen Enrollment" className="w-full h-full object-cover" />
              </motion.div>
              <div className="absolute inset-0 z-20 flex items-end p-8 md:p-12">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                  <span className="inline-block px-4 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-medium mb-4 border border-emerald-500/30">Government Identity Programs</span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">Citizen<br /><span className="text-emerald-400">Enrollment Systems</span></h1>
                  <p className="text-xl text-gray-300 max-w-2xl">End-to-end platforms for citizen registration, biometric capture, and identity card issuance at population scale.</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Capture Modules Section */}
            <motion.section className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="text-emerald-400 font-semibold tracking-wider uppercase text-sm">Data Capture</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Enrollment Capture Modules</h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Multi-modal capture stations ensure accurate, fraud-resistant citizen data collection.</p>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-6">
                {captureModules.map((module, i) => (
                  <motion.div key={i} variants={fadeInUp} className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-emerald-500/50 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                        <module.icon className="w-7 h-7 text-emerald-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{module.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{module.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Identity Programs Section */}
            <motion.section className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="text-teal-400 font-semibold tracking-wider uppercase text-sm">Use Cases</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Identity Programs Supported</h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">From national ID rollouts to voter registration—our platform scales for any population-level program.</p>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-6">
                {identityPrograms.map((program, i) => (
                  <motion.div key={i} variants={fadeInUp} className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 text-xs font-medium">{program.scale}</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <program.icon className="w-6 h-6 text-teal-400" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{program.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{program.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Deployment Modes Section */}
            <motion.section className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="text-green-400 font-semibold tracking-wider uppercase text-sm">Deployment Options</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Flexible Enrollment Modes</h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Reach every citizen—from urban offices to remote villages—with multi-mode deployment.</p>
              </motion.div>
              <div className="grid md:grid-cols-3 gap-6">
                {deploymentModes.map((mode, i) => (
                  <motion.div key={i} variants={fadeInUp} className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-green-500/5 to-transparent hover:border-green-500/30 transition-colors text-center">
                    <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                      <mode.icon className="w-7 h-7 text-green-400" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{mode.title}</h3>
                    <p className="text-gray-400 text-sm">{mode.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* CTA Section */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-transparent border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-500/10 rounded-full blur-[60px]" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <UserCheck className="w-6 h-6 text-emerald-400" />
                  <span className="text-emerald-300 font-medium">Population-Scale Identity</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Launch your citizen enrollment program</h3>
                <p className="text-gray-300 mb-8 max-w-2xl">Partner with us for end-to-end enrollment infrastructure—biometric kits, software platform, and field deployment support.</p>
                <div className="flex flex-wrap gap-4">
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2">
                    Discuss Requirements <ArrowRight size={18} />
                  </a>
                  <button className="bg-transparent border border-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">Download Case Study</button>
                </div>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}
