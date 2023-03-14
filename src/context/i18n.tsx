import { createContext, useContext, useState } from 'react';
import TRANSLATIONS from '@/utils/translations';

type Locale = 'en_US' | 'pt_BR';

export interface i18nContext {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  translations: Record<string, string>;
}

interface i18nProvider {
  children: React.ReactNode;
}

const i18nContext = createContext<i18nContext>({} as i18nContext);

export function I18nProvider({ children }: i18nProvider) {
  const [locale, setLocale] = useState<Locale>('en_US');

  return (
    <i18nContext.Provider value={{ locale, setLocale, translations: TRANSLATIONS[locale] }}>
      {children}
    </i18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(i18nContext);
}

export default i18nContext;
