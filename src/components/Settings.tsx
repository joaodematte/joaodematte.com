import { useI18n } from '@/context/i18n';
import { useTheme } from 'next-themes';

export default function Settings() {
  const { theme, setTheme } = useTheme();
  const { locale, setLocale } = useI18n();

  const handleChangeLocale = () => {
    const newLocale = locale === 'en_US' ? 'pt_BR' : 'en_US';
    setLocale(newLocale);

    localStorage.setItem('locale', newLocale);
  };

  const handleSetTheme = () => {
    console.log({ theme });
    if (theme === 'dark' || theme === 'system') {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    } else {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <div className="absolute top-5 right-5 flex gap-2 5">
      <button
        type="button"
        onClick={handleChangeLocale}
        className="focusable px-3 rounded-md bg-zinc-50 hover:bg-zinc-200 dark:bg-zinc-900 transition dark:hover:bg-zinc-800 py-2"
      >
        {locale === 'en_US' ? '🇧🇷' : '🇺🇸'}
      </button>
      <button
        type="button"
        onClick={handleSetTheme}
        className="focusable px-3 rounded-md bg-zinc-50 hover:bg-zinc-200 dark:bg-zinc-900 transition dark:hover:bg-zinc-800 py-2"
      >
        {theme === 'dark' || theme === 'system' ? '🌕' : '🌑'}
      </button>
    </div>
  );
}
