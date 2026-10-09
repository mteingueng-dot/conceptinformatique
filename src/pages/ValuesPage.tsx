import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Lightbulb,
  ShieldCheck,
  Cpu,
  ArrowRight,
  Activity,
  TrendingUp,
  Zap,
  CheckCircle,
  Users,
  Target,
  Layers,
  Lock,
  Gauge,
  Code,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface Bi {
  fr: string;
  en: string;
}

interface Benefit {
  icon: LucideIcon;
  text: Bi;
}

interface Example {
  text: Bi;
}

interface ValueSection {
  icon: LucideIcon;
  title: Bi;
  description: Bi;
  tagline: Bi;
  benefits: Benefit[];
  examples: Example[];
}

const valueSections: ValueSection[] = [
  {
    icon: Lightbulb,
    title: { fr: 'Innovation', en: 'Innovation' },
    description: {
      fr: 'Nous restons à la fine pointe de la technologie pour transformer les défis en opportunités de croissance. Notre approche proactive nous pousse à explorer de nouvelles solutions et à anticiper les besoins futurs de nos clients.',
      en: 'We stay at the forefront of technology to transform challenges into growth opportunities. Our proactive approach drives us to explore new solutions and anticipate our clients\' future needs.',
    },
    tagline: {
      fr: 'Créer des solutions d\'avant-garde',
      en: 'Creating cutting-edge solutions',
    },
    benefits: [
      {
        icon: TrendingUp,
        text: {
          fr: 'Adoption des dernières technologies et frameworks',
          en: 'Adoption of latest technologies and frameworks',
        },
      },
      {
        icon: Zap,
        text: {
          fr: 'Processus itératif et agile pour une évolution rapide',
          en: 'Iterative and agile process for rapid evolution',
        },
      },
      {
        icon: Target,
        text: {
          fr: 'Anticipation des tendances du marché',
          en: 'Anticipation of market trends',
        },
      },
    ],
    examples: [
      {
        text: {
          fr: 'Intégration d\'intelligence artificielle et d\'automatisation dans les solutions existantes',
          en: 'Integration of artificial intelligence and automation into existing solutions',
        },
      },
      {
        text: {
          fr: 'Développement de pipelines de données modernes et scalables',
          en: 'Development of modern and scalable data pipelines',
        },
      },
      {
        text: {
          fr: 'Prototypage rapide et validation de concepts pour tester de nouvelles idées',
          en: 'Rapid prototyping and concept validation to test new ideas',
        },
      },
    ],
  },
  {
    icon: ShieldCheck,
    title: { fr: 'Rigueur', en: 'Rigor' },
    description: {
      fr: 'La précision et la qualité guident chaque étape de nos déploiements. Nous appliquons des standards élevés de documentation, de test et de maintenance pour assurer la fiabilité et la pérennité des solutions livrées.',
      en: 'Precision and quality guide every step of our deployments. We apply high standards of documentation, testing and maintenance to ensure the reliability and longevity of delivered solutions.',
    },
    tagline: {
      fr: 'Garantir la qualité et la fiabilité',
      en: 'Ensuring quality and reliability',
    },
    benefits: [
      {
        icon: CheckCircle,
        text: {
          fr: 'Tests exhaustifs et assurance qualité rigoureuse',
          en: 'Exhaustive testing and rigorous quality assurance',
        },
      },
      {
        icon: Lock,
        text: {
          fr: 'Conformité aux standards de sécurité et de gouvernance',
          en: 'Compliance with security and governance standards',
        },
      },
      {
        icon: Gauge,
        text: {
          fr: 'Documentation complète pour faciliter la maintenance',
          en: 'Complete documentation to facilitate maintenance',
        },
      },
    ],
    examples: [
      {
        text: {
          fr: 'Mise en place de processus de révision de code et de CI/CD',
          en: 'Implementation of code review processes and CI/CD',
        },
      },
      {
        text: {
          fr: 'Audits de sécurité réguliers et gestion des risques',
          en: 'Regular security audits and risk management',
        },
      },
      {
        text: {
          fr: 'Plans de récupération d\'urgence et de continuité d\'affaires',
          en: 'Disaster recovery and business continuity plans',
        },
      },
    ],
  },
  {
    icon: Cpu,
    title: { fr: 'Expertise', en: 'Expertise' },
    description: {
      fr: 'Une maîtrise technique approfondie au service de vos objectifs. Notre équipe pluridisciplinaire combine des décennies d\'expérience en développement logiciel, analytique de données et support TI pour fournir des solutions hautement spécialisées.',
      en: 'Deep technical mastery in the service of your goals. Our multidisciplinary team combines decades of experience in software development, data analytics and IT support to deliver highly specialized solutions.',
    },
    tagline: {
      fr: 'Expertise technique au plus haut niveau',
      en: 'Technical expertise at its finest',
    },
    benefits: [
      {
        icon: Users,
        text: {
          fr: 'Équipe de spécialistes certifiés et expérimentés',
          en: 'Team of certified and experienced specialists',
        },
      },
      {
        icon: Layers,
        text: {
          fr: 'Compétences variées couvrant l\'ensemble de la stack technologique',
          en: 'Varied skills covering the entire technology stack',
        },
      },
      {
        icon: Code,
        text: {
          fr: 'Capacité à résoudre des problèmes complexes et multi-domaines',
          en: 'Ability to solve complex, multi-domain problems',
        },
      },
    ],
    examples: [
      {
        text: {
          fr: 'Architecture de solutions enterprise résilientes et performantes',
          en: 'Architecture of resilient and high-performing enterprise solutions',
        },
      },
      {
        text: {
          fr: 'Optimisation de bases de données et de pipelines analytiques',
          en: 'Optimization of databases and analytical pipelines',
        },
      },
      {
        text: {
          fr: 'Mentorat et formation continue pour renforcer les capacités internes',
          en: 'Mentoring and ongoing training to strengthen internal capabilities',
        },
      },
    ],
  },
];

const copy = {
  heroBadge: { fr: 'Nos valeurs', en: 'Our values' },
  heroTitle: { fr: 'Nos valeurs', en: 'Our values' },
  heroIntro: {
    fr: 'Les principes qui guident nos décisions et nos actions au quotidien.',
    en: 'The principles that guide our decisions and actions every day.',
  },
  heroSubtitle: {
    fr: 'Innovation, rigueur et expertise : le fondement de notre excellence.',
    en: 'Innovation, rigor and expertise: the foundation of our excellence.',
  },
  ctaPrefix: { fr: 'Prêt à explorer vos', en: "Ready to explore your" },
  ctaAccent: { fr: 'opportunités?', en: 'opportunities?' },
  ctaButton: { fr: 'Contactez-nous maintenant', en: 'Get in touch' },
};

const gridStyle = {
  backgroundImage:
    'linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)',
  backgroundSize: '48px 48px',
};

const glowStyle = {
  background: 'radial-gradient(ellipse at top, rgba(34,211,238,0.18), transparent 60%)',
};

const fadeStyle = {
  background: 'radial-gradient(ellipse at center, transparent 0%, #04070d 80%)',
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const valueSlugMap: { [key: string]: string } = {
  Innovation: 'innovation',
  Rigor: 'rigor',
  Expertise: 'expertise',
};

export default function ValuesPage() {
  const { lang } = useLanguage();
  const t = (b: Bi): string => b[lang];

  return (
    <div id="values-page-root-v3x4m8p2" className="pt-20 bg-slate-950 text-slate-200 min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 py-28 md:py-36">
        <div className="absolute inset-0 pointer-events-none opacity-[0.07]" style={gridStyle}></div>
        <div className="absolute inset-0 pointer-events-none" style={glowStyle}></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 font-mono uppercase tracking-widest text-xs border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 rounded-full px-4 py-2 mb-8">
              <Activity className="w-4 h-4" />
              {t(copy.heroBadge)}
            </span>
            <h1 className="font-display text-white text-4xl md:text-6xl font-semibold mb-6 leading-tight">
              {t(copy.heroTitle)}{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                Concept Informatique Inc.
              </span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl font-light mb-6 max-w-3xl mx-auto">
              {t(copy.heroIntro)}
            </p>
            <p className="font-mono text-cyan-300 text-sm md:text-base">{t(copy.heroSubtitle)}</p>
          </motion.div>
        </div>
      </section>

      {/* Value Sections */}
      <motion.div
        className="relative bg-slate-950"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.07]" style={gridStyle}></div>
        <div className="absolute inset-0 pointer-events-none" style={fadeStyle}></div>

        {valueSections.map((value, idx) => (
          <section
            key={value.title.en}
            className={`relative py-24 ${idx % 2 === 0 ? 'bg-slate-950' : 'bg-slate-900'}`}
          >
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left: Content */}
                <motion.div variants={itemVariants}>
                  <Link
                    to={`/about/values/${valueSlugMap[value.title.en]}`}
                    className="flex items-center gap-4 mb-8 group no-underline hover:opacity-80 transition-opacity"
                  >
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div>
                      <h2 className="font-display text-white text-3xl md:text-4xl font-semibold">
                        {t(value.title)}
                      </h2>
                      <p className="text-cyan-300 font-mono text-sm mt-1">{t(value.tagline)}</p>
                    </div>
                  </Link>

                  <p className="text-slate-300 font-light leading-relaxed text-lg mb-10">
                    {t(value.description)}
                  </p>

                  {/* Benefits */}
                  <div className="mb-10">
                    <h3 className="font-display text-white text-xl font-medium mb-6">
                      {lang === 'fr' ? 'Avantages clés' : 'Key benefits'}
                    </h3>
                    <div className="space-y-4">
                      {value.benefits.map((benefit) => (
                        <motion.div
                          key={benefit.text.en}
                          variants={itemVariants}
                          className="flex items-start gap-4 bg-slate-900/70 border border-slate-700 rounded-lg backdrop-blur transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_16px_rgba(34,211,238,0.25)] p-4"
                        >
                          <div className="w-6 h-6 shrink-0 rounded-lg bg-cyan-400/10 text-cyan-400 flex items-center justify-center mt-1">
                            <benefit.icon className="w-4 h-4" />
                          </div>
                          <span className="text-slate-300 font-light">{t(benefit.text)}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Right: Examples */}
                <motion.div
                  variants={itemVariants}
                  className="bg-slate-900/70 border border-slate-700 rounded-xl backdrop-blur transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_24px_rgba(34,211,238,0.35)] p-8"
                >
                  <h3 className="font-display text-white text-xl font-medium mb-8">
                    {lang === 'fr' ? 'Exemples concrets' : 'Concrete examples'}
                  </h3>
                  <div className="space-y-6">
                    {value.examples.map((example, i) => (
                      <motion.div
                        key={i}
                        variants={itemVariants}
                        className="flex items-start gap-4"
                      >
                        <CheckCircle className="w-5 h-5 shrink-0 text-cyan-400 mt-1" />
                        <p className="text-slate-300 font-light leading-relaxed">
                          {t(example.text)}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        ))}
      </motion.div>

      {/* Summary Section */}
      <section className="relative bg-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-display text-white text-2xl md:text-3xl font-semibold mb-6">
              {lang === 'fr'
                ? 'Un engagement envers l\'excellence'
                : 'A commitment to excellence'}
            </h2>
            <p className="text-slate-300 font-light leading-relaxed text-lg">
              {lang === 'fr'
                ? 'Ces trois valeurs fondamentales — innovation, rigueur et expertise — sont interconnectées et se renforcent mutuellement. Elles forment la base de chaque projet que nous entreprendre et chaque relation que nous établissons avec nos clients. Ensemble, elles nous permettent de créer de la valeur durable et d\'accompagner votre organisation vers le succès.'
                : 'These three core values — innovation, rigor and expertise — are interconnected and reinforce each other. They form the foundation of every project we undertake and every relationship we establish with our clients. Together, they enable us to create lasting value and support your organization toward success.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-slate-950 py-24">
        <div className="absolute inset-0 pointer-events-none opacity-[0.07]" style={gridStyle}></div>
        <div className="absolute inset-0 pointer-events-none" style={glowStyle}></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="block rounded-2xl border border-cyan-400/30 bg-slate-800/70 p-12 shadow-[0_0_24px_rgba(34,211,238,0.35)] text-center"
          >
            <h2 className="font-display text-white text-3xl md:text-5xl font-semibold mb-4">
              {t(copy.ctaPrefix)}{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                {t(copy.ctaAccent)}
              </span>
            </h2>
            <p className="text-slate-300 text-lg font-light mb-10 max-w-2xl mx-auto">
              {lang === 'fr'
                ? 'Découvrez comment nos valeurs peuvent transformer votre organisation et créer une réelle différence.'
                : 'Discover how our values can transform your organization and make a real difference.'}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-cyan-400 text-slate-950 font-medium px-8 py-4 rounded-full hover:bg-cyan-300 hover:shadow-[0_0_24px_rgba(34,211,238,0.35)] transition-all"
            >
              {t(copy.ctaButton)}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
