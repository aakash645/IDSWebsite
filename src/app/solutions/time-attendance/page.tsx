'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Breadcrumb, SolutionSidebar, identityAccessMenu } from '@/components/solutions';
import { 
  ArrowRight, Clock, CalendarCheck, BarChart3, Users,
  Fingerprint, Smartphone, MapPin, Wifi, Globe,
  TrendingUp, FileSpreadsheet, AlertCircle, Settings
} from 'lucide-react';

// Clocking Methods - Visual comparison
const clockingMethods = [
  {
    icon: Fingerprint,
    method: 'Biometric Terminals',
    description: 'Fingerprint, face, or palm verification at fixed entry points',
    bestFor: 'Factories, warehouses, offices with physical entry',
    accuracy: 'Eliminates buddy punching'
  },
  {
    icon: Smartphone,
    method: 'Mobile App Clocking',
    description: 'GPS-verified punch-in from smartphones with geofencing',
    bestFor: 'Field workers, sales teams, remote employees',
    accuracy: 'Location-verified attendance'
  },
  {
    icon: Globe,
    method: 'Web Portal Check-In',
    description: 'Browser-based time tracking for remote and hybrid workers',
    bestFor: 'WFH employees, freelancers, multi-site teams',
    accuracy: 'IP-based verification'
  },
  {
    icon: Wifi,
    method: 'RFID Card Swipe',
    description: 'Quick tap-and-go using employee ID cards at readers',
    bestFor: 'High-throughput entrances, shift changeovers',
    accuracy: 'Fast & simple tracking'
  }
];

// Key Metrics Dashboard
const keyMetrics = [
  { label: 'Late Arrivals', value: '↓ 43%', desc: 'Average reduction after implementation', color: 'text-green-400' },
  { label: 'Payroll Processing', value: '↓ 6 hrs', desc: 'Time saved per payroll cycle', color: 'text-ids-blue' },
  { label: 'Data Accuracy', value: '99.8%', desc: 'Elimination of manual errors', color: 'text-ids-orange' },
  { label: 'ROI Timeline', value: '< 6 mo', desc: 'Typical payback period', color: 'text-ids-yellow' }
];

// Workforce Insights Features
const insightFeatures = [
  { icon: BarChart3, title: 'Real-Time Dashboards', desc: 'Live visibility into who\'s in, who\'s late, and who\'s absent across all locations' },
  { icon: FileSpreadsheet, title: 'Payroll Integration', desc: 'Auto-export attendance data to SAP, Tally, Zoho, or custom HRMS systems' },
  { icon: AlertCircle, title: 'Anomaly Alerts', desc: 'Instant notifications for missed punches, overtime, and policy violations' },
  { icon: TrendingUp, title: 'Trend Analysis', desc: 'Historical patterns for workforce planning, absenteeism, and productivity insights' }
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

export default function TimeAttendancePage() {
  const pageTitle = 'Time & Attendance Tracking';
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
                  src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop" 
                  alt="Time and Attendance System"
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
                    <Clock size={16} /> Workforce Intelligence
                  </span>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
                >
                  Time & <span className="text-ids-blue">Attendance</span><br />
                  Tracking
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-gray-300 text-lg max-w-xl mb-6"
                >
                  Automate workforce time tracking with biometric precision. Eliminate buddy punching, streamline payroll, and gain real-time visibility across all locations.
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
                    Start Free Trial <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-medium px-6 py-3 rounded-full hover:bg-white/20 transition-all border border-white/20">
                    Calculate ROI
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Section 1: Metrics Impact - Stats Grid */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-blue to-ids-orange rounded-full"></div>
                <span className="text-ids-blue font-medium">Impact</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                Measurable Workforce Improvements
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {keyMetrics.map((metric, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center hover:border-white/30 transition-all"
                  >
                    <div className={`text-3xl md:text-4xl font-bold ${metric.color} mb-2`}>{metric.value}</div>
                    <div className="font-semibold text-white mb-1">{metric.label}</div>
                    <div className="text-xs text-gray-500">{metric.desc}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 2: Clocking Methods - Feature Cards */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-orange to-ids-yellow rounded-full"></div>
                <span className="text-ids-orange font-medium">Flexibility</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
                Multiple Ways to Clock In
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-10 max-w-2xl">
                Every workforce is different. Choose the right mix of clocking methods for your on-site, remote, and mobile employees.
              </motion.p>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
                {clockingMethods.map((method, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -6 }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-ids-blue/40 transition-all group"
                  >
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-ids-blue/20 to-ids-orange/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <method.icon className="text-ids-blue" size={26} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{method.method}</h3>
                        <p className="text-gray-400 text-sm mb-3">{method.description}</p>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
                          <span className="text-gray-500">Best for: <span className="text-gray-300">{method.bestFor}</span></span>
                        </div>
                        <div className="mt-2 inline-block px-3 py-1 bg-ids-blue/10 rounded-full text-ids-blue text-xs font-medium">
                          {method.accuracy}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 3: Analytics Features - Grid */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-ids-blue rounded-full"></div>
                <span className="text-green-400 font-medium">Analytics</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
                Turn Time Data into Workforce Insights
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-10 max-w-2xl">
                Beyond tracking hours, our platform provides actionable intelligence for HR, operations, and finance teams.
              </motion.p>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-5">
                {insightFeatures.map((feature, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ x: 6 }}
                    className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/5 hover:border-ids-orange/30 hover:bg-white/[0.07] transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ids-orange/20 to-ids-yellow/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <feature.icon className="text-ids-orange" size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{feature.title}</h4>
                      <p className="text-gray-400 text-sm">{feature.desc}</p>
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
              className="bg-gradient-to-r from-ids-blue/10 via-green-500/10 to-transparent border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-72 h-72 bg-ids-blue/10 rounded-full blur-[100px]"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Automate Your Workforce Tracking</h3>
                <p className="text-gray-300 mb-8 max-w-2xl">
                  See how automated time tracking can reduce payroll errors, eliminate time theft, and give you complete visibility into workforce productivity.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-ids-blue hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    Start 14-Day Trial <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/contact" className="bg-transparent border border-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                    Talk to Sales
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
