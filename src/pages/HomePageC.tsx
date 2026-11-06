import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Database, Terminal, Activity, ShieldCheck, Sparkles, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { services as servicesFr, getServices } from '../data/services';

/*
 * Version C de la page d'accueil — « Data Lab » clair.
 * Trame de plan technique, libellés en police mono, requête SQL animée qui produit
 * un résultat, bandeau défilant des technologies réellement utilisées (tirées de src/data/services.ts).
 */

const technologies = Array.from(new Set(servicesFr.flatMap((s) => s.technologies)));

const fr = {
  status: 'système opérationnel',
  tag: 'DATA · BI · IA · LOGICIELS',
  titleA: 'L’ingénierie de données',
  titleB: 'au service de vos décisions.',
  intro:
    'Concept Informatique inc. conçoit des pipelines, des entrepôts de données, des tableaux de bord et des logiciels sur mesure pour les entreprises du Québec. Basée à Sherbrooke, plus de 17 ans d’expérience.',
  ctaPrimary: 'Démarrer un projet',
  ctaSecondary: 'Explorer les services',
  queryTitle: 'requete_kpi.sql',
  sql: [
    ['SELECT', ' indicateur, variation'],
    ['FROM', ' entrepot.kpi_mensuels'],
    ['WHERE', " periode = 'T3'"],
    ['ORDER BY', ' impact DESC;'],
  ],
  resultLabel: 'Résultat',
  rows: [
    ['Ventes', '+18 %'],
    ['Marge', '+6 %'],
    ['Délais', '−22 %'],
  ],
  illustrative: 'données illustratives',
  stackLabel: 'Technologies maîtrisées',
  metricsTitle: 'Indicateurs',
  metrics: [
    { k: 'experience', v: '17+', u: 'ans' },
    { k: 'domaines', v: '7', u: 'expertises' },
    { k: 'soutien', v: '24/7', u: 'surveillance' },
    { k: 'approche', v: '100', u: '% sur mesure' },
  ],
  modulesTag: '// services',
  modulesTitle: 'Nos modules d’expertise',
  open: 'ouvrir',
  pipelineTag: '// démarche',
  pipelineTitle: 'Votre pipeline, de la source à la décision',
  pipeline: [
    { id: 'extract', title: 'Collecte', desc: 'Connexion de vos sources, systèmes et API.' },
    { id: 'transform', title: 'Transformation', desc: 'Nettoyage, modélisation et pipelines ETL automatisés.' },
    { id: 'analyze', title: 'Analyse', desc: 'Tableaux de bord, modèles prédictifs et IA.' },
    { id: 'decide', title: 'Décision', desc: 'Des indicateurs fiables pour agir vite.' },
  ],
  whyTag: '// pourquoi nous',
  whyTitle: 'Une équipe locale, des standards d’ingénierie',
  why: [
    { title: 'Soutien TI réactif et sécurisé', text: 'Surveillance 24/7 et intervention rapide sur vos systèmes critiques.' },
    { title: 'Automatisation intelligente', text: 'L’IA appliquée là où elle fait réellement gagner du temps.' },
    { title: 'Gouvernance des données', text: 'Des données documentées, protégées et dignes de confiance.' },
  ],
  ctaTitle: 'Prêt à mettre vos données au travail?',
  ctaText: 'Décrivez-nous votre contexte : nous revenons vers vous avec une première piste concrète.',
  ctaButton: 'Contacter Concept Informatique',
};

const en: typeof fr = {
  status: 'all systems operational',
  tag: 'DATA · BI · AI · SOFTWARE',
  titleA: 'Data engineering',
  titleB: 'that powers your decisions.',
  intro:
    'Concept Informatique inc. designs pipelines, data warehouses, dashboards and custom software for businesses across Québec. Based in Sherbrooke, with more than 17 years of experience.',
  ctaPrimary: 'Start a project',
  ctaSecondary: 'Explore services',
  queryTitle: 'kpi_query.sql',
  sql: [
    ['SELECT', ' metric, change'],
    ['FROM', ' warehouse.monthly_kpis'],
    ['WHERE', " period = 'Q3'"],
    ['ORDER BY', ' impact DESC;'],
  ],
  resultLabel: 'Result',
  rows: [
    ['Sales', '+18%'],
    ['Margin', '+6%'],
    ['Lead time', '−22%'],
  ],
  illustrative: 'illustrative data',
  stackLabel: 'Technologies we master',
  metricsTitle: 'Metrics',
  metrics: [
    { k: 'experience', v: '17+', u: 'years' },
    { k: 'domains', v: '7', u: 'areas of expertise' },
    { k: 'support', v: '24/7', u: 'monitoring' },
    { k: 'approach', v: '100', u: '% tailored' },
  ],
  modulesTag: '// services',
  modulesTitle: 'Our expertise modules',
  open: 'open',
  pipelineTag: '// approach',
  pipelineTitle: 'Your pipeline, from source to decision',
  pipeline: [
    { id: 'extract', title: 'Collection', desc: 'Connecting your sources, systems and APIs.' },
    { id: 'transform', title: 'Transformation', desc: 'Cleansing, modelling and automated ETL pipelines.' },
    { id: 'analyze', title: 'Analysis', desc: 'Dashboards, predictive models and AI.' },
    { id: 'decide', title: 'Decision', desc: 'Reliable indicators to act fast.' },
  ],
  whyTag: '// why us',
  whyTitle: 'A local team, engineering standards',
  why: [
    { title: 'Responsive, secure IT support', text: '24/7 monitoring and fast response on your critical systems.' },
    { title: 'Intelligent automation', text: 'AI applied where it genuinely saves time.' },
    { title: 'Data governance', text: 'Documented, protected, trustworthy data.' },
  ],
  ctaTitle: 'Ready to put your data to work?',
  ctaText: 'Tell us about your context: we come back with a first, concrete direction.',
  ctaButton: 'Contact Concept Informatique',
};

const dict = { fr, en };
const whyIcons = [ShieldCheck, Sparkles, Layers];
const reveal = { initial: { opacity: 0, y: 18 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-60px' } };


function QueryCard({ t }: { t: typeof fr }) {
  const sql = t.sql;
  const total = sql.reduce((n, [a, b]) => n + a.length + b.length, 0);
  const [typed, setTyped] = useState(0);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTyped(total);
      return;
    }
    const id = window.setInterval(() => setTyped((n) => (n >= total ? n : n + 1)), 28);
    return () => window.clearInterval(id);
  }, [total]);

  let budget = typed;
  const done = typed >= total;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-[0_30px_80px_-35px_rgba(11,31,58,0.45)] overflow-hidden">
      <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-4 py-2.5">
        <div className="flex items-center gap-2 font-mono text-xs text-slate-500">
          <Terminal className="w-3.5 h-3.5" /> {t.queryTitle}
        </div>
        <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">{t.illustrative}</span>
      </div>
      <pre className="px-5 py-4 font-mono text-[13px] leading-6 text-slate-700 min-h-[8.5rem] whitespace-pre-wrap">
        {sql.map(([kw, rest], i) => {
          const kwShown = kw.slice(0, Math.max(0, budget));
          budget -= kw.length;
          const restShown = rest.slice(0, Math.max(0, budget));
          budget -= rest.length;
          return (
            <div key={i}>
              <span className="text-ci-blue-600 font-semibold">{kwShown}</span>
              <span>{restShown}</span>
            </div>
          );
        })}
        {!done && <span className="inline-block w-2 h-4 align-middle bg-ci-blue-600 animate-pulse" />}
      </pre>
      <div className="border-t border-slate-100 px-5 py-4">
        <p className="font-mono text-[11px] uppercase tracking-widest text-slate-400 mb-3">{t.resultLabel}</p>
        <div className="grid grid-cols-3 gap-2">
          {t.rows.map(([label, value], i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 8 }}
              animate={done ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.12 }}
              className="rounded-xl border border-slate-100 bg-slate-50 p-3"
            >
              <p className="text-xs text-slate-500">{label}</p>
              <p className={`mt-1 text-xl font-bold tabular-nums ${i === 2 ? 'text-ci-blue-600' : 'text-ci-green-600'}`}>{value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HomePageC() {
  const { lang: ctxLang } = useLanguage();
  const lang: 'fr' | 'en' = ctxLang === 'en' ? 'en' : 'fr';
  const t = dict[lang];
  const services = getServices(lang);

  return (
    <div className="overflow-hidden bg-white text-slate-700">
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 border-b border-slate-200">
        <div
          aria-hidden="true"
          className="absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(21,89,209,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(21,89,209,0.07) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-14 items-center">
          <div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-wrap items-center gap-3 mb-8 font-mono text-xs">
              <span className="inline-flex items-center gap-2 rounded-md border border-ci-green-100 bg-ci-green-50 px-2.5 py-1 text-ci-green-600">
                <span className="h-1.5 w-1.5 rounded-full bg-ci-green-500 animate-pulse" /> {t.status}
              </span>
              <span className="text-slate-400 tracking-widest">{t.tag}</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-display font-bold text-ci-navy text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4.2rem] tracking-[-0.035em]"
            >
              {t.titleA} <span className="text-ci-blue-600">{t.titleB}</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="mt-7 text-lg text-slate-600 leading-relaxed max-w-xl">
              {t.intro}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="group inline-flex items-center justify-center gap-2 rounded-lg bg-ci-navy px-6 py-3.5 font-semibold text-white hover:bg-ci-blue-700 transition-colors">
                {t.ctaPrimary} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 font-mono text-sm font-medium text-ci-navy hover:border-ci-blue-600 hover:text-ci-blue-600 transition-colors">
                <span className="text-ci-green-600">&gt;</span> {t.ctaSecondary}
              </Link>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <QueryCard t={t} />
          </motion.div>
        </div>
      </section>

      {/* Bandeau des technologies */}
      <section className="border-b border-slate-200 bg-slate-50 py-5" aria-label={t.stackLabel}>
        <div className="flex items-center">
          <p className="hidden md:block shrink-0 pl-8 pr-6 font-mono text-[11px] uppercase tracking-widest text-slate-400">{t.stackLabel}</p>
          <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <motion.div className="flex w-max gap-3" animate={{ x: ['0%', '-50%'] }} transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}>
              {[...technologies, ...technologies].map((tech, i) => (
                <span key={i} className="shrink-0 rounded-md border border-slate-200 bg-white px-3 py-1.5 font-mono text-xs text-slate-600">
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Indicateurs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 rounded-2xl border border-slate-200 overflow-hidden divide-x divide-y lg:divide-y-0 divide-slate-200">
            {t.metrics.map((m, i) => (
              <motion.div key={m.k} {...reveal} transition={{ delay: i * 0.08 }} className="p-6 sm:p-8 bg-white">
                <p className="font-mono text-[11px] text-slate-400 mb-3">
                  <Activity className="inline w-3 h-3 mr-1 text-ci-green-500" />
                  {m.k}
                </p>
                <p className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-ci-navy tabular-nums">{m.v}</p>
                <p className="mt-1 text-sm text-slate-500">{m.u}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules de services */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-sm text-ci-blue-600">{t.modulesTag}</p>
          <h2 className="mt-2 mb-12 font-display text-3xl md:text-5xl font-bold tracking-[-0.03em] text-ci-navy">{t.modulesTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.slug} {...reveal} transition={{ delay: (i % 3) * 0.06 }}>
                  <Link to={`/services/${s.slug}`} className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-ci-blue-500 hover:shadow-[0_0_0_4px_rgba(31,111,235,0.08)]">
                    <div className="flex items-center justify-between font-mono text-[11px] text-slate-400">
                      <span>module_{String(i + 1).padStart(2, '0')}</span>
                      <span className="inline-flex items-center gap-1 text-ci-blue-600 opacity-0 transition-opacity group-hover:opacity-100">
                        {t.open} <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                    <Icon className="mt-6 w-7 h-7 text-ci-blue-600" />
                    <h3 className="mt-4 font-display text-xl font-bold text-ci-navy">{s.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.tagline}</p>
                    <div className="mt-auto pt-5 flex flex-wrap gap-1.5">
                      {s.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="rounded bg-slate-100 px-2 py-0.5 font-mono text-[11px] text-slate-500">{tech}</span>
                      ))}
                    </div>
                  </Link>
                </motion.div>
              );
            })}
            <motion.div {...reveal} className="sm:col-span-2 lg:col-span-2 rounded-xl border border-dashed border-ci-blue-200 bg-ci-blue-50/50 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Database className="w-6 h-6 text-ci-blue-600" />
                <p className="font-semibold text-ci-navy">{t.ctaTitle}</p>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-ci-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-ci-blue-700">
                {t.ctaPrimary} <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pipeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-sm text-ci-blue-600">{t.pipelineTag}</p>
          <h2 className="mt-2 mb-12 font-display text-3xl md:text-5xl font-bold tracking-[-0.03em] text-ci-navy">{t.pipelineTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 rounded-2xl border border-slate-200 overflow-hidden">
            {t.pipeline.map((step, i) => (
              <motion.div key={step.id} {...reveal} transition={{ delay: i * 0.1 }} className="relative p-7 border-b md:border-b-0 md:border-r last:border-0 border-slate-200 bg-white">
                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className={`flex h-6 w-6 items-center justify-center rounded ${i === 3 ? 'bg-ci-green-500' : 'bg-ci-blue-600'} text-white`}>{i + 1}</span>
                  <span className="text-slate-400">{step.id}()</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-ci-navy">{step.title}</h3>
                <p className="mt-2 text-slate-600">{step.desc}</p>
                <motion.div
                  aria-hidden="true"
                  className={`absolute left-0 bottom-0 h-1 ${i === 3 ? 'bg-ci-green-500' : 'bg-ci-blue-500'}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.35 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi nous */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-sm text-ci-blue-600">{t.whyTag}</p>
          <h2 className="mt-2 mb-12 font-display text-3xl md:text-5xl font-bold tracking-[-0.03em] text-ci-navy">{t.whyTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {t.why.map((w, i) => {
              const Icon = whyIcons[i];
              return (
                <motion.div key={w.title} {...reveal} transition={{ delay: i * 0.08 }} className="rounded-xl border border-slate-200 bg-white p-7">
                  <Icon className="w-6 h-6 text-ci-green-600" />
                  <h3 className="mt-5 font-display text-lg font-bold text-ci-navy">{w.title}</h3>
                  <p className="mt-2 text-slate-600">{w.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <motion.div {...reveal} className="max-w-4xl mx-auto px-4 text-center">
          <p className="font-mono text-sm text-ci-green-600">$ contact --concept-informatique</p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold tracking-[-0.035em] text-ci-navy">{t.ctaTitle}</h2>
          <p className="mt-5 text-lg text-slate-600">{t.ctaText}</p>
          <Link to="/contact" className="group mt-10 inline-flex items-center gap-2 rounded-lg bg-ci-navy px-7 py-4 font-semibold text-white hover:bg-ci-blue-700 transition-colors">
            {t.ctaButton} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
