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
    <div id="services-page-root-p3r8t5w2" className="pt-20 bg-transparent text-ci-navy min-h-screen">
      {/* Header */}
      <section className="bg-white/50 py-10 md:py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display font-bold tracking-[-0.03em] text-ci-navy text-4xl md:text-5xl mb-3">
            {t.headerTitleBefore}<span className="text-gradient-ci">{t.headerTitleAccent}</span>
          </h1>
          <p className="text-slate-600 text-base md:text-lg font-light max-w-3xl leading-relaxed">
            {t.headerSubtitle}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-6 md:py-8 bg-transparent">
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
                  to={`/services/${service.slug}/`}
                  className="group flex flex-col h-full min-h-[208px] bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:shadow-xl hover:shadow-ci-blue-600/10 hover:border-ci-green-400/40 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 bg-ci-green-500/10 text-ci-green-600 rounded-lg flex items-center justify-center mb-3">
                    <service.icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-lg font-sans font-medium text-ci-navy mb-2 line-clamp-2">{service.title}</h2>
                  <p className="text-sm text-slate-600 font-light mb-4 leading-relaxed line-clamp-2">{service.tagline}</p>
                  <div className="mt-auto flex items-center gap-2 text-sm font-medium text-ci-green-600">
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
      <section className="bg-white/50 border-t border-slate-200 py-24 text-ci-navy overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="font-display font-bold tracking-[-0.03em] text-4xl mb-4 text-ci-navy">
            {t.processTitleBefore}<span className="text-gradient-ci">{t.processTitleAccent}</span>{t.processTitleAfter}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto font-light">{t.processSubtitle}</p>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {t.steps.map((item, i) => (
              <div key={i} className="relative group">
                <div className="text-6xl font-sans font-bold text-slate-200 absolute -top-10 -left-4 z-0 group-hover:text-ci-green-600 transition-colors">{item.step}</div>
                <div className="relative z-10">
                  <h3 className="text-xl font-sans font-medium mb-4 text-ci-green-600">{item.title}</h3>
                  <p className="text-slate-600 font-light text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
