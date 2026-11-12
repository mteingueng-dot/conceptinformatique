import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from '../i18n/router';
import { getServices } from '../data/services';
import { useLanguage } from '../i18n/LanguageContext';
import Photo from '../components/Photo';
import { servicePhoto } from '../data/photos';

const content = {
  fr: {
    headerTitleBefore: 'Services informatiques ',
    headerTitleAccent: 'à Sherbrooke et en Estrie',
    headerSubtitle:
      "Des solutions transversales pour répondre à chaque aspect de votre transformation numérique, avec une précision d'ingénieur et une vision d'affaires.",
    intro:
      "Concept Informatique inc. accompagne les PME et les organisations de Sherbrooke, de l'Estrie et de partout au Québec dans sept domaines complémentaires : développement logiciel sur mesure, intelligence d'affaires avec Power BI, ingénierie de données, soutien TI et cybersécurité, automatisation et intelligence artificielle, transformation numérique et architecture infonuagique sur Azure et AWS. Une seule équipe s'occupe de votre projet, de l'analyse des besoins jusqu'au soutien après la mise en production.",
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
    whyTitleBefore: 'Une seule équipe, ',
    whyTitleAccent: 'de l’idée au soutien',
    whyText:
      'Vos projets ne passent pas d’un fournisseur à l’autre : la même équipe analyse vos besoins, conçoit la solution, la met en production et en assure le suivi. Vous gardez un interlocuteur qui connaît votre contexte.',
    whyPoints: [
      'Des livraisons courtes et régulières, pour voir les résultats rapidement.',
      'Des technologies reconnues : Microsoft 365, Power BI, Azure, AWS, Fabric, Databricks.',
      'Une documentation et une formation remises à vos équipes à chaque étape.',
      'Une présence locale à Sherbrooke et en Estrie, et des services à distance partout au Québec.',
    ],
  },
  en: {
    headerTitleBefore: 'IT services ',
    headerTitleAccent: 'in Sherbrooke and the Eastern Townships',
    headerSubtitle:
      'Cross-functional solutions to address every aspect of your digital transformation, with engineering precision and business vision.',
    intro:
      'Concept Informatique inc. supports SMEs and organizations in Sherbrooke, the Eastern Townships and across Québec in seven complementary areas: custom software development, Power BI business intelligence, data engineering, IT support and cybersecurity, automation and artificial intelligence, digital transformation and cloud architecture on Azure and AWS. A single team handles your project, from needs analysis to support after go-live.',
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
    whyTitleBefore: 'One team, ',
    whyTitleAccent: 'from idea to support',
    whyText:
      'Your projects are not handed from one supplier to the next: the same team analyzes your needs, designs the solution, puts it into production and follows up. You keep a contact who knows your context.',
    whyPoints: [
      'Short, regular deliveries so you see results quickly.',
      'Proven technologies: Microsoft 365, Power BI, Azure, AWS, Fabric, Databricks.',
      'Documentation and training handed over to your teams at every stage.',
      'A local presence in Sherbrooke and the Eastern Townships, and remote services across Québec.',
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
          <p className="mt-4 text-slate-600 text-base max-w-4xl leading-relaxed">
            {t.intro}
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
                  className="group flex flex-col h-full overflow-hidden bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-xl hover:shadow-ci-blue-600/10 hover:border-ci-green-400/40 transition-all duration-300 hover:-translate-y-1"
                >
                  {servicePhoto[service.slug] && (
                    <div className="overflow-hidden">
                      <Photo
                        name={servicePhoto[service.slug]}
                        decorative
                        priority={idx < 4}
                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                        className="aspect-[16/10] w-full transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-5">
                  <div className="w-10 h-10 bg-ci-green-500/10 text-ci-green-600 rounded-lg flex items-center justify-center mb-3">
                    <service.icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-lg font-sans font-medium text-ci-navy mb-2 line-clamp-2">{service.title}</h2>
                  <p className="text-sm text-slate-600 font-light mb-4 leading-relaxed line-clamp-2">{service.tagline}</p>
                  <div className="mt-auto flex items-center gap-2 text-sm font-medium text-ci-green-600">
                    {t.learnMore}
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
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

      {/* Une seule équipe */}
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Photo name="equipe-collaboration" sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-[3/2] w-full rounded-3xl shadow-[0_30px_60px_-30px_rgba(11,31,58,0.5)]" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h2 className="font-display font-bold tracking-[-0.03em] text-4xl mb-6 text-ci-navy">
              {t.whyTitleBefore}<span className="text-gradient-ci">{t.whyTitleAccent}</span>
            </h2>
            <p className="text-slate-600 text-lg font-light leading-relaxed mb-8">{t.whyText}</p>
            <ul className="space-y-4">
              {t.whyPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-ci-green-600 mt-0.5 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
