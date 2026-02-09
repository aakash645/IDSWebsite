import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://idssmarttech.com';
  
  // Main pages
  const mainPages = [
    '',
    '/products',
    '/company',
    '/team',
    '/governance',
    '/contact',
    '/identity-access',
    '/iot-robotics',
    '/software-platforms',
    '/hologram-printing',
  ];

  // Solution pages
  const solutionPages = [
    // Identity & Access Management
    '/solutions/biometric-authentication',
    '/solutions/rfid-smart-card',
    '/solutions/visitor-management',
    '/solutions/time-attendance',
    '/solutions/role-based-access',
    '/solutions/mobile-access',
    '/solutions/lift-access',
    '/solutions/canteen-management',
    '/solutions/library-access',
    // Access Control & Automation
    '/solutions/gate-automation',
    '/solutions/turnstiles',
    '/solutions/face-recognition',
    '/solutions/rfid-lockers',
    '/solutions/qr-access',
    '/solutions/intrusion-monitoring',
    // Card Printing & Personalization
    '/solutions/card-printing',
    '/solutions/inkjet-cards',
    '/solutions/card-design',
    '/solutions/chip-encoding',
    '/solutions/holographic-lamination',
    '/solutions/event-badges',
    // RFID & Smart Card Solutions
    '/solutions/rfid-cards',
    '/solutions/nfc-cards',
    '/solutions/rfid-tags',
    '/solutions/rfid-inlays',
    '/solutions/rfid-encoding',
    '/solutions/rfid-readers',
    // IoT & Embedded
    '/solutions/iot-sensors',
    '/solutions/iot-rfid-readers',
    '/solutions/embedded-boards',
    '/solutions/robotics-kits',
    '/solutions/power-supply',
    '/solutions/displays-relays',
    // Robotics & Kiosks
    '/solutions/driving-test-robotics',
    '/solutions/info-kiosks',
    '/solutions/biometric-kiosks',
    '/solutions/queue-management',
    '/solutions/delivery-robots',
    '/solutions/digital-devices',
    // Vehicle Access & ANPR
    '/solutions/vehicle-access-anpr',
    '/solutions/windshield-tags',
    '/solutions/anpr',
    '/solutions/boom-barriers-iot',
    '/solutions/parking-access',
    '/solutions/visitor-vehicle',
    '/solutions/uvss',
    // Software Solutions
    '/solutions/tms',
    '/solutions/vms-software',
    '/solutions/park-system',
    '/solutions/race-management',
    '/solutions/bar-council',
    '/solutions/smart-attendance',
    '/solutions/access-software',
    '/solutions/rto-software',
    '/solutions/rfid-dashboard',
    '/solutions/citizen-enrollment',
    // E-Governance
    '/solutions/aadhaar-kyc',
    '/solutions/dl-rc-issuance',
    '/solutions/automated-test-tracks',
    '/solutions/border-control',
    '/solutions/one-identity',
    '/solutions/governance-cards',
    // Digital Services
    '/solutions/web-development',
    '/solutions/ecommerce',
    '/solutions/ui-ux',
    '/solutions/seo',
    '/solutions/graphic-design',
    '/solutions/digital-marketing',
    // Holographic Solutions
    '/solutions/3d-holograms',
    '/solutions/hot-stamping',
    '/solutions/tamper-evident',
    '/solutions/scratch-off',
    '/solutions/transparent-holograms',
    '/solutions/dot-matrix',
    // Security Printing
    '/solutions/uv-printing',
    '/solutions/micro-text',
    '/solutions/track-trace',
    '/solutions/pharma-labels',
    '/solutions/brand-protection',
  ];

  const currentDate = new Date().toISOString();

  const mainSitemap = mainPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: page === '' ? 1 : 0.8,
  }));

  const solutionSitemap = solutionPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...mainSitemap, ...solutionSitemap];
}
