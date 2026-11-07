import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { getPageMeta, SITE_URL } from './meta';

function setMeta(selector: string, attr: 'content' | 'href', value: string) {
  document.querySelector(selector)?.setAttribute(attr, value);
}

/** Met à jour titre, description, canonique et Open Graph à chaque changement de page ou de langue. */
export default function SeoManager() {
  const { pathname } = useLocation();
  const { lang } = useLanguage();

  useEffect(() => {
    const meta = getPageMeta(pathname, lang);
    const url = SITE_URL + meta.path;
    document.documentElement.lang = lang === 'fr' ? 'fr-CA' : 'en-CA';
    document.title = meta.title;
    setMeta('meta[name="description"]', 'content', meta.description);
    setMeta('link[rel="canonical"]', 'href', url);
    setMeta('meta[property="og:title"]', 'content', meta.title);
    setMeta('meta[property="og:description"]', 'content', meta.description);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[property="og:locale"]', 'content', lang === 'fr' ? 'fr_CA' : 'en_CA');
  }, [pathname, lang]);

  return null;
}
