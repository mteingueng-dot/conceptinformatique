import { createContext, useCallback, useContext, useMemo, type ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { langFromPath, switchLangPath, type Lang } from './paths';

export type { Lang } from './paths';

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

/**
 * La langue vient de l'adresse (/en/… = anglais, sinon français) : chaque page existe dans les deux
 * langues à sa propre adresse, ce qui permet à Google d'indexer les deux. Changer de langue = aller
 * à la même page dans l'autre langue. Doit être placé à l'intérieur du routeur.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const lang = langFromPath(location.pathname);

  const setLang = useCallback(
    (l: Lang) => {
      if (l === lang) return;
      navigate(switchLangPath(location.pathname, l) + location.search + location.hash);
    },
    [lang, location.pathname, location.search, location.hash, navigate],
  );

  const toggleLang = useCallback(() => setLang(lang === 'fr' ? 'en' : 'fr'), [lang, setLang]);

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
