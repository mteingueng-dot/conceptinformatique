import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { getPageMeta, getStructuredData, SITE_URL } from './meta';

function setMeta(selector: string, attr: 'content' | 'href', value: string) {
  document.querySelector(selector)?.setAttribute(attr, value);
}

/** Crée ou retire une balise du <head> selon `wanted`. */
function ensureHeadTag(selector: string, create: () => HTMLElement, wanted: boolean): HTMLElement | null {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (wanted && !el) {
    el = create();
    document.head.appendChild(el);
  } else if (!wanted && el) {
    el.remove();
    el = null;
  }
  return el;
}

/**
 * Met à jour titre, description, canonique, Open Graph, indexation et données structurées
 * à chaque changement de page ou de langue (les pages pré-rendues ont déjà les bonnes valeurs).
 */
export default function SeoManager() {
  const { pathname } = useLocation();
  const { lang } = useLanguage();

  useEffect(() => {
    const meta = getPageMeta(pathname, lang);
    const url = SITE_URL + meta.path;
    document.documentElement.lang = lang === 'fr' ? 'fr-CA' : 'en-CA';
    document.title = meta.title;
    setMeta('meta[name="description"]', 'content', meta.description);
    setMeta('meta[property="og:title"]', 'content', meta.title);
    setMeta('meta[property="og:description"]', 'content', meta.description);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[property="og:locale"]', 'content', lang === 'fr' ? 'fr_CA' : 'en_CA');

    const canonical = ensureHeadTag(
      'link[rel="canonical"]',
      () => Object.assign(document.createElement('link'), { rel: 'canonical' }),
      !meta.notFound,
    );
    canonical?.setAttribute('href', url);

    ensureHeadTag(
      'meta[name="robots"]',
      () => Object.assign(document.createElement('meta'), { name: 'robots', content: 'noindex' }),
      Boolean(meta.notFound),
    );

    const data = getStructuredData(pathname, lang);
    const ld = ensureHeadTag(
      'script#ld-page',
      () => Object.assign(document.createElement('script'), { id: 'ld-page', type: 'application/ld+json' }),
      data.length > 0,
    );
    if (ld) ld.textContent = JSON.stringify(data.length === 1 ? data[0] : data);
  }, [pathname, lang]);

  return null;
}
