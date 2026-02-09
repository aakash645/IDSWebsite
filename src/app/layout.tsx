import type { Metadata } from 'next';
import { Inter, Nunito_Sans, Poppins } from 'next/font/google';
import '@/styles/globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

import { DynamicTitle } from '@/components/layout/DynamicTitle';

const poppins = Poppins({
  variable: "--font-poppin",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://idssmarttech.com'),
  title: {
    default: 'IDS SmartTech - Identity & Access Solutions | Biometrics, IoT & Robotics',
    template: '%s | IDS SmartTech'
  },
  description: 'IDS SmartTech delivers cutting-edge identity management, biometric authentication, RFID solutions, IoT systems, and robotics for government and enterprise. Trusted by 500+ organizations across India.',
  keywords: [
    'identity management',
    'access control',
    'biometric authentication',
    'RFID solutions',
    'smart cards',
    'IoT solutions',
    'robotics',
    'hologram printing',
    'e-governance',
    'driving test automation',
    'visitor management system',
    'township management',
    'face recognition',
    'card printing',
    'security solutions',
    'IDS SmartTech',
    'India'
  ],
  authors: [{ name: 'IDS SmartTech', url: 'https://idssmarttech.com' }],
  creator: 'IDS SmartTech',
  publisher: 'IDS SmartTech',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'IDS SmartTech - Identity & Access Solutions',
    description: 'Architecting the secure digital infrastructure for forward-thinking enterprises. Biometric systems, RFID, IoT, and robotics solutions.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://idssmarttech.com',
    siteName: 'IDS SmartTech',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'IDS SmartTech - Identity & Access Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IDS SmartTech - Identity & Access Solutions',
    description: 'Architecting the secure digital infrastructure for forward-thinking enterprises.',
    images: ['/og-image.png'],
    creator: '@idssmarttech',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://idssmarttech.com',
  },
  category: 'Technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="msapplication-TileColor" content="#0f172a" />
      </head>
      {/* <body className="flex flex-col min-h-screen bg-[#0f172a] text-white antialiased font-sans" suppressHydrationWarning> */}
      <body className={`${poppins.className} flex flex-col min-h-screen bg-[#9dd3f8] text-white antialiased`} suppressHydrationWarning>
        <DynamicTitle />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
