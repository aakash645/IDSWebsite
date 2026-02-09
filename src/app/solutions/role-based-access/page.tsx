'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Breadcrumb, SolutionSidebar, identityAccessMenu } from '@/components/solutions';
import { 
  ArrowRight, Users, Lock, Shield, Key,
  Building2, Layers, UserCog, GitBranch, 
  ShieldCheck, Eye, Database, Settings
} from 'lucide-react';

// Access Control Model Comparison
const accessModels = [
  {
    model: 'Role-Based (RBAC)',
    description: 'Permissions assigned to roles, users inherit role permissions',
    example: 'All "Managers" can access Floor 3 meeting rooms',
    bestFor: 'Organizations with clear job hierarchies',
    icon: Users,
    highlight: true
  },
  {
    model: 'Attribute-Based (ABAC)',
    description: 'Dynamic permissions based on user attributes, time, location',
    example: 'Finance staff can access vault only during business hours',
    bestFor: 'Complex, context-aware policies',
    icon: Layers,
    highlight: false
  },
  {
    model: 'Discretionary (DAC)',
    description: 'Resource owners control who can access their resources',
    example: 'Lab director grants access to their specific lab',
    bestFor: 'Research facilities, creative agencies',
    icon: UserCog,
    highlight: false
  }
];

// Role Hierarchy Visualization
const roleHierarchy = [
  { level: 1, role: 'Executive', zones: 'All Areas', color: 'bg-ids-orange' },
  { level: 2, role: 'Department Head', zones: 'Department + Common', color: 'bg-ids-blue' },
  { level: 3, role: 'Team Lead', zones: 'Team Zones + Common', color: 'bg-ids-yellow' },
  { level: 4, role: 'Employee', zones: 'Assigned Zones Only', color: 'bg-green-500' },
  { level: 5, role: 'Contractor', zones: 'Specific Project Areas', color: 'bg-gray-500' }
];

// Policy Management Features
const policyFeatures = [
  { 
    icon: GitBranch, 
    title: 'Inheritance & Nesting',
    desc: 'Create role hierarchies where child roles inherit parent permissions, simplifying administration'
  },
  { 
    icon: Clock, 
    title: 'Time-Based Restrictions',
    desc: 'Limit access to specific hours, days, or date ranges. Perfect for shift workers and temporary staff'
  },
  { 
    icon: Database, 
    title: 'HR System Sync',
    desc: 'Auto-provision and de-provision access based on employee status changes in SAP, Workday, or custom HRMS'
  },
  { 
    icon: Eye, 
    title: 'Access Reviews',
    desc: 'Scheduled certification campaigns to validate user entitlements and maintain least-privilege compliance'
  }
];

// Import Clock for time-based restrictions
import { Clock } from 'lucide-react';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function RoleBasedAccessPage() {
  const pageTitle = 'Role-Based Access Management';
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
            
            {/* Hero Section */}
            <motion.div 
              ref={heroRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative rounded-3xl overflow-hidden mb-16"
            >
              <motion.div style={{ y: heroY }} className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop" 
                  alt="Role Based Access Control"
                  className="w-full h-[420px] md:h-[480px] object-cover scale-110"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#2a0f27] via-[#0f172a]/80 to-transparent"></div>
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
                    <ShieldCheck size={16} /> Least-Privilege Security
                  </span>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
                >
                  Role-Based <span className="text-ids-orange">Access</span><br />
                  Management
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-gray-300 text-lg max-w-xl mb-6"
                >
                  Enforce least-privilege access by defining who can go where, when, and why. Align physical access with your organizational structure and security policies.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link 
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-black font-bold px-6 py-3 rounded-full hover:bg-ids-orange hover:text-white transition-all group"
                  >
                    Request Assessment <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-medium px-6 py-3 rounded-full hover:bg-white/20 transition-all border border-white/20">
                    View Case Studies
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Section 1: Role Hierarchy - Visual Ladder */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-orange to-ids-yellow rounded-full"></div>
                <span className="text-ids-orange font-medium">Hierarchy</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
                Access Levels Mirror Your Org Chart
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-10 max-w-2xl">
                Define role hierarchies that reflect your organization. Higher roles automatically inherit permissions from lower levels, reducing admin overhead.
              </motion.p>
              
              <motion.div variants={staggerContainer} className="space-y-3">
                {roleHierarchy.map((role, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-all"
                    style={{ marginLeft: `${(role.level - 1) * 20}px` }}
                  >
                    <div className={`w-10 h-10 rounded-lg ${role.color} flex items-center justify-center font-bold text-white`}>
                      {role.level}
                    </div>
                    <div className="flex-1">
                      <span className="font-bold text-white">{role.role}</span>
                      <span className="text-gray-500 mx-3">→</span>
                      <span className="text-gray-400 text-sm">{role.zones}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 2: Access Models - Comparison Cards */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-ids-blue to-ids-orange rounded-full"></div>
                <span className="text-ids-blue font-medium">Models</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
                Choose the Right Access Model
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-10 max-w-2xl">
                Our platform supports multiple access control models. Most organizations use role-based as a foundation, enhanced with attribute-based rules for complex scenarios.
              </motion.p>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
                {accessModels.map((model, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -8 }}
                    className={`p-6 rounded-2xl border transition-all ${
                      model.highlight 
                        ? 'bg-gradient-to-br from-ids-blue/20 to-ids-orange/10 border-ids-blue/50' 
                        : 'bg-white/5 border-white/10 hover:border-white/30'
                    }`}
                  >
                    {model.highlight && (
                      <span className="text-xs font-bold text-ids-blue bg-ids-blue/20 px-3 py-1 rounded-full mb-4 inline-block">
                        RECOMMENDED
                      </span>
                    )}
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                      <model.icon className="text-white" size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{model.model}</h3>
                    <p className="text-gray-400 text-sm mb-3">{model.description}</p>
                    <div className="p-3 bg-black/20 rounded-lg mb-3">
                      <span className="text-xs text-gray-500">Example:</span>
                      <p className="text-sm text-gray-300 italic">{model.example}</p>
                    </div>
                    <span className="text-xs text-ids-yellow">Best for: {model.bestFor}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Section 3: Policy Management Features */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-ids-blue rounded-full"></div>
                <span className="text-green-400 font-medium">Features</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
                Advanced Policy Management
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-10 max-w-2xl">
                Go beyond simple role assignments with powerful policy features that adapt to your evolving security requirements.
              </motion.p>
              
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
                {policyFeatures.map((feature, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-5 p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-green-500/30 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-ids-blue/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <feature.icon className="text-green-400" size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
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
              className="bg-gradient-to-r from-ids-orange/10 via-ids-blue/10 to-transparent border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-72 h-72 bg-ids-orange/10 rounded-full blur-[100px]"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Implement Zero-Trust Access Today</h3>
                <p className="text-gray-300 mb-8 max-w-2xl">
                  Our security consultants will analyze your organizational structure and design a role-based access framework that balances security with operational efficiency.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-ids-orange hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    Get Security Assessment <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/contact" className="bg-transparent border border-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                    Download Whitepaper
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
