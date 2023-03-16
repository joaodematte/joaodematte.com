'use client';

import Settings from '@/components/Settings';
import Resume from '@/components/sections/Resume';
import Whoami from '@/components/sections/Whoami';
import Spotify from '@/components/Spotify';
import { I18nProvider, Locale, useI18n } from '@/context/i18n';
import { ThemeProvider, useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';

function HomeContent() {
  const { setTheme } = useTheme();
  const { setLocale } = useI18n();

  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    const locale = localStorage.getItem('locale');

    if (theme) setTheme(theme);
    if (locale) setLocale(locale as Locale);

    setLoaded(true);

    return () => {
      setLoaded(false);
    };
  }, []);

  if (!loaded) return null;

  return (
    <>
      <Settings />
      <main className="w-full max-w-2xl mx-auto pt-24 pb-8 space-y-24">
        <Whoami />
        <Resume />
      </main>
      <footer className="w-full max-w-2xl mx-auto">
        <hr className="w-full border-t border-zinc-150 dark:border-zinc-800" />
        <div className="py-6">
          <Spotify />
        </div>
      </footer>
    </>
  );
}

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <I18nProvider>
        <HomeContent />
      </I18nProvider>
    </ThemeProvider>
  );
}
