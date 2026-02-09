'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Fingerprint, 
  CreditCard, 
  Cpu, 
  Code, 
  Sparkles, 
  Layers,
  CheckCircle2
} from 'lucide-react';
import { ShineBorder } from '@/components/ui/shine-border';

const categories = [
  { id: 'identity-access', label: 'Identity & Access', icon: Shield },
  { id: 'iot-robotics', label: 'IoT & Robotics', icon: Cpu },
  { id: 'software-platforms', label: 'Software & Platforms', icon: Code },
  { id: 'card-printing', label: 'Card Printing', icon: CreditCard },
  { id: 'hologram-printing', label: 'Hologram Printing', icon: Sparkles },
  { id: 'rfid-solutions', label: 'RFID Solutions', icon: Layers },
  { id: 'biometrics', label: 'Biometrics', icon: Fingerprint },
];

const categoryContent: Record<string, {
  heading: string;
  subheading: string;
  description: string;
  features: { title: string; description: string }[];
  image: string;
  path: string;
}> = {
  'identity-access': {
    heading: 'Secure Digital Identity',
    subheading: 'Management & Access Control',
    description: 'Comprehensive identity and access management solutions for enterprises, government, and institutions.',
    features: [
      { title: 'Biometric Authentication Systems', description: 'Face, fingerprint, and iris recognition for secure access' },
      { title: 'RFID & Smart Card Solutions', description: 'Contactless cards for attendance, access, and payments' },
      { title: 'Visitor & Contractor Management', description: 'Streamlined check-in with badge printing and tracking' },
      { title: 'Time & Attendance Tracking', description: 'Automated workforce management with real-time reporting' },
      { title: 'Role-Based Access Management', description: 'Granular permissions based on roles and departments' },
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
    path: '/identity-access',
  },
  'iot-robotics': {
    heading: 'Next-Gen IoT',
    subheading: '& Autonomous Robotics',
    description: 'Cutting-edge Internet of Things and robotics solutions for automation, tracking, and smart infrastructure.',
    features: [
      { title: 'Driving Test Track Robotics', description: 'Automated systems for RTO driving test centers' },
      { title: 'Touch-Based Information Kiosks', description: 'Interactive self-service terminals for public spaces' },
      { title: 'Vehicle Access & ANPR Solutions', description: 'Automatic number plate recognition and barrier control' },
      { title: 'Service Delivery Robots', description: 'Autonomous robots for hospitality and healthcare' },
      { title: 'Queue Management Systems', description: 'Smart token systems for efficient customer flow' },
    ],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop',
    path: '/iot-robotics',
  },
  'software-platforms': {
    heading: 'Enterprise Software',
    subheading: '& Scalable Cloud Platforms',
    description: 'Custom software solutions and platforms for government, enterprises, and digital transformation.',
    features: [
      { title: 'Township Management System (TMS)', description: 'Complete residential society management platform' },
      { title: 'Driving Test Track & RTO Software', description: 'End-to-end automation for driving test centers' },
      { title: 'Aadhaar-Based Identity & KYC', description: 'Secure eKYC integration with UIDAI services' },
      { title: 'Citizen Enrollment Platform', description: 'Digital registration and document management' },
      { title: 'Smart Attendance Management', description: 'Multi-location attendance with geo-fencing' },
    ],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop',
    path: '/software-platforms',
  },
  'card-printing': {
    heading: 'Professional Card',
    subheading: 'Printing & Personalization',
    description: 'High-quality ID card printing, encoding, and personalization solutions for all industries.',
    features: [
      { title: 'Thermal & DTC Card Printing', description: 'Vibrant full-color printing on PVC and composite cards' },
      { title: 'Inkjet PVC & Pre-Inked Cards', description: 'Cost-effective bulk printing solutions' },
      { title: 'Chip Encoding & Secure Writing', description: 'Program contact, contactless, and dual-interface chips' },
      { title: 'Holographic Lamination & UV', description: 'Security overlays and UV printing for authentication' },
      { title: 'Event & Access Badges', description: 'Quick-turnaround badges for conferences and events' },
    ],
    image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=800&auto=format&fit=crop',
    path: '/card-printing',
  },
  'hologram-printing': {
    heading: 'Advanced Security',
    subheading: 'Holographic Label Solutions',
    description: 'Anti-counterfeiting hologram stickers, labels, and security features for brand protection.',
    features: [
      { title: 'Custom Hologram Design', description: '2D/3D holograms with unique patterns and effects' },
      { title: 'Tamper-Evident Labels', description: 'Security seals that show visible damage if removed' },
      { title: 'Brand Protection Solutions', description: 'Authentication features for products and documents' },
      { title: 'Hot Stamping Foils', description: 'Metallic and holographic foils for certificates' },
      { title: 'Scratch-Off & Void Labels', description: 'Reveal hidden codes and tamper-proof packaging' },
    ],
    image: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=800&auto=format&fit=crop',
    path: '/hologram-printing',
  },
  'rfid-solutions': {
    heading: 'Complete RFID',
    subheading: '& Smart Card Ecosystem',
    description: 'End-to-end RFID solutions from cards and tags to readers and integration services.',
    features: [
      { title: 'RFID Attendance & Access Cards', description: 'Proximity and smart cards for workplace access' },
      { title: 'Dual Interface & NFC Cards', description: 'Contact + contactless cards for versatile applications' },
      { title: 'RFID Tags, Tokens & Keyfobs', description: 'Durable form factors for various use cases' },
      { title: 'RFID Windshield & Vehicle Tags', description: 'Long-range tags for parking and toll systems' },
      { title: 'RFID Readers & Gate Integration', description: 'Fixed and handheld readers with API support' },
    ],
    image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=800&auto=format&fit=crop',
    path: '/rfid-solutions',
  },
  'biometrics': {
    heading: 'Advanced Biometric',
    subheading: 'Authentication Systems',
    description: 'Multi-modal biometric solutions for secure identity verification and access control.',
    features: [
      { title: 'Face Recognition Terminals', description: 'Touchless authentication with liveness detection' },
      { title: 'Fingerprint Scanners', description: 'Optical and capacitive sensors for all environments' },
      { title: 'Iris Recognition Systems', description: 'Ultra-secure authentication for high-security zones' },
      { title: 'Multimodal Biometrics', description: 'Combine face + fingerprint for enhanced security' },
      { title: 'Aadhaar Biometric Devices', description: 'STQC-certified devices for UIDAI integration' },
    ],
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=800&auto=format&fit=crop',
    path: '/solutions/biometric-authentication',
  },
};

export const OurApproachSection = () => {
  const [activeCategory, setActiveCategory] = useState('identity-access');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });

  const content = categoryContent[activeCategory];

  return (
    <section className="bg-background relative scroll-smooth overflow-hidden py-16 md:py-24">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-64 md:w-96 h-64 md:h-96 bg-primary/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-64 md:w-96 h-64 md:h-96 bg-accent/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10 md:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-secondary border border-border mb-4 md:mb-6">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent" />
            <span className="text-foreground font-semibold font-poppins text-xs md:text-sm tracking-widest uppercase">
              Our Solutions
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground max-w-4xl mx-auto leading-tight">
            Access Control & <span className=" font-bold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-[#9cd0ec] via-[#fed356] to-[#ee6d31]">Identity Management</span> Solutions
          </h2>
          <p className="text-foreground-secondary font-poppins text-base md:text-lg max-w-2xl mx-auto mt-4">
            IDS SmartTech makes it easy for organizations to secure access, protect people and assets, and improve operations with confidence.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 md:mb-16"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  relative px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium
                  transition-all duration-300 border
                  ${isActive 
                    ? 'bg-primary text-white border-primary shadow-lg shadow-primary/25' 
                    : 'bg-card text-foreground border-border hover:border-primary/50 hover:bg-secondary'
                  }
                `}
              >
                {category.label}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-full -z-10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center"
          >
            {/* Left - Image */}
            <div className="lg:w-[45%] w-full">
              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl">
                <ShineBorder
                  shineColor="#9cd0ec"
                  borderWidth={2}
                  duration={10}
                />
                <img
                  src={content.image}
                  alt={content.heading}
                  className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-2xl md:rounded-3xl"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl md:rounded-3xl" />
                
                {/* Floating Badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 md:p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      {(() => {
                        const IconComponent = categories.find(c => c.id === activeCategory)?.icon || Shield;
                        return <IconComponent className="w-8 h-8 text-primary" />;
                      })()}
                      <div>
                        <p className="text-xs text-muted-foreground">Currently viewing</p>
                        <p className="font-semibold text-foreground">
                          {categories.find(c => c.id === activeCategory)?.label}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="lg:w-[55%] w-full">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-poppins text-primary leading-tight">
                {content.heading}
                <br />
                <span className="text-foreground font-poppins ">{content.subheading}</span>
              </h3>
              
              <p className="text-foreground-secondary font-poppins text-base md:text-lg mt-4 mb-8">
                {content.description}
              </p>

              {/* Features List */}
              <div className="space-y-4">
                {content.features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold font-poppins text-primary text-sm md:text-base">
                          {feature.title}
                        </h4>
                        <p className="text-foreground-secondary font-poppins text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <a
                  href={content.path}
                  className="group relative inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-full transition-all duration-500 overflow-hidden border-2 border-foreground hover:border-transparent hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
                >
                  {/* Default black background */}
                  <span className="absolute inset-0 bg-foreground transition-opacity duration-500 group-hover:opacity-0" />
                  {/* Gradient background on hover */}
                  <span className="absolute inset-0 bg-gradient-to-r from-[#9cd0ec] via-[#fed356] to-[#ee6d31] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  {/* Text content */}
                  <span className="relative z-10 font-poppins text-background group-hover:text-white transition-colors duration-500">
                    Explore {categories.find(c => c.id === activeCategory)?.label}
                  </span>
                  <svg className="relative z-10 w-4 h-4 text-background group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
