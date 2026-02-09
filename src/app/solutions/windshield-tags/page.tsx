'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Breadcrumb, SolutionSidebar, identityAccessMenu } from '@/components/solutions';
import { 
  ArrowRight, Car, Radio, Building, ParkingCircle,
  Truck, Shield, Zap, Sun, CheckCircle2
} from 'lucide-react';

// Tag Types
const tagTypes = [
  {
    name: 'Headlight Tags',
    mount: 'Behind headlight glass',
    range: '3-5 meters',
    durability: 'Extreme weather protected',
    icon: Sun,
    color: 'bg-ids-yellow'
  },
  {
    name: 'Windshield Tags',
    mount: 'Inside windshield',
    range: '5-10 meters',
    durability: 'UV resistant, 5+ year life',
    icon: Car,
    color: 'bg-ids-blue'
  },
  {
    name: 'Hang Tags',
    mount: 'Rearview mirror',
    range: '3-5 meters',
    durability: 'Transferable between vehicles',
    icon: Radio,
    color: 'bg-ids-orange'
  }
];

// Applications
const applications = [
  { icon: ParkingCircle, name: 'Parking Access', desc: 'Apartment complexes, office buildings' },
  { icon: Building, name: 'Gated Communities', desc: 'Resident and visitor vehicle access' },
  { icon: Truck, name: 'Toll Collection', desc: 'Highway and bridge toll systems' },
  { icon: Shield, name: 'Secure Facilities', desc: 'Corporate campuses, data centers' }
];

// Features
const tagFeatures = [
  { icon: Zap, feature: 'Passive UHF', desc: 'No battery required, 10+ year lifespan' },
  { icon: Shield, feature: 'Tamper-Proof', desc: 'Self-destructs if removal attempted' },
  { icon: Sun, feature: 'Weather Resistant', desc: '-40°C to +85°C operating range' },
  { icon: Radio, feature: 'Long Range', desc: 'Up to 10 meters with UHF readers' }
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

export default function WindshieldTagsPage() {
  const pageTitle = 'RFID Windshield Access Tags';
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
                  src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop" 
                  alt="RFID Windshield Tags"
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
                    <Car size={16} /> Vehicle Access
                  </span>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
                >
                  Windshield<br />
                  <span className="text-ids-blue">Access Tags</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-gray-300 text-lg max-w-xl mb-6"
                >
                  Hands-free vehicle identification for parking, tolling, and gate access. Long-range UHF tags that work through windshields.
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
                    Order Tags <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Section 1: Tag Types */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-blue to-ids-orange rounded-full"></div>
                <span className="text-ids-blue font-medium">Options</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                Tag Types
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
                {tagTypes.map((tag, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -6 }}
                    className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-white/30 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl ${tag.color}/20 flex items-center justify-center`}>
                        <tag.icon className={`${tag.color === 'bg-ids-yellow' ? 'text-ids-yellow' : tag.color === 'bg-ids-blue' ? 'text-ids-blue' : 'text-ids-orange'}`} size={20} />
                      </div>
                      <h3 className="font-bold">{tag.name}</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between text-gray-400">
                        <span>Mount</span>
                        <span className="text-white">{tag.mount}</span>
                      </div>
                      <div className="flex justify-between text-gray-400">
                        <span>Range</span>
                        <span className="text-ids-orange">{tag.range}</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-3">{tag.durability}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 2: Features */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-orange to-ids-yellow rounded-full"></div>
                <span className="text-ids-orange font-medium">Features</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                Tag Capabilities
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-5">
                {tagFeatures.map((item, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/5 hover:border-ids-orange/40 transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-ids-orange/20 to-ids-yellow/10 flex items-center justify-center shrink-0">
                      <item.icon className="text-ids-orange" size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{item.feature}</h3>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
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
                <span className="text-green-400 font-medium">Use Cases</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                Where They&apos;re Used
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-5">
                {applications.map((app, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 hover:border-green-500/40 transition-all"
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
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Upgrade Your Access</h3>
                <p className="text-gray-300 mb-8 max-w-2xl">
                  From residential parking to corporate campuses, our windshield tags provide seamless, hands-free vehicle identification.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-ids-blue transition-colors flex items-center gap-2 group"
                  >
                    Get Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/solutions/rfid-readers" className="bg-transparent border border-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                    RFID Readers
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
