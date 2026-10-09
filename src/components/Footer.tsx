import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link2, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

import { useLanguage } from '../i18n/LanguageContext';
import { services } from '../data/services';

const LINKEDIN_URL = 'https://www.linkedin.com/company/concept-informatique-inc';

type Lang = 'fr' | 'en';

const copy: Record<Lang, {
  ctaTitleBefore: string;
  ctaTitleHighlight: string;
  ctaTitleAfter: string;
  ctaText: string;
  ctaButton: string;
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
    ctaTitleBefore: 'Prêt à transformer vos données en ',
    ctaTitleHighlight: 'avantage concurrentiel',
    ctaTitleAfter: ' ?',
    ctaText: 'Parlons de votre prochain projet : logiciel sur mesure, BI ou automatisation.',
    ctaButton: 'Nous contacter',
    homeAria: 'Concept Informatique – Accueil',
    logoAlt: 'Logo Concept Informatique',
    description: "Partenaire stratégique en transformation numérique, spécialisé dans l'exploitation des données et le développement logiciel sur mesure à Sherbrooke.",
    linkedinAria: 'LinkedIn – Concept Informatique',
    mailAria: 'Courriel – Concept Informatique',
    servicesTitle: 'Services',
    companyTitle: 'Entreprise',
    navHome: 'Accueil',
    navAbout: 'À Propos',
    navCareers: 'Carrières',
    navContact: 'Contact',
    contactTitle: 'Coordonnées',
    rights: 'Tous droits réservés.',
    privacy: 'Confidentialité',
    terms: 'Conditions',
  },
  en: {
    ctaTitleBefore: 'Ready to turn your data into a ',
    ctaTitleHighlight: 'competitive advantage',
    ctaTitleAfter: '?',
    ctaText: "Let's talk about your next project: custom software, BI or automation.",
    ctaButton: 'Contact us',
    homeAria: 'Concept Informatique – Home',
    logoAlt: 'Concept Informatique logo',
    description: 'Strategic digital transformation partner, specialized in data leverage and custom software development in Sherbrooke.',
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
  const [currentYear] = useState<number>(() => new Date().getFullYear());

  return (
    <footer id="footer-root-v2n7m1k4" className="relative bg-slate-950 text-white overflow-hidden border-t border-white/5">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="mb-16 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="font-sans font-light text-2xl md:text-3xl tracking-tight">
              {t.ctaTitleBefore}<span className="font-display italic text-emerald-400">{t.ctaTitleHighlight}</span>{t.ctaTitleAfter}
            </h3>
            <p className="mt-2 text-slate-400 font-light text-sm">
              {t.ctaText}
            </p>
          </div>
          <Link to="/contact" className="group inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-medium text-sm px-6 py-3 rounded-full transition-colors shrink-0">
            {t.ctaButton} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" aria-label={t.homeAria} className="inline-block">
              <div data-role="logo" className="flex items-center gap-3">
                <img src="/logo-concept-informatique-mark.png" alt={t.logoAlt} className="h-12 w-auto object-contain bg-transparent" />
                <span className="font-sans font-light text-2xl tracking-tight">
                  Concept <span className="font-display italic">Informatique</span>
                </span>
              </div>
            </Link>
            <p className="text-slate-400 font-light text-sm leading-relaxed max-w-xs">
              {t.description}
            </p>
            <div className="flex gap-4">
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label={t.linkedinAria} className="text-slate-500 hover:text-emerald-400 transition-colors"><Link2 aria-hidden="true" className="w-5 h-5" /></a>
              <a href="mailto:finances@conceptinformatique.net" aria-label={t.mailAria} className="text-slate-500 hover:text-emerald-400 transition-colors"><Mail aria-hidden="true" className="w-5 h-5" /></a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-sans font-medium text-lg mb-6 text-white">{t.servicesTitle}</h4>
            <ul className="space-y-4">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-slate-400 hover:text-white transition-colors text-sm font-light">{s.shortTitle}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-sans font-medium text-lg mb-6 text-white">{t.companyTitle}</h4>
            <ul className="space-y-4">
              {[
                { name: t.navHome, path: '/' },
                { name: t.navAbout, path: '/about' },
                { name: t.navCareers, path: '/careers' },
                { name: t.navContact, path: '/contact' },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-slate-400 hover:text-white transition-colors text-sm font-light">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-sans font-medium text-lg mb-6 text-white">{t.contactTitle}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-400 font-light">
                <MapPin className="w-4 h-4 mt-1 text-emerald-400 shrink-0" />
                <span>1590 Rue Kesteman,<br />Sherbrooke, QC, J1R 0Y5</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400 font-light">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+15147120371" className="hover:text-white transition-colors">(514) 712-0371</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400 font-light">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:finances@conceptinformatique.net" className="break-all hover:text-white transition-colors">finances@conceptinformatique.net</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-light">
            &copy; {currentYear} Concept Informatique inc. {t.rights}
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-xs text-slate-500 hover:text-white transition-colors">{t.privacy}</Link>
            <Link to="/terms" className="text-xs text-slate-500 hover:text-white transition-colors">{t.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
