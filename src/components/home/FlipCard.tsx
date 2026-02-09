
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from './Icon';
import { ServiceItem } from '@/types/pages.types';

interface FlipCardProps {
  service: ServiceItem;
}

const FlipCard: React.FC<FlipCardProps> = ({ service }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="perspective h-[180px] w-full cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15, duration: 0.6 }}
      >
        {/* Front Face - Minimal card */}
        <div className="absolute inset-0 backface-hidden bg-white rounded-2xl p-6 flex flex-col items-start overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          {/* Icon */}
          <div className="w-10 h-10 flex items-center justify-center mb-4 text-accent">
            <Icon name={service.icon} size={28} />
          </div>
          
          {/* Title */}
          <h3 className="text-lg font-bold mb-2 text-foreground">
            {service.title}
          </h3>
          
          {/* Description */}
          <p className="text-foreground-muted text-sm leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Back Face - Gradient card */}
        <div className="absolute inset-0 backface-hidden rounded-2xl p-5 flex flex-col rotate-y-180 shadow-xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #6dd5ed 0%, #2193b0 35%, #fbc531 70%, #f0932b 100%)'

          }}
        >
          <div className="relative z-10 w-full h-full flex flex-col">
            {/* Small decorative line */}
            <div className="w-8 h-0.5 rounded-full bg-white/50 mb-4"></div>
            
            {/* Title */}
            <h3 className="text-base font-bold font-poppins mb-2 text-white leading-tight">
              {service.title}
            </h3>
            
            {/* Description */}
            <p className="text-xs leading-relaxed text-white/90 flex-grow">
              {service.longDescription}
            </p>
            
            {/* Button */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-3 py-2.5 bg-white text-gray-800 rounded-full text-[10px] font-bold hover:shadow-lg transition-all uppercase tracking-widest"
            >
              Consult Now
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FlipCard;
