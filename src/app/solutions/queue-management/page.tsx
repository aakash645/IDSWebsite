'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Breadcrumb, SolutionSidebar, iotRoboticsMenu } from '@/components/solutions';
import { 
  ArrowRight, Ticket, Monitor, Bell, BarChart3,
  Building, Hospital, Landmark, Users
} from 'lucide-react';

// System Components
const systemComponents = [
  {
    name: 'Token Dispenser',
    features: ['Touchscreen', 'Print/SMS token', 'Multi-service'],
    output: 'Paper ticket or digital',
    color: 'bg-ids-orange'
  },
  {
    name: 'Counter Display',
    features: ['LED/LCD panels', 'Voice calling', 'Multi-language'],
    output: 'Real-time token status',
    color: 'bg-ids-blue'
  },
  {
    name: 'Central Dashboard',
    features: ['Wait time analytics', 'Staff performance', 'Alerts'],
    output: 'Management reports',
    color: 'bg-green-500'
  }
];

// Features
const features = [
  { icon: Ticket, name: 'Multi-Service Tokens', desc: 'Category-based token allocation' },
  { icon: Bell, name: 'SMS & Voice Alerts', desc: 'Notify when turn approaches' },
  { icon: Monitor, name: 'Digital Signage', desc: 'Integrated display content' },
  { icon: BarChart3, name: 'Analytics', desc: 'Wait time & throughput reports' }
];

// Deployment Sectors
const sectors = [
  { icon: Landmark, name: 'Government', desc: 'RTOs, municipal offices' },
  { icon: Hospital, name: 'Healthcare', desc: 'OPD, labs, pharmacy' },
  { icon: Building, name: 'Banking', desc: 'Branch service counters' },
  { icon: Users, name: 'Telecom', desc: 'Customer service centers' }
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

export default function QueueManagementPage() {
  const pageTitle = 'Queue Management Systems';
  const parentService = 'IoT & Robotics';
  
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="pt-24 min-h-screen bg-[#0f172a] text-white overflow-hidden">
      <Breadcrumb pageTitle={pageTitle} parentService={parentService} parentPath="/iot-robotics" />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <SolutionSidebar menuTitle={parentService} sections={iotRoboticsMenu} />

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
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Queue Management Systems"
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
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-ids-orange/20 backdrop-blur-sm rounded-full text-ids-orange text-sm font-medium mb-4">
                    <Ticket size={16} /> Token Systems
                  </span>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
                >
                  Queue<br />
                  <span className="text-ids-orange">Management</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-gray-300 text-lg max-w-xl mb-6"
                >
                  Complete queue management with token dispensers, counter displays, voice calling, and analytics dashboard.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link 
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-black font-bold px-6 py-3 rounded-full hover:bg-ids-orange hover:text-black transition-all group"
                  >
                    Get Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Section 1: System Components */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-orange to-ids-blue rounded-full"></div>
                <span className="text-ids-orange font-medium">System</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                System Components
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
                {systemComponents.map((comp, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -6 }}
                    className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-white/30 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-3 h-10 rounded-full ${comp.color}`}></div>
                      <h3 className="font-bold">{comp.name}</h3>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {comp.features.map((feat, j) => (
                        <span key={j} className="text-xs px-2 py-1 bg-white/5 rounded text-gray-300">{feat}</span>
                      ))}
                    </div>
                    <p className="text-xs text-gray-400">{comp.output}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 2: Features */}
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
                Key Features
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-5">
                {features.map((f, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/5 hover:border-ids-blue/40 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ids-blue/20 to-green-500/10 flex items-center justify-center shrink-0">
                      <f.icon className="text-ids-blue" size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-0.5">{f.name}</h3>
                      <p className="text-gray-400 text-sm">{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 3: Sectors */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-ids-yellow rounded-full"></div>
                <span className="text-green-400 font-medium">Industries</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                Deployment Sectors
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-5">
                {sectors.map((sector, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -4 }}
                    className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-green-500/40 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-ids-yellow/10 flex items-center justify-center shrink-0">
                      <sector.icon className="text-green-400" size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-0.5">{sector.name}</h3>
                      <p className="text-gray-400 text-sm">{sector.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* CTA Section */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-ids-orange/10 via-ids-blue/5 to-transparent border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-72 h-72 bg-ids-orange/10 rounded-full blur-[100px]"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Improve Customer Flow</h3>
                <p className="text-gray-300 mb-8 max-w-2xl">
                  Reduce wait times and improve service efficiency with intelligent queue management.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-ids-orange transition-colors flex items-center gap-2 group"
                  >
                    Request Demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/solutions/info-kiosks" className="bg-transparent border border-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                    Info Kiosks
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
