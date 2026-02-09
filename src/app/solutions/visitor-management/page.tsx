'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Breadcrumb, SolutionSidebar, identityAccessMenu } from '@/components/solutions';
import { 
  ArrowRight, UserPlus, ClipboardCheck, Shield, Bell,
  Building2, Factory, HardHat, CalendarCheck, QrCode,
  Printer, Camera, FileCheck, Clock, CheckCircle2, AlertTriangle
} from 'lucide-react';

// Visitor Journey Steps - Timeline
const visitorJourney = [
  {
    step: 'Pre-Registration',
    icon: CalendarCheck,
    desc: 'Hosts pre-register visitors via web portal or email. Visitors receive QR code invitation with all necessary details.',
    color: 'from-ids-blue to-blue-600'
  },
  {
    step: 'Self Check-In',
    icon: QrCode,
    desc: 'Visitors scan QR at kiosk, capture photo, sign NDAs digitally, and print badges—all in under 60 seconds.',
    color: 'from-ids-orange to-orange-600'
  },
  {
    step: 'Host Notification',
    icon: Bell,
    desc: 'Host receives instant SMS/email/Teams notification with visitor photo. One-tap approval or rejection.',
    color: 'from-ids-yellow to-yellow-600'
  },
  {
    step: 'Secure Access',
    icon: Shield,
    desc: 'Approved visitors get temporary access credentials. System tracks location and enforces zone restrictions.',
    color: 'from-green-500 to-green-600'
  }
];

// Management Types - Differentiated offerings
const managementTypes = [
  {
    type: 'Visitor Management',
    icon: UserPlus,
    scenarios: ['Client meetings', 'Interviews', 'Deliveries', 'VIP guests'],
    highlight: 'Professional lobby experience with branded touchpoints'
  },
  {
    type: 'Contractor Management',
    icon: HardHat,
    scenarios: ['Long-term projects', 'Maintenance crews', 'Vendor technicians', 'Consultants'],
    highlight: 'Compliance tracking with certifications & safety training records'
  }
];

// Compliance & Security Features
const complianceFeatures = [
  { icon: FileCheck, title: 'Digital NDA Signing', desc: 'Legally binding electronic signatures with audit trail' },
  { icon: Camera, title: 'Photo Capture', desc: 'Automatic ID photo for badge printing and records' },
  { icon: AlertTriangle, title: 'Watchlist Screening', desc: 'Real-time check against internal blocklists' },
  { icon: Clock, title: 'Time-Limited Access', desc: 'Credentials auto-expire at scheduled departure' },
  { icon: Printer, title: 'Badge Printing', desc: 'Professional visitor badges with photo, host, and zones' },
  { icon: CheckCircle2, title: 'Evacuation Reports', desc: 'Instant list of all visitors on-site for emergencies' }
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

export default function VisitorManagementPage() {
  const pageTitle = 'Visitors & Contractor Management';
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
                  src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?q=80&w=2070&auto=format&fit=crop" 
                  alt="Visitor Management System"
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
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-ids-yellow/20 backdrop-blur-sm rounded-full text-ids-yellow text-sm font-medium mb-4">
                    <ClipboardCheck size={16} /> Professional First Impressions
                  </span>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
                >
                  Visitors & <span className="text-ids-orange">Contractor</span><br />
                  Management
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-gray-300 text-lg max-w-xl mb-6"
                >
                  Digitize your lobby experience with self-service kiosks, instant host notifications, and complete audit trails for all non-employees entering your facility
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
                    Book Demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-medium px-6 py-3 rounded-full hover:bg-white/20 transition-all border border-white/20">
                    View Pricing
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Section 1: Visitor Journey - Timeline */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-blue to-ids-orange rounded-full"></div>
                <span className="text-ids-blue font-medium">The Journey</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
                Seamless Visitor Experience in 4 Steps
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-12 max-w-2xl">
                From pre-registration to secure access, our platform ensures a professional, secure, and efficient visitor experience.
              </motion.p>
              
              <div className="relative">
                {/* Timeline connector */}
                <div className="absolute top-16 left-8 right-8 h-1 bg-gradient-to-r from-ids-blue via-ids-orange via-ids-yellow to-green-500 rounded-full hidden lg:block"></div>
                
                <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {visitorJourney.map((phase, i) => (
                    <motion.div 
                      key={i}
                      variants={fadeInUp}
                      whileHover={{ y: -8 }}
                      className="relative text-center lg:text-left"
                    >
                      <div className={`w-16 h-16 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center mb-4 relative z-10`}>
                        <phase.icon className="text-white" size={28} />
                      </div>
                      <h3 className="font-bold text-lg mb-2">{phase.step}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{phase.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.section>

            {/* Section 2: Visitor vs Contractor - Split Cards */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-orange to-ids-yellow rounded-full"></div>
                <span className="text-ids-orange font-medium">Dual Capability</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
                Visitors & Contractors, Unified Platform
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-10 max-w-2xl">
                Different workflows for different visitor types, all managed from a single dashboard.
              </motion.p>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-8">
                {managementTypes.map((type, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-ids-blue/40 transition-all"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-ids-blue/30 to-ids-orange/30 flex items-center justify-center mb-6">
                      <type.icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{type.type}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {type.scenarios.map((scenario, j) => (
                        <span key={j} className="px-3 py-1 text-xs bg-white/10 rounded-full text-gray-300">
                          {scenario}
                        </span>
                      ))}
                    </div>
                    <p className="text-ids-blue font-medium">{type.highlight}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 3: Compliance Features - Icon Grid */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-ids-blue rounded-full"></div>
                <span className="text-green-400 font-medium">Compliance</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
                Security & Compliance Built-In
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-10 max-w-2xl">
                Meet regulatory requirements and enhance security with comprehensive visitor tracking and documentation.
              </motion.p>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {complianceFeatures.map((feature, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -4 }}
                    className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-ids-blue/20 transition-colors">
                      <feature.icon className="text-ids-blue" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{feature.title}</h4>
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
              className="bg-gradient-to-r from-ids-yellow/10 via-ids-orange/10 to-transparent border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-72 h-72 bg-ids-yellow/10 rounded-full blur-[100px]"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Transform Your Lobby Experience</h3>
                <p className="text-gray-300 mb-8 max-w-2xl">
                  Replace paper logbooks with a modern visitor management system that impresses guests and protects your facility.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-ids-orange hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    Schedule Live Demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
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
