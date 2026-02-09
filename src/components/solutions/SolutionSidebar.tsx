'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';

interface SidebarItem {
  label: string;
  path: string;
}

interface SidebarSection {
  title: string;
  items: SidebarItem[];
}

interface SolutionSidebarProps {
  menuTitle?: string;
  sections?: SidebarSection[];
  currentSlug?: string;
}

// Identity & Access Menu
export const identityAccessMenu: SidebarSection[] = [
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
];

// IoT & Robotics Menu
export const iotRoboticsMenu: SidebarSection[] = [
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
];

// Software & Platforms Menu
export const softwarePlatformsMenu: SidebarSection[] = [
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
];

// Hologram Label Printing Menu
export const hologramPrintingMenu: SidebarSection[] = [
  {
    title: 'Holographic Solutions',
    items: [
      { label: '3D Hologram Labels', path: '/solutions/3d-holograms' },
      { label: 'Hot Stamping Foils', path: '/solutions/hot-stamping' },
      { label: 'Tamper Evident Seals', path: '/solutions/tamper-evident' },
      { label: 'Scratch-off Labels', path: '/solutions/scratch-off' },
      { label: 'Transparent Holograms', path: '/solutions/transparent-holograms' },
      { label: 'Dot Matrix Holograms', path: '/solutions/dot-matrix' },
    ]
  },
  {
    title: 'Security Printing',
    items: [
      { label: 'UV Invisible Ink Printing', path: '/solutions/uv-printing' },
      { label: 'Micro-text Security', path: '/solutions/micro-text' },
      { label: 'Track & Trace QR Labels', path: '/solutions/track-trace' },
      { label: 'Pharmaceutical Labels', path: '/solutions/pharma-labels' },
      { label: 'Brand Protection Seals', path: '/solutions/brand-protection' },
    ]
  }
];

// Helper function to determine menu based on slug
function getMenuFromSlug(slug?: string): { title: string; sections: SidebarSection[] } {
  if (!slug) return { title: 'Solutions', sections: identityAccessMenu };
  
  // Identity & Access solutions (identityAccessMenu)
  const identitySlugs = [
    'biometric-authentication', 'rfid-smart-card', 'visitor-management', 'time-attendance', 
    'role-based-access', 'mobile-access', 'lift-access', 'canteen-management', 'library-access',
    'gate-automation', 'turnstiles', 'face-recognition', 'rfid-lockers', 'qr-access', 'intrusion-monitoring',
    'card-printing', 'inkjet-cards', 'card-design', 'chip-encoding', 'holographic-lamination', 'event-badges',
    'rfid-cards', 'nfc-cards', 'rfid-tags', 'rfid-inlays', 'rfid-encoding', 'rfid-readers'
  ];
  
  // IoT & Robotics solutions (iotRoboticsMenu)
  const iotSlugs = [
    'iot-sensors', 'iot-rfid-readers', 'embedded-boards', 'robotics-kits', 'power-supply', 'displays-relays',
    'driving-test-robotics', 'info-kiosks', 'biometric-kiosks', 'queue-management', 'delivery-robots', 'digital-devices',
    'vehicle-access-anpr', 'windshield-tags', 'anpr', 'boom-barriers-iot', 'parking-access', 'visitor-vehicle', 'uvss'
  ];
  
  // Software & Platforms solutions (softwarePlatformsMenu)
  const softwareSlugs = [
    'tms', 'vms-software', 'park-system', 'race-management', 'bar-council', 'smart-attendance',
    'access-software', 'rto-software', 'rfid-dashboard', 'citizen-enrollment',
    'aadhaar-kyc', 'dl-rc-issuance', 'automated-test-tracks', 'border-control', 'one-identity', 'governance-cards',
    'web-development', 'ecommerce', 'ui-ux', 'seo', 'graphic-design', 'digital-marketing'
  ];
  
  // Hologram & Security Printing solutions (hologramPrintingMenu)
  const hologramSlugs = [
    '3d-holograms', 'hot-stamping', 'tamper-evident', 'scratch-off', 'transparent-holograms', 'dot-matrix',
    'uv-printing', 'micro-text', 'track-trace', 'pharma-labels', 'brand-protection'
  ];

  if (identitySlugs.includes(slug)) return { title: 'Identity & Access', sections: identityAccessMenu };
  if (iotSlugs.includes(slug)) return { title: 'IoT & Robotics', sections: iotRoboticsMenu };
  if (softwareSlugs.includes(slug)) return { title: 'Software', sections: softwarePlatformsMenu };
  if (hologramSlugs.includes(slug)) return { title: 'Hologram Printing', sections: hologramPrintingMenu };

  return { title: 'Solutions', sections: identityAccessMenu };
}

export function SolutionSidebar({ menuTitle, sections, currentSlug }: SolutionSidebarProps) {
  const pathname = usePathname();
  
  // If sections are provided, use them; otherwise derive from slug
  const menu = sections ? { title: menuTitle || 'Solutions', sections } : getMenuFromSlug(currentSlug);
  const finalTitle = menuTitle || menu.title;
  const finalSections = sections || menu.sections;

  return (
    <aside className="w-full lg:w-1/4 flex-shrink-0 order-2 lg:order-1">
      <div className="sticky top-28 bg-[#1e293b]/50 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-6 text-ids-blue font-bold uppercase tracking-wider text-sm border-b border-white/10 pb-4">
          <Menu size={16} />
          {finalTitle} Menu
        </div>
        <div className="space-y-8">
          {finalSections.map((section, idx) => (
            <div key={idx}>
              <h3 className="font-bold text-white mb-3 text-sm">{section.title}</h3>
              <ul className="space-y-1">
                {section.items.map((item, i) => {
                  const isActive = pathname === item.path;
                  return (
                    <li key={i}>
                      <Link
                        href={item.path}
                        className={`block text-sm py-2 px-3 rounded-lg transition-all ${
                          isActive
                            ? 'bg-white/10 text-white font-bold border-l-2 border-ids-blue'
                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
