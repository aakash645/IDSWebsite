'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Breadcrumb, SolutionSidebar, identityAccessMenu } from '@/components/solutions';
import { 
  ArrowRight, Printer, Layers, Zap, Shield,
  CreditCard, Building, GraduationCap, BadgeCheck, Settings
} from 'lucide-react';

// Printer Categories
const printerCategories = [
  {
    name: 'Entry Level',
    models: 'Zebra ZC100, Magicard 300',
    volume: '500-1,000 cards/year',
    features: ['Single-side printing', 'USB connectivity', 'Basic software'],
    price: '₹35K - ₹55K',
    color: 'bg-ids-blue'
  },
  {
    name: 'Mid-Range',
    models: 'Zebra ZC300, Entrust CD820',
    volume: '1,000-10,000 cards/year',
    features: ['Dual-side printing', 'Ethernet ready', 'Magnetic stripe encoding'],
    price: '₹75K - ₹1.2L',
    color: 'bg-ids-orange'
  },
  {
    name: 'High Volume',
    models: 'Matica XID8600, Entrust CR805',
    volume: '10,000+ cards/year',
    features: ['Retransfer printing', 'Lamination module', 'Smart card encoding'],
    price: '₹2L - ₹5L',
    color: 'bg-ids-yellow'
  }
];

// Print Technologies
const printTech = [
  { icon: Printer, title: 'DTC (Direct-to-Card)', desc: 'Dye-sublimation print directly on card surface. Cost-effective for standard IDs.' },
  { icon: Layers, title: 'Retransfer', desc: 'Print on film, transfer to card. Edge-to-edge printing, superior durability.' },
  { icon: Shield, title: 'Lamination', desc: 'Additional overlay for wear resistance and security. Extends card life 2-3x.' }
];

// Applications
const applications = [
  { icon: Building, name: 'Corporate IDs', desc: 'Employee badges with photo, name, and access credentials' },
  { icon: GraduationCap, name: 'Student Cards', desc: 'University IDs with library, hostel, and exam access' },
  { icon: BadgeCheck, name: 'Membership Cards', desc: 'Clubs, gyms, and loyalty programs' }
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

export default function CardPrintingPage() {
  const pageTitle = 'Card Printing Solutions';
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
                  src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=2070&auto=format&fit=crop" 
                  alt="Card Printing Solutions"
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
                    <Printer size={16} /> Thermal Card Printers
                  </span>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
                >
                  Card Printing<br />
                  <span className="text-ids-blue">Solutions</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-gray-300 text-lg max-w-xl mb-6"
                >
                  Desktop and industrial card printers for ID badges, membership cards, and smart cards. DTC and retransfer technologies from Zebra, Entrust, and Magicard.
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
                    View Printers
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Section 1: Printer Categories */}
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
                Choose Your Printer Class
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-10 max-w-2xl">
                From small offices to high-volume bureaus, find the right printer for your card production needs.
              </motion.p>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
                {printerCategories.map((cat, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -6 }}
                    className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-white/30 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-3 h-10 rounded-full ${cat.color}`}></div>
                      <div>
                        <h3 className="font-bold text-lg">{cat.name}</h3>
                        <p className="text-xs text-gray-500">{cat.models}</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <span className="text-xs text-gray-500">Volume</span>
                      <p className="text-white font-medium">{cat.volume}</p>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {cat.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-ids-blue"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-3 border-t border-white/5">
                      <span className="text-ids-yellow font-bold">{cat.price}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 2: Print Technologies */}
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
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                Print Technology Options
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
                {printTech.map((tech, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -6 }}
                    className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-ids-orange/40 transition-all group text-center"
                  >
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-ids-orange/20 to-ids-yellow/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <tech.icon className="text-ids-orange" size={26} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{tech.title}</h3>
                    <p className="text-gray-400 text-sm">{tech.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 3: Applications */}
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
                What You Can Print
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
                {applications.map((app, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ x: 6 }}
                    className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/5 hover:border-green-500/30 transition-all group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-green-500/20 to-ids-blue/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <app.icon className="text-green-400" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{app.name}</h4>
                      <p className="text-gray-400 text-sm">{app.desc}</p>
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
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Start Printing In-House</h3>
                <p className="text-gray-300 mb-8 max-w-2xl">
                  Complete solutions including printer, software, blank cards, and ribbons. Training and annual maintenance contracts available.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-ids-blue hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    Request Demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
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
