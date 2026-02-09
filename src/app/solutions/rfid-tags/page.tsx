'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Breadcrumb, SolutionSidebar, identityAccessMenu } from '@/components/solutions';
import { ArrowRight, Tag, CreditCard, Watch, Key, Shirt, Car, Bone, CircleDot, Radio, Cpu, Layers, Shield, Factory, Truck, ShoppingCart, Book, Utensils, Wrench, Building2, Sparkles, CheckCircle2, Award, Users, Clock, Globe } from 'lucide-react';

// Hot Selling Products
const hotProducts = [
  { name: 'RFID Stickers', desc: 'Flexible adhesive tags for quick deployment', icon: CircleDot, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop' },
  { name: 'RFID Cards', desc: 'Durable PVC cards for access control', icon: CreditCard, image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=400&auto=format&fit=crop' },
  { name: 'RFID Wristbands', desc: 'Comfortable wearables for events & healthcare', icon: Watch, image: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?q=80&w=400&auto=format&fit=crop' },
  { name: 'NFC Tags', desc: 'Short-range tags for smart interactions', icon: Radio, image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&auto=format&fit=crop' },
  { name: 'RFID Keyfobs', desc: 'Compact keychain tags for access systems', icon: Key, image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=400&auto=format&fit=crop' },
  { name: 'Laundry RFID Tags', desc: 'Heat-resistant tags for textile tracking', icon: Shirt, image: 'https://images.unsplash.com/photo-1489274495757-95c7c837b101?q=80&w=400&auto=format&fit=crop' },
  { name: 'Vehicle RFID Tags', desc: 'Windshield tags for parking & toll systems', icon: Car, image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=400&auto=format&fit=crop' },
  { name: 'Animal RFID Tags', desc: 'Implantable & ear tags for livestock', icon: Bone, image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=400&auto=format&fit=crop' },
];

// RFID Tags by Frequency
const frequencyTags = [
  { 
    name: '125KHz LF Tags', 
    frequency: '125 KHz', 
    range: 'Up to 10cm',
    desc: 'Least interfered by water and metal. Ideal for rough industrial work, metal mounting, high temperature applications.',
    features: ['Metal-resistant', 'Water-resistant', 'Industrial grade'],
    color: 'ids-blue'
  },
  { 
    name: '13.56MHz HF Tags', 
    frequency: '13.56 MHz', 
    range: 'Up to 1m',
    desc: 'Born to lower RFID tag rates and address high-volume applications. Cost-effective for mass deployment.',
    features: ['High volume', 'Cost-effective', 'NFC compatible'],
    color: 'ids-orange'
  },
  { 
    name: 'UHF 915MHz Tags', 
    frequency: '860-960 MHz', 
    range: 'Up to 12m',
    desc: 'FCC Standard frequency for long-range reading. Tags can be read quickly at 5+ meters distance.',
    features: ['Long range', 'Fast reading', 'Supply chain'],
    color: 'ids-yellow'
  },
];

// Applications
const applications = [
  { icon: Factory, title: 'Manufacturing', desc: 'Track production, inventory, and work-in-progress', image: 'https://images.unsplash.com/photo-1565465295423-68c959ca3c30?q=80&w=600&auto=format&fit=crop' },
  { icon: Building2, title: 'Theme Parks', desc: 'Wristbands for access, payments, and experiences', image: 'https://images.unsplash.com/photo-1536768139911-e290a59011e4?q=80&w=600&auto=format&fit=crop' },
  { icon: Book, title: 'Libraries', desc: 'Automated check-out and inventory management', image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=600&auto=format&fit=crop' },
  { icon: Utensils, title: 'Food Industry', desc: 'Cold chain monitoring and traceability', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600&auto=format&fit=crop' },
  { icon: Wrench, title: 'Tool Tracking', desc: 'Asset management for equipment and tools', image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=600&auto=format&fit=crop' },
  { icon: ShoppingCart, title: 'Retail', desc: 'Inventory accuracy and anti-theft solutions', image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=600&auto=format&fit=crop' },
  { icon: Truck, title: 'Vehicle Tracking', desc: 'Fleet management and parking systems', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop' },
  { icon: Shirt, title: 'Laundry Tracking', desc: 'Textile lifecycle and rental management', image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=600&auto=format&fit=crop' },
];

// Common RFID Chips
const rfidChips = [
  { name: 'TK4100', memory: '64 bit', protocol: 'ISO7815', type: 'Read-only', frequency: 'LF' },
  { name: 'EM4305', memory: '512 bit', protocol: 'ISO11784/85', type: 'Read/Write', frequency: 'LF' },
  { name: 'MIFARE Classic 1K', memory: '1K Bytes', protocol: 'ISO14443A', type: 'Read/Write', frequency: 'HF' },
  { name: 'MIFARE Ultralight', memory: '512 bit', protocol: 'ISO14443A', type: 'Read/Write', frequency: 'HF' },
  { name: 'NTAG 213', memory: '144 Bytes', protocol: 'ISO14443A', type: 'Read/Write', frequency: 'NFC' },
  { name: 'NTAG 216', memory: '888 Bytes', protocol: 'ISO14443A', type: 'Read/Write', frequency: 'NFC' },
  { name: 'Impinj Monza R6', memory: '96 bit EPC', protocol: 'ISO18000-6C', type: 'Read/Write', frequency: 'UHF' },
  { name: 'NXP UCODE 8', memory: '128 bit EPC', protocol: 'ISO18000-6C', type: 'Read/Write', frequency: 'UHF' },
];

// Why Choose Us
const whyChooseUs = [
  { icon: Award, title: 'ISO, SGS, CE Certified', desc: 'All products meet international quality standards' },
  { icon: Clock, title: '15+ Years Experience', desc: 'Decades of RFID design and OEM expertise' },
  { icon: Globe, title: 'Global Delivery', desc: 'Worldwide shipping with fast turnaround' },
  { icon: Users, title: 'Free Samples', desc: 'Try before you buy with complimentary samples' },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export default function RfidTagsPage() {
  const pageTitle = 'RFID Tag Solutions';
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
                  alt="RFID Tag Solutions"
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
                    <Tag size={16} /> Your Trusted RFID Tags Manufacturer
                  </span>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
                >
                  Premium Quality<br />
                  <span className="text-ids-blue">RFID Tags</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-gray-300 text-lg md:text-xl max-w-xl mb-6"
                >
                  ISO, SGS, CE Certified RFID tags with 15+ years of design and OEM experience. Free samples available.
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
                    Get Free Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-medium px-6 py-3 rounded-full hover:bg-white/20 transition-all border border-white/20">
                    Request Samples
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* What is RFID Tags Section */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-blue to-ids-orange rounded-full"></div>
                <span className="text-ids-blue font-medium">Understanding RFID</span>
              </div>
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">What Are RFID Tags?</h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    An RFID tag describes the entire entity that comes with the chip. Besides the RFID chip, the tag consists of an <span className="text-white font-semibold">antenna</span> and a <span className="text-white font-semibold">substrate</span>.
                  </p>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    The antenna enables the chip to receive radio waves from the reader and transmit data. The substrate is used to house the antenna and the chip. RFID tags are used in various industries, including healthcare, transportation, and retail.
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                      <Cpu className="mx-auto text-ids-blue mb-2" size={24} />
                      <p className="text-sm font-medium">RFID Chip</p>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                      <Radio className="mx-auto text-ids-orange mb-2" size={24} />
                      <p className="text-sm font-medium">Antenna</p>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                      <Layers className="mx-auto text-ids-yellow mb-2" size={24} />
                      <p className="text-sm font-medium">Substrate</p>
                    </div>
                  </div>
                </div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-ids-blue/30 to-ids-orange/30 rounded-3xl blur-2xl"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop" 
                    alt="RFID Tag Components"
                    className="relative rounded-2xl w-full border border-white/10"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Hot Selling Products Section */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-orange to-ids-yellow rounded-full"></div>
                <span className="text-ids-orange font-medium">Product Range</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">Hot Selling Products</motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-10 max-w-2xl">
                Explore our comprehensive range of RFID tags for every application
              </motion.p>
              
              <motion.div variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {hotProducts.map((product, i) => (
                  <motion.div 
                    key={i}
                    variants={scaleIn}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative rounded-2xl overflow-hidden cursor-pointer"
                  >
                    <div className="absolute inset-0">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/70 to-transparent"></div>
                    </div>
                    <div className="relative p-5 h-48 flex flex-col justify-end">
                      <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:bg-ids-blue/30 transition-colors">
                        <product.icon className="text-ids-blue" size={20} />
                      </div>
                      <h4 className="font-bold text-sm md:text-base mb-1">{product.name}</h4>
                      <p className="text-gray-400 text-xs hidden md:block">{product.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* RFID Tags by Frequency Section */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-blue to-green-500 rounded-full"></div>
                <span className="text-ids-blue font-medium">By Frequency</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">RFID Tags By Frequency</motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-10 max-w-2xl">
                Choose the right frequency band for your specific requirements
              </motion.p>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
                {frequencyTags.map((freq, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                    className={`p-6 rounded-2xl bg-gradient-to-br from-${freq.color}/10 to-transparent border border-white/10 hover:border-${freq.color}/50 transition-all group`}
                  >
                    <div className={`inline-flex items-center gap-2 px-3 py-1 bg-${freq.color}/20 rounded-full text-${freq.color} text-sm font-medium mb-4`}>
                      <Radio size={14} /> {freq.frequency}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{freq.name}</h3>
                    <p className={`text-${freq.color} text-sm font-medium mb-3`}>Read Range: {freq.range}</p>
                    <p className="text-gray-400 text-sm mb-4">{freq.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {freq.features.map((f, j) => (
                        <span key={j} className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300">{f}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Applications Section */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-orange to-ids-blue rounded-full"></div>
                <span className="text-ids-orange font-medium">Use Cases</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">Application Of RFID Tags</motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-10 max-w-2xl">
                Discover how RFID technology transforms industries worldwide
              </motion.p>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {applications.map((app, i) => (
                  <motion.div 
                    key={i}
                    variants={scaleIn}
                    whileHover={{ scale: 1.03 }}
                    className="group relative h-52 rounded-2xl overflow-hidden cursor-pointer"
                  >
                    <img 
                      src={app.image} 
                      alt={app.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-ids-orange/20 backdrop-blur-sm flex items-center justify-center">
                          <app.icon className="text-ids-orange" size={16} />
                        </div>
                        <h4 className="font-bold text-sm">{app.title}</h4>
                      </div>
                      <p className="text-gray-400 text-xs">{app.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Why Choose Us Section */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-ids-blue rounded-full"></div>
                <span className="text-green-500 font-medium">Why Us</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">Why Choose IDS SmartTech</motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {whyChooseUs.map((item, i) => (
                  <motion.div 
                    key={i}
                    variants={scaleIn}
                    whileHover={{ y: -5 }}
                    className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-green-500/50 transition-all group"
                  >
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-green-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <item.icon className="text-green-500" size={28} />
                    </div>
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Common RFID Chips Section */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-yellow to-ids-orange rounded-full"></div>
                <span className="text-ids-yellow font-medium">Chip Options</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">Common RFID Chips</motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-10 max-w-2xl">
                We support all major RFID chip manufacturers and protocols
              </motion.p>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-4">
                {rfidChips.map((chip, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(254, 211, 86, 0.05)' }}
                    className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-ids-yellow/50 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-ids-yellow/20 flex items-center justify-center">
                        <Cpu className="text-ids-yellow" size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm">{chip.name}</h4>
                        <p className="text-gray-500 text-xs">{chip.protocol}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                        chip.frequency === 'UHF' ? 'bg-ids-blue/20 text-ids-blue' :
                        chip.frequency === 'HF' ? 'bg-ids-orange/20 text-ids-orange' :
                        chip.frequency === 'NFC' ? 'bg-green-500/20 text-green-500' :
                        'bg-ids-yellow/20 text-ids-yellow'
                      }`}>{chip.frequency}</span>
                      <p className="text-gray-400 text-xs mt-1">{chip.memory}</p>
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
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
                  alt="RFID Technology CTA"
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
                  <Sparkles size={16} className="text-ids-yellow" /> Become Our Partner
                </motion.div>
                <h3 className="text-3xl md:text-5xl font-bold mb-6">Start Your RFID Journey Today</h3>
                <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                  Get free samples and competitive pricing. Our team is ready to help you find the perfect RFID solution for your business.
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
                    Get Free Quote <ArrowRight size={18} />
                  </motion.a>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link href="/contact" className="inline-flex items-center gap-2 bg-transparent border-2 border-white/30 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-all">
                      Request Free Samples
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
