import { useEffect, useState } from 'react';
import { Link } from '../i18n/router';
import { useLanguage } from '../i18n/LanguageContext';

/*
 * Bandeau de consentement aux témoins (Loi 25, Québec).
 * Google Tag Manager / Google Analytics ne sont chargés qu'après « Accepter » (voir index.html : window.ciLoadGtm).
 * Le choix est conservé dans le navigateur ; le lien « Gestion des témoins » du pied de page rouvre le bandeau.
 */

export const CONSENT_KEY = 'ci-consent';
export const OPEN_CONSENT_EVENT = 'ci-open-consent';

type Choice = 'granted' | 'denied';

const dict = {
  fr: {
    title: 'Votre vie privée',
    text: 'Avec votre accord, nous utilisons des témoins de mesure d’audience (Google Analytics) pour comprendre comment le site est utilisé et l’améliorer. Aucune donnée n’est recueillie à cette fin si vous refusez. Vous pouvez changer d’avis à tout moment avec le lien « Gestion des témoins » en bas de page.',
    policy: 'Politique de confidentialité',
    accept: 'Accepter',
    refuse: 'Refuser',
    label: 'Consentement aux témoins',
  },
  en: {
    title: 'Your privacy',
    text: 'With your consent, we use audience measurement cookies (Google Analytics) to understand how the site is used and improve it. No data is collected for this purpose if you decline. You can change your mind at any time with the “Cookie settings” link at the bottom of the page.',
    policy: 'Privacy policy',
    accept: 'Accept',
    refuse: 'Decline',
    label: 'Cookie consent',
  },
};

function readChoice(): Choice | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === 'granted' || v === 'denied' ? v : null;
  } catch {
    return null;
  }
}

export default function CookieConsent() {
  const { lang } = useLanguage();
  const t = dict[lang];
  // Rien au pré-rendu ni avant le montage : le choix n'est connu que dans le navigateur
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (readChoice() === null) setOpen(true);
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_CONSENT_EVENT, reopen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
  }, []);

  const decide = (choice: Choice) => {
    const previous = readChoice();
    try {
      localStorage.setItem(CONSENT_KEY, choice);
    } catch {
      // stockage indisponible : le choix vaut pour cette visite seulement
    }
    const w = window as unknown as { ciLoadGtm?: () => void; gtag?: (...args: unknown[]) => void };
    if (choice === 'granted') {
      w.ciLoadGtm?.();
    } else if (previous === 'granted') {
      // Retrait du consentement : on coupe la mesure, on efface les témoins Google Analytics (_ga…)
      // et on recharge la page pour décharger Google Analytics
      w.gtag?.('consent', 'update', { analytics_storage: 'denied' });
      const host = window.location.hostname.replace(/^www\./, '');
      document.cookie.split(';').map((c) => c.split('=')[0].trim()).filter((n) => n.startsWith('_ga')).forEach((name) => {
        for (const domain of ['', `; domain=${host}`, `; domain=.${host}`]) {
          document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`;
        }
      });
      window.location.reload();
      return;
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div role="dialog" aria-modal="false" aria-label={t.label} className="fixed inset-x-0 bottom-0 z-[60] p-3 sm:p-5">
      <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_20px_60px_-20px_rgba(11,31,58,0.45)] sm:flex sm:items-end sm:gap-6">
        <div className="flex-1">
          <p className="font-display text-base font-bold text-ci-navy">{t.title}</p>
          <p className="mt-1 text-sm leading-relaxed text-slate-600">
            {t.text}{' '}
            <Link to="/privacy/" className="font-semibold text-ci-blue-600 underline-offset-2 hover:underline">
              {t.policy}
            </Link>
          </p>
        </div>
        <div className="mt-4 flex shrink-0 gap-3 sm:mt-0">
          <button
            type="button"
            onClick={() => decide('denied')}
            className="flex-1 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-ci-navy transition-colors hover:border-ci-navy sm:flex-none"
          >
            {t.refuse}
          </button>
          <button
            type="button"
            onClick={() => decide('granted')}
            className="flex-1 rounded-xl bg-ci-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ci-blue-700 sm:flex-none"
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
