'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Breadcrumb, SolutionSidebar, identityAccessMenu } from '@/components/solutions';
import { 
  ArrowRight, Lock, CreditCard, KeyRound, Package,
  Building, GraduationCap, Dumbbell, Briefcase, Shield, Clock, Radio
} from 'lucide-react';

// Locker Types
const lockerTypes = [
  {
    icon: Briefcase,
    name: 'Staff Lockers',
    desc: 'Permanent assignment. Employee card unlocks their designated locker for the entire employment period.',
    features: ['RFID/NFC card access', 'Master override for admin', 'Audit logs']
  },
  {
    icon: Clock,
    name: 'Hot Desk Lockers',
    desc: 'Day-use model. Any available locker assigned dynamically when employee taps card.',
    features: ['Auto-release at day end', 'Re-assignment logic', 'Usage analytics']
  },
  {
    icon: Package,
    name: 'Parcel Lockers',
    desc: 'Secure package delivery. Courier gets one-time PIN, recipient notified via SMS.',
    features: ['OTP release', 'Photo capture', 'Chain of custody']
  }
];

// Industry Applications
const industries = [
  { icon: Building, name: 'Corporate Offices', use: 'Secure personal belongings in flexible workspaces' },
  { icon: GraduationCap, name: 'Educational Campuses', use: 'Student lockers with semester-long or rotating access' },
  { icon: Dumbbell, name: 'Gyms & Clubs', use: 'Member lockers with PIN fallback option' },
  { icon: Briefcase, name: 'Healthcare Facilities', use: 'Secure storage for staff valuables and controlled substances' }
];

// Access Methods
const accessMethods = [
  { method: 'RFID Card', icon: CreditCard, desc: 'Tap employee ID card for instant unlock' },
  { method: 'Mobile Credential', icon: Radio, desc: 'Bluetooth or NFC from smartphone app' },
  { method: 'PIN Code', icon: KeyRound, desc: 'Backup numeric keypad for lost cards' },
  { method: 'Biometric', icon: Shield, desc: 'Fingerprint for high-security applications' }
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

export default function RfidLockersPage() {
  const pageTitle = 'RFID Locker Systems';
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
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop" 
                  alt="RFID Locker Systems"
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
                    <Lock size={16} /> Smart Storage
                  </span>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
                >
                  RFID Locker<br />
                  <span className="text-ids-blue">Systems</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-gray-300 text-lg max-w-xl mb-6"
                >
                  Smart locker solutions for workplaces, gyms, campuses, and facilities. Keyless access with RFID, mobile, or biometric credentials.
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
                    Get Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-medium px-6 py-3 rounded-full hover:bg-white/20 transition-all border border-white/20">
                    See Locker Gallery
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Section 1: Locker Types */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-blue to-ids-orange rounded-full"></div>
                <span className="text-ids-blue font-medium">Solutions</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
                Locker Types for Every Need
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-10 max-w-2xl">
                From permanent staff lockers to dynamic hot-desk storage, choose the model that fits your operations.
              </motion.p>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
                {lockerTypes.map((locker, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -6 }}
                    className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-ids-blue/40 transition-all group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-ids-blue/20 to-ids-orange/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <locker.icon className="text-ids-blue" size={28} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{locker.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{locker.desc}</p>
                    <ul className="space-y-2">
                      {locker.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-ids-blue"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 2: Access Methods */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-orange to-ids-yellow rounded-full"></div>
                <span className="text-ids-orange font-medium">Credentials</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                Multiple Unlock Options
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {accessMethods.map((item, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -4 }}
                    className="p-5 rounded-xl bg-white/5 border border-white/5 hover:border-ids-orange/30 transition-all text-center group"
                  >
                    <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-ids-orange/20 to-ids-yellow/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <item.icon className="text-ids-orange" size={22} />
                    </div>
                    <h4 className="font-bold mb-1">{item.method}</h4>
                    <p className="text-gray-400 text-xs">{item.desc}</p>
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
                <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-ids-blue rounded-full"></div>
                <span className="text-green-400 font-medium">Applications</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                Where We Deploy
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-5">
                {industries.map((industry, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ x: 6 }}
                    className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/5 hover:border-green-500/30 transition-all group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-green-500/20 to-ids-blue/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <industry.icon className="text-green-400" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{industry.name}</h4>
                      <p className="text-gray-400 text-sm">{industry.use}</p>
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
              className="bg-gradient-to-r from-ids-blue/10 via-ids-orange/5 to-transparent border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-72 h-72 bg-ids-blue/10 rounded-full blur-[100px]"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Go Keyless Today</h3>
                <p className="text-gray-300 mb-8 max-w-2xl">
                  Whether you need 10 lockers or 1,000, our modular systems scale with your facility. Integration with existing access control included.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-ids-blue hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    Request Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
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
