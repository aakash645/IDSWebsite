'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Breadcrumb, SolutionSidebar, identityAccessMenu } from '@/components/solutions';
import { 
  ArrowRight, Building, Layers, Shield, Users,
  CreditCard, Smartphone, Lock, Settings, CheckCircle2,
  ArrowUpDown, Timer
} from 'lucide-react';

// Integration Methods
const integrationMethods = [
  {
    icon: CreditCard,
    method: 'Card-Based Control',
    description: 'RFID or smart cards presented at lobby readers. System automatically enables only authorized floors.',
    integration: 'Works with all major elevator controllers'
  },
  {
    icon: Smartphone,
    method: 'Mobile Credentials',
    description: 'Bluetooth or NFC from smartphones. Ideal for high-rise offices with frequent visitors.',
    integration: 'Integrates with destination dispatch systems'
  },
  {
    icon: Lock,
    method: 'Biometric + Lift',
    description: 'Face recognition or fingerprint at lobby level triggers elevator call to authorized floor.',
    integration: 'Seamless user experience, no additional tap'
  }
];

// Floor Access Scenarios
const accessScenarios = [
  { floor: 'Executive Floor', access: 'Board members & C-suite only', restriction: 'Time-restricted after hours', color: 'bg-ids-orange' },
  { floor: 'R&D Labs', access: 'Engineering department', restriction: 'Requires project assignment', color: 'bg-ids-blue' },
  { floor: 'Server Room Level', access: 'IT team with clearance', restriction: 'Audit logged, escort required for vendors', color: 'bg-red-500' },
  { floor: 'General Office Floors', access: 'All employees', restriction: 'Standard business hours', color: 'bg-green-500' },
  { floor: 'Visitor Lobby', access: 'Escorted visitors only', restriction: 'Host approval required', color: 'bg-ids-yellow' }
];

// Key Benefits
const keyBenefits = [
  { icon: Shield, title: 'Vertical Zoning', desc: 'Control floor-by-floor access based on department, role, or security clearance' },
  { icon: Timer, title: 'Time Scheduling', desc: 'Different access rules for business hours, weekends, and holidays' },
  { icon: Users, title: 'Visitor Management', desc: 'Temporary floor access for guests, automatically revoked after meeting' },
  { icon: ArrowUpDown, title: 'Traffic Optimization', desc: 'Integration with destination dispatch reduces wait times by 30%' }
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

export default function LiftAccessPage() {
  const pageTitle = 'Lift Access Management';
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
                  src="https://images.unsplash.com/photo-1567521464027-f127ff144326?q=80&w=2070&auto=format&fit=crop" 
                  alt="Lift Access Control"
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
                    <Building size={16} /> Vertical Access Control
                  </span>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
                >
                  Lift Access<br />
                  <span className="text-ids-orange">Management</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-gray-300 text-lg max-w-xl mb-6"
                >
                  Control who goes where in your high-rise. Integrate elevator access with your access control system for seamless vertical security zoning.
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
                    Discuss Integration <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-medium px-6 py-3 rounded-full hover:bg-white/20 transition-all border border-white/20">
                    Supported Elevators
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Section 1: Floor Access Visualization */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-orange to-ids-yellow rounded-full"></div>
                <span className="text-ids-orange font-medium">Zoning</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
                Floor-by-Floor Access Control
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-10 max-w-2xl">
                Define who can access which floors based on department, role, project assignment, or security clearance level.
              </motion.p>
              
              <motion.div variants={staggerContainer} className="space-y-3">
                {accessScenarios.map((scenario, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-all"
                  >
                    <div className={`w-3 h-12 rounded-full ${scenario.color}`}></div>
                    <div className="flex-1 grid md:grid-cols-3 gap-4">
                      <div>
                        <span className="text-xs text-gray-500 block">Floor</span>
                        <span className="font-bold text-white">{scenario.floor}</span>
                      </div>
                      <div>
                        <span className="text-xs text-gray-500 block">Access</span>
                        <span className="text-gray-300">{scenario.access}</span>
                      </div>
                      <div>
                        <span className="text-xs text-gray-500 block">Restriction</span>
                        <span className="text-gray-400 text-sm">{scenario.restriction}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 2: Integration Methods */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-blue to-ids-orange rounded-full"></div>
                <span className="text-ids-blue font-medium">Integration</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
                Seamless Elevator Integration
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-10 max-w-2xl">
                Our system integrates with major elevator manufacturers including Otis, KONE, Schindler, ThyssenKrupp, and Mitsubishi.
              </motion.p>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
                {integrationMethods.map((method, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -6 }}
                    className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-ids-blue/40 transition-all group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-ids-blue/20 to-ids-orange/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <method.icon className="text-ids-blue" size={28} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{method.method}</h3>
                    <p className="text-gray-400 text-sm mb-3">{method.description}</p>
                    <span className="text-xs text-ids-yellow">{method.integration}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 3: Key Benefits */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-ids-blue rounded-full"></div>
                <span className="text-green-400 font-medium">Benefits</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                Why Integrate Lift Access?
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-5">
                {keyBenefits.map((benefit, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ x: 6 }}
                    className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/5 hover:border-green-500/30 transition-all group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-green-500/20 to-ids-blue/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <benefit.icon className="text-green-400" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{benefit.title}</h4>
                      <p className="text-gray-400 text-sm">{benefit.desc}</p>
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
              className="bg-gradient-to-r from-ids-orange/10 via-ids-blue/10 to-transparent border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-72 h-72 bg-ids-orange/10 rounded-full blur-[100px]"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Extend Security to Every Floor</h3>
                <p className="text-gray-300 mb-8 max-w-2xl">
                  Our integration specialists will work with your elevator vendor to implement seamless lift access control that enhances security without disrupting traffic flow.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-ids-orange hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    Schedule Integration Call <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/contact" className="bg-transparent border border-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                    View Compatible Systems
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
