'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Breadcrumb, SolutionSidebar, identityAccessMenu } from '@/components/solutions';
import { 
  ArrowRight, Radio, Wifi, Usb, Monitor,
  Building, Factory, ShoppingCart, Truck, CheckCircle2
} from 'lucide-react';

// Reader Types
const readerTypes = [
  {
    name: 'Desktop Readers',
    interface: 'USB / Serial',
    range: '5-15 cm',
    use: 'Card enrollment, desktop applications',
    icon: Monitor,
    color: 'bg-ids-blue'
  },
  {
    name: 'Wall Readers',
    interface: 'Wiegand / OSDP',
    range: '5-15 cm',
    use: 'Door access control, time attendance',
    icon: Building,
    color: 'bg-ids-orange'
  },
  {
    name: 'Fixed UHF Readers',
    interface: 'Ethernet / RS232',
    range: '1-12 meters',
    use: 'Warehouse, parking, logistics',
    icon: Radio,
    color: 'bg-green-500'
  },
  {
    name: 'Handheld Readers',
    interface: 'WiFi / Bluetooth',
    range: '1-8 meters',
    use: 'Inventory, asset tracking',
    icon: Wifi,
    color: 'bg-ids-yellow'
  }
];

// Frequencies Supported
const frequencies = [
  { freq: '125 kHz (LF)', protocols: 'EM4100, HID Prox', readers: 'Access control' },
  { freq: '13.56 MHz (HF)', protocols: 'MIFARE, DESFire, iCLASS', readers: 'Access & payment' },
  { freq: '860-960 MHz (UHF)', protocols: 'EPC Gen2, ISO 18000-6C', readers: 'Long-range ID' }
];

// Integration Options
const integrations = [
  { icon: Usb, name: 'USB HID', desc: 'Plug-and-play keyboard emulation' },
  { icon: Building, name: 'Wiegand 26/34', desc: 'Standard access control protocol' },
  { icon: Radio, name: 'OSDP', desc: 'Encrypted secure channel protocol' },
  { icon: Wifi, name: 'TCP/IP', desc: 'Network-connected readers' }
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

export default function RfidReadersPage() {
  const pageTitle = 'RFID Reader Systems';
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
                  alt="RFID Reader Systems"
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
                    <Radio size={16} /> RFID Hardware
                  </span>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
                >
                  RFID Reader<br />
                  <span className="text-ids-orange">Systems</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-gray-300 text-lg max-w-xl mb-6"
                >
                  Desktop, wall-mount, fixed, and handheld readers for LF, HF, and UHF frequencies. Compatible with all major access control systems.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link 
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-black font-bold px-6 py-3 rounded-full hover:bg-ids-orange hover:text-black transition-all group"
                  >
                    Get Reader Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Section 1: Reader Types */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-orange to-ids-blue rounded-full"></div>
                <span className="text-ids-orange font-medium">Hardware</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                Reader Categories
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
                {readerTypes.map((reader, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -4 }}
                    className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-white/30 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl ${reader.color}/20 flex items-center justify-center shrink-0`}>
                        <reader.icon className={`${reader.color === 'bg-ids-blue' ? 'text-ids-blue' : reader.color === 'bg-ids-orange' ? 'text-ids-orange' : reader.color === 'bg-green-500' ? 'text-green-400' : 'text-ids-yellow'}`} size={22} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2">{reader.name}</h3>
                        <div className="space-y-1 text-sm mb-2">
                          <div className="flex justify-between text-gray-400">
                            <span>Interface</span>
                            <span className="text-white">{reader.interface}</span>
                          </div>
                          <div className="flex justify-between text-gray-400">
                            <span>Range</span>
                            <span className="text-ids-orange">{reader.range}</span>
                          </div>
                        </div>
                        <p className="text-xs text-gray-400">{reader.use}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 2: Frequencies */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-blue to-green-500 rounded-full"></div>
                <span className="text-ids-blue font-medium">Frequencies</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                Supported Frequencies
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 font-semibold text-white">Frequency</th>
                      <th className="text-left py-3 px-4 font-semibold text-white">Protocols</th>
                      <th className="text-left py-3 px-4 font-semibold text-white">Applications</th>
                    </tr>
                  </thead>
                  <tbody>
                    {frequencies.map((freq, i) => (
                      <motion.tr 
                        key={i}
                        variants={fadeInUp}
                        className="border-b border-white/5 hover:bg-white/5 transition-colors"
                      >
                        <td className="py-3 px-4 text-ids-orange font-medium">{freq.freq}</td>
                        <td className="py-3 px-4 text-gray-300">{freq.protocols}</td>
                        <td className="py-3 px-4 text-gray-400">{freq.readers}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            </motion.section>

            {/* Section 3: Integration Options */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-ids-yellow rounded-full"></div>
                <span className="text-green-400 font-medium">Integration</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                Connection Options
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-5">
                {integrations.map((item, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/5 hover:border-green-500/40 transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-ids-yellow/10 flex items-center justify-center shrink-0">
                      <item.icon className="text-green-400" size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{item.name}</h3>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
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
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Find the Right Reader</h3>
                <p className="text-gray-300 mb-8 max-w-2xl">
                  Tell us your use case and we&apos;ll recommend the right reader hardware. From desktop enrollment to long-range vehicle access.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-ids-orange transition-colors flex items-center gap-2 group"
                  >
                    Get Recommendation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/solutions/rfid-cards" className="bg-transparent border border-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                    RFID Cards
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
