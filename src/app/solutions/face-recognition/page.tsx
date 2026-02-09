'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Breadcrumb, SolutionSidebar, identityAccessMenu } from '@/components/solutions';
import { 
  ArrowRight, Scan, Eye, ShieldCheck, Zap, Clock, 
  Building2, Factory, GraduationCap, Hospital, Plane, 
  Users, Sparkles, Monitor, Wifi, Sun, Moon
} from 'lucide-react';

// Terminal Series - Showcasing different product tiers
const terminalSeries = [
  {
    name: 'Value Series',
    capacity: '3,000 Faces',
    ideal: 'Small offices, retail stores, clinics',
    features: ['Basic face recognition', 'Card + PIN backup', 'Standalone operation'],
    color: 'from-green-500/20 to-green-600/20',
    accent: 'text-green-400'
  },
  {
    name: 'Pro Series', 
    capacity: '6,000+ Faces',
    ideal: 'Mid-size enterprises, schools, hospitals',
    features: ['Advanced AI algorithms', 'Multi-factor auth', 'Cloud integration'],
    color: 'from-ids-blue/20 to-blue-600/20',
    accent: 'text-ids-blue'
  },
  {
    name: 'Ultra Series',
    capacity: '50,000+ Faces',
    ideal: 'Large enterprises, airports, government',
    features: ['Enterprise-grade accuracy', 'Iris + Face dual-mode', 'Full API access'],
    color: 'from-ids-orange/20 to-orange-600/20',
    accent: 'text-ids-orange'
  }
];

// Recognition Capabilities
const recognitionCapabilities = [
  { 
    icon: Zap, 
    title: '0.2 Second Recognition',
    desc: 'Industry-leading speed powered by deep learning neural networks for instant verification'
  },
  { 
    icon: Eye, 
    title: '99%+ Accuracy Rate',
    desc: 'Advanced 3D depth sensing eliminates false accepts and rejects even with appearance changes'
  },
  { 
    icon: ShieldCheck, 
    title: 'Anti-Spoofing Protection',
    desc: 'Liveness detection prevents photo, video, and mask attacks with infrared analysis'
  },
  { 
    icon: Sun, 
    title: 'All-Light Performance',
    desc: 'Dual-lens technology with IR illumination ensures reliable recognition in any lighting'
  }
];

// Deployment environments with split layout
const deploymentEnvironments = [
  { 
    icon: Building2, 
    name: 'Corporate Offices',
    benefit: 'Eliminate buddy-punching and streamline lobby access with touchless entry'
  },
  { 
    icon: Factory, 
    name: 'Manufacturing Plants',
    benefit: 'Enforce zone-based access control and track workforce attendance in real-time'
  },
  { 
    icon: Hospital, 
    name: 'Healthcare Facilities',
    benefit: 'Protect sensitive areas while enabling hands-free access for medical staff'
  },
  { 
    icon: GraduationCap, 
    name: 'Educational Institutions',
    benefit: 'Secure campus entry and automate student attendance tracking'
  },
  { 
    icon: Plane, 
    name: 'Airports & Transit',
    benefit: 'Accelerate passenger flow with biometric boarding and secure zone access'
  }
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

export default function FaceRecognitionPage() {
  const pageTitle = 'Face Recognition Terminals';
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
                  src="https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=2070&auto=format&fit=crop" 
                  alt="Face Recognition Terminal"
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
                    <Scan size={16} /> Touch-Free Access Control
                  </span>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
                >
                  Face Recognition<br />
                  <span className="text-ids-blue">Terminals</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-gray-300 text-lg max-w-xl mb-6"
                >
                  Touchless, hygienic, and lightning-fast identity verification for modern access control and time attendance
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
                    Get a Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-medium px-6 py-3 rounded-full hover:bg-white/20 transition-all border border-white/20">
                    Schedule Demo
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Section 1: Recognition Technology - Icon Grid */}
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
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
                AI-Powered Recognition Engine
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-10 max-w-2xl">
                Our terminals leverage deep learning algorithms trained on millions of facial data points, delivering enterprise-grade accuracy that adapts to real-world conditions.
              </motion.p>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
                {recognitionCapabilities.map((cap, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-ids-blue/50 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ids-blue/30 to-ids-orange/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <cap.icon className="text-ids-blue" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-2">{cap.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{cap.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 2: Terminal Product Range - Cards */}
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
                Choose Your Terminal Series
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-10 max-w-2xl">
                From compact value units to high-capacity enterprise terminals, we offer solutions scaled to your organization&apos;s exact needs.
              </motion.p>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
                {terminalSeries.map((series, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -8 }}
                    className={`relative p-6 rounded-2xl bg-gradient-to-br ${series.color} border border-white/10 hover:border-white/30 transition-all overflow-hidden group`}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:scale-150 transition-transform"></div>
                    <div className="relative">
                      <span className={`text-sm font-bold ${series.accent} mb-2 block`}>{series.name}</span>
                      <div className="text-3xl font-bold mb-1">{series.capacity}</div>
                      <p className="text-gray-400 text-sm mb-4">{series.ideal}</p>
                      <ul className="space-y-2">
                        {series.features.map((feature, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                            <Sparkles size={12} className={series.accent} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 3: Deployment Environments - Split Layout */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-ids-blue rounded-full"></div>
                <span className="text-green-400 font-medium">Deployment</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
                Where Face Recognition Delivers Impact
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-10 max-w-2xl">
                Our terminals are deployed across diverse environments where security, speed, and hygiene are non-negotiable.
              </motion.p>
              
              <motion.div variants={staggerContainer} className="space-y-4">
                {deploymentEnvironments.map((env, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ x: 8 }}
                    className="flex items-center gap-6 p-5 rounded-xl bg-white/5 border border-white/5 hover:border-ids-blue/30 hover:bg-white/[0.07] transition-all group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-ids-blue/20 to-ids-orange/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <env.icon className="text-ids-blue" size={26} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1">{env.name}</h3>
                      <p className="text-gray-400">{env.benefit}</p>
                    </div>
                    <ArrowRight className="text-gray-600 group-hover:text-ids-blue group-hover:translate-x-2 transition-all" size={20} />
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
              <div className="absolute bottom-0 left-1/2 w-48 h-48 bg-ids-orange/10 rounded-full blur-[80px]"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready for Touchless Access Control?</h3>
                <p className="text-gray-300 mb-8 max-w-2xl">
                  Let our solution architects assess your facility and recommend the optimal terminal configuration for your access control and attendance needs.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-ids-blue hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    Request Site Assessment <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
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
