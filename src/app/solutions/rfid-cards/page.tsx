'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Breadcrumb, SolutionSidebar, identityAccessMenu } from '@/components/solutions';
import { 
  ArrowRight, CreditCard, Radio, Lock, Layers,
  Building, ShoppingCart, GraduationCap, Bus, Shield
} from 'lucide-react';

// Card Categories
const cardCategories = [
  {
    name: 'LF Cards (125kHz)',
    chips: ['TK4100', 'EM4200', 'T5577', 'HID Prox'],
    desc: 'Legacy access control, low-cost applications',
    range: '~10 cm',
    color: 'bg-ids-blue'
  },
  {
    name: 'HF Cards (13.56MHz)',
    chips: ['MIFARE Classic', 'MIFARE DESFire', 'iCLASS'],
    desc: 'Modern access control, multi-application',
    range: '~10 cm',
    color: 'bg-ids-orange'
  },
  {
    name: 'UHF Cards (860-960MHz)',
    chips: ['Impinj Monza', 'NXP UCODE', 'Alien Higgs'],
    desc: 'Long-range parking, vehicle access',
    range: '~5-10 m',
    color: 'bg-green-500'
  }
];

// Card Materials
const cardMaterials = [
  { name: 'Standard PVC', desc: 'Most common, cost-effective', life: '3-5 years' },
  { name: 'Composite PET/PVC', desc: 'Higher durability, print quality', life: '5-7 years' },
  { name: 'PET Core', desc: 'Eco-friendly, recyclable option', life: '3-5 years' },
  { name: 'Polycarbonate', desc: 'Government-grade, laminated', life: '10+ years' }
];

// Applications
const cardApplications = [
  { icon: Building, name: 'Corporate Access', desc: 'Office buildings, secure areas' },
  { icon: GraduationCap, name: 'Campus ID', desc: 'Universities, schools, libraries' },
  { icon: Bus, name: 'Transit Cards', desc: 'Metro, bus, toll systems' },
  { icon: ShoppingCart, name: 'Loyalty Cards', desc: 'Retail membership programs' }
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

export default function RfidCardsPage() {
  const pageTitle = 'RFID Card Solutions';
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
                  alt="RFID Card Solutions"
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
                    <CreditCard size={16} /> Contactless Cards
                  </span>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
                >
                  RFID Card<br />
                  <span className="text-ids-blue">Solutions</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-gray-300 text-lg max-w-xl mb-6"
                >
                  Pre-printed or blank RFID cards in LF, HF, and UHF frequencies. Custom encoding, printing, and chip selection for any application.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link 
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-black font-bold px-6 py-3 rounded-full hover:bg-ids-blue hover:text-black transition-all group"
                  >
                    Request Samples <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Section 1: Card Categories */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-blue to-ids-orange rounded-full"></div>
                <span className="text-ids-blue font-medium">Frequencies</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                RFID Card Types
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
                {cardCategories.map((cat, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -6 }}
                    className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-white/30 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-3 h-10 rounded-full ${cat.color}`}></div>
                      <h3 className="font-bold text-lg">{cat.name}</h3>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{cat.desc}</p>
                    <div className="text-xs text-ids-orange mb-3">Read Range: {cat.range}</div>
                    <div className="flex flex-wrap gap-1">
                      {cat.chips.map((chip, j) => (
                        <span key={j} className="text-xs px-2 py-1 bg-white/5 rounded text-gray-300">{chip}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 2: Card Materials */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-orange to-ids-yellow rounded-full"></div>
                <span className="text-ids-orange font-medium">Materials</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                Card Construction
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 font-semibold text-white">Material</th>
                      <th className="text-left py-3 px-4 font-semibold text-white">Description</th>
                      <th className="text-left py-3 px-4 font-semibold text-white">Lifespan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cardMaterials.map((mat, i) => (
                      <motion.tr 
                        key={i}
                        variants={fadeInUp}
                        className="border-b border-white/5 hover:bg-white/5 transition-colors"
                      >
                        <td className="py-3 px-4 text-white font-medium">{mat.name}</td>
                        <td className="py-3 px-4 text-gray-400">{mat.desc}</td>
                        <td className="py-3 px-4">
                          <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded">{mat.life}</span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
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
                <span className="text-green-400 font-medium">Use Cases</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                Applications
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-5">
                {cardApplications.map((app, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/5 hover:border-green-500/40 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-ids-blue/10 flex items-center justify-center shrink-0">
                      <app.icon className="text-green-400" size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-0.5">{app.name}</h3>
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
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Order RFID Cards</h3>
                <p className="text-gray-300 mb-8 max-w-2xl">
                  From blank cards to fully personalized credentials with printing, encoding, and holographic lamination. MOQ from 100 cards.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-ids-blue transition-colors flex items-center gap-2 group"
                  >
                    Get Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/solutions/chip-encoding" className="bg-transparent border border-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                    Encoding Services
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
