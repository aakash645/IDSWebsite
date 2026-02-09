'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Breadcrumb, SolutionSidebar, identityAccessMenu } from '@/components/solutions';
import { 
  ArrowRight, AlertTriangle, Radio, Eye, Bell,
  Shield, Lock, Smartphone, Clock, Zap, MonitorCheck
} from 'lucide-react';

// Detection Technologies
const detectionTech = [
  {
    icon: Radio,
    name: 'PIR Motion Sensors',
    desc: 'Passive infrared detects body heat movement. Indoor and outdoor variants.',
    range: 'Up to 12m'
  },
  {
    icon: Eye,
    name: 'Beam Barriers',
    desc: 'Invisible infrared beams across doorways or perimeters. Multi-beam for anti-crawl.',
    range: 'Up to 100m'
  },
  {
    icon: Lock,
    name: 'Door/Window Contacts',
    desc: 'Magnetic contacts detect when doors or windows are opened unexpectedly.',
    range: 'Wired/Wireless'
  },
  {
    icon: AlertTriangle,
    name: 'Glass Break Detectors',
    desc: 'Acoustic sensors detect the specific frequency of breaking glass.',
    range: '6m radius'
  }
];

// Alert Response
const alertActions = [
  { step: '1', title: 'Detect', desc: 'Sensor triggers on unauthorized movement', icon: Eye },
  { step: '2', title: 'Alert', desc: 'Instant notification to control room & mobile', icon: Bell },
  { step: '3', title: 'Verify', desc: 'CCTV auto-focuses on zone for visual confirmation', icon: MonitorCheck },
  { step: '4', title: 'Respond', desc: 'Dispatch security or trigger automated lockdown', icon: Shield }
];

// System Features
const features = [
  { icon: Smartphone, title: 'Mobile Alerts', desc: 'Push notifications and SMS to security team' },
  { icon: Clock, title: 'Arm/Disarm Scheduling', desc: 'Auto-arm after business hours, weekends, holidays' },
  { icon: Zap, title: 'Integration Ready', desc: 'Connects to CCTV, access control, and fire systems' }
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function IntrusionMonitoringPage() {
  const pageTitle = 'Intrusion Detection & Monitoring';
  const parentService = 'Identity & Access';
  
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="pt-24 min-h-screen bg-[#0f172a] text-white overflow-hidden">
      <Breadcrumb pageTitle={pageTitle} parentService={parentService} parentPath="/identity-access" />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <SolutionSidebar menuTitle={parentService} sections={identityAccessMenu} />

          <main className="w-full lg:w-3/4 order-1 lg:order-2">
            
            {/* Hero Section */}
            <motion.div 
              ref={heroRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative rounded-3xl overflow-hidden mb-16"
            >
              <motion.div style={{ y: heroY }} className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop" 
                  alt="Intrusion Detection"
                  className="w-full h-[420px] md:h-[480px] object-cover scale-110"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/80 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-[#0f172a]/20"></div>
              
              <motion.div 
                style={{ opacity: heroOpacity }}
                className="relative z-10 p-8 md:p-12 h-[420px] md:h-[480px] flex flex-col justify-end"
              >
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 backdrop-blur-sm rounded-full text-red-400 text-sm font-medium mb-4">
                    <AlertTriangle size={16} /> 24/7 Monitoring
                  </span>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
                >
                  Intrusion Detection<br />
                  <span className="text-red-400">& Monitoring</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-gray-300 text-lg max-w-xl mb-6"
                >
                  Detect unauthorized entry with motion sensors, beam barriers, and contact sensors. Instant alerts to security teams with CCTV verification.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link 
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-black font-bold px-6 py-3 rounded-full hover:bg-red-500 hover:text-white transition-all group"
                  >
                    Get Security Assessment <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-medium px-6 py-3 rounded-full hover:bg-white/20 transition-all border border-white/20">
                    View Sensors
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Section 1: Detection Technologies */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-ids-orange rounded-full"></div>
                <span className="text-red-400 font-medium">Sensors</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
                Detection Technologies
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-10 max-w-2xl">
                Multiple sensor types for comprehensive perimeter and interior protection.
              </motion.p>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
                {detectionTech.map((tech, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -4 }}
                    className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-ids-orange/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <tech.icon className="text-red-400" size={24} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-lg">{tech.name}</h3>
                        <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full text-gray-400">{tech.range}</span>
                      </div>
                      <p className="text-gray-400 text-sm">{tech.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 2: Alert Response Flow */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-orange to-ids-yellow rounded-full"></div>
                <span className="text-ids-orange font-medium">Response</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                From Detection to Response
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-4 gap-6">
                {alertActions.map((action, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    className="relative p-5 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/5 text-center"
                  >
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-ids-orange text-black flex items-center justify-center font-bold text-sm">
                      {action.step}
                    </div>
                    <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-ids-orange/20 to-ids-yellow/10 flex items-center justify-center mt-4 mb-3">
                      <action.icon className="text-ids-orange" size={22} />
                    </div>
                    <h3 className="font-bold mb-1">{action.title}</h3>
                    <p className="text-gray-400 text-xs">{action.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 3: System Features */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-blue to-green-500 rounded-full"></div>
                <span className="text-ids-blue font-medium">Features</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                Smart System Capabilities
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
                {features.map((feature, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -6 }}
                    className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-ids-blue/40 transition-all group text-center"
                  >
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-ids-blue/20 to-green-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <feature.icon className="text-ids-blue" size={26} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* CTA Section */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-red-500/10 via-ids-orange/5 to-transparent border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-72 h-72 bg-red-500/10 rounded-full blur-[100px]"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Protect Your Premises 24/7</h3>
                <p className="text-gray-300 mb-8 max-w-2xl">
                  Comprehensive intrusion detection integrated with CCTV and access control. Professional design, installation, and optional monitoring services.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-red-500 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    Request Assessment <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/contact" className="bg-transparent border border-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                    Download Brochure
                  </Link>
                </div>
              </div>
            </motion.div>

          </main>
        </div>
      </div>
    </div>
  );
}
