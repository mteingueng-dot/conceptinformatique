import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Database,
  GitBranch,
  Layers,
  LineChart,
  Radio,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

/*
 * Version E de la page d'accueil — orientée « pile de données moderne ».
 * Seules des technologies déjà annoncées ailleurs sur le site sont citées
 * (src/data/services.ts, src/data/expertise.ts, src/data/jobs.ts).
 */

const layerIcons = [Radio, Database, GitBranch, LineChart, BrainCircuit];

const layerTech: string[][] = [
  ['Azure Data Factory', 'Kafka', 'Apache Airflow', 'Denodo'],
  ['Microsoft Fabric', 'Databricks', 'Snowflake', 'SQL Server'],
  ['dbt', 'Spark', 'Python', 'Great Expectations'],
  ['Power BI', 'Direct Lake', 'DAX', 'SSAS'],
  ['Azure Machine Learning', 'MLflow', 'OpenAI', 'Agents IA'],
];

// Seul libellé non technique à traduire.
function techFor(i: number, t: { aiAgents: string }) {
  return layerTech[i].map((x) => (x === 'Agents IA' ? t.aiAgents : x));
}

const capabilityMeta: { icon: typeof Database; to: string }[] = [
  { icon: Layers, to: '/services/data-engineering' },
  { icon: Radio, to: '/services/data-engineering' },
  { icon: ShieldCheck, to: '/services/data-engineering' },
  { icon: LineChart, to: '/services/business-intelligence' },
  { icon: BrainCircuit, to: '/services/automatisation-ia' },
  { icon: Workflow, to: '/services/architecture-cloud' },
];

const fr = {
  badge: 'Pile de données moderne',
  aiAgents: 'Agents IA',
  titleA: 'Lakehouse, streaming et IA :',
  titleB: 'la donnée moderne, au service de vos décisions.',
  intro:
    'Concept Informatique inc. conçoit et opère des plateformes de données modernes sur Microsoft Fabric, Databricks et Snowflake, du flux en temps réel jusqu’aux modèles d’IA. Basée à Sherbrooke, plus de 17 ans d’expérience.',
  ctaPrimary: 'Moderniser ma plateforme',
  ctaSecondary: 'Voir l’architecture',
  stackCaption: 'Votre plateforme, couche par couche',
  layers: ['Ingestion et streaming', 'Lakehouse et entrepôt', 'Transformation et qualité', 'Analytique et BI', 'IA et apprentissage automatique'],
  layersShort: ['Ingestion', 'Lakehouse', 'Transformation', 'BI', 'IA'],
  archTag: 'Architecture',
  archTitle: 'Une architecture de données moderne, de bout en bout',
  archText:
    'Nous assemblons les bonnes briques pour votre réalité : ingestion en lot ou en continu, lakehouse gouverné, transformations testées, BI en libre-service et IA en production.',
  medallion: [
    { name: 'Bronze', desc: 'Données brutes ingérées' },
    { name: 'Argent', desc: 'Données nettoyées et conformes' },
    { name: 'Or', desc: 'Données prêtes pour la BI et l’IA' },
  ],
  capTag: 'Ce que nous bâtissons',
  capTitle: 'Des capacités concrètes, prêtes pour la production',
  caps: [
    { title: 'Lakehouse et entrepôt modernes', text: 'Microsoft Fabric, Databricks ou Snowflake, modélisés en étoile et optimisés.' },
    { title: 'Pipelines en temps réel', text: 'Flux continus avec Kafka et orchestration avec Airflow ou Data Factory.' },
    { title: 'Qualité et gouvernance', text: 'Transformations dbt versionnées et tests de qualité automatisés.' },
    { title: 'BI en libre-service', text: 'Power BI et Direct Lake : des rapports rapides sur des données à jour.' },
    { title: 'IA générative et agents', text: 'Agents IA et modèles intégrés à vos processus d’affaires.' },
    { title: 'MLOps et infonuagique', text: 'MLflow, CI/CD et infrastructure en code avec Terraform.' },
  ],
  learnMore: 'En savoir plus',
  stats: [
    { v: '17+', l: 'années d’expérience' },
    { v: '7', l: 'domaines d’expertise' },
    { v: '24/7', l: 'surveillance et soutien' },
    { v: '100 %', l: 'solutions sur mesure' },
  ],
  modTag: 'Modernisation',
  modTitle: 'De votre plateforme actuelle à la pile moderne',
  modText:
    'SQL Server, SSIS, rapports existants : nous partons de ce que vous avez et migrons par étapes, sans interrompre vos opérations.',
  from: 'Aujourd’hui',
  to: 'Demain',
  fromItems: ['SQL Server sur site', 'Paquets SSIS', 'Rapports SSRS', 'Fichiers Excel'],
  toItems: ['Lakehouse Fabric ou Databricks', 'Pipelines dbt et Data Factory', 'Power BI et Direct Lake', 'IA et analyse prédictive'],
  steps: ['Évaluer', 'Architecturer', 'Construire', 'Opérer'],
  stepsText: [
    'Audit de vos données, systèmes et besoins.',
    'Plan cible et feuille de route réaliste.',
    'Livraison par itérations, testée et documentée.',
    'Surveillance 24/7 et amélioration continue.',
  ],
  ctaTitle: 'Votre plateforme de données est-elle prête pour l’IA?',
  ctaText: 'Parlons de votre architecture actuelle : nous vous proposons une première feuille de route concrète.',
  ctaButton: 'Contacter Concept Informatique',
};

const en: typeof fr = {
  badge: 'Modern data stack',
  aiAgents: 'AI agents',
  titleA: 'Lakehouse, streaming and AI:',
  titleB: 'modern data that powers your decisions.',
  intro:
    'Concept Informatique inc. designs and runs modern data platforms on Microsoft Fabric, Databricks and Snowflake, from real-time streams to AI models. Based in Sherbrooke, with more than 17 years of experience.',
  ctaPrimary: 'Modernize my platform',
  ctaSecondary: 'See the architecture',
  stackCaption: 'Your platform, layer by layer',
  layers: ['Ingestion and streaming', 'Lakehouse and warehouse', 'Transformation and quality', 'Analytics and BI', 'AI and machine learning'],
  layersShort: ['Ingestion', 'Lakehouse', 'Transformation', 'BI', 'AI'],
  archTag: 'Architecture',
  archTitle: 'A modern, end-to-end data architecture',
  archText:
    'We assemble the right building blocks for your reality: batch or streaming ingestion, a governed lakehouse, tested transformations, self-service BI and AI in production.',
  medallion: [
    { name: 'Bronze', desc: 'Raw ingested data' },
    { name: 'Silver', desc: 'Cleansed, conformed data' },
    { name: 'Gold', desc: 'Data ready for BI and AI' },
  ],
  capTag: 'What we build',
  capTitle: 'Concrete, production-ready capabilities',
  caps: [
    { title: 'Modern lakehouse and warehouse', text: 'Microsoft Fabric, Databricks or Snowflake, star-modelled and optimized.' },
    { title: 'Real-time pipelines', text: 'Streaming with Kafka, orchestration with Airflow or Data Factory.' },
    { title: 'Quality and governance', text: 'Versioned dbt transformations and automated data-quality tests.' },
    { title: 'Self-service BI', text: 'Power BI and Direct Lake: fast reports on up-to-date data.' },
    { title: 'Generative AI and agents', text: 'AI agents and models built into your business processes.' },
    { title: 'MLOps and cloud', text: 'MLflow, CI/CD and infrastructure as code with Terraform.' },
  ],
  learnMore: 'Learn more',
  stats: [
    { v: '17+', l: 'years of experience' },
    { v: '7', l: 'areas of expertise' },
    { v: '24/7', l: 'monitoring and support' },
    { v: '100%', l: 'tailored solutions' },
  ],
  modTag: 'Modernization',
  modTitle: 'From your current platform to the modern stack',
  modText:
    'SQL Server, SSIS, existing reports: we start from what you have and migrate in stages, without disrupting your operations.',
  from: 'Today',
  to: 'Tomorrow',
  fromItems: ['On-premises SQL Server', 'SSIS packages', 'SSRS reports', 'Excel files'],
  toItems: ['Fabric or Databricks lakehouse', 'dbt and Data Factory pipelines', 'Power BI and Direct Lake', 'AI and predictive analytics'],
  steps: ['Assess', 'Architect', 'Build', 'Run'],
  stepsText: [
    'Audit of your data, systems and needs.',
    'Target design and a realistic roadmap.',
    'Iterative delivery, tested and documented.',
    '24/7 monitoring and continuous improvement.',
  ],
  ctaTitle: 'Is your data platform ready for AI?',
  ctaText: "Let's talk about your current architecture: we'll propose a first, concrete roadmap.",
  ctaButton: 'Contact Concept Informatique',
};

const dict = { fr, en };
const reveal = { initial: { opacity: 0, y: 18 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-60px' } };

function StackVisual({ t }: { t: typeof fr }) {
  return (
    <div className="relative">
      <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-slate-400">{t.stackCaption}</p>
      <div className="relative space-y-2.5">
        {t.layers.map((layer, i) => {
          const Icon = layerIcons[i];
          const last = i === t.layers.length - 1;
          return (
            <motion.div
              key={layer}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + (t.layers.length - 1 - i) * 0.12 }}
              className={`relative flex items-center gap-4 rounded-2xl border px-4 py-3.5 shadow-sm ${
                last ? 'border-transparent bg-ci-navy text-white' : 'border-slate-200 bg-white'
              }`}
              style={{ marginLeft: `${i * 4}%`, marginRight: `${(t.layers.length - 1 - i) * 4}%` }}
            >
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${last ? 'bg-white/10 text-ci-green-400' : 'bg-ci-blue-50 text-ci-blue-600'}`}>
                <Icon className="w-5 h-5" />
              </span>
              <div className="min-w-0">
                <p className={`text-sm font-bold ${last ? 'text-white' : 'text-ci-navy'}`}>{layer}</p>
                <p className={`truncate font-mono text-[11px] ${last ? 'text-slate-400' : 'text-slate-500'}`}>{techFor(i, t).slice(0, 3).join(' · ')}</p>
              </div>
              <motion.span
                aria-hidden="true"
                className={`ml-auto h-2 w-2 shrink-0 rounded-full ${last ? 'bg-ci-green-400' : 'bg-ci-blue-500'}`}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.6, delay: i * 0.3, repeat: Infinity }}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default function HomePageE() {
  const { lang: ctxLang } = useLanguage();
  const lang: 'fr' | 'en' = ctxLang === 'en' ? 'en' : 'fr';
  const t = dict[lang];

  return (
    <div className="overflow-hidden bg-white text-slate-700">
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-ci-blue-50/60 to-white">
        <div aria-hidden="true" className="absolute inset-0 bg-dot-grid [mask-image:radial-gradient(ellipse_at_top_right,black_25%,transparent_70%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-14 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-ci-blue-100 bg-white px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-ci-blue-700 shadow-sm"
            >
              <Layers className="w-3.5 h-3.5 text-ci-green-500" /> {t.badge}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-8 font-display font-bold text-ci-navy text-[2.4rem] leading-[1.06] sm:text-[3.4rem] lg:text-[3.9rem] tracking-[-0.035em]"
            >
              {t.titleA} <span className="text-gradient-ci">{t.titleB}</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="mt-7 max-w-xl text-lg leading-relaxed text-slate-600">
              {t.intro}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-ci-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-ci-blue-600/25 hover:bg-ci-blue-700 transition-colors">
                {t.ctaPrimary} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="#architecture" className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-7 py-4 font-semibold text-ci-navy hover:border-ci-blue-200 hover:bg-ci-blue-50 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t.ctaSecondary}
              </a>
            </motion.div>
          </div>
          <StackVisual t={t} />
        </div>
      </section>

      {/* Chiffres */}
      <section className="border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {t.stats.map((s, i) => (
            <motion.div key={s.l} {...reveal} transition={{ delay: i * 0.08 }} className="text-center lg:text-left">
              <p className="font-display text-4xl md:text-5xl font-bold text-gradient-ci">{s.v}</p>
              <p className="mt-1 text-sm text-slate-500">{s.l}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Architecture (bande sombre) */}
      <section id="architecture" className="relative py-24 bg-ci-navy text-slate-300 scroll-mt-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'linear-gradient(rgba(110,168,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(110,168,255,0.08) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...reveal} className="max-w-3xl mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ci-green-400">{t.archTag}</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-[-0.03em] text-white">{t.archTitle}</h2>
            <p className="mt-5 text-lg text-slate-400">{t.archText}</p>
          </motion.div>

          <div className="relative grid grid-cols-1 md:grid-cols-5 gap-3">
            <motion.div
              aria-hidden="true"
              className="hidden md:block absolute top-[2.15rem] left-0 h-px bg-gradient-to-r from-ci-blue-500 to-ci-green-400"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
            />
            {t.layersShort.map((name, i) => {
              const Icon = layerIcons[i];
              return (
                <motion.div key={name} {...reveal} transition={{ delay: 0.15 + i * 0.12 }} className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <span className={`relative flex h-9 w-9 items-center justify-center rounded-xl ${i === 4 ? 'bg-ci-green-500' : 'bg-ci-blue-600'} text-white`}>
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="font-mono text-[11px] text-slate-500">0{i + 1}</span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-white">{t.layers[i]}</h3>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {techFor(i, t).map((tech) => (
                      <li key={tech} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-[11px] text-slate-300">{tech}</li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          {/* Architecture médaillon */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {t.medallion.map((m, i) => (
              <motion.div
                key={m.name}
                {...reveal}
                transition={{ delay: 0.6 + i * 0.12 }}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4"
              >
                <span
                  className="h-10 w-10 shrink-0 rounded-full shadow-inner"
                  style={{ background: ['linear-gradient(135deg,#b4763c,#7a4a1f)', 'linear-gradient(135deg,#e2e8f0,#94a3b8)', 'linear-gradient(135deg,#fde68a,#d4a017)'][i] }}
                />
                <div>
                  <p className="font-bold text-white">{m.name}</p>
                  <p className="text-sm text-slate-400">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capacités */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...reveal} className="max-w-3xl mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ci-blue-600">{t.capTag}</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-[-0.03em] text-ci-navy">{t.capTitle}</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.caps.map((c, i) => {
              const { icon: Icon, to } = capabilityMeta[i];
              return (
                <motion.div key={c.title} {...reveal} transition={{ delay: (i % 3) * 0.07 }}>
                  <Link to={to} className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-ci-blue-200 hover:shadow-[0_20px_50px_-25px_rgba(21,89,209,0.45)]">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ci-blue-50 text-ci-blue-600 transition-colors group-hover:bg-ci-blue-600 group-hover:text-white">
                      <Icon className="w-6 h-6" />
                    </span>
                    <h3 className="mt-6 font-display text-xl font-bold text-ci-navy">{c.title}</h3>
                    <p className="mt-2 text-slate-600 leading-relaxed">{c.text}</p>
                    <span className="mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ci-blue-600">
                      {t.learnMore} <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modernisation */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...reveal} className="max-w-3xl mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ci-green-600">{t.modTag}</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-[-0.03em] text-ci-navy">{t.modTitle}</h2>
            <p className="mt-5 text-lg text-slate-600">{t.modText}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-5 items-stretch">
            <motion.div {...reveal} className="rounded-3xl border border-slate-200 bg-white p-7">
              <p className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-5">{t.from}</p>
              <ul className="space-y-3">
                {t.fromItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 text-slate-600">
                    <span className="h-2 w-2 rounded-full bg-slate-300" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <div className="flex items-center justify-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-ci-blue-600 to-ci-green-500 text-white shadow-lg rotate-90 lg:rotate-0">
                <ArrowRight className="w-6 h-6" />
              </span>
            </div>
            <motion.div {...reveal} transition={{ delay: 0.15 }} className="rounded-3xl border border-ci-green-100 bg-white p-7 shadow-[0_20px_50px_-30px_rgba(22,179,100,0.5)]">
              <p className="font-mono text-xs uppercase tracking-widest text-ci-green-600 mb-5">{t.to}</p>
              <ul className="space-y-3">
                {t.toItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 rounded-xl bg-ci-green-50 px-4 py-3 font-medium text-ci-navy">
                    <CheckCircle2 className="w-4 h-4 text-ci-green-600" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.steps.map((step, i) => (
              <motion.div key={step} {...reveal} transition={{ delay: i * 0.1 }} className="border-t-2 border-ci-blue-600 pt-5">
                <p className="font-mono text-xs text-slate-400">0{i + 1}</p>
                <h3 className="mt-1 font-display text-xl font-bold text-ci-navy">{step}</h3>
                <p className="mt-2 text-slate-600">{t.stepsText[i]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-white">
        <motion.div {...reveal} className="relative max-w-7xl mx-auto overflow-hidden rounded-[2rem] bg-ci-navy px-6 py-16 sm:px-12 md:py-20 text-center">
          <div aria-hidden="true" className="absolute -top-24 left-1/4 w-96 h-96 rounded-full bg-ci-blue-500/40 blur-[120px]" />
          <div aria-hidden="true" className="absolute -bottom-24 right-1/4 w-96 h-96 rounded-full bg-ci-green-500/30 blur-[120px]" />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl font-display text-3xl md:text-5xl font-bold tracking-tight text-white">{t.ctaTitle}</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">{t.ctaText}</p>
            <Link to="/contact" className="group mt-10 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-ci-navy hover:bg-ci-green-50 transition-colors">
              {t.ctaButton} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
