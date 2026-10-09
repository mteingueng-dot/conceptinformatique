import { motion } from 'framer-motion';
import { ArrowRight, Code, BarChart3, Database, ShieldCheck, Zap, Activity, TrendingUp, Workflow, Server } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const fr = {
  badge: "Données · Analytique · IA",
  heroTitleA: "Transformez vos données en",
  heroTitleB: "décisions stratégiques",
  heroText: "Établie à Sherbrooke, Concept Informatique inc. met plus de 17 ans d'expérience au service de vos projets : des solutions sur mesure pour structurer, analyser et valoriser vos données, et optimiser vos processus d'affaires.",
  ctaExpertise: "Notre expertise",
  ctaTalk: "Parler à un expert",
  previewLabel: "Aperçu illustratif",
  dashboard: "Tableau de bord",
  dataOverview: "Aperçu des données",
  chips: ["Sources", "Pipelines ETL", "Gouvernance"],
  kpis: [
    { label: "Expérience", value: "17+", hint: "Années d'excellence" },
    { label: "Approche", value: "100%", hint: "Solutions sur mesure" },
    { label: "Disponibilité", value: "24/7", hint: "Surveillance et soutien TI" },
    { label: "Établie à", value: "Sherbrooke", hint: "Équipe locale au Québec" }
  ],
  pipelineTitleA: "Des données brutes à la",
  pipelineTitleB: "décision",
  pipeline: [
    { title: "Collecte", desc: "Sources, systèmes et API connectés" },
    { title: "Transformation", desc: "Pipelines ETL fiables et automatisés" },
    { title: "Analyse", desc: "Modèles, tableaux de bord et IA" },
    { title: "Décision", desc: "Indicateurs clairs pour agir rapidement" }
  ],
  expertiseTitleA: "Domaines d'",
  expertiseTitleB: "expertise",
  expertises: [
    { title: "Développement logiciel", desc: "Applications sur mesure et intégration robuste de systèmes.", tag: "01 · Bâtir" },
    { title: "Intelligence d'affaires", desc: "Tableaux de bord et analyses stratégiques pour soutenir vos décisions.", tag: "02 · Analyser" },
    { title: "Ingénierie des données", desc: "Architecture de données, pipelines ETL et gouvernance de l'information.", tag: "03 · Données" }
  ],
  learnMore: "En savoir plus",
  viewAll: "Voir tous nos services",
  techTitleA: "Technologies",
  techTitleB: "clés",
  techText: "Plus de 17 ans d'expérience avec les outils qui font avancer vos données.",
  techCategories: ["Intelligence d'affaires", "Bases de données", "Analytique et IA", "Infonuagique", "Intégration de données", "Développement web"],
  visionTitleA: "La technologie au service de la",
  visionTitleB: "performance stratégique",
  visionText: "Notre vision est d'harmoniser les outils technologiques les plus avancés avec les objectifs d'affaires de nos clients. Nous ne construisons pas que des outils; nous bâtissons des avantages concurrentiels.",
  visionPoints: [
    "Soutien TI réactif et sécurisé",
    "Automatisation intelligente propulsée par l'IA",
    "Gouvernance stratégique des données"
  ],
  visionLink: "En savoir plus sur notre vision",
  secureData: "Données sécurisées et gouvernées",
  bars: ["Intégration", "Analyse", "Automatisation", "Gouvernance"],
  illustrativeVisual: "Visuel illustratif",
  yearsExcellence: "Années d'excellence",
  ctaTitleA: "Prêt à propulser votre",
  ctaTitleB: "transformation numérique?",
  ctaButton: "Contacter Concept Informatique"
};

const en: typeof fr = {
  badge: "Data · Analytics · AI",
  heroTitleA: "Turn your data into",
  heroTitleB: "strategic decisions",
  heroText: "Based in Sherbrooke, Concept Informatique inc. brings more than 17 years of experience to your projects: tailored solutions to structure, analyze and unlock the value of your data, and to optimize your business processes.",
  ctaExpertise: "Our expertise",
  ctaTalk: "Talk to an expert",
  previewLabel: "Illustrative preview",
  dashboard: "Dashboard",
  dataOverview: "Data overview",
  chips: ["Sources", "ETL Pipelines", "Governance"],
  kpis: [
    { label: "Experience", value: "17+", hint: "Years of excellence" },
    { label: "Approach", value: "100%", hint: "Tailored solutions" },
    { label: "Availability", value: "24/7", hint: "IT monitoring and support" },
    { label: "Based in", value: "Sherbrooke", hint: "Local team in Québec" }
  ],
  pipelineTitleA: "From raw data to",
  pipelineTitleB: "decision",
  pipeline: [
    { title: "Collection", desc: "Connected sources, systems and APIs" },
    { title: "Transformation", desc: "Reliable, automated ETL pipelines" },
    { title: "Analysis", desc: "Models, dashboards and AI" },
    { title: "Decision", desc: "Clear indicators to act fast" }
  ],
  expertiseTitleA: "Areas of ",
  expertiseTitleB: "expertise",
  expertises: [
    { title: "Software Development", desc: "Custom applications and robust systems integration.", tag: "01 · Build" },
    { title: "Business Intelligence", desc: "Dashboards and strategic analytics to support your decision-making.", tag: "02 · Insight" },
    { title: "Data Engineering", desc: "Data architecture, ETL pipelines and information governance.", tag: "03 · Data" }
  ],
  learnMore: "Learn more",
  viewAll: "View all our services",
  techTitleA: "Key",
  techTitleB: "Technologies",
  techText: "More than 17 years of experience with the tools that move your data forward.",
  techCategories: ["Business Intelligence", "Databases", "Analytics & AI", "Cloud Computing", "Data Integration", "Web Development"],
  visionTitleA: "Technology in service of",
  visionTitleB: "strategic performance",
  visionText: "Our vision is to align the most advanced technology tools with our clients' business objectives. We don't just build tools; we build competitive advantages.",
  visionPoints: [
    "Responsive, secure IT support",
    "Intelligent AI-powered automation",
    "Strategic data governance"
  ],
  visionLink: "Learn more about our vision",
  secureData: "Secure, governed data",
  bars: ["Integration", "Analysis", "Automation", "Governance"],
  illustrativeVisual: "Illustrative visual",
  yearsExcellence: "Years of Excellence",
  ctaTitleA: "Ready to power your",
  ctaTitleB: "digital transformation?",
  ctaButton: "Contact Concept Informatique"
};

const dict = { fr, en };

const pipelineIcons: (typeof Server)[] = [Server, Workflow, BarChart3, TrendingUp];

const expertiseMeta: { icon: typeof Code; to: string }[] = [
  { icon: Code, to: "/services/developpement-logiciel" },
  { icon: BarChart3, to: "/services/business-intelligence" },
  { icon: Database, to: "/services/data-engineering" }
];

const chipIcons: (typeof Database)[] = [Database, Workflow, ShieldCheck];

const bars: number[] = [35, 48, 42, 60, 55, 72, 66, 80, 74, 88, 82, 95];

export default function HomePage() {
  const { lang: ctxLang } = useLanguage();
  const lang: 'fr' | 'en' = ctxLang === 'en' ? 'en' : 'fr';
  const t = dict[lang];

  const kpis = t.kpis;
  const pipeline = t.pipeline.map((p, i) => ({ icon: pipelineIcons[i], ...p }));
  const expertises = t.expertises.map((e, i) => ({ ...expertiseMeta[i], ...e }));

  return (
    <div id="homepage-wrapper-v7k2m9x1" className="overflow-hidden">
      {/* Hero Section */}
      <section id="hero-section-a7k2m9x1" className="relative min-h-[max(100svh,720px)] flex items-center overflow-hidden bg-slate-950">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '48px 48px'
          }}
        ></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 text-xs uppercase tracking-widest px-4 py-2 mb-8"
            >
              <Activity className="w-4 h-4" />
              {t.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-sans font-extralight text-white text-5xl md:text-7xl tracking-tight leading-tight mb-8"
            >
              {t.heroTitleA}{' '}
              <span id="hero-accent-b3k9m2x4" className="font-display italic text-emerald-400">{t.heroTitleB}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-lg md:text-xl text-slate-300 max-w-xl mb-10 font-light leading-relaxed"
            >
              {t.heroText}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/services"
                className="bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-500/20 text-center"
              >
                {t.ctaExpertise}
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full text-lg font-medium hover:bg-white/20 transition-all text-center"
              >
                {t.ctaTalk}
              </Link>
            </motion.div>
          </div>

          {/* Illustrative dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-400/70"></span>
                <span className="w-3 h-3 rounded-full bg-amber-400/70"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-400/70"></span>
              </div>
              <span className="text-xs uppercase tracking-widest text-slate-500">{t.previewLabel}</span>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-slate-400 text-sm font-light">{t.dashboard}</p>
                <p className="text-white text-xl font-light">{t.dataOverview}</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-emerald-400/10 text-emerald-400 flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
            </div>

            <div className="h-48 flex items-end gap-2 rounded-xl border border-white/5 bg-slate-950/60 p-4 mb-6">
              {bars.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.8, delay: 0.5 + i * 0.05 }}
                  className={`flex-1 rounded-t-md ${i === bars.length - 1 ? 'bg-emerald-400' : 'bg-gradient-to-t from-indigo-500/60 to-indigo-400/30'}`}
                ></motion.div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: chipIcons[0], label: t.chips[0] },
                { icon: chipIcons[1], label: t.chips[1] },
                { icon: chipIcons[2], label: t.chips[2] }
              ].map((chip, i) => (
                <div key={i} className="flex flex-col items-center gap-2 rounded-xl border border-white/5 bg-white/5 py-3">
                  <chip.icon className="w-5 h-5 text-emerald-400" />
                  <span className="text-xs text-slate-300 font-light">{chip.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* KPI Strip */}
      <section id="kpi-strip-k4m8n2v6" className="bg-slate-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {kpis.map((kpi, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center lg:text-left"
            >
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">{kpi.label}</p>
              <p className="text-3xl md:text-4xl font-sans font-light text-emerald-400 mb-1">{kpi.value}</p>
              <p className="text-sm text-slate-400 font-light">{kpi.hint}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Data Pipeline */}
      <section id="data-pipeline-q2w6x9k3" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sans font-light text-slate-900 text-4xl md:text-5xl mb-6">
              {t.pipelineTitleA} <span className="font-display italic text-emerald-600">{t.pipelineTitleB}</span>
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pipeline.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative bg-white rounded-2xl border border-slate-200 p-8 shadow-sm"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center">
                    <step.icon className="w-7 h-7" />
                  </div>
                  <span className="font-display italic text-3xl text-slate-300">0{idx + 1}</span>
                </div>
                <h3 className="text-xl font-sans font-medium text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 font-light">{step.desc}</p>
                {idx < pipeline.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Quick Look */}
      <section id="expertise-summary-p8n2k1m4" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-sans font-light text-slate-900 text-4xl md:text-5xl mb-6">
              {t.expertiseTitleA}<span id="summary-accent-x7v1n9" className="font-display italic text-indigo-600">{t.expertiseTitleB}</span>
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertises.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col p-8 rounded-2xl border border-slate-200 hover:border-indigo-200 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-indigo-600 bg-indigo-50 rounded-full px-3 py-1">{item.tag}</span>
                </div>
                <h3 className="text-xl font-sans font-medium text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 font-light">{item.desc}</p>
                <Link
                  to={item.to}
                  className="mt-auto pt-6 inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
                >
                  {t.learnMore} <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-3 font-medium transition-colors"
            >
              {t.viewAll}
            </Link>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision-banner-v7m2n1k4" className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-sans font-light text-4xl md:text-5xl mb-8 leading-tight text-white">
                {t.visionTitleA} <span className="font-display italic text-emerald-400">{t.visionTitleB}</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8 font-light">
                {t.visionText}
              </p>
              <ul className="space-y-4 mb-10">
                {t.visionPoints.map((point, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <Zap className="w-5 h-5 text-emerald-400" />
                    <span className="font-light">{point}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
              >
                {t.visionLink} <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-400/10 text-emerald-400 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <p className="text-slate-300 font-light">{t.secureData}</p>
                </div>
                <div className="space-y-5">
                  {[
                    { label: t.bars[0], width: 'w-5/6', color: 'bg-emerald-400' },
                    { label: t.bars[1], width: 'w-4/6', color: 'bg-indigo-400' },
                    { label: t.bars[2], width: 'w-3/4', color: 'bg-emerald-400' },
                    { label: t.bars[3], width: 'w-2/3', color: 'bg-indigo-400' }
                  ].map((row, i) => (
                    <div key={i}>
                      <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">{row.label}</p>
                      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                        <div className={`h-full rounded-full ${row.width} ${row.color}`}></div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-600 mt-6">{t.illustrativeVisual}</p>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-indigo-600 p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-4xl font-sans font-light text-white">17+</p>
                <p className="text-sm text-indigo-200 uppercase tracking-widest">{t.yearsExcellence}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="final-cta-section-x3v7k2" className="py-24 bg-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-sans font-light text-white text-3xl md:text-5xl mb-8 leading-tight">
            {t.ctaTitleA} <span className="font-display italic">{t.ctaTitleB}</span>
          </h2>
          <Link
            to="/contact"
            className="bg-white text-indigo-700 px-10 py-4 rounded-full text-lg font-medium hover:bg-slate-100 transition-all inline-block shadow-xl"
          >
            {t.ctaButton}
          </Link>
        </div>
      </section>
    </div>
  );
}
