/**
 * Menu Items Configuration
 * Navigation menu structure with mega menu categories
 */

import { MenuItem } from '@/types';

export const MENU_ITEMS: MenuItem[] = [
  {
    name: 'Identity & Access',
    path: '/identity-access',
    description: 'Secure digital identity management and access control systems.',
    icon: 'Shield',
    megaMenu: [
      {
        title: 'Identity & Access Management',
        items: [
          { label: 'Biometric Authentication systems', path: '/solutions/biometric-authentication' },
          { label: 'RFID & Smart Card Solutions', path: '/solutions/rfid-smart-card' },
          { label: 'Visitors & Contractor Management', path: '/solutions/visitor-management' },
          { label: 'Time & Attendance Tracking', path: '/solutions/time-attendance' },
          { label: 'Role-Based Access Management', path: '/solutions/role-based-access' },
          { label: 'Mobile-Based Access Control', path: '/solutions/mobile-access' },
          { label: 'Lift Access Management', path: '/solutions/lift-access' },
          { label: 'Canteen Management System', path: '/solutions/canteen-management' },
          { label: 'Library Access Management System', path: '/solutions/library-access' },
        ]
      },
      {
        title: 'Access Control & Automation',
        items: [
          { label: 'Boom Barrier & Gate Automation', path: '/solutions/gate-automation' },
          { label: 'Turnstiles & Flap Barriers', path: '/solutions/turnstiles' },
          { label: 'Face Recognition Terminals', path: '/solutions/face-recognition' },
          { label: 'RFID Locker & Cabinet Access', path: '/solutions/rfid-lockers' },
          { label: 'Mobile & QR-Based Access', path: '/solutions/qr-access' },
          { label: 'Intrusion & Alert Monitoring', path: '/solutions/intrusion-monitoring' },
        ]
      },
      {
        title: 'Card Printing & Personalization',
        items: [
          { label: 'Thermal & DTC Card Printing', path: '/solutions/card-printing' },
          { label: 'Inkjet PVC & Pre-Inked Cards', path: '/solutions/inkjet-cards' },
          { label: 'Card Design & Personalization', path: '/solutions/card-design' },
          { label: 'Chip Encoding & Secure Writing', path: '/solutions/chip-encoding' },
          { label: 'Holographic Lamination & UV', path: '/solutions/holographic-lamination' },
          { label: 'Event & Access Badges', path: '/solutions/event-badges' },
        ]
      },
      {
        title: 'RFID & Smart Card Solutions',
        items: [
          { label: 'RFID Attendance & Access Cards', path: '/solutions/rfid-cards' },
          { label: 'Dual Interface & NFC Cards', path: '/solutions/nfc-cards' },
          { label: 'RFID Tags, Tokens & Keyfobs', path: '/solutions/rfid-tags' },
          { label: 'RFID Inlays & Windshield Tags', path: '/solutions/rfid-inlays' },
          { label: 'RFID PVC Printing & Encoding', path: '/solutions/rfid-encoding' },
          { label: 'RFID Readers & Gate Integration', path: '/solutions/rfid-readers' },
        ]
      }
    ]
  },
  {
    name: 'IoT & Robotics',
    path: '/iot-robotics',
    description: 'Next-gen internet of things and autonomous robotics solutions.',
    icon: 'Cpu',
    megaMenu: [
      {
        title: 'Components, IoT & Embedded',
        items: [
          { label: 'Sensors & IoT Modules', path: '/solutions/iot-sensors' },
          { label: 'RFID Readers & Modules', path: '/solutions/iot-rfid-readers' },
          { label: 'Embedded Controller Boards', path: '/solutions/embedded-boards' },
          { label: 'Robotics Parts & Dev Kits', path: '/solutions/robotics-kits' },
          { label: 'Power Supply & SMPS Units', path: '/solutions/power-supply' },
          { label: 'Displays, Relays & Interface', path: '/solutions/displays-relays' },
        ]
      },
      {
        title: 'Robotics & Kiosks',
        items: [
          { label: 'Driving Test Track Robotics', path: '/solutions/driving-test-robotics' },
          { label: 'Touch-Based Information Kiosks', path: '/solutions/info-kiosks' },
          { label: 'Biometric & Document Kiosks', path: '/solutions/biometric-kiosks' },
          { label: 'Queue Management Systems', path: '/solutions/queue-management' },
          { label: 'Service Delivery Robots', path: '/solutions/delivery-robots' },
          { label: 'Multi-Function Digital Devices', path: '/solutions/digital-devices' },
        ]
      },
      {
        title: 'Vehicle Access & ANPR',
        items: [
          { label: 'Vehicle Access & ANPR Solutions', path: '/solutions/vehicle-access-anpr' },
          { label: 'RFID Windshield Access Tags', path: '/solutions/windshield-tags' },
          { label: 'Automatic Number Plate Recognition', path: '/solutions/anpr' },
          { label: 'Boom Barrier Integration', path: '/solutions/boom-barriers-iot' },
          { label: 'Parking Lot Access Systems', path: '/solutions/parking-access' },
          { label: 'Visitor Vehicle Management', path: '/solutions/visitor-vehicle' },
          { label: 'Under Vehicle Surveillance (UVSS)', path: '/solutions/uvss' },
        ]
      }
    ]
  },
  {
    name: 'Software & Platforms',
    path: '/software-platforms',
    description: 'Custom enterprise software and scalable cloud platforms.',
    icon: 'Code',
    megaMenu: [
      {
        title: 'Software Solutions & Platforms',
        items: [
          { label: 'Township Management System (TMS)', path: '/solutions/tms' },
          { label: 'Visitor Management System (VMS)', path: '/solutions/vms-software' },
          { label: 'Water & Amusement Park System', path: '/solutions/park-system' },
          { label: 'Race Report & Time Management', path: '/solutions/race-management' },
          { label: 'Bar Council Management System', path: '/solutions/bar-council' },
          { label: 'Smart Attendance Management', path: '/solutions/smart-attendance' },
          { label: 'Access Management Software', path: '/solutions/access-software' },
          { label: 'Driving Test Track & RTO Software', path: '/solutions/rto-software' },
          { label: 'RFID Card Management Dashboard', path: '/solutions/rfid-dashboard' },
          { label: 'Citizen Enrollment Platform', path: '/solutions/citizen-enrollment' },
        ]
      },
      {
        title: 'E-Governance Solutions',
        items: [
          { label: 'Aadhaar-Based Identity & KYC', path: '/solutions/aadhaar-kyc' },
          { label: 'Driving License & RC Issuance', path: '/solutions/dl-rc-issuance' },
          { label: 'Automated Driving Test Tracks', path: '/solutions/automated-test-tracks' },
          { label: 'Border & Immigration Control', path: '/solutions/border-control' },
          { label: 'One Identity, One Verification', path: '/solutions/one-identity' },
          { label: 'RFID-Based Governance Cards', path: '/solutions/governance-cards' },
        ]
      },
      {
        title: 'Digital & Creative Services',
        items: [
          { label: 'Website Development', path: '/solutions/web-development' },
          { label: 'E-Commerce Development', path: '/solutions/ecommerce' },
          { label: 'UI/UX Design', path: '/solutions/ui-ux' },
          { label: 'Search Engine Optimization (SEO)', path: '/solutions/seo' },
          { label: 'Graphic Design', path: '/solutions/graphic-design' },
          { label: 'Digital Marketing and Analytics', path: '/solutions/digital-marketing' },
        ]
      }
    ]
  },
  {
    name: 'Hologram Label Printing',
    path: '/hologram-printing',
    description: 'Advanced security printing and holographic label solutions.',
    icon: 'Printer'
  },
  {
    name: 'Products',
    path: '/products',
    description: 'Explore our range of smart hardware and software products.',
    icon: 'Box',
    megaMenu: [
      {
        title: 'Smart Cards & Credentials',
        items: [
          { label: 'SecureID Pro Smart Card', path: '/products/secureid-pro' },
          { label: 'MobileID Digital Wallet', path: '/products/mobileid-wallet' },
          { label: 'WearID Access Band', path: '/products/wearid-band' },
        ]
      },
      {
        title: 'Access Control',
        items: [
          { label: 'GateKeeper X1 Lock', path: '/products/gatekeeper-x1' },
          { label: 'BioScan 500 Fingerprint', path: '/products/bioscan-500' },
          { label: 'FaceGate Pro Terminal', path: '/products/facegate-pro' },
        ]
      },
      {
        title: 'IoT & Connectivity',
        items: [
          { label: 'IoT Gateway Hub Pro', path: '/products/iot-gateway-hub' },
          { label: 'SmartSensor Suite', path: '/products/smartsensor-suite' },
          { label: 'EdgeCompute AI Node', path: '/products/edgecompute-node' },
        ]
      },
      {
        title: 'Security Printing',
        items: [
          { label: 'HoloPrint 3000 Printer', path: '/products/holoprint-3000' },
          { label: 'SecureLabel Pro Software', path: '/products/securelabel-pro' },
          { label: 'AuthentiSeal Security', path: '/products/authentiseal' },
        ]
      },
      {
        title: 'RFID & Smart Card Systems',
        items: [
          { label: 'RFID Reader Pro Series', path: '/products/rfid-reader-pro' },
          { label: 'Smart Tag Suite', path: '/products/smart-tag-suite' },
          { label: 'RFID Encoder Station', path: '/products/rfid-encoder-station' },
          { label: 'NFC Card Writer', path: '/products/nfc-card-writer' },
        ]
      },
      {
        title: 'Biometric & Authentication Devices',
        items: [
          { label: 'BioKiosk Enterprise', path: '/products/biokiosk-enterprise' },
          { label: 'Face Recognition Terminal X2', path: '/products/face-recognition-x2' },
          { label: 'Fingerprint Scanner Module', path: '/products/fingerprint-scanner-module' },
          { label: 'Iris Recognition Camera', path: '/products/iris-recognition-camera' },
        ]
      },
      {
        title: 'Robotics & Automation Systems',
        items: [
          { label: 'ServiceBot Delivery Unit', path: '/products/servicebot-delivery' },
          { label: 'TestTrack Robotics Kit', path: '/products/testtrack-robotics' },
          { label: 'Automated Barrier System', path: '/products/automated-barrier' },
          { label: 'Queue Management Robot', path: '/products/queue-robot' },
        ]
      },
      {
        title: 'Software & Platforms',
        items: [
          { label: 'Access Control Management Suite', path: '/products/access-control-suite' },
          { label: 'Identity Management Platform', path: '/products/identity-platform' },
          { label: 'Visitor Management Software', path: '/products/visitor-software' },
          { label: 'Time Attendance System Pro', path: '/products/time-attendance-pro' },
        ]
      },
      {
        title: 'Security & Surveillance',
        items: [
          { label: 'Video Surveillance System', path: '/products/video-surveillance' },
          { label: 'Intrusion Detection System', path: '/products/intrusion-detection' },
          { label: 'Perimeter Security Solution', path: '/products/perimeter-security' },
          { label: 'Security Monitoring Dashboard', path: '/products/security-dashboard' },
        ]
      },
      {
        title: 'Integration & APIs',
        items: [
          { label: 'API Gateway & Integration Hub', path: '/products/api-gateway' },
          { label: 'Third-Party System Connector', path: '/products/system-connector' },
          { label: 'Cloud Integration Platform', path: '/products/cloud-integration' },
          { label: 'Data Analytics & Reporting', path: '/products/data-analytics' },
        ]
      },
      {
        title: 'Mobile & Wearable Solutions',
        items: [
          { label: 'Mobile Access App Pro', path: '/products/mobile-access-app' },
          { label: 'Wearable Security Badge', path: '/products/wearable-badge' },
          { label: 'Smartphone Authentication', path: '/products/smartphone-auth' },
          { label: 'NFC Mobile Wallet', path: '/products/nfc-mobile-wallet' },
        ]
      },
      {
        title: 'Enterprise Solutions',
        items: [
          { label: 'Enterprise Security Suite', path: '/products/enterprise-suite' },
          { label: 'Multi-Site Management System', path: '/products/multi-site-system' },
          { label: 'Compliance & Audit Platform', path: '/products/compliance-platform' },
          { label: 'Scalable Access Control', path: '/products/scalable-access' },
        ]
      }
    ]
  },
  {
    name: 'Company',
    path: '/company',
    description: 'Learn about IDS SmartTech, our mission, and our team.',
    icon: 'Users',
    megaMenu: [
      {
        title: 'Corporate Profile',
        items: [
          { label: 'About Us', path: '/company' },
          { label: 'Team @ IDS', path: '/team' },
          { label: 'Corporate Governance', path: '/governance' },
        ]
      },
      {
        title: 'Careers & Culture',
        items: [
          { label: 'Life at IDS', path: '/team' },
          { label: 'Open Positions', path: '/team' },
          { label: 'Internship Program', path: '/company' },
          { label: 'Diversity & Inclusion', path: '/company' },
        ]
      },
      {
        title: 'Media & Insights',
        items: [
          { label: 'Blogs & News', path: '/company' },
          { label: 'Case Studies', path: '/company' },
          { label: 'Press Releases', path: '/company' },
          { label: 'Events & Webinars', path: '/company' },
        ]
      },
      {
        title: 'Contact & Support',
        items: [
          { label: 'Contact Us', path: '/contact' },
          { label: 'Global Locations', path: '/contact' },
          { label: 'Partner Program', path: '/contact' },
          { label: 'Client Support', path: '/contact' },
        ]
      }
    ]
  }
];
