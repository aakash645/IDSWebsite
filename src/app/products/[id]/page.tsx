'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { FadeIn } from '@/components/ui';
import { CTASection } from '@/components/layout';
import { 
  CreditCard, Smartphone, Watch, KeyRound, Shield, Lock,
  Fingerprint, ScanFace, Radio, Cpu, Server, Printer,
  Check, Star, Minus, Plus,
  Heart, Facebook, Twitter, Linkedin,
  Eye, Users, Clock, Camera, Fence, Monitor, Network, Cloud, BarChart, Building, FileCheck, TrendingUp, Database
} from 'lucide-react';

// All Products Data
const allProducts = [
  { 
    id: "secureid-pro",
    name: "SecureID Pro Smart Card", 
    category: "Smart Cards & Credentials",
    icon: CreditCard, 
    desc: "Enterprise-grade smart card with multi-factor authentication and advanced encryption", 
    fullDesc: "The SecureID Pro is our flagship smart card solution designed for enterprise environments. It features military-grade AES-256 encryption, PKI support for digital signatures, and NFC capabilities for contactless authentication. Perfect for government, banking, and corporate identity management.",
    price: 2499, 
    originalPrice: 3499,
    features: ["PKI Support", "NFC Enabled", "Tamper Resistant", "AES-256 Encryption"],
    specs: [
      { label: "Card Type", value: "Contact + Contactless" },
      { label: "Memory", value: "144KB EEPROM" },
      { label: "Security", value: "AES-256, 3DES, RSA" },
      { label: "Operating Temp", value: "-25°C to +85°C" },
      { label: "Lifespan", value: "500,000 read/write cycles" },
      { label: "Dimensions", value: "85.6 x 54 x 0.76mm" },
    ],
    badge: "Best Seller",
    image: "https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/01/22/12/07/imac-1999636_1280.png",
      "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
      "https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_1280.png"
    ],
    sizes: ["Standard", "Mini"],
    rating: 4.8,
    reviews: 156,
    inStock: true,
    sku: "IDS-SC-001",
    tags: ["smart card", "security", "NFC"]
  },
  { 
    id: "mobileid-wallet",
    name: "MobileID Digital Wallet", 
    category: "Smart Cards & Credentials",
    icon: Smartphone, 
    desc: "Digital credential management for mobile devices with biometric protection", 
    fullDesc: "MobileID Wallet transforms your smartphone into a secure digital credential. With biometric authentication, cloud sync, and remote wipe capabilities, it's the perfect solution for organizations looking to go cardless while maintaining the highest security standards.",
    price: 399, 
    priceType: "monthly",
    features: ["iOS & Android", "Biometric Auth", "Cloud Sync", "Remote Wipe"],
    specs: [
      { label: "Platforms", value: "iOS 14+, Android 10+" },
      { label: "Authentication", value: "Face ID, Touch ID, Fingerprint" },
      { label: "Protocols", value: "NFC, BLE, QR Code" },
      { label: "Encryption", value: "End-to-end AES-256" },
      { label: "Compliance", value: "SOC 2, GDPR" },
      { label: "Support", value: "24/7 Premium" },
    ],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2016/12/09/11/33/smartphone-1894723_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2016/12/09/11/33/smartphone-1894723_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_1280.jpg",
      "https://cdn.pixabay.com/photo/2014/05/02/21/49/laptop-336373_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/12/30/phone-1869510_1280.jpg"
    ],
    sizes: ["Standard"],
    rating: 4.6,
    reviews: 89,
    inStock: true
  },
  { 
    id: "wearid-band",
    name: "WearID Band", 
    category: "Smart Cards & Credentials",
    icon: Watch, 
    desc: "Wearable access credential for contactless entry with long battery life", 
    fullDesc: "WearID Band is a sleek, waterproof wearable that serves as your access credential. With 90-day battery life and BLE 5.0 connectivity, it offers convenience without compromising security. Gesture control allows for quick actions without touching any surface.",
    price: 4999, 
    features: ["Waterproof IP68", "90-day Battery", "BLE 5.0", "Gesture Control"],
    specs: [
      { label: "Water Resistance", value: "IP68 (50m)" },
      { label: "Battery", value: "90 days typical use" },
      { label: "Connectivity", value: "BLE 5.0, NFC" },
      { label: "Band Material", value: "Medical-grade silicone" },
      { label: "Weight", value: "28g" },
      { label: "Sizes", value: "S, M, L, XL" },
    ],
    badge: "New",
    image: "https://cdn.pixabay.com/photo/2015/06/25/17/21/smart-watch-821557_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2015/06/25/17/21/smart-watch-821557_1280.jpg",
      "https://cdn.pixabay.com/photo/2014/07/31/23/00/wristwatch-407096_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/09/32/concept-1868728_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_1280.jpg"
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.5,
    reviews: 67,
    inStock: true
  },
  { 
    id: "gatekeeper-x1",
    name: "GateKeeper X1", 
    category: "Access Control",
    icon: KeyRound, 
    desc: "High-security electronic lock for enterprise doors with multi-protocol support", 
    fullDesc: "The GateKeeper X1 is a heavy-duty electronic lock designed for enterprise environments. With IP67 rating, it withstands harsh conditions while providing multi-protocol support for seamless integration with existing access control systems.",
    price: 12999, 
    features: ["IP67 Rated", "Multi-Protocol", "Audit Trail", "Fail-Safe Mode"],
    specs: [
      { label: "Protection", value: "IP67" },
      { label: "Protocols", value: "Wiegand, OSDP, RS-485" },
      { label: "Capacity", value: "100,000 users" },
      { label: "Power", value: "12-24V DC" },
      { label: "Material", value: "Stainless Steel 316" },
      { label: "Warranty", value: "5 years" },
    ],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2017/10/12/22/17/business-2846221_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2017/10/12/22/17/business-2846221_1280.jpg",
      "https://cdn.pixabay.com/photo/2018/01/17/20/22/analytics-3088958_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
      "https://cdn.pixabay.com/photo/2019/04/26/16/21/data-4157963_1280.jpg"
    ],
    sizes: ["Standard"],
    rating: 4.7,
    reviews: 45,
    inStock: true
  },
  { 
    id: "bioscan-500",
    name: "BioScan 500", 
    category: "Access Control",
    icon: Fingerprint, 
    desc: "Advanced fingerprint scanner with liveness detection and fast matching", 
    fullDesc: "BioScan 500 delivers enterprise-grade fingerprint authentication with industry-leading 0.5-second match time. Advanced liveness detection prevents spoofing attacks, making it ideal for high-security environments.",
    price: 8499, 
    features: ["500dpi Sensor", "0.5s Match", "10K Templates", "Anti-Spoof"],
    specs: [
      { label: "Resolution", value: "500 DPI" },
      { label: "Sensing Area", value: "16 x 18mm" },
      { label: "Match Time", value: "<0.5 seconds" },
      { label: "FAR/FRR", value: "0.001% / 0.1%" },
      { label: "Template Capacity", value: "10,000" },
      { label: "Interface", value: "USB 2.0, RS-485" },
    ],
    badge: "Popular",
    image: "https://cdn.pixabay.com/photo/2016/11/30/12/16/question-1872665_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2016/11/30/12/16/question-1872665_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg",
      "https://cdn.pixabay.com/photo/2018/09/27/09/22/artificial-intelligence-3706562_1280.jpg",
      "https://cdn.pixabay.com/photo/2019/07/14/16/27/pen-4337521_1280.jpg"
    ],
    sizes: ["Desktop", "Wall Mount"],
    rating: 4.8,
    reviews: 124,
    inStock: true
  },
  { 
    id: "facegate-pro",
    name: "FaceGate Pro", 
    category: "Access Control",
    icon: ScanFace, 
    desc: "AI-powered facial recognition terminal with thermal screening capability", 
    fullDesc: "FaceGate Pro combines cutting-edge AI facial recognition with thermal screening, perfect for post-pandemic workplace security. With 99.8% accuracy and mask detection, it ensures both security and health safety.",
    price: 24999, 
    features: ["Mask Detection", "Thermal Scan", "99.8% Accuracy", "Night Vision"],
    specs: [
      { label: "Recognition", value: "99.8% accuracy" },
      { label: "Speed", value: "<0.3 seconds" },
      { label: "Capacity", value: "50,000 faces" },
      { label: "Display", value: "8\" IPS touchscreen" },
      { label: "Thermal Range", value: "30-45°C ±0.3°C" },
      { label: "Operating Temp", value: "-20°C to +60°C" },
    ],
    badge: "Best Seller",
    image: "https://cdn.pixabay.com/photo/2019/03/21/15/51/chatbot-4071274_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2019/03/21/15/51/chatbot-4071274_1280.jpg",
      "https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/12/10/17/40/robot-3010309_1280.jpg",
      "https://cdn.pixabay.com/photo/2020/01/30/09/51/robot-4804275_1280.jpg"
    ],
    sizes: ["Wall Mount", "Turnstile"],
    rating: 4.9,
    reviews: 203,
    inStock: true
  },
  { 
    id: "iot-gateway-hub",
    name: "IoT Gateway Hub", 
    category: "IoT & Connectivity",
    icon: Radio, 
    desc: "Central connectivity hub for IoT device management with edge computing", 
    fullDesc: "The IoT Gateway Hub serves as the central nervous system for your IoT infrastructure. With support for 500+ devices and built-in edge computing, it processes data locally while maintaining cloud connectivity.",
    price: 18999, 
    features: ["500+ Devices", "Edge Computing", "Secure Boot", "OTA Updates"],
    specs: [
      { label: "Device Capacity", value: "500+" },
      { label: "Protocols", value: "MQTT, CoAP, HTTP/S" },
      { label: "Connectivity", value: "Ethernet, WiFi 6, 4G LTE" },
      { label: "Processor", value: "Quad-core ARM Cortex-A72" },
      { label: "Memory", value: "4GB RAM, 32GB eMMC" },
      { label: "Security", value: "Hardware TPM 2.0" },
    ],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382521_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382521_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/02/01/13/53/mobile-phone-2030660_1280.jpg",
      "https://cdn.pixabay.com/photo/2018/03/22/02/37/background-3249063_1280.png"
    ],
    sizes: ["Standard"],
    rating: 4.6,
    reviews: 78,
    inStock: true
  },
  { 
    id: "smartsensor-suite",
    name: "SmartSensor Suite", 
    category: "IoT & Connectivity",
    icon: Cpu, 
    desc: "Modular sensor package for comprehensive environmental monitoring", 
    fullDesc: "SmartSensor Suite is a modular environmental monitoring solution. Track temperature, humidity, motion, and air quality with a single integrated package. Perfect for smart buildings, warehouses, and data centers.",
    price: 6499, 
    features: ["Temperature", "Humidity", "Motion", "Air Quality"],
    specs: [
      { label: "Temp Range", value: "-40°C to +85°C" },
      { label: "Humidity Range", value: "0-100% RH" },
      { label: "Motion Range", value: "12m @ 120°" },
      { label: "Air Quality", value: "PM2.5, CO2, VOC" },
      { label: "Battery Life", value: "3 years (2xAA)" },
      { label: "Wireless", value: "LoRa, Zigbee, BLE" },
    ],
    badge: "New",
    image: "https://cdn.pixabay.com/photo/2016/10/09/19/19/coins-1726618_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2016/10/09/19/19/coins-1726618_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/06/10/07/18/list-2389219_1280.png",
      "https://cdn.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_1280.jpg"
    ],
    sizes: ["Standard", "Mini"],
    rating: 4.4,
    reviews: 56,
    inStock: true
  },
  { 
    id: "edgecompute-node",
    name: "EdgeCompute Node", 
    category: "IoT & Connectivity",
    icon: Server, 
    desc: "Edge processing unit for real-time AI analytics and inference", 
    fullDesc: "EdgeCompute Node brings AI to the edge. With dedicated NPU for inference and Docker support, deploy machine learning models right where data is generated. Ideal for real-time analytics and autonomous operations.",
    price: 32999, 
    features: ["AI Inference", "4GB RAM", "PoE Powered", "Docker Ready"],
    specs: [
      { label: "Processor", value: "8-core ARM + NPU" },
      { label: "AI Performance", value: "6 TOPS" },
      { label: "Memory", value: "4GB LPDDR4X" },
      { label: "Storage", value: "64GB eMMC + NVMe slot" },
      { label: "Power", value: "PoE+ (802.3at)" },
      { label: "OS", value: "Linux, Docker, K3s" },
    ],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2017/06/14/08/20/map-2401458_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2017/06/14/08/20/map-2401458_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
      "https://cdn.pixabay.com/photo/2018/01/17/20/22/analytics-3088958_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg"
    ],
    sizes: ["Standard"],
    rating: 4.7,
    reviews: 34,
    inStock: false
  },
  { 
    id: "holoprint-3000",
    name: "HoloPrint 3000", 
    category: "Security Printing",
    icon: Printer, 
    desc: "Industrial holographic security label printer with multi-layer capabilities", 
    fullDesc: "HoloPrint 3000 is an industrial-grade holographic printer for high-volume security label production. Multi-layer printing, UV capabilities, and serialization make it perfect for brand protection and anti-counterfeiting.",
    price: 89999, 
    features: ["1200dpi", "Multi-layer", "Serialization", "UV Printing"],
    specs: [
      { label: "Resolution", value: "1200 x 1200 DPI" },
      { label: "Print Speed", value: "50 labels/min" },
      { label: "Label Width", value: "Up to 200mm" },
      { label: "Layers", value: "Up to 4 holographic" },
      { label: "Connectivity", value: "Ethernet, USB 3.0" },
      { label: "Duty Cycle", value: "100,000/month" },
    ],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/03/26/13/09/workspace-1280538_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_1280.jpg"
    ],
    sizes: ["Industrial"],
    rating: 4.5,
    reviews: 23,
    inStock: true
  },
  { 
    id: "securelabel-pro",
    name: "SecureLabel Pro", 
    category: "Security Printing",
    icon: Shield, 
    desc: "Anti-counterfeit label design software with track and trace integration", 
    fullDesc: "SecureLabel Pro is comprehensive software for designing anti-counterfeit labels. With QR integration, track & trace, and API access, manage your entire brand protection workflow from one platform.",
    price: 8999, 
    priceType: "monthly",
    features: ["Template Library", "QR Integration", "Track & Trace", "API Access"],
    specs: [
      { label: "Templates", value: "500+ included" },
      { label: "Export Formats", value: "PDF, AI, EPS, PNG" },
      { label: "API", value: "REST, GraphQL" },
      { label: "Users", value: "Unlimited" },
      { label: "Storage", value: "100GB cloud" },
      { label: "Support", value: "Priority 24/7" },
    ],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_1280.jpg",
      "https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg"
    ],
    sizes: [],
    rating: 4.3,
    reviews: 67,
    inStock: true
  },
  { 
    id: "authentiseal",
    name: "AuthentiSeal", 
    category: "Security Printing",
    icon: Lock, 
    desc: "Tamper-evident security seals with custom holographic designs", 
    fullDesc: "AuthentiSeal provides tamper-evident security seals with custom holographic designs. Each seal features unique serial numbers and optional RFID for digital verification. Void patterns reveal tampering instantly.",
    price: 1499, 
    originalPrice: 2499,
    features: ["Custom Design", "Serial Numbers", "RFID Option", "Void Pattern"],
    specs: [
      { label: "Size Options", value: "10x20mm to 50x100mm" },
      { label: "Material", value: "Polyester, Paper, PET" },
      { label: "Adhesive", value: "Permanent tamper-evident" },
      { label: "Min Order", value: "1,000 pieces" },
      { label: "Lead Time", value: "5-7 business days" },
      { label: "Customization", value: "Full color + hologram" },
    ],
    badge: "Popular",
    image: "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
      "https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg"
    ],
    sizes: ["10x20mm", "25x50mm", "50x100mm"],
    rating: 4.6,
    reviews: 189,
    inStock: true
  },
  // RFID & Smart Card Systems
  { 
    id: "rfid-reader-pro",
    name: "RFID Reader Pro Series", 
    category: "RFID & Smart Card Systems",
    icon: Radio, 
    desc: "Multi-frequency RFID readers for access control with long-range detection", 
    fullDesc: "The RFID Reader Pro Series offers multi-frequency RFID reading capabilities with long-range detection and secure authentication. Perfect for enterprise access control systems requiring high reliability and performance.",
    price: 15999, 
    features: ["Multi-Frequency", "Long Range", "Secure Auth", "IP67 Rated"],
    specs: [
      { label: "Frequency", value: "125kHz, 13.56MHz, 860-960MHz" },
      { label: "Read Range", value: "Up to 10m" },
      { label: "Interface", value: "RS232, RS485, Wiegand" },
      { label: "Power", value: "9-24V DC" },
      { label: "Protection", value: "IP67" },
      { label: "Dimensions", value: "120x80x35mm" },
    ],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382521_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382521_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/01/22/12/07/imac-1999636_1280.png",
      "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg"
    ],
    sizes: [],
    rating: 4.7,
    reviews: 89,
    inStock: true
  },
  { 
    id: "smart-tag-suite",
    name: "Smart Tag Suite", 
    category: "RFID & Smart Card Systems",
    icon: KeyRound, 
    desc: "Comprehensive RFID tags, tokens, and keyfobs for various applications", 
    fullDesc: "Smart Tag Suite provides a complete range of RFID tags, tokens, and keyfobs designed for various industrial and access control applications. Durable construction ensures reliable performance in harsh environments.",
    price: 2999, 
    features: ["Multiple Formats", "Durable", "Custom Encoding", "Bulk Options"],
    specs: [
      { label: "Tag Types", value: "Keyfobs, Cards, Labels, Hard Tags" },
      { label: "Memory", value: "512-bit to 8KB" },
      { label: "Frequency", value: "125kHz, 13.56MHz" },
      { label: "Material", value: "ABS Plastic, PVC, Metal" },
      { label: "Operating Temp", value: "-40°C to +85°C" },
      { label: "IP Rating", value: "IP65-IP68" },
    ],
    badge: "New",
    image: "https://cdn.pixabay.com/photo/2015/06/25/17/21/smart-watch-821557_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2015/06/25/17/21/smart-watch-821557_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/12/09/11/33/smartphone-1894723_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
    ],
    sizes: [],
    rating: 4.5,
    reviews: 67,
    inStock: true
  },
  { 
    id: "rfid-encoder-station",
    name: "RFID Encoder Station", 
    category: "RFID & Smart Card Systems",
    icon: Cpu, 
    desc: "Desktop encoding and personalization device for RFID cards and tags", 
    fullDesc: "The RFID Encoder Station is a professional desktop device for encoding and personalizing RFID cards and tags. Features batch processing capabilities and quality control for high-volume operations.",
    price: 45999, 
    features: ["Batch Processing", "High Speed", "Quality Control", "User Friendly"],
    specs: [
      { label: "Encoding Speed", value: "Up to 1000 tags/hour" },
      { label: "Supported Formats", value: "MIFARE, NTAG, UHF" },
      { label: "Interface", value: "USB 3.0, Ethernet" },
      { label: "Display", value: "7\" Touchscreen" },
      { label: "Power", value: "100-240V AC" },
      { label: "Dimensions", value: "300x250x150mm" },
    ],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2017/06/14/08/20/map-2401458_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2017/06/14/08/20/map-2401458_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg"
    ],
    sizes: [],
    rating: 4.6,
    reviews: 34,
    inStock: true
  },
  { 
    id: "nfc-card-writer",
    name: "NFC Card Writer", 
    category: "RFID & Smart Card Systems",
    icon: Smartphone, 
    desc: "Dual-interface card programming hardware for contact and contactless cards", 
    fullDesc: "The NFC Card Writer provides dual-interface card programming capabilities for both contact and contactless smart cards. Includes SDK and supports multiple protocols for comprehensive card personalization.",
    price: 12999, 
    features: ["Dual Interface", "High Speed", "Secure Writing", "SDK Included"],
    specs: [
      { label: "Card Types", value: "Contact + Contactless" },
      { label: "Protocols", value: "ISO 14443, ISO 7816" },
      { label: "Interface", value: "USB 2.0" },
      { label: "Software", value: "Windows SDK included" },
      { label: "Power", value: "USB Powered" },
      { label: "Dimensions", value: "100x80x25mm" },
    ],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2016/12/09/11/33/smartphone-1894723_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2016/12/09/11/33/smartphone-1894723_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/01/22/12/07/imac-1999636_1280.png",
      "https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_1280.jpg"
    ],
    sizes: [],
    rating: 4.4,
    reviews: 56,
    inStock: true
  },
  // Biometric & Authentication Devices
  { 
    id: "biokiosk-enterprise",
    name: "BioKiosk Enterprise", 
    category: "Biometric & Authentication Devices",
    icon: ScanFace, 
    desc: "Multi-modal biometric enrollment kiosk with fingerprint, face, and iris capture", 
    fullDesc: "BioKiosk Enterprise is a comprehensive biometric enrollment solution featuring multi-modal capture capabilities. Includes fingerprint, facial recognition, and iris scanning for complete identity enrollment.",
    price: 89999, 
    features: ["Multi-Modal", "High Accuracy", "Fast Enrollment", "Network Ready"],
    specs: [
      { label: "Biometrics", value: "Fingerprint, Face, Iris" },
      { label: "Fingerprint Sensor", value: "500dpi optical" },
      { label: "Face Camera", value: "2MP HD" },
      { label: "Iris Camera", value: "Dual iris capture" },
      { label: "Interface", value: "Ethernet, WiFi" },
      { label: "Power", value: "100-240V AC" },
    ],
    badge: "Enterprise",
    image: "https://cdn.pixabay.com/photo/2019/03/21/15/51/chatbot-4071274_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2019/03/21/15/51/chatbot-4071274_1280.jpg",
      "https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg"
    ],
    sizes: [],
    rating: 4.8,
    reviews: 45,
    inStock: true
  },
  { 
    id: "face-recognition-x2",
    name: "Face Recognition Terminal X2", 
    category: "Biometric & Authentication Devices",
    icon: ScanFace, 
    desc: "Advanced facial recognition hardware with thermal screening and mask detection", 
    fullDesc: "Face Recognition Terminal X2 delivers advanced facial recognition with thermal screening capabilities and mask detection. Features 99.8% accuracy and night vision for comprehensive access control.",
    price: 32999, 
    features: ["Thermal Scan", "Mask Detection", "99.8% Accuracy", "Night Vision"],
    specs: [
      { label: "Recognition Speed", value: "<0.3 seconds" },
      { label: "Accuracy", value: "99.8%" },
      { label: "Temperature Range", value: "30°C to 45°C" },
      { label: "Camera", value: "2MP dual lens" },
      { label: "Interface", value: "RS485, Wiegand, TCP/IP" },
      { label: "Power", value: "12V DC" },
    ],
    badge: "Popular",
    image: "https://cdn.pixabay.com/photo/2019/03/21/15/51/chatbot-4071274_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2019/03/21/15/51/chatbot-4071274_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/10/12/22/17/business-2846221_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/30/12/16/question-1872665_1280.jpg"
    ],
    sizes: [],
    rating: 4.9,
    reviews: 124,
    inStock: true
  },
  { 
    id: "fingerprint-scanner-module",
    name: "Fingerprint Scanner Module", 
    category: "Biometric & Authentication Devices",
    icon: Fingerprint, 
    desc: "OEM fingerprint authentication module with liveness detection", 
    fullDesc: "Fingerprint Scanner Module is designed for OEM integration with advanced liveness detection and 10,000 template capacity. Perfect for custom biometric authentication solutions.",
    price: 9999, 
    features: ["500dpi Sensor", "Liveness Detect", "10K Templates", "OEM Module"],
    specs: [
      { label: "Sensor Type", value: "Optical 500dpi" },
      { label: "Template Capacity", value: "10,000" },
      { label: "FAR/FRR", value: "0.001%/0.1%" },
      { label: "Interface", value: "UART, USB" },
      { label: "Power", value: "3.3V-5V DC" },
      { label: "Dimensions", value: "50x30x10mm" },
    ],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2016/11/30/12/16/question-1872665_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2016/11/30/12/16/question-1872665_1280.jpg",
      "https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_1280.jpg"
    ],
    sizes: [],
    rating: 4.7,
    reviews: 78,
    inStock: true
  },
  { 
    id: "iris-recognition-camera",
    name: "Iris Recognition Camera", 
    category: "Biometric & Authentication Devices",
    icon: Eye, 
    desc: "High-precision iris scanning device for secure biometric authentication", 
    fullDesc: "Iris Recognition Camera provides high-precision iris scanning for secure biometric authentication in high-security environments. Features dual iris capture and advanced anti-spoofing technology.",
    price: 55999, 
    features: ["High Precision", "Fast Scan", "Anti-Spoof", "IP67 Rated"],
    specs: [
      { label: "Scan Distance", value: "30-50cm" },
      { label: "Recognition Time", value: "<1 second" },
      { label: "Accuracy", value: "99.9%" },
      { label: "Camera", value: "2MP specialized" },
      { label: "Interface", value: "USB 3.0, Ethernet" },
      { label: "Protection", value: "IP67" },
    ],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2016/10/09/19/19/coins-1726618_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2016/10/09/19/19/coins-1726618_1280.jpg",
      "https://cdn.pixabay.com/photo/2019/03/21/15/51/chatbot-4071274_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/06/14/08/20/map-2401458_1280.jpg"
    ],
    sizes: [],
    rating: 4.6,
    reviews: 23,
    inStock: true
  },
  // Robotics & Automation Systems
  { 
    id: "servicebot-delivery",
    name: "ServiceBot Delivery Unit", 
    category: "Robotics & Automation Systems",
    icon: Cpu, 
    desc: "Autonomous delivery robot platform with AI navigation and payload capacity", 
    fullDesc: "ServiceBot Delivery Unit is an autonomous robot platform designed for indoor and outdoor service applications. Features AI navigation, 50kg payload capacity, and 24/7 operation capabilities.",
    price: 249999, 
    features: ["AI Navigation", "Indoor/Outdoor", "Payload 50kg", "24/7 Operation"],
    specs: [
      { label: "Navigation", value: "SLAM + AI Vision" },
      { label: "Payload", value: "50kg" },
      { label: "Speed", value: "Up to 5km/h" },
      { label: "Battery", value: "8 hours operation" },
      { label: "Dimensions", value: "800x600x400mm" },
      { label: "IP Rating", value: "IP65" },
    ],
    badge: "New",
    image: "https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/01/22/12/07/imac-1999636_1280.png",
      "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg"
    ],
    sizes: [],
    rating: 4.5,
    reviews: 12,
    inStock: true
  },
  { 
    id: "testtrack-robotics",
    name: "TestTrack Robotics Kit", 
    category: "Robotics & Automation Systems",
    icon: Server, 
    desc: "Driving test automation robotics with precision movement control", 
    fullDesc: "TestTrack Robotics Kit provides precision movement control and safety monitoring for driving test automation. Modular design allows for easy integration and customization.",
    price: 189999, 
    features: ["Precision Control", "Safety Systems", "Modular Design", "Easy Integration"],
    specs: [
      { label: "Movement", value: "Linear + Rotational" },
      { label: "Precision", value: "±0.1mm" },
      { label: "Load Capacity", value: "200kg" },
      { label: "Speed Control", value: "0.1-2 m/s" },
      { label: "Safety", value: "Emergency stop, sensors" },
      { label: "Power", value: "220V AC" },
    ],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2017/01/22/12/07/imac-1999636_1280.png",
    gallery: [
      "https://cdn.pixabay.com/photo/2017/01/22/12/07/imac-1999636_1280.png",
      "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg"
    ],
    sizes: [],
    rating: 4.7,
    reviews: 8,
    inStock: true
  },
  { 
    id: "automated-barrier",
    name: "Automated Barrier System", 
    category: "Robotics & Automation Systems",
    icon: Shield, 
    desc: "IoT-enabled boom barriers and gates with automated control", 
    fullDesc: "Automated Barrier System features IoT-enabled boom barriers with vehicle detection and remote control capabilities. Weather-resistant design ensures reliable operation in various conditions.",
    price: 75999, 
    features: ["IoT Enabled", "Vehicle Detect", "Remote Control", "Weather Resistant"],
    specs: [
      { label: "Barrier Length", value: "3-6 meters" },
      { label: "Opening Speed", value: "1-2 seconds" },
      { label: "Vehicle Detection", value: "Loop detectors" },
      { label: "Control", value: "Remote + Local" },
      { label: "Power", value: "220V AC" },
      { label: "IP Rating", value: "IP54" },
    ],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2017/10/12/22/17/business-2846221_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2017/10/12/22/17/business-2846221_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/30/12/16/question-1872665_1280.jpg",
      "https://cdn.pixabay.com/photo/2019/03/21/15/51/chatbot-4071274_1280.jpg"
    ],
    sizes: [],
    rating: 4.6,
    reviews: 67,
    inStock: true
  },
  { 
    id: "queue-robot",
    name: "Queue Management Robot", 
    category: "Robotics & Automation Systems",
    icon: Radio, 
    desc: "Autonomous queue and crowd management robot with interactive display", 
    fullDesc: "Queue Management Robot provides autonomous crowd management with interactive display and smart routing capabilities. Voice commands and gesture recognition enhance user interaction.",
    price: 125999, 
    features: ["Interactive Display", "Smart Routing", "Crowd Management", "Voice Commands"],
    specs: [
      { label: "Display", value: "15.6\" touchscreen" },
      { label: "Navigation", value: "Autonomous SLAM" },
      { label: "Voice", value: "Multi-language support" },
      { label: "Battery", value: "6 hours operation" },
      { label: "Sensors", value: "LIDAR, cameras" },
      { label: "Dimensions", value: "600x500x1200mm" },
    ],
    badge: "Popular",
    image: "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
      "https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
    ],
    sizes: [],
    rating: 4.4,
    reviews: 34,
    inStock: true
  },
  // IoT Sensors & Embedded Modules
  { 
    id: "sensorhub-module",
    name: "SensorHub IoT Module", 
    category: "IoT Sensors & Embedded Modules",
    icon: Radio, 
    desc: "Multi-sensor environmental monitoring module with wireless connectivity", 
    fullDesc: "SensorHub IoT Module integrates multiple environmental sensors with wireless connectivity for comprehensive monitoring. Low power design ensures long battery life for IoT deployments.",
    price: 7999, 
    features: ["Multi-Sensor", "Wireless", "Low Power", "Cloud Integration"],
    specs: [
      { label: "Sensors", value: "Temp, Humidity, Motion, Light" },
      { label: "Connectivity", value: "WiFi, BLE, LoRa" },
      { label: "Battery", value: "CR2032 coin cell" },
      { label: "Range", value: "100m (BLE), 10km (LoRa)" },
      { label: "Dimensions", value: "50x30x15mm" },
      { label: "IP Rating", value: "IP65" },
    ],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2016/10/09/19/19/coins-1726618_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2016/10/09/19/19/coins-1726618_1280.jpg",
      "https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382521_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/06/14/08/20/map-2401458_1280.jpg"
    ],
    sizes: [],
    rating: 4.5,
    reviews: 89,
    inStock: true
  },
  { 
    id: "rfid-reader-module",
    name: "RFID Reader Module", 
    category: "IoT Sensors & Embedded Modules",
    icon: Radio, 
    desc: "Compact RFID reading hardware module for IoT device integration", 
    fullDesc: "RFID Reader Module is a compact hardware solution for integrating RFID reading capabilities into IoT devices. Supports multiple protocols and features low power consumption.",
    price: 4999, 
    features: ["Compact Size", "Multiple Protocols", "Low Power", "Easy Integration"],
    specs: [
      { label: "Frequency", value: "125kHz, 13.56MHz" },
      { label: "Read Range", value: "Up to 10cm" },
      { label: "Interface", value: "UART, I2C, SPI" },
      { label: "Power", value: "3.3V-5V DC" },
      { label: "Dimensions", value: "25x15x5mm" },
      { label: "Antenna", value: "Integrated" },
    ],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382521_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382521_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/01/22/12/07/imac-1999636_1280.png",
      "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg"
    ],
    sizes: [],
    rating: 4.3,
    reviews: 156,
    inStock: true
  },
  { 
    id: "embedded-controller",
    name: "Embedded Controller Board", 
    category: "IoT Sensors & Embedded Modules",
    icon: Cpu, 
    desc: "Powerful embedded controller board with GPIO and wireless connectivity", 
    fullDesc: "Embedded Controller Board provides powerful processing capabilities with extensive GPIO ports and wireless connectivity options. Ideal for IoT applications requiring real-time processing.",
    price: 12999, 
    features: ["High Performance", "Wireless", "GPIO Ports", "Real-time OS"],
    specs: [
      { label: "Processor", value: "ARM Cortex-A7 1.2GHz" },
      { label: "RAM", value: "1GB DDR3" },
      { label: "Storage", value: "8GB eMMC" },
      { label: "Wireless", value: "WiFi 802.11b/g/n, BLE" },
      { label: "GPIO", value: "40-pin header" },
      { label: "Power", value: "5V DC" },
    ],
    badge: "Developer",
    image: "https://cdn.pixabay.com/photo/2017/06/14/08/20/map-2401458_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2017/06/14/08/20/map-2401458_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg"
    ],
    sizes: [],
    rating: 4.6,
    reviews: 203,
    inStock: true
  },
  { 
    id: "power-management-unit",
    name: "Power Management Unit", 
    category: "IoT Sensors & Embedded Modules",
    icon: Server, 
    desc: "Smart power supply with monitoring and surge protection for IoT deployments", 
    fullDesc: "Power Management Unit provides intelligent power management with monitoring capabilities and surge protection. Multiple output options support various IoT device requirements.",
    price: 8999, 
    features: ["Power Monitoring", "Surge Protection", "Remote Mgmt", "Multiple Outputs"],
    specs: [
      { label: "Input", value: "100-240V AC" },
      { label: "Outputs", value: "5V, 12V, 24V DC" },
      { label: "Current", value: "Up to 5A per output" },
      { label: "Monitoring", value: "Voltage, current, power" },
      { label: "Protection", value: "Overload, short circuit" },
      { label: "Interface", value: "Ethernet, Modbus" },
    ],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
    ],
    sizes: [],
    rating: 4.4,
    reviews: 78,
    inStock: true
  },
  // Security Infrastructure Hardware
  { 
    id: "anpr-camera",
    name: "ANPR Camera System", 
    category: "Security Infrastructure Hardware",
    icon: ScanFace, 
    desc: "Automatic number plate recognition camera with high accuracy", 
    fullDesc: "ANPR Camera System provides automatic number plate recognition with high accuracy and real-time processing. Features weather-resistant design and IR night vision capabilities.",
    price: 45999, 
    features: ["High Accuracy", "Real-time", "Weather Resistant", "IR Night Vision"],
    specs: [
      { label: "Resolution", value: "2MP" },
      { label: "Recognition Rate", value: "95%+" },
      { label: "Processing", value: "Real-time" },
      { label: "Illumination", value: "IR LEDs" },
      { label: "Interface", value: "TCP/IP, RS485" },
      { label: "IP Rating", value: "IP66" },
    ],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2019/03/21/15/51/chatbot-4071274_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2019/03/21/15/51/chatbot-4071274_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/10/12/22/17/business-2846221_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/30/12/16/question-1872665_1280.jpg"
    ],
    sizes: [],
    rating: 4.7,
    reviews: 112,
    inStock: true
  },
  { 
    id: "turnstile-access",
    name: "Turnstile Access Control", 
    category: "Security Infrastructure Hardware",
    icon: Shield, 
    desc: "High-security entry turnstiles with biometric integration", 
    fullDesc: "Turnstile Access Control provides high-security entry solutions with biometric integration and anti-tailgating protection. Remote control and monitoring capabilities ensure comprehensive access management.",
    price: 125999, 
    features: ["Biometric Integration", "Anti-Tailgating", "High Security", "Remote Control"],
    specs: [
      { label: "Passage Width", value: "550mm" },
      { label: "Opening Speed", value: "0.3 seconds" },
      { label: "Security", value: "Anti-tailgating, anti-climb" },
      { label: "Integration", value: "Biometric readers, cards" },
      { label: "Control", value: "Remote + local" },
      { label: "Power", value: "220V AC" },
    ],
    badge: "Enterprise",
    image: "https://cdn.pixabay.com/photo/2017/10/12/22/17/business-2846221_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2017/10/12/22/17/business-2846221_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/30/12/16/question-1872665_1280.jpg",
      "https://cdn.pixabay.com/photo/2019/03/21/15/51/chatbot-4071274_1280.jpg"
    ],
    sizes: [],
    rating: 4.8,
    reviews: 67,
    inStock: true
  },
  { 
    id: "intrusion-sensors",
    name: "Intrusion Detection Sensors", 
    category: "Security Infrastructure Hardware",
    icon: Radio, 
    desc: "Advanced perimeter security monitoring sensors with multiple detection types", 
    fullDesc: "Intrusion Detection Sensors provide comprehensive perimeter security with vibration, motion, and break detection. Wireless operation and battery power ensure flexible deployment.",
    price: 15999, 
    features: ["Multi-Detection", "Wireless", "Battery Powered", "Alert System"],
    specs: [
      { label: "Detection Types", value: "Vibration, motion, break" },
      { label: "Range", value: "Up to 100m" },
      { label: "Battery", value: "3 years (AA batteries)" },
      { label: "Frequency", value: "433MHz/868MHz" },
      { label: "IP Rating", value: "IP65" },
      { label: "Dimensions", value: "120x80x40mm" },
    ],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2016/11/30/12/16/question-1872665_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2016/11/30/12/16/question-1872665_1280.jpg",
      "https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_1280.jpg"
    ],
    sizes: [],
    rating: 4.5,
    reviews: 89,
    inStock: true
  },
  { 
    id: "uvss-scanner",
    name: "Under Vehicle Scanner", 
    category: "Security Infrastructure Hardware",
    icon: ScanFace, 
    desc: "UVSS security inspection system for under vehicle surveillance", 
    fullDesc: "Under Vehicle Scanner provides high-resolution imaging for under vehicle security inspection. Automatic threat detection and weather-proof design ensure reliable operation.",
    price: 225999, 
    features: ["High Resolution", "Real-time Scan", "Automatic Detection", "Weather Proof"],
    specs: [
      { label: "Resolution", value: "2048x2048 pixels" },
      { label: "Scan Speed", value: "8 seconds" },
      { label: "Detection", value: "Automatic threat recognition" },
      { label: "Illumination", value: "LED array" },
      { label: "Interface", value: "Ethernet, USB" },
      { label: "IP Rating", value: "IP68" },
    ],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2016/10/09/19/19/coins-1726618_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2016/10/09/19/19/coins-1726618_1280.jpg",
      "https://cdn.pixabay.com/photo/2019/03/21/15/51/chatbot-4071274_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/06/14/08/20/map-2401458_1280.jpg"
    ],
    sizes: [],
    rating: 4.6,
    reviews: 23,
    inStock: true
  },
  // Printing & Personalization Equipment
  { 
    id: "card-printer-station",
    name: "Card Printer Station", 
    category: "Printing & Personalization Equipment",
    icon: Printer, 
    desc: "Thermal and DTC card printing station with secure encoding capabilities", 
    fullDesc: "Card Printer Station combines thermal and DTC printing technologies with secure encoding capabilities. High-quality output and bulk printing support make it ideal for card personalization.",
    price: 85999, 
    features: ["Thermal/DTC", "High Quality", "Secure Encoding", "Bulk Printing"],
    specs: [
      { label: "Print Technology", value: "Thermal + DTC" },
      { label: "Resolution", value: "300dpi" },
      { label: "Speed", value: "Up to 200 cards/hour" },
      { label: "Encoding", value: "Magnetic stripe, chip" },
      { label: "Interface", value: "USB, Ethernet" },
      { label: "Dimensions", value: "400x300x250mm" },
    ],
    badge: "Popular",
    image: "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
    ],
    sizes: [],
    rating: 4.7,
    reviews: 145,
    inStock: true
  },
  { 
    id: "hologram-laminator",
    name: "Hologram Laminator Pro", 
    category: "Printing & Personalization Equipment",
    icon: Shield, 
    desc: "Professional hologram application system with precise alignment", 
    fullDesc: "Hologram Laminator Pro provides precise hologram application with multi-layer lamination capabilities. Quality control features ensure consistent, professional results.",
    price: 125999, 
    features: ["Precise Alignment", "Multi-layer", "High Speed", "Quality Control"],
    specs: [
      { label: "Lamination Speed", value: "Up to 1000 cards/hour" },
      { label: "Temperature Control", value: "±1°C accuracy" },
      { label: "Hologram Types", value: "2D/3D, Kinegram, OVD" },
      { label: "Card Thickness", value: "0.76mm standard" },
      { label: "Power", value: "220V AC" },
      { label: "Dimensions", value: "600x400x300mm" },
    ],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
    ],
    sizes: [],
    rating: 4.5,
    reviews: 67,
    inStock: true
  },
  { 
    id: "inkjet-card-system",
    name: "Inkjet Card System", 
    category: "Printing & Personalization Equipment",
    icon: Printer, 
    desc: "PVC card printing system with inkjet technology for high-volume personalization", 
    fullDesc: "Inkjet Card System delivers high-volume card personalization with edge-to-edge printing capabilities. Custom color support and high-resolution output meet demanding production requirements.",
    price: 185999, 
    features: ["Inkjet Technology", "High Volume", "Custom Colors", "Edge-to-Edge"],
    specs: [
      { label: "Print Technology", value: "Piezo inkjet" },
      { label: "Resolution", value: "1440x1440 dpi" },
      { label: "Speed", value: "Up to 500 cards/hour" },
      { label: "Colors", value: "CMYK + white" },
      { label: "Media", value: "PVC, PET, composite" },
      { label: "Interface", value: "Ethernet, USB" },
    ],
    badge: "Industrial",
    image: "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg"
    ],
    sizes: [],
    rating: 4.6,
    reviews: 89,
    inStock: true
  },
  { 
    id: "chip-encoding-device",
    name: "Chip Encoding Device", 
    category: "Printing & Personalization Equipment",
    icon: Cpu, 
    desc: "Smart card chip programming device with secure writing capabilities", 
    fullDesc: "Chip Encoding Device provides secure smart card chip programming with support for multiple protocols. High-speed encoding and contact/contactless capabilities ensure efficient personalization.",
    price: 35999, 
    features: ["Secure Writing", "Multi-Protocol", "High Speed", "Contact/Contactless"],
    specs: [
      { label: "Supported Chips", value: "MIFARE, DESFire, NTAG" },
      { label: "Encoding Speed", value: "Up to 100 cards/minute" },
      { label: "Interface", value: "USB 2.0" },
      { label: "Security", value: "Encrypted communication" },
      { label: "Power", value: "USB powered" },
      { label: "Dimensions", value: "150x100x50mm" },
    ],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2017/06/14/08/20/map-2401458_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2017/06/14/08/20/map-2401458_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg"
    ],
    sizes: [],
    rating: 4.4,
    reviews: 123,
    inStock: true
  },
  // Software & Platforms
  { 
    id: "access-control-suite",
    name: "Access Control Management Suite", 
    category: "Software & Platforms",
    icon: Shield, 
    desc: "Comprehensive access control software platform with centralized management, real-time monitoring, and advanced reporting capabilities.", 
    fullDesc: "Access Control Management Suite provides enterprise-grade access control software with centralized management, real-time monitoring, and advanced reporting. Features include multi-site management, role-based permissions, audit trails, and integration with existing security systems.",
    price: 99999, 
    features: ["Centralized Management", "Real-time Monitoring", "Advanced Reporting", "Multi-site Support"],
    specs: [
      { label: "User Capacity", value: "Unlimited users" },
      { label: "Concurrent Connections", value: "Up to 10,000" },
      { label: "Database", value: "SQL Server/PostgreSQL" },
      { label: "API Support", value: "RESTful APIs" },
      { label: "Deployment", value: "On-premise/Cloud" },
      { label: "OS Support", value: "Windows Server/Linux" },
    ],
    badge: "Enterprise",
    image: "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
    ],
    sizes: [],
    rating: 4.8,
    reviews: 89,
    inStock: true
  },
  { 
    id: "identity-platform",
    name: "Identity Management Platform", 
    category: "Software & Platforms",
    icon: KeyRound, 
    desc: "Unified identity management solution with SSO, MFA, and directory integration for seamless user authentication.", 
    fullDesc: "Identity Management Platform delivers unified identity management with single sign-on, multi-factor authentication, and directory integration. Supports LDAP, Active Directory, SAML, and OAuth protocols for enterprise-wide identity management.",
    price: 149999, 
    features: ["Single Sign-On", "Multi-Factor Auth", "Directory Integration", "User Provisioning"],
    specs: [
      { label: "Protocols", value: "SAML, OAuth, LDAP" },
      { label: "MFA Methods", value: "SMS, Email, TOTP, Biometric" },
      { label: "Directory Support", value: "AD, LDAP, Azure AD" },
      { label: "API Endpoints", value: "REST/GraphQL" },
      { label: "Scalability", value: "Enterprise-grade" },
      { label: "Compliance", value: "GDPR, HIPAA, SOX" },
    ],
    badge: "Premium",
    image: "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg"
    ],
    sizes: [],
    rating: 4.7,
    reviews: 156,
    inStock: true
  },
  { 
    id: "visitor-software",
    name: "Visitor Management Software", 
    category: "Software & Platforms",
    icon: Users, 
    desc: "Digital visitor management system with pre-registration, badge printing, and host notifications for secure facility access.", 
    fullDesc: "Visitor Management Software streamlines visitor check-in processes with digital registration, badge printing, and host notifications. Features include NDA management, watchlist screening, and comprehensive reporting for security compliance.",
    price: 49999, 
    features: ["Digital Registration", "Badge Printing", "Host Notifications", "Watchlist Screening"],
    specs: [
      { label: "Visitor Capacity", value: "Unlimited" },
      { label: "Badge Formats", value: "PVC, Paper, Digital" },
      { label: "Integration", value: "Access Control, CCTV" },
      { label: "Mobile App", value: "iOS/Android" },
      { label: "Reporting", value: "Real-time analytics" },
      { label: "Compliance", value: "Security standards" },
    ],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
    ],
    sizes: [],
    rating: 4.6,
    reviews: 78,
    inStock: true
  },
  { 
    id: "time-attendance-pro",
    name: "Time Attendance System Pro", 
    category: "Software & Platforms",
    icon: Clock, 
    desc: "Advanced time tracking software with biometric integration, shift management, and payroll integration for workforce management.", 
    fullDesc: "Time Attendance System Pro offers comprehensive workforce management with biometric integration, flexible shift scheduling, and payroll system integration. Features include leave management, overtime calculation, and detailed attendance reports.",
    price: 74999, 
    features: ["Biometric Integration", "Shift Management", "Payroll Integration", "Leave Management"],
    specs: [
      { label: "Employee Capacity", value: "Unlimited" },
      { label: "Biometric Types", value: "Fingerprint, Face, Card" },
      { label: "Shift Types", value: "Flexible, Fixed, Rotating" },
      { label: "Reports", value: "Daily, Weekly, Monthly" },
      { label: "Integration", value: "Payroll, HRMS" },
      { label: "Mobile Access", value: "Web/Mobile app" },
    ],
    badge: "Popular",
    image: "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
    ],
    sizes: [],
    rating: 4.5,
    reviews: 134,
    inStock: true
  },
  // Security & Surveillance
  { 
    id: "video-surveillance",
    name: "Video Surveillance System", 
    category: "Security & Surveillance",
    icon: Camera, 
    desc: "Complete video surveillance solution with AI analytics, 4K cameras, and cloud storage for comprehensive security monitoring.", 
    fullDesc: "Video Surveillance System provides enterprise-grade security monitoring with AI-powered analytics, 4K resolution cameras, and secure cloud storage. Features include motion detection, facial recognition, and real-time alerts.",
    price: 199999, 
    features: ["4K Resolution", "AI Analytics", "Cloud Storage", "Motion Detection"],
    specs: [
      { label: "Camera Resolution", value: "4K UHD" },
      { label: "AI Features", value: "Face recognition, Motion detection" },
      { label: "Storage", value: "Cloud + Local (up to 30 days)" },
      { label: "Connectivity", value: "PoE, WiFi, Ethernet" },
      { label: "Night Vision", value: "Up to 50m" },
      { label: "Mobile App", value: "iOS/Android" },
    ],
    badge: "Complete System",
    image: "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg"
    ],
    sizes: [],
    rating: 4.7,
    reviews: 203,
    inStock: true
  },
  { 
    id: "intrusion-detection",
    name: "Intrusion Detection System", 
    category: "Security & Surveillance",
    icon: Shield, 
    desc: "Advanced intrusion detection with perimeter sensors, glass break detection, and instant alert system for facility protection.", 
    fullDesc: "Intrusion Detection System delivers comprehensive perimeter protection with advanced sensors, glass break detection, and instant alert capabilities. Features include zone-based monitoring, false alarm reduction, and integration with security systems.",
    price: 89999, 
    features: ["Perimeter Sensors", "Glass Break Detection", "Instant Alerts", "Zone Monitoring"],
    specs: [
      { label: "Sensor Types", value: "Motion, Door, Glass break" },
      { label: "Zones", value: "Up to 64 zones" },
      { label: "Response Time", value: "<1 second" },
      { label: "False Alarm Rate", value: "<1%" },
      { label: "Integration", value: "CCTV, Access control" },
      { label: "Power", value: "Battery/Wired" },
    ],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
    ],
    sizes: [],
    rating: 4.6,
    reviews: 145,
    inStock: true
  },
  { 
    id: "perimeter-security",
    name: "Perimeter Security Solution", 
    category: "Security & Surveillance",
    icon: Fence, 
    desc: "Comprehensive perimeter security with fence sensors, ground radar, and automated response systems for facility protection.", 
    fullDesc: "Perimeter Security Solution provides complete perimeter protection with advanced fence sensors, ground radar detection, and automated response systems. Features include intrusion classification, environmental monitoring, and integration with security operations centers.",
    price: 299999, 
    features: ["Fence Sensors", "Ground Radar", "Automated Response", "Environmental Monitoring"],
    specs: [
      { label: "Detection Range", value: "Up to 500m" },
      { label: "Sensor Types", value: "Vibration, Tension, Seismic" },
      { label: "Classification", value: "Human, Vehicle, Animal" },
      { label: "Weather Resistance", value: "IP67 rated" },
      { label: "Integration", value: "SOC, CCTV, Alarms" },
      { label: "Power", value: "Solar/Wired" },
    ],
    badge: "Industrial",
    image: "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
    ],
    sizes: [],
    rating: 4.8,
    reviews: 67,
    inStock: true
  },
  { 
    id: "security-dashboard",
    name: "Security Monitoring Dashboard", 
    category: "Security & Surveillance",
    icon: Monitor, 
    desc: "Centralized security monitoring dashboard with real-time alerts, incident management, and comprehensive reporting tools.", 
    fullDesc: "Security Monitoring Dashboard offers centralized security management with real-time monitoring, incident tracking, and comprehensive reporting. Features include customizable dashboards, automated alerts, and integration with multiple security systems.",
    price: 124999, 
    features: ["Real-time Monitoring", "Incident Management", "Custom Dashboards", "Automated Alerts"],
    specs: [
      { label: "Concurrent Users", value: "Up to 50" },
      { label: "System Integration", value: "CCTV, Access, Alarms" },
      { label: "Alert Types", value: "Email, SMS, Push" },
      { label: "Reports", value: "Scheduled/Custom" },
      { label: "Storage", value: "Cloud/Local" },
      { label: "API Access", value: "RESTful APIs" },
    ],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg"
    ],
    sizes: [],
    rating: 4.5,
    reviews: 89,
    inStock: true
  },
  // Integration & APIs
  { 
    id: "api-gateway",
    name: "API Gateway & Integration Hub", 
    category: "Integration & APIs",
    icon: Network, 
    desc: "Enterprise API gateway with microservices orchestration, rate limiting, and comprehensive API management capabilities.", 
    fullDesc: "API Gateway & Integration Hub provides enterprise-grade API management with microservices orchestration, advanced security, and comprehensive monitoring. Features include rate limiting, request transformation, and developer portal.",
    price: 179999, 
    features: ["Microservices Orchestration", "Rate Limiting", "API Security", "Developer Portal"],
    specs: [
      { label: "API Calls/Month", value: "Unlimited" },
      { label: "Rate Limiting", value: "Configurable" },
      { label: "Security", value: "OAuth, JWT, API Keys" },
      { label: "Monitoring", value: "Real-time metrics" },
      { label: "Caching", value: "Redis integration" },
      { label: "Deployment", value: "Cloud/On-premise" },
    ],
    badge: "Enterprise",
    image: "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
    ],
    sizes: [],
    rating: 4.7,
    reviews: 123,
    inStock: true
  },
  { 
    id: "system-connector",
    name: "Third-Party System Connector", 
    category: "Integration & APIs",
    icon: Link, 
    desc: "Universal system integration platform supporting 200+ enterprise applications with pre-built connectors and custom adapters.", 
    fullDesc: "Third-Party System Connector enables seamless integration between enterprise systems with pre-built connectors for popular applications. Features include data mapping, transformation, and real-time synchronization.",
    price: 89999, 
    features: ["200+ Connectors", "Data Mapping", "Real-time Sync", "Custom Adapters"],
    specs: [
      { label: "Pre-built Connectors", value: "200+" },
      { label: "Data Formats", value: "JSON, XML, CSV" },
      { label: "Sync Frequency", value: "Real-time/Batch" },
      { label: "Error Handling", value: "Automatic retry" },
      { label: "Monitoring", value: "Dashboard/Logs" },
      { label: "Security", value: "Encrypted transfer" },
    ],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
    ],
    sizes: [],
    rating: 4.6,
    reviews: 156,
    inStock: true
  },
  { 
    id: "cloud-integration",
    name: "Cloud Integration Platform", 
    category: "Integration & APIs",
    icon: Cloud, 
    desc: "Multi-cloud integration platform with hybrid deployment support, data synchronization, and automated failover capabilities.", 
    fullDesc: "Cloud Integration Platform delivers seamless multi-cloud integration with hybrid deployment support and automated failover. Features include data synchronization, workload balancing, and comprehensive monitoring across cloud environments.",
    price: 249999, 
    features: ["Multi-Cloud Support", "Hybrid Deployment", "Automated Failover", "Data Synchronization"],
    specs: [
      { label: "Cloud Providers", value: "AWS, Azure, GCP" },
      { label: "Deployment", value: "Hybrid/Multi-cloud" },
      { label: "Failover Time", value: "<30 seconds" },
      { label: "Data Transfer", value: "Encrypted" },
      { label: "Monitoring", value: "24/7 dashboard" },
      { label: "Scalability", value: "Auto-scaling" },
    ],
    badge: "Premium",
    image: "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg"
    ],
    sizes: [],
    rating: 4.8,
    reviews: 78,
    inStock: true
  },
  { 
    id: "data-analytics",
    name: "Data Analytics & Reporting", 
    category: "Integration & APIs",
    icon: BarChart, 
    desc: "Advanced analytics platform with real-time dashboards, predictive analytics, and automated report generation for business intelligence.", 
    fullDesc: "Data Analytics & Reporting platform provides comprehensive business intelligence with real-time dashboards, predictive analytics, and automated reporting. Features include data visualization, trend analysis, and custom KPI tracking.",
    price: 149999, 
    features: ["Real-time Dashboards", "Predictive Analytics", "Automated Reports", "Data Visualization"],
    specs: [
      { label: "Data Sources", value: "SQL, NoSQL, APIs" },
      { label: "Visualization", value: "Charts, Graphs, Maps" },
      { label: "Reports", value: "PDF, Excel, Email" },
      { label: "Real-time Updates", value: "Yes" },
      { label: "User Access", value: "Role-based" },
      { label: "Mobile Support", value: "Responsive design" },
    ],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
    ],
    sizes: [],
    rating: 4.5,
    reviews: 134,
    inStock: true
  },
  // Mobile & Wearable Solutions
  { 
    id: "mobile-access-app",
    name: "Mobile Access App Pro", 
    category: "Mobile & Wearable Solutions",
    icon: Smartphone, 
    desc: "Professional mobile access control application with NFC, Bluetooth, and QR code support for seamless facility access.", 
    fullDesc: "Mobile Access App Pro provides professional mobile access control with support for NFC, Bluetooth, and QR codes. Features include offline access, emergency protocols, and integration with enterprise mobility management.",
    price: 24999, 
    features: ["NFC/Bluetooth/QR", "Offline Access", "Emergency Protocols", "EMM Integration"],
    specs: [
      { label: "Platforms", value: "iOS/Android" },
      { label: "Access Methods", value: "NFC, BLE, QR" },
      { label: "Offline Duration", value: "30 days" },
      { label: "Security", value: "Biometric + PIN" },
      { label: "Integration", value: "MDM, EMM" },
      { label: "Updates", value: "OTA updates" },
    ],
    badge: "Popular",
    image: "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
    ],
    sizes: [],
    rating: 4.6,
    reviews: 203,
    inStock: true
  },
  { 
    id: "wearable-badge",
    name: "Wearable Security Badge", 
    category: "Mobile & Wearable Solutions",
    icon: Watch, 
    desc: "Smart wearable badge with NFC access, health monitoring, and emergency alert capabilities for employee safety.", 
    fullDesc: "Wearable Security Badge combines access control with employee safety features including health monitoring and emergency alerts. Features include NFC access, fall detection, and real-time location tracking.",
    price: 7999, 
    features: ["NFC Access", "Health Monitoring", "Emergency Alerts", "Fall Detection"],
    specs: [
      { label: "Battery Life", value: "7 days" },
      { label: "Sensors", value: "Heart rate, Accelerometer" },
      { label: "Connectivity", value: "BLE 5.0, NFC" },
      { label: "Water Resistance", value: "IP67" },
      { label: "Display", value: "OLED screen" },
      { label: "Alerts", value: "Vibration, LED" },
    ],
    badge: "New",
    image: "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg"
    ],
    sizes: [],
    rating: 4.4,
    reviews: 145,
    inStock: true
  },
  { 
    id: "smartphone-auth",
    name: "Smartphone Authentication", 
    category: "Mobile & Wearable Solutions",
    icon: Lock, 
    desc: "Mobile authentication platform using device biometrics, location verification, and behavioral analysis for secure access.", 
    fullDesc: "Smartphone Authentication platform leverages device capabilities for secure access control using biometrics, location verification, and behavioral analysis. Features include risk-based authentication and seamless user experience.",
    price: 49999, 
    features: ["Device Biometrics", "Location Verification", "Behavioral Analysis", "Risk-Based Auth"],
    specs: [
      { label: "Biometric Types", value: "Fingerprint, Face, Voice" },
      { label: "Risk Scoring", value: "Real-time analysis" },
      { label: "Location Accuracy", value: "GPS + WiFi" },
      { label: "Behavioral Factors", value: "Typing, Movement" },
      { label: "Integration", value: "SSO, MFA" },
      { label: "Compliance", value: "FIDO2, WebAuthn" },
    ],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
    ],
    sizes: [],
    rating: 4.7,
    reviews: 67,
    inStock: true
  },
  { 
    id: "nfc-mobile-wallet",
    name: "NFC Mobile Wallet", 
    category: "Mobile & Wearable Solutions",
    icon: CreditCard, 
    desc: "Secure mobile wallet application with NFC payments, digital credentials, and contactless access for modern workplaces.", 
    fullDesc: "NFC Mobile Wallet provides secure digital credential management with NFC payments and contactless access. Features include encrypted storage, biometric protection, and seamless integration with enterprise systems.",
    price: 14999, 
    features: ["NFC Payments", "Digital Credentials", "Contactless Access", "Encrypted Storage"],
    specs: [
      { label: "NFC Standards", value: "ISO 14443" },
      { label: "Security", value: "Hardware encryption" },
      { label: "Biometric Auth", value: "Fingerprint/Face" },
      { label: "Backup", value: "Cloud sync" },
      { label: "Platforms", value: "iOS/Android" },
      { label: "Integration", value: "Payment gateways" },
    ],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
    ],
    sizes: [],
    rating: 4.5,
    reviews: 89,
    inStock: true
  },
  // Enterprise Solutions
  { 
    id: "enterprise-suite",
    name: "Enterprise Security Suite", 
    category: "Enterprise Solutions",
    icon: Shield, 
    desc: "Comprehensive enterprise security platform combining access control, surveillance, and threat intelligence for complete protection.", 
    fullDesc: "Enterprise Security Suite delivers unified security management combining physical access control, video surveillance, and threat intelligence. Features include centralized management, automated responses, and comprehensive compliance reporting.",
    price: 499999, 
    features: ["Unified Security", "Threat Intelligence", "Automated Response", "Compliance Reporting"],
    specs: [
      { label: "Modules", value: "Access, CCTV, Alarms" },
      { label: "Sites Supported", value: "Unlimited" },
      { label: "Users", value: "Enterprise-scale" },
      { label: "Integration", value: "200+ systems" },
      { label: "Analytics", value: "AI-powered" },
      { label: "Compliance", value: "GDPR, HIPAA, SOX" },
    ],
    badge: "Complete Solution",
    image: "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg"
    ],
    sizes: [],
    rating: 4.9,
    reviews: 123,
    inStock: true
  },
  { 
    id: "multi-site-system",
    name: "Multi-Site Management System", 
    category: "Enterprise Solutions",
    icon: Building, 
    desc: "Centralized management platform for multiple facilities with distributed access control and unified security policies.", 
    fullDesc: "Multi-Site Management System enables centralized control of multiple facilities with distributed access control and unified security policies. Features include hierarchical management, remote administration, and comprehensive reporting.",
    price: 299999, 
    features: ["Multi-Site Control", "Distributed Access", "Unified Policies", "Remote Administration"],
    specs: [
      { label: "Sites Supported", value: "Up to 1000" },
      { label: "Concurrent Users", value: "100,000+" },
      { label: "Database", value: "Distributed SQL" },
      { label: "Replication", value: "Real-time sync" },
      { label: "Backup", value: "Automated" },
      { label: "Disaster Recovery", value: "Built-in" },
    ],
    badge: "Enterprise",
    image: "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
    ],
    sizes: [],
    rating: 4.8,
    reviews: 156,
    inStock: true
  },
  { 
    id: "compliance-platform",
    name: "Compliance & Audit Platform", 
    category: "Enterprise Solutions",
    icon: FileCheck, 
    desc: "Automated compliance monitoring and audit platform with regulatory reporting and risk assessment capabilities.", 
    fullDesc: "Compliance & Audit Platform automates regulatory compliance monitoring with automated reporting and risk assessment. Features include policy management, audit trails, and compliance dashboards for multiple regulatory frameworks.",
    price: 199999, 
    features: ["Automated Compliance", "Regulatory Reporting", "Risk Assessment", "Audit Trails"],
    specs: [
      { label: "Regulations", value: "GDPR, HIPAA, SOX, PCI" },
      { label: "Reports", value: "Automated generation" },
      { label: "Risk Scoring", value: "Real-time assessment" },
      { label: "Audit Logs", value: "Immutable records" },
      { label: "Dashboards", value: "Executive/Operational" },
      { label: "Alerts", value: "Policy violations" },
    ],
    badge: "Premium",
    image: "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
    ],
    sizes: [],
    rating: 4.7,
    reviews: 78,
    inStock: true
  },
  { 
    id: "scalable-access",
    name: "Scalable Access Control", 
    category: "Enterprise Solutions",
    icon: TrendingUp, 
    desc: "Highly scalable access control system designed for growing enterprises with modular architecture and cloud scalability.", 
    fullDesc: "Scalable Access Control system grows with your enterprise needs through modular architecture and cloud scalability. Features include horizontal scaling, microservices design, and seamless upgrades without downtime.",
    price: 399999, 
    features: ["Modular Architecture", "Cloud Scalability", "Horizontal Scaling", "Zero Downtime"],
    specs: [
      { label: "Concurrent Users", value: "1M+" },
      { label: "Throughput", value: "100K transactions/sec" },
      { label: "Scalability", value: "Auto-scaling" },
      { label: "Architecture", value: "Microservices" },
      { label: "Deployment", value: "Hybrid cloud" },
      { label: "Uptime", value: "99.99% SLA" },
    ],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg"
    ],
    sizes: [],
    rating: 4.6,
    reviews: 134,
    inStock: true
  },
  // Cloud & Infrastructure
  { 
    id: "cloud-security",
    name: "Cloud Security Platform", 
    category: "Cloud & Infrastructure",
    icon: Cloud, 
    desc: "Comprehensive cloud security solution with threat detection, data protection, and compliance management for enterprise cloud environments.", 
    fullDesc: "Cloud Security Platform delivers enterprise-grade cloud security with advanced threat detection, data encryption, and compliance management. Features include multi-cloud support, automated security policies, and real-time monitoring across AWS, Azure, and GCP environments.",
    price: 199999, 
    features: ["Threat Detection", "Data Protection", "Compliance Management", "Multi-Cloud Support"],
    specs: [
      { label: "Cloud Providers", value: "AWS, Azure, GCP" },
      { label: "Security Features", value: "Encryption, DLP, IAM" },
      { label: "Compliance", value: "GDPR, HIPAA, SOC 2" },
      { label: "Monitoring", value: "24/7 real-time" },
      { label: "Integration", value: "200+ cloud services" },
      { label: "Deployment", value: "SaaS/On-premise" },
    ],
    badge: "Cloud-Native",
    image: "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
    ],
    sizes: [],
    rating: 4.7,
    reviews: 89,
    inStock: true
  },
  { 
    id: "infrastructure-monitoring",
    name: "Infrastructure Monitoring", 
    category: "Cloud & Infrastructure",
    icon: Server, 
    desc: "Real-time infrastructure monitoring and alerting system for servers, networks, and applications with predictive analytics.", 
    fullDesc: "Infrastructure Monitoring provides comprehensive real-time monitoring and alerting for enterprise infrastructure. Features include predictive analytics, automated incident response, and detailed performance metrics for servers, networks, and applications.",
    price: 149999, 
    features: ["Real-time Monitoring", "Predictive Analytics", "Alert Management", "Performance Metrics"],
    specs: [
      { label: "Monitored Assets", value: "Unlimited" },
      { label: "Alert Channels", value: "Email, SMS, Slack" },
      { label: "Retention", value: "1 year data" },
      { label: "Dashboards", value: "Customizable" },
      { label: "APIs", value: "RESTful/GraphQL" },
      { label: "Scalability", value: "Auto-scaling" },
    ],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg"
    ],
    sizes: [],
    rating: 4.5,
    reviews: 156,
    inStock: true
  },
  { 
    id: "data-center-solutions",
    name: "Data Center Solutions", 
    category: "Cloud & Infrastructure",
    icon: Database, 
    desc: "Complete data center infrastructure management with virtualization, backup, and disaster recovery capabilities.", 
    fullDesc: "Data Center Solutions offers complete infrastructure management for modern data centers with advanced virtualization, automated backup, and comprehensive disaster recovery. Features include workload balancing, energy optimization, and compliance reporting.",
    price: 299999, 
    features: ["Virtualization", "Backup & Recovery", "Disaster Recovery", "Infrastructure Management"],
    specs: [
      { label: "Virtualization", value: "VMware, Hyper-V, KVM" },
      { label: "Backup Types", value: "Full, Incremental, Differential" },
      { label: "RTO/RPO", value: "Configurable" },
      { label: "Scalability", value: "Petabyte scale" },
      { label: "Compliance", value: "ISO 27001, NIST" },
      { label: "Monitoring", value: "Real-time dashboards" },
    ],
    badge: "Enterprise",
    image: "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
    ],
    sizes: [],
    rating: 4.8,
    reviews: 78,
    inStock: true
  },
  { 
    id: "network-security-gateway",
    name: "Network Security Gateway", 
    category: "Cloud & Infrastructure",
    icon: Shield, 
    desc: "Advanced network security gateway with firewall, intrusion prevention, and secure VPN capabilities for enterprise networks.", 
    fullDesc: "Network Security Gateway provides advanced network protection with next-generation firewall, intrusion prevention, and secure VPN capabilities. Features include SSL inspection, application control, and comprehensive threat intelligence integration.",
    price: 179999, 
    features: ["Advanced Firewall", "Intrusion Prevention", "Secure VPN", "Traffic Monitoring"],
    specs: [
      { label: "Throughput", value: "10 Gbps" },
      { label: "Concurrent Connections", value: "10 million" },
      { label: "VPN Tunnels", value: "10,000" },
      { label: "Threat Intelligence", value: "Real-time feeds" },
      { label: "Logging", value: "SIEM integration" },
      { label: "HA Support", value: "Active-Active/Passive" },
    ],
    badge: null,
    image: "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
    ],
    sizes: [],
    rating: 4.6,
    reviews: 134,
    inStock: true
  }
];

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  
  const product = allProducts.find(p => p.id === productId);
  
  if (!product) {
    notFound();
  }

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('additional');
  const [isWishlisted, setIsWishlisted] = useState(false);

  const priceDisplay = product.priceType === 'monthly' 
    ? `₹${product.price.toLocaleString()}/mo` 
    : `₹${product.price.toLocaleString()}`;

  // Get related products (same category, excluding current)
  const relatedProducts = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="pt-24 min-h-screen bg-white text-foreground">
      
      {/* Breadcrumb */}
      <div className="bg-[#f8f8f8] border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-3 text-sm">
            <Link href="/products" className="text-gray-500 hover:text-primary transition-colors uppercase tracking-wider">Products</Link>
            <span className="text-gray-400">/</span>
            <span className="text-foreground font-medium uppercase tracking-wider">Shop Product</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Images */}
            <FadeIn>
              <div className="space-y-4">
                {/* Main Image */}
                <div className="aspect-square bg-[#f8f8f8] rounded-lg overflow-hidden relative border border-gray-100">
                  <img 
                    src={product.gallery?.[selectedImage] || product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain p-8"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://placehold.co/600x600/f8f8f8/333333?text=' + encodeURIComponent(product.name);
                    }}
                  />
                  {product.badge && (
                    <div className={`absolute top-4 left-4 px-3 py-1 text-xs font-bold ${
                      product.badge === "Best Seller" ? 'bg-[#ee6d31] text-white' :
                      product.badge === "New" ? 'bg-primary text-white' :
                      'bg-[#fed356] text-foreground'
                    }`}>
                      {product.badge}
                    </div>
                  )}
                </div>
                
                {/* Thumbnail Gallery */}
                <div className="flex gap-3 justify-center">
                  {(product.gallery && product.gallery.length > 0 ? product.gallery : [product.image]).map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all bg-[#f8f8f8] ${
                        selectedImage === idx ? 'border-primary' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <img 
                        src={img} 
                        alt="" 
                        className="w-full h-full object-contain p-2" 
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://placehold.co/100x100/f8f8f8/333333?text=Image';
                        }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Right - Details */}
            <FadeIn direction="left">
              <div>
                {/* Product Name */}
                <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {product.name}
                </h1>
                
                {/* Price */}
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-2xl font-bold text-foreground">{priceDisplay}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-400 line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        className={i < Math.floor(product.rating || 4.5) ? 'text-[#fed356] fill-[#fed356]' : 'text-gray-300 fill-gray-300'} 
                      />
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {product.desc}
                </p>

                {/* Size Selector */}
                {product.sizes && product.sizes.length > 0 && (
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-sm font-medium text-foreground">Size</span>
                    <div className="flex gap-2">
                      {product.sizes.map((size, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedSize(size)}
                          className={`px-3 py-1 text-sm rounded border transition-all ${
                            (selectedSize || product.sizes?.[0]) === size
                              ? 'border-foreground bg-foreground text-white'
                              : 'border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quantity & Buy Now */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center border border-gray-300 rounded">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 hover:bg-gray-100 transition-colors text-gray-600"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-10 text-center font-medium">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 hover:bg-gray-100 transition-colors text-gray-600"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  
                  <Link
                    href="/contact"
                    className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 font-semibold text-sm uppercase tracking-wide rounded transition-all ${
                      product.inStock 
                        ? 'bg-foreground text-white hover:bg-foreground/90' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {product.inStock ? 'Buy Now' : 'Out of Stock'}
                  </Link>
                  
                  <button 
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`p-3 border rounded transition-all ${
                      isWishlisted ? 'border-red-500 text-red-500' : 'border-gray-300 text-gray-400 hover:border-gray-400'
                    }`}
                  >
                    <Heart size={18} className={isWishlisted ? 'fill-red-500' : ''} />
                  </button>
                </div>

                {/* Category & Tags */}
                <div className="text-sm text-gray-600 space-y-1 mb-6">
                  <p><span className="text-gray-500">Categories:</span> {product.category}</p>
                  {product.tags && (
                    <p><span className="text-gray-500">Tags:</span> {product.tags?.join(', ')}</p>
                  )}
                </div>

                {/* Social Share */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <span className="text-sm text-gray-500">Share:</span>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-full bg-[#3b5998] text-white flex items-center justify-center hover:opacity-80 transition-opacity">
                      <Facebook size={14} />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-[#1da1f2] text-white flex items-center justify-center hover:opacity-80 transition-opacity">
                      <Twitter size={14} />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-[#0077b5] text-white flex items-center justify-center hover:opacity-80 transition-opacity">
                      <Linkedin size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-8 border-t border-gray-200">
        <div className="container mx-auto px-4">
          {/* Tab Headers */}
          <div className="flex justify-center gap-8 mb-8">
            <button
              onClick={() => setActiveTab('additional')}
              className={`text-sm font-medium pb-2 border-b-2 transition-all ${
                activeTab === 'additional' 
                  ? 'text-[#ee6d31] border-[#ee6d31]' 
                  : 'text-gray-500 border-transparent hover:text-gray-700'
              }`}
            >
              Additional Information
            </button>
            <button
              onClick={() => setActiveTab('description')}
              className={`text-sm font-medium pb-2 border-b-2 transition-all ${
                activeTab === 'description' 
                  ? 'text-[#ee6d31] border-[#ee6d31]' 
                  : 'text-gray-500 border-transparent hover:text-gray-700'
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`text-sm font-medium pb-2 border-b-2 transition-all ${
                activeTab === 'reviews' 
                  ? 'text-[#ee6d31] border-[#ee6d31]' 
                  : 'text-gray-500 border-transparent hover:text-gray-700'
              }`}
            >
              Reviews({product.reviews})
            </button>
          </div>

          {/* Tab Content */}
          <div className="max-w-3xl mx-auto">
            {activeTab === 'additional' && product.specs && (
              <div className="space-y-3">
                {product.specs.map((spec, idx) => (
                  <div key={idx} className="flex border-b border-gray-100 pb-3">
                    <span className="w-1/3 text-sm font-medium text-gray-700">{spec.label}</span>
                    <span className="w-2/3 text-sm text-gray-600">{spec.value}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'description' && (
              <div className="prose prose-sm max-w-none">
                <p className="text-gray-600 leading-relaxed">{product.fullDesc || product.desc}</p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check size={16} className="text-green-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foreground">{product.rating}</div>
                    <div className="flex gap-0.5 justify-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} className={i < Math.floor(product.rating || 4.5) ? 'text-[#fed356] fill-[#fed356]' : 'text-gray-300'} />
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{product.reviews} reviews</div>
                  </div>
                  <div className="flex-1 space-y-1">
                    {[5, 4, 3, 2, 1].map((star) => (
                      <div key={star} className="flex items-center gap-2">
                        <span className="text-xs text-gray-500 w-3">{star}</span>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-[#fed356]" 
                            style={{ width: `${star === 5 ? 70 : star === 4 ? 20 : star === 3 ? 10 : 0}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-500 text-center">Be the first to leave a detailed review!</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px bg-gray-300 flex-1 max-w-[100px]" />
              <h2 className="text-xl font-bold text-foreground">Related Products</h2>
              <div className="h-px bg-gray-300 flex-1 max-w-[100px]" />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((item, idx) => (
                <Link href={`/products/${item.id}`} key={idx} className="group">
                  <div className="relative bg-[#f8f8f8] rounded-lg overflow-hidden mb-3">
                    {item.badge && (
                      <div className={`absolute top-2 left-2 px-2 py-1 text-xs font-bold z-10 ${
                        item.badge === "Best Seller" ? 'bg-[#ee6d31] text-white' :
                        item.badge === "New" ? 'bg-primary text-white' :
                        'bg-[#fed356] text-foreground'
                      }`}>
                        {item.badge}
                      </div>
                    )}
                    <div className="aspect-square">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://placehold.co/300x300/f8f8f8/333333?text=' + encodeURIComponent(item.name);
                        }}
                      />
                    </div>
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-1 group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-0.5 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={10} className={i < Math.floor(item.rating || 4.5) ? 'text-[#fed356] fill-[#fed356]' : 'text-gray-300'} />
                    ))}
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-bold text-foreground">
                      ₹{item.price.toLocaleString()}
                    </span>
                    {item.originalPrice && (
                      <span className="text-xs text-gray-400 line-through">
                        ₹{item.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
