import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Phone, Mail, ShieldCheck, Sparkles, Layers, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { getServices } from '../data/services';

/*
 * Version B de la page d'accueil (proposition de design, à comparer avec la version A).
 * Direction : éditoriale et typographique, vert dominant, schéma de flux de données
 * comme signature visuelle, services en liste plutôt qu'en cartes.
 */

type Testimonial = { quote: string; name: string; role: string };
// À remplir avec de vrais témoignages ; vide = section masquée en production.
const testimonials: { fr: Testimonial[]; en: Testimonial[] } = { fr: [], en: [] };

const fr = {
  kicker: 'Concept Informatique inc. — Sherbrooke, depuis plus de 17 ans',
  titleA: 'Vos données,',
  titleB: 'enfin au travail.',
  intro:
    "Nous structurons, analysons et valorisons vos données, et nous bâtissons les logiciels qui optimisent vos processus d'affaires. Des solutions sur mesure, pensées pour durer.",
  ctaPrimary: 'Planifier une consultation',
  ctaSecondary: 'Nos services',
  flowLabel: 'Des données brutes à la décision',
  flow: [
    { title: 'Collecte', desc: 'Sources, systèmes, API' },
    { title: 'Transformation', desc: 'Pipelines ETL fiables' },
    { title: 'Analyse', desc: 'Modèles, BI et IA' },
    { title: 'Décision', desc: 'Indicateurs clairs' },
  ],
  sources: ['ERP', 'CRM', 'Fichiers', 'API'],
  stats: [
    { value: '17+', label: 'années d’expérience' },
    { value: '7', label: 'domaines d’expertise' },
    { value: '24/7', label: 'surveillance et soutien' },
    { value: '100 %', label: 'solutions sur mesure' },
  ],
  servicesKicker: 'Services',
  servicesTitle: 'Sept expertises, une seule équipe.',
  viewAll: 'Tous les services',
  whyKicker: 'Pourquoi nous',
  whyTitle: 'La technologie au service de la performance stratégique.',
  whyText:
    "Nous harmonisons les outils technologiques les plus avancés avec vos objectifs d'affaires. Nous ne construisons pas que des outils; nous bâtissons des avantages concurrentiels.",
  whyPoints: [
    { title: 'Soutien TI réactif et sécurisé', text: 'Une équipe locale qui connaît vos systèmes.' },
    { title: 'Automatisation intelligente', text: 'L’IA là où elle fait vraiment gagner du temps.' },
    { title: 'Gouvernance des données', text: 'Des données fiables, protégées, prêtes à l’emploi.' },
  ],
  whyLink: 'Notre vision',
  testimonialsKicker: 'Témoignages',
  placeholderBadge: 'Exemple — à remplacer par un vrai témoignage',
  placeholderQuote:
    'Texte du témoignage client à fournir : le contexte du projet, ce que Concept Informatique a apporté et le résultat obtenu.',
  placeholderName: 'Nom du client',
  placeholderRole: 'Poste, entreprise',
  ctaTitle: 'Parlons de votre prochain projet.',
  ctaText: 'Logiciel sur mesure, intelligence d’affaires, données ou automatisation : on vous répond rapidement.',
  ctaButton: 'Nous écrire',
};

const en: typeof fr = {
  kicker: 'Concept Informatique inc. — Sherbrooke, for more than 17 years',
  titleA: 'Your data,',
  titleB: 'finally at work.',
  intro:
    'We structure, analyze and unlock the value of your data, and build the software that optimizes your business processes. Tailored solutions, designed to last.',
  ctaPrimary: 'Book a consultation',
  ctaSecondary: 'Our services',
  flowLabel: 'From raw data to decision',
  flow: [
    { title: 'Collection', desc: 'Sources, systems, APIs' },
    { title: 'Transformation', desc: 'Reliable ETL pipelines' },
    { title: 'Analysis', desc: 'Models, BI and AI' },
    { title: 'Decision', desc: 'Clear indicators' },
  ],
  sources: ['ERP', 'CRM', 'Files', 'APIs'],
  stats: [
    { value: '17+', label: 'years of experience' },
    { value: '7', label: 'areas of expertise' },
    { value: '24/7', label: 'monitoring and support' },
    { value: '100%', label: 'tailored solutions' },
  ],
  servicesKicker: 'Services',
  servicesTitle: 'Seven areas of expertise, one team.',
  viewAll: 'All services',
  whyKicker: 'Why us',
  whyTitle: 'Technology in service of strategic performance.',
  whyText:
    "We align the most advanced technology tools with your business objectives. We don't just build tools; we build competitive advantages.",
  whyPoints: [
    { title: 'Responsive, secure IT support', text: 'A local team that knows your systems.' },
    { title: 'Intelligent automation', text: 'AI where it genuinely saves you time.' },
    { title: 'Data governance', text: 'Reliable, protected, ready-to-use data.' },
  ],
  whyLink: 'Our vision',
  testimonialsKicker: 'Testimonials',
  placeholderBadge: 'Sample — replace with a real testimonial',
  placeholderQuote:
    'Client testimonial to be provided: the project context, what Concept Informatique brought and the outcome.',
  placeholderName: 'Client name',
  placeholderRole: 'Role, company',
  ctaTitle: "Let's talk about your next project.",
  ctaText: 'Custom software, business intelligence, data or automation: we get back to you quickly.',
  ctaButton: 'Write to us',
};

const dict = { fr, en };
const whyIcons = [ShieldCheck, Sparkles, Layers];
const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
};

/* Schéma de flux : 4 sources → pipeline → tableau de bord. Coordonnées SVG 0–1000 × 0–260. */
function DataFlow({ t }: { t: typeof fr }) {
  const sourceY = [40, 100, 160, 220];
  const hubX = 430;
  const hubY = 130;
  return (
    <div className="relative">
      <svg viewBox="0 0 1000 260" className="w-full h-auto" aria-hidden="true">
        <defs>
          <linearGradient id="flow-b" x1="0" x2="1">
            <stop offset="0%" stopColor="#1f6feb" />
            <stop offset="100%" stopColor="#16b364" />
          </linearGradient>
        </defs>
        {sourceY.map((y, i) => (
          <g key={i}>
            <motion.path
              d={`M150,${y} C290,${y} 290,${hubY} ${hubX - 40},${hubY}`}
              fill="none"
              stroke="#b6d3ff"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 + i * 0.1 }}
            />
            <motion.circle
              r="4"
              fill="#1f6feb"
              initial={{ offsetDistance: '0%' }}
              animate={{ offsetDistance: '100%' }}
              transition={{ duration: 2.4, delay: i * 0.6, repeat: Infinity, ease: 'easeInOut' }}
              style={{ offsetPath: `path('M150,${y} C290,${y} 290,${hubY} ${hubX - 40},${hubY}')` }}
            />
            <rect x="40" y={y - 18} width="110" height="36" rx="10" fill="#fff" stroke="#e2e8f0" />
            <text x="95" y={y + 5} textAnchor="middle" className="fill-slate-600" style={{ font: '600 14px "JetBrains Mono", monospace' }}>
              {t.sources[i]}
            </text>
          </g>
        ))}
        {/* Pipeline */}
        <rect x={hubX - 40} y={hubY - 34} width="200" height="68" rx="16" fill="#0b1f3a" />
        <text x={hubX + 60} y={hubY - 4} textAnchor="middle" fill="#fff" style={{ font: '700 16px "Plus Jakarta Sans", sans-serif' }}>
          ETL · Pipeline
        </text>
        <text x={hubX + 60} y={hubY + 18} textAnchor="middle" fill="#34d17f" style={{ font: '500 12px "JetBrains Mono", monospace' }}>
          ● sync
        </text>
        <motion.path
          d={`M${hubX + 160},${hubY} L700,${hubY}`}
          stroke="url(#flow-b)"
          strokeWidth="3"
          strokeDasharray="6 8"
          fill="none"
          animate={{ strokeDashoffset: [0, -28] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
        />
        {/* Tableau de bord */}
        <rect x="700" y="40" width="260" height="180" rx="20" fill="#fff" stroke="#e2e8f0" />
        {[46, 70, 58, 92, 80, 112].map((h, i) => (
          <motion.rect
            key={i}
            x={728 + i * 36}
            width="22"
            rx="5"
            fill={i === 5 ? '#16b364' : '#d9e8ff'}
            initial={{ y: 200, height: 0 }}
            whileInView={{ y: 200 - h, height: h }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 + i * 0.08 }}
          />
        ))}
        <text x="728" y="72" className="fill-slate-500" style={{ font: '600 12px "JetBrains Mono", monospace' }}>
          KPI ↗
        </text>
      </svg>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {t.flow.map((step, i) => (
          <div key={step.title} className="flex items-start gap-3">
            <span className={`mt-0.5 font-mono text-xs font-semibold ${i === 3 ? 'text-ci-green-600' : 'text-ci-blue-600'}`}>0{i + 1}</span>
            <div>
              <p className="font-semibold text-ci-navy">{step.title}</p>
              <p className="text-sm text-slate-500">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HomePageB() {
  const { lang: ctxLang } = useLanguage();
  const lang: 'fr' | 'en' = ctxLang === 'en' ? 'en' : 'fr';
  const t = dict[lang];
  const services = getServices(lang);

  const real = testimonials[lang];
  const items: (Testimonial & { placeholder?: boolean })[] =
    real.length === 0 && import.meta.env.DEV
      ? [{ quote: t.placeholderQuote, name: t.placeholderName, role: t.placeholderRole, placeholder: true }]
      : real;

  return (
    <div className="overflow-hidden bg-[#fbfcfa] text-slate-700">
      {/* Hero éditorial */}
      <section className="relative pt-32 lg:pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs sm:text-sm text-slate-500 mb-8 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-ci-green-500" />
            {t.kicker}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display font-bold text-ci-navy text-[3.2rem] leading-[0.95] sm:text-7xl lg:text-[7.5rem] tracking-[-0.04em]"
          >
            {t.titleA}
            <br />
            <span className="relative inline-block text-ci-green-600">
              {t.titleB}
              <motion.span
                aria-hidden="true"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute left-0 right-0 bottom-1 lg:bottom-3 -z-10 h-3 lg:h-6 origin-left bg-ci-green-100"
              />
            </span>
          </motion.h1>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-6 text-lg md:text-xl leading-relaxed text-slate-600"
            >
              {t.intro}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="lg:col-span-6 flex flex-col sm:flex-row lg:justify-end gap-3"
            >
              <Link to="/contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-ci-navy px-7 py-4 font-semibold text-white transition-colors hover:bg-ci-green-600">
                {t.ctaPrimary} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center rounded-full border border-slate-300 px-7 py-4 font-semibold text-ci-navy transition-colors hover:border-ci-navy">
                {t.ctaSecondary}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Flux de données + chiffres */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...reveal} transition={{ duration: 0.6 }} className="rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400 mb-6">{t.flowLabel}</p>
            <DataFlow t={t} />
          </motion.div>
          <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 border border-slate-200 rounded-[2rem] bg-white divide-x divide-y lg:divide-y-0 divide-slate-200 overflow-hidden">
            {t.stats.map((s) => (
              <div key={s.label} className="p-6 sm:p-8">
                <p className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-ci-navy">{s.value}</p>
                <p className="mt-2 text-sm text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services en liste éditoriale */}
      <section className="py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ci-green-600 mb-3">{t.servicesKicker}</p>
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-[-0.03em] text-ci-navy">{t.servicesTitle}</h2>
            </div>
            <Link to="/services" className="group inline-flex items-center gap-2 font-semibold text-ci-navy hover:text-ci-green-600">
              {t.viewAll} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <ul className="border-t border-slate-200">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.li key={s.slug} {...reveal} transition={{ duration: 0.4, delay: i * 0.04 }}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="group grid grid-cols-[auto_1fr_auto] md:grid-cols-[4rem_1.1fr_1.4fr_auto] items-center gap-4 md:gap-8 border-b border-slate-200 py-6 md:py-8 px-2 md:px-4 transition-colors hover:bg-ci-green-50/60"
                  >
                    <span className="font-mono text-sm text-slate-400">{String(i + 1).padStart(2, '0')}</span>
                    <span className="flex items-center gap-3">
                      <Icon className="hidden md:block w-5 h-5 text-ci-green-600" />
                      <span className="font-display text-xl md:text-2xl font-bold text-ci-navy">{s.title}</span>
                    </span>
                    <span className="hidden md:block text-slate-600">{s.tagline}</span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-ci-navy transition-all group-hover:border-ci-green-600 group-hover:bg-ci-green-600 group-hover:text-white">
                      <ArrowUpRight className="w-5 h-5" />
                    </span>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Pourquoi nous : grille « bento » */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-5">
          <motion.div {...reveal} transition={{ duration: 0.6 }} className="lg:row-span-2 rounded-[2rem] bg-ci-green-600 p-8 sm:p-10 text-white flex flex-col">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ci-green-100 mb-6">{t.whyKicker}</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight text-white">{t.whyTitle}</h2>
            <p className="mt-6 text-ci-green-50/90 leading-relaxed">{t.whyText}</p>
            <Link to="/about" className="group mt-auto pt-10 inline-flex items-center gap-2 font-semibold text-white">
              {t.whyLink} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
          {t.whyPoints.map((p, i) => {
            const Icon = whyIcons[i];
            return (
              <motion.div
                key={p.title}
                {...reveal}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className={`rounded-[2rem] border border-slate-200 bg-white p-8 ${i === 2 ? 'lg:col-span-2' : ''}`}
              >
                <Icon className="w-7 h-7 text-ci-blue-600" />
                <h3 className="mt-6 font-display text-xl font-bold text-ci-navy">{p.title}</h3>
                <p className="mt-2 text-slate-600">{p.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Témoignage (masqué en production tant qu'il n'y a pas de vrai texte) */}
      {items.length > 0 && (
        <section className="py-20 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ci-green-600 mb-8">{t.testimonialsKicker}</p>
            {items.map((item, i) => (
              <figure key={i} className="relative">
                {item.placeholder && (
                  <span className="inline-block mb-6 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">{t.placeholderBadge}</span>
                )}
                <Quote className="mx-auto w-10 h-10 text-ci-green-500 mb-6" />
                <blockquote className={`font-display text-2xl md:text-3xl leading-snug ${item.placeholder ? 'text-slate-400 italic' : 'text-ci-navy'}`}>
                  « {item.quote} »
                </blockquote>
                <figcaption className="mt-8">
                  <span className="block font-semibold text-ci-navy">{item.name}</span>
                  <span className="block text-sm text-slate-500">{item.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* Contact */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div
          {...reveal}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto rounded-[2rem] border border-ci-green-100 bg-gradient-to-br from-ci-green-50 via-white to-ci-blue-50 p-8 sm:p-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-[-0.03em] text-ci-navy">{t.ctaTitle}</h2>
            <p className="mt-4 text-lg text-slate-600">{t.ctaText}</p>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <Link to="/contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-ci-navy px-8 py-4 font-semibold text-white transition-colors hover:bg-ci-green-600">
              {t.ctaButton} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a href="tel:+15147120371" className="inline-flex items-center gap-2 text-ci-navy font-semibold hover:text-ci-green-600">
              <Phone className="w-4 h-4" /> (514) 712-0371
            </a>
            <a href="mailto:finances@conceptinformatique.net" className="inline-flex items-center gap-2 text-slate-600 hover:text-ci-green-600 break-all">
              <Mail className="w-4 h-4 shrink-0" /> finances@conceptinformatique.net
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
