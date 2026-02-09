'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BOOKING_URL } from '@/constants';
import { Breadcrumb, SolutionSidebar, softwarePlatformsMenu } from '@/components/solutions';
import { ArrowRight, Palette, Layers, PenTool, Monitor, Smartphone, FileImage, Type, Sparkles, Eye, MousePointer, Layout, Figma } from 'lucide-react';

// Design services
const designServices = [
  { icon: Palette, title: 'Brand Identity', desc: 'Logo design, color systems, typography guidelines, and comprehensive brand style guides' },
  { icon: Layout, title: 'UI/UX Design', desc: 'User interface design for web and mobile apps with wireframes, prototypes, and design systems' },
  { icon: FileImage, title: 'Marketing Collateral', desc: 'Brochures, banners, social media graphics, presentations, and print-ready artwork' },
  { icon: PenTool, title: 'Illustration', desc: 'Custom icons, infographics, vector illustrations, and character design for digital products' },
];

// UI/UX process
const uxProcess = [
  { icon: Eye, title: 'User Research', desc: 'Stakeholder interviews, competitor analysis, and persona development to understand user needs.', phase: 'Discovery' },
  { icon: Layers, title: 'Information Architecture', desc: 'Site maps, user flows, and content hierarchy ensuring intuitive navigation.', phase: 'Structure' },
  { icon: MousePointer, title: 'Wireframing', desc: 'Low-fidelity sketches and clickable wireframes for rapid iteration and validation.', phase: 'Blueprint' },
  { icon: Sparkles, title: 'Visual Design', desc: 'High-fidelity mockups with brand-aligned aesthetics, micro-interactions, and design specs.', phase: 'Polish' },
];

// Deliverables
const deliverables = [
  { icon: Figma, title: 'Figma Files', desc: 'Organized design files with components, variants, and developer handoff specifications' },
  { icon: Monitor, title: 'Responsive Designs', desc: 'Desktop, tablet, and mobile breakpoints for seamless cross-device experience' },
  { icon: Type, title: 'Design System', desc: 'Reusable UI kit with buttons, forms, cards, and typography styles' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function GraphicDesignPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="pt-24 min-h-screen bg-[#0f172a] text-white">
      <Breadcrumb pageTitle="Graphic Design & UI/UX" parentService="Software & Platforms" parentPath="/software-platforms" />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <SolutionSidebar menuTitle="Software & Platforms" sections={softwarePlatformsMenu} />

          <main className="w-full lg:w-3/4 order-1 lg:order-2">
            {/* Hero Section */}
            <motion.div ref={heroRef} className="relative h-[60vh] min-h-[400px] rounded-3xl overflow-hidden mb-16" style={{ y: heroY }}>
              <motion.div className="absolute inset-0" style={{ opacity: heroOpacity }}>
                <div className="absolute inset-0 bg-gradient-to-br from-pink-600/30 via-purple-600/20 to-transparent z-10" />
                <img src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop" alt="Graphic Design" className="w-full h-full object-cover" />
              </motion.div>
              <div className="absolute inset-0 z-20 flex items-end p-8 md:p-12">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                  <span className="inline-block px-4 py-1 rounded-full bg-pink-500/20 text-pink-300 text-sm font-medium mb-4 border border-pink-500/30">Creative Studio</span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">Graphic Design<br /><span className="text-pink-400">& UI/UX</span></h1>
                  <p className="text-xl text-gray-300 max-w-2xl">From brand identity to user interfaces—design that communicates, engages, and converts.</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Design Services Section */}
            <motion.section className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="text-pink-400 font-semibold tracking-wider uppercase text-sm">Design Services</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">What We Create</h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Comprehensive design services from branding to digital product interfaces.</p>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-6">
                {designServices.map((service, i) => (
                  <motion.div key={i} variants={fadeInUp} className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-pink-500/50 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                        <service.icon className="w-7 h-7 text-pink-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{service.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* UX Process Section */}
            <motion.section className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="text-purple-400 font-semibold tracking-wider uppercase text-sm">Our Process</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">UI/UX Design Process</h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">User-centered design methodology ensuring products that delight.</p>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-6">
                {uxProcess.map((step, i) => (
                  <motion.div key={i} variants={fadeInUp} className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs font-medium">{step.phase}</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <step.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Deliverables Section */}
            <motion.section className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="text-fuchsia-400 font-semibold tracking-wider uppercase text-sm">What You Get</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Design Deliverables</h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Production-ready assets and documentation for seamless development handoff.</p>
              </motion.div>
              <div className="grid md:grid-cols-3 gap-6">
                {deliverables.map((item, i) => (
                  <motion.div key={i} variants={fadeInUp} className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500/5 to-transparent hover:border-fuchsia-500/30 transition-colors text-center">
                    <div className="w-14 h-14 rounded-2xl bg-fuchsia-500/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-7 h-7 text-fuchsia-400" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* CTA Section */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-transparent border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-[60px]" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <Palette className="w-6 h-6 text-pink-400" />
                  <span className="text-pink-300 font-medium">Creative Design</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Let&apos;s design something amazing</h3>
                <p className="text-gray-300 mb-8 max-w-2xl">From concept to pixel-perfect delivery—partner with our design team to bring your vision to life.</p>
                <div className="flex flex-wrap gap-4">
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2">
                    Start Project <ArrowRight size={18} />
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
