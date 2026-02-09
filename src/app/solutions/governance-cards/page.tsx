'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BOOKING_URL } from '@/constants';
import { Breadcrumb, SolutionSidebar, identityAccessMenu } from '@/components/solutions';
import { ArrowRight, CreditCard, Shield, Fingerprint, Scan, Layers, BadgeCheck, Landmark, GraduationCap, Heart, Briefcase, Users, Cpu, Printer, CheckCircle } from 'lucide-react';

// Card types and programs
const cardPrograms = [
  { icon: Landmark, title: 'National ID Cards', desc: 'Population-scale identity cards with biometric data, RFID chip encoding, and multi-layer security features' },
  { icon: CreditCard, title: 'Driving License', desc: 'ISO CR80 format DL cards with MRZ, 2D barcode, and state-specific security overlays for RTO issuance' },
  { icon: Heart, title: 'Health Cards', desc: 'ABHA (Ayushman Bharat Health Account) enabled cards linking beneficiaries to health insurance schemes' },
  { icon: GraduationCap, title: 'Student IDs', desc: 'University and school identity cards with library access, exam hall entry, and attendance tracking' },
];

// Security features
const securityLayers = [
  { icon: Layers, title: 'Holographic Overlays', desc: 'Custom die-pattern holograms with micro-text, hidden images, and color-shifting elements.', level: 'Level 1' },
  { icon: Shield, title: 'Laser Engraving', desc: 'Tactile personalization of name, photo, and ID number that cannot be altered without detection.', level: 'Level 2' },
  { icon: Fingerprint, title: 'Biometric Chip', desc: 'Dual-interface RFID/NFC chip storing fingerprint templates, face image, and demographic data.', level: 'Level 3' },
  { icon: Scan, title: 'UV & IR Features', desc: 'Fluorescent inks and IR-readable patterns visible only under specialized light sources.', level: 'Covert' },
];

// Production capabilities
const productionCapabilities = [
  { icon: Cpu, title: 'Central Issuance', desc: 'High-volume card production facilities with 100,000+ cards/day capacity and nationwide logistics' },
  { icon: Printer, title: 'Instant Issuance', desc: 'Desktop printers at government offices for same-day card delivery with secure personalization' },
  { icon: Users, title: 'Multi-State Rollout', desc: 'Experience deploying identity cards across 15+ Indian states with regional customization' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function GovernanceCardsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="pt-24 min-h-screen bg-[#0f172a] text-white">
      <Breadcrumb pageTitle="Governance Card Solutions" parentService="Identity & Access" parentPath="/identity-access" />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <SolutionSidebar menuTitle="Identity & Access" sections={identityAccessMenu} />

          <main className="w-full lg:w-3/4 order-1 lg:order-2">
            {/* Hero Section */}
            <motion.div ref={heroRef} className="relative h-[60vh] min-h-[400px] rounded-3xl overflow-hidden mb-16" style={{ y: heroY }}>
              <motion.div className="absolute inset-0" style={{ opacity: heroOpacity }}>
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/30 via-orange-600/20 to-transparent z-10" />
                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop" alt="Governance Cards" className="w-full h-full object-cover" />
              </motion.div>
              <div className="absolute inset-0 z-20 flex items-end p-8 md:p-12">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                  <span className="inline-block px-4 py-1 rounded-full bg-amber-500/20 text-amber-300 text-sm font-medium mb-4 border border-amber-500/30">Government ID Programs</span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">Governance<br /><span className="text-amber-400">Card Solutions</span></h1>
                  <p className="text-xl text-gray-300 max-w-2xl">Secure identity cards for government programs—national IDs, driving licenses, health cards, and more.</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Card Programs Section */}
            <motion.section className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="text-amber-400 font-semibold tracking-wider uppercase text-sm">Card Portfolio</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Government ID Programs</h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">End-to-end card production for national and state-level identity initiatives.</p>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-6">
                {cardPrograms.map((program, i) => (
                  <motion.div key={i} variants={fadeInUp} className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-amber-500/50 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                        <program.icon className="w-7 h-7 text-amber-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{program.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Security Layers Section */}
            <motion.section className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="text-orange-400 font-semibold tracking-wider uppercase text-sm">Anti-Counterfeit</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Multi-Layer Security</h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Defense-in-depth security features preventing forgery and duplication.</p>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-6">
                {securityLayers.map((layer, i) => (
                  <motion.div key={i} variants={fadeInUp} className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-300 text-xs font-medium">{layer.level}</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <layer.icon className="w-6 h-6 text-orange-400" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{layer.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{layer.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Production Capabilities Section */}
            <motion.section className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="text-yellow-400 font-semibold tracking-wider uppercase text-sm">Production Scale</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Issuance Capabilities</h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">From central bureaus to instant issuance—flexible production models for any scale.</p>
              </motion.div>
              <div className="grid md:grid-cols-3 gap-6">
                {productionCapabilities.map((cap, i) => (
                  <motion.div key={i} variants={fadeInUp} className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-yellow-500/5 to-transparent hover:border-yellow-500/30 transition-colors text-center">
                    <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 flex items-center justify-center mx-auto mb-4">
                      <cap.icon className="w-7 h-7 text-yellow-400" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{cap.title}</h3>
                    <p className="text-gray-400 text-sm">{cap.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* CTA Section */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-transparent border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/10 rounded-full blur-[60px]" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <BadgeCheck className="w-6 h-6 text-amber-400" />
                  <span className="text-amber-300 font-medium">Government ID Partner</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Launch your next identity program</h3>
                <p className="text-gray-300 mb-8 max-w-2xl">Partner with us for secure card design, production, and issuance—trusted by state and central government agencies.</p>
                <div className="flex flex-wrap gap-4">
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2">
                    Request Proposal <ArrowRight size={18} />
                  </a>
                  <button className="bg-transparent border border-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">View Card Samples</button>
                </div>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}
