import { JetBrains_Mono, Lora } from 'next/font/google';

import { Providers } from '@/app/providers';
import { Grain } from '@/components/grain';

import '@/styles/globals.css';

import { Metadata } from 'next';

import CurrentlyListening from '@/components/currently-listening';
import { cn } from '@/lib/cn';

const lora = Lora({
  variable: '--font-serif',
  subsets: ['latin']
});

const ibmPlexMono = JetBrains_Mono({
  variable: '--font-mono',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
});

const title = 'joão dematte';
const description = 'exploring human interactivity through UX';

export const metadata: Metadata = {
  title: {
    template: `%s — ${title}`,
    default: title
  },
  description,
  twitter: {
    site: '@joaodematte',
    creator: '@joaodematte',
    card: 'summary_large_image',
    title,
    description
  },
  openGraph: {
    title,
    description,
    url: 'https://joaodematte.com/',
    type: 'website'
  }
};

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
