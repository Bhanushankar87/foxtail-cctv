import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/common/FloatingButtons';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://foxtailcctv.com'),
  title: 'Foxtail CCTV Services - Premium IT Infrastructure & Security Solutions',
  description: 'Professional CCTV installation, networking, IT infrastructure, and security solutions for homes and businesses. Expert technicians, affordable pricing, fast response.',
  keywords: 'CCTV installation, network cabling, IT infrastructure, security systems, biometric access control, fire alarm systems, computer repair',
  authors: [{ name: 'Foxtail CCTV Services' }],
  creator: 'Foxtail CCTV Services',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://foxtailcctv.com',
    siteName: 'Foxtail CCTV Services',
    title: 'Foxtail CCTV Services - Premium IT Infrastructure & Security Solutions',
    description: 'Professional CCTV installation, networking, IT infrastructure, and security solutions',
    images: [{
      url: 'https://foxtailcctv.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Foxtail CCTV Services',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foxtail CCTV Services',
    description: 'Premium IT Infrastructure & Security Solutions',
    images: ['https://foxtailcctv.com/og-image.jpg'],
  },
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://foxtailcctv.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Foxtail CCTV Services',
              description: 'Premium IT Infrastructure & Security Solutions Provider',
              url: 'https://foxtailcctv.com',
              telephone: '+919493945379',
              email: 'info@foxtailcctv.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Service Area Coverage',
                addressCountry: 'IN',
              },
              priceRange: '₹₹',
              areaServed: ['Hyderabad', 'Secunderabad', 'Telangana'],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-background text-text-dark`}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
