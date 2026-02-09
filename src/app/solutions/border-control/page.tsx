'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BOOKING_URL } from '@/constants';
import { Breadcrumb, SolutionSidebar, identityAccessMenu } from '@/components/solutions';
import { ArrowRight, Plane, ShieldCheck, Scan, Users, Globe, Camera, Fingerprint, FileSearch, AlertTriangle, Clock, Database, MapPin, Ship, Train, Building } from 'lucide-react';

// Border control modules
const controlModules = [
  { icon: Scan, title: 'Document Verification', desc: 'MRZ/OCR reading of passports, visas, and travel documents with ICAO 9303 compliance and fraud detection' },
  { icon: Fingerprint, title: 'Biometric Matching', desc: '1:N fingerprint and face verification against national databases and Interpol lookout lists' },
  { icon: Camera, title: 'ABC E-Gates', desc: 'Automated Border Control e-gates with face recognition for expedited processing of pre-enrolled travelers' },
  { icon: FileSearch, title: 'Watchlist Screening', desc: 'Real-time screening against immigration databases, criminal records, and international alert lists' },
];

// Entry point types
const entryPoints = [
  { icon: Plane, title: 'International Airports', desc: 'High-volume passenger processing at immigration counters and ABC lanes with API/PNR integration.', volume: '10,000+ PAX/day' },
  { icon: Ship, title: 'Seaports', desc: 'Crew and passenger verification for cruise terminals and cargo ports with biometric enrollment.', volume: 'Maritime Security' },
  { icon: Train, title: 'Land Borders', desc: 'Vehicle and pedestrian checkpoints with ANPR, document scanning, and biometric kiosks.', volume: 'Cross-Border' },
  { icon: Building, title: 'Immigration Offices', desc: 'Visa application centers and FRO offices with enrollment stations and interview management.', volume: 'Visa Processing' },
];

// System capabilities
const systemCapabilities = [
  { icon: Globe, title: 'INTERPOL I-24/7', desc: 'Direct integration with INTERPOL databases for stolen/lost travel document checks' },
  { icon: AlertTriangle, title: 'Real-time Alerts', desc: 'Instant notifications to immigration officers for watchlist matches and document anomalies' },
  { icon: Clock, title: '< 8 Second Processing', desc: 'End-to-end traveler verification in under 8 seconds including biometric match' },
  { icon: Database, title: 'Entry/Exit Tracking', desc: 'Complete travel history database with overstay detection and visa compliance monitoring' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function BorderControlPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="pt-24 min-h-screen bg-[#0f172a] text-white">
      <Breadcrumb pageTitle="Border Control Solutions" parentService="Identity & Access" parentPath="/identity-access" />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <SolutionSidebar menuTitle="Identity & Access" sections={identityAccessMenu} />

          <main className="w-full lg:w-3/4 order-1 lg:order-2">
            {/* Hero Section */}
            <motion.div ref={heroRef} className="relative h-[60vh] min-h-[400px] rounded-3xl overflow-hidden mb-16" style={{ y: heroY }}>
              <motion.div className="absolute inset-0" style={{ opacity: heroOpacity }}>
                <div className="absolute inset-0 bg-gradient-to-br from-slate-600/30 via-blue-600/20 to-transparent z-10" />
                <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop" alt="Border Control" className="w-full h-full object-cover" />
              </motion.div>
              <div className="absolute inset-0 z-20 flex items-end p-8 md:p-12">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                  <span className="inline-block px-4 py-1 rounded-full bg-slate-500/20 text-slate-300 text-sm font-medium mb-4 border border-slate-500/30">Immigration & Security</span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">Border Control<br /><span className="text-blue-400">Solutions</span></h1>
                  <p className="text-xl text-gray-300 max-w-2xl">Comprehensive immigration management systems for airports, seaports, and land borders with biometric verification.</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Control Modules Section */}
            <motion.section className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm">Core Systems</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Border Control Modules</h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">End-to-end traveler verification from document authentication to biometric matching.</p>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-6">
                {controlModules.map((module, i) => (
                  <motion.div key={i} variants={fadeInUp} className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                        <module.icon className="w-7 h-7 text-blue-400" />
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

            {/* Entry Points Section */}
            <motion.section className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="text-slate-400 font-semibold tracking-wider uppercase text-sm">Deployment Sites</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Entry Point Coverage</h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Scalable solutions for all types of international entry points.</p>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-6">
                {entryPoints.map((point, i) => (
                  <motion.div key={i} variants={fadeInUp} className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-slate-500/10 text-slate-300 text-xs font-medium">{point.volume}</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-slate-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <point.icon className="w-6 h-6 text-slate-400" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{point.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{point.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* System Capabilities Section */}
            <motion.section className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm">Technical Capabilities</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">System Features</h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Mission-critical infrastructure for national security operations.</p>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-6">
                {systemCapabilities.map((cap, i) => (
                  <motion.div key={i} variants={fadeInUp} className="p-6 rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-500/5 to-transparent hover:border-cyan-500/30 transition-colors">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                        <cap.icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <h3 className="text-lg font-bold">{cap.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm">{cap.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* CTA Section */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-r from-blue-500/10 via-slate-500/10 to-transparent border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-slate-500/10 rounded-full blur-[60px]" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <ShieldCheck className="w-6 h-6 text-blue-400" />
                  <span className="text-blue-300 font-medium">National Security</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Secure your borders with smart technology</h3>
                <p className="text-gray-300 mb-8 max-w-2xl">Deploy comprehensive border management systems with biometric verification, watchlist screening, and automated processing.</p>
                <div className="flex flex-wrap gap-4">
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2">
                    Request Briefing <ArrowRight size={18} />
                  </a>
                  <button className="bg-transparent border border-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">View Case Studies</button>
                </div>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}
