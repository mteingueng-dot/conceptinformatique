import { ArrowRight, Compass } from 'lucide-react';
import { Link } from '../i18n/router';
import { useLanguage } from '../i18n/LanguageContext';

const dict = {
  fr: {
    code: 'Erreur 404',
    title: 'Page introuvable',
    text: "L'adresse demandée n'existe pas ou a été déplacée. Voici quelques pages utiles pour continuer.",
    home: "Retour à l'accueil",
    links: [
      { label: 'Nos services', to: '/services/' },
      { label: 'Carrières', to: '/careers/' },
      { label: 'Nous joindre', to: '/contact/' },
    ],
  },
  en: {
    code: 'Error 404',
    title: 'Page not found',
    text: 'The address you requested does not exist or has moved. Here are a few useful pages to continue.',
    home: 'Back to home',
    links: [
      { label: 'Our services', to: '/services/' },
      { label: 'Careers', to: '/careers/' },
      { label: 'Contact us', to: '/contact/' },
    ],
  },
};

export default function NotFoundPage() {
  const { lang } = useLanguage();
  const t = dict[lang];

  return (
    <section className="relative min-h-[70vh] pt-32 pb-24 flex items-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-ci-blue-600 text-white shadow-lg shadow-ci-blue-600/30">
          <Compass className="w-7 h-7" />
        </span>
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-ci-green-600">{t.code}</p>
        <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold tracking-[-0.04em] text-ci-navy">{t.title}</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-slate-600">{t.text}</p>
        <Link
          to="/"
          className="group mt-10 inline-flex items-center gap-2 rounded-xl bg-ci-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-ci-blue-600/30 hover:bg-ci-blue-700 transition-colors"
        >
          {t.home} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {t.links.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="inline-flex rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-ci-navy hover:border-ci-blue-200 hover:text-ci-blue-600 transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
