'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Breadcrumb, SolutionSidebar, identityAccessMenu } from '@/components/solutions';
import { 
  ArrowRight, UtensilsCrossed, CreditCard, Wallet, BarChart3,
  Clock, Users, IndianRupee, Leaf, Calculator, Shield
} from 'lucide-react';

// System Workflow
const workflowSteps = [
  { step: '1', title: 'Tap Card', desc: 'Employee taps RFID card or badge at POS terminal', icon: CreditCard },
  { step: '2', title: 'Select Menu', desc: 'Touch screen displays menu with real-time availability', icon: UtensilsCrossed },
  { step: '3', title: 'Auto Debit', desc: 'Amount debited from prepaid wallet or recorded for payroll deduction', icon: Wallet },
  { step: '4', title: 'Analytics', desc: 'Data flows to dashboard for consumption reports and planning', icon: BarChart3 }
];

// Billing Models
const billingModels = [
  { 
    model: 'Prepaid Wallet', 
    desc: 'Employees load balance via app or kiosk. Instant deduction at POS.',
    best: 'Large corporations, factories',
    color: 'bg-ids-blue'
  },
  { 
    model: 'Payroll Deduction', 
    desc: 'Monthly meal charges auto-deducted from salary. Zero cash handling.',
    best: 'IT companies, banks',
    color: 'bg-ids-orange'
  },
  { 
    model: 'Subsidized Meals', 
    desc: 'Company covers partial cost. Employee pays difference.',
    best: 'Government, PSUs, institutions',
    color: 'bg-green-500'
  },
  { 
    model: 'Coupon-Based', 
    desc: 'Daily/weekly meal coupons issued. Prevents overconsumption.',
    best: 'Schools, hostels, training centers',
    color: 'bg-ids-yellow'
  }
];

// Benefits
const benefits = [
  { icon: IndianRupee, title: 'Eliminate Cash', desc: 'Cashless cafeteria reduces theft and accounting overhead' },
  { icon: Leaf, title: 'Reduce Waste', desc: 'Consumption data helps forecast demand accurately' },
  { icon: Clock, title: 'Faster Service', desc: 'Sub-second transactions reduce queue wait times by 60%' },
  { icon: Shield, title: 'Fraud Prevention', desc: 'One card per employee prevents buddy punching and misuse' }
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

export default function CanteenManagementPage() {
  const pageTitle = 'Canteen Management System';
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
                  alt="Canteen Management System"
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
                    <UtensilsCrossed size={16} /> Cashless Cafeteria
                  </span>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
                >
                  Canteen<br />
                  <span className="text-ids-yellow">Management</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-gray-300 text-lg max-w-xl mb-6"
                >
                  RFID-based cafeteria automation with prepaid wallets, payroll deduction, and consumption analytics for corporate and institutional campuses.
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
                    Request Demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-medium px-6 py-3 rounded-full hover:bg-white/20 transition-all border border-white/20">
                    See Pricing
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Section 1: Workflow Steps */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-yellow to-ids-orange rounded-full"></div>
                <span className="text-ids-yellow font-medium">How It Works</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                Tap, Select, Done
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-4 gap-6">
                {workflowSteps.map((item, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    className="relative p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-ids-yellow/30 transition-all group"
                  >
                    <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-ids-yellow text-black flex items-center justify-center font-bold text-sm">
                      {item.step}
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ids-yellow/20 to-ids-orange/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <item.icon className="text-ids-yellow" size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 2: Billing Models */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-blue to-ids-yellow rounded-full"></div>
                <span className="text-ids-blue font-medium">Billing Options</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
                Flexible Payment Models
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-10 max-w-2xl">
                Choose the billing model that fits your organization&apos;s culture and policies.
              </motion.p>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
                {billingModels.map((item, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ x: 6 }}
                    className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-all"
                  >
                    <div className={`w-2 h-full min-h-[80px] rounded-full ${item.color}`}></div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{item.model}</h3>
                      <p className="text-gray-400 text-sm mb-2">{item.desc}</p>
                      <span className="text-xs text-gray-500">Best for: {item.best}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 3: Benefits */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-ids-blue rounded-full"></div>
                <span className="text-green-400 font-medium">Impact</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                Why Go Cashless?
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-5">
                {benefits.map((benefit, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -4 }}
                    className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/5 hover:border-green-500/30 transition-all group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-green-500/20 to-ids-blue/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
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
              className="bg-gradient-to-r from-ids-yellow/10 via-ids-orange/5 to-transparent border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-72 h-72 bg-ids-yellow/10 rounded-full blur-[100px]"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Modernize Your Cafeteria</h3>
                <p className="text-gray-300 mb-8 max-w-2xl">
                  From 100 to 10,000+ employees, our canteen management system scales with your organization. Integration with existing HRMS and payroll systems included.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-ids-yellow transition-colors flex items-center gap-2 group"
                  >
                    Schedule Demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/contact" className="bg-transparent border border-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                    ROI Calculator
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
