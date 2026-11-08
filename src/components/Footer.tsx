import { useState } from 'react';
import { Link } from '../i18n/router';
import { Link2, Mail, Phone, MapPin } from 'lucide-react';

import { useLanguage } from '../i18n/LanguageContext';
import { getServices } from '../data/services';

const LINKEDIN_URL = 'https://www.linkedin.com/company/concept-informatique-inc';

type Lang = 'fr' | 'en';

const copy: Record<Lang, {
  homeAria: string;
  logoAlt: string;
  description: string;
  linkedinAria: string;
  mailAria: string;
  servicesTitle: string;
  companyTitle: string;
  navHome: string;
  navAbout: string;
  navCareers: string;
  navContact: string;
  contactTitle: string;
  rights: string;
  privacy: string;
  terms: string;
}> = {
  fr: {
    homeAria: 'Concept Informatique – Accueil',
    logoAlt: 'Logo Concept Informatique',
    description: "Partenaire stratégique en transformation numérique, spécialisé dans l'exploitation des données et le développement logiciel sur mesure. Services informatiques à Sherbrooke et partout en Estrie.",
    linkedinAria: 'LinkedIn – Concept Informatique',
    mailAria: 'Courriel – Concept Informatique',
    servicesTitle: 'Services',
    companyTitle: 'Entreprise',
    navHome: 'Accueil',
    navAbout: 'À propos',
    navCareers: 'Carrières',
    navContact: 'Contact',
    contactTitle: 'Coordonnées',
    rights: 'Tous droits réservés.',
    privacy: 'Confidentialité',
    terms: 'Conditions',
  },
  en: {
    homeAria: 'Concept Informatique – Home',
    logoAlt: 'Concept Informatique logo',
    description: 'Strategic digital transformation partner, specialized in data leverage and custom software development. IT services in Sherbrooke and across the Eastern Townships.',
    linkedinAria: 'LinkedIn – Concept Informatique',
    mailAria: 'Email – Concept Informatique',
    servicesTitle: 'Services',
    companyTitle: 'Company',
    navHome: 'Home',
    navAbout: 'About',
    navCareers: 'Careers',
    navContact: 'Contact',
    contactTitle: 'Contact details',
    rights: 'All rights reserved.',
    privacy: 'Privacy',
    terms: 'Terms',
  },
};

export default function Footer() {
  const { lang } = useLanguage();
  const t = copy[lang];
  const services = getServices(lang);
  const [currentYear] = useState<number>(() => new Date().getFullYear());

  const linkClass = 'text-sm text-slate-600 transition-colors hover:text-ci-blue-600';

  return (
    <footer id="footer-root-v2n7m1k4" className="relative border-t border-slate-200 bg-slate-50 text-slate-700">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-ci-blue-600 via-ci-blue-500 to-ci-green-500" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-14">
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" aria-label={t.homeAria} className="inline-block">
              <div data-role="logo" className="flex items-center gap-3">
                <img src="/logo-concept-informatique-mark.webp" width="204" height="132" alt={t.logoAlt} className="h-11 w-auto object-contain" />
                <span className="text-xl font-extrabold tracking-tight text-ci-navy">
                  Concept <span className="text-ci-green-600">Informatique</span>
                </span>
              </div>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-slate-600">{t.description}</p>
            <div className="flex gap-2">
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label={t.linkedinAria} className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-colors hover:border-ci-blue-200 hover:text-ci-blue-600">
                <Link2 aria-hidden="true" className="w-4 h-4" />
              </a>
              <a href="mailto:finances@conceptinformatique.net" aria-label={t.mailAria} className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-colors hover:border-ci-blue-200 hover:text-ci-blue-600">
                <Mail aria-hidden="true" className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h2 className="mb-5 font-sans text-sm font-bold uppercase tracking-wider text-ci-navy">{t.servicesTitle}</h2>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}/`} className={linkClass}>{s.shortTitle}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="mb-5 font-sans text-sm font-bold uppercase tracking-wider text-ci-navy">{t.companyTitle}</h2>
            <ul className="space-y-3">
              {[
                { name: t.navHome, path: '/' },
                { name: t.navAbout, path: '/about/' },
                { name: t.navCareers, path: '/careers/' },
                { name: t.navContact, path: '/contact/' },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className={linkClass}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="mb-5 font-sans text-sm font-bold uppercase tracking-wider text-ci-navy">{t.contactTitle}</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <MapPin className="mt-0.5 w-4 h-4 shrink-0 text-ci-green-600" />
                <span>Sherbrooke, QC</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <Phone className="w-4 h-4 shrink-0 text-ci-green-600" />
                <a href="tel:+15147120371" className="hover:text-ci-blue-600 transition-colors">(514) 712-0371</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <Mail className="w-4 h-4 shrink-0 text-ci-green-600" />
                <a href="mailto:finances@conceptinformatique.net" className="break-all hover:text-ci-blue-600 transition-colors">finances@conceptinformatique.net</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 md:flex-row">
          <p className="text-xs text-slate-500">&copy; {currentYear} Concept Informatique inc. {t.rights}</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy/" className="text-xs text-slate-500 transition-colors hover:text-ci-blue-600">{t.privacy}</Link>
            <Link to="/terms/" className="text-xs text-slate-500 transition-colors hover:text-ci-blue-600">{t.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
