import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { getServiceBySlug, services } from '../data/services';
import { useLanguage } from '../i18n/LanguageContext';

const copy = {
  fr: {
    notFoundPrefix: 'Service ',
    notFoundHighlight: 'introuvable',
    notFoundText: "Le service que vous recherchez n'existe pas ou a été déplacé.",
    backToServices: '← Retour aux services',
    allServices: '← Tous les services',
    requestConsultation: 'Demander une consultation',
    expertisePrefix: 'Notre ',
    expertiseHighlight: 'expertise',
    keyPoints: 'Points clés',
    benefitsPrefix: 'Les ',
    benefitsHighlight: 'avantages',
    deliverPrefix: 'Ce que nous ',
    deliverHighlight: 'livrons',
    techPrefix: 'Technologies et ',
    techHighlight: 'outils',
    approachPrefix: 'Notre ',
    approachHighlight: 'approche',
    otherPrefix: 'Autres ',
    otherHighlight: 'services',
    learnMore: 'En savoir plus',
    ctaTitle: 'Prêt à démarrer votre projet ?',
    ctaText: 'Parlons de vos besoins et trouvons ensemble la meilleure solution.',
    ctaButton: 'Contacter Concept Informatique',
  },
  en: {
    notFoundPrefix: 'Service ',
    notFoundHighlight: 'not found',
    notFoundText: 'The service you are looking for does not exist or has been moved.',
    backToServices: '← Back to services',
    allServices: '← All services',
    requestConsultation: 'Request a consultation',
    expertisePrefix: 'Our ',
    expertiseHighlight: 'expertise',
    keyPoints: 'Key points',
    benefitsPrefix: 'The ',
    benefitsHighlight: 'benefits',
    deliverPrefix: 'What we ',
    deliverHighlight: 'deliver',
    techPrefix: 'Technologies and ',
    techHighlight: 'tools',
    approachPrefix: 'Our ',
    approachHighlight: 'approach',
    otherPrefix: 'Other ',
    otherHighlight: 'services',
    learnMore: 'Learn more',
    ctaTitle: 'Ready to start your project?',
    ctaText: "Let's talk about your needs and find the best solution together.",
    ctaButton: 'Contact Concept Informatique',
  },
};

export default function ServiceDetailPage() {
  const { lang } = useLanguage();
  const t = copy[lang];
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div id="service-not-found-q4w7e2r9" className="pt-20 bg-transparent text-ci-navy min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="font-display font-bold tracking-[-0.03em] text-5xl md:text-6xl mb-6">
            {t.notFoundPrefix}<span className="text-gradient-ci">{t.notFoundHighlight}</span>
          </h1>
          <p className="text-slate-600 text-lg font-light mb-10">
            {t.notFoundText}
          </p>
          <Link
            to="/services/"
            className="inline-flex items-center gap-2 bg-ci-blue-600 hover:bg-ci-blue-700 text-white font-medium px-8 py-4 rounded-full transition-colors"
          >
            {t.backToServices}
          </Link>
        </div>
      </div>
    );
  }

  const words = service.title.split(' ');
  const lastWord = words.length > 1 ? words[words.length - 1] : '';
  const firstWords = words.length > 1 ? words.slice(0, -1).join(' ') : service.title;
  const Icon = service.icon;
  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <div id="service-detail-root-z6c3b8n1" className="pt-20 bg-transparent text-ci-navy min-h-screen">
      {/* Header */}
      <section className="bg-white/50 border-b border-slate-200 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/services/"
              className="inline-block text-sm text-slate-600 hover:text-ci-green-600 transition-colors mb-10"
            >
              {t.allServices}
            </Link>
            <div className="w-14 h-14 bg-ci-green-500/10 text-ci-green-600 rounded-xl flex items-center justify-center mb-6">
              <Icon className="w-7 h-7" />
            </div>
            <h1 className="font-display font-bold tracking-[-0.03em] text-ci-navy text-5xl md:text-7xl mb-6">
              {firstWords}{' '}
              {lastWord && <span className="text-gradient-ci">{lastWord}</span>}
            </h1>
            <p className="text-ci-green-600 text-xl md:text-2xl font-light max-w-3xl mb-6">{service.tagline}</p>
            <p className="text-slate-600 text-lg font-light max-w-3xl leading-relaxed mb-10">{service.intro}</p>
            <Link
              to="/contact/"
              className="inline-flex items-center gap-2 bg-ci-blue-600 hover:bg-ci-blue-700 text-white font-medium px-8 py-4 rounded-full transition-colors"
            >
              {t.requestConsultation} <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Description + checklist */}
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold tracking-[-0.03em] text-4xl mb-6 text-ci-navy">
              {t.expertisePrefix}<span className="text-gradient-ci">{t.expertiseHighlight}</span>
            </h2>
            <p className="text-slate-600 text-lg font-light leading-relaxed">{service.desc}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white border border-slate-200 p-8 rounded-2xl"
          >
            <h3 className="text-xl font-sans font-medium text-ci-navy mb-6">{t.keyPoints}</h3>
            <ul className="space-y-4">
              {service.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600 font-light">
                  <CheckCircle2 className="w-5 h-5 text-ci-green-600 mt-0.5 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white/50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold tracking-[-0.03em] text-4xl mb-12 text-ci-navy">
            {t.benefitsPrefix}<span className="text-gradient-ci">{t.benefitsHighlight}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-slate-200 p-8 rounded-2xl hover:border-ci-green-400/40 hover:shadow-xl hover:shadow-ci-blue-600/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 bg-ci-green-500/10 text-ci-green-600 rounded-lg flex items-center justify-center mb-5 font-sans font-medium">
                  {i + 1}
                </div>
                <h3 className="text-xl font-sans font-medium text-ci-navy mb-3">{benefit.title}</h3>
                <p className="text-slate-600 font-light leading-relaxed">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables + Technologies */}
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold tracking-[-0.03em] text-3xl mb-8 text-ci-navy">
              {t.deliverPrefix}<span className="text-gradient-ci">{t.deliverHighlight}</span>
            </h2>
            <ul className="space-y-4">
              {service.deliverables.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600 font-light">
                  <div className="w-1.5 h-1.5 bg-ci-blue-600 rounded-full mt-2.5 shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="font-display font-bold tracking-[-0.03em] text-3xl mb-8 text-ci-navy">
              {t.techPrefix}<span className="text-gradient-ci">{t.techHighlight}</span>
            </h2>
            <div className="flex flex-wrap gap-3">
              {service.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full text-sm bg-ci-green-500/10 text-ci-green-600 border border-ci-green-400/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white/50 border-t border-slate-200 py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold tracking-[-0.03em] text-4xl mb-16 text-ci-navy">
            {t.approachPrefix}<span className="text-gradient-ci">{t.approachHighlight}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group"
              >
                <div className="text-6xl font-sans font-bold text-slate-200 absolute -top-10 -left-4 z-0 group-hover:text-ci-green-600 transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="relative z-10 pt-4">
                  <h3 className="text-xl font-sans font-medium mb-4 text-ci-green-600">{step.title}</h3>
                  <p className="text-slate-600 font-light text-sm leading-relaxed">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-24 bg-transparent border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold tracking-[-0.03em] text-4xl mb-12 text-ci-navy">
            {t.otherPrefix}<span className="text-gradient-ci">{t.otherHighlight}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.map((other, i) => {
              const OtherIcon = other.icon;
              return (
                <motion.div
                  key={other.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={`/services/${other.slug}/`}
                    className="block h-full bg-white border border-slate-200 p-6 rounded-2xl hover:border-ci-green-400/40 hover:shadow-xl hover:shadow-ci-blue-600/10 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-10 h-10 bg-ci-green-500/10 text-ci-green-600 rounded-lg flex items-center justify-center mb-4">
                      <OtherIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-sans font-medium text-ci-navy mb-2">{other.title}</h3>
                    <p className="text-slate-600 font-light text-sm leading-relaxed mb-4">{other.tagline}</p>
                    <span className="inline-flex items-center gap-1 text-sm text-ci-green-600">
                      {t.learnMore} <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ci-navy py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold tracking-[-0.03em] text-3xl md:text-4xl text-ci-navy mb-4">
            {t.ctaTitle}
          </h2>
          <p className="text-ci-blue-100 font-light text-lg mb-8">
            {t.ctaText}
          </p>
          <Link
            to="/contact/"
            className="inline-flex items-center gap-2 bg-white text-ci-blue-700 hover:bg-indigo-50 font-medium px-8 py-4 rounded-full transition-colors"
          >
            {t.ctaButton} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
