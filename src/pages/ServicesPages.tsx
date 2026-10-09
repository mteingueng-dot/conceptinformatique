import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getServices } from '../data/services';
import { useLanguage } from '../i18n/LanguageContext';

const content = {
  fr: {
    headerTitleBefore: 'Expertise ',
    headerTitleAccent: 'technologique',
    headerSubtitle:
      "Des solutions transversales pour répondre à chaque aspect de votre transformation numérique, avec une précision d'ingénieur et une vision d'affaires.",
    learnMore: 'En savoir plus',
    processTitleBefore: 'Notre approche ',
    processTitleAccent: 'méthodique',
    processTitleAfter: '',
    processSubtitle: 'Un processus rigoureux pour assurer le succès de chaque déploiement.',
    steps: [
      { step: '01', title: 'Analyse', desc: 'Audit de vos besoins et définition des objectifs stratégiques.' },
      { step: '02', title: 'Conception', desc: "Conception de l'architecture et modélisation de la solution." },
      { step: '03', title: 'Déploiement', desc: 'Mise en œuvre agile et intégration aux systèmes existants.' },
      { step: '04', title: 'Optimisation', desc: 'Maintenance proactive et amélioration continue des performances.' },
    ],
  },
  en: {
    headerTitleBefore: 'Technology ',
    headerTitleAccent: 'Expertise',
    headerSubtitle:
      'Cross-functional solutions to address every aspect of your digital transformation, with engineering precision and business vision.',
    learnMore: 'Learn more',
    processTitleBefore: 'Our ',
    processTitleAccent: 'methodical',
    processTitleAfter: ' approach',
    processSubtitle: 'A rigorous process to ensure the success of every deployment.',
    steps: [
      { step: '01', title: 'Analysis', desc: 'Audit of your needs and definition of strategic objectives.' },
      { step: '02', title: 'Design', desc: 'Architecture design and solution modelling.' },
      { step: '03', title: 'Deployment', desc: 'Agile implementation and integration with existing systems.' },
      { step: '04', title: 'Optimization', desc: 'Proactive maintenance and continuous performance improvement.' },
    ],
  },
};

export default function ServicesPage() {
  const { lang } = useLanguage();
  const t = content[lang];
  const services = getServices(lang);

  return (
    <div id="services-page-root-p3r8t5w2" className="pt-20 bg-slate-950 text-white min-h-screen">
      {/* Header */}
      <section className="bg-slate-900/60 py-10 md:py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-sans font-extralight text-white text-4xl md:text-5xl mb-3">
            {t.headerTitleBefore}<span className="font-display italic text-emerald-400">{t.headerTitleAccent}</span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg font-light max-w-3xl leading-relaxed">
            {t.headerSubtitle}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-6 md:py-8 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {services.map((service, idx) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="h-full"
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="group flex flex-col h-full min-h-[208px] bg-slate-900 border border-slate-800 p-5 rounded-xl shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 bg-emerald-500/10 text-emerald-400 rounded-lg flex items-center justify-center mb-3">
                    <service.icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-lg font-sans font-medium text-white mb-2 line-clamp-2">{service.title}</h2>
                  <p className="text-sm text-slate-400 font-light mb-4 leading-relaxed line-clamp-2">{service.tagline}</p>
                  <div className="mt-auto flex items-center gap-2 text-sm font-medium text-emerald-400">
                    {t.learnMore}
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-slate-900 border-t border-slate-800 py-24 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="font-sans font-light text-4xl mb-4 text-white">
            {t.processTitleBefore}<span className="font-display italic text-emerald-400">{t.processTitleAccent}</span>{t.processTitleAfter}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-light">{t.processSubtitle}</p>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {t.steps.map((item, i) => (
              <div key={i} className="relative group">
                <div className="text-6xl font-sans font-bold text-slate-800 absolute -top-10 -left-4 z-0 group-hover:text-emerald-500/30 transition-colors">{item.step}</div>
                <div className="relative z-10">
                  <h3 className="text-xl font-sans font-medium mb-4 text-emerald-400">{item.title}</h3>
                  <p className="text-slate-400 font-light text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
