'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Breadcrumb, SolutionSidebar, iotRoboticsMenu } from '@/components/solutions';
import { 
  ArrowRight, Cpu, Wifi, Usb, Zap,
  Settings, Shield, Thermometer, Box
} from 'lucide-react';

// Board Categories
const boardCategories = [
  {
    name: 'Access Control Boards',
    processor: 'ARM Cortex-M4',
    features: ['Wiegand I/O', 'Relay outputs', 'RS485'],
    use: 'Door controllers, turnstiles',
    color: 'bg-ids-blue'
  },
  {
    name: 'IoT Gateway Boards',
    processor: 'ARM Cortex-A53',
    features: ['WiFi/BLE', 'LoRaWAN', 'Ethernet'],
    use: 'Edge computing, data aggregation',
    color: 'bg-ids-orange'
  },
  {
    name: 'Industrial Controllers',
    processor: 'STM32/ESP32',
    features: ['DIN rail mount', 'Wide voltage', 'GPIO'],
    use: 'Automation, motor control',
    color: 'bg-green-500'
  }
];

// Technical Specs
const technicalSpecs = [
  { name: 'Operating Temp', value: '-40°C to +85°C', icon: Thermometer },
  { name: 'Power Input', value: '9-36V DC', icon: Zap },
  { name: 'Interfaces', value: 'UART, SPI, I2C, CAN', icon: Usb },
  { name: 'Enclosure', value: 'IP65 options', icon: Box }
];

// Development Support
const devSupport = [
  { name: 'SDK & Libraries', desc: 'C/C++, Python, Arduino compatible' },
  { name: 'Documentation', desc: 'Schematics, datasheets, app notes' },
  { name: 'Firmware Updates', desc: 'OTA update support built-in' },
  { name: 'Technical Support', desc: 'Direct engineering assistance' }
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

export default function EmbeddedBoardsPage() {
  const pageTitle = 'Embedded Control Boards';
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
                  alt="Embedded Control Boards"
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
                    <Cpu size={16} /> Industrial Grade
                  </span>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
                >
                  Embedded<br />
                  <span className="text-ids-blue">Control Boards</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-gray-300 text-lg max-w-xl mb-6"
                >
                  Industrial-grade controller boards for access control, IoT gateways, and automation. ARM-based with wide temperature range.
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
                    Get Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Section 1: Board Categories */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-blue to-ids-orange rounded-full"></div>
                <span className="text-ids-blue font-medium">Products</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                Board Categories
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
                {boardCategories.map((board, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -6 }}
                    className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-white/30 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-3 h-10 rounded-full ${board.color}`}></div>
                      <h3 className="font-bold">{board.name}</h3>
                    </div>
                    <div className="text-xs text-ids-orange mb-3">{board.processor}</div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {board.features.map((feat, j) => (
                        <span key={j} className="text-xs px-2 py-1 bg-white/5 rounded text-gray-300">{feat}</span>
                      ))}
                    </div>
                    <p className="text-xs text-gray-400">{board.use}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 2: Technical Specs */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-orange to-ids-yellow rounded-full"></div>
                <span className="text-ids-orange font-medium">Specifications</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                Industrial Specs
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-4 gap-5">
                {technicalSpecs.map((spec, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    className="p-5 rounded-xl bg-white/5 border border-white/5 text-center"
                  >
                    <div className="w-10 h-10 mx-auto rounded-lg bg-gradient-to-br from-ids-orange/20 to-ids-yellow/10 flex items-center justify-center mb-3">
                      <spec.icon className="text-ids-orange" size={20} />
                    </div>
                    <h3 className="font-bold text-sm mb-1">{spec.name}</h3>
                    <p className="text-ids-blue text-sm">{spec.value}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 3: Development Support */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-ids-blue rounded-full"></div>
                <span className="text-green-400 font-medium">Support</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-10">
                Developer Resources
              </motion.h2>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-5">
                {devSupport.map((item, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/5 hover:border-green-500/40 transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-ids-blue/10 flex items-center justify-center shrink-0">
                      <Settings className="text-green-400" size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{item.name}</h3>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
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
              className="bg-gradient-to-r from-ids-blue/10 via-ids-orange/5 to-transparent border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-72 h-72 bg-ids-blue/10 rounded-full blur-[100px]"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Start Your Project</h3>
                <p className="text-gray-300 mb-8 max-w-2xl">
                  From evaluation kits to production volumes, we support your embedded development journey.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-ids-blue transition-colors flex items-center gap-2 group"
                  >
                    Request Samples <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/solutions/iot-sensors" className="bg-transparent border border-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                    View Sensors
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
