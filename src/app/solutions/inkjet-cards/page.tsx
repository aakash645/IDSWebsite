'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Breadcrumb, SolutionSidebar, identityAccessMenu } from '@/components/solutions';
import { 
  ArrowRight, Droplets, Palette, Zap, IndianRupee,
  CreditCard, Image, Layers, CheckCircle2
} from 'lucide-react';

// Comparison: Inkjet vs Thermal
const comparison = [
  { feature: 'Print Speed', inkjet: 'Higher throughput', thermal: 'Single card at a time' },
  { feature: 'Cost per Card', inkjet: '₹5-10 per card', thermal: '₹25-50 per card' },
  { feature: 'Image Quality', inkjet: 'Photo-quality', thermal: 'Good for IDs' },
  { feature: 'Card Surface', inkjet: 'Requires inkjet-coated PVC', thermal: 'Standard PVC' },
  { feature: 'Best For', inkjet: 'High-volume, photo cards', thermal: 'On-demand IDs' }
];

// Card Types
const cardTypes = [
  {
    icon: CreditCard,
    name: 'Inkjet PVC Cards',
    desc: 'Specially coated for inkjet ink absorption. Available in glossy and matte finishes.',
    sizes: 'CR80, CR79, CR100'
  },
  {
    icon: Image,
    name: 'Photo ID Cards',
    desc: 'Full-color photo printing with vibrant colors. Perfect for employee and student IDs.',
    sizes: 'Single & dual-side'
  },
  {
    icon: Layers,
    name: 'Composite Cards',
    desc: 'PVC-PET-PVC layered cards for added durability and smart chip embedding.',
    sizes: 'ISO 7816 compatible'
  }
];

// Benefits
const benefits = [
  { icon: IndianRupee, stat: '60%', label: 'Lower cost vs thermal' },
  { icon: Zap, stat: '100+', label: 'Cards per hour' },
  { icon: Palette, stat: 'Photo', label: 'Quality output' },
  { icon: Droplets, stat: 'UV', label: 'Resistant inks' }
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

export default function InkjetCardsPage() {
  const pageTitle = 'Inkjet Card Printing';
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
                  alt="Inkjet Card Printing"
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
                    <Droplets size={16} /> High-Volume Printing
                  </span>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
                >
                  Inkjet Card<br />
                  <span className="text-ids-orange">Printing</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-gray-300 text-lg max-w-xl mb-6"
                >
                  Cost-effective, high-speed card printing for bureaus and large organizations. Photo-quality output on specially coated PVC cards.
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
                    Get Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-medium px-6 py-3 rounded-full hover:bg-white/20 transition-all border border-white/20">
                    Order Samples
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Section 1: Stats */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {benefits.map((item, i) => (
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

            {/* Section 2: Inkjet vs Thermal Comparison */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-blue to-ids-orange rounded-full"></div>
                <span className="text-ids-blue font-medium">Comparison</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                Inkjet vs Thermal Printing
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Feature</th>
                      <th className="text-left py-3 px-4 text-ids-orange font-medium">Inkjet</th>
                      <th className="text-left py-3 px-4 text-ids-blue font-medium">Thermal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row, i) => (
                      <motion.tr 
                        key={i}
                        variants={fadeInUp}
                        className="border-b border-white/5 hover:bg-white/5 transition-colors"
                      >
                        <td className="py-4 px-4 font-medium">{row.feature}</td>
                        <td className="py-4 px-4 text-gray-300">{row.inkjet}</td>
                        <td className="py-4 px-4 text-gray-300">{row.thermal}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
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
                <span className="text-green-400 font-medium">Products</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                Card Types Available
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
                {cardTypes.map((card, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -6 }}
                    className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-green-500/40 transition-all group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500/20 to-ids-blue/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <card.icon className="text-green-400" size={26} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{card.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{card.desc}</p>
                    <span className="text-xs text-ids-yellow">{card.sizes}</span>
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
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Scale Your Card Production</h3>
                <p className="text-gray-300 mb-8 max-w-2xl">
                  Inkjet card printing is ideal for service bureaus, government agencies, and large enterprises. We supply printers, cards, and inks.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-ids-orange hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    Request Samples <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/contact" className="bg-transparent border border-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                    Volume Pricing
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
