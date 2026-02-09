'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BOOKING_URL } from '@/constants';
import { Breadcrumb, SolutionSidebar, softwarePlatformsMenu } from '@/components/solutions';
import { 
  ArrowRight, 
  Target, 
  TrendingUp, 
  BarChart3, 
  Mail, 
  Megaphone, 
  MousePointerClick,
  Users,
  PieChart,
  LineChart,
  Share2,
  Zap,
  Globe,
  DollarSign,
  Eye,
  MessageSquare,
  Heart,
  Repeat,
  CalendarDays,
  Gauge
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const marketingServices = [
  { icon: MousePointerClick, title: 'Pay-Per-Click Advertising', desc: 'Google Ads, Bing Ads, and programmatic display campaigns with advanced bidding strategies and audience targeting for maximum ROI.' },
  { icon: Share2, title: 'Social Media Marketing', desc: 'Strategic presence on Facebook, Instagram, LinkedIn, Twitter with organic content, paid promotions, and community management.' },
  { icon: Mail, title: 'Email Marketing Automation', desc: 'Drip campaigns, newsletters, lead nurturing sequences with personalization, A/B testing, and behavioral triggers for higher conversions.' },
  { icon: Megaphone, title: 'Content Marketing', desc: 'Blog posts, whitepapers, case studies, videos, and infographics that establish thought leadership and drive organic traffic.' },
  { icon: Target, title: 'Conversion Rate Optimization', desc: 'Landing page optimization, A/B testing, heat mapping, user journey analysis to maximize conversions from existing traffic.' },
  { icon: Globe, title: 'Remarketing & Retargeting', desc: 'Re-engage website visitors across display networks and social platforms with personalized ads based on their browsing behavior.' },
];

const analyticsMetrics = [
  { icon: Users, title: 'Audience Analytics', value: '360°', desc: 'Demographics, interests, behavior patterns, device usage, and customer journey mapping across all touchpoints.' },
  { icon: DollarSign, title: 'Revenue Attribution', value: 'Multi-Touch', desc: 'Track every marketing dollar to revenue with first-touch, last-touch, linear, and data-driven attribution models.' },
  { icon: Eye, title: 'Campaign Performance', value: 'Real-Time', desc: 'Impressions, clicks, CTR, CPC, conversions, and ROAS dashboards updated in real-time for agile optimization.' },
  { icon: TrendingUp, title: 'Growth Tracking', value: 'YoY/MoM', desc: 'Historical performance comparisons, trend analysis, and predictive forecasting for strategic planning.' },
];

const platformIntegrations = [
  { icon: BarChart3, title: 'Google Analytics 4', desc: 'Event-based tracking, enhanced ecommerce, custom dimensions, and BigQuery integration for advanced analysis.' },
  { icon: Megaphone, title: 'Meta Ads Manager', desc: 'Facebook & Instagram advertising with pixel tracking, custom audiences, lookalikes, and catalog integration.' },
  { icon: Target, title: 'Google Ads', desc: 'Search, display, shopping, video, and performance max campaigns with conversion tracking and smart bidding.' },
  { icon: LineChart, title: 'HubSpot/Salesforce', desc: 'CRM integration for closed-loop reporting, lead scoring, and marketing-sales alignment.' },
  { icon: PieChart, title: 'Data Studio/Looker', desc: 'Custom dashboards combining data from multiple sources for executive-level reporting and insights.' },
  { icon: Mail, title: 'Mailchimp/Klaviyo', desc: 'Email platform integration with subscriber analytics, campaign performance, and revenue attribution.' },
];

const campaignTypes = [
  { icon: MousePointerClick, title: 'Lead Generation', color: 'from-blue-500/20 to-blue-600/5 border-blue-500/30', metrics: ['Form Submissions', 'Cost Per Lead', 'Lead Quality Score'] },
  { icon: DollarSign, title: 'E-Commerce Sales', color: 'from-orange-500/20 to-orange-600/5 border-orange-500/30', metrics: ['Revenue', 'ROAS', 'Average Order Value'] },
  { icon: Eye, title: 'Brand Awareness', color: 'from-purple-500/20 to-purple-600/5 border-purple-500/30', metrics: ['Impressions', 'Reach', 'Brand Lift'] },
  { icon: Users, title: 'User Acquisition', color: 'from-green-500/20 to-green-600/5 border-green-500/30', metrics: ['New Users', 'CAC', 'LTV:CAC Ratio'] },
];

const socialMetrics = [
  { icon: Heart, label: 'Engagement Rate', desc: 'Likes, comments, shares relative to reach' },
  { icon: Users, label: 'Follower Growth', desc: 'Net new followers over time' },
  { icon: Repeat, label: 'Share of Voice', desc: 'Brand mentions vs. competitors' },
  { icon: MessageSquare, label: 'Response Time', desc: 'Average reply time to inquiries' },
];

export default function DigitalMarketingPage() {
  const pageTitle = 'Digital Marketing and Analytics';
  const parentService = 'Software & Platforms';
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <div className="pt-24 min-h-screen bg-[#0f172a] text-white">
      <Breadcrumb pageTitle={pageTitle} parentService={parentService} parentPath="/software-platforms" />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <SolutionSidebar menuTitle={parentService} sections={softwarePlatformsMenu} />

          <main className="w-full lg:w-3/4 order-1 lg:order-2">
            {/* Hero Section */}
            <motion.div ref={heroRef} style={{ opacity: heroOpacity, scale: heroScale }} className="relative rounded-3xl overflow-hidden mb-16">
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/30 via-pink-600/20 to-purple-600/30"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent"></div>
              </div>
              <div className="relative z-10 px-8 py-20 md:py-32">
                <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
                  <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-sm font-medium mb-6">
                    <Megaphone size={16} /> Data-Driven Growth
                  </motion.span>
                  <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                    Digital Marketing
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">and Analytics</span>
                  </motion.h1>
                  <motion.p variants={fadeInUp} className="text-xl text-gray-300 leading-relaxed mb-8">
                    Drive measurable business growth with integrated digital marketing campaigns and advanced analytics. From paid advertising to social media, we help brands reach the right audience at the right time with the right message.
                  </motion.p>
                  <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold px-8 py-4 rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all">
                      Start Your Campaign <ArrowRight size={18} />
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Marketing Services */}
            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={staggerContainer} className="mb-20">
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500/20 to-pink-500/20 flex items-center justify-center">
                  <Megaphone className="text-orange-400" size={24} />
                </div>
                <span className="text-orange-400 font-semibold tracking-wide uppercase text-sm">Marketing Channels</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">Full-Funnel Digital Services</motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 mb-10 max-w-2xl">Integrated campaigns across all digital touchpoints—from awareness to conversion—with continuous optimization based on performance data.</motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {marketingServices.map((service, i) => (
                  <motion.div key={i} variants={fadeInUp} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all duration-300 hover:bg-gradient-to-br hover:from-orange-500/10 hover:to-transparent">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/30 to-pink-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <service.icon className="text-orange-400" size={22} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Analytics Metrics */}
            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={staggerContainer} className="mb-20">
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                  <BarChart3 className="text-blue-400" size={24} />
                </div>
                <span className="text-blue-400 font-semibold tracking-wide uppercase text-sm">Analytics & Insights</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">Data-Driven Decision Making</motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 mb-10 max-w-2xl">Transform raw data into actionable insights with advanced analytics, attribution modeling, and custom dashboards that inform strategy.</motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {analyticsMetrics.map((metric, i) => (
                  <motion.div key={i} variants={fadeInUp} className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border border-blue-500/20">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                        <metric.icon className="text-blue-400" size={26} />
                      </div>
                      <div className="flex-1">
                        <div className="text-2xl font-bold text-blue-400 mb-1">{metric.value}</div>
                        <h3 className="text-lg font-bold text-white mb-2">{metric.title}</h3>
                        <p className="text-gray-400 text-sm">{metric.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Campaign Types */}
            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={staggerContainer} className="mb-20">
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-violet-500/20 flex items-center justify-center">
                  <Target className="text-purple-400" size={24} />
                </div>
                <span className="text-purple-400 font-semibold tracking-wide uppercase text-sm">Campaign Objectives</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">Goal-Oriented Campaigns</motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 mb-10 max-w-2xl">Whether generating leads, driving sales, building brand awareness, or acquiring users, we design campaigns around your specific business objectives.</motion.p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {campaignTypes.map((campaign, i) => (
                  <motion.div key={i} variants={fadeInUp} className={`p-6 rounded-2xl bg-gradient-to-br ${campaign.color} border`}>
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                      <campaign.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{campaign.title}</h3>
                    <div className="space-y-2">
                      <span className="text-sm text-gray-300 font-medium">Key Metrics:</span>
                      <div className="flex flex-wrap gap-2">
                        {campaign.metrics.map((metric, j) => (
                          <span key={j} className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium">{metric}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Platform Integrations */}
            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={staggerContainer} className="mb-20">
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                  <Zap className="text-green-400" size={24} />
                </div>
                <span className="text-green-400 font-semibold tracking-wide uppercase text-sm">Platform Integrations</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">Connected Marketing Stack</motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 mb-10 max-w-2xl">Seamless integration with leading marketing platforms for unified data collection, reporting, and optimization across all channels.</motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {platformIntegrations.map((platform, i) => (
                  <motion.div key={i} variants={fadeInUp} className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-green-500/30 transition-all group">
                    <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <platform.icon className="text-green-400" size={20} />
                    </div>
                    <h3 className="font-bold text-white mb-2">{platform.title}</h3>
                    <p className="text-gray-400 text-sm">{platform.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Social Media Metrics */}
            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={staggerContainer} className="mb-20">
              <motion.div variants={fadeInUp} className="p-8 rounded-3xl bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500/30 to-purple-500/30 flex items-center justify-center">
                    <Share2 className="text-pink-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Social Media Analytics</h3>
                    <p className="text-gray-400 text-sm">Track performance across all social platforms</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {socialMetrics.map((metric, i) => (
                    <motion.div key={i} variants={fadeInUp} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                      <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center mx-auto mb-3">
                        <metric.icon className="text-pink-400" size={20} />
                      </div>
                      <h4 className="font-bold text-white text-sm mb-1">{metric.label}</h4>
                      <p className="text-gray-500 text-xs">{metric.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.section>

            {/* Reporting Features */}
            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={staggerContainer} className="mb-20">
              <motion.div variants={fadeInUp} className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                        <PieChart className="text-cyan-400" size={24} />
                      </div>
                      <span className="text-cyan-400 font-semibold">Reporting & Dashboards</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Custom Marketing Dashboards</h3>
                    <p className="text-gray-400 mb-6">Comprehensive reporting that tells the full story of your marketing performance—from top-of-funnel awareness to bottom-line revenue.</p>
                    <ul className="space-y-3">
                      {[
                        { icon: CalendarDays, text: 'Weekly/monthly automated reports' },
                        { icon: Gauge, text: 'KPI tracking with goal alerts' },
                        { icon: TrendingUp, text: 'Trend analysis & forecasting' },
                        { icon: LineChart, text: 'Cross-channel comparison views' },
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-300">
                          <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                            <item.icon className="text-cyan-400" size={16} />
                          </div>
                          {item.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
                      <TrendingUp className="text-cyan-400 mb-3" size={32} />
                      <div className="text-3xl font-bold text-white mb-1">+156%</div>
                      <div className="text-sm text-gray-400">Traffic Growth</div>
                    </div>
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
                      <DollarSign className="text-green-400 mb-3" size={32} />
                      <div className="text-3xl font-bold text-white mb-1">4.2x</div>
                      <div className="text-sm text-gray-400">Average ROAS</div>
                    </div>
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/20">
                      <Users className="text-orange-400 mb-3" size={32} />
                      <div className="text-3xl font-bold text-white mb-1">-38%</div>
                      <div className="text-sm text-gray-400">Cost Per Lead</div>
                    </div>
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                      <Eye className="text-purple-400 mb-3" size={32} />
                      <div className="text-3xl font-bold text-white mb-1">2.5M+</div>
                      <div className="text-sm text-gray-400">Monthly Impressions</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.section>

            {/* CTA Section */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 via-pink-600/20 to-purple-600/20"></div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-[100px]"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/20 rounded-full blur-[100px]"></div>
              <div className="relative z-10 p-8 md:p-12 text-center">
                <Megaphone className="mx-auto text-orange-400 mb-6" size={48} />
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Accelerate Your Growth?</h3>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Let&apos;s discuss your marketing goals and create a data-driven strategy that delivers measurable results and sustainable growth.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold px-8 py-4 rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all">
                    Get Your Strategy Session <ArrowRight size={18} />
                  </a>
                  <button className="bg-white/10 backdrop-blur border border-white/20 text-white font-bold px-8 py-4 rounded-full hover:bg-white/20 transition-colors">
                    View Case Studies
                  </button>
                </div>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}
