import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { values } from '../data/values';
import { useLanguage } from '../i18n/LanguageContext';

const copy = {
  fr: {
    notFoundPrefix: 'Valeur ',
    notFoundHighlight: 'introuvable',
    notFoundText: "La valeur que vous recherchez n'existe pas ou a été déplacée.",
    backToValues: '← Toutes les valeurs',
    requestConsultation: 'En savoir plus',
    descriptionPrefix: 'Notre ',
    descriptionHighlight: 'valeur',
    keyPoints: 'Points clés',
    benefitsPrefix: 'Les ',
    benefitsHighlight: 'avantages',
    examplesPrefix: 'Comment nous ',
    examplesHighlight: 'l\'appliquons',
    featuresPrefix: 'Ce que nous ',
    featuresHighlight: 'offrons',
    approachPrefix: 'Notre ',
    approachHighlight: 'engagement',
    otherPrefix: 'Autres ',
    otherHighlight: 'valeurs',
    learnMore: 'En savoir plus',
    ctaTitle: 'Rejoignez nos partenaires de confiance',
    ctaText: 'Découvrez comment nos valeurs transforment les projets en succès durables.',
    ctaButton: 'Contacter Concept Informatique',
  },
  en: {
    notFoundPrefix: 'Value ',
    notFoundHighlight: 'not found',
    notFoundText: 'The value you are looking for does not exist or has been moved.',
    backToValues: '← All values',
    requestConsultation: 'Learn more',
    descriptionPrefix: 'Our ',
    descriptionHighlight: 'value',
    keyPoints: 'Key points',
    benefitsPrefix: 'The ',
    benefitsHighlight: 'benefits',
    examplesPrefix: 'How we ',
    examplesHighlight: 'apply it',
    featuresPrefix: 'What we ',
    featuresHighlight: 'offer',
    approachPrefix: 'Our ',
    approachHighlight: 'commitment',
    otherPrefix: 'Other ',
    otherHighlight: 'values',
    learnMore: 'Learn more',
    ctaTitle: 'Join our trusted partners',
    ctaText: 'Discover how our values transform projects into lasting success.',
    ctaButton: 'Contact Concept Informatique',
  },
};

export default function ValueDetailPage() {
  const { lang } = useLanguage();
  const t = copy[lang];
  const { slug } = useParams<{ slug: string }>();
  const value = values.find((v) => v.slug === slug);

  if (!value) {
    return (
      <div id="value-not-found-q4w7e2r9" className="pt-20 bg-slate-950 text-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="font-sans font-extralight text-5xl md:text-6xl mb-6">
            {t.notFoundPrefix}<span className="font-display italic text-emerald-400">{t.notFoundHighlight}</span>
          </h1>
          <p className="text-slate-400 text-lg font-light mb-10">
            {t.notFoundText}
          </p>
          <Link
            to="/values"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-medium px-8 py-4 rounded-full transition-colors"
          >
            {t.backToValues}
          </Link>
        </div>
      </div>
    );
  }

  const title = value.title[lang];
  const description = value.description[lang];
  const tagline = value.tagline[lang];
  const words = title.split(' ');
  const lastWord = words.length > 1 ? words[words.length - 1] : '';
  const firstWords = words.length > 1 ? words.slice(0, -1).join(' ') : title;
  const Icon = value.icon;
  const otherValues = values.filter((v) => v.slug !== value.slug);

  return (
    <div id="value-detail-root-z6c3b8n1" className="pt-20 bg-slate-950 text-white min-h-screen">
      {/* Header */}
      <section className="bg-slate-900/60 border-b border-slate-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/values"
              className="inline-block text-sm text-slate-400 hover:text-emerald-400 transition-colors mb-10"
            >
              {t.backToValues}
            </Link>
            <div className="w-14 h-14 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center mb-6">
              <Icon className="w-7 h-7" />
            </div>
            <h1 className="font-sans font-extralight text-white text-5xl md:text-7xl mb-6">
              {firstWords}{' '}
              {lastWord && <span className="font-display italic text-emerald-400">{lastWord}</span>}
            </h1>
            <p className="text-emerald-400 text-xl md:text-2xl font-light max-w-3xl mb-6">{tagline}</p>
            <p className="text-slate-400 text-lg font-light max-w-3xl leading-relaxed mb-10">{description}</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-medium px-8 py-4 rounded-full transition-colors"
            >
              {t.requestConsultation} <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Description + checklist */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-sans font-light text-4xl mb-6 text-white">
              {t.descriptionPrefix}<span className="font-display italic text-emerald-400">{t.descriptionHighlight}</span>
            </h2>
            <p className="text-slate-400 text-lg font-light leading-relaxed">{description}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-slate-900 border border-slate-800 p-8 rounded-2xl"
          >
            <h3 className="text-xl font-sans font-medium text-white mb-6">{t.keyPoints}</h3>
            <ul className="space-y-4">
              {value.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300 font-light">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-slate-900/60 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans font-light text-4xl mb-12 text-white">
            {t.benefitsPrefix}<span className="font-display italic text-emerald-400">{t.benefitsHighlight}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {value.benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 bg-emerald-500/10 text-emerald-400 rounded-lg flex items-center justify-center mb-5 font-sans font-medium">
                  {i + 1}
                </div>
                <h3 className="text-xl font-sans font-medium text-white mb-3">{benefit}</h3>
                <p className="text-slate-400 font-light leading-relaxed text-sm">
                  Un bénéfice fondamental de notre engagement.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples + Features */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-sans font-light text-3xl mb-8 text-white">
              {t.examplesPrefix}<span className="font-display italic text-emerald-400">{t.examplesHighlight}</span>
            </h2>
            <ul className="space-y-4">
              {value.examples.map((example, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300 font-light">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2.5 shrink-0"></div>
                  {example}
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
            <h2 className="font-sans font-light text-3xl mb-8 text-white">
              {t.featuresPrefix}<span className="font-display italic text-emerald-400">{t.featuresHighlight}</span>
            </h2>
            <div className="flex flex-wrap gap-3">
              {value.features.map((feature, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full text-sm bg-emerald-500/10 text-emerald-300 border border-emerald-500/30"
                >
                  {feature}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process - 4 step approach */}
      <section className="bg-slate-900 border-t border-slate-800 py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans font-light text-4xl mb-16 text-white">
            {t.approachPrefix}<span className="font-display italic text-emerald-400">{t.approachHighlight}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Compréhension',
                text: 'Immersion complète dans votre vision et vos objectifs',
              },
              {
                title: 'Intégration',
                text: 'Alignement de nos valeurs avec votre culture',
              },
              {
                title: 'Exécution',
                text: 'Mise en œuvre avec discipline et excellence',
              },
              {
                title: 'Durabilité',
                text: 'Partenariat long terme et évolution continue',
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group"
              >
                <div className="text-6xl font-sans font-bold text-slate-800 absolute -top-10 -left-4 z-0 group-hover:text-emerald-500/30 transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="relative z-10 pt-4">
                  <h3 className="text-xl font-sans font-medium mb-4 text-emerald-400">{step.title}</h3>
                  <p className="text-slate-400 font-light text-sm leading-relaxed">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other values */}
      <section className="py-24 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans font-light text-4xl mb-12 text-white">
            {t.otherPrefix}<span className="font-display italic text-emerald-400">{t.otherHighlight}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherValues.map((other, i) => {
              const OtherIcon = other.icon;
              const otherTitle = other.title[lang];
              const otherTagline = other.tagline[lang];
              return (
                <motion.div
                  key={other.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={`/values/${other.slug}`}
                    className="block h-full bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-10 h-10 bg-emerald-500/10 text-emerald-400 rounded-lg flex items-center justify-center mb-4">
                      <OtherIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-sans font-medium text-white mb-2">{otherTitle}</h3>
                    <p className="text-slate-400 font-light text-sm leading-relaxed mb-4">{otherTagline}</p>
                    <span className="inline-flex items-center gap-1 text-sm text-emerald-400">
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
      <section className="bg-indigo-700 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sans font-light text-3xl md:text-4xl text-white mb-4">
            {t.ctaTitle}
          </h2>
          <p className="text-indigo-100 font-light text-lg mb-8">
            {t.ctaText}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-indigo-700 hover:bg-indigo-50 font-medium px-8 py-4 rounded-full transition-colors"
          >
            {t.ctaButton} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
