import '@/styles/globals.css';
import clsx from 'clsx';
import { Metadata } from 'next';

import { Inter } from 'next/font/google';

export const metadata: Metadata = {
  title: {
    default: 'joaodematte.com',
    template: '%s — joaodematte.com'
  },
  description: 'A performance-obsessed software engineer.',
  openGraph: {
    title: 'joaodematte.com',
    description: 'A performance-obsessed software engineer.',
    url: 'https://www.joaodematte.com',
    siteName: 'joaodematte.com',
    images: [
      {
        url: 'https://www.joaodematte.com/me.jpeg',
        width: 800,
        height: 800
      }
    ],
    locale: 'en-US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      'index': true,
      'follow': true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    title: 'joaodematte.com',
    card: 'summary_large_image'
  },
  icons: {
    shortcut: '/favicon.ico'
  }
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx('bg-zinc-900 text-zinc-300 px-4', inter.className)}>{children}</body>
    </html>
  );
}
