'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn, ShineBorder, AnimatedShinyText, PulsatingButton, BorderBeam } from '@/components/ui';
import { CTASection } from '@/components/layout';
import { 
  CreditCard, Smartphone, Watch, KeyRound, Shield, Lock,
  Fingerprint, ScanFace, Radio, Cpu, Server, Printer,
  ArrowRight, Check, Star, Search, Filter, Grid3X3, List,
  ChevronDown, ChevronLeft, ChevronRight as ChevronRightIcon, Sparkles,
  Heart, Eye, Cloud, Database
} from 'lucide-react';

// Daily Deals Featured Products - IDS SmartTech Products
const dailyDeals = [
  {
    id: "facegate-pro",
    tag: "Daily Deals",
    name: "FaceGate Pro",
    subtitle: "AI Recognition Terminal",
    price: "24,999",
    originalPrice: "34,999",
    image: "https://cdn.pixabay.com/photo/2019/03/21/15/51/chatbot-4071274_1280.jpg",
    color: "#e8f4fa"
  },
  {
    id: "secureid-pro",
    tag: "Daily Deals",
    name: "Smart ID Card",
    subtitle: "Enterprise Security",
    price: "2,499",
    originalPrice: "3,499",
    image: "https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg",
    color: "#fff8e6"
  },
  {
    id: "bioscan-500",
    tag: "Daily Deals",
    name: "BioScan 500",
    subtitle: "Fingerprint Scanner",
    price: "8,499",
    originalPrice: "12,999",
    image: "https://cdn.pixabay.com/photo/2016/11/30/12/16/question-1872665_1280.jpg",
    color: "#f0fdf4"
  }
];

const promoCards = [
  {
    id: "iot-gateway-hub",
    tag: "Top Product",
    name: "IoT Gateway",
    subtitle: "Hub Pro",
    image: "https://cdn.pixabay.com/photo/2017/05/13/12/40/fashion-2309519_1280.jpg",
    bgColor: "bg-[#e8f4fa]"
  },
  {
    id: "holoprint-3000",
    tag: "Clearance",
    name: "HoloPrint 3000",
    subtitle: "Save ₹20,000",
    image: "https://cdn.pixabay.com/photo/2016/11/29/09/32/concept-1868728_1280.jpg",
    bgColor: "bg-[#f5f5f5]"
  },
  {
    id: "wearid-band",
    tag: "Featured",
    name: "WearID Band",
    subtitle: "Our Hottest Deals",
    image: "https://cdn.pixabay.com/photo/2016/11/22/23/44/apple-1851464_1280.jpg",
    bgColor: "bg-[#fff0e8]"
  }
];

// All Products Data - IDS SmartTech Products
const allProducts = [
  // Smart Cards & Credentials
  { 
    id: "secureid-pro",
    name: "SecureID Pro Smart Card", 
    category: "Smart Cards & Credentials",
    icon: CreditCard, 
    desc: "Enterprise-grade smart card with multi-factor authentication, PKI support, and AES-256 encryption for secure identity management.", 
    price: "₹2,499", 
    originalPrice: "₹3,499",
    features: ["PKI Support", "NFC Enabled", "Tamper Resistant", "AES-256"],
    badge: "Best Seller",
    image: "https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg",
    rating: 4.8,
    reviews: 156
  },
  { 
    id: "mobileid-wallet",
    name: "MobileID Digital Wallet", 
    category: "Smart Cards & Credentials",
    icon: Smartphone, 
    desc: "Digital credential management solution for mobile devices with biometric protection and cloud synchronization.", 
    price: "₹399/mo", 
    features: ["iOS & Android", "Biometric Auth", "Cloud Sync", "Remote Wipe"],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2016/12/09/11/33/smartphone-1894723_1280.jpg",
    rating: 4.6,
    reviews: 89
  },
  { 
    id: "wearid-band",
    name: "WearID Access Band", 
    category: "Smart Cards & Credentials",
    icon: Watch, 
    desc: "Wearable access credential for contactless entry with 90-day battery life and IP68 waterproof rating.", 
    price: "₹4,999", 
    features: ["Waterproof IP68", "90-day Battery", "BLE 5.0", "Gesture Control"],
    badge: "New",
    image: "https://cdn.pixabay.com/photo/2015/06/25/17/21/smart-watch-821557_1280.jpg",
    rating: 4.5,
    reviews: 67
  },
  // Access Control Hardware
  { 
    id: "gatekeeper-x1",
    name: "GateKeeper X1 Lock", 
    category: "Access Control",
    icon: KeyRound, 
    desc: "High-security electronic lock for enterprise doors with IP67 rating and multi-protocol support for seamless integration.", 
    price: "₹12,999", 
    features: ["IP67 Rated", "Multi-Protocol", "Audit Trail", "Fail-Safe"],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2017/10/12/22/17/business-2846221_1280.jpg",
    rating: 4.7,
    reviews: 45
  },
  { 
    id: "bioscan-500",
    name: "BioScan 500 Fingerprint", 
    category: "Access Control",
    icon: Fingerprint, 
    desc: "Advanced fingerprint scanner with liveness detection, 0.5s match time, and 10,000 template capacity.", 
    price: "₹8,499", 
    features: ["500dpi Sensor", "0.5s Match", "10K Templates", "Anti-Spoof"],
    badge: "Popular",
    image: "https://cdn.pixabay.com/photo/2016/11/30/12/16/question-1872665_1280.jpg",
    rating: 4.8,
    reviews: 124
  },
  { 
    id: "facegate-pro",
    name: "FaceGate Pro Terminal", 
    category: "Access Control",
    icon: ScanFace, 
    desc: "AI-powered facial recognition terminal with thermal screening, mask detection, and 99.8% accuracy.", 
    price: "₹24,999", 
    features: ["Mask Detection", "Thermal Scan", "99.8% Accuracy", "Night Vision"],
    badge: "Best Seller",
    image: "https://cdn.pixabay.com/photo/2019/03/21/15/51/chatbot-4071274_1280.jpg",
    rating: 4.9,
    reviews: 203
  },
  // IoT & Connectivity
  { 
    id: "iot-gateway-hub",
    name: "IoT Gateway Hub Pro", 
    category: "IoT & Connectivity",
    icon: Radio, 
    desc: "Central connectivity hub supporting 500+ IoT devices with edge computing and secure OTA updates.", 
    price: "₹18,999", 
    features: ["500+ Devices", "Edge Computing", "Secure Boot", "OTA Updates"],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382521_1280.jpg",
    rating: 4.6,
    reviews: 78
  },
  { 
    id: "smartsensor-suite",
    name: "SmartSensor Suite", 
    category: "IoT & Connectivity",
    icon: Cpu, 
    desc: "Modular sensor package for environmental monitoring - temperature, humidity, motion, and air quality.", 
    price: "₹6,499", 
    features: ["Temperature", "Humidity", "Motion", "Air Quality"],
    badge: "New",
    image: "https://cdn.pixabay.com/photo/2016/10/09/19/19/coins-1726618_1280.jpg",
    rating: 4.4,
    reviews: 56
  },
  { 
    id: "edgecompute-node",
    name: "EdgeCompute AI Node", 
    category: "IoT & Connectivity",
    icon: Server, 
    desc: "Edge processing unit for real-time AI analytics with 4GB RAM, PoE powered, and Docker ready.", 
    price: "₹32,999", 
    features: ["AI Inference", "4GB RAM", "PoE Powered", "Docker Ready"],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2017/06/14/08/20/map-2401458_1280.jpg",
    rating: 4.7,
    reviews: 34
  },
  // Security Printing
  { 
    id: "holoprint-3000",
    name: "HoloPrint 3000 Printer", 
    category: "Security Printing",
    icon: Printer, 
    desc: "Industrial holographic security label printer with 1200dpi resolution and multi-layer printing capabilities.", 
    price: "₹89,999", 
    originalPrice: "₹109,999",
    features: ["1200dpi", "Multi-layer", "Serialization", "UV Printing"],
    badge: "Sale",
    image: "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
    rating: 4.5,
    reviews: 23
  },
  { 
    id: "securelabel-pro",
    name: "SecureLabel Pro Software", 
    category: "Security Printing",
    icon: Shield, 
    desc: "Anti-counterfeit label design software with QR integration, track & trace, and comprehensive API access.", 
    price: "₹8,999/mo", 
    features: ["Template Library", "QR Integration", "Track & Trace", "API Access"],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
    rating: 4.3,
    reviews: 67
  },
  { 
    id: "authentiseal",
    name: "AuthentiSeal Security", 
    category: "Security Printing",
    icon: Lock, 
    desc: "Tamper-evident security seals with custom holographic designs, serial numbers, and RFID option.", 
    price: "₹1,499", 
    originalPrice: "₹2,499",
    features: ["Custom Design", "Serial Numbers", "RFID Option", "Void Pattern"],
    badge: "Popular",
    image: "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg",
    rating: 4.6,
    reviews: 189
  },
  // RFID & Smart Card Systems
  { 
    id: "rfid-reader-pro",
    name: "RFID Reader Pro Series", 
    category: "RFID & Smart Card Systems",
    icon: Radio, 
    desc: "Multi-frequency RFID readers for access control with long-range detection and secure authentication.", 
    price: "₹15,999", 
    features: ["Multi-Frequency", "Long Range", "Secure Auth", "IP67 Rated"],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382521_1280.jpg",
    rating: 4.7,
    reviews: 89
  },
  { 
    id: "smart-tag-suite",
    name: "Smart Tag Suite", 
    category: "RFID & Smart Card Systems",
    icon: KeyRound, 
    desc: "Comprehensive RFID tags, tokens, and keyfobs for various industrial and access control applications.", 
    price: "₹2,999", 
    features: ["Multiple Formats", "Durable", "Custom Encoding", "Bulk Options"],
    badge: "New",
    image: "https://cdn.pixabay.com/photo/2015/06/25/17/21/smart-watch-821557_1280.jpg",
    rating: 4.5,
    reviews: 67
  },
  { 
    id: "rfid-encoder-station",
    name: "RFID Encoder Station", 
    category: "RFID & Smart Card Systems",
    icon: Cpu, 
    desc: "Desktop encoding and personalization device for RFID cards and tags with batch processing capabilities.", 
    price: "₹45,999", 
    features: ["Batch Processing", "High Speed", "Quality Control", "User Friendly"],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2017/06/14/08/20/map-2401458_1280.jpg",
    rating: 4.6,
    reviews: 34
  },
  { 
    id: "nfc-card-writer",
    name: "NFC Card Writer", 
    category: "RFID & Smart Card Systems",
    icon: Smartphone, 
    desc: "Dual-interface card programming hardware for contact and contactless smart card encoding.", 
    price: "₹12,999", 
    features: ["Dual Interface", "High Speed", "Secure Writing", "SDK Included"],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2016/12/09/11/33/smartphone-1894723_1280.jpg",
    rating: 4.4,
    reviews: 56
  },
  // Biometric & Authentication Devices
  { 
    id: "biokiosk-enterprise",
    name: "BioKiosk Enterprise", 
    category: "Biometric & Authentication Devices",
    icon: ScanFace, 
    desc: "Multi-modal biometric enrollment kiosk with fingerprint, face, and iris capture capabilities.", 
    price: "₹89,999", 
    features: ["Multi-Modal", "High Accuracy", "Fast Enrollment", "Network Ready"],
    badge: "Enterprise",
    image: "https://cdn.pixabay.com/photo/2019/03/21/15/51/chatbot-4071274_1280.jpg",
    rating: 4.8,
    reviews: 45
  },
  { 
    id: "face-recognition-x2",
    name: "Face Recognition Terminal X2", 
    category: "Biometric & Authentication Devices",
    icon: ScanFace, 
    desc: "Advanced facial recognition hardware with thermal screening and mask detection for secure access.", 
    price: "₹32,999", 
    features: ["Thermal Scan", "Mask Detection", "99.8% Accuracy", "Night Vision"],
    badge: "Popular",
    image: "https://cdn.pixabay.com/photo/2019/03/21/15/51/chatbot-4071274_1280.jpg",
    rating: 4.9,
    reviews: 124
  },
  { 
    id: "fingerprint-scanner-module",
    name: "Fingerprint Scanner Module", 
    category: "Biometric & Authentication Devices",
    icon: Fingerprint, 
    desc: "OEM fingerprint authentication module with liveness detection and 10,000 template capacity.", 
    price: "₹9,999", 
    features: ["500dpi Sensor", "Liveness Detect", "10K Templates", "OEM Module"],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2016/11/30/12/16/question-1872665_1280.jpg",
    rating: 4.7,
    reviews: 78
  },
  { 
    id: "iris-recognition-camera",
    name: "Iris Recognition Camera", 
    category: "Biometric & Authentication Devices",
    icon: Eye, 
    desc: "High-precision iris scanning device for secure biometric authentication in high-security environments.", 
    price: "₹55,999", 
    features: ["High Precision", "Fast Scan", "Anti-Spoof", "IP67 Rated"],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2016/10/09/19/19/coins-1726618_1280.jpg",
    rating: 4.6,
    reviews: 23
  },
  // Robotics & Automation Systems
  { 
    id: "servicebot-delivery",
    name: "ServiceBot Delivery Unit", 
    category: "Robotics & Automation Systems",
    icon: Cpu, 
    desc: "Autonomous delivery robot platform for indoor and outdoor service applications with AI navigation.", 
    price: "₹2,49,999", 
    features: ["AI Navigation", "Indoor/Outdoor", "Payload 50kg", "24/7 Operation"],
    badge: "New",
    image: "https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg",
    rating: 4.5,
    reviews: 12
  },
  { 
    id: "testtrack-robotics",
    name: "TestTrack Robotics Kit", 
    category: "Robotics & Automation Systems",
    icon: Server, 
    desc: "Driving test automation robotics with precision movement control and safety monitoring systems.", 
    price: "₹1,89,999", 
    features: ["Precision Control", "Safety Systems", "Modular Design", "Easy Integration"],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2017/01/22/12/07/imac-1999636_1280.png",
    rating: 4.7,
    reviews: 8
  },
  { 
    id: "automated-barrier",
    name: "Automated Barrier System", 
    category: "Robotics & Automation Systems",
    icon: Shield, 
    desc: "IoT-enabled boom barriers and gates with automated control and vehicle detection capabilities.", 
    price: "₹75,999", 
    features: ["IoT Enabled", "Vehicle Detect", "Remote Control", "Weather Resistant"],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2017/10/12/22/17/business-2846221_1280.jpg",
    rating: 4.6,
    reviews: 67
  },
  { 
    id: "queue-robot",
    name: "Queue Management Robot", 
    category: "Robotics & Automation Systems",
    icon: Radio, 
    desc: "Autonomous queue and crowd management robot with interactive display and smart routing.", 
    price: "₹1,25,999", 
    features: ["Interactive Display", "Smart Routing", "Crowd Management", "Voice Commands"],
    badge: "Popular",
    image: "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
    rating: 4.4,
    reviews: 34
  },
  // IoT Sensors & Embedded Modules
  { 
    id: "sensorhub-module",
    name: "SensorHub IoT Module", 
    category: "IoT Sensors & Embedded Modules",
    icon: Radio, 
    desc: "Multi-sensor environmental monitoring module with temperature, humidity, motion, and air quality sensors.", 
    price: "₹7,999", 
    features: ["Multi-Sensor", "Wireless", "Low Power", "Cloud Integration"],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2016/10/09/19/19/coins-1726618_1280.jpg",
    rating: 4.5,
    reviews: 89
  },
  { 
    id: "rfid-reader-module",
    name: "RFID Reader Module", 
    category: "IoT Sensors & Embedded Modules",
    icon: Radio, 
    desc: "Compact RFID reading hardware module for integration into IoT devices and embedded systems.", 
    price: "₹4,999", 
    features: ["Compact Size", "Multiple Protocols", "Low Power", "Easy Integration"],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382521_1280.jpg",
    rating: 4.3,
    reviews: 156
  },
  { 
    id: "embedded-controller",
    name: "Embedded Controller Board", 
    category: "IoT Sensors & Embedded Modules",
    icon: Cpu, 
    desc: "Powerful embedded controller board with GPIO, wireless connectivity, and real-time processing capabilities.", 
    price: "₹12,999", 
    features: ["High Performance", "Wireless", "GPIO Ports", "Real-time OS"],
    badge: "Developer",
    image: "https://cdn.pixabay.com/photo/2017/06/14/08/20/map-2401458_1280.jpg",
    rating: 4.6,
    reviews: 203
  },
  { 
    id: "power-management-unit",
    name: "Power Management Unit", 
    category: "IoT Sensors & Embedded Modules",
    icon: Server, 
    desc: "Smart power supply with monitoring, surge protection, and remote management for IoT deployments.", 
    price: "₹8,999", 
    features: ["Power Monitoring", "Surge Protection", "Remote Mgmt", "Multiple Outputs"],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
    rating: 4.4,
    reviews: 78
  },
  // Security Infrastructure Hardware
  { 
    id: "anpr-camera",
    name: "ANPR Camera System", 
    category: "Security Infrastructure Hardware",
    icon: ScanFace, 
    desc: "Automatic number plate recognition camera with high accuracy and real-time license plate reading.", 
    price: "₹45,999", 
    features: ["High Accuracy", "Real-time", "Weather Resistant", "IR Night Vision"],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2019/03/21/15/51/chatbot-4071274_1280.jpg",
    rating: 4.7,
    reviews: 112
  },
  { 
    id: "turnstile-access",
    name: "Turnstile Access Control", 
    category: "Security Infrastructure Hardware",
    icon: Shield, 
    desc: "High-security entry turnstiles with biometric integration and anti-tailgating protection.", 
    price: "₹1,25,999", 
    features: ["Biometric Integration", "Anti-Tailgating", "High Security", "Remote Control"],
    badge: "Enterprise",
    image: "https://cdn.pixabay.com/photo/2017/10/12/22/17/business-2846221_1280.jpg",
    rating: 4.8,
    reviews: 67
  },
  { 
    id: "intrusion-sensors",
    name: "Intrusion Detection Sensors", 
    category: "Security Infrastructure Hardware",
    icon: Radio, 
    desc: "Advanced perimeter security monitoring sensors with vibration, motion, and break detection.", 
    price: "₹15,999", 
    features: ["Multi-Detection", "Wireless", "Battery Powered", "Alert System"],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2016/11/30/12/16/question-1872665_1280.jpg",
    rating: 4.5,
    reviews: 89
  },
  { 
    id: "uvss-scanner",
    name: "Under Vehicle Scanner", 
    category: "Security Infrastructure Hardware",
    icon: ScanFace, 
    desc: "UVSS security inspection system for under vehicle surveillance with high-resolution imaging.", 
    price: "₹2,25,999", 
    features: ["High Resolution", "Real-time Scan", "Automatic Detection", "Weather Proof"],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2016/10/09/19/19/coins-1726618_1280.jpg",
    rating: 4.6,
    reviews: 23
  },
  // Printing & Personalization Equipment
  { 
    id: "card-printer-station",
    name: "Card Printer Station", 
    category: "Printing & Personalization Equipment",
    icon: Printer, 
    desc: "Thermal and DTC card printing station with high-quality output and secure encoding capabilities.", 
    price: "₹85,999", 
    features: ["Thermal/DTC", "High Quality", "Secure Encoding", "Bulk Printing"],
    badge: "Popular",
    image: "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
    rating: 4.7,
    reviews: 145
  },
  { 
    id: "hologram-laminator",
    name: "Hologram Laminator Pro", 
    category: "Printing & Personalization Equipment",
    icon: Shield, 
    desc: "Professional hologram application system with precise alignment and multi-layer lamination.", 
    price: "₹1,25,999", 
    features: ["Precise Alignment", "Multi-layer", "High Speed", "Quality Control"],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
    rating: 4.5,
    reviews: 67
  },
  { 
    id: "inkjet-card-system",
    name: "Inkjet Card System", 
    category: "Printing & Personalization Equipment",
    icon: Printer, 
    desc: "PVC card printing system with inkjet technology for high-volume personalization and customization.", 
    price: "₹1,85,999", 
    features: ["Inkjet Technology", "High Volume", "Custom Colors", "Edge-to-Edge"],
    badge: "Industrial",
    image: "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg",
    rating: 4.6,
    reviews: 89
  },
  { 
    id: "chip-encoding-device",
    name: "Chip Encoding Device", 
    category: "Printing & Personalization Equipment",
    icon: Cpu, 
    desc: "Smart card chip programming device with secure writing capabilities and multiple protocol support.", 
    price: "₹35,999", 
    features: ["Secure Writing", "Multi-Protocol", "High Speed", "Contact/Contactless"],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2017/06/14/08/20/map-2401458_1280.jpg",
    rating: 4.4,
    reviews: 123
  },
  // Software & Platforms
  { 
    id: "access-control-suite",
    name: "Access Control Management Suite", 
    category: "Software & Platforms",
    icon: Shield, 
    desc: "Comprehensive access control software with role-based permissions, real-time monitoring, and multi-site management.", 
    price: "₹49,999", 
    features: ["Role-Based Access", "Real-time Monitoring", "Multi-Site", "Audit Reports"],
    badge: "Enterprise",
    image: "https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg",
    rating: 4.9,
    reviews: 78
  },
  { 
    id: "identity-platform",
    name: "Identity Management Platform", 
    category: "Software & Platforms",
    icon: Server, 
    desc: "Centralized identity management system with SSO, MFA, and directory integration for enterprise environments.", 
    price: "₹75,999", 
    features: ["SSO Integration", "MFA Support", "Directory Sync", "User Provisioning"],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2016/12/09/11/33/smartphone-1894723_1280.jpg",
    rating: 4.7,
    reviews: 92
  },
  { 
    id: "visitor-software",
    name: "Visitor Management Software", 
    category: "Software & Platforms",
    icon: Lock, 
    desc: "Complete visitor management solution with pre-registration, badge printing, and security clearance workflows.", 
    price: "₹24,999", 
    features: ["Pre-Registration", "Badge Printing", "Security Clearance", "Digital Signage"],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2015/06/25/17/21/smart-watch-821557_1280.jpg",
    rating: 4.6,
    reviews: 45
  },
  { 
    id: "time-attendance-pro",
    name: "Time Attendance System Pro", 
    category: "Software & Platforms",
    icon: Cpu, 
    desc: "Advanced time and attendance tracking with biometric integration, leave management, and payroll integration.", 
    price: "₹18,999", 
    features: ["Biometric Integration", "Leave Management", "Payroll Sync", "Mobile App"],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2017/10/12/22/17/business-2846221_1280.jpg",
    rating: 4.5,
    reviews: 67
  },
  // Security & Surveillance
  { 
    id: "video-surveillance",
    name: "Video Surveillance System", 
    category: "Security & Surveillance",
    icon: Shield, 
    desc: "AI-powered video surveillance with facial recognition, motion detection, and cloud storage capabilities.", 
    price: "₹89,999", 
    features: ["AI Recognition", "Motion Detection", "Cloud Storage", "Mobile Access"],
    badge: "AI-Powered",
    image: "https://cdn.pixabay.com/photo/2016/11/30/12/16/question-1872665_1280.jpg",
    rating: 4.8,
    reviews: 134
  },
  { 
    id: "intrusion-detection",
    name: "Intrusion Detection System", 
    category: "Security & Surveillance",
    icon: Lock, 
    desc: "Advanced intrusion detection with perimeter monitoring, alarm management, and automated response systems.", 
    price: "₹45,999", 
    features: ["Perimeter Monitoring", "Alarm Management", "Auto Response", "24/7 Monitoring"],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2019/03/21/15/51/chatbot-4071274_1280.jpg",
    rating: 4.7,
    reviews: 89
  },
  { 
    id: "perimeter-security",
    name: "Perimeter Security Solution", 
    category: "Security & Surveillance",
    icon: Shield, 
    desc: "Comprehensive perimeter security with sensors, cameras, and access control integration for complete facility protection.", 
    price: "₹67,999", 
    features: ["Multi-Sensor", "Camera Integration", "Access Control", "Alert System"],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg",
    rating: 4.6,
    reviews: 56
  },
  { 
    id: "security-dashboard",
    name: "Security Monitoring Dashboard", 
    category: "Security & Surveillance",
    icon: Server, 
    desc: "Centralized security monitoring dashboard with real-time alerts, incident management, and reporting capabilities.", 
    price: "₹32,999", 
    features: ["Real-time Alerts", "Incident Management", "Custom Reports", "Multi-Site"],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2016/12/09/11/33/smartphone-1894723_1280.jpg",
    rating: 4.5,
    reviews: 78
  },
  // Integration & APIs
  { 
    id: "api-gateway",
    name: "API Gateway & Integration Hub", 
    category: "Integration & APIs",
    icon: Server, 
    desc: "Enterprise API gateway with security, rate limiting, and seamless integration with third-party systems.", 
    price: "₹55,999", 
    features: ["API Security", "Rate Limiting", "Third-party Integration", "Monitoring"],
    badge: "Developer",
    image: "https://cdn.pixabay.com/photo/2015/06/25/17/21/smart-watch-821557_1280.jpg",
    rating: 4.8,
    reviews: 92
  },
  { 
    id: "system-connector",
    name: "Third-Party System Connector", 
    category: "Integration & APIs",
    icon: Cpu, 
    desc: "Universal connector for integrating with HR, ERP, and other enterprise systems with pre-built adapters.", 
    price: "₹28,999", 
    features: ["HR Integration", "ERP Sync", "Pre-built Adapters", "Data Mapping"],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2017/10/12/22/17/business-2846221_1280.jpg",
    rating: 4.6,
    reviews: 45
  },
  { 
    id: "cloud-integration",
    name: "Cloud Integration Platform", 
    category: "Integration & APIs",
    icon: Server, 
    desc: "Cloud-native integration platform with microservices architecture and scalable API management.", 
    price: "₹42,999", 
    features: ["Microservices", "Scalable APIs", "Cloud Native", "Auto Scaling"],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2016/11/30/12/16/question-1872665_1280.jpg",
    rating: 4.7,
    reviews: 67
  },
  { 
    id: "data-analytics",
    name: "Data Analytics & Reporting", 
    category: "Integration & APIs",
    icon: Cpu, 
    desc: "Advanced analytics platform with custom dashboards, predictive insights, and automated reporting.", 
    price: "₹38,999", 
    features: ["Custom Dashboards", "Predictive Analytics", "Auto Reports", "Data Visualization"],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2019/03/21/15/51/chatbot-4071274_1280.jpg",
    rating: 4.5,
    reviews: 89
  },
  // Mobile & Wearable Solutions
  { 
    id: "mobile-access-app",
    name: "Mobile Access App Pro", 
    category: "Mobile & Wearable Solutions",
    icon: Smartphone, 
    desc: "Professional mobile access control app with offline capabilities, geofencing, and secure credential storage.", 
    price: "₹4,999", 
    features: ["Offline Access", "Geofencing", "Secure Storage", "Push Notifications"],
    badge: "Mobile",
    image: "https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg",
    rating: 4.7,
    reviews: 156
  },
  { 
    id: "wearable-badge",
    name: "Wearable Security Badge", 
    category: "Mobile & Wearable Solutions",
    icon: Watch, 
    desc: "Smart wearable badge with NFC, Bluetooth, and biometric sensors for seamless access control.", 
    price: "₹6,999", 
    features: ["NFC Enabled", "BLE Support", "Biometric Sensors", "Water Resistant"],
    badge: "Wearable",
    image: "https://cdn.pixabay.com/photo/2016/12/09/11/33/smartphone-1894723_1280.jpg",
    rating: 4.6,
    reviews: 78
  },
  { 
    id: "smartphone-auth",
    name: "Smartphone Authentication", 
    category: "Mobile & Wearable Solutions",
    icon: Smartphone, 
    desc: "Phone-as-a-key authentication system using BLE and NFC for secure mobile access control.", 
    price: "₹8,999", 
    features: ["BLE + NFC", "Phone-as-Key", "Secure Auth", "Cross-Platform"],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2015/06/25/17/21/smart-watch-821557_1280.jpg",
    rating: 4.5,
    reviews: 92
  },
  { 
    id: "nfc-mobile-wallet",
    name: "NFC Mobile Wallet", 
    category: "Mobile & Wearable Solutions",
    icon: Smartphone, 
    desc: "Mobile wallet solution with NFC payment, access control, and secure credential management.", 
    price: "₹3,499", 
    features: ["NFC Payments", "Access Control", "Secure Storage", "Multi-Credential"],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2017/10/12/22/17/business-2846221_1280.jpg",
    rating: 4.4,
    reviews: 134
  },
  // Enterprise Solutions
  { 
    id: "enterprise-suite",
    name: "Enterprise Security Suite", 
    category: "Enterprise Solutions",
    icon: Shield, 
    desc: "Complete enterprise security solution with unified management, compliance reporting, and scalable architecture.", 
    price: "₹125,999", 
    features: ["Unified Management", "Compliance Reports", "Scalable Architecture", "24/7 Support"],
    badge: "Enterprise",
    image: "https://cdn.pixabay.com/photo/2016/11/30/12/16/question-1872665_1280.jpg",
    rating: 4.9,
    reviews: 45
  },
  { 
    id: "multi-site-system",
    name: "Multi-Site Management System", 
    category: "Enterprise Solutions",
    icon: Server, 
    desc: "Centralized management system for multiple sites with distributed architecture and real-time synchronization.", 
    price: "₹89,999", 
    features: ["Multi-Site Support", "Real-time Sync", "Distributed Architecture", "Central Dashboard"],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2019/03/21/15/51/chatbot-4071274_1280.jpg",
    rating: 4.8,
    reviews: 67
  },
  { 
    id: "compliance-platform",
    name: "Compliance & Audit Platform", 
    category: "Enterprise Solutions",
    icon: Lock, 
    desc: "Automated compliance platform with audit trails, regulatory reporting, and policy enforcement.", 
    price: "₹67,999", 
    features: ["Auto Compliance", "Audit Trails", "Regulatory Reports", "Policy Enforcement"],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg",
    rating: 4.7,
    reviews: 89
  },
  { 
    id: "scalable-access",
    name: "Scalable Access Control", 
    category: "Enterprise Solutions",
    icon: Cpu, 
    desc: "Highly scalable access control system designed for large enterprises with thousands of users and devices.", 
    price: "₹95,999", 
    features: ["High Scalability", "Enterprise Grade", "Advanced Analytics", "Cloud Integration"],
    badge: "Scalable",
    image: "https://cdn.pixabay.com/photo/2016/12/09/11/33/smartphone-1894723_1280.jpg",
    rating: 4.6,
    reviews: 123
  },
];

// Categories
const categories = [
  { name: "All Products", count: allProducts.length, icon: Grid3X3 },
  { name: "Smart Cards & Credentials", count: 3, icon: CreditCard },
  { name: "Access Control", count: 3, icon: Shield },
  { name: "IoT & Connectivity", count: 3, icon: Radio },
  { name: "Security Printing", count: 3, icon: Printer },
  { name: "RFID & Smart Card Systems", count: 4, icon: Radio },
  { name: "Biometric & Authentication Devices", count: 4, icon: ScanFace },
  { name: "Robotics & Automation Systems", count: 4, icon: Cpu },
  { name: "Software & Platforms", count: 4, icon: Server },
  { name: "Security & Surveillance", count: 4, icon: Shield },
  { name: "Integration & APIs", count: 4, icon: Cpu },
  { name: "Mobile & Wearable Solutions", count: 4, icon: Smartphone },
  { name: "Enterprise Solutions", count: 4, icon: Server },
  { name: "Cloud & Infrastructure", count: 4, icon: Cloud }
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentDeal, setCurrentDeal] = useState(0);

  // Auto-rotate deals
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDeal((prev) => (prev + 1) % dailyDeals.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Filter products
  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = selectedCategory === "All Products" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
    if (sortBy === "price-high") return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, ''));
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0; // featured - keep original order
  });

  return (
    <div className="pt-24 min-h-screen bg-background text-foreground">
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-[#e8f4fa] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-border rounded-full mb-6">
                <Star size={16} className="text-[#fed356] fill-[#fed356]" />
                <span className="text-sm font-semibold text-foreground">Enterprise-Grade Security Products</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                Products Built for
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#9cd0ec] via-[#fed356] to-[#ee6d31]">
                  Security & Scale
                </span>
              </h1>

              <p className="text-xl text-foreground-secondary max-w-2xl mx-auto leading-relaxed mb-10">
                From smart cards to holographic security labels, explore our comprehensive range 
                of identity and access management products trusted by governments and enterprises worldwide.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground-secondary" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white border border-border rounded-full text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-lg"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Daily Deals Section - Magic UI */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Deal Carousel */}
            <div className="lg:col-span-2">
              <ShineBorder
                className="relative w-full overflow-hidden rounded-3xl"
                shineColor={["#9cd0ec", "#fed356", "#ee6d31"]}
                borderWidth={2}
              >
                <div 
                  className="relative h-[400px] md:h-[450px] p-8 md:p-12 overflow-hidden transition-colors duration-500"
                  style={{ backgroundColor: dailyDeals[currentDeal].color }}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
                      <svg viewBox="0 0 200 200" className="w-full h-full">
                        <path fill="currentColor" d="M100,0 L200,100 L100,200 L0,100 Z" className="text-primary/20" />
                      </svg>
                    </div>
                  </div>

                  <div className="relative z-10 h-full flex flex-col md:flex-row items-center">
                    {/* Content */}
                    <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
                      <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1.5 bg-white/50 rounded-full text-sm font-semibold text-[#ee6d31] mb-4">
                        <Sparkles className="w-4 h-4 mr-2" />
                        {dailyDeals[currentDeal].tag}
                      </AnimatedShinyText>
                      
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentDeal}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-2">
                            {dailyDeals[currentDeal].name}
                          </h2>
                          <p className="text-2xl md:text-3xl font-bold text-foreground/70 mb-6">
                            {dailyDeals[currentDeal].subtitle}
                          </p>
                          
                          <div className="flex items-baseline gap-2 mb-6 justify-center md:justify-start">
                            <span className="text-foreground-secondary">Today:</span>
                            <span className="text-4xl md:text-5xl font-black text-foreground">
                              ₹{dailyDeals[currentDeal].price}
                            </span>
                            <span className="text-xl text-foreground-secondary line-through">
                              ₹{dailyDeals[currentDeal].originalPrice}
                            </span>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                      
                      <Link href={`/products/${dailyDeals[currentDeal].id}`}>
                        <PulsatingButton className="px-8 py-4 bg-[#fed356] text-foreground font-bold rounded-full hover:shadow-lg transition-all">
                          Shop Now <ArrowRight className="inline ml-2 w-5 h-5" />
                        </PulsatingButton>
                      </Link>
                    </div>

                    {/* Image */}
                    <div className="flex-1 relative">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentDeal}
                          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                          transition={{ duration: 0.4 }}
                          className="relative"
                        >
                          <img 
                            src={dailyDeals[currentDeal].image} 
                            alt={dailyDeals[currentDeal].name}
                            className="w-full max-w-[300px] md:max-w-[350px] mx-auto h-auto object-contain drop-shadow-2xl"
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <button 
                    onClick={() => setCurrentDeal((prev) => (prev - 1 + dailyDeals.length) % dailyDeals.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-white transition-all shadow-lg z-20"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={() => setCurrentDeal((prev) => (prev + 1) % dailyDeals.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-white transition-all shadow-lg z-20"
                  >
                    <ChevronRightIcon size={24} />
                  </button>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {dailyDeals.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentDeal(idx)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          currentDeal === idx ? 'bg-[#ee6d31] w-8' : 'bg-foreground/20 hover:bg-foreground/40'
                        }`}
                      />
                    ))}
                  </div>

                  <BorderBeam size={300} duration={15} borderWidth={2} />
                </div>
              </ShineBorder>
            </div>

            {/* Promo Cards */}
            <div className="flex flex-col gap-4">
              {promoCards.map((card, idx) => (
                <Link href={`/products/${card.id}`} key={idx}>
                  <motion.div 
                    className={`relative ${card.bgColor} rounded-2xl p-5 flex items-center gap-4 overflow-hidden group cursor-pointer`}
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Content */}
                    <div className="flex-1 z-10">
                      <span className={`text-xs font-bold uppercase tracking-wider ${
                        card.tag === 'Top Product' ? 'text-primary' :
                        card.tag === 'Clearance' ? 'text-red-500' :
                        'text-[#ee6d31]'
                      }`}>
                        {card.tag}
                      </span>
                      <h3 className="text-lg font-black text-foreground leading-tight">
                        {card.name}
                      </h3>
                      <p className="text-sm text-foreground-secondary">
                        {card.subtitle}
                      </p>
                      <span className="inline-flex items-center text-[#ee6d31] font-bold text-sm mt-2 group-hover:gap-2 transition-all">
                        Shop Now <ArrowRight size={14} className="ml-1" />
                      </span>
                    </div>
                    
                    {/* Image */}
                    <div className="w-24 h-24 flex-shrink-0">
                      <img 
                        src={card.image} 
                        alt={card.name}
                        className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {categories.map((category, idx) => {
                const Icon = category.icon;
                const isActive = selectedCategory === category.name;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`p-6 rounded-2xl border-2 transition-all text-left group ${
                      isActive 
                        ? 'border-primary bg-primary/5 shadow-lg' 
                        : 'border-border bg-white hover:border-primary/30 hover:shadow-md'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all ${
                      isActive ? 'bg-primary text-white' : 'bg-secondary text-foreground-secondary group-hover:bg-primary/10 group-hover:text-primary'
                    }`}>
                      <Icon size={24} />
                    </div>
                    <h3 className={`font-bold mb-1 ${isActive ? 'text-primary' : 'text-foreground'}`}>
                      {category.name}
                    </h3>
                    <p className="text-sm text-foreground-secondary">{category.count} products</p>
                  </button>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filters Bar */}
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Filter size={18} className="text-foreground-secondary" />
                <span className="text-foreground-secondary">
                  Showing <span className="font-bold text-foreground">{sortedProducts.length}</span> products
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                {/* Sort Dropdown */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none pl-4 pr-10 py-2 bg-white border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name">Name: A-Z</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground-secondary pointer-events-none" />
                </div>

                {/* View Mode Toggle */}
                <div className="flex bg-secondary rounded-lg p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-md transition-all ${viewMode === "grid" ? 'bg-white shadow-sm text-primary' : 'text-foreground-secondary hover:text-foreground'}`}
                  >
                    <Grid3X3 size={18} />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-md transition-all ${viewMode === "list" ? 'bg-white shadow-sm text-primary' : 'text-foreground-secondary hover:text-foreground'}`}
                  >
                    <List size={18} />
                  </button>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Products Grid */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedCategory + sortBy}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={viewMode === "grid" 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" 
                : "flex flex-col gap-4"
              }
            >
              {sortedProducts.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group"
                >
                  {viewMode === "grid" ? (
                    // Grid Card - E-commerce Style
                    <div className="bg-white border border-border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col relative">
                      {/* Badge */}
                      {product.badge && (
                        <div className={`absolute top-4 left-4 z-10 px-3 py-1.5 text-xs font-bold rounded-lg ${
                          product.badge === "Best Seller" ? 'bg-[#ee6d31] text-white' :
                          product.badge === "New" ? 'bg-green-500 text-white' :
                          product.badge === "Sale" ? 'bg-red-500 text-white' :
                          'bg-[#fed356] text-foreground'
                        }`}>
                          {product.badge}
                        </div>
                      )}

                      {/* Quick Actions */}
                      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center text-foreground-secondary hover:text-red-500 hover:bg-red-50 transition-all">
                          <Heart size={18} />
                        </button>
                        <Link href={`/products/${product.id}`} className="w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center text-foreground-secondary hover:text-primary hover:bg-primary/10 transition-all">
                          <Eye size={18} />
                        </Link>
                      </div>
                      
                      {/* Image */}
                      <Link href={`/products/${product.id}`} className="relative aspect-square bg-[#f8f9fa] overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center p-8">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = `https://placehold.co/400x400/f8f9fa/9cd0ec?text=${encodeURIComponent(product.name)}`;
                            }}
                          />
                        </div>
                      </Link>
                      
                      {/* Content */}
                      <div className="p-5 flex flex-col flex-grow">
                        {/* Category */}
                        <span className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">
                          {product.category}
                        </span>
                        
                        {/* Name */}
                        <Link href={`/products/${product.id}`}>
                          <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {product.name}
                          </h3>
                        </Link>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                size={14} 
                                className={i < Math.floor(product.rating || 4.5) ? 'text-[#fed356] fill-[#fed356]' : 'text-gray-200 fill-gray-200'} 
                              />
                            ))}
                          </div>
                          <span className="text-xs text-foreground-secondary">({product.reviews || 0})</span>
                        </div>
                        
                        {/* Price */}
                        <div className="mt-auto">
                          <div className="flex items-baseline gap-2 mb-4">
                            <span className="text-xl font-black text-foreground">{product.price}</span>
                            {product.originalPrice && (
                              <span className="text-sm text-foreground-secondary line-through">{product.originalPrice}</span>
                            )}
                          </div>
                          
                          {/* Buy Now Button */}
                          <Link
                            href={`/products/${product.id}`}
                            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-foreground text-background font-bold text-sm rounded-xl hover:bg-primary transition-all"
                          >
                            Buy Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // List Card
                    <div className="bg-white border border-border rounded-2xl p-5 hover:shadow-xl transition-all flex gap-6">
                      <Link href={`/products/${product.id}`} className="w-40 h-40 bg-[#f8f9fa] rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center p-4">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = `https://placehold.co/200x200/f8f9fa/9cd0ec?text=${encodeURIComponent(product.name)}`;
                          }}
                        />
                      </Link>
                      <div className="flex-grow flex flex-col">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                              {product.category}
                            </span>
                            <Link href={`/products/${product.id}`}>
                              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                {product.name}
                              </h3>
                            </Link>
                            {/* Rating */}
                            <div className="flex items-center gap-2 mt-1">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    size={14} 
                                    className={i < Math.floor(product.rating || 4.5) ? 'text-[#fed356] fill-[#fed356]' : 'text-gray-200 fill-gray-200'} 
                                  />
                                ))}
                              </div>
                              <span className="text-xs text-foreground-secondary">({product.reviews || 0} reviews)</span>
                            </div>
                          </div>
                          {product.badge && (
                            <span className={`px-3 py-1 text-xs font-bold rounded-lg ${
                              product.badge === "Best Seller" ? 'bg-[#ee6d31] text-white' :
                              product.badge === "New" ? 'bg-green-500 text-white' :
                              product.badge === "Sale" ? 'bg-red-500 text-white' :
                              'bg-[#fed356] text-foreground'
                            }`}>
                              {product.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-foreground-secondary mb-3 line-clamp-2">
                          {product.desc}
                        </p>
                        <div className="flex items-center gap-3 mb-3">
                          {product.features.slice(0, 4).map((feature, i) => (
                            <span key={i} className="flex items-center gap-1 text-xs text-foreground-secondary bg-secondary px-2 py-1 rounded">
                              <Check size={12} className="text-primary" />
                              {feature}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-black text-foreground">{product.price}</span>
                            {product.originalPrice && (
                              <span className="text-sm text-foreground-secondary line-through">{product.originalPrice}</span>
                            )}
                          </div>
                          <div className="flex items-center gap-3">
                            <button className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-foreground-secondary hover:text-red-500 hover:border-red-500 transition-all">
                              <Heart size={18} />
                            </button>
                            <Link
                              href={`/products/${product.id}`}
                              className="flex items-center gap-2 px-6 py-3 bg-foreground text-background font-bold text-sm rounded-xl hover:bg-primary transition-all"
                            >
                              Buy Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Results */}
          {sortedProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-20 h-20 mx-auto bg-secondary rounded-full flex items-center justify-center mb-4">
                <Search size={32} className="text-foreground-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">No products found</h3>
              <p className="text-foreground-secondary">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
