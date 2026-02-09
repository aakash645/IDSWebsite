'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BOOKING_URL } from '@/constants';
import { Breadcrumb, SolutionSidebar, softwarePlatformsMenu } from '@/components/solutions';
import { ArrowRight, Search, TrendingUp, FileText, Link2, BarChart3, Globe, Code, Zap, Target, Award, LineChart, MapPin, Building2 } from 'lucide-react';

// SEO services
const seoServices = [
  { icon: Search, title: 'Keyword Research', desc: 'In-depth keyword analysis, search intent mapping, and competitor gap analysis for ranking opportunities' },
  { icon: Code, title: 'Technical SEO', desc: 'Site speed optimization, Core Web Vitals, schema markup, crawlability, and indexation audits' },
  { icon: FileText, title: 'Content Strategy', desc: 'Topic clusters, pillar pages, blog calendars, and SEO-optimized content that ranks and converts' },
  { icon: Link2, title: 'Link Building', desc: 'White-hat backlink acquisition through digital PR, guest posting, and HARO outreach' },
];

// SEO metrics tracked
const seoMetrics = [
  { icon: TrendingUp, title: 'Organic Traffic', desc: 'Month-over-month growth in search engine driven visitors with channel attribution.', kpi: 'Traffic Growth' },
  { icon: Target, title: 'Keyword Rankings', desc: 'Position tracking for target keywords with SERP feature visibility monitoring.', kpi: 'Position Tracking' },
  { icon: Award, title: 'Domain Authority', desc: 'Backlink profile health, referring domains growth, and toxic link identification.', kpi: 'Authority Building' },
  { icon: LineChart, title: 'Conversion Rate', desc: 'Organic traffic quality measured by goal completions, leads, and revenue attribution.', kpi: 'ROI Measurement' },
];

// SEO types
const seoTypes = [
  { icon: Globe, title: 'National SEO', desc: 'Compete for high-volume keywords across India or internationally', scope: 'Broad Reach' },
  { icon: MapPin, title: 'Local SEO', desc: 'Google Business Profile optimization, local citations, and map pack rankings', scope: 'Hyperlocal' },
  { icon: Building2, title: 'Enterprise SEO', desc: 'Large-scale site architecture, multi-location, and international SEO strategies', scope: 'Scalable' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function SEOPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="pt-24 min-h-screen bg-[#0f172a] text-white">
      <Breadcrumb pageTitle="Search Engine Optimization" parentService="Software & Platforms" parentPath="/software-platforms" />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <SolutionSidebar menuTitle="Software & Platforms" sections={softwarePlatformsMenu} />

          <main className="w-full lg:w-3/4 order-1 lg:order-2">
            {/* Hero Section */}
            <motion.div ref={heroRef} className="relative h-[60vh] min-h-[400px] rounded-3xl overflow-hidden mb-16" style={{ y: heroY }}>
              <motion.div className="absolute inset-0" style={{ opacity: heroOpacity }}>
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/30 via-teal-600/20 to-transparent z-10" />
                <img src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop" alt="SEO" className="w-full h-full object-cover" />
              </motion.div>
              <div className="absolute inset-0 z-20 flex items-end p-8 md:p-12">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                  <span className="inline-block px-4 py-1 rounded-full bg-green-500/20 text-green-300 text-sm font-medium mb-4 border border-green-500/30">Organic Growth</span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">Search Engine<br /><span className="text-green-400">Optimization</span></h1>
                  <p className="text-xl text-gray-300 max-w-2xl">Data-driven SEO strategies to increase organic visibility, drive qualified traffic, and grow revenue.</p>
                </motion.div>
              </div>
            </motion.div>

            {/* SEO Services Section */}
            <motion.section className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="text-green-400 font-semibold tracking-wider uppercase text-sm">SEO Services</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">What We Optimize</h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Full-spectrum SEO covering technical foundations, content, and authority building.</p>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-6">
                {seoServices.map((service, i) => (
                  <motion.div key={i} variants={fadeInUp} className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-green-500/50 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                        <service.icon className="w-7 h-7 text-green-400" />
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

            {/* SEO Metrics Section */}
            <motion.section className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="text-teal-400 font-semibold tracking-wider uppercase text-sm">Performance Tracking</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Metrics That Matter</h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Transparent reporting with KPIs directly tied to business outcomes.</p>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-6">
                {seoMetrics.map((metric, i) => (
                  <motion.div key={i} variants={fadeInUp} className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 text-xs font-medium">{metric.kpi}</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <metric.icon className="w-6 h-6 text-teal-400" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{metric.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{metric.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* SEO Types Section */}
            <motion.section className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="text-lime-400 font-semibold tracking-wider uppercase text-sm">Scope Options</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">SEO for Every Scale</h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">From local businesses to enterprise websites—tailored SEO strategies.</p>
              </motion.div>
              <div className="grid md:grid-cols-3 gap-6">
                {seoTypes.map((type, i) => (
                  <motion.div key={i} variants={fadeInUp} className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-lime-500/5 to-transparent hover:border-lime-500/30 transition-colors text-center">
                    <div className="w-14 h-14 rounded-2xl bg-lime-500/10 flex items-center justify-center mx-auto mb-4">
                      <type.icon className="w-7 h-7 text-lime-400" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{type.title}</h3>
                    <p className="text-gray-400 text-sm mb-3">{type.desc}</p>
                    <span className="inline-flex items-center gap-1 text-lime-400 text-sm font-medium">
                      <Zap className="w-4 h-4" /> {type.scope}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* CTA Section */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-r from-green-500/10 via-teal-500/10 to-transparent border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-500/10 rounded-full blur-[60px]" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="w-6 h-6 text-green-400" />
                  <span className="text-green-300 font-medium">Organic Growth</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to rank higher?</h3>
                <p className="text-gray-300 mb-8 max-w-2xl">Get a free SEO audit and discover your ranking potential—actionable insights with no obligation.</p>
                <div className="flex flex-wrap gap-4">
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2">
                    Get Free Audit <ArrowRight size={18} />
                  </a>
                  <button className="bg-transparent border border-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">View Case Studies</button>
                </div>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}
