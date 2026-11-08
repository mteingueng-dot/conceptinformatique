import { ArrowRight, ArrowUpRight, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from '../i18n/router';
import { useLanguage } from '../i18n/LanguageContext';
import { getServices } from '../data/services';
import { ESTRIE_AREAS, ESTRIE_FAQ } from '../data/estrie';

const dict = {
  fr: {
    kicker: 'Sherbrooke et toute l’Estrie',
    titleA: 'Services informatiques',
    titleB: 'en Estrie',
    intro:
      'Concept Informatique inc. est une firme informatique établie à Sherbrooke. Depuis plus de 17 ans, nous aidons les PME et les organisations de l’Estrie à tirer le meilleur de leurs données et de leurs technologies : logiciels sur mesure, tableaux de bord Power BI, entrepôts de données, soutien TI et cybersécurité, automatisation et intelligence artificielle.',
    ctaPrimary: 'Parler à un expert',
    servicesTitle: 'Nos services pour les entreprises de l’Estrie',
    learnMore: 'En savoir plus',
    areaTitle: 'Zone desservie en Estrie',
    areaText:
      'Nous accompagnons les entreprises de la ville de Sherbrooke et de toutes les MRC de l’Estrie, sur place ou à distance. Nous servons aussi des clients partout au Québec.',
    areaMrc: 'MRC',
    whyTitle: 'Pourquoi une firme de la région?',
    why: [
      { title: 'Proximité', text: 'Une équipe à Sherbrooke, qui peut se déplacer chez vous en Estrie quand la présence sur place fait la différence.' },
      { title: 'Une seule équipe', text: 'Logiciel, données, BI, soutien TI et IA : un seul interlocuteur, de l’analyse au soutien après la mise en production.' },
      { title: 'Par étapes', text: 'Des livraisons courtes, à partir de vos besoins d’affaires, pour voir des résultats rapidement et ajuster en cours de route.' },
    ],
    faqTitle: 'Questions fréquentes',
    ctaTitle: 'Un projet informatique en Estrie?',
    ctaText: 'Décrivez-nous votre situation : nous vous proposons une première piste concrète.',
    ctaButton: 'Nous contacter',
    phone: '514 712-0371',
  },
  en: {
    kicker: 'Sherbrooke and the whole Eastern Townships',
    titleA: 'IT services',
    titleB: 'in the Eastern Townships',
    intro:
      'Concept Informatique inc. is an IT firm based in Sherbrooke. For more than 17 years, we have been helping SMEs and organizations across the Eastern Townships (Estrie) get the most out of their data and technology: custom software, Power BI dashboards, data warehouses, IT support and cybersecurity, automation and artificial intelligence.',
    ctaPrimary: 'Talk to an expert',
    servicesTitle: 'Our services for Eastern Townships businesses',
    learnMore: 'Learn more',
    areaTitle: 'Service area in the Eastern Townships',
    areaText:
      'We work with businesses in the city of Sherbrooke and in every regional county municipality (MRC) of the Eastern Townships, on site or remotely. We also serve clients anywhere in Québec.',
    areaMrc: 'MRC',
    whyTitle: 'Why a local firm?',
    why: [
      { title: 'Proximity', text: 'A team in Sherbrooke that can come to you in the Eastern Townships when being on site makes the difference.' },
      { title: 'One team', text: 'Software, data, BI, IT support and AI: a single point of contact, from analysis to support after go-live.' },
      { title: 'Step by step', text: 'Short deliveries based on your business needs, so you see results quickly and can adjust along the way.' },
    ],
    faqTitle: 'Frequently asked questions',
    ctaTitle: 'An IT project in the Eastern Townships?',
    ctaText: 'Tell us about your situation: we will propose a first, concrete direction.',
    ctaButton: 'Contact us',
    phone: '514-712-0371',
  },
};

const reveal = { initial: { opacity: 0, y: 18 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-60px' } };

export default function EstriePage() {
  const { lang } = useLanguage();
  const t = dict[lang];
  const services = getServices(lang);
  const faq = ESTRIE_FAQ[lang];

  return (
    <div className="pt-20 text-slate-600">
      {/* En-tête */}
      <section className="relative py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-ci-blue-100 bg-white px-4 py-1.5 text-sm font-semibold text-ci-blue-700 shadow-sm">
            <MapPin className="w-4 h-4 text-ci-green-600" /> {t.kicker}
          </p>
          <h1 className="mt-6 font-display text-4xl md:text-6xl font-bold tracking-[-0.04em] text-ci-navy">
            {t.titleA} <span className="text-gradient-ci">{t.titleB}</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed">{t.intro}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link to="/contact/" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-ci-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-ci-blue-600/30 hover:bg-ci-blue-700 transition-colors">
              {t.ctaPrimary} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a href="tel:+15147120371" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 font-semibold text-ci-navy hover:border-ci-blue-200 hover:bg-ci-blue-50 transition-colors">
              <Phone className="w-4 h-4" /> {t.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 border-t border-white/70 bg-white/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-[-0.03em] text-ci-navy mb-10">{t.servicesTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.slug} {...reveal}>
                  <Link to={`/services/${s.slug}/`} className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-ci-blue-200 hover:shadow-[0_25px_50px_-25px_rgba(21,89,209,0.45)]">
                    <Icon className="w-7 h-7 text-ci-blue-600" />
                    <h3 className="mt-4 font-display text-xl font-bold text-ci-navy">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed">{s.tagline}</p>
                    <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ci-blue-600">
                      {t.learnMore} <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Zone desservie */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-[-0.03em] text-ci-navy">{t.areaTitle}</h2>
          <p className="mt-4 max-w-3xl text-lg">{t.areaText}</p>
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ESTRIE_AREAS.map((area) => (
              <li key={area.mrc} className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="font-mono text-[11px] uppercase tracking-widest text-ci-green-600">{t.areaMrc}</p>
                <p className="mt-1 font-bold text-ci-navy">{area.mrc}</p>
                <p className="mt-2 text-sm">{area.towns.join(' · ')}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pourquoi une firme de la région */}
      <section className="py-16 border-t border-white/70 bg-white/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-[-0.03em] text-ci-navy mb-10">{t.whyTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {t.why.map((w) => (
              <div key={w.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-display text-lg font-bold text-ci-navy">{w.title}</h3>
                <p className="mt-2">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-[-0.03em] text-ci-navy mb-8">{t.faqTitle}</h2>
          <div className="space-y-3">
            {faq.map((item) => (
              <details key={item.q} className="group rounded-2xl border border-slate-200 bg-white p-5 open:shadow-sm">
                <summary className="cursor-pointer list-none font-semibold text-ci-navy flex items-start justify-between gap-4">
                  <h3 className="text-base">{item.q}</h3>
                  <span aria-hidden="true" className="text-ci-blue-600 transition-transform group-open:rotate-45 text-xl leading-none">+</span>
                </summary>
                <p className="mt-3 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Appel à l'action */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto rounded-[2rem] border border-white bg-white/70 px-6 py-14 text-center shadow-[0_30px_80px_-40px_rgba(11,31,58,0.4)]">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-[-0.03em] text-ci-navy">{t.ctaTitle}</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg">{t.ctaText}</p>
          <Link to="/contact/" className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-ci-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-ci-blue-600/30 hover:bg-ci-blue-700 transition-colors">
            {t.ctaButton} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
