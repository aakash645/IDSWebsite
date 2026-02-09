'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Breadcrumb, SolutionSidebar, identityAccessMenu } from '@/components/solutions';
import { 
  ArrowRight, Palette, PenTool, Layers, Shield,
  Building, GraduationCap, CreditCard, Image, FileCheck
} from 'lucide-react';

// Design Process
const designProcess = [
  { step: '1', title: 'Brief', desc: 'Share your brand guidelines, logo, and requirements', icon: FileCheck },
  { step: '2', title: 'Concept', desc: 'We create 2-3 design concepts for your review', icon: PenTool },
  { step: '3', title: 'Refine', desc: 'Iterate based on your feedback until perfect', icon: Palette },
  { step: '4', title: 'Deliver', desc: 'Print-ready files in formats for your printer', icon: Image }
];

// Design Elements
const designElements = [
  {
    name: 'Brand Identity',
    items: ['Logo placement', 'Corporate colors', 'Typography', 'Brand patterns'],
    color: 'bg-ids-blue'
  },
  {
    name: 'Security Features',
    items: ['Micro-text', 'Guilloche patterns', 'UV-reactive areas', 'Hologram zones'],
    color: 'bg-ids-orange'
  },
  {
    name: 'Functional Zones',
    items: ['Photo area', 'Barcode/QR space', 'Chip position', 'Signature panel'],
    color: 'bg-green-500'
  }
];

// Card Types
const cardTypes = [
  { icon: Building, name: 'Corporate ID Cards', desc: 'Professional designs with access control integration' },
  { icon: GraduationCap, name: 'Student Cards', desc: 'Vibrant designs for educational institutions' },
  { icon: CreditCard, name: 'Membership Cards', desc: 'Eye-catching designs for clubs and loyalty programs' }
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

export default function CardDesignPage() {
  const pageTitle = 'Card Design Services';
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
                  src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop" 
                  alt="Card Design Services"
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
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-ids-yellow/20 backdrop-blur-sm rounded-full text-ids-yellow text-sm font-medium mb-4">
                    <Palette size={16} /> Professional Design
                  </span>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
                >
                  Card Design<br />
                  <span className="text-ids-yellow">Services</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-gray-300 text-lg max-w-xl mb-6"
                >
                  Professional ID card design that reflects your brand identity. From corporate badges to secure government IDs, we create print-ready artwork.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link 
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-black font-bold px-6 py-3 rounded-full hover:bg-ids-yellow hover:text-black transition-all group"
                  >
                    Start Design Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-medium px-6 py-3 rounded-full hover:bg-white/20 transition-all border border-white/20">
                    View Portfolio
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Section 1: Design Process */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-yellow to-ids-orange rounded-full"></div>
                <span className="text-ids-yellow font-medium">Process</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                How We Work
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-4 gap-6">
                {designProcess.map((item, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    className="relative p-5 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/5"
                  >
                    <div className="absolute -top-3 left-4 w-8 h-8 rounded-full bg-ids-yellow text-black flex items-center justify-center font-bold text-sm">
                      {item.step}
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ids-yellow/20 to-ids-orange/10 flex items-center justify-center mt-4 mb-3">
                      <item.icon className="text-ids-yellow" size={22} />
                    </div>
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 2: Design Elements */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-blue to-ids-orange rounded-full"></div>
                <span className="text-ids-blue font-medium">Elements</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                What We Include
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
                {designElements.map((element, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -6 }}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-3 h-10 rounded-full ${element.color}`}></div>
                      <h3 className="font-bold text-lg">{element.name}</h3>
                    </div>
                    <ul className="space-y-2">
                      {element.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 3: Card Types */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-ids-blue rounded-full"></div>
                <span className="text-green-400 font-medium">Specializations</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                Cards We Design
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
                {cardTypes.map((card, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -6 }}
                    className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-green-500/40 transition-all group text-center"
                  >
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-green-500/20 to-ids-blue/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <card.icon className="text-green-400" size={26} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{card.name}</h3>
                    <p className="text-gray-400 text-sm">{card.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* CTA Section */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-ids-yellow/10 via-ids-orange/5 to-transparent border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-72 h-72 bg-ids-yellow/10 rounded-full blur-[100px]"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Let&apos;s Design Your Card</h3>
                <p className="text-gray-300 mb-8 max-w-2xl">
                  Share your brand guidelines and requirements. Our design team will create a professional ID card that represents your organization.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-ids-yellow transition-colors flex items-center gap-2 group"
                  >
                    Start Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/contact" className="bg-transparent border border-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                    View Samples
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
