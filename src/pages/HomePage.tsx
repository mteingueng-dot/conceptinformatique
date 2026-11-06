import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Clock,
  Layers,
  MapPin,
  Quote,
  Server,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Workflow,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { getServices } from '../data/services';

type Testimonial = { quote: string; name: string; role: string };

/*
 * Témoignages clients : à remplir avec de vrais avis fournis par Concept Informatique.
 * Tant que la liste est vide, la section n'apparaît PAS sur le site en ligne ;
 * en développement (npm run dev), des exemples marqués « à remplacer » montrent la mise en page.
 */
const testimonials: { fr: Testimonial[]; en: Testimonial[] } = { fr: [], en: [] };

const fr = {
  badge: 'Données · Logiciels · IA',
  heroTitleA: 'Transformez vos données en',
  heroTitleB: 'décisions stratégiques',
  heroText:
    "Établie à Sherbrooke, Concept Informatique inc. met plus de 17 ans d'expérience au service de vos projets : des solutions sur mesure pour structurer, analyser et valoriser vos données, et optimiser vos processus d'affaires.",
  ctaPrimary: 'Parler à un expert',
  ctaSecondary: 'Découvrir nos services',
  trust: ['17+ ans d’expérience', 'Sherbrooke, Québec', 'Soutien TI 24/7'],
  previewLabel: 'Aperçu illustratif',
  dashTitle: 'Performance des données',
  dashSub: 'Indicateurs consolidés',
  dashKpis: [
    { label: 'Sources connectées', value: '12' },
    { label: 'Qualité des données', value: '98 %' },
    { label: 'Rapports automatisés', value: '34' },
  ],
  syncChip: 'Pipeline ETL synchronisé',
  secureChip: 'Données gouvernées',
  statsEyebrow: 'En chiffres',
  stats: [
    { value: 17, suffix: '+', label: 'années d’expérience', hint: 'au service des entreprises d’ici' },
    { value: 7, suffix: '', label: 'domaines d’expertise', hint: 'du logiciel à l’infonuagique' },
    { value: 24, suffix: '/7', label: 'surveillance et soutien', hint: 'pour vos systèmes critiques' },
    { value: 100, suffix: ' %', label: 'sur mesure', hint: 'des solutions adaptées à vous' },
  ],
  servicesEyebrow: 'Nos services',
  servicesTitle: 'Tout ce qu’il faut pour exploiter vos données',
  servicesText:
    'Une équipe, sept domaines complémentaires : nous accompagnons vos projets de la stratégie à la mise en production.',
  learnMore: 'En savoir plus',
  viewAll: 'Voir tous nos services',
  processEyebrow: 'Notre démarche',
  processTitleA: 'Des données brutes à la',
  processTitleB: 'décision',
  stepLabel: 'ÉTAPE',
  process: [
    { title: 'Collecte', desc: 'Vos sources, systèmes et API connectés de façon fiable.' },
    { title: 'Transformation', desc: 'Des pipelines ETL automatisés, documentés et surveillés.' },
    { title: 'Analyse', desc: 'Modèles, tableaux de bord et IA au service de vos questions.' },
    { title: 'Décision', desc: 'Des indicateurs clairs pour agir rapidement et avec confiance.' },
  ],
  testimonialsEyebrow: 'Témoignages',
  testimonialsTitle: 'Ils nous font confiance',
  placeholderBadge: 'Exemple — à remplacer par un vrai témoignage',
  placeholderQuote:
    'Texte du témoignage client à fournir : le contexte du projet, ce que Concept Informatique a apporté et le résultat obtenu.',
  placeholderName: 'Nom du client',
  placeholderRole: 'Poste, entreprise',
  whyEyebrow: 'Pourquoi nous choisir',
  whyTitleA: 'La technologie au service de la',
  whyTitleB: 'performance',
  whyText:
    "Notre vision est d'harmoniser les outils technologiques les plus avancés avec les objectifs d'affaires de nos clients. Nous ne construisons pas que des outils; nous bâtissons des avantages concurrentiels.",
  whyPoints: [
    { title: 'Soutien TI réactif et sécurisé', text: 'Une équipe locale qui connaît vos systèmes et répond vite.' },
    { title: 'Automatisation intelligente', text: 'L’IA appliquée là où elle fait gagner du temps, concrètement.' },
    { title: 'Gouvernance des données', text: 'Des données fiables, protégées et prêtes à être utilisées.' },
  ],
  whyLink: 'En savoir plus sur notre vision',
  yearsLabel: 'années d’excellence',
  ctaTitle: 'Prêt à propulser votre transformation numérique?',
  ctaText: 'Parlons de votre projet : logiciel sur mesure, intelligence d’affaires, données ou automatisation.',
  ctaButton: 'Contacter Concept Informatique',
  ctaPhone: '(514) 712-0371',
};

const en: typeof fr = {
  badge: 'Data · Software · AI',
  heroTitleA: 'Turn your data into',
  heroTitleB: 'strategic decisions',
  heroText:
    'Based in Sherbrooke, Concept Informatique inc. brings more than 17 years of experience to your projects: tailored solutions to structure, analyze and unlock the value of your data, and to optimize your business processes.',
  ctaPrimary: 'Talk to an expert',
  ctaSecondary: 'Explore our services',
  trust: ['17+ years of experience', 'Sherbrooke, Québec', '24/7 IT support'],
  previewLabel: 'Illustrative preview',
  dashTitle: 'Data performance',
  dashSub: 'Consolidated indicators',
  dashKpis: [
    { label: 'Connected sources', value: '12' },
    { label: 'Data quality', value: '98%' },
    { label: 'Automated reports', value: '34' },
  ],
  syncChip: 'ETL pipeline in sync',
  secureChip: 'Governed data',
  statsEyebrow: 'By the numbers',
  stats: [
    { value: 17, suffix: '+', label: 'years of experience', hint: 'serving local businesses' },
    { value: 7, suffix: '', label: 'areas of expertise', hint: 'from software to the cloud' },
    { value: 24, suffix: '/7', label: 'monitoring and support', hint: 'for your critical systems' },
    { value: 100, suffix: '%', label: 'tailored', hint: 'solutions built around you' },
  ],
  servicesEyebrow: 'Our services',
  servicesTitle: 'Everything you need to put your data to work',
  servicesText:
    'One team, seven complementary areas: we support your projects from strategy all the way to production.',
  learnMore: 'Learn more',
  viewAll: 'View all our services',
  processEyebrow: 'Our approach',
  processTitleA: 'From raw data to',
  processTitleB: 'decision',
  stepLabel: 'STEP',
  process: [
    { title: 'Collection', desc: 'Your sources, systems and APIs, reliably connected.' },
    { title: 'Transformation', desc: 'Automated, documented and monitored ETL pipelines.' },
    { title: 'Analysis', desc: 'Models, dashboards and AI that answer your questions.' },
    { title: 'Decision', desc: 'Clear indicators to act quickly and with confidence.' },
  ],
  testimonialsEyebrow: 'Testimonials',
  testimonialsTitle: 'They trust us',
  placeholderBadge: 'Sample — replace with a real testimonial',
  placeholderQuote:
    'Client testimonial to be provided: the project context, what Concept Informatique brought and the outcome.',
  placeholderName: 'Client name',
  placeholderRole: 'Role, company',
  whyEyebrow: 'Why choose us',
  whyTitleA: 'Technology in service of',
  whyTitleB: 'performance',
  whyText:
    "Our vision is to align the most advanced technology tools with our clients' business objectives. We don't just build tools; we build competitive advantages.",
  whyPoints: [
    { title: 'Responsive, secure IT support', text: 'A local team that knows your systems and responds fast.' },
    { title: 'Intelligent automation', text: 'AI applied where it actually saves you time.' },
    { title: 'Data governance', text: 'Reliable, protected data that is ready to use.' },
  ],
  whyLink: 'Learn more about our vision',
  yearsLabel: 'years of excellence',
  ctaTitle: 'Ready to power your digital transformation?',
  ctaText: "Let's talk about your project: custom software, business intelligence, data or automation.",
  ctaButton: 'Contact Concept Informatique',
  ctaPhone: '(514) 712-0371',
};

const dict = { fr, en };

const processIcons = [Server, Workflow, BarChart3, TrendingUp];
const whyIcons = [ShieldCheck, Sparkles, Layers];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
};

/* Courbe illustrative du tableau de bord (coordonnées SVG 0–300 × 0–120) */
const linePoints = [
  [0, 92], [30, 86], [60, 88], [90, 74], [120, 70], [150, 58],
  [180, 62], [210, 46], [240, 40], [270, 28], [300, 18],
];
const linePath = linePoints.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x},${y}`).join(' ');
const areaPath = `${linePath} L300,120 L0,120 Z`;
const columnHeights = [38, 52, 46, 64, 58, 76, 70, 88];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const duration = 1200;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setDisplay(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

function SectionHeading({ eyebrow, children, text, center = true }: { eyebrow: string; children: ReactNode; text?: string; center?: boolean }) {
  return (
    <motion.div {...fadeUp} transition={{ duration: 0.6 }} className={`max-w-3xl mb-14 ${center ? 'mx-auto text-center' : ''}`}>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-ci-blue-600 mb-4">{eyebrow}</p>
      <h2 className="font-sans font-bold text-ci-navy text-3xl md:text-5xl tracking-tight leading-[1.1]">{children}</h2>
      {text && <p className="mt-5 text-lg text-slate-600 leading-relaxed">{text}</p>}
    </motion.div>
  );
}

export default function HomePage() {
  const { lang: ctxLang } = useLanguage();
  const lang: 'fr' | 'en' = ctxLang === 'en' ? 'en' : 'fr';
  const t = dict[lang];
  const services = getServices(lang);

  const realTestimonials = testimonials[lang];
  const showPlaceholders = realTestimonials.length === 0 && import.meta.env.DEV;
  const testimonialItems: (Testimonial & { placeholder?: boolean })[] = showPlaceholders
    ? [0, 1, 2].map(() => ({ quote: t.placeholderQuote, name: t.placeholderName, role: t.placeholderRole, placeholder: true }))
    : realTestimonials;

  return (
    <div id="homepage-wrapper-v7k2m9x1" className="overflow-hidden bg-white text-slate-700">
      {/* Hero */}
      <section id="hero-section-a7k2m9x1" className="relative overflow-hidden bg-gradient-to-b from-ci-blue-50/70 via-white to-white pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div aria-hidden="true" className="absolute inset-0 bg-dot-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
        <div aria-hidden="true" className="absolute -top-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-ci-blue-200/40 blur-[110px]" />
        <div aria-hidden="true" className="absolute top-40 -right-24 w-[26rem] h-[26rem] rounded-full bg-ci-green-100/70 blur-[110px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-ci-blue-100 bg-white/80 px-4 py-1.5 text-xs font-medium text-ci-blue-700 shadow-sm mb-7"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ci-green-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-ci-green-500" />
              </span>
              {t.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-sans font-extrabold text-ci-navy text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4.1rem] tracking-tight mb-7"
            >
              {t.heroTitleA} <span className="text-gradient-ci">{t.heroTitleB}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-10"
            >
              {t.heroText}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-ci-blue-600 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-ci-blue-600/25 transition-all hover:bg-ci-blue-700 hover:shadow-ci-blue-600/35"
              >
                {t.ctaPrimary}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 text-base font-semibold text-ci-navy transition-colors hover:border-ci-blue-200 hover:bg-ci-blue-50"
              >
                {t.ctaSecondary}
              </Link>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500"
            >
              {t.trust.map((item, i) => {
                const Icon = [Clock, MapPin, ShieldCheck][i];
                return (
                  <li key={item} className="inline-flex items-center gap-2">
                    <Icon className="w-4 h-4 text-ci-green-500" />
                    {item}
                  </li>
                );
              })}
            </motion.ul>
          </div>

          {/* Tableau de bord illustratif */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
            aria-label={t.previewLabel}
          >
            <div className="relative rounded-3xl border border-slate-200/80 bg-white p-5 sm:p-7 shadow-[0_30px_80px_-30px_rgba(11,31,58,0.35)]">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-sm text-slate-500">{t.dashSub}</p>
                  <p className="text-lg font-bold text-ci-navy">{t.dashTitle}</p>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-slate-500">
                  {t.previewLabel}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6">
                {t.dashKpis.map((kpi, i) => (
                  <div key={kpi.label} className="rounded-2xl border border-slate-100 bg-slate-50/70 p-3 sm:p-4">
                    <p className="text-[11px] sm:text-xs text-slate-500 leading-tight min-h-[2rem]">{kpi.label}</p>
                    <p className={`mt-1 text-xl sm:text-2xl font-bold tabular-nums ${i === 1 ? 'text-ci-green-600' : 'text-ci-navy'}`}>{kpi.value}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-slate-100 bg-gradient-to-b from-ci-blue-50/60 to-white p-4">
                <svg viewBox="0 0 300 120" className="w-full h-36 sm:h-44" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="hero-area" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1f6feb" stopOpacity="0.28" />
                      <stop offset="100%" stopColor="#1f6feb" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="hero-line" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#1559d1" />
                      <stop offset="100%" stopColor="#16b364" />
                    </linearGradient>
                  </defs>
                  {[30, 60, 90].map((y) => (
                    <line key={y} x1="0" x2="300" y1={y} y2={y} stroke="#e2e8f0" strokeDasharray="3 4" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                  ))}
                  {columnHeights.map((h, i) => (
                    <motion.rect
                      key={i}
                      x={12 + i * 36}
                      width="14"
                      rx="3"
                      fill="#d9e8ff"
                      initial={{ y: 120, height: 0 }}
                      animate={{ y: 120 - h, height: h }}
                      transition={{ duration: 0.7, delay: 0.5 + i * 0.06 }}
                    />
                  ))}
                  <motion.path d={areaPath} fill="url(#hero-area)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1 }} />
                  <motion.path
                    d={linePath}
                    fill="none"
                    stroke="url(#hero-line)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.4, delay: 0.6, ease: 'easeOut' }}
                  />
                </svg>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -left-3 sm:-left-8 -bottom-6 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ci-green-50 text-ci-green-600">
                <CheckCircle2 className="w-5 h-5" />
              </span>
              <span className="text-sm font-semibold text-ci-navy">{t.syncChip}</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="hidden sm:flex absolute -right-4 -top-5 items-center gap-2 rounded-2xl bg-ci-navy px-4 py-2.5 text-sm font-medium text-white shadow-xl"
            >
              <ShieldCheck className="w-4 h-4 text-ci-green-400" />
              {t.secureChip}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section id="kpi-strip-k4m8n2v6" className="relative py-16 border-y border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="sr-only">{t.statsEyebrow}</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:divide-x lg:divide-slate-100">
            {t.stats.map((stat, idx) => (
              <motion.div key={stat.label} {...fadeUp} transition={{ duration: 0.5, delay: idx * 0.08 }} className="px-2 lg:px-8 text-center lg:text-left">
                <p className="text-4xl md:text-5xl font-extrabold tracking-tight text-gradient-ci">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 font-semibold text-ci-navy">{stat.label}</p>
                <p className="mt-1 text-sm text-slate-500">{stat.hint}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="expertise-summary-p8n2k1m4" className="py-24 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={t.servicesEyebrow} text={t.servicesText}>
            {t.servicesTitle}
          </SectionHeading>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, idx) => {
              const Icon = service.icon;
              const featured = idx === 0;
              return (
                <motion.div
                  key={service.slug}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: (idx % 4) * 0.07 }}
                  className={featured ? 'sm:col-span-2 lg:row-span-1' : ''}
                >
                  <Link
                    to={`/services/${service.slug}`}
                    className={`group relative flex h-full flex-col rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 ${
                      featured
                        ? 'border-transparent bg-ci-navy text-white shadow-xl shadow-ci-navy/20'
                        : 'border-slate-200 bg-white hover:border-ci-blue-200 hover:shadow-[0_20px_50px_-25px_rgba(21,89,209,0.45)]'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-8">
                      <span
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                          featured ? 'bg-white/10 text-ci-green-400' : 'bg-ci-blue-50 text-ci-blue-600 group-hover:bg-ci-blue-600 group-hover:text-white transition-colors'
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </span>
                      <span className={`font-mono text-xs ${featured ? 'text-white/50' : 'text-slate-400'}`}>
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className={`text-lg font-bold mb-2 ${featured ? 'text-white text-2xl' : 'text-ci-navy'}`}>{service.title}</h3>
                    <p className={`text-sm leading-relaxed ${featured ? 'text-slate-300 text-base max-w-md' : 'text-slate-600'}`}>{service.tagline}</p>
                    <span
                      className={`mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${
                        featured ? 'text-ci-green-400' : 'text-ci-blue-600'
                      }`}
                    >
                      {t.learnMore}
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-ci-navy transition-colors hover:border-ci-blue-600 hover:text-ci-blue-600"
            >
              {t.viewAll} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Démarche */}
      <section id="data-pipeline-q2w6x9k3" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={t.processEyebrow}>
            {t.processTitleA} <span className="text-gradient-ci">{t.processTitleB}</span>
          </SectionHeading>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            <div aria-hidden="true" className="hidden lg:block absolute top-7 left-[12%] right-[12%] h-px bg-gradient-to-r from-ci-blue-200 via-ci-blue-500/40 to-ci-green-400/60" />
            {t.process.map((step, idx) => {
              const Icon = processIcons[idx];
              return (
                <motion.div key={step.title} {...fadeUp} transition={{ duration: 0.5, delay: idx * 0.1 }} className="relative text-center px-4">
                  <span
                    className={`relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border-4 border-white shadow-lg ${
                      idx === 3 ? 'bg-ci-green-500 text-white shadow-ci-green-500/30' : 'bg-ci-blue-600 text-white shadow-ci-blue-600/25'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </span>
                  <p className="mt-6 font-mono text-xs text-slate-400">{t.stepLabel} 0{idx + 1}</p>
                  <h3 className="mt-1 text-xl font-bold text-ci-navy">{step.title}</h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Témoignages (masqués en production tant qu'aucun vrai témoignage n'est fourni) */}
      {testimonialItems.length > 0 && (
        <section id="testimonials-section-t4k8m2" className="py-24 bg-slate-50/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow={t.testimonialsEyebrow}>{t.testimonialsTitle}</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonialItems.map((item, idx) => (
                <motion.figure
                  key={idx}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`relative flex flex-col rounded-3xl border bg-white p-8 ${item.placeholder ? 'border-dashed border-amber-300' : 'border-slate-200'}`}
                >
                  {item.placeholder && (
                    <span className="absolute -top-3 left-6 rounded-full bg-amber-100 px-3 py-1 text-[11px] font-semibold text-amber-800">
                      {t.placeholderBadge}
                    </span>
                  )}
                  <Quote className="w-8 h-8 text-ci-blue-200 mb-5" />
                  <blockquote className={`text-slate-700 leading-relaxed flex-grow ${item.placeholder ? 'italic text-slate-400' : ''}`}>
                    « {item.quote} »
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-3 border-t border-slate-100 pt-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-ci-blue-500 to-ci-green-500 text-sm font-bold text-white">
                      {item.name.charAt(0)}
                    </span>
                    <span>
                      <span className="block font-semibold text-ci-navy">{item.name}</span>
                      <span className="block text-sm text-slate-500">{item.role}</span>
                    </span>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pourquoi nous */}
      <section id="vision-banner-v7m2n1k4" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading eyebrow={t.whyEyebrow} text={t.whyText} center={false}>
              {t.whyTitleA} <span className="text-gradient-ci">{t.whyTitleB}</span>
            </SectionHeading>
            <Link to="/about" className="group -mt-4 inline-flex items-center gap-2 font-semibold text-ci-blue-600 hover:text-ci-blue-700">
              {t.whyLink} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="relative">
            <div className="space-y-4">
              {t.whyPoints.map((point, idx) => {
                const Icon = whyIcons[idx];
                return (
                  <motion.div
                    key={point.title}
                    {...fadeUp}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex gap-5 rounded-3xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-[0_20px_50px_-30px_rgba(11,31,58,0.4)]"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-ci-green-50 text-ci-green-600">
                      <Icon className="w-6 h-6" />
                    </span>
                    <div>
                      <h3 className="font-bold text-ci-navy">{point.title}</h3>
                      <p className="mt-1 text-slate-600">{point.text}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <div className="mt-5 flex justify-end">
              <div className="inline-flex items-baseline gap-3 rounded-3xl bg-gradient-to-br from-ci-blue-600 to-ci-blue-700 px-7 py-5 text-white shadow-xl shadow-ci-blue-600/30">
                <span className="text-4xl font-extrabold">17+</span>
                <span className="text-sm text-ci-blue-100">{t.yearsLabel}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appel à l'action */}
      <section id="final-cta-section-x3v7k2" className="px-4 sm:px-6 lg:px-8 pb-24 bg-white">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="relative max-w-7xl mx-auto overflow-hidden rounded-[2rem] bg-ci-navy px-6 py-16 sm:px-12 md:py-20 text-center"
        >
          <div aria-hidden="true" className="absolute inset-0 opacity-[0.15] bg-dot-grid [filter:invert(1)]" />
          <div aria-hidden="true" className="absolute -top-24 left-1/4 w-96 h-96 rounded-full bg-ci-blue-500/40 blur-[120px]" />
          <div aria-hidden="true" className="absolute -bottom-24 right-1/4 w-96 h-96 rounded-full bg-ci-green-500/30 blur-[120px]" />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">{t.ctaTitle}</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">{t.ctaText}</p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-ci-navy transition-colors hover:bg-ci-green-50"
              >
                {t.ctaButton}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="tel:+15147120371" className="font-semibold text-white/80 hover:text-white">
                {t.ctaPhone}
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
