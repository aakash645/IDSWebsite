'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Breadcrumb, SolutionSidebar, identityAccessMenu } from '@/components/solutions';
import { CircleCheck, ArrowRight, Scan, Shield, Zap, Users, Ticket, Radio, CheckCircle2, Building2, Music, Trophy, GraduationCap, Sparkles, Clock, CreditCard, BarChart3, Layers, Settings, Play, ChevronRight } from 'lucide-react';

const benefits = [
  { 
    icon: Scan, 
    title: 'Easy Contactless Access', 
    desc: 'With a microchip and antenna that communicate via radio waves, RFID badges enable contactless and multi-badge scanning for efficient event entry.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop'
  },
  { 
    icon: Shield, 
    title: 'Secure Authentication', 
    desc: 'Unique encrypted codes eliminate ticket duplication or counterfeiting. MIFARE Ultralight C chips offer advanced 3DES authentication.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=400&auto=format&fit=crop'
  },
  { 
    icon: Zap, 
    title: 'Cost-Effective Solution', 
    desc: 'Compared to other RFID tags, our event badges are significantly cheaper while maintaining premium quality and reliability.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=400&auto=format&fit=crop'
  },
  { 
    icon: Users, 
    title: 'Enhanced Experience', 
    desc: 'Instant access eliminates queues, ensures secure authentication, and enables personalized interactions through integrated event apps.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=400&auto=format&fit=crop'
  },
];

const howItWorks = [
  { step: '01', title: 'Badge Encoding', desc: 'RFID badge with attendee info is printed and encoded with unique encrypted data', icon: Ticket, color: 'ids-blue' },
  { step: '02', title: 'Reader Detection', desc: 'RFID reader detects the badge using radio frequency identification', icon: Radio, color: 'ids-orange' },
  { step: '03', title: 'System Verification', desc: 'Information is transmitted to the system and verified in real-time', icon: Settings, color: 'ids-yellow' },
  { step: '04', title: 'Access Granted', desc: 'Gate opens automatically for seamless, hands-free entry', icon: CheckCircle2, color: 'green-500' },
];

const chipTypes = [
  { model: 'MIFARE Ultralight® EV1', standard: 'ISO 14443A', memory: '48 bytes', range: 'Up to 10cm', frequency: '13.56 MHz', security: '32-bit password', popular: false },
  { model: 'MIFARE Classic® 1K', standard: 'ISO 14443A', memory: '1K bytes', range: 'Up to 10cm', frequency: '13.56 MHz', security: '3-pass authentication', popular: true },
  { model: 'MIFARE Ultralight® C', standard: 'ISO 14443A', memory: '144 bytes', range: 'Up to 10cm', frequency: '13.56 MHz', security: '3DES Authentication', popular: false },
  { model: 'NXP UCODE® 8', standard: 'ISO 18000-6C', memory: '16 bytes', range: 'Up to 10m', frequency: '860-960 MHz', security: 'Password protection', popular: false },
];

const applications = [
  { icon: Music, title: 'Concerts & Festivals', desc: 'Seamless crowd management for music events and large-scale festivals', image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=600&auto=format&fit=crop' },
  { icon: Trophy, title: 'Sports Events', desc: 'Stadium access control with VIP zone management and fan engagement', image: 'https://images.unsplash.com/photo-1461896836934- voices08cbc8?q=80&w=600&auto=format&fit=crop' },
  { icon: Building2, title: 'Conferences & Expos', desc: 'Professional networking events with session tracking and lead capture', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=600&auto=format&fit=crop' },
  { icon: GraduationCap, title: 'Educational Events', desc: 'Seminars, workshops, and graduation ceremonies with attendance tracking', image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=600&auto=format&fit=crop' },
];

const stats = [
  { value: '50K+', label: 'Events Powered', icon: Sparkles },
  { value: '<1s', label: 'Scan Time', icon: Clock },
  { value: '99.9%', label: 'Accuracy Rate', icon: BarChart3 },
  { value: '40%', label: 'Cost Savings', icon: CreditCard },
];

const materials = [
  { name: 'Thermal Paper', desc: 'Heat-sensitive, inkless printing', features: ['Direct thermal printing', 'Cost-effective', 'Standard events'] },
  { name: 'Synthetic Paper', desc: 'Waterproof & tear-resistant', features: ['Durable', 'Outdoor events', 'Multi-day use'] },
  { name: 'Coated Paper', desc: 'Matt finish, professional look', features: ['Thermal transfer', 'Premium quality', 'Corporate events'] },
  { name: 'PVC Cards', desc: 'Rigid, credit card style', features: ['Reusable', 'Premium feel', 'VIP access'] },
];

const faqs = [
  { q: 'Can you set tiered access for VIP vs. regular tickets?', a: 'Yes! Assign granular permissions (e.g., VIP lounges, fast-track lanes) via cloud-based rules, updated in real time for dynamic service differentiation.' },
  { q: 'How to make RFID badges easy for kids/elderly users?', a: 'Our badges feature simple tap-and-go functionality with no orientation required. Large print and lanyard options available for easy visibility.' },
  { q: 'Will the system fail during power/network outages?', a: 'Our systems include offline mode with local caching. Data syncs automatically when connection is restored.' },
  { q: 'What is the minimum order quantity (MOQ)?', a: 'MOQ starts from 500 units for standard badges. Custom designs available from 1000 units with full branding options.' },
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export default function EventBadgesPage() {
  const pageTitle = 'RFID Event Badge Solutions';
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
            
            {/* Hero Section with Parallax */}
            <motion.div 
              ref={heroRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative rounded-3xl overflow-hidden mb-16"
            >
              <motion.div style={{ y: heroY }} className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop" 
                  alt="Event Badge Solutions"
                  className="w-full h-[450px] md:h-[500px] object-cover scale-110"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/70 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-[#0f172a]/30"></div>
              
              <motion.div 
                style={{ opacity: heroOpacity }}
                className="relative z-10 p-8 md:p-12 h-[450px] md:h-[500px] flex flex-col justify-end"
              >
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-ids-blue/20 backdrop-blur-sm rounded-full text-ids-blue text-sm font-medium mb-4">
                    <Sparkles size={16} /> From Stadiums to Festivals
                  </span>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
                >
                  One RFID Badge for<br />
                  <span className="text-ids-blue">Effortless Access</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-gray-300 text-lg md:text-xl max-w-xl mb-6"
                >
                  Smart ticketing solutions that transform event experiences with contactless technology
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <a 
                    href="https://go.keka.com/attendance-management-software-india"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-black font-bold px-6 py-3 rounded-full hover:bg-ids-blue hover:text-white transition-all group"
                  >
                    Get Started <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <button className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-medium px-6 py-3 rounded-full hover:bg-white/20 transition-all border border-white/20">
                    <Play size={18} /> Watch Demo
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Stats Section */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
            >
              {stats.map((stat, i) => (
                <motion.div 
                  key={i} 
                  variants={scaleIn}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-ids-blue/20 to-ids-orange/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 text-center hover:border-ids-blue/50 transition-colors">
                    <stat.icon className="mx-auto mb-3 text-ids-blue" size={28} />
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* What is RFID Event Badge Section */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-blue to-ids-orange rounded-full"></div>
                <span className="text-ids-blue font-medium">Understanding RFID</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">What is an RFID Event Badge?</h2>
              
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    An RFID event badge is a <span className="text-white font-semibold">smart ticket embedded with an RFID chip</span> containing a unique ID number that cannot be changed once manufactured. It uses radio waves to transmit encrypted data from a microchip to a reader for quick, contactless validation.
                  </p>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    The badge can be encoded with passwords and supports encryption for enhanced security management. The heart of an RFID badge is a contactless chip that works seamlessly with event management systems for real-time attendee tracking.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {['Contactless Entry', 'Encrypted Data', 'Unique ID', 'Real-time Tracking'].map((tag, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-gray-300"
                      >
                        <CheckCircle2 className="text-ids-blue shrink-0" size={18} />
                        <span>{tag}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <Link href="/solutions/rfid-cards" className="inline-flex items-center gap-2 text-ids-blue hover:text-ids-orange transition-colors group">
                    Learn more about RFID technology <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-ids-blue/30 to-ids-orange/30 rounded-3xl blur-2xl"></div>
                  <div className="relative rounded-3xl overflow-hidden border border-white/10">
                    <img 
                      src="https://images.unsplash.com/photo-1576153192396-180ecef2a715?q=80&w=800&auto=format&fit=crop" 
                      alt="RFID Badge Structure"
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-ids-blue/20 flex items-center justify-center">
                          <Layers className="text-ids-blue" size={20} />
                        </div>
                        <div>
                          <p className="font-semibold">Multi-Layer Structure</p>
                          <p className="text-gray-400 text-sm">Print layer + Antenna + Chip + Substrate</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Benefits Section with Images */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-orange to-ids-yellow rounded-full"></div>
                <span className="text-ids-orange font-medium">Why Choose Us</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-8">Benefits of RFID Event Badges</motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, i) => (
                  <motion.div 
                    key={i} 
                    variants={fadeInUp}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="group relative rounded-2xl overflow-hidden"
                  >
                    <div className="absolute inset-0">
                      <img src={benefit.image} alt={benefit.title} className="w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#0f172a]/90 to-[#0f172a]/70"></div>
                    </div>
                    <div className="relative p-8">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-ids-blue/30 to-ids-orange/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                        <benefit.icon className="text-ids-blue" size={26} />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{benefit.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* How It Works Section - Interactive */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16 relative"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-blue to-green-500 rounded-full"></div>
                <span className="text-ids-blue font-medium">Simple Process</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">How RFID Event Badges Work</motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-12 max-w-2xl">
                From encoding to entry — a seamless 4-step process that takes less than a second
              </motion.p>
              
              <div className="relative">
                {/* Animated Connection Line */}
                <div className="absolute top-20 left-[10%] right-[10%] h-1 bg-gradient-to-r from-ids-blue via-ids-orange via-ids-yellow to-green-500 hidden md:block rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ x: '-100%' }}
                    whileInView={{ x: '100%' }}
                    transition={{ duration: 2, ease: 'linear', repeat: Infinity }}
                    viewport={{ once: false }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"
                  />
                </div>
                
                <motion.div variants={staggerContainer} className="grid md:grid-cols-4 gap-6">
                  {howItWorks.map((step, i) => (
                    <motion.div 
                      key={i} 
                      variants={scaleIn}
                      whileHover={{ scale: 1.05 }}
                      className="relative text-center group"
                    >
                      <motion.div 
                        className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${
                          i === 0 ? 'from-ids-blue/30 to-ids-blue/10' :
                          i === 1 ? 'from-ids-orange/30 to-ids-orange/10' :
                          i === 2 ? 'from-ids-yellow/30 to-ids-yellow/10' :
                          'from-green-500/30 to-green-500/10'
                        } flex items-center justify-center mb-6 relative z-10 border border-white/10 group-hover:border-white/30 transition-colors`}
                      >
                        <step.icon className={`${
                          i === 0 ? 'text-ids-blue' :
                          i === 1 ? 'text-ids-orange' :
                          i === 2 ? 'text-ids-yellow' :
                          'text-green-500'
                        }`} size={32} />
                      </motion.div>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${
                        i === 0 ? 'bg-ids-blue/20 text-ids-blue' :
                        i === 1 ? 'bg-ids-orange/20 text-ids-orange' :
                        i === 2 ? 'bg-ids-yellow/20 text-ids-yellow' :
                        'bg-green-500/20 text-green-500'
                      }`}>Step {step.step}</span>
                      <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                      <p className="text-gray-400 text-sm">{step.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Materials Section - New */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-yellow to-ids-orange rounded-full"></div>
                <span className="text-ids-yellow font-medium">Customization</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">Material Options</motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-10 max-w-2xl">
                Choose the perfect material for your event requirements
              </motion.p>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-4 gap-4">
                {materials.map((material, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-ids-yellow/50 transition-all group"
                  >
                    <h4 className="font-bold text-lg mb-2 group-hover:text-ids-yellow transition-colors">{material.name}</h4>
                    <p className="text-gray-400 text-sm mb-4">{material.desc}</p>
                    <ul className="space-y-2">
                      {material.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-ids-yellow"></div>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Chip Types Section - Cards Style */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-blue to-ids-orange rounded-full"></div>
                <span className="text-ids-blue font-medium">Technology</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">Common Chip Types</motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-10 max-w-2xl">
                Industry-standard chips for reliable performance
              </motion.p>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-4">
                {chipTypes.map((chip, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    className={`relative p-6 rounded-2xl border transition-all hover:border-ids-blue/50 ${chip.popular ? 'bg-gradient-to-br from-ids-blue/10 to-ids-orange/10 border-ids-blue/30' : 'bg-white/5 border-white/10'}`}
                  >
                    {chip.popular && (
                      <span className="absolute top-4 right-4 px-3 py-1 bg-ids-blue text-white text-xs font-bold rounded-full">Popular</span>
                    )}
                    <h4 className="font-bold text-lg mb-4">{chip.model}</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-500 text-xs mb-1">Standard</p>
                        <p className="text-gray-300 text-sm">{chip.standard}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs mb-1">Memory</p>
                        <p className="text-gray-300 text-sm">{chip.memory}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs mb-1">Read Range</p>
                        <p className="text-gray-300 text-sm">{chip.range}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs mb-1">Frequency</p>
                        <p className="text-gray-300 text-sm">{chip.frequency}</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <p className="text-gray-500 text-xs mb-1">Security</p>
                      <p className="text-ids-blue text-sm font-medium">{chip.security}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              <p className="text-gray-500 text-sm mt-6 text-center">Other chip types are also available upon request</p>
            </motion.div>

            {/* Applications Section with Images */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-orange to-ids-blue rounded-full"></div>
                <span className="text-ids-orange font-medium">Use Cases</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">Applications</motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-10 max-w-2xl">
                From intimate gatherings to massive festivals — we&apos;ve got you covered
              </motion.p>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
                {applications.map((app, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    className="group relative h-64 rounded-2xl overflow-hidden"
                  >
                    <img 
                      src={app.image} 
                      alt={app.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-ids-orange/20 backdrop-blur-sm flex items-center justify-center">
                          <app.icon className="text-ids-orange" size={20} />
                        </div>
                        <h4 className="font-bold text-xl">{app.title}</h4>
                      </div>
                      <p className="text-gray-300 text-sm">{app.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Key Features - Animated Grid */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-ids-blue rounded-full"></div>
                <span className="text-green-500 font-medium">Features</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-8">Key Capabilities</motion.h2>
              
              <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: Users, text: 'VIP vs Regular Access' },
                  { icon: BarChart3, text: 'Real-time Analytics' },
                  { icon: CreditCard, text: 'Cashless Payments' },
                  { icon: Sparkles, text: 'Social Integration' },
                  { icon: Building2, text: 'Zone Tracking' },
                  { icon: Ticket, text: 'Lead Capture' },
                  { icon: Shield, text: 'Lost Badge Recovery' },
                  { icon: Clock, text: 'Multi-day Support' }
                ].map((feature, i) => (
                  <motion.div 
                    key={i}
                    variants={scaleIn}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(156, 208, 236, 0.1)' }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-ids-blue/50 transition-all cursor-default"
                  >
                    <feature.icon className="text-ids-blue shrink-0" size={20} />
                    <span className="text-gray-300 text-sm">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* FAQ Section */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-yellow to-ids-orange rounded-full"></div>
                <span className="text-ids-yellow font-medium">Common Questions</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-8">Frequently Asked Questions</motion.h2>
              
              <motion.div variants={staggerContainer} className="space-y-4">
                {faqs.map((faq, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
                  >
                    <h4 className="font-bold text-lg mb-3 flex items-start gap-3">
                      <span className="text-ids-blue shrink-0">Q:</span>
                      {faq.q}
                    </h4>
                    <p className="text-gray-400 pl-7">{faq.a}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* CTA Section - Enhanced */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden"
            >
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2070&auto=format&fit=crop" 
                  alt="Event CTA"
                  className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/90 to-[#0f172a]/70"></div>
              </div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-ids-blue/20 rounded-full blur-[100px]"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-ids-orange/20 rounded-full blur-[100px]"></div>
              
              <div className="relative z-10 p-8 md:p-16 text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6"
                >
                  <Sparkles size={16} className="text-ids-yellow" /> Ready to get started?
                </motion.div>
                <h3 className="text-3xl md:text-5xl font-bold mb-6">Transform Your Event Experience</h3>
                <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                  From stadiums to festivals, our RFID event badges enable seamless access control, enhanced security, and unforgettable attendee experiences.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://go.keka.com/attendance-management-software-india"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-black font-bold px-8 py-4 rounded-full hover:bg-ids-blue hover:text-white transition-all"
                  >
                    Schedule a Meeting <ArrowRight size={18} />
                  </motion.a>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link href="/contact" className="inline-flex items-center gap-2 bg-transparent border-2 border-white/30 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-all">
                      Request Custom Quote
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>

          </main>
        </div>
      </div>
    </div>
  );
}
