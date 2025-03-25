import { Lora } from 'next/font/google';

import { Providers } from '@/app/providers';
import { Grain } from '@/components/grain';

import '@/styles/globals.css';

const lora = Lora({
  variable: '--font-serif',
  subsets: ['latin']
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={lora.variable}>
        <Grain />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
