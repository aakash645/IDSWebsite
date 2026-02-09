'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BOOKING_URL } from '@/constants';
import { Breadcrumb, SolutionSidebar, softwarePlatformsMenu } from '@/components/solutions';
import { 
  ArrowRight, Clock, Fingerprint, Smartphone, BarChart3,
  Building2, Factory, GraduationCap, Briefcase
} from 'lucide-react';

// Authentication Methods
const authMethods = [
  { icon: Fingerprint, name: 'Biometric', desc: 'Fingerprint, face, iris recognition' },
  { icon: Smartphone, name: 'Mobile App', desc: 'GPS + selfie punch, geofencing' },
  { icon: Clock, name: 'RFID/NFC', desc: 'Card or wristband tap' },
  { icon: BarChart3, name: 'Dashboard', desc: 'Real-time reports, analytics' }
];

// Policy Features
const policyFeatures = [
  { name: 'Shift Management', desc: 'Multiple shifts, rotations, split shifts' },
  { name: 'Leave Integration', desc: 'Leave balance, approvals, accruals' },
  { name: 'Overtime Rules', desc: 'Auto-calculation per policy' },
  { name: 'Payroll Export', desc: 'Tally, SAP, custom integrations' }
];

// Industry Deployments
const industries = [
  { icon: Building2, name: 'Corporate', desc: 'Multi-location, remote workforce' },
  { icon: Factory, name: 'Manufacturing', desc: 'Shift workers, contract labor' },
  { icon: GraduationCap, name: 'Education', desc: 'Staff + student attendance' },
  { icon: Briefcase, name: 'Government', desc: 'Compliance, audit trails' }
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

export default function SmartAttendancePage() {
  const pageTitle = 'Smart Attendance Management';
  const parentService = 'Software & Platforms';
  
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="pt-24 min-h-screen bg-[#0f172a] text-white overflow-hidden">
      <Breadcrumb pageTitle={pageTitle} parentService={parentService} parentPath="/software-platforms" />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <SolutionSidebar menuTitle={parentService} sections={softwarePlatformsMenu} />

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
                  src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop" 
                  alt="Smart Attendance Management"
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
                    <Clock size={16} /> Time & Attendance
                  </span>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
                >
                  Smart Attendance<br />
                  <span className="text-green-400">Management</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-gray-300 text-lg max-w-xl mb-6"
                >
                  Biometric, RFID, and mobile-based attendance with shift management, leave integration, and payroll export.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <a 
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-black font-bold px-6 py-3 rounded-full hover:bg-green-400 hover:text-black transition-all group"
                  >
                    Request Demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Section 1: Authentication Methods */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-ids-blue rounded-full"></div>
                <span className="text-green-400 font-medium">Authentication</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                Punch Methods
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-5">
                {authMethods.map((method, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/5 hover:border-green-500/40 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-ids-blue/10 flex items-center justify-center shrink-0">
                      <method.icon className="text-green-400" size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{method.name}</h3>
                      <p className="text-gray-400 text-sm">{method.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 2: Policy Features */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-blue to-ids-orange rounded-full"></div>
                <span className="text-ids-blue font-medium">Policies</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                Policy Management
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-4">
                {policyFeatures.map((policy, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -4 }}
                    className="p-5 rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-ids-blue/40 transition-all"
                  >
                    <h3 className="font-bold mb-2">{policy.name}</h3>
                    <p className="text-gray-400 text-sm">{policy.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 3: Industries */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-orange to-ids-yellow rounded-full"></div>
                <span className="text-ids-orange font-medium">Industries</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                Sector Deployments
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-5">
                {industries.map((ind, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -4 }}
                    className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-ids-orange/40 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ids-orange/20 to-ids-yellow/10 flex items-center justify-center shrink-0">
                      <ind.icon className="text-ids-orange" size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-0.5">{ind.name}</h3>
                      <p className="text-gray-400 text-sm">{ind.desc}</p>
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
              className="bg-gradient-to-r from-green-500/10 via-ids-blue/5 to-transparent border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-72 h-72 bg-green-500/10 rounded-full blur-[100px]"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Automate Your Attendance</h3>
                <p className="text-gray-300 mb-8 max-w-2xl">
                  Deploy biometric or mobile attendance with shift management and seamless payroll integration.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-green-400 transition-colors flex items-center gap-2 group"
                  >
                    Get Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/solutions/time-attendance" className="bg-transparent border border-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                    Time & Attendance
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
