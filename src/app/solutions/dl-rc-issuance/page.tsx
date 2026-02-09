'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BOOKING_URL } from '@/constants';
import { Breadcrumb, SolutionSidebar, identityAccessMenu } from '@/components/solutions';
import { ArrowRight, CreditCard, Car, Printer, FileCheck, Scan, Shield, RefreshCw, Layers, CheckCircle, Clock, BadgeCheck, Truck, Bike, Bus } from 'lucide-react';

// Card production workflow
const productionWorkflow = [
  { step: '01', icon: Scan, title: 'Data Capture', desc: 'Applicant photo, signature, and biometrics captured at RTO with quality validation' },
  { step: '02', icon: FileCheck, title: 'Sarathi Sync', desc: 'Real-time data exchange with MoRTH Sarathi/Parivahan portal for approval status' },
  { step: '03', icon: Printer, title: 'Card Printing', desc: 'High-security card personalization with UV, hologram, and laser engraving' },
  { step: '04', icon: BadgeCheck, title: 'Quality Assurance', desc: 'Automated visual inspection and chip encoding verification before dispatch' },
];

// Security features
const securityFeatures = [
  { icon: Shield, title: 'Multi-Layer Hologram', desc: 'State-specific holographic overlay with Ashoka Pillar, microtext, and hidden image security features.', type: 'Visual Security' },
  { icon: Layers, title: 'Polycarbonate Core', desc: 'Fusion-grade polycarbonate construction with tamper-evident laminate preventing delamination.', type: 'Card Durability' },
  { icon: Scan, title: 'QR Code Integration', desc: 'Encrypted QR containing license data readable by traffic police mobile apps for instant verification.', type: 'Digital Verification' },
  { icon: RefreshCw, title: 'Chip Encoding', desc: 'Optional RFID/NFC chip storing biometric template and vehicle class endorsements for e-challan systems.', type: 'Smart Card Ready' },
];

// Document types
const documentTypes = [
  { icon: CreditCard, type: 'Driving License', features: 'LMV, MCWG, HMV endorsements with validity dates', format: 'ISO CR80' },
  { icon: Car, type: 'Registration Certificate', features: 'Vehicle details, owner info, hypothecation status', format: 'Smart Card' },
  { icon: Truck, type: 'Permit Cards', features: 'State/national permits for commercial vehicles', format: 'ISO CR80' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function DlRcIssuancePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="pt-24 min-h-screen bg-[#0f172a] text-white">
      <Breadcrumb pageTitle="DL & RC Issuance Systems" parentService="Identity & Access" parentPath="/identity-access" />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <SolutionSidebar menuTitle="Identity & Access" sections={identityAccessMenu} />

          <main className="w-full lg:w-3/4 order-1 lg:order-2">
            {/* Hero Section */}
            <motion.div ref={heroRef} className="relative h-[60vh] min-h-[400px] rounded-3xl overflow-hidden mb-16" style={{ y: heroY }}>
              <motion.div className="absolute inset-0" style={{ opacity: heroOpacity }}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-indigo-600/20 to-transparent z-10" />
                <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop" alt="DL RC Issuance" className="w-full h-full object-cover" />
              </motion.div>
              <div className="absolute inset-0 z-20 flex items-end p-8 md:p-12">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                  <span className="inline-block px-4 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-4 border border-blue-500/30">State Transport Authority</span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">DL & RC<br /><span className="text-blue-400">Issuance Systems</span></h1>
                  <p className="text-xl text-gray-300 max-w-2xl">End-to-end card production systems for Driving Licenses and Registration Certificates with Sarathi integration.</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Production Workflow Section */}
            <motion.section className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm">Production Pipeline</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Card Issuance Workflow</h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">From applicant data capture at RTO to dispatch-ready card—a fully integrated production system.</p>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-6">
                {productionWorkflow.map((step, i) => (
                  <motion.div key={i} variants={fadeInUp} className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                          <step.icon className="w-7 h-7 text-blue-400" />
                        </div>
                        <span className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-blue-500 text-xs font-bold flex items-center justify-center">{step.step}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Security Features Section */}
            <motion.section className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="text-indigo-400 font-semibold tracking-wider uppercase text-sm">Anti-Counterfeit</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Security Features</h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Multi-layer security elements preventing duplication and ensuring nationwide acceptance.</p>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-6">
                {securityFeatures.map((feature, i) => (
                  <motion.div key={i} variants={fadeInUp} className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs font-medium">{feature.type}</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-indigo-400" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Document Types Section */}
            <motion.section className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="text-purple-400 font-semibold tracking-wider uppercase text-sm">Document Portfolio</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Cards We Produce</h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Complete range of transport documents from learner permits to commercial vehicle permits.</p>
              </motion.div>
              <div className="grid md:grid-cols-3 gap-6">
                {documentTypes.map((doc, i) => (
                  <motion.div key={i} variants={fadeInUp} className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/5 to-transparent hover:border-purple-500/30 transition-colors text-center">
                    <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                      <doc.icon className="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{doc.type}</h3>
                    <p className="text-gray-400 text-sm mb-3">{doc.features}</p>
                    <span className="inline-flex items-center gap-1 text-purple-400 text-sm font-medium">
                      <CreditCard className="w-4 h-4" /> {doc.format}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* CTA Section */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-transparent border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-[60px]" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <CreditCard className="w-6 h-6 text-blue-400" />
                  <span className="text-blue-300 font-medium">State Transport Departments</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Upgrade your DL/RC issuance infrastructure</h3>
                <p className="text-gray-300 mb-8 max-w-2xl">Partner with us for secure, high-volume card production with Sarathi integration and nationwide dispatch logistics.</p>
                <div className="flex flex-wrap gap-4">
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2">
                    Request Proposal <ArrowRight size={18} />
                  </a>
                  <button className="bg-transparent border border-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">View Sample Cards</button>
                </div>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}
