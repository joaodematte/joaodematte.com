import { JetBrains_Mono, Lora } from 'next/font/google';

import { Providers } from '@/app/providers';
import { Grain } from '@/components/grain';

import '@/styles/globals.css';

import { Metadata } from 'next';

import { sharedMetadata } from '@/app/shared-metadata';
import CurrentlyListening from '@/components/currently-listening';
import { cn } from '@/lib/cn';

const lora = Lora({
  variable: '--font-serif',
  subsets: ['latin']
});

const ibmPlexMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
});

export const metadata: Metadata = sharedMetadata;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(lora.variable, ibmPlexMono.variable)}>
        <CurrentlyListening />
        <Grain />
        <Providers>
          <main className="mx-auto w-full max-w-3xl space-y-6 p-6 md:py-24">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
