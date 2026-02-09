'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BOOKING_URL } from '@/constants';
import { Breadcrumb, SolutionSidebar, softwarePlatformsMenu } from '@/components/solutions';
import { 
  ArrowRight, Timer, Radio, Trophy, Users,
  Bike, Footprints, Car, Waves
} from 'lucide-react';

// Timing Technology
const timingTech = [
  { icon: Radio, name: 'RFID Chip Timing', desc: 'Disposable or reusable chips on bib/shoe/bike' },
  { icon: Timer, name: 'Mat-Based Detection', desc: 'Start, split, and finish line timing mats' },
  { icon: Trophy, name: 'Live Leaderboards', desc: 'Real-time results on displays and web' },
  { icon: Users, name: 'Participant Portal', desc: 'Registration, results, certificates' }
];

// Race Types
const raceTypes = [
  { icon: Footprints, name: 'Running Events', desc: 'Marathons, 5K/10K, trail runs' },
  { icon: Bike, name: 'Cycling', desc: 'Road races, MTB, time trials' },
  { icon: Waves, name: 'Triathlon', desc: 'Swim, bike, run multi-sport' },
  { icon: Car, name: 'Motorsport', desc: 'Karting, rally, track days' }
];

// Key Metrics
const metrics = [
  { value: '<0.01s', label: 'Timing Accuracy', desc: 'RFID precision' },
  { value: '50,000+', label: 'Participants', desc: 'Per event capacity' },
  { value: 'Real-time', label: 'Results', desc: 'Live to web/app' }
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

export default function RaceManagementPage() {
  const pageTitle = 'Race Report & Time Management';
  const parentService = 'Software & Platforms';
  
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="pt-24 min-h-screen bg-[#0f172a] text-white overflow-hidden">
      <Breadcrumb pageTitle={pageTitle} parentService={parentService} parentPath="/software-platforms" />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <SolutionSidebar menuTitle={parentService} sections={softwarePlatformsMenu} />

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
                  src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop" 
                  alt="Race Timing System"
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
                    <Timer size={16} /> Race Timing
                  </span>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
                >
                  Race Report &<br />
                  <span className="text-ids-orange">Time Management</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-gray-300 text-lg max-w-xl mb-6"
                >
                  RFID chip timing for marathons, cycling, and multi-sport events. Real-time results, live leaderboards, and automated certificates.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <a 
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-black font-bold px-6 py-3 rounded-full hover:bg-ids-orange hover:text-black transition-all group"
                  >
                    Get Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Section 1: Timing Technology */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-orange to-ids-blue rounded-full"></div>
                <span className="text-ids-orange font-medium">Technology</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                Timing Technology
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-5">
                {timingTech.map((tech, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/5 hover:border-ids-orange/40 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ids-orange/20 to-ids-blue/10 flex items-center justify-center shrink-0">
                      <tech.icon className="text-ids-orange" size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{tech.name}</h3>
                      <p className="text-gray-400 text-sm">{tech.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 2: Race Types */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-blue to-green-500 rounded-full"></div>
                <span className="text-ids-blue font-medium">Events</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                Race Types Supported
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-5">
                {raceTypes.map((race, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -4 }}
                    className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-ids-blue/40 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ids-blue/20 to-green-500/10 flex items-center justify-center shrink-0">
                      <race.icon className="text-ids-blue" size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-0.5">{race.name}</h3>
                      <p className="text-gray-400 text-sm">{race.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 3: Key Metrics */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-ids-yellow rounded-full"></div>
                <span className="text-green-400 font-medium">Performance</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                System Capabilities
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
                {metrics.map((metric, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -6 }}
                    className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-green-500/40 transition-all text-center"
                  >
                    <div className="text-4xl font-bold text-green-400 mb-2">{metric.value}</div>
                    <h3 className="font-bold mb-1">{metric.label}</h3>
                    <p className="text-xs text-gray-400">{metric.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* CTA Section */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-ids-orange/10 via-ids-blue/5 to-transparent border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-72 h-72 bg-ids-orange/10 rounded-full blur-[100px]"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Time Your Next Event</h3>
                <p className="text-gray-300 mb-8 max-w-2xl">
                  Professional RFID timing services for running, cycling, and multi-sport events of any scale.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-ids-orange transition-colors flex items-center gap-2 group"
                  >
                    Get Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/solutions/smart-attendance" className="bg-transparent border border-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                    Attendance Systems
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
