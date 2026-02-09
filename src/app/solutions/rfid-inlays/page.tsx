'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Breadcrumb, SolutionSidebar, identityAccessMenu } from '@/components/solutions';
import { CircleCheck, ArrowRight, Cpu, Layers, Radio, Factory, Shirt, Truck, Building2, Package, Pill, HeartPulse, Car, Warehouse, Sparkles, CheckCircle2, ChevronRight, Zap, Shield, Globe, Leaf } from 'lucide-react';

// Inlay Products Data
const inlayProducts = [
  { model: 'IDS-141u9', chip: 'NXP U9', dimensions: '70 x 14 mm', applications: 'Apparel, Logistics, Industrial' },
  { model: 'IDS-142r6', chip: 'Impinj MR6 / MR6-P', dimensions: '70 x 14 mm', applications: 'Apparel, Logistics' },
  { model: 'IDS-171h9', chip: 'Alien H9', dimensions: '70 x 17 mm', applications: 'Logistics, Industrial' },
  { model: 'IDS-301m7', chip: 'Impinj M730 / M750', dimensions: '50 x 30 mm', applications: 'Logistics, Industrial' },
  { model: 'IDS-302u9', chip: 'NXP U9', dimensions: '50 x 30 mm', applications: 'Apparel, Logistics' },
  { model: 'IDS-154r6', chip: 'Impinj MR6 / MR6-P', dimensions: '40 x 15 mm', applications: 'Apparel, Logistics' },
  { model: 'IDS-153u9', chip: 'NXP U9', dimensions: '30 x 15 mm', applications: 'Retail, Logistics' },
  { model: 'IDS-161m7', chip: 'Impinj M730 / M750', dimensions: '42 x 16 mm', applications: 'Apparel, Logistics' },
];

// Frequency Bands
const frequencyBands = [
  { name: 'UHF', range: '860-960 MHz', icon: Radio, desc: 'Long-range reading up to 10m, ideal for logistics and supply chain', color: 'ids-blue' },
  { name: 'HF', range: '13.56 MHz', icon: Cpu, desc: 'Medium range, perfect for access control and payment systems', color: 'ids-orange' },
  { name: 'NFC', range: '13.56 MHz', icon: Layers, desc: 'Short range, optimal for mobile payments and authentication', color: 'ids-yellow' },
  { name: 'Dual Frequency', range: 'UHF + HF', icon: Zap, desc: 'Combined capabilities for versatile applications', color: 'green-500' },
];

// Industry Applications
const industries = [
  { icon: Shirt, name: 'Apparel & Retail', desc: 'Item-level tracking for fashion and retail inventory', image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=600&auto=format&fit=crop' },
  { icon: Truck, name: 'Logistics', desc: 'Supply chain visibility and shipment tracking', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop' },
  { icon: Factory, name: 'Manufacturing', desc: 'Production line automation and asset tracking', image: 'https://images.unsplash.com/photo-1565465295423-68c959ca3c30?q=80&w=600&auto=format&fit=crop' },
  { icon: Pill, name: 'Pharmaceuticals', desc: 'Drug authentication and cold chain monitoring', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600&auto=format&fit=crop' },
  { icon: HeartPulse, name: 'Healthcare', desc: 'Patient tracking and medical equipment management', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop' },
  { icon: Car, name: 'Transportation', desc: 'Vehicle access and toll collection systems', image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=600&auto=format&fit=crop' },
];

// Manufacturing Capabilities
const capabilities = [
  { icon: Factory, title: 'Aluminum Antenna Production', value: '60M+', unit: 'sq. meters facility', desc: 'State-of-the-art production facility' },
  { icon: Globe, title: 'Annual Output', value: '30B+', unit: 'RFID antennas/year', desc: 'High-volume manufacturing capacity' },
  { icon: Leaf, title: 'Waste Reduction', value: '98%', unit: 'reduced waste', desc: 'Eco-friendly production processes' },
  { icon: Shield, title: 'Quality Assurance', value: '100%', unit: 'tested products', desc: 'Every inlay tested before shipping' },
];

// Substrate Options
const substrates = [
  { name: 'Paper', features: ['Cost-effective', 'Biodegradable', 'Single-use applications'], recommended: 'Retail tags' },
  { name: 'PET Film', features: ['Durable', 'Water-resistant', 'Flexible'], recommended: 'Industrial labels' },
  { name: 'Fabric', features: ['Washable', 'Flexible', 'Heat-resistant'], recommended: 'Apparel tags' },
  { name: 'Polyimide', features: ['High-temperature', 'Chemical resistant', 'Industrial grade'], recommended: 'Harsh environments' },
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

export default function RfidInlaysPage() {
  const pageTitle = 'RFID Inlay Solutions';
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
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
                  alt="RFID Inlay Solutions"
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
                    <Cpu size={16} /> Precision RFID Technology
                  </span>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
                >
                  High-Performance<br />
                  <span className="text-ids-blue">RFID Inlays</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-gray-300 text-lg md:text-xl max-w-xl mb-6"
                >
                  Expertly designed, manufactured, and encoded RFID inlays for UHF, HF, NFC, and Dual frequency applications
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
                    Request Sample <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-medium px-6 py-3 rounded-full hover:bg-white/20 transition-all border border-white/20">
                    Download Datasheet
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Introduction Section */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-blue to-ids-orange rounded-full"></div>
                <span className="text-ids-blue font-medium">About RFID Inlays</span>
              </div>
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Technology Portfolio for Every Industry</h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Our RFID technology portfolio encompasses a diverse range of <span className="text-white font-semibold">inlay designs and production capabilities</span>, supporting UHF, HF, NFC, and Dual frequency bands.
                  </p>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    These solutions are widely utilized across various industries, including apparel, automation, pharmaceuticals, healthcare, transportation, logistics, and manufacturing. In collaboration with leading IC suppliers, we develop cutting-edge RFID products that integrate the latest chip technology.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {['UHF Inlays', 'HF Inlays', 'NFC Tags', 'Dual Frequency'].map((tag, i) => (
                      <span key={i} className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10">
                        {tag}
                      </span>
                    ))}
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
                    alt="RFID Inlay Technology"
                    className="relative rounded-2xl w-full border border-white/10"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Frequency Bands Section */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-orange to-ids-yellow rounded-full"></div>
                <span className="text-ids-orange font-medium">Frequency Options</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">Supported Frequency Bands</motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-10 max-w-2xl">
                Choose the right frequency for your specific application requirements
              </motion.p>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {frequencyBands.map((band, i) => (
                  <motion.div 
                    key={i}
                    variants={scaleIn}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={`p-6 rounded-2xl bg-gradient-to-br from-${band.color}/10 to-transparent border border-white/10 hover:border-${band.color}/50 transition-all group`}
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-${band.color}/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <band.icon className={`text-${band.color}`} size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-1">{band.name}</h3>
                    <p className={`text-${band.color} text-sm font-medium mb-3`}>{band.range}</p>
                    <p className="text-gray-400 text-sm">{band.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Product Catalog Section */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-blue to-green-500 rounded-full"></div>
                <span className="text-ids-blue font-medium">Product Catalog</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">Browse Our RFID Inlays</motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-10 max-w-2xl">
                High-performing inlays designed for various applications
              </motion.p>
              
              <motion.div variants={staggerContainer} className="grid gap-4">
                {/* Table Header */}
                <div className="hidden md:grid md:grid-cols-4 gap-4 p-4 bg-ids-blue/10 rounded-xl text-ids-blue font-semibold text-sm">
                  <span>Inlay Model</span>
                  <span>Chip</span>
                  <span>Antenna Dimensions</span>
                  <span>Applications</span>
                </div>
                
                {/* Table Rows */}
                {inlayProducts.map((product, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.01, backgroundColor: 'rgba(156, 208, 236, 0.05)' }}
                    className="grid md:grid-cols-4 gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-ids-blue/50 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-ids-blue/20 flex items-center justify-center">
                        <Cpu className="text-ids-blue" size={18} />
                      </div>
                      <span className="font-bold">{product.model}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-300 text-sm">{product.chip}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-400 text-sm">{product.dimensions}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-400 text-sm">{product.applications}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              <p className="text-gray-500 text-sm mt-6 text-center">
                Custom dimensions and chip configurations available upon request
              </p>
            </motion.div>

            {/* Manufacturing Capabilities */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-ids-blue rounded-full"></div>
                <span className="text-green-500 font-medium">Manufacturing</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">Expertly Designed & Manufactured</motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-10 max-w-2xl">
                With years of dedicated R&D, we have gained deep expertise in all aspects of RFID mass production
              </motion.p>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {capabilities.map((cap, i) => (
                  <motion.div 
                    key={i}
                    variants={scaleIn}
                    whileHover={{ y: -5 }}
                    className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-green-500/50 transition-all group"
                  >
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-green-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <cap.icon className="text-green-500" size={28} />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">{cap.value}</div>
                    <div className="text-green-500 text-sm font-medium mb-2">{cap.unit}</div>
                    <p className="text-gray-400 text-sm">{cap.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Substrate Options */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-yellow to-ids-orange rounded-full"></div>
                <span className="text-ids-yellow font-medium">Materials</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">Substrate Options</motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-10 max-w-2xl">
                Choose from multiple substrate materials for your specific application
              </motion.p>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {substrates.map((substrate, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-ids-yellow/50 transition-all"
                  >
                    <h4 className="font-bold text-lg mb-3">{substrate.name}</h4>
                    <ul className="space-y-2 mb-4">
                      {substrate.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-400">
                          <CheckCircle2 className="text-ids-yellow shrink-0" size={14} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-xs text-gray-500">Recommended for:</p>
                      <p className="text-ids-yellow text-sm font-medium">{substrate.recommended}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Industry Applications */}
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
                Our RFID inlays power solutions across diverse industries
              </motion.p>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {industries.map((industry, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    className="group relative h-56 rounded-2xl overflow-hidden"
                  >
                    <img 
                      src={industry.image} 
                      alt={industry.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-ids-orange/20 backdrop-blur-sm flex items-center justify-center">
                          <industry.icon className="text-ids-orange" size={20} />
                        </div>
                        <h4 className="font-bold text-lg">{industry.name}</h4>
                      </div>
                      <p className="text-gray-300 text-sm">{industry.desc}</p>
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
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
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
                  <Sparkles size={16} className="text-ids-yellow" /> Ready to get started?
                </motion.div>
                <h3 className="text-3xl md:text-5xl font-bold mb-6">Elevate Your RFID Implementation</h3>
                <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                  Experience the future of RFID technology. Whether you need high-performance inlays or sustainable manufacturing solutions, we are your trusted partner.
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
                    Request Samples <ArrowRight size={18} />
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
