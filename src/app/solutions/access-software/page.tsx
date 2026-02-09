'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BOOKING_URL } from '@/constants';
import { Breadcrumb, SolutionSidebar, softwarePlatformsMenu } from '@/components/solutions';
import { ArrowRight, Shield, Users, Clock, Lock, UserCheck, DoorOpen, Layers, Fingerprint, Key, Building2, Factory, GraduationCap, Landmark } from 'lucide-react';

// Core software modules for access management
const coreModules = [
  { icon: Users, title: 'User Directory', desc: 'Centralized user profiles with role hierarchies, department mapping, and access group assignments across facilities' },
  { icon: DoorOpen, title: 'Zone Management', desc: 'Configure access zones, time-based restrictions, and multi-door interlocking for secure area transitions' },
  { icon: Clock, title: 'Schedule Engine', desc: 'Flexible shift patterns, holiday calendars, and overtime rules with automatic access adjustment' },
  { icon: Lock, title: 'Credential Manager', desc: 'Issue, revoke, and track RFID cards, biometric templates, PIN codes, and mobile credentials' },
];

// Access control features and capabilities
const accessFeatures = [
  { icon: Fingerprint, title: 'Multi-Factor Auth', desc: 'Combine card + biometric + PIN for high-security zones. Configurable per door or user group.', highlight: 'Enhanced Security' },
  { icon: Layers, title: 'Anti-Passback', desc: 'Hard and soft anti-passback rules prevent tailgating and ensure accurate occupancy tracking.', highlight: 'Tailgate Prevention' },
  { icon: UserCheck, title: 'Visitor Pre-Registration', desc: 'Online registration portal with host approval workflows and temporary credential generation.', highlight: 'Guest Management' },
  { icon: Key, title: 'Mustering & Evacuation', desc: 'Real-time headcount during emergencies with automatic roll-call and safe-zone reporting.', highlight: 'Emergency Response' },
];

// Deployment verticals
const deploymentSectors = [
  { icon: Building2, sector: 'Corporate Offices', users: '500-50,000', features: 'Floor-wise access, meeting room booking, parking integration' },
  { icon: Factory, sector: 'Manufacturing Plants', users: '1,000-25,000', features: 'Shift management, contractor tracking, hazardous zone control' },
  { icon: GraduationCap, sector: 'Educational Campuses', users: '5,000-100,000', features: 'Student/staff separation, hostel curfew, exam hall security' },
  { icon: Landmark, sector: 'Government Facilities', users: '200-10,000', features: 'Security clearance levels, audit compliance, visitor screening' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function AccessSoftwarePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="pt-24 min-h-screen bg-[#0f172a] text-white">
      <Breadcrumb pageTitle="Access Management Software" parentService="Software & Platforms" parentPath="/software-platforms" />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <SolutionSidebar menuTitle="Software & Platforms" sections={softwarePlatformsMenu} />

          <main className="w-full lg:w-3/4 order-1 lg:order-2">
            {/* Hero Section */}
            <motion.div ref={heroRef} className="relative h-[60vh] min-h-[400px] rounded-3xl overflow-hidden mb-16" style={{ y: heroY }}>
              <motion.div className="absolute inset-0" style={{ opacity: heroOpacity }}>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-blue-600/20 to-transparent z-10" />
                <Image src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop" alt="Access Management Software" fill className="object-cover" />
              </motion.div>
              <div className="absolute inset-0 z-20 flex items-end p-8 md:p-12">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                  <span className="inline-block px-4 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm font-medium mb-4 border border-purple-500/30">Enterprise Access Control</span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">Access Management<br /><span className="text-purple-400">Software</span></h1>
                  <p className="text-xl text-gray-300 max-w-2xl">Unified platform to manage physical access across locations with role-based policies, real-time monitoring, and compliance automation.</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Core Modules Section */}
            <motion.section className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="text-purple-400 font-semibold tracking-wider uppercase text-sm">Platform Architecture</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Core Software Modules</h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Modular architecture enabling organizations to deploy what they need, from basic door control to enterprise-wide access governance.</p>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-6">
                {coreModules.map((module, i) => (
                  <motion.div key={i} variants={fadeInUp} className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                        <module.icon className="w-7 h-7 text-purple-400" />
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

            {/* Access Features Section */}
            <motion.section className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm">Security Features</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Advanced Access Control</h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Beyond basic entry-exit, our software enforces sophisticated policies for high-security environments.</p>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-6">
                {accessFeatures.map((feature, i) => (
                  <motion.div key={i} variants={fadeInUp} className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-xs font-medium">{feature.highlight}</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Deployment Sectors Section */}
            <motion.section className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="text-green-400 font-semibold tracking-wider uppercase text-sm">Industry Deployments</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Deployed Across Sectors</h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Scalable from a single office to distributed enterprises with thousands of access points.</p>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-6">
                {deploymentSectors.map((sector, i) => (
                  <motion.div key={i} variants={fadeInUp} className="p-6 rounded-2xl border border-white/10 bg-gradient-to-r from-green-500/5 to-transparent hover:border-green-500/30 transition-colors">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                        <sector.icon className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{sector.sector}</h3>
                        <span className="text-sm text-green-400">{sector.users} users</span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">{sector.features}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* CTA Section */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-transparent border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-[60px]" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-6 h-6 text-purple-400" />
                  <span className="text-purple-300 font-medium">Secure Access Platform</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to centralize access control?</h3>
                <p className="text-gray-300 mb-8 max-w-2xl">Deploy our Access Management Software and gain real-time visibility into who enters your facilities, when, and why.</p>
                <div className="flex flex-wrap gap-4">
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2">
                    Schedule Demo <ArrowRight size={18} />
                  </a>
                  <button className="bg-transparent border border-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">Download Brochure</button>
                </div>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}
