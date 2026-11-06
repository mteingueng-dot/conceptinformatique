import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Cpu, ShieldCheck, Sparkles, Layers, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { services as servicesFr, getServices } from '../data/services';

/*
 * Version D de la page d'accueil — « Data Tech » sombre.
 * Fond bleu nuit, réseau de nœuds lumineux animé aux couleurs du logo (bleu/vert),
 * cartes translucides, bandeau des technologies réelles (src/data/services.ts).
 */

const technologies = Array.from(new Set(servicesFr.flatMap((s) => s.technologies)));

const fr = {
  badge: 'Données · Analytique · IA',
  titleA: 'Transformez vos données en',
  titleB: 'avantage concurrentiel',
  intro:
    'Ingénierie de données, intelligence d’affaires, IA et logiciels sur mesure. Établie à Sherbrooke, Concept Informatique inc. met plus de 17 ans d’expérience au service de vos décisions.',
  ctaPrimary: 'Parler à un expert',
  ctaSecondary: 'Nos services',
  live: 'Flux en direct · aperçu illustratif',
  liveCards: [
    { label: 'Lignes traitées / h', value: '2,4 M' },
    { label: 'Latence du pipeline', value: '1,8 s' },
    { label: 'Fiabilité', value: '99,9 %' },
  ],
  stats: [
    { v: '17+', l: 'années d’expérience' },
    { v: '7', l: 'domaines d’expertise' },
    { v: '24/7', l: 'surveillance et soutien' },
    { v: '100 %', l: 'sur mesure' },
  ],
  stackLabel: 'Notre pile technologique',
  servicesTag: 'Services',
  servicesTitle: 'Une expertise complète, de la donnée brute à l’IA',
  learnMore: 'Explorer',
  processTag: 'Démarche',
  process: ['Collecte', 'Transformation', 'Analyse', 'Décision'],
  processText: [
    'Sources, systèmes et API connectés.',
    'Pipelines ETL fiables et automatisés.',
    'Modèles, tableaux de bord et IA.',
    'Indicateurs clairs pour agir vite.',
  ],
  whyTag: 'Pourquoi nous',
  why: [
    { title: 'Soutien TI réactif et sécurisé', text: 'Surveillance 24/7 de vos systèmes critiques.' },
    { title: 'Automatisation propulsée par l’IA', text: 'Moins de tâches manuelles, plus de valeur.' },
    { title: 'Gouvernance stratégique des données', text: 'Des données fiables, protégées, documentées.' },
  ],
  ctaTitle: 'Prêt à propulser votre transformation numérique?',
  ctaButton: 'Contacter Concept Informatique',
};

const en: typeof fr = {
  badge: 'Data · Analytics · AI',
  titleA: 'Turn your data into a',
  titleB: 'competitive advantage',
  intro:
    'Data engineering, business intelligence, AI and custom software. Based in Sherbrooke, Concept Informatique inc. brings more than 17 years of experience to your decisions.',
  ctaPrimary: 'Talk to an expert',
  ctaSecondary: 'Our services',
  live: 'Live flow · illustrative preview',
  liveCards: [
    { label: 'Rows processed / h', value: '2.4M' },
    { label: 'Pipeline latency', value: '1.8s' },
    { label: 'Reliability', value: '99.9%' },
  ],
  stats: [
    { v: '17+', l: 'years of experience' },
    { v: '7', l: 'areas of expertise' },
    { v: '24/7', l: 'monitoring and support' },
    { v: '100%', l: 'tailored' },
  ],
  stackLabel: 'Our technology stack',
  servicesTag: 'Services',
  servicesTitle: 'End-to-end expertise, from raw data to AI',
  learnMore: 'Explore',
  processTag: 'Approach',
  process: ['Collection', 'Transformation', 'Analysis', 'Decision'],
  processText: [
    'Connected sources, systems and APIs.',
    'Reliable, automated ETL pipelines.',
    'Models, dashboards and AI.',
    'Clear indicators to act fast.',
  ],
  whyTag: 'Why us',
  why: [
    { title: 'Responsive, secure IT support', text: '24/7 monitoring of your critical systems.' },
    { title: 'AI-powered automation', text: 'Fewer manual tasks, more value.' },
    { title: 'Strategic data governance', text: 'Reliable, protected, documented data.' },
  ],
  ctaTitle: 'Ready to power your digital transformation?',
  ctaButton: 'Contact Concept Informatique',
};

const dict = { fr, en };
const whyIcons = [ShieldCheck, Sparkles, Layers];
const reveal = { initial: { opacity: 0, y: 18 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-60px' } };

/* Réseau de nœuds (coordonnées 0–600 × 0–420) */
const nodes: [number, number][] = [
  [60, 80], [170, 40], [130, 180], [260, 120], [240, 260], [360, 70],
  [380, 200], [330, 340], [480, 130], [500, 280], [560, 50], [110, 330],
];
const edges: [number, number][] = [
  [0, 1], [0, 2], [1, 3], [2, 3], [2, 4], [3, 5], [3, 6], [4, 6], [4, 7],
  [5, 8], [6, 8], [6, 9], [7, 9], [8, 10], [5, 10], [2, 11], [4, 11],
];

function Network() {
  return (
    <svg viewBox="0 0 600 420" className="w-full h-full" aria-hidden="true">
      <defs>
        <radialGradient id="node-glow">
          <stop offset="0%" stopColor="#34d17f" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#34d17f" stopOpacity="0" />
        </radialGradient>
      </defs>
      {edges.map(([a, b], i) => (
        <motion.path
          key={i}
          d={`M${nodes[a][0]},${nodes[a][1]} L${nodes[b][0]},${nodes[b][1]}`}
          stroke="#6ea8ff"
          strokeOpacity="0.4"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: i * 0.05 }}
        />
      ))}
      {edges.slice(0, 8).map(([a, b], i) => (
        <motion.circle
          key={`p${i}`}
          r="2.5"
          fill="#34d17f"
          animate={{ cx: [nodes[a][0], nodes[b][0]], cy: [nodes[a][1], nodes[b][1]], opacity: [0, 1, 0] }}
          transition={{ duration: 2.2, delay: i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
      {nodes.map(([x, y], i) => (
        <g key={i}>
          <motion.circle
            cx={x} cy={y} r="14" fill="url(#node-glow)"
            animate={{ opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 3, delay: i * 0.25, repeat: Infinity }}
          />
          <circle cx={x} cy={y} r={i % 3 === 0 ? 5 : 3.5} fill={i % 3 === 0 ? '#34d17f' : '#6ea8ff'} />
        </g>
      ))}
    </svg>
  );
}

export default function HomePageD() {
  const { lang: ctxLang } = useLanguage();
  const lang: 'fr' | 'en' = ctxLang === 'en' ? 'en' : 'fr';
  const t = dict[lang];
  const services = getServices(lang);

  return (
    <div className="overflow-hidden bg-[#050d1c] text-slate-300">
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-24">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(110,168,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(110,168,255,0.08) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        <div aria-hidden="true" className="absolute -top-40 left-1/3 w-[40rem] h-[40rem] rounded-full bg-ci-blue-600/25 blur-[140px]" />
        <div aria-hidden="true" className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] rounded-full bg-ci-green-500/15 blur-[140px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-ci-green-400/30 bg-ci-green-400/10 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-ci-green-400"
            >
              <Zap className="w-3.5 h-3.5" /> {t.badge}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-8 font-display font-bold text-white text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl tracking-[-0.035em]"
            >
              {t.titleA}{' '}
              <span className="bg-gradient-to-r from-[#6ea8ff] via-ci-blue-500 to-ci-green-400 bg-clip-text text-transparent">{t.titleB}</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="mt-7 max-w-xl text-lg leading-relaxed text-slate-400">
              {t.intro}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-ci-blue-600 to-ci-green-500 px-7 py-4 font-semibold text-white shadow-[0_0_40px_-8px_rgba(31,111,235,0.7)] transition-shadow hover:shadow-[0_0_50px_-5px_rgba(52,209,127,0.7)]"
              >
                {t.ctaPrimary} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur hover:bg-white/10 transition-colors">
                {t.ctaSecondary}
              </Link>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }} className="relative">
            <div className="relative aspect-[10/7] rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
              <Network />
              <p className="absolute top-4 left-5 font-mono text-[10px] uppercase tracking-widest text-slate-500">
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-ci-green-400 animate-pulse align-middle" />
                {t.live}
              </p>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {t.liveCards.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.12 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 sm:p-4"
                >
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-tight">{c.label}</p>
                  <p className={`mt-1 font-display text-lg sm:text-2xl font-bold tabular-nums ${i === 2 ? 'text-ci-green-400' : 'text-white'}`}>{c.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chiffres */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {t.stats.map((s, i) => (
            <motion.div key={s.l} {...reveal} transition={{ delay: i * 0.08 }}>
              <p className="font-display text-4xl md:text-5xl font-bold text-white">{s.v}</p>
              <p className="mt-1 text-sm text-slate-400">{s.l}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pile technologique */}
      <section className="py-8 border-b border-white/10" aria-label={t.stackLabel}>
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div className="flex w-max gap-8" animate={{ x: ['0%', '-50%'] }} transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}>
            {[...technologies, ...technologies].map((tech, i) => (
              <span key={i} className="shrink-0 inline-flex items-center gap-2 font-mono text-sm text-slate-500">
                <Cpu className="w-3.5 h-3.5 text-ci-blue-500" /> {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ci-green-400">{t.servicesTag}</p>
          <h2 className="mt-3 mb-14 max-w-3xl font-display text-3xl md:text-5xl font-bold tracking-[-0.03em] text-white">{t.servicesTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.slug} {...reveal} transition={{ delay: (i % 4) * 0.06 }} className={i === 0 ? 'sm:col-span-2' : ''}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-ci-blue-500/60"
                  >
                    <span aria-hidden="true" className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-ci-blue-500/0 blur-3xl transition-colors duration-500 group-hover:bg-ci-blue-500/30" />
                    <Icon className="w-7 h-7 text-ci-green-400" />
                    <h3 className="mt-6 font-display text-xl font-bold text-white">{s.title}</h3>
                    <p className="mt-2 text-sm text-slate-400 leading-relaxed">{s.tagline}</p>
                    <span className="mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#6ea8ff]">
                      {t.learnMore} <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Démarche */}
      <section className="py-24 border-t border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ci-green-400 mb-12">{t.processTag}</p>
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-10">
            <motion.div
              aria-hidden="true"
              className="hidden md:block absolute top-4 left-0 h-px bg-gradient-to-r from-ci-blue-500 to-ci-green-400"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: 'easeOut' }}
            />
            {t.process.map((p, i) => (
              <motion.div key={p} {...reveal} transition={{ delay: 0.2 + i * 0.2 }} className="relative">
                <span className={`relative flex h-8 w-8 items-center justify-center rounded-full font-mono text-xs font-bold text-[#050d1c] ${i === 3 ? 'bg-ci-green-400' : 'bg-[#6ea8ff]'}`}>
                  {i + 1}
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold text-white">{p}</h3>
                <p className="mt-2 text-slate-400">{t.processText[i]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi nous */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ci-green-400 mb-12">{t.whyTag}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {t.why.map((w, i) => {
              const Icon = whyIcons[i];
              return (
                <motion.div key={w.title} {...reveal} transition={{ delay: i * 0.08 }} className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ci-green-400/10 text-ci-green-400">
                    <Icon className="w-5 h-5" />
                  </span>
                  <h3 className="mt-6 font-display text-lg font-bold text-white">{w.title}</h3>
                  <p className="mt-2 text-slate-400">{w.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div
          {...reveal}
          className="relative max-w-7xl mx-auto overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-ci-blue-700 via-ci-blue-600 to-ci-green-600 px-6 py-16 sm:px-12 text-center"
        >
          <div aria-hidden="true" className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '22px 22px' }} />
          <h2 className="relative mx-auto max-w-3xl font-display text-3xl md:text-5xl font-bold tracking-tight text-white">{t.ctaTitle}</h2>
          <Link to="/contact" className="group relative mt-10 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-ci-navy hover:bg-ci-green-50 transition-colors">
            {t.ctaButton} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
