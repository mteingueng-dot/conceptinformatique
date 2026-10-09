import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  BarChart3,
  Database,
  Code,
  LifeBuoy,
  Bot,
  Compass,
  Lightbulb,
  ShieldCheck,
  Cpu,
  ArrowRight,
  Activity,
  Briefcase,
  GraduationCap,
  Award,
  BookOpen,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface Bi {
  fr: string;
  en: string;
}

interface InfoItem {
  icon: LucideIcon;
  title: Bi;
  desc: Bi;
}

const expertises: InfoItem[] = [
  {
    icon: BarChart3,
    title: { fr: 'Business Intelligence', en: 'Business Intelligence' },
    desc: {
      fr: 'Tableaux de bord et analyses pour des décisions éclairées.',
      en: 'Dashboards and analytics for informed decisions.',
    },
  },
  {
    icon: Database,
    title: { fr: 'Ingénierie de données', en: 'Data Engineering' },
    desc: {
      fr: "Architecture de données, pipelines ETL et gouvernance de l'information.",
      en: 'Data architecture, ETL pipelines and information governance.',
    },
  },
  {
    icon: Code,
    title: { fr: 'Développement logiciel', en: 'Software Development' },
    desc: {
      fr: 'Applications sur mesure, performantes et évolutives.',
      en: 'Custom applications that are high-performing and scalable.',
    },
  },
  {
    icon: LifeBuoy,
    title: { fr: 'Support TI', en: 'IT Support' },
    desc: {
      fr: 'Une assistance réactive et sécuritaire pour que vos opérations roulent sans interruption.',
      en: 'Responsive, secure assistance to keep your operations running smoothly.',
    },
  },
  {
    icon: Bot,
    title: { fr: 'Automatisation IA', en: 'AI Automation' },
    desc: {
      fr: 'Des processus automatisés et intelligents pour accroître votre efficacité.',
      en: 'Automated, intelligent processes to boost efficiency.',
    },
  },
  {
    icon: Compass,
    title: { fr: 'Transformation numérique', en: 'Digital Transformation' },
    desc: {
      fr: 'Un accompagnement stratégique pour votre évolution technologique.',
      en: 'Strategic guidance for your technological evolution.',
    },
  },
];

const values: Array<InfoItem & { slug: string }> = [
  {
    icon: Lightbulb,
    title: { fr: 'Innovation', en: 'Innovation' },
    desc: {
      fr: 'Nous restons à la fine pointe pour offrir des solutions de pointe.',
      en: 'We stay at the forefront to deliver cutting-edge solutions.',
    },
    slug: 'innovation',
  },
  {
    icon: ShieldCheck,
    title: { fr: 'Rigueur', en: 'Rigor' },
    desc: {
      fr: 'La précision et la qualité guident chacun de nos déploiements.',
      en: 'Precision and quality guide each of our deployments.',
    },
    slug: 'rigor',
  },
  {
    icon: Cpu,
    title: { fr: 'Expertise', en: 'Expertise' },
    desc: {
      fr: 'Une maîtrise technique approfondie au service de vos objectifs.',
      en: 'Deep technical mastery in the service of your goals.',
    },
    slug: 'expertise',
  },
];

const profileParagraphs: Bi[] = [
  {
    fr: "Forte d'une formation en technologies de l'information, notre équipe possède de l'expérience en analyse de données, en développement logiciel et en soutien aux opérations TI.",
    en: 'With a background in information technology, our team brings experience in data analysis, software development and IT operations support.',
  },
  {
    fr: 'Cette polyvalence nous permet de comprendre à la fois les enjeux d’affaires et les contraintes techniques, afin de livrer des solutions concrètes et fiables, adaptées à chaque organisation.',
    en: 'This versatility lets us understand both business challenges and technical constraints, so we can deliver concrete, reliable solutions tailored to each organization.',
  },
];

const profileHighlights: Array<InfoItem & { slug: string }> = [
  {
    icon: Briefcase,
    title: { fr: 'Expérience concrète', en: 'Hands-on experience' },
    desc: {
      fr: 'Des projets réalisés en contexte réel, de la conception au déploiement.',
      en: 'Projects carried out in real-world settings, from design to deployment.',
    },
    slug: 'experience-concrete',
  },
  {
    icon: BarChart3,
    title: { fr: 'Approche axée sur les données', en: 'Data-driven approach' },
    desc: {
      fr: 'Des décisions appuyées par des analyses fiables et mesurables.',
      en: 'Decisions backed by reliable, measurable analysis.',
    },
    slug: 'approche-axee-donnees',
  },
  {
    icon: Award,
    title: { fr: 'Qualité et fiabilité', en: 'Quality & reliability' },
    desc: {
      fr: 'Des livrables rigoureux, documentés et maintenables.',
      en: 'Rigorous, documented and maintainable deliverables.',
    },
    slug: 'qualite-fiabilite',
  },
];

const education: InfoItem[] = [
  {
    icon: GraduationCap,
    title: { fr: 'Formation en informatique', en: 'Computer science training' },
    desc: {
      fr: "Solides bases en informatique, en développement logiciel et en systèmes d'information.",
      en: 'Solid foundation in computing, software development and information systems.',
    },
  },
  {
    icon: Database,
    title: { fr: 'Données et intelligence d’affaires', en: 'Data and business intelligence' },
    desc: {
      fr: 'Spécialisation en modélisation de données, ETL et analytique décisionnelle.',
      en: 'Specialization in data modeling, ETL and decision analytics.',
    },
  },
  {
    icon: BookOpen,
    title: { fr: 'Formation continue', en: 'Continuing education' },
    desc: {
      fr: "Perfectionnement constant, notamment en automatisation et en intelligence artificielle.",
      en: 'Constant upskilling, particularly in automation and artificial intelligence.',
    },
  },
];

const barHeights: number[] = [35, 55, 42, 70, 50, 82, 60, 90, 74, 100];

const chips: { icon: LucideIcon; label: Bi }[] = [
  { icon: Database, label: { fr: 'Données', en: 'Data' } },
  { icon: Cpu, label: { fr: 'Pipelines ETL', en: 'ETL pipelines' } },
  { icon: BarChart3, label: { fr: 'Décisions', en: 'Decisions' } },
];

const copy = {
  heroBadge: { fr: 'À propos', en: 'About' },
  heroTitlePrefix: { fr: 'À propos de', en: 'About' },
  heroIntro: {
    fr: 'Chez Concept Informatique Inc., nous transformons les défis technologiques en occasions de croissance.',
    en: 'At Concept Informatique Inc., we turn technological challenges into growth opportunities.',
  },
  slogan: {
    fr: 'Votre performance. Notre technologie.',
    en: 'Your performance. Our technology.',
  },
  missionPrefix: { fr: 'Notre', en: 'Our' },
  missionAccent: { fr: 'mission', en: 'mission' },
  mission1: {
    fr: 'Notre équipe accompagne les entreprises dans leur évolution numérique en créant des solutions intelligentes, performantes et entièrement sur mesure.',
    en: 'Our team supports businesses in their digital evolution by creating intelligent, high-performing and fully customized solutions.',
  },
  mission2: {
    fr: "Experts en Business Intelligence, en ingénierie de données, en développement logiciel, en support TI et en automatisation IA, nous aidons les organisations à tirer pleinement parti de leurs données pour prendre de meilleures décisions, plus rapidement.",
    en: 'As experts in Business Intelligence, Data Engineering, software development, IT support and AI automation, we help organizations fully harness the power of their data to make better decisions, faster.',
  },
  mission3: {
    fr: "Nous allions innovation, rigueur et expertise pour livrer des technologies qui optimisent vos opérations, renforcent votre efficacité et propulsent votre entreprise vers l'avenir.",
    en: 'We combine innovation, rigor and expertise to deliver technologies that optimize your operations, strengthen your efficiency and propel your business into the future.',
  },
  preview: { fr: '// aperçu illustratif', en: '// illustrative preview' },
  expertisePrefix: { fr: 'Nos', en: 'Our key' },
  expertiseAccent: { fr: 'expertises clés', en: 'expertise' },
  valuesPrefix: { fr: 'Nos', en: 'Our' },
  valuesAccent: { fr: 'valeurs', en: 'values' },
  profilePrefix: { fr: 'Notre', en: 'Our professional' },
  profileAccent: { fr: 'profil professionnel', en: 'profile' },
  educationPrefix: { fr: 'Notre', en: 'Our' },
  educationAccent: { fr: 'formation', en: 'education' },
  ctaPrefix: { fr: 'Explorons vos', en: "Let's explore your" },
  ctaAccent: { fr: 'opportunités', en: 'opportunities' },
  ctaButton: { fr: 'Parler à un expert', en: 'Talk to an expert' },
};

const expertiseSlugs: Record<string, string> = {
  'Business Intelligence': 'business-intelligence',
  'Ingénierie de données': 'data-engineering',
  'Développement logiciel': 'software-development',
  'Support TI': 'it-support',
  'Automatisation IA': 'ai-automation',
  'Transformation numérique': 'digital-transformation',
};

const servicePaths: Record<string, string> = {
  'Support TI': '/services/support-ti-securite',
  'Automatisation IA': '/services/automatisation-ia',
  'Transformation numérique': '/services/transformation-numerique',
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

export default function AboutPage() {
  const { lang } = useLanguage();
  const t = (b: Bi): string => b[lang];

  return (
    <div id="about-page-root-k8n2m4p1" className="pt-20 bg-slate-950 text-slate-200 min-h-screen">
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
              {t(copy.heroTitlePrefix)} <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Concept Informatique Inc.</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl font-light mb-6 max-w-3xl mx-auto">
              {t(copy.heroIntro)}
            </p>
            <p className="font-mono text-cyan-300 text-sm md:text-base">{t(copy.slogan)}</p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-white text-3xl md:text-5xl font-semibold mb-8">
              {t(copy.missionPrefix)} <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">{t(copy.missionAccent)}</span>
            </h2>
            <div className="space-y-6 text-slate-300 font-light leading-relaxed text-lg">
              <p>{t(copy.mission1)}</p>
              <p>{t(copy.mission2)}</p>
              <p>{t(copy.mission3)}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/70 border border-slate-700 rounded-xl backdrop-blur transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_24px_rgba(34,211,238,0.35)] p-6 md:p-8"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400/70"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400/70"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-400/70"></span>
              </div>
              <span className="font-mono text-xs text-slate-400">{t(copy.preview)}</span>
            </div>
            <div className="flex items-end gap-2 h-48 mb-8">
              {barHeights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.06 }}
                  className={`flex-1 rounded-t-md bg-gradient-to-t from-cyan-400 to-violet-500 ${
                    i === barHeights.length - 1 ? 'shadow-[0_0_24px_rgba(34,211,238,0.35)]' : ''
                  }`}
                />
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {chips.map((chip) => (
                <span
                  key={chip.label.en}
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 font-mono text-xs px-3 py-1.5"
                >
                  <chip.icon className="w-3.5 h-3.5" />
                  {t(chip.label)}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertises */}
      <section id="expertises-section" className="relative bg-slate-950 py-24">
        <div className="absolute inset-0 pointer-events-none opacity-[0.07]" style={gridStyle}></div>
        <div className="absolute inset-0 pointer-events-none" style={fadeStyle}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <button onClick={() => document.getElementById('expertises-section')?.scrollIntoView({ behavior: 'smooth' })} className="w-full text-center hover:opacity-80 transition-opacity cursor-pointer">
              <h2 className="font-display text-white text-3xl md:text-5xl font-semibold">
                {t(copy.expertisePrefix)} <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">{t(copy.expertiseAccent)}</span>
              </h2>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertises.map((item, i) => {
              const slug = expertiseSlugs[item.title.fr] || expertiseSlugs[item.title.en] || '';
              return (
                <Link
                  key={item.title.en}
                  to={servicePaths[item.title.fr] ?? `/about/expertises/${slug}`}
                  className="group no-underline"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-slate-900/70 border border-slate-700 rounded-xl backdrop-blur transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_24px_rgba(34,211,238,0.35)] p-8 h-full"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-sm text-slate-500">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="font-display text-white text-xl font-medium mb-3">{t(item.title)}</h3>
                    <p className="text-slate-400 font-light leading-relaxed">{t(item.desc)}</p>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section id="valeurs-section" className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Link to="/about/values" className="w-full text-center hover:opacity-80 transition-opacity">
              <h2 className="font-display text-white text-3xl md:text-5xl font-semibold">
                {t(copy.valuesPrefix)} <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">{t(copy.valuesAccent)}</span>
              </h2>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((item, i) => (
              <Link
                key={item.title.en}
                to={`/about/values/${item.slug}`}
                className="group no-underline"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-slate-900/70 border border-slate-700 rounded-xl backdrop-blur transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_24px_rgba(34,211,238,0.35)] p-8 text-center h-full"
                >
                  <div className="w-14 h-14 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-white text-xl font-medium mb-3">{t(item.title)}</h3>
                  <p className="text-slate-400 font-light leading-relaxed">{t(item.desc)}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Profil professionnel */}
      <section id="profil-section" className="relative bg-slate-950 py-24">
        <div className="absolute inset-0 pointer-events-none opacity-[0.07]" style={gridStyle}></div>
        <div className="absolute inset-0 pointer-events-none" style={fadeStyle}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Link to="/about/profil-professionnel" className="w-full text-center hover:opacity-80 transition-opacity">
              <h2 className="font-display text-white text-3xl md:text-5xl font-semibold">
                {t(copy.profilePrefix)} <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">{t(copy.profileAccent)}</span>
              </h2>
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6 text-slate-300 font-light leading-relaxed text-lg">
                {profileParagraphs.map((p) => (
                  <p key={p.en}>{t(p)}</p>
                ))}
              </div>
            </motion.div>
            <div className="space-y-6">
              {profileHighlights.map((item, i) => (
                <Link
                  key={item.title.en}
                  to={`/about/profils/${item.slug}`}
                  className="group no-underline"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-start gap-5 bg-slate-900/70 border border-slate-700 rounded-xl backdrop-blur transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_24px_rgba(34,211,238,0.35)] p-6"
                  >
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-white text-xl font-medium mb-2">{t(item.title)}</h3>
                      <p className="text-slate-400 font-light leading-relaxed">{t(item.desc)}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Formation */}
      <section id="formation-section" className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <button onClick={() => document.getElementById('formation-section')?.scrollIntoView({ behavior: 'smooth' })} className="w-full text-center hover:opacity-80 transition-opacity cursor-pointer">
              <h2 className="font-display text-white text-3xl md:text-5xl font-semibold">
                {t(copy.educationPrefix)} <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">{t(copy.educationAccent)}</span>
              </h2>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((item, i) => (
              <motion.div
                key={item.title.en}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-slate-900/70 border border-slate-700 rounded-xl backdrop-blur transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_24px_rgba(34,211,238,0.35)] p-8 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-white text-xl font-medium mb-3">{t(item.title)}</h3>
                <p className="text-slate-400 font-light leading-relaxed">{t(item.desc)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-slate-950 py-24">
        <div className="absolute inset-0 pointer-events-none" style={glowStyle}></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="block rounded-2xl border border-cyan-400/30 bg-slate-800/70 p-12 shadow-[0_0_24px_rgba(34,211,238,0.35)] text-center">
            <h2 className="font-display text-white text-3xl md:text-5xl font-semibold mb-4">
              {t(copy.ctaPrefix)} <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">{t(copy.ctaAccent)}</span>
            </h2>
            <p className="font-mono text-cyan-300 mb-10">{t(copy.slogan)}</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-cyan-400 text-slate-950 font-medium px-8 py-4 rounded-full hover:bg-cyan-300 hover:shadow-[0_0_24px_rgba(34,211,238,0.35)] transition-all"
            >
              {t(copy.ctaButton)}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
