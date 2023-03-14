import { useI18n } from '@/context/i18n';

export default function LocaleChanger() {
  const { locale, setLocale } = useI18n();

  const handleChangeLocale = () => {
    const newLocale = locale === 'en_US' ? 'pt_BR' : 'en_US';
    setLocale(newLocale);

    localStorage.setItem('locale', newLocale);
  };

  return (
    <button
      type="button"
      onClick={handleChangeLocale}
      className="focusable absolute px-3 rounded-md bg-zinc-900 transition hover:bg-zinc-800 py-2 top-5 right-5"
    >
      {locale === 'en_US' ? '🇧🇷' : '🇺🇸'}
    </button>
  );
}
