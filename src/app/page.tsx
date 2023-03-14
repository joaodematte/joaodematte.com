'use client';

import LocaleChanger from '@/components/LocaleChanger';
import Resume from '@/components/sections/Resume';
import Whoami from '@/components/sections/Whoami';
import Spotify from '@/components/Spotify';
import { I18nProvider } from '@/context/i18n';

export default function Home() {
  return (
    <I18nProvider>
      <LocaleChanger />
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
    </I18nProvider>
  );
}
