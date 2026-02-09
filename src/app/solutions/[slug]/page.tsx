'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { FadeIn } from '@/components/ui';
import { SolutionSidebar } from '@/components/solutions';
import { 
  ArrowLeft, CheckCircle2, ArrowRight, Shield, Key, Fingerprint,
  Smartphone, Building, CreditCard, Lock, Eye, Server, Radio,
  Cpu, Printer, QrCode, Layers, Palette
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface Solution {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  image: string;
  overview: string;
  features: string[];
  benefits: string[];
  useCases: string[];
}

type SolutionKey = 
  | 'citizen-identity' | 'border-control' | 'biometric-systems' | 'mobile-id' | 'enterprise-access' | 'payment-systems'
  | 'physical-access' | 'logical-access' | 'visitor-management' | 'time-attendance' | 'fleet-management' | 'asset-tracking'
  | 'rfid-solutions' | 'ble-beacons' | 'amr-systems' | 'warehouse-automation' | 'predictive-maintenance' | 'industrial-iot'
  | 'security-labels' | 'brand-protection' | 'document-security' | 'tax-stamps' | 'custom-holograms' | 'track-trace';

const solutionsData: Record<SolutionKey, Solution> = {
  // Identity & Access Solutions
  'citizen-identity': {
    title: 'Citizen Identity Solutions',
    description: 'Comprehensive national ID systems for governments',
    icon: Shield,
    color: 'ids-blue',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2940&auto=format&fit=crop',
    overview: 'Our Citizen Identity Solutions provide governments with secure, scalable, and interoperable identity management systems. From national ID cards to digital identity wallets, we deliver end-to-end solutions that protect citizen data while enabling seamless access to public services.',
    features: ['Biometric Enrollment', 'Secure Card Issuance', 'Digital Identity Wallet', 'PKI Infrastructure', 'Cross-border Interoperability'],
    benefits: ['Reduced Identity Fraud', 'Improved Service Delivery', 'Cost-effective Administration', 'Enhanced Security'],
    useCases: ['National ID Programs', 'Voter Registration', 'Social Welfare Distribution', 'Healthcare ID Systems']
  },
  'border-control': {
    title: 'Border Control Systems',
    description: 'Advanced systems for secure border management',
    icon: Key,
    color: 'ids-blue',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2948&auto=format&fit=crop',
    overview: 'Our Border Control Systems leverage advanced biometrics and AI to streamline passenger processing while maintaining the highest security standards. Designed for airports, seaports, and land borders.',
    features: ['eGate Automation', 'Facial Recognition', 'Document Verification', 'Watchlist Screening', 'Real-time Analytics'],
    benefits: ['Faster Processing', 'Enhanced Security', 'Reduced Wait Times', 'Improved Traveler Experience'],
    useCases: ['Airport Immigration', 'Land Border Crossings', 'Seaport Security', 'Visa Processing Centers']
  },
  'biometric-systems': {
    title: 'Biometric Systems',
    description: 'Multi-modal biometric authentication solutions',
    icon: Fingerprint,
    color: 'ids-blue',
    image: 'https://images.unsplash.com/photo-1585079374502-415f8516dcc3?q=80&w=2787&auto=format&fit=crop',
    overview: 'Our Biometric Systems offer multi-modal authentication including fingerprint, facial recognition, iris scanning, and voice recognition. Built for high-security environments requiring foolproof identity verification.',
    features: ['Multi-modal Biometrics', 'Liveness Detection', 'Template Encryption', 'FIDO2 Compliance', 'SDK Integration'],
    benefits: ['Eliminates Password Risk', 'Frictionless Authentication', 'Highest Security Level', 'Scalable Architecture'],
    useCases: ['Banking Authentication', 'Healthcare Access', 'Government Services', 'Corporate Security']
  },
  'mobile-id': {
    title: 'Mobile ID Solutions',
    description: 'Digital identity credentials for mobile devices',
    icon: Smartphone,
    color: 'ids-blue',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2940&auto=format&fit=crop',
    overview: 'Transform smartphones into secure identity credentials. Our Mobile ID Solutions enable digital driver\'s licenses, employee badges, and government IDs that are more secure and convenient than physical cards.',
    features: ['Digital Credentials', 'NFC/QR Verification', 'Remote Provisioning', 'Biometric Binding', 'Privacy by Design'],
    benefits: ['Always Available', 'Impossible to Clone', 'Selective Disclosure', 'Environmentally Friendly'],
    useCases: ['Digital Driver\'s License', 'Employee Mobile Badge', 'Student ID', 'Event Access']
  },
  'enterprise-access': {
    title: 'Enterprise Access Management',
    description: 'Unified identity management for enterprises',
    icon: Building,
    color: 'ids-blue',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop',
    overview: 'Centralized identity and access management for large enterprises. Single sign-on, multi-factor authentication, and role-based access control that scales from startups to Fortune 500 companies.',
    features: ['Single Sign-On', 'MFA Integration', 'Role-Based Access', 'Directory Sync', 'Compliance Reporting'],
    benefits: ['Reduced IT Overhead', 'Enhanced Security', 'Improved Productivity', 'Regulatory Compliance'],
    useCases: ['Corporate IAM', 'Partner Access', 'Remote Workforce', 'Merger Integration']
  },
  'payment-systems': {
    title: 'Payment Systems',
    description: 'Secure payment card and transaction systems',
    icon: CreditCard,
    color: 'ids-blue',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2940&auto=format&fit=crop',
    overview: 'Complete payment card lifecycle management from personalization to transaction processing. EMV chip cards, contactless payments, and mobile wallet integration.',
    features: ['Card Personalization', 'EMV Chip Support', 'Contactless NFC', 'Mobile Wallet', 'Fraud Detection'],
    benefits: ['Reduced Fraud', 'Faster Transactions', 'Global Acceptance', 'PCI Compliance'],
    useCases: ['Bank Card Issuance', 'Transit Cards', 'Loyalty Programs', 'Corporate Expense Cards']
  },
  // Access Management Solutions
  'physical-access': {
    title: 'Physical Access Control',
    description: 'Secure physical entry management systems',
    icon: Lock,
    color: 'ids-yellow',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2940&auto=format&fit=crop',
    overview: 'Enterprise-grade physical access control systems that protect your facilities. From door locks to enterprise-wide security platforms, we deliver solutions that scale with your needs.',
    features: ['Smart Locks', 'Reader Controllers', 'Central Management', 'Audit Trails', 'Integration APIs'],
    benefits: ['Enhanced Security', 'Operational Efficiency', 'Compliance Ready', 'Scalable'],
    useCases: ['Office Buildings', 'Data Centers', 'Manufacturing Plants', 'Healthcare Facilities']
  },
  'logical-access': {
    title: 'Logical Access Control',
    description: 'Digital system and network access management',
    icon: Eye,
    color: 'ids-yellow',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop',
    overview: 'Control access to digital resources including networks, applications, and data. Implement zero-trust architecture with our comprehensive logical access solutions.',
    features: ['Zero Trust Architecture', 'Privileged Access', 'Session Recording', 'Just-in-Time Access', 'Risk Analytics'],
    benefits: ['Data Protection', 'Insider Threat Prevention', 'Compliance', 'Visibility'],
    useCases: ['IT Infrastructure', 'Cloud Resources', 'Critical Applications', 'Development Environments']
  },
  'visitor-management': {
    title: 'Visitor Management',
    description: 'Streamlined visitor check-in and tracking',
    icon: Server,
    color: 'ids-yellow',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2301&auto=format&fit=crop',
    overview: 'Modern visitor management that creates great first impressions while maintaining security. Digital check-in, badge printing, and host notifications.',
    features: ['Self-service Kiosks', 'Badge Printing', 'Host Notifications', 'Watchlist Screening', 'Reporting'],
    benefits: ['Professional Image', 'Security Compliance', 'Time Savings', 'Visitor Experience'],
    useCases: ['Corporate Offices', 'Schools', 'Hospitals', 'Government Buildings']
  },
  'time-attendance': {
    title: 'Time & Attendance',
    description: 'Workforce time tracking and management',
    icon: Server,
    color: 'ids-yellow',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop',
    overview: 'Accurate time and attendance tracking with biometric verification. Eliminate buddy punching and streamline payroll processing.',
    features: ['Biometric Clocking', 'Mobile App', 'Shift Scheduling', 'Overtime Tracking', 'Payroll Integration'],
    benefits: ['Payroll Accuracy', 'Labor Cost Reduction', 'Compliance', 'Productivity Insights'],
    useCases: ['Manufacturing', 'Retail', 'Healthcare', 'Field Services']
  },
  'fleet-management': {
    title: 'Fleet Management',
    description: 'Vehicle and driver identity management',
    icon: Server,
    color: 'ids-yellow',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2940&auto=format&fit=crop',
    overview: 'Comprehensive fleet management with driver authentication, vehicle tracking, and maintenance scheduling. Ensure only authorized drivers operate your vehicles.',
    features: ['Driver Authentication', 'GPS Tracking', 'Maintenance Alerts', 'Fuel Management', 'Route Optimization'],
    benefits: ['Safety Compliance', 'Cost Reduction', 'Asset Protection', 'Operational Efficiency'],
    useCases: ['Logistics Companies', 'Delivery Fleets', 'Construction', 'Public Transit']
  },
  'asset-tracking': {
    title: 'Asset Tracking',
    description: 'RFID and IoT-based asset management',
    icon: Server,
    color: 'ids-yellow',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2940&auto=format&fit=crop',
    overview: 'Real-time asset tracking using RFID, BLE, and GPS technologies. Know where your assets are, who has them, and their condition.',
    features: ['RFID Tagging', 'Real-time Location', 'Condition Monitoring', 'Checkout/Return', 'Inventory Reports'],
    benefits: ['Asset Visibility', 'Loss Prevention', 'Utilization Insights', 'Audit Compliance'],
    useCases: ['IT Assets', 'Medical Equipment', 'Tools & Equipment', 'Retail Inventory']
  },
  // IoT & Robotics Solutions
  'rfid-solutions': {
    title: 'RFID Solutions',
    description: 'Complete RFID systems for identification and tracking',
    icon: Radio,
    color: 'ids-orange',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2940&auto=format&fit=crop',
    overview: 'End-to-end RFID solutions from tags to readers to middleware. UHF, HF, and NFC technologies for every use case.',
    features: ['Custom Tags', 'Fixed/Handheld Readers', 'Middleware Platform', 'Analytics Dashboard', 'Integration APIs'],
    benefits: ['Automation', 'Accuracy', 'Speed', 'Visibility'],
    useCases: ['Retail', 'Manufacturing', 'Healthcare', 'Logistics']
  },
  'ble-beacons': {
    title: 'BLE Beacon Networks',
    description: 'Bluetooth beacons for indoor positioning',
    icon: Radio,
    color: 'ids-orange',
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2940&auto=format&fit=crop',
    overview: 'Deploy indoor positioning systems using Bluetooth Low Energy beacons. Enable wayfinding, proximity marketing, and asset tracking.',
    features: ['Beacon Hardware', 'Positioning Engine', 'Mobile SDKs', 'Analytics', 'Geofencing'],
    benefits: ['Indoor Navigation', 'Proximity Engagement', 'Space Analytics', 'Contact Tracing'],
    useCases: ['Retail Stores', 'Museums', 'Airports', 'Hospitals']
  },
  'amr-systems': {
    title: 'AMR Systems',
    description: 'Autonomous mobile robot integration',
    icon: Cpu,
    color: 'ids-orange',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2940&auto=format&fit=crop',
    overview: 'Integrate autonomous mobile robots into your operations. From warehouse picking to last-mile delivery, we deploy and manage AMR fleets.',
    features: ['Fleet Management', 'Path Planning', 'Obstacle Avoidance', 'Task Scheduling', 'Safety Systems'],
    benefits: ['Labor Savings', '24/7 Operations', 'Consistency', 'Scalability'],
    useCases: ['Warehouse Picking', 'Material Transport', 'Last-Mile Delivery', 'Hospital Logistics']
  },
  'warehouse-automation': {
    title: 'Warehouse Automation',
    description: 'End-to-end warehouse automation solutions',
    icon: Server,
    color: 'ids-orange',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2940&auto=format&fit=crop',
    overview: 'Transform your warehouse with automation. Conveyor systems, AS/RS, pick-to-light, and goods-to-person solutions.',
    features: ['AS/RS Systems', 'Conveyor Integration', 'Pick-to-Light', 'Sortation', 'WMS Integration'],
    benefits: ['Throughput Increase', 'Accuracy', 'Space Optimization', 'Labor Efficiency'],
    useCases: ['E-commerce Fulfillment', 'Distribution Centers', 'Manufacturing', 'Cold Storage']
  },
  'predictive-maintenance': {
    title: 'Predictive Maintenance',
    description: 'AI-driven equipment maintenance optimization',
    icon: Cpu,
    color: 'ids-orange',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2940&auto=format&fit=crop',
    overview: 'Use IoT sensors and machine learning to predict equipment failures before they happen. Reduce downtime and maintenance costs.',
    features: ['Sensor Deployment', 'ML Models', 'Alert System', 'Maintenance Scheduling', 'ROI Dashboard'],
    benefits: ['Reduced Downtime', 'Lower Costs', 'Extended Asset Life', 'Safety'],
    useCases: ['Manufacturing', 'Utilities', 'Transportation', 'Building Systems']
  },
  'industrial-iot': {
    title: 'Industrial IoT Platform',
    description: 'Comprehensive IIoT platform for Industry 4.0',
    icon: Server,
    color: 'ids-orange',
    image: 'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?q=80&w=2940&auto=format&fit=crop',
    overview: 'Connect, monitor, and control industrial equipment with our IIoT platform. Edge computing, cloud analytics, and secure connectivity.',
    features: ['Device Connectivity', 'Edge Computing', 'Cloud Platform', 'Digital Twin', 'Security'],
    benefits: ['Visibility', 'Efficiency', 'Quality', 'Innovation'],
    useCases: ['Smart Factory', 'Energy Management', 'Quality Control', 'Supply Chain']
  },
  // Hologram Printing Solutions
  'security-labels': {
    title: 'Security Labels',
    description: 'Holographic security labels for product authentication',
    icon: Printer,
    color: 'purple',
    image: 'https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?q=80&w=2832&auto=format&fit=crop',
    overview: 'Advanced holographic security labels that protect your products from counterfeiting. Custom designs with multiple security layers.',
    features: ['Custom Holograms', 'Tamper Evidence', 'Serialization', 'QR Integration', 'Covert Features'],
    benefits: ['Brand Protection', 'Consumer Trust', 'Legal Compliance', 'Revenue Protection'],
    useCases: ['Pharmaceuticals', 'Electronics', 'Luxury Goods', 'Automotive Parts']
  },
  'brand-protection': {
    title: 'Brand Protection',
    description: 'Comprehensive anti-counterfeiting solutions',
    icon: Shield,
    color: 'purple',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2874&auto=format&fit=crop',
    overview: 'Protect your brand from counterfeits with a multi-layered approach. Physical security features, digital verification, and supply chain tracking.',
    features: ['Physical Security', 'Digital Verification', 'Consumer App', 'Enforcement Support', 'Analytics'],
    benefits: ['Revenue Protection', 'Brand Reputation', 'Consumer Safety', 'Market Intelligence'],
    useCases: ['Consumer Goods', 'Fashion', 'Cosmetics', 'Food & Beverage']
  },
  'document-security': {
    title: 'Document Security',
    description: 'Security printing for official documents',
    icon: Layers,
    color: 'purple',
    image: 'https://images.unsplash.com/photo-1568234928966-359c35dd8327?q=80&w=2906&auto=format&fit=crop',
    overview: 'High-security printing for certificates, licenses, and official documents. Intaglio printing, watermarks, and holographic overlays.',
    features: ['Intaglio Printing', 'Watermarks', 'Holographic Foil', 'UV Features', 'Microprinting'],
    benefits: ['Fraud Prevention', 'Authenticity', 'Durability', 'Trust'],
    useCases: ['Certificates', 'Licenses', 'Permits', 'Academic Credentials']
  },
  'tax-stamps': {
    title: 'Tax Stamps',
    description: 'Secure tax stamps with track & trace',
    icon: QrCode,
    color: 'purple',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2811&auto=format&fit=crop',
    overview: 'Tax stamps and banderoles with integrated track & trace capabilities. Help governments collect revenue and combat illicit trade.',
    features: ['Holographic Stamps', 'Digital Codes', 'Track & Trace', 'Mobile Verification', 'Analytics'],
    benefits: ['Revenue Collection', 'Illicit Trade Control', 'Supply Chain Visibility', 'Compliance'],
    useCases: ['Tobacco', 'Alcohol', 'Pharmaceuticals', 'Cannabis']
  },
  'custom-holograms': {
    title: 'Custom Holograms',
    description: 'Bespoke holographic designs and production',
    icon: Palette,
    color: 'purple',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2940&auto=format&fit=crop',
    overview: 'Custom hologram design and production services. From concept to delivery, we create unique holographic solutions for your specific needs.',
    features: ['Custom Design', 'Mastering', 'Production', 'Quality Control', 'Global Delivery'],
    benefits: ['Unique Identity', 'Technical Expertise', 'Scalability', 'Support'],
    useCases: ['Brand Identity', 'Event Credentials', 'Collectibles', 'Packaging']
  },
  'track-trace': {
    title: 'Track & Trace',
    description: 'End-to-end product tracking solutions',
    icon: QrCode,
    color: 'purple',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=2940&auto=format&fit=crop',
    overview: 'Complete track & trace solutions from serialization to consumer engagement. Know where every product is in your supply chain.',
    features: ['Serialization', 'Aggregation', 'Cloud Platform', 'Consumer App', 'Analytics'],
    benefits: ['Visibility', 'Compliance', 'Consumer Engagement', 'Recall Management'],
    useCases: ['Pharmaceuticals', 'Food Safety', 'Luxury Goods', 'Industrial Parts']
  }
};

export default function SolutionDetailPage() {
  const params = useParams();
  const slug = params?.slug as SolutionKey;
  
  const solution = slug ? solutionsData[slug] : null;

  if (!solution) {
    return (
      <div className="pt-24 min-h-screen bg-[#0f172a] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Solution Not Found</h1>
          <p className="text-gray-400 mb-8">The solution you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/" className="text-ids-blue hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  const Icon = solution.icon;
  
  const getColorClass = (color: string) => {
    const colors: Record<string, string> = {
      'ids-blue': 'text-ids-blue bg-ids-blue/10 border-ids-blue/30',
      'ids-yellow': 'text-ids-yellow bg-ids-yellow/10 border-ids-yellow/30',
      'ids-orange': 'text-ids-orange bg-ids-orange/10 border-ids-orange/30',
      'purple': 'text-purple-400 bg-purple-500/10 border-purple-500/30'
    };
    return colors[color] || colors['ids-blue'];
  };

  return (
    <div className="pt-24 min-h-screen bg-[#0f172a] text-white">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={solution.image} alt={solution.title} className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#0f172a]/90 to-[#0f172a]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
              <ArrowLeft size={16} /> Back to Home
            </Link>
            
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 ${getColorClass(solution.color)}`}>
              <Icon size={16} />
              <span className="text-xs font-bold tracking-widest uppercase">{solution.title}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight max-w-4xl">
              {solution.title}
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              {solution.description}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content with Sidebar */}
      <section className="py-16 bg-[#0b1120]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-16">
              {/* Overview */}
              <FadeIn>
                <div>
                  <h2 className="text-3xl font-bold mb-6">Overview</h2>
                  <p className="text-gray-400 text-lg leading-relaxed">{solution.overview}</p>
                </div>
              </FadeIn>

              {/* Features */}
              <FadeIn>
                <div>
                  <h2 className="text-3xl font-bold mb-8">Key Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {solution.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                        <CheckCircle2 className="text-ids-blue shrink-0" size={20} />
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Benefits */}
              <FadeIn>
                <div>
                  <h2 className="text-3xl font-bold mb-8">Benefits</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {solution.benefits.map((benefit, i) => (
                      <div key={i} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="text-ids-yellow font-bold text-lg mb-2">{benefit}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Use Cases */}
              <FadeIn>
                <div>
                  <h2 className="text-3xl font-bold mb-8">Use Cases</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {solution.useCases.map((useCase, i) => (
                      <div key={i} className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                        <span className="text-gray-400 text-sm mb-2 block">Use Case {i + 1}</span>
                        <h3 className="text-xl font-bold">{useCase}</h3>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* CTA */}
              <FadeIn>
                <div className="p-8 rounded-3xl bg-gradient-to-br from-ids-blue/20 to-ids-orange/10 border border-white/10">
                  <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="text-gray-400 mb-6">Contact our team to learn how this solution can transform your operations.</p>
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-black font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all">
                    Contact Sales <ArrowRight size={18} />
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <SolutionSidebar currentSlug={slug} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
