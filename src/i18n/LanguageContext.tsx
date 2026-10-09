import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type Lang = 'fr' | 'en';

const STORAGE_KEY = 'ci-lang';

function isLang(v: unknown): v is Lang {
  return v === 'fr' || v === 'en';
}

export function getInitialLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return isLang(stored) ? stored : 'fr';
  } catch {
    return 'fr';
  }
}

const META: Record<Lang, { title: string; description: string; locale: string }> = {
  fr: {
    title: 'Concept Informatique inc | Solutions TI à Sherbrooke',
    description:
      'Concept Informatique inc. à Sherbrooke : expert en développement logiciel, Business Intelligence, Data Engineering et automatisation IA pour optimiser votre performance stratégique.',
    locale: 'fr_CA',
  },
  en: {
    title: 'Concept Informatique inc | IT Solutions in Sherbrooke',
    description:
      'Concept Informatique inc. in Sherbrooke: experts in software development, Business Intelligence, Data Engineering and AI automation to optimize your strategic performance.',
    locale: 'en_CA',
  },
};

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  const setLang = useCallback((l: Lang) => {
    if (!isLang(l)) return;
    setLangState(l);
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((prev) => (prev === 'fr' ? 'en' : 'fr'));
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore storage errors
    }
    document.documentElement.lang = lang;
    const meta = META[lang];
    document.title = meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', meta.description);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute('content', meta.title);
    document
      .querySelector('meta[property="og:locale"]')
      ?.setAttribute('content', meta.locale);
  }, [lang]);

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && isLang(e.newValue)) {
        setLangState(e.newValue);
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const value = useMemo(() => ({ lang, setLang, toggleLang }), [lang, setLang, toggleLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}

export function pick<T>(content: { fr: T; en: T }, lang: Lang): T {
  return content[lang];
}
