'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BOOKING_URL } from '@/constants';
import { Breadcrumb, SolutionSidebar, identityAccessMenu } from '@/components/solutions';
import { 
  ArrowRight, Scale, CreditCard, ShieldCheck, Database,
  Building, Users, FileCheck, Globe
} from 'lucide-react';

// Card Features
const cardFeatures = [
  { icon: CreditCard, name: 'Smart ID Cards', desc: 'RFID/NFC enabled with photo, enrollment number, validity' },
  { icon: ShieldCheck, name: 'Anti-Counterfeit', desc: 'Hologram, UV print, microtext, chip encoding' },
  { icon: Database, name: 'Central Database', desc: 'Lawyer registry with enrollment verification' },
  { icon: Globe, name: 'Online Verification', desc: 'QR/NFC based instant authenticity check' }
];

// Use Cases
const useCases = [
  { name: 'Court Entry', desc: 'RFID gate access at courts, tribunals' },
  { name: 'Identity Proof', desc: 'Valid government ID for lawyers' },
  { name: 'CLE Tracking', desc: 'Continuing Legal Education credits' },
  { name: 'Dues & Membership', desc: 'Annual fee payment integration' }
];

// Implementation Stats
const stats = [
  { value: '5L+', label: 'Cards Issued', desc: 'Across state bar councils' },
  { value: '28+', label: 'States', desc: 'Pan-India deployment' },
  { value: 'ISO', label: 'Compliant', desc: 'International standards' }
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

export default function BarCouncilPage() {
  const pageTitle = 'Bar Council ID Solutions';
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
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop" 
                  alt="Bar Council ID Solutions"
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
                    <Scale size={16} /> Legal Profession
                  </span>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
                >
                  Bar Council<br />
                  <span className="text-ids-blue">ID Solutions</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-gray-300 text-lg max-w-xl mb-6"
                >
                  Smart ID cards for advocates with RFID/NFC, holographic security, and centralized verification for Bar Councils of India.
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
                    className="inline-flex items-center gap-2 bg-white text-black font-bold px-6 py-3 rounded-full hover:bg-ids-blue hover:text-black transition-all group"
                  >
                    Request Demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Section 1: Card Features */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-blue to-ids-orange rounded-full"></div>
                <span className="text-ids-blue font-medium">Solution</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                Smart Card Features
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-5">
                {cardFeatures.map((feat, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/5 hover:border-ids-blue/40 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ids-blue/20 to-ids-orange/10 flex items-center justify-center shrink-0">
                      <feat.icon className="text-ids-blue" size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{feat.name}</h3>
                      <p className="text-gray-400 text-sm">{feat.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 2: Use Cases */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-orange to-green-500 rounded-full"></div>
                <span className="text-ids-orange font-medium">Applications</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                Use Cases
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-4">
                {useCases.map((uc, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -4 }}
                    className="p-5 rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-ids-orange/40 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <FileCheck className="text-ids-orange" size={18} />
                      <h3 className="font-bold">{uc.name}</h3>
                    </div>
                    <p className="text-gray-400 text-sm">{uc.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 3: Implementation Stats */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-ids-yellow rounded-full"></div>
                <span className="text-green-400 font-medium">Track Record</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                Deployment Scale
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
                {stats.map((stat, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -6 }}
                    className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-green-500/40 transition-all text-center"
                  >
                    <div className="text-4xl font-bold text-green-400 mb-2">{stat.value}</div>
                    <h3 className="font-bold mb-1">{stat.label}</h3>
                    <p className="text-xs text-gray-400">{stat.desc}</p>
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
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Modernize Advocate IDs</h3>
                <p className="text-gray-300 mb-8 max-w-2xl">
                  Issue tamper-proof smart ID cards for lawyers with centralized verification and court access integration.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-ids-blue transition-colors flex items-center gap-2 group"
                  >
                    Get Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/solutions/governance-cards" className="bg-transparent border border-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                    Governance Cards
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
