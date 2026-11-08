import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { getAlternates, getPageMeta, getStructuredData, SITE_URL } from './meta';

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

const altLink = (hreflang: string) => () =>
  Object.assign(document.createElement('link'), { rel: 'alternate', hreflang });

/**
 * Met à jour titre, description, canonique, versions linguistiques (hreflang), Open Graph,
 * indexation et données structurées à chaque changement de page ou de langue.
 * Les pages pré-rendues contiennent déjà les bonnes valeurs.
 */
export default function SeoManager() {
  const { pathname } = useLocation();
  const { lang } = useLanguage();
  const firstView = useRef(true);

  useEffect(() => {
    const meta = getPageMeta(pathname);
    const url = SITE_URL + meta.path;
    const alt = getAlternates(pathname);
    const indexable = !meta.notFound;
    document.documentElement.lang = lang === 'fr' ? 'fr-CA' : 'en-CA';
    document.title = meta.title;
    setMeta('meta[name="description"]', 'content', meta.description);
    setMeta('meta[property="og:title"]', 'content', meta.title);
    setMeta('meta[property="og:description"]', 'content', meta.description);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[property="og:locale"]', 'content', lang === 'fr' ? 'fr_CA' : 'en_CA');

    ensureHeadTag('link[rel="canonical"]', () => Object.assign(document.createElement('link'), { rel: 'canonical' }), indexable)?.setAttribute('href', url);
    ensureHeadTag('link[rel="alternate"][hreflang="fr-CA"]', altLink('fr-CA'), indexable)?.setAttribute('href', alt.fr);
    ensureHeadTag('link[rel="alternate"][hreflang="en-CA"]', altLink('en-CA'), indexable)?.setAttribute('href', alt.en);
    ensureHeadTag('link[rel="alternate"][hreflang="x-default"]', altLink('x-default'), indexable)?.setAttribute('href', alt.fr);

    ensureHeadTag(
      'meta[name="robots"]',
      () => Object.assign(document.createElement('meta'), { name: 'robots', content: 'noindex' }),
      !indexable,
    );

    const data = getStructuredData(pathname);
    const ld = ensureHeadTag(
      'script#ld-page',
      () => Object.assign(document.createElement('script'), { id: 'ld-page', type: 'application/ld+json' }),
      data.length > 0,
    );
    if (ld) ld.textContent = JSON.stringify(data.length === 1 ? data[0] : data);

    // Google Tag Manager : le site change de page sans recharger ; on signale chaque nouvelle page
    // (la première est déjà comptée au chargement par GTM). Déclencheur GTM : événement « virtual_page_view ».
    if (firstView.current) {
      firstView.current = false;
    } else {
      const w = window as unknown as { dataLayer?: unknown[] };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({ event: 'virtual_page_view', page_path: meta.path, page_location: url, page_title: meta.title, page_language: lang });
    }
  }, [pathname, lang]);

  return null;
}
