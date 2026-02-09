'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Breadcrumb, SolutionSidebar, identityAccessMenu } from '@/components/solutions';
import { ArrowRight, Fingerprint, Eye, Scan, UserCheck, Shield, Zap, Clock, Building2, Lock, Smartphone, Server, CheckCircle2, Sparkles, BadgeCheck, ShieldCheck, Users, Landmark, Factory, Hospital, GraduationCap, Plane } from 'lucide-react';

// Biometric Modalities
const biometricTypes = [
  { 
    icon: Fingerprint, 
    name: 'Fingerprint Recognition', 
    desc: 'Most widely used biometric. Captures unique ridge patterns for accurate identification.',
    accuracy: '99.9%',
    speed: '<1 sec',
    image: 'https://images.unsplash.com/photo-1585079374502-415f8516dcc3?q=80&w=600&auto=format&fit=crop'
  },
  { 
    icon: Eye, 
    name: 'Iris Recognition', 
    desc: 'Captures unique iris patterns. Highly accurate even with glasses or contact lenses.',
    accuracy: '99.99%',
    speed: '2-3 sec',
    image: 'https://images.unsplash.com/photo-1494869042583-f6c911f04b4c?q=80&w=600&auto=format&fit=crop'
  },
  { 
    icon: Scan, 
    name: 'Face Recognition', 
    desc: 'Contactless identification using facial features. Works with masks and in low light.',
    accuracy: '99.5%',
    speed: '<1 sec',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop'
  },
  { 
    icon: UserCheck, 
    name: 'Multi-Modal Biometrics', 
    desc: 'Combines multiple biometric factors for highest security environments.',
    accuracy: '99.999%',
    speed: '2-4 sec',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop'
  },
];

// How It Works
const howItWorks = [
  { step: '01', title: 'Enrollment', desc: 'Capture biometric data and create a unique template stored securely', icon: UserCheck, color: 'ids-blue' },
  { step: '02', title: 'Storage', desc: 'Encrypted templates stored in secure database with AES-256 encryption', icon: Server, color: 'ids-orange' },
  { step: '03', title: 'Verification', desc: 'Live biometric compared against stored template using AI algorithms', icon: Scan, color: 'ids-yellow' },
  { step: '04', title: 'Authentication', desc: 'Access granted or denied based on match score and security policies', icon: ShieldCheck, color: 'green-500' },
];

// Key Features
const features = [
  { icon: Shield, title: 'Anti-Spoofing', desc: 'Advanced liveness detection prevents fake fingerprints, photos, or masks' },
  { icon: Zap, title: 'Fast Processing', desc: 'Sub-second identification even with millions of records in database' },
  { icon: Lock, title: 'End-to-End Encryption', desc: 'AES-256 encryption for data at rest and TLS 1.3 for data in transit' },
  { icon: Smartphone, title: 'Mobile SDK', desc: 'iOS and Android SDKs for mobile biometric authentication' },
  { icon: Server, title: 'Cloud & On-Premise', desc: 'Flexible deployment options based on your security requirements' },
  { icon: Users, title: 'Scalable to Millions', desc: '1:N identification supporting databases with 100M+ records' },
];

// Industry Applications
const industries = [
  { icon: Landmark, name: 'Government & Defense', desc: 'National ID, border control, law enforcement', image: 'https://images.unsplash.com/photo-1555848962-6e79363ec58f?q=80&w=600&auto=format&fit=crop' },
  { icon: Building2, name: 'Enterprise & Corporate', desc: 'Office access, time attendance, visitor management', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop' },
  { icon: Factory, name: 'Manufacturing', desc: 'Factory access, safety compliance, workforce tracking', image: 'https://images.unsplash.com/photo-1565465295423-68c959ca3c30?q=80&w=600&auto=format&fit=crop' },
  { icon: Hospital, name: 'Healthcare', desc: 'Patient identification, medication dispensing, staff access', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop' },
  { icon: GraduationCap, name: 'Education', desc: 'Campus access, exam authentication, library systems', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop' },
  { icon: Plane, name: 'Travel & Transportation', desc: 'Airport security, boarding, transit access', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=600&auto=format&fit=crop' },
];

// Stats
const stats = [
  { value: '99.9%', label: 'Accuracy Rate', icon: BadgeCheck },
  { value: '<1s', label: 'Verification Time', icon: Clock },
  { value: '100M+', label: 'Records Supported', icon: Users },
  { value: '24/7', label: 'System Uptime', icon: Shield },
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export default function BiometricAuthenticationPage() {
  const pageTitle = 'Biometric Authentication Systems';
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
                  src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop" 
                  alt="Biometric Authentication"
                  className="w-full h-[450px] md:h-[500px] object-cover scale-110"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/70 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-[#0f172a]/30"></div>
              
              <motion.div 
                style={{ opacity: heroOpacity }}
                className="relative z-10 p-8 md:p-12 h-[450px] md:h-[500px] flex flex-col justify-end"
              >
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-ids-blue/20 backdrop-blur-sm rounded-full text-ids-blue text-sm font-medium mb-4">
                    <Fingerprint size={16} /> Next-Gen Identity Verification
                  </span>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
                >
                  Biometric<br />
                  <span className="text-ids-blue">Authentication</span> Systems
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-gray-300 text-lg md:text-xl max-w-xl mb-6"
                >
                  Secure, fast, and accurate identity verification using fingerprint, iris, and face recognition technology
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <a 
                    href="https://go.keka.com/attendance-management-software-india"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-black font-bold px-6 py-3 rounded-full hover:bg-ids-blue hover:text-white transition-all group"
                  >
                    Request Demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-medium px-6 py-3 rounded-full hover:bg-white/20 transition-all border border-white/20">
                    Talk to Expert
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Stats Section */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
            >
              {stats.map((stat, i) => (
                <motion.div 
                  key={i} 
                  variants={scaleIn}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-ids-blue/20 to-ids-orange/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 text-center hover:border-ids-blue/50 transition-colors">
                    <stat.icon className="mx-auto mb-3 text-ids-blue" size={28} />
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Biometric Modalities Section */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-blue to-ids-orange rounded-full"></div>
                <span className="text-ids-blue font-medium">Biometric Types</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">Supported Biometric Modalities</motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-10 max-w-2xl">
                Choose from multiple biometric authentication methods based on your security needs
              </motion.p>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
                {biometricTypes.map((bio, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -5, scale: 1.01 }}
                    className="group relative rounded-2xl overflow-hidden"
                  >
                    <div className="absolute inset-0">
                      <img src={bio.image} alt={bio.name} className="w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#0f172a]/90 to-[#0f172a]/70"></div>
                    </div>
                    <div className="relative p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-ids-blue/30 to-ids-orange/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <bio.icon className="text-ids-blue" size={28} />
                        </div>
                        <div className="flex gap-3">
                          <div className="text-right">
                            <p className="text-xs text-gray-500">Accuracy</p>
                            <p className="text-ids-blue font-bold">{bio.accuracy}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-gray-500">Speed</p>
                            <p className="text-ids-orange font-bold">{bio.speed}</p>
                          </div>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{bio.name}</h3>
                      <p className="text-gray-400">{bio.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* How It Works Section */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-orange to-ids-yellow rounded-full"></div>
                <span className="text-ids-orange font-medium">Process</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">How Biometric Authentication Works</motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-12 max-w-2xl">
                A secure 4-step process from enrollment to authentication
              </motion.p>
              
              <div className="relative">
                {/* Connection Line */}
                <div className="absolute top-20 left-[10%] right-[10%] h-1 bg-gradient-to-r from-ids-blue via-ids-orange via-ids-yellow to-green-500 hidden md:block rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ x: '-100%' }}
                    whileInView={{ x: '100%' }}
                    transition={{ duration: 2, ease: 'linear', repeat: Infinity }}
                    viewport={{ once: false }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"
                  />
                </div>
                
                <motion.div variants={staggerContainer} className="grid md:grid-cols-4 gap-6">
                  {howItWorks.map((step, i) => (
                    <motion.div 
                      key={i}
                      variants={scaleIn}
                      whileHover={{ scale: 1.05 }}
                      className="relative text-center group"
                    >
                      <motion.div 
                        className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${
                          i === 0 ? 'from-ids-blue/30 to-ids-blue/10' :
                          i === 1 ? 'from-ids-orange/30 to-ids-orange/10' :
                          i === 2 ? 'from-ids-yellow/30 to-ids-yellow/10' :
                          'from-green-500/30 to-green-500/10'
                        } flex items-center justify-center mb-6 relative z-10 border border-white/10 group-hover:border-white/30 transition-colors`}
                      >
                        <step.icon className={`${
                          i === 0 ? 'text-ids-blue' :
                          i === 1 ? 'text-ids-orange' :
                          i === 2 ? 'text-ids-yellow' :
                          'text-green-500'
                        }`} size={32} />
                      </motion.div>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${
                        i === 0 ? 'bg-ids-blue/20 text-ids-blue' :
                        i === 1 ? 'bg-ids-orange/20 text-ids-orange' :
                        i === 2 ? 'bg-ids-yellow/20 text-ids-yellow' :
                        'bg-green-500/20 text-green-500'
                      }`}>Step {step.step}</span>
                      <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                      <p className="text-gray-400 text-sm">{step.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Key Features Section */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-ids-blue rounded-full"></div>
                <span className="text-green-500 font-medium">Features</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">Key Features & Capabilities</motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-green-500/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <feature.icon className="text-green-500" size={24} />
                    </div>
                    <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                    <p className="text-gray-400 text-sm">{feature.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Industry Applications Section */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-orange to-ids-blue rounded-full"></div>
                <span className="text-ids-orange font-medium">Industries</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">Industry Applications</motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-10 max-w-2xl">
                Trusted by organizations across diverse sectors
              </motion.p>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {industries.map((industry, i) => (
                  <motion.div 
                    key={i}
                    variants={scaleIn}
                    whileHover={{ scale: 1.03 }}
                    className="group relative h-52 rounded-2xl overflow-hidden cursor-pointer"
                  >
                    <img 
                      src={industry.image} 
                      alt={industry.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-ids-orange/20 backdrop-blur-sm flex items-center justify-center">
                          <industry.icon className="text-ids-orange" size={20} />
                        </div>
                        <h4 className="font-bold">{industry.name}</h4>
                      </div>
                      <p className="text-gray-400 text-sm">{industry.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* CTA Section */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden"
            >
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop" 
                  alt="Biometric CTA"
                  className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/90 to-[#0f172a]/70"></div>
              </div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-ids-blue/20 rounded-full blur-[100px]"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-ids-orange/20 rounded-full blur-[100px]"></div>
              
              <div className="relative z-10 p-8 md:p-16 text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6"
                >
                  <Sparkles size={16} className="text-ids-yellow" /> Secure Your Organization
                </motion.div>
                <h3 className="text-3xl md:text-5xl font-bold mb-6">Ready to Implement Biometric Security?</h3>
                <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                  Deploy world-class biometric authentication to enhance security, streamline access control, and eliminate password vulnerabilities.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://go.keka.com/attendance-management-software-india"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-black font-bold px-8 py-4 rounded-full hover:bg-ids-blue hover:text-white transition-all"
                  >
                    Schedule a Demo <ArrowRight size={18} />
                  </motion.a>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link href="/contact" className="inline-flex items-center gap-2 bg-transparent border-2 border-white/30 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-all">
                      Contact Sales Team
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>

          </main>
        </div>
      </div>
    </div>
  );
}
