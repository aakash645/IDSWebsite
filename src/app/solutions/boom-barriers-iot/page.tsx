'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Breadcrumb, SolutionSidebar, iotRoboticsMenu } from '@/components/solutions';
import { 
  ArrowRight, Car, Radio, Wifi, Shield,
  Clock, Camera, Building, Warehouse, ParkingCircle, ChevronRight
} from 'lucide-react';

// Barrier Types
const barrierTypes = [
  {
    name: 'Standard Boom',
    armLength: '3-6 meters',
    speed: '1.5-3 seconds',
    duty: 'Residential, small offices',
    color: 'bg-ids-blue'
  },
  {
    name: 'High-Speed Barrier',
    armLength: '3-4 meters',
    speed: '0.9-1.2 seconds',
    duty: 'High-traffic commercial',
    color: 'bg-ids-orange'
  },
  {
    name: 'Heavy Duty Boom',
    armLength: '6-8 meters',
    speed: '4-6 seconds',
    duty: 'Industrial, logistics hubs',
    color: 'bg-ids-yellow'
  },
  {
    name: 'Crash-Rated Barrier',
    armLength: 'K4-K12 rated',
    speed: '3-4 seconds',
    duty: 'Critical infrastructure, embassies',
    color: 'bg-red-500'
  }
];

// IoT Features
const iotFeatures = [
  { icon: Radio, title: 'RFID Long-Range', desc: 'Hands-free entry with 8-12m read range for registered vehicles' },
  { icon: Camera, title: 'ANPR Integration', desc: 'Automatic plate recognition for whitelist/blacklist validation' },
  { icon: Wifi, title: 'Cloud Dashboard', desc: 'Real-time status, remote open/close, and analytics' },
  { icon: Clock, title: 'Time Scheduling', desc: 'Auto-open during business hours, secured after hours' }
];

// Applications
const applications = [
  { icon: Building, name: 'Corporate Campuses', desc: 'Control vehicle entry with employee RFID tags' },
  { icon: ParkingCircle, name: 'Paid Parking', desc: 'Ticket-based or ANPR-triggered barrier operation' },
  { icon: Warehouse, name: 'Industrial Gates', desc: 'Heavy-duty barriers for trucks and logistics' }
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

export default function BoomBarriersIotPage() {
  const pageTitle = 'IoT Boom Barriers';
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
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop" 
                  alt="IoT Boom Barriers"
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
                    <Car size={16} /> Vehicle Access Control
                  </span>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
                >
                  IoT Boom<br />
                  <span className="text-ids-orange">Barriers</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-gray-300 text-lg max-w-xl mb-6"
                >
                  Smart boom barriers with RFID, ANPR, and cloud connectivity. Automate vehicle entry, eliminate manual gatekeeping, and monitor access remotely.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link 
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-black font-bold px-6 py-3 rounded-full hover:bg-ids-orange hover:text-white transition-all group"
                  >
                    Get Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-medium px-6 py-3 rounded-full hover:bg-white/20 transition-all border border-white/20">
                    View Catalog
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Section 1: Barrier Types */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-orange to-ids-yellow rounded-full"></div>
                <span className="text-ids-orange font-medium">Product Range</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
                Barrier for Every Application
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-10 max-w-2xl">
                From residential gates to high-security perimeters, choose the right barrier for your traffic and security requirements.
              </motion.p>
              
              <motion.div variants={staggerContainer} className="space-y-3">
                {barrierTypes.map((barrier, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ x: 8 }}
                    className="flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-all"
                  >
                    <div className={`w-2 h-14 rounded-full ${barrier.color}`}></div>
                    <div className="flex-1 grid md:grid-cols-4 gap-4">
                      <div>
                        <span className="text-xs text-gray-500">Model</span>
                        <p className="font-bold text-white">{barrier.name}</p>
                      </div>
                      <div>
                        <span className="text-xs text-gray-500">Arm Length</span>
                        <p className="text-gray-300">{barrier.armLength}</p>
                      </div>
                      <div>
                        <span className="text-xs text-gray-500">Open Speed</span>
                        <p className="text-gray-300">{barrier.speed}</p>
                      </div>
                      <div>
                        <span className="text-xs text-gray-500">Best For</span>
                        <p className="text-ids-yellow text-sm">{barrier.duty}</p>
                      </div>
                    </div>
                    <ChevronRight className="text-gray-500" size={20} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 2: IoT Features */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-blue to-ids-orange rounded-full"></div>
                <span className="text-ids-blue font-medium">Smart Features</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                IoT-Connected Control
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
                {iotFeatures.map((feature, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -4 }}
                    className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 hover:border-ids-blue/30 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ids-blue/20 to-ids-orange/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <feature.icon className="text-ids-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                      <p className="text-gray-400 text-sm">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 3: Applications */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-ids-blue rounded-full"></div>
                <span className="text-green-400 font-medium">Deployments</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                Where We Install
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
                {applications.map((app, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -6 }}
                    className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-green-500/40 transition-all group text-center"
                  >
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-green-500/20 to-ids-blue/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <app.icon className="text-green-400" size={26} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{app.name}</h3>
                    <p className="text-gray-400 text-sm">{app.desc}</p>
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
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Automate Your Entry Points</h3>
                <p className="text-gray-300 mb-8 max-w-2xl">
                  Complete solution including barrier hardware, RFID readers, ANPR cameras, and cloud software. Professional installation and AMC available.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-ids-orange hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    Request Site Survey <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/contact" className="bg-transparent border border-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                    Download Specs
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
