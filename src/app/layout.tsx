import type { Metadata } from 'next';
import { Geist_Mono, Inter } from 'next/font/google';

import '@/styles/globals.css';

import { Noise } from '@/components/noise';
import { cn } from '@/lib/utils';

const fontSans = Inter({
  variable: '--font-sans',
  subsets: ['latin']
});

const fontMono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'João Dematte — @joaodematte',
  description:
    'Self-taught interaction engineer obsessed with details and interfaces.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(fontSans.variable, fontMono.variable)}>
        {children}
        <Noise />
      </body>
    </html>
  );
}
