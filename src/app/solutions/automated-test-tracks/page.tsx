'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Breadcrumb, SolutionSidebar, iotRoboticsMenu } from '@/components/solutions';
import { 
  ArrowRight, Car, BarChart3, Bot, Timer,
  ParkingCircle, ArrowUpRight, Gauge, Check
} from 'lucide-react';

// Test Modules
const testModules = [
  { name: 'Parallel Parking', desc: 'Automated bay detection, sensor-based evaluation', icon: ParkingCircle, time: '180 sec' },
  { name: 'Slope Hold', desc: 'Gradient start/stop without rollback', icon: ArrowUpRight, time: '60 sec' },
  { name: 'Speed Zone', desc: 'Maintain speed within defined corridor', icon: Gauge, time: '120 sec' },
  { name: '8-Track / S-Curve', desc: 'Continuous curve navigation test', icon: Car, time: '240 sec' }
];

// System Features
const systemFeatures = [
  { icon: Bot, name: 'Robotic Sensors', desc: 'Ground & pole-mounted detection' },
  { icon: Timer, name: 'Real-time Scoring', desc: 'Instant pass/fail results' },
  { icon: BarChart3, name: 'Analytics Dashboard', desc: 'RTO-wide performance stats' },
  { icon: Check, name: 'Tamper-Proof', desc: 'Encrypted, auditable logs' }
];

// Benefits
const benefits = [
  { title: 'Zero Manual Scoring', value: '100%', desc: 'Automated evaluation' },
  { title: 'Test Throughput', value: '3x', desc: 'Higher daily capacity' },
  { title: 'Transparency', value: '100%', desc: 'Video + sensor evidence' }
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

export default function AutomatedTestTracksPage() {
  const pageTitle = 'Automated Driving Test Tracks';
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
                  src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Automated Driving Test Tracks"
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
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 backdrop-blur-sm rounded-full text-green-400 text-sm font-medium mb-4">
                    <Car size={16} /> RTO Automation
                  </span>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
                >
                  Automated Driving<br />
                  <span className="text-green-400">Test Tracks</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-gray-300 text-lg max-w-xl mb-6"
                >
                  Sensor-based automated driving test infrastructure for RTOs. Transparent, tamper-proof evaluation with real-time scoring.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link 
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-black font-bold px-6 py-3 rounded-full hover:bg-green-400 hover:text-black transition-all group"
                  >
                    Get Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Section 1: Test Modules */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-ids-blue rounded-full"></div>
                <span className="text-green-400 font-medium">Modules</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                Test Modules
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-5">
                {testModules.map((mod, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/5 hover:border-green-500/40 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-ids-blue/10 flex items-center justify-center shrink-0">
                      <mod.icon className="text-green-400" size={22} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-bold">{mod.name}</h3>
                        <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded">{mod.time}</span>
                      </div>
                      <p className="text-gray-400 text-sm">{mod.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 2: System Features */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-blue to-ids-orange rounded-full"></div>
                <span className="text-ids-blue font-medium">Technology</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                System Features
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-5">
                {systemFeatures.map((feat, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -4 }}
                    className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-ids-blue/40 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ids-blue/20 to-ids-orange/10 flex items-center justify-center shrink-0">
                      <feat.icon className="text-ids-blue" size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-0.5">{feat.name}</h3>
                      <p className="text-gray-400 text-sm">{feat.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 3: Benefits */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-orange to-ids-yellow rounded-full"></div>
                <span className="text-ids-orange font-medium">Impact</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                Key Benefits
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
                {benefits.map((ben, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -6 }}
                    className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-ids-orange/40 transition-all text-center"
                  >
                    <div className="text-4xl font-bold text-ids-orange mb-2">{ben.value}</div>
                    <h3 className="font-bold mb-1">{ben.title}</h3>
                    <p className="text-xs text-gray-400">{ben.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* CTA Section */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-green-500/10 via-ids-blue/5 to-transparent border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-72 h-72 bg-green-500/10 rounded-full blur-[100px]"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Modernize Your RTO</h3>
                <p className="text-gray-300 mb-8 max-w-2xl">
                  Deploy automated test tracks with sensor-based evaluation for transparent, efficient driving tests.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-green-400 transition-colors flex items-center gap-2 group"
                  >
                    Request Demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/solutions/driving-test-robotics" className="bg-transparent border border-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                    Test Robotics
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
