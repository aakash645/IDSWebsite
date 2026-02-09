'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BOOKING_URL } from '@/constants';
import { Breadcrumb, SolutionSidebar, softwarePlatformsMenu } from '@/components/solutions';
import { ArrowRight, ShoppingCart, CreditCard, Package, BarChart3, Truck, Users, Smartphone, Globe, Lock, Zap, Search, Layers, Settings, Shield } from 'lucide-react';

// E-commerce platform features
const platformFeatures = [
  { icon: ShoppingCart, title: 'Product Catalog', desc: 'Unlimited SKUs with variants, categories, filters, and advanced search with auto-suggestions' },
  { icon: CreditCard, title: 'Payment Gateway', desc: 'Multi-gateway integration—Razorpay, PayU, Stripe, COD—with split payments and subscriptions' },
  { icon: Package, title: 'Inventory Management', desc: 'Real-time stock tracking, low-stock alerts, warehouse mapping, and multi-location support' },
  { icon: Truck, title: 'Shipping Integration', desc: 'API connections to Delhivery, Shiprocket, DTDC with rate comparison and tracking' },
];

// Commerce capabilities
const commerceCapabilities = [
  { icon: Users, title: 'Customer Accounts', desc: 'User registration, order history, wishlist, saved addresses, and loyalty points.', highlight: 'Retention' },
  { icon: BarChart3, title: 'Analytics Dashboard', desc: 'Sales reports, conversion funnels, cart abandonment tracking, and revenue analytics.', highlight: 'Insights' },
  { icon: Search, title: 'SEO Optimized', desc: 'Clean URLs, meta tags, schema markup, sitemap generation, and Core Web Vitals optimization.', highlight: 'Discoverability' },
  { icon: Lock, title: 'PCI-DSS Compliant', desc: 'Secure checkout, tokenized payments, SSL encryption, and fraud detection.', highlight: 'Security' },
];

// Platform options
const platformOptions = [
  { icon: Layers, title: 'Custom Development', desc: 'Fully bespoke e-commerce built on Next.js, React, or headless architecture', tech: 'Headless Commerce' },
  { icon: Globe, title: 'Shopify Plus', desc: 'Enterprise Shopify implementation with custom theme and app development', tech: 'SaaS Platform' },
  { icon: Settings, title: 'WooCommerce', desc: 'WordPress-based stores with extensive plugin ecosystem for SMBs', tech: 'Open Source' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function EcommercePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="pt-24 min-h-screen bg-[#0f172a] text-white">
      <Breadcrumb pageTitle="E-Commerce Development" parentService="Software & Platforms" parentPath="/software-platforms" />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <SolutionSidebar menuTitle="Software & Platforms" sections={softwarePlatformsMenu} />

          <main className="w-full lg:w-3/4 order-1 lg:order-2">
            {/* Hero Section */}
            <motion.div ref={heroRef} className="relative h-[60vh] min-h-[400px] rounded-3xl overflow-hidden mb-16" style={{ y: heroY }}>
              <motion.div className="absolute inset-0" style={{ opacity: heroOpacity }}>
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/30 via-green-600/20 to-transparent z-10" />
                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop" alt="E-Commerce Development" className="w-full h-full object-cover" />
              </motion.div>
              <div className="absolute inset-0 z-20 flex items-end p-8 md:p-12">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                  <span className="inline-block px-4 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-medium mb-4 border border-emerald-500/30">Online Commerce</span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">E-Commerce<br /><span className="text-emerald-400">Development</span></h1>
                  <p className="text-xl text-gray-300 max-w-2xl">Custom online stores with seamless checkout, inventory management, and multi-channel selling capabilities.</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Platform Features Section */}
            <motion.section className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="text-emerald-400 font-semibold tracking-wider uppercase text-sm">Core Features</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">E-Commerce Essentials</h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Everything you need to launch and scale your online store—from product listings to fulfillment.</p>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-6">
                {platformFeatures.map((feature, i) => (
                  <motion.div key={i} variants={fadeInUp} className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-emerald-500/50 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                        <feature.icon className="w-7 h-7 text-emerald-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Commerce Capabilities Section */}
            <motion.section className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="text-green-400 font-semibold tracking-wider uppercase text-sm">Advanced Features</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Commerce Capabilities</h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Beyond basic selling—tools to grow, analyze, and optimize your online business.</p>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-6">
                {commerceCapabilities.map((cap, i) => (
                  <motion.div key={i} variants={fadeInUp} className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-300 text-xs font-medium">{cap.highlight}</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <cap.icon className="w-6 h-6 text-green-400" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{cap.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{cap.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Platform Options Section */}
            <motion.section className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="text-teal-400 font-semibold tracking-wider uppercase text-sm">Technology Stack</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Platform Options</h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Choose the right foundation for your e-commerce needs.</p>
              </motion.div>
              <div className="grid md:grid-cols-3 gap-6">
                {platformOptions.map((platform, i) => (
                  <motion.div key={i} variants={fadeInUp} className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-teal-500/5 to-transparent hover:border-teal-500/30 transition-colors text-center">
                    <div className="w-14 h-14 rounded-2xl bg-teal-500/10 flex items-center justify-center mx-auto mb-4">
                      <platform.icon className="w-7 h-7 text-teal-400" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{platform.title}</h3>
                    <p className="text-gray-400 text-sm mb-3">{platform.desc}</p>
                    <span className="inline-flex items-center gap-1 text-teal-400 text-sm font-medium">
                      <Zap className="w-4 h-4" /> {platform.tech}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* CTA Section */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-transparent border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-green-500/10 rounded-full blur-[60px]" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <ShoppingCart className="w-6 h-6 text-emerald-400" />
                  <span className="text-emerald-300 font-medium">Digital Commerce</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Launch your online store</h3>
                <p className="text-gray-300 mb-8 max-w-2xl">From D2C brands to enterprise marketplaces—we build e-commerce experiences that convert and scale.</p>
                <div className="flex flex-wrap gap-4">
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2">
                    Get Quote <ArrowRight size={18} />
                  </a>
                  <button className="bg-transparent border border-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">View Portfolio</button>
                </div>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}
