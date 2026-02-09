'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Breadcrumb, SolutionSidebar, identityAccessMenu } from '@/components/solutions';
import { 
  ArrowRight, Users, Zap, Shield, Building,
  Train, GraduationCap, Landmark, Factory, CreditCard, Scan
} from 'lucide-react';

// Turnstile Types
const turnstileTypes = [
  {
    name: 'Tripod Turnstiles',
    throughput: '25-30 persons/min',
    security: 'Medium',
    aesthetic: 'Basic',
    ideal: 'Factories, warehouses, stadiums',
    color: 'bg-ids-blue'
  },
  {
    name: 'Flap Barriers',
    throughput: '40-50 persons/min',
    security: 'Medium-High',
    aesthetic: 'Premium',
    ideal: 'Corporate lobbies, metro stations',
    color: 'bg-ids-orange'
  },
  {
    name: 'Speed Gates',
    throughput: '50-60 persons/min',
    security: 'High',
    aesthetic: 'Luxury',
    ideal: 'Banks, HQ buildings, hotels',
    color: 'bg-ids-yellow'
  },
  {
    name: 'Full Height Turnstiles',
    throughput: '20-25 persons/min',
    security: 'Maximum',
    aesthetic: 'Industrial',
    ideal: 'Prisons, power plants, restricted zones',
    color: 'bg-red-500'
  }
];

// Integration Options
const integrations = [
  { icon: CreditCard, title: 'RFID Cards', desc: 'Employee ID cards with proximity or smart chip' },
  { icon: Scan, title: 'Biometrics', desc: 'Fingerprint or face recognition for high-security' },
  { icon: Users, title: 'Visitor System', desc: 'Pre-registered visitors with QR or temporary cards' }
];

// Deployment Sites
const deploySites = [
  { icon: Building, name: 'Corporate Offices', count: '500+' },
  { icon: Train, name: 'Metro & Transit', count: '50+' },
  { icon: GraduationCap, name: 'Universities', count: '100+' },
  { icon: Factory, name: 'Manufacturing', count: '200+' }
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

export default function TurnstilesPage() {
  const pageTitle = 'Turnstiles & Speed Gates';
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
                  src="https://images.unsplash.com/photo-600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
                  alt="Turnstiles & Speed Gates"
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
                    <Users size={16} /> Pedestrian Flow Control
                  </span>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
                >
                  Turnstiles &<br />
                  <span className="text-ids-blue">Speed Gates</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-gray-300 text-lg max-w-xl mb-6"
                >
                  Control pedestrian access with turnstiles, flap barriers, and speed gates. From industrial sites to luxury lobbies, choose the right solution.
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
                    View Gallery
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Section 1: Turnstile Types Comparison */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-blue to-ids-orange rounded-full"></div>
                <span className="text-ids-blue font-medium">Product Range</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
                Choose Your Gate Type
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-10 max-w-2xl">
                Match throughput, security level, and aesthetics to your facility requirements.
              </motion.p>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
                {turnstileTypes.map((type, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -4 }}
                    className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-white/30 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-3 h-10 rounded-full ${type.color}`}></div>
                      <h3 className="font-bold text-lg">{type.name}</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="text-gray-500">Throughput</span>
                        <p className="text-white font-medium">{type.throughput}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Security</span>
                        <p className="text-white font-medium">{type.security}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Aesthetic</span>
                        <p className="text-gray-300">{type.aesthetic}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Ideal For</span>
                        <p className="text-ids-yellow text-xs">{type.ideal}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 2: Integration Options */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-orange to-ids-yellow rounded-full"></div>
                <span className="text-ids-orange font-medium">Access Methods</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                Integrated Access Control
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
                {integrations.map((item, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -6 }}
                    className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-ids-orange/40 transition-all group text-center"
                  >
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-ids-orange/20 to-ids-yellow/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <item.icon className="text-ids-orange" size={26} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 3: Deployment Stats */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-ids-blue rounded-full"></div>
                <span className="text-green-400 font-medium">Track Record</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                Deployed Across Industries
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {deploySites.map((site, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -4 }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 text-center"
                  >
                    <site.icon className="mx-auto text-green-400 mb-3" size={28} />
                    <div className="text-2xl font-bold text-white mb-1">{site.count}</div>
                    <div className="text-xs text-gray-400">{site.name}</div>
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
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Secure Your Entry Points</h3>
                <p className="text-gray-300 mb-8 max-w-2xl">
                  From product selection to installation and integration with your access control system, we handle it all. Request a site survey today.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-ids-blue hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    Request Site Survey <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/contact" className="bg-transparent border border-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                    Download Catalog
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
