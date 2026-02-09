'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BOOKING_URL } from '@/constants';
import { Breadcrumb, SolutionSidebar, softwarePlatformsMenu } from '@/components/solutions';
import { ArrowRight, Car, ClipboardCheck, Timer, Camera, Cpu, Route, CircleDot, Gauge, CheckCircle, AlertTriangle, FileCheck, Video, MapPin, Bike, Truck } from 'lucide-react';

// Track automation modules
const trackModules = [
  { icon: Route, title: 'Automated Track Controller', desc: 'RFID-triggered sensor arrays detect vehicle position, measure speed, and evaluate maneuver accuracy in real-time' },
  { icon: Camera, title: 'Video Evidence System', desc: 'Multi-camera recording with automatic timestamp sync, violation tagging, and archival for audit trail' },
  { icon: Timer, title: 'Precision Timing', desc: 'Millisecond-accurate lap timing with RFID start/stop triggers and automated pass/fail evaluation' },
  { icon: ClipboardCheck, title: 'Scoring Engine', desc: 'Configurable marking scheme for each maneuver—parallel parking, slope start, 8-track, H-track, and more' },
];

// RTO software features
const rtoFeatures = [
  { icon: Cpu, title: 'Sarathi Integration', desc: 'Seamless API connectivity with MoRTH Sarathi portal for applicant data sync, result upload, and DL issuance automation.', stat: 'Real-time Sync' },
  { icon: FileCheck, title: 'LL/DL Workflow', desc: 'End-to-end learner license to driving license journey—slot booking, fee collection, test scheduling, result declaration.', stat: '100% Digital' },
  { icon: Video, title: 'Live Streaming', desc: 'Stream test footage to waiting area displays and supervisory dashboards for transparency and reduced grievances.', stat: 'Anti-Corruption' },
  { icon: AlertTriangle, title: 'Violation Detection', desc: 'AI-assisted detection of track boundary violations, cone hits, incomplete maneuvers, and time overruns.', stat: 'AI-Powered' },
];

// Vehicle types supported
const vehicleTypes = [
  { icon: Bike, type: 'Two Wheeler', tests: '8-Track, Slalom, Balance', duration: '3-5 mins' },
  { icon: Car, type: 'Light Motor Vehicle', tests: 'Parallel Parking, Slope Start, Reverse S', duration: '8-12 mins' },
  { icon: Truck, type: 'Heavy Vehicle', tests: 'H-Track, Gradient, Dimension Parking', duration: '12-18 mins' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function RTOSoftwarePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="pt-24 min-h-screen bg-[#0f172a] text-white">
      <Breadcrumb pageTitle="Driving Test Track & RTO Software" parentService="Software & Platforms" parentPath="/software-platforms" />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <SolutionSidebar menuTitle="Software & Platforms" sections={softwarePlatformsMenu} />

          <main className="w-full lg:w-3/4 order-1 lg:order-2">
            {/* Hero Section */}
            <motion.div ref={heroRef} className="relative h-[60vh] min-h-[400px] rounded-3xl overflow-hidden mb-16" style={{ y: heroY }}>
              <motion.div className="absolute inset-0" style={{ opacity: heroOpacity }}>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/30 via-red-600/20 to-transparent z-10" />
                <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop" alt="RTO Driving Test Track" className="w-full h-full object-cover" />
              </motion.div>
              <div className="absolute inset-0 z-20 flex items-end p-8 md:p-12">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                  <span className="inline-block px-4 py-1 rounded-full bg-orange-500/20 text-orange-300 text-sm font-medium mb-4 border border-orange-500/30">Government Transport Automation</span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">Driving Test Track &<br /><span className="text-orange-400">RTO Software</span></h1>
                  <p className="text-xl text-gray-300 max-w-2xl">Fully automated driving test tracks with Sarathi-integrated software for transparent, tamper-proof license testing.</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Track Automation Section */}
            <motion.section className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="text-orange-400 font-semibold tracking-wider uppercase text-sm">Track Automation</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Automated Test Track Components</h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">RFID sensors, ground loops, and precision timing eliminate human bias and ensure fair evaluation for every candidate.</p>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-6">
                {trackModules.map((module, i) => (
                  <motion.div key={i} variants={fadeInUp} className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-orange-500/50 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                        <module.icon className="w-7 h-7 text-orange-400" />
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

            {/* RTO Software Features Section */}
            <motion.section className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="text-red-400 font-semibold tracking-wider uppercase text-sm">Software Platform</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">RTO Management Software</h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Complete digitization of driving test operations—from applicant registration to license printing.</p>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-6">
                {rtoFeatures.map((feature, i) => (
                  <motion.div key={i} variants={fadeInUp} className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-300 text-xs font-medium">{feature.stat}</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-red-400" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Vehicle Types Section */}
            <motion.section className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="text-yellow-400 font-semibold tracking-wider uppercase text-sm">Multi-Vehicle Support</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Supported Vehicle Categories</h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Configurable tracks for two-wheelers, cars, and heavy vehicles with category-specific test protocols.</p>
              </motion.div>
              <div className="grid md:grid-cols-3 gap-6">
                {vehicleTypes.map((vehicle, i) => (
                  <motion.div key={i} variants={fadeInUp} className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-yellow-500/5 to-transparent hover:border-yellow-500/30 transition-colors text-center">
                    <div className="w-16 h-16 rounded-2xl bg-yellow-500/10 flex items-center justify-center mx-auto mb-4">
                      <vehicle.icon className="w-8 h-8 text-yellow-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{vehicle.type}</h3>
                    <p className="text-gray-400 text-sm mb-3">{vehicle.tests}</p>
                    <span className="inline-flex items-center gap-1 text-yellow-400 text-sm font-medium">
                      <Timer className="w-4 h-4" /> {vehicle.duration}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* CTA Section */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-r from-orange-500/10 via-red-500/10 to-transparent border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-500/10 rounded-full blur-[60px]" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <Gauge className="w-6 h-6 text-orange-400" />
                  <span className="text-orange-300 font-medium">State Transport Departments</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Modernize your RTO with automation</h3>
                <p className="text-gray-300 mb-8 max-w-2xl">Deploy sensor-based driving tracks and integrated software to eliminate manual evaluation and achieve 100% transparency in license testing.</p>
                <div className="flex flex-wrap gap-4">
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2">
                    Request Proposal <ArrowRight size={18} />
                  </a>
                  <button className="bg-transparent border border-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">View Case Study</button>
                </div>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}
