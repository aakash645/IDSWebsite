'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BOOKING_URL } from '@/constants';
import { Breadcrumb, SolutionSidebar, softwarePlatformsMenu } from '@/components/solutions';
import { ArrowRight, LayoutDashboard, CreditCard, BarChart3, Users, Search, History, AlertCircle, Settings, Printer, RefreshCw, Database, Activity, PieChart, TrendingUp } from 'lucide-react';

// Dashboard modules
const dashboardModules = [
  { icon: CreditCard, title: 'Card Inventory', desc: 'Track blank card stock, issued cards, damaged returns, and reprint requests with automatic reorder alerts' },
  { icon: Users, title: 'Cardholder Database', desc: 'Centralized profiles with photo, biometrics, access privileges, card history, and department assignment' },
  { icon: History, title: 'Transaction Logs', desc: 'Complete audit trail of every card tap—door access, attendance punch, cafeteria payment, parking entry' },
  { icon: AlertCircle, title: 'Alert Management', desc: 'Real-time notifications for blacklisted card usage, access violations, card expiry, and suspicious patterns' },
];

// Analytics widgets
const analyticsWidgets = [
  { icon: BarChart3, title: 'Usage Analytics', desc: 'Heatmaps showing peak access times, most-used entry points, and zone-wise traffic patterns.', metric: '24/7 Monitoring' },
  { icon: PieChart, title: 'Card Distribution', desc: 'Breakdown by department, designation, card type (employee, contractor, visitor, VIP).', metric: 'Visual Reports' },
  { icon: TrendingUp, title: 'Trend Analysis', desc: 'Week-over-week, month-over-month comparisons for attendance, access patterns, and violations.', metric: 'Predictive Insights' },
  { icon: Activity, title: 'Health Monitor', desc: 'Reader connectivity status, encoder health, printer queue, and system performance metrics.', metric: 'System Health' },
];

// Operations capabilities
const operationsFeatures = [
  { icon: Printer, title: 'Card Printing Queue', desc: 'Manage print jobs with priority queuing, batch printing, and template selection' },
  { icon: Search, title: 'Advanced Search', desc: 'Find any card by ID, name, department, status, or issue date in milliseconds' },
  { icon: RefreshCw, title: 'Bulk Operations', desc: 'Mass enable/disable, extend validity, or re-encode cards for entire departments' },
  { icon: Database, title: 'Data Export', desc: 'Generate reports in Excel, PDF, or CSV for compliance audits and HR systems' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function RFIDDashboardPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="pt-24 min-h-screen bg-[#0f172a] text-white">
      <Breadcrumb pageTitle="RFID Card Management Dashboard" parentService="Software & Platforms" parentPath="/software-platforms" />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <SolutionSidebar menuTitle="Software & Platforms" sections={softwarePlatformsMenu} />

          <main className="w-full lg:w-3/4 order-1 lg:order-2">
            {/* Hero Section */}
            <motion.div ref={heroRef} className="relative h-[60vh] min-h-[400px] rounded-3xl overflow-hidden mb-16" style={{ y: heroY }}>
              <motion.div className="absolute inset-0" style={{ opacity: heroOpacity }}>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/30 via-blue-600/20 to-transparent z-10" />
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="RFID Dashboard" className="w-full h-full object-cover" />
              </motion.div>
              <div className="absolute inset-0 z-20 flex items-end p-8 md:p-12">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                  <span className="inline-block px-4 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm font-medium mb-4 border border-cyan-500/30">Card Lifecycle Management</span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">RFID Card<br /><span className="text-cyan-400">Management Dashboard</span></h1>
                  <p className="text-xl text-gray-300 max-w-2xl">Unified control center for card issuance, tracking, analytics, and lifecycle management across your organization.</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Dashboard Modules Section */}
            <motion.section className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm">Core Modules</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Dashboard Components</h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Every aspect of card management—from blank inventory to cardholder access logs—in one unified interface.</p>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-6">
                {dashboardModules.map((module, i) => (
                  <motion.div key={i} variants={fadeInUp} className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                        <module.icon className="w-7 h-7 text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{module.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{module.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Analytics Widgets Section */}
            <motion.section className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm">Visual Analytics</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Insights at a Glance</h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Interactive charts and real-time widgets for data-driven decision making.</p>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-6">
                {analyticsWidgets.map((widget, i) => (
                  <motion.div key={i} variants={fadeInUp} className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-xs font-medium">{widget.metric}</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <widget.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{widget.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{widget.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Operations Features Section */}
            <motion.section className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="text-teal-400 font-semibold tracking-wider uppercase text-sm">Operational Tools</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Admin Capabilities</h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Powerful tools for administrators to manage thousands of cards efficiently.</p>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-6">
                {operationsFeatures.map((feature, i) => (
                  <motion.div key={i} variants={fadeInUp} className="p-6 rounded-2xl border border-white/10 bg-gradient-to-r from-teal-500/5 to-transparent hover:border-teal-500/30 transition-colors">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center">
                        <feature.icon className="w-5 h-5 text-teal-400" />
                      </div>
                      <h3 className="text-lg font-bold">{feature.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* CTA Section */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-transparent border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-[60px]" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <LayoutDashboard className="w-6 h-6 text-cyan-400" />
                  <span className="text-cyan-300 font-medium">Centralized Card Management</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Take control of your card operations</h3>
                <p className="text-gray-300 mb-8 max-w-2xl">Deploy our RFID Dashboard to streamline card issuance, monitor access activity, and generate compliance reports—all from a single screen.</p>
                <div className="flex flex-wrap gap-4">
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2">
                    Request Demo <ArrowRight size={18} />
                  </a>
                  <button className="bg-transparent border border-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">View Screenshots</button>
                </div>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}
