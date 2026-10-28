import type { Metadata } from 'next';
import './globals.css';
import AeroDock from '@/components/AeroDock';
import BackgroundCurves from '@/components/BackgroundCurves';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Wild — Private Sanctuaries & Wilderness Expeditions',
  description:
    'Embark on an extraordinary journey with Wild. Autonomous floating sanctuaries, overland expedition fleets, and remote architectural retreats across the world\'s most untamed landscapes.',
  openGraph: {
    title: 'Wild — Private Sanctuaries & Expeditions',
    description:
      'Architectural sanctuaries and autonomous expedition rentals in Earth\'s most breathtaking untouched landscapes.',
    images: [
      'https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/726b168c-da47-4682-a255-cc3e02f89bae.jpg',
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;450;500;600;650;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <BackgroundCurves />
        <AeroDock />
        {children}
        <Footer />
        <BackToTop />
        <ScrollReveal />
      </body>
    </html>
  );
}
