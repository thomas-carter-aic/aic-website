import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Applied Innovations Corporation - AI Consulting & Transformation',
    template: '%s | Applied Innovations Corporation',
  },
  description: 'Enterprise AI consulting, transformation, and enablement services helping businesses implement AI effectively and safely.',
  keywords: ['AI consulting', 'AI transformation', 'enterprise AI', 'AI enablement', 'AI implementation', 'business AI', 'AI strategy'],
  authors: [{ name: 'Applied Innovations Corporation' }],
  creator: 'Applied Innovations Corporation',
  publisher: 'Applied Innovations Corporation',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://appliedinnovations.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://appliedinnovations.ai',
    title: 'Applied Innovations Corporation - AI Consulting & Transformation',
    description: 'Enterprise AI consulting, transformation, and enablement services helping businesses implement AI effectively and safely.',
    siteName: 'Applied Innovations Corporation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Applied Innovations Corporation - AI Consulting & Transformation',
    description: 'Enterprise AI consulting, transformation, and enablement services helping businesses implement AI effectively and safely.',
    creator: '@AppliedInnovCorp',
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
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
