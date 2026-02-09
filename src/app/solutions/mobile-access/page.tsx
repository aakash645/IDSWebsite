'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Breadcrumb, SolutionSidebar, identityAccessMenu } from '@/components/solutions';
import { 
  ArrowRight, Smartphone, Bluetooth, Wifi, NfcIcon,
  Shield, RefreshCw, Users, Download, Cloud
} from 'lucide-react';

// Mobile Access Technologies
const accessTechnologies = [
  {
    icon: Bluetooth,
    name: 'Bluetooth Low Energy (BLE)',
    range: '1-10 meters',
    speed: 'Instant unlock',
    description: 'Hands-free access as you approach. Works even with phone in pocket.',
    benefit: 'True touchless experience'
  },
  {
    icon: NfcIcon,
    name: 'NFC Tap',
    range: 'Contact (~4cm)',
    speed: '<0.5 seconds',
    description: 'Tap your phone like a contactless payment. Familiar user experience.',
    benefit: 'Works offline'
  },
  {
    icon: Wifi,
    name: 'Cloud Credentials',
    range: 'Internet-based',
    speed: 'Real-time sync',
    description: 'Credentials pushed via cloud. Revoke access instantly from anywhere.',
    benefit: 'Remote management'
  }
];

// Key Benefits with stats
const mobileAdvantages = [
  { stat: '₹0', label: 'Card Replacement Cost', desc: 'Lost phone? Revoke and reissue credentials remotely in seconds' },
  { stat: '< 1 min', label: 'Onboarding Time', desc: 'New employees download app and receive credentials instantly' },
  { stat: '100%', label: 'Always Available', desc: 'Employees always have their phone—no forgotten badges' },
  { stat: 'Instant', label: 'Access Revocation', desc: 'Terminate credentials immediately when employees leave' }
];

// Implementation Features
const implementationFeatures = [
  { icon: Shield, title: 'End-to-End Encryption', desc: 'Credentials encrypted on device with secure element or TEE' },
  { icon: RefreshCw, title: 'Hybrid Compatibility', desc: 'Works alongside existing card readers during transition' },
  { icon: Users, title: 'Guest Credentials', desc: 'Issue temporary mobile passes to visitors via SMS or email' },
  { icon: Cloud, title: 'Cloud Management', desc: 'Manage all credentials from centralized admin portal' }
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

export default function MobileAccessPage() {
  const pageTitle = 'Mobile-Based Access Control';
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
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Mobile Access Control"
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
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-ids-blue/20 backdrop-blur-sm rounded-full text-ids-blue text-sm font-medium mb-4">
                    <Smartphone size={16} /> Your Phone is Your Key
                  </span>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
                >
                  Mobile-Based<br />
                  <span className="text-ids-blue">Access</span> Control
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-gray-300 text-lg max-w-xl mb-6"
                >
                  Replace physical cards with smartphone credentials. Employees unlock doors using BLE, NFC, or QR—with instant provisioning and revocation from the cloud.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link 
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-black font-bold px-6 py-3 rounded-full hover:bg-ids-blue hover:text-white transition-all group"
                  >
                    Get Started <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-medium px-6 py-3 rounded-full hover:bg-white/20 transition-all border border-white/20">
                    <Download size={16} /> Download App
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Section 1: Mobile Advantages - Stats Grid */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-blue to-ids-orange rounded-full"></div>
                <span className="text-ids-blue font-medium">Why Mobile?</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                The Business Case for Mobile Credentials
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {mobileAdvantages.map((adv, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -6 }}
                    className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-ids-blue/40 transition-all"
                  >
                    <div className="text-3xl font-bold text-ids-blue mb-2">{adv.stat}</div>
                    <div className="font-semibold text-white mb-2">{adv.label}</div>
                    <div className="text-xs text-gray-500">{adv.desc}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 2: Technologies - Comparison Cards */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-orange to-ids-yellow rounded-full"></div>
                <span className="text-ids-orange font-medium">Technologies</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
                Multiple Ways to Unlock
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-10 max-w-2xl">
                Choose the right technology based on user preference, security requirements, and hardware compatibility.
              </motion.p>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
                {accessTechnologies.map((tech, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.03 }}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-ids-orange/50 transition-all group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-ids-orange/20 to-ids-yellow/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <tech.icon className="text-ids-orange" size={28} />
                    </div>
                    <h3 className="font-bold text-xl mb-3">{tech.name}</h3>
                    <div className="flex gap-4 mb-3 text-xs">
                      <div>
                        <span className="text-gray-500 block">Range</span>
                        <span className="text-white">{tech.range}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block">Speed</span>
                        <span className="text-white">{tech.speed}</span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{tech.description}</p>
                    <span className="inline-block px-3 py-1 bg-ids-orange/10 rounded-full text-ids-orange text-xs font-medium">
                      {tech.benefit}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 3: Implementation Features */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-ids-blue rounded-full"></div>
                <span className="text-green-400 font-medium">Enterprise-Ready</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
                Built for Enterprise Deployment
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-10 max-w-2xl">
                Security, scalability, and seamless integration with your existing access control infrastructure.
              </motion.p>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-5">
                {implementationFeatures.map((feature, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ x: 8 }}
                    className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/5 hover:border-green-500/30 hover:bg-white/[0.07] transition-all group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-green-500/20 to-ids-blue/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <feature.icon className="text-green-400" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{feature.title}</h4>
                      <p className="text-gray-400 text-sm">{feature.desc}</p>
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
              className="bg-gradient-to-r from-ids-blue/10 via-ids-orange/10 to-transparent border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-72 h-72 bg-ids-blue/10 rounded-full blur-[100px]"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Go Cardless Today</h3>
                <p className="text-gray-300 mb-8 max-w-2xl">
                  Pilot mobile access in one building or deploy across your entire portfolio. Our team will ensure a seamless transition from cards to smartphones.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-ids-blue hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    Start Pilot Program <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/contact" className="bg-transparent border border-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                    Request Technical Specs
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
