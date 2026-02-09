'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Breadcrumb, SolutionSidebar, identityAccessMenu } from '@/components/solutions';
import { 
  ArrowRight, QrCode, Smartphone, Clock, Shield,
  Users, Building, Calendar, Zap, Scan, RefreshCw
} from 'lucide-react';

// QR Code Types
const qrTypes = [
  {
    type: 'Static QR',
    icon: QrCode,
    security: 'Basic',
    validity: 'Permanent until revoked',
    useCase: 'Staff badges, membership cards',
    color: 'bg-ids-blue'
  },
  {
    type: 'Dynamic QR',
    icon: RefreshCw,
    security: 'High',
    validity: 'Refreshes every 30-60 seconds',
    useCase: 'Mobile app credentials',
    color: 'bg-ids-orange'
  },
  {
    type: 'Time-Limited QR',
    icon: Clock,
    security: 'Medium',
    validity: 'Valid for specific date/time window',
    useCase: 'Visitor passes, event tickets',
    color: 'bg-ids-yellow'
  }
];

// Use Cases
const useCases = [
  { icon: Users, title: 'Visitor Pre-Registration', desc: 'Guests receive QR pass via email before arrival. Scan at lobby for instant entry.' },
  { icon: Calendar, title: 'Event Access', desc: 'Conferences, concerts, exhibitions. Unique QR per ticket, validated in real-time.' },
  { icon: Building, title: 'Co-Working Spaces', desc: 'Flexible memberships with QR-based door access. No physical cards needed.' },
  { icon: Smartphone, title: 'Employee Mobile Access', desc: 'Backup access method when RFID card is forgotten. App generates dynamic QR.' }
];

// Advantages
const advantages = [
  { icon: Zap, stat: 'Zero', label: 'Card issuance cost for temporary access' },
  { icon: Clock, stat: '<1 sec', label: 'Scan and verify time' },
  { icon: Shield, stat: 'AES-256', label: 'Encryption for dynamic QR codes' },
  { icon: Scan, stat: 'Multi-format', label: 'QR, PDF417, Data Matrix support' }
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

export default function QrAccessPage() {
  const pageTitle = 'QR Code Access Control';
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
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop" 
                  alt="QR Code Access Control"
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
                    <QrCode size={16} /> Cardless Access
                  </span>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
                >
                  QR Code<br />
                  <span className="text-ids-orange">Access Control</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-gray-300 text-lg max-w-xl mb-6"
                >
                  Paperless, contactless, cardless. Enable instant access with QR codes on smartphones, printed passes, or digital tickets.
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
                    Get Started <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-medium px-6 py-3 rounded-full hover:bg-white/20 transition-all border border-white/20">
                    See Demo
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Section 1: Stats Grid */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {advantages.map((item, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -4 }}
                    className="p-5 rounded-2xl bg-gradient-to-br from-ids-orange/10 to-transparent border border-ids-orange/20 text-center"
                  >
                    <item.icon className="mx-auto text-ids-orange mb-3" size={24} />
                    <div className="text-2xl font-bold text-white mb-1">{item.stat}</div>
                    <div className="text-xs text-gray-400">{item.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 2: QR Types Comparison */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-blue to-ids-orange rounded-full"></div>
                <span className="text-ids-blue font-medium">QR Types</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
                Choose Your Security Level
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-10 max-w-2xl">
                From permanent static codes to constantly-refreshing dynamic credentials, match security to your use case.
              </motion.p>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
                {qrTypes.map((qr, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -6 }}
                    className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-white/30 transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-3 h-10 rounded-full ${qr.color}`}></div>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center group-hover:scale-110 transition-transform">
                        <qr.icon className="text-white" size={24} />
                      </div>
                    </div>
                    <h3 className="font-bold text-lg mb-3">{qr.type}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Security</span>
                        <span className="text-gray-300">{qr.security}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Validity</span>
                        <span className="text-gray-300">{qr.validity}</span>
                      </div>
                      <div className="pt-2 border-t border-white/5">
                        <span className="text-xs text-gray-500">Best for:</span>
                        <p className="text-ids-yellow text-sm mt-1">{qr.useCase}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 3: Use Cases */}
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
                Where QR Access Shines
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-5">
                {useCases.map((useCase, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ x: 6 }}
                    className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/5 hover:border-green-500/30 transition-all group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-green-500/20 to-ids-blue/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <useCase.icon className="text-green-400" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{useCase.title}</h4>
                      <p className="text-gray-400 text-sm">{useCase.desc}</p>
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
              className="bg-gradient-to-r from-ids-orange/10 via-ids-yellow/5 to-transparent border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-72 h-72 bg-ids-orange/10 rounded-full blur-[100px]"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Enable Instant Access</h3>
                <p className="text-gray-300 mb-8 max-w-2xl">
                  QR-based access integrates with your existing access control infrastructure. Works alongside RFID, mobile, and biometric credentials.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-ids-orange hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    Request Demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/contact" className="bg-transparent border border-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                    View Readers
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
