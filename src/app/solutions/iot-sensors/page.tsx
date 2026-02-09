'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Breadcrumb, SolutionSidebar, iotRoboticsMenu } from '@/components/solutions';
import { 
  ArrowRight, Thermometer, Droplets, Wind, Eye,
  Wifi, Gauge, Activity, Factory, Building, Truck
} from 'lucide-react';

// Sensor Categories
const sensorCategories = [
  {
    name: 'Environmental Sensors',
    icon: Thermometer,
    sensors: ['Temperature', 'Humidity', 'Pressure', 'Air Quality'],
    use: 'Cold chain, HVAC, warehouses',
    color: 'bg-ids-blue'
  },
  {
    name: 'Motion & Presence',
    icon: Eye,
    sensors: ['PIR', 'Ultrasonic', 'Radar', 'Occupancy'],
    use: 'Security, automation, counting',
    color: 'bg-ids-orange'
  },
  {
    name: 'Industrial Sensors',
    icon: Gauge,
    sensors: ['Vibration', 'Current', 'Level', 'Flow'],
    use: 'Predictive maintenance, process control',
    color: 'bg-green-500'
  }
];

// Connectivity Options
const connectivityOptions = [
  { name: 'LoRaWAN', range: 'Up to 15 km', power: 'Ultra-low', best: 'Large campuses' },
  { name: 'WiFi/Ethernet', range: 'Up to 100m', power: 'Medium', best: 'Indoor facilities' },
  { name: 'Zigbee/Z-Wave', range: 'Up to 100m', power: 'Low', best: 'Mesh networks' },
  { name: '4G/LTE', range: 'Cellular', power: 'High', best: 'Remote sites' }
];

// Industry Applications
const industryApps = [
  { icon: Factory, name: 'Manufacturing', desc: 'Machine health, production monitoring' },
  { icon: Building, name: 'Smart Buildings', desc: 'HVAC optimization, occupancy sensing' },
  { icon: Truck, name: 'Logistics', desc: 'Cold chain, asset tracking' }
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

export default function IotSensorsPage() {
  const pageTitle = 'IoT Sensor Systems';
  const parentService = 'IoT & Robotics';
  
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="pt-24 min-h-screen bg-[#0f172a] text-white overflow-hidden">
      <Breadcrumb pageTitle={pageTitle} parentService={parentService} parentPath="/iot-robotics" />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <SolutionSidebar menuTitle={parentService} sections={iotRoboticsMenu} />

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
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
                  alt="IoT Sensor Systems"
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
                    <Activity size={16} /> Smart Sensing
                  </span>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
                >
                  IoT Sensor<br />
                  <span className="text-ids-blue">Systems</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-gray-300 text-lg max-w-xl mb-6"
                >
                  Industrial-grade sensors for environmental monitoring, predictive maintenance, and smart automation. LoRaWAN, WiFi, and cellular connectivity.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link 
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-black font-bold px-6 py-3 rounded-full hover:bg-ids-blue hover:text-black transition-all group"
                  >
                    Get Sensor Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Section 1: Sensor Categories */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-blue to-ids-orange rounded-full"></div>
                <span className="text-ids-blue font-medium">Categories</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                Sensor Types
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
                {sensorCategories.map((cat, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -6 }}
                    className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-white/30 transition-all"
                  >
                    <div className={`w-12 h-12 rounded-xl ${cat.color}/20 flex items-center justify-center mb-4`}>
                      <cat.icon className={`${cat.color === 'bg-ids-blue' ? 'text-ids-blue' : cat.color === 'bg-ids-orange' ? 'text-ids-orange' : 'text-green-400'}`} size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-3">{cat.name}</h3>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {cat.sensors.map((sensor, j) => (
                        <span key={j} className="text-xs px-2 py-1 bg-white/5 rounded text-gray-300">{sensor}</span>
                      ))}
                    </div>
                    <p className="text-xs text-gray-400">{cat.use}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 2: Connectivity */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-orange to-ids-yellow rounded-full"></div>
                <span className="text-ids-orange font-medium">Connectivity</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                Communication Protocols
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 font-semibold text-white">Protocol</th>
                      <th className="text-left py-3 px-4 font-semibold text-white">Range</th>
                      <th className="text-left py-3 px-4 font-semibold text-white">Power</th>
                      <th className="text-left py-3 px-4 font-semibold text-white">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    {connectivityOptions.map((opt, i) => (
                      <motion.tr 
                        key={i}
                        variants={fadeInUp}
                        className="border-b border-white/5 hover:bg-white/5 transition-colors"
                      >
                        <td className="py-3 px-4 text-ids-blue font-medium">{opt.name}</td>
                        <td className="py-3 px-4 text-white">{opt.range}</td>
                        <td className="py-3 px-4 text-gray-400">{opt.power}</td>
                        <td className="py-3 px-4 text-gray-300">{opt.best}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            </motion.section>

            {/* Section 3: Industry Applications */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-ids-blue rounded-full"></div>
                <span className="text-green-400 font-medium">Applications</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                Industry Use Cases
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-5">
                {industryApps.map((app, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -4 }}
                    className="p-5 rounded-xl bg-white/5 border border-white/5 hover:border-green-500/40 transition-all text-center"
                  >
                    <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-green-500/20 to-ids-blue/10 flex items-center justify-center mb-3">
                      <app.icon className="text-green-400" size={22} />
                    </div>
                    <h3 className="font-bold mb-1">{app.name}</h3>
                    <p className="text-gray-400 text-sm">{app.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* CTA Section */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-ids-blue/10 via-ids-orange/5 to-transparent border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-72 h-72 bg-ids-blue/10 rounded-full blur-[100px]"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Build Your Sensor Network</h3>
                <p className="text-gray-300 mb-8 max-w-2xl">
                  From single-point monitoring to facility-wide IoT deployments, we design and supply complete sensor solutions.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-ids-blue transition-colors flex items-center gap-2 group"
                  >
                    Get Started <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/solutions/embedded-boards" className="bg-transparent border border-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                    View Controllers
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
