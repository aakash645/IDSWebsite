'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Breadcrumb, SolutionSidebar, identityAccessMenu } from '@/components/solutions';
import { 
  ArrowRight, BookOpen, CreditCard, Scan, Users,
  Clock, AlertTriangle, BarChart3, Radio, BookCheck
} from 'lucide-react';

// RFID Library Solutions
const librarySolutions = [
  {
    icon: Radio,
    title: 'RFID Book Tagging',
    description: 'Each book, journal, and media item gets a unique RFID tag for instant identification and tracking.',
    benefit: 'Locate any item in seconds'
  },
  {
    icon: Scan,
    title: 'Self-Checkout Stations',
    description: 'Patrons scan their card and stack books on the reader. All items registered in one operation.',
    benefit: '10x faster than barcode scanning'
  },
  {
    icon: AlertTriangle,
    title: 'Security Gates',
    description: 'RFID gates detect unreturned items. Visual and audio alerts for unauthorized removal.',
    benefit: 'Reduce theft by 95%'
  },
  {
    icon: BookCheck,
    title: 'Smart Returns',
    description: 'Drop box with RFID reader auto-checks in returned items 24/7, even when library is closed.',
    benefit: 'No staff required for returns'
  }
];

// Patron Access Features
const patronFeatures = [
  { stat: '15 sec', label: 'Average checkout time', icon: Clock },
  { stat: '24/7', label: 'Self-service availability', icon: BookOpen },
  { stat: '99.9%', label: 'Read accuracy rate', icon: Scan },
  { stat: '60%', label: 'Staff time savings', icon: Users }
];

// Library Types
const libraryTypes = [
  { name: 'Academic Libraries', desc: 'University & college campuses with high circulation', features: ['Student ID integration', 'Course reserve management', 'Multi-branch support'] },
  { name: 'Public Libraries', desc: 'Municipal libraries serving diverse communities', features: ['Family card linking', 'Overdue notifications', 'Inter-library loans'] },
  { name: 'Corporate Libraries', desc: 'Law firms, research centers, and enterprises', features: ['Confidential materials tracking', 'Department billing', 'Executive reserves'] }
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

export default function LibraryAccessPage() {
  const pageTitle = 'Library Access Management System';
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
                  src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2070&auto=format&fit=crop" 
                  alt="Library Access Management"
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
                    <BookOpen size={16} /> RFID-Enabled Libraries
                  </span>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
                >
                  Library Access<br />
                  <span className="text-ids-blue">Management</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-gray-300 text-lg max-w-xl mb-6"
                >
                  RFID-powered library automation for self-checkout, inventory management, and patron access control across academic, public, and corporate libraries.
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
                    Request Consultation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-medium px-6 py-3 rounded-full hover:bg-white/20 transition-all border border-white/20">
                    See Case Studies
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Section 1: Impact Stats */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {patronFeatures.map((item, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -4 }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-ids-blue/10 to-transparent border border-ids-blue/20 text-center"
                  >
                    <item.icon className="mx-auto text-ids-blue mb-3" size={28} />
                    <div className="text-3xl font-bold text-white mb-1">{item.stat}</div>
                    <div className="text-sm text-gray-400">{item.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 2: RFID Library Solutions */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-blue to-ids-yellow rounded-full"></div>
                <span className="text-ids-blue font-medium">RFID Infrastructure</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
                Complete Library Automation
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-10 max-w-2xl">
                From book tagging to security gates, our end-to-end RFID solution transforms library operations.
              </motion.p>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
                {librarySolutions.map((solution, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -4 }}
                    className="flex gap-5 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-ids-blue/30 transition-all group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-ids-blue/20 to-ids-yellow/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <solution.icon className="text-ids-blue" size={26} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{solution.title}</h3>
                      <p className="text-gray-400 text-sm mb-3">{solution.description}</p>
                      <span className="inline-flex items-center gap-1 text-xs text-ids-yellow font-medium">
                        <BarChart3 size={12} /> {solution.benefit}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 3: Library Types */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-orange to-ids-blue rounded-full"></div>
                <span className="text-ids-orange font-medium">Deployments</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                Solutions for Every Library
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
                {libraryTypes.map((type, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -6 }}
                    className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-ids-orange/40 transition-all"
                  >
                    <h3 className="font-bold text-lg mb-2">{type.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{type.desc}</p>
                    <ul className="space-y-2">
                      {type.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-ids-orange"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* CTA Section */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-ids-blue/10 via-ids-yellow/5 to-transparent border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-72 h-72 bg-ids-blue/10 rounded-full blur-[100px]"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Modernize Your Library</h3>
                <p className="text-gray-300 mb-8 max-w-2xl">
                  Join hundreds of libraries that have transformed patron experience with RFID automation. From small branches to university-wide deployments, we scale with your needs.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-ids-blue hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    Get Started <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/contact" className="bg-transparent border border-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                    Download Brochure
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
