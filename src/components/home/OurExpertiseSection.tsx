'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import FlipCard from './FlipCard';
import { ServiceItem } from '@/types/pages.types';

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Government & E-Governance",
    description: "RTO automation, citizen enrollment, and Aadhaar-based identity systems.",
    longDescription: "Empowering governments with automated driving test tracks, DL/RC issuance, Aadhaar KYC integration, and citizen enrollment platforms for seamless public services.",
    icon: "Building2",
    link: "/solutions/aadhaar-kyc"
  },
  {
    id: 2,
    title: "Corporate & Enterprises",
    description: "Workforce management, access control, and attendance systems.",
    longDescription: "Complete enterprise solutions including biometric attendance, visitor management, role-based access control, and smart card systems for large organizations.",
    icon: "Briefcase",
    link: "/identity-access"
  },
  {
    id: 3,
    title: "Healthcare & Hospitals",
    description: "Patient tracking, visitor management, and secure access solutions.",
    longDescription: "HIPAA-compliant healthcare solutions including patient identification, staff access control, asset tracking, and queue management for medical facilities.",
    icon: "Heart",
    link: "/solutions/biometric-authentication"
  },
  {
    id: 4,
    title: "Education & Institutions",
    description: "Campus security, library access, and student ID management.",
    longDescription: "End-to-end educational solutions including smart student ID cards, library management, hostel access, canteen systems, and attendance tracking.",
    icon: "GraduationCap",
    link: "/solutions/smart-attendance"
  },
  {
    id: 5,
    title: "Manufacturing & Logistics",
    description: "RFID tracking, inventory management, and supply chain visibility.",
    longDescription: "Industrial solutions for asset tracking, inventory automation, supply chain management, and workforce attendance with rugged RFID hardware.",
    icon: "Factory",
    link: "/rfid-solutions"
  },
  {
    id: 6,
    title: "Residential & Townships",
    description: "Gated community access, visitor management, and amenity booking.",
    longDescription: "Township management systems with resident access control, visitor pre-authorization, parking management, and integrated facility booking platforms.",
    icon: "Home",
    link: "/software-platforms"
  }
];

export const OurExpertiseSection: React.FC = () => {
  const leftServices = services.slice(0, 3);
  const rightServices = services.slice(3, 6);

  return (
    <section id="services" className="py-24 bg-[#e8f4fa]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-secondary border border-border mb-4 md:mb-6">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent" />
              <span className="text-foreground font-bold text-xs md:text-sm tracking-widest uppercase">Who We Serve</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-foreground">
              Empowering <span className="poppins text-transparent bg-clip-text bg-gradient-to-r from-[#9cd0ec] via-[#fed356] to-[#ee6d31]">Industries</span> Across Sectors.
            </h2>
          </motion.div>
        </div>
        
        {/* Three Column Layout: Left Cards - Center Image - Right Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left Column - 3 Cards */}
          <div className="space-y-8">
            {leftServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FlipCard service={service} />
              </motion.div>
            ))}
          </div>

          {/* Center Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/expertise-center.jpg"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
              {/* Fallback gradient if image doesn't exist */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-highlight/20 to-accent/20" />
            </div>
          </motion.div>

          {/* Right Column - 3 Cards */}
          <div className="space-y-8">
            {rightServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FlipCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurExpertiseSection;
