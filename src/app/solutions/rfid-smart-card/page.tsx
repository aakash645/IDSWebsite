'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Breadcrumb, SolutionSidebar, identityAccessMenu } from '@/components/solutions';
import { 
  ArrowRight, CreditCard, Radio, Shield, Cpu, 
  Layers, Building2, Key, Users, Wallet, 
  BadgeCheck, Lock, Wifi, NfcIcon
} from 'lucide-react';

// Card Technology Types
const cardTechnologies = [
  {
    icon: Radio,
    title: 'Proximity Cards (125kHz)',
    frequency: '125 kHz',
    range: '3-10 cm',
    security: 'Basic',
    useCase: 'Legacy systems, cost-sensitive deployments',
    color: 'border-green-500/50'
  },
  {
    icon: Wifi,
    title: 'Smart Cards (13.56MHz)',
    frequency: '13.56 MHz',
    range: '1-5 cm',
    security: 'High',
    useCase: 'Enterprise access, multi-application cards',
    color: 'border-ids-blue/50'
  },
  {
    icon: Cpu,
    title: 'Dual-Interface Cards',
    frequency: 'Dual Frequency',
    range: 'Contact + Contactless',
    security: 'Very High',
    useCase: 'Banking, government ID, transit',
    color: 'border-ids-orange/50'
  },
  {
    icon: NfcIcon,
    title: 'NFC-Enabled Cards',
    frequency: 'ISO 14443',
    range: 'Up to 10 cm',
    security: 'High',
    useCase: 'Mobile wallet integration, tap-to-pay',
    color: 'border-ids-yellow/50'
  }
];

// Solution Benefits - Horizontal timeline
const solutionBenefits = [
  { 
    step: '01',
    title: 'Unified Credential',
    desc: 'One card for door access, time attendance, parking, cafeteria, and logical access',
    icon: CreditCard
  },
  { 
    step: '02',
    title: 'Encrypted Security',
    desc: 'AES-128/256 encryption with mutual authentication prevents cloning and data theft',
    icon: Lock
  },
  { 
    step: '03',
    title: 'Scalable Deployment',
    desc: 'From 100 cardholders to 500,000+ without architecture changes or performance loss',
    icon: Layers
  },
  { 
    step: '04',
    title: 'Future-Ready',
    desc: 'Migrate seamlessly to mobile credentials while maintaining existing infrastructure',
    icon: Wallet
  }
];

// Application Domains
const applicationDomains = [
  { 
    icon: Building2,
    name: 'Corporate Access Control',
    features: ['Employee ID badges', 'Floor-level restrictions', 'Integration with HR systems']
  },
  { 
    icon: Key,
    name: 'Logical Access',
    features: ['PC login authentication', 'VPN access', 'Secure print release']
  },
  { 
    icon: Users,
    name: 'Workforce Management',
    features: ['Time & attendance tracking', 'Shift management', 'Payroll integration']
  }
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

export default function RFIDSmartCardPage() {
  const pageTitle = 'RFID & Smart Card Solutions';
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
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop" 
                  alt="RFID Smart Card Solutions"
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
                    <CreditCard size={16} /> Secure Credential Technology
                  </span>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
                >
                  RFID & <span className="text-ids-blue">Smart Card</span><br />
                  Solutions
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-gray-300 text-lg max-w-xl mb-6"
                >
                  Enterprise-grade contactless credentials that unify physical access, logical security, and workforce management into a single secure card
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
                    Explore Solutions <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-medium px-6 py-3 rounded-full hover:bg-white/20 transition-all border border-white/20">
                    Request Samples
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Section 1: Card Technologies - Comparison Grid */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-blue to-ids-orange rounded-full"></div>
                <span className="text-ids-blue font-medium">Technology Spectrum</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
                Card Technologies for Every Use Case
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-10 max-w-2xl">
                From legacy proximity systems to cutting-edge NFC credentials, we supply and integrate the full range of RFID technologies matched to your security requirements.
              </motion.p>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
                {cardTechnologies.map((tech, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    className={`relative p-6 rounded-2xl bg-white/5 border-l-4 ${tech.color} hover:bg-white/[0.08] transition-all`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                        <tech.icon className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-3">{tech.title}</h3>
                        <div className="grid grid-cols-3 gap-2 mb-3">
                          <div>
                            <span className="text-xs text-gray-500 block">Frequency</span>
                            <span className="text-sm text-ids-blue font-medium">{tech.frequency}</span>
                          </div>
                          <div>
                            <span className="text-xs text-gray-500 block">Range</span>
                            <span className="text-sm text-white">{tech.range}</span>
                          </div>
                          <div>
                            <span className="text-xs text-gray-500 block">Security</span>
                            <span className="text-sm text-ids-orange font-medium">{tech.security}</span>
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm">{tech.useCase}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 2: Solution Value - Horizontal Steps */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-orange to-ids-yellow rounded-full"></div>
                <span className="text-ids-orange font-medium">Solution Value</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
                Why Organizations Choose Smart Cards
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-10 max-w-2xl">
                Smart cards deliver a compelling ROI by consolidating multiple systems onto a single, secure credential platform.
              </motion.p>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {solutionBenefits.map((benefit, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -6 }}
                    className="relative p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-ids-blue/40 transition-all group"
                  >
                    <span className="text-4xl font-bold text-white/10 absolute top-4 right-4 group-hover:text-ids-blue/20 transition-colors">{benefit.step}</span>
                    <div className="w-12 h-12 rounded-xl bg-ids-blue/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <benefit.icon className="text-ids-blue" size={22} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 3: Application Domains - Feature Blocks */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-ids-blue rounded-full"></div>
                <span className="text-green-400 font-medium">Applications</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
                Multi-Application Card Ecosystem
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-10 max-w-2xl">
                A single smart card can serve multiple functions across your organization, reducing costs and simplifying credential management.
              </motion.p>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
                {applicationDomains.map((domain, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.03 }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-ids-orange/40 transition-all"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-ids-orange/20 to-ids-yellow/20 flex items-center justify-center mb-5">
                      <domain.icon className="text-ids-orange" size={28} />
                    </div>
                    <h3 className="font-bold text-xl mb-4">{domain.name}</h3>
                    <ul className="space-y-3">
                      {domain.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-3 text-gray-300">
                          <BadgeCheck size={16} className="text-ids-blue shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* CTA Section */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-ids-blue/10 via-ids-orange/10 to-transparent border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-72 h-72 bg-ids-blue/10 rounded-full blur-[100px]"></div>
              <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-ids-orange/10 rounded-full blur-[80px]"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Upgrade Your Credential Platform?</h3>
                <p className="text-gray-300 mb-8 max-w-2xl">
                  Whether migrating from legacy proximity cards or deploying a new smart card ecosystem, our experts will design a solution that meets your security and operational goals.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-ids-blue hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    Schedule Consultation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/contact" className="bg-transparent border border-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                    Request Card Samples
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
