import { Analytics } from "@vercel/analytics/next";
import { JetBrains_Mono, Lora } from "next/font/google";

import { Providers } from "@/app/providers";
import { Grain } from "@/components/grain";
import { unstable_ViewTransition as ViewTransition } from "react";

import "@/styles/globals.css";

import { Metadata } from "next";

import { sharedMetadata } from "@/app/shared-metadata";
import CurrentlyListening from "@/components/currently-listening";
import { cn } from "@/lib/cn";

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = sharedMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(lora.variable, jetBrainsMono.variable)}>
        <Providers>
          <ViewTransition name="page">
            <main className="relative mx-auto w-full max-w-3xl space-y-6 p-6 md:py-24">
              {children}
            </main>
          </ViewTransition>
        </Providers>

        <CurrentlyListening />
        <Grain />
        <Analytics />
      </body>
    </html>
  );
}
