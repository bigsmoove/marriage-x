import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Revitalize Your Marriage | The Marriage Corner',
  description: 'Discover proven strategies to strengthen your connection, reignite the spark, and build the marriage you\'ve always dreamed of. Get your free guide today!',
  keywords: 'marriage tips, relationship advice, marriage guide, strengthen marriage, marriage help',
  authors: [{ name: 'Chuck from The Marriage Corner' }],
  openGraph: {
    title: 'Revitalize Your Marriage | The Marriage Corner',
    description: 'Discover proven strategies to strengthen your connection and build the marriage you\'ve always dreamed of.',
    url: process.env.NEXT_PUBLIC_APP_URL,
    siteName: 'The Marriage Corner',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Revitalize Your Marriage',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Revitalize Your Marriage | The Marriage Corner',
    description: 'Discover proven strategies to strengthen your connection and build the marriage you\'ve always dreamed of.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
