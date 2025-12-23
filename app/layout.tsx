import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { doctorConfig } from '@/lib/data/doctor-config';
import { generatePhysicianSchema, generateLocalBusinessSchema } from '@/lib/seo/schema';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : null,
  title: {
    default: doctorConfig.seo.defaultTitle,
    template: `%s | ${doctorConfig.clinic.name}`,
  },
  description: doctorConfig.seo.defaultDescription,
  keywords: doctorConfig.seo.keywords,
  authors: [{ name: doctorConfig.personal.name }],
  creator: doctorConfig.personal.name,
  publisher: doctorConfig.clinic.name,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    alternateLocale: ['en_US'],
    url: '/',
    siteName: doctorConfig.clinic.name,
    title: doctorConfig.seo.defaultTitle,
    description: doctorConfig.seo.defaultDescription,
    images: [
      {
        url: doctorConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: doctorConfig.clinic.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: doctorConfig.seo.defaultTitle,
    description: doctorConfig.seo.defaultDescription,
    images: [doctorConfig.seo.ogImage],
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const physicianSchema = generatePhysicianSchema();
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <html lang="he" dir="rtl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
