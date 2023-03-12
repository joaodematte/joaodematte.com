import '@/styles/globals.css';
import clsx from 'clsx';

import { Inter } from 'next/font/google';

export const metadata = {
  title: 'joaodematte.com',
  description: 'A performance-obsessed software engineer.'
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx('bg-zinc-900 text-zinc-300 px-4', inter.className)}>{children}</body>
    </html>
  );
}
