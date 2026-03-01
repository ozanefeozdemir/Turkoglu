'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from 'react';

import tr from '@/i18n/tr.json';
import en from '@/i18n/en.json';
import de from '@/i18n/de.json';
import ru from '@/i18n/ru.json';

export type Lang = 'tr' | 'en' | 'de' | 'ru';

const translations: Record<Lang, Record<string, unknown>> = { tr, en, de, ru };

export const langMeta: Record<Lang, { label: string; flag: string }> = {
  tr: { label: 'Türkçe', flag: '🇹🇷' },
  en: { label: 'English', flag: '🇬🇧' },
  de: { label: 'Deutsch', flag: '🇩🇪' },
  ru: { label: 'Русский', flag: '🇷🇺' },
};

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Dot-notation lookup: t('nav.home') => translations[lang].nav.home
function lookup(obj: Record<string, unknown>, path: string): string {
  const parts = path.split('.');
  let current: unknown = obj;
  for (const part of parts) {
    if (current && typeof current === 'object' && part in (current as Record<string, unknown>)) {
      current = (current as Record<string, unknown>)[part];
    } else {
      return path; // fallback: return key itself
    }
  }
  return typeof current === 'string' ? current : path;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('tr');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang | null;
    if (saved && saved in translations) {
      setLangState(saved);
    }
    setMounted(true);
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem('lang', l);
    document.documentElement.lang = l;
  }, []);

  const t = useCallback(
    (key: string): string => lookup(translations[lang], key),
    [lang]
  );

  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>;
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    // Fallback for server-side prerendering where providers aren't available
    return {
      lang: 'tr' as Lang,
      setLang: () => {},
      t: (key: string) => lookup(translations.tr, key),
    };
  }
  return ctx;
}
