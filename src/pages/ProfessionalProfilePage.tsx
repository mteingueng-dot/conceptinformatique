import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  BarChart3,
  Award,
  GraduationCap,
  Database,
  BookOpen,
  Compass,
  Lightbulb,
  Users,
  Zap,
  Target,
  Trophy,
  ArrowRight,
  Activity,
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

const expertiseAreas: Array<InfoItem & { slug: string }> = [
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

const teamBackground: InfoItem[] = [
  {
    icon: Compass,
    title: { fr: 'Orientation métier', en: 'Business-oriented' },
    desc: {
      fr: 'Une compréhension profonde des enjeux d\'affaires et des contraintes organisationnelles.',
      en: 'Deep understanding of business challenges and organizational constraints.',
    },
  },
  {
    icon: Lightbulb,
    title: { fr: 'Pensée innovante', en: 'Innovative thinking' },
    desc: {
      fr: 'L\'exploration constante de nouvelles approches et technologies pour offrir des solutions avant-gardistes.',
      en: 'Constant exploration of new approaches and technologies to deliver cutting-edge solutions.',
    },
  },
  {
    icon: Users,
    title: { fr: 'Collaboration efficace', en: 'Effective collaboration' },
    desc: {
      fr: 'Un travail d\'équipe centré sur la communication et le respect des objectifs partagés.',
      en: 'Teamwork centered on communication and shared goals.',
    },
  },
];

const experienceProjects: InfoItem[] = [
  {
    icon: Zap,
    title: { fr: 'Mise en production rapide', en: 'Fast time-to-market' },
    desc: {
      fr: 'Cycles courts et livrables incrémentaux qui accélèrent votre accès aux bénéfices.',
      en: 'Short cycles and incremental deliverables that accelerate your access to benefits.',
    },
  },
  {
    icon: Target,
    title: { fr: 'Alignement avec vos objectifs', en: 'Goal alignment' },
    desc: {
      fr: 'Des projets calibrés pour maximiser le ROI et l\'adoption par vos équipes.',
      en: 'Projects calibrated to maximize ROI and adoption by your teams.',
    },
  },
  {
    icon: Trophy,
    title: { fr: 'Suivi et évolution', en: 'Monitoring & evolution' },
    desc: {
      fr: 'Un accompagnement continu au-delà de la mise en production pour assurer le succès à long terme.',
      en: 'Ongoing support beyond go-live to ensure long-term success.',
    },
  },
];

const educationTraining: InfoItem[] = [
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
    title: { fr: 'Données et intelligence d\'affaires', en: 'Data and business intelligence' },
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

const copy = {
  heroBadge: { fr: 'Profil professionnel', en: 'Professional profile' },
  heroTitle: { fr: 'Notre profil professionnel', en: 'Our professional profile' },
  heroIntro: {
    fr: 'Fondée sur des années d\'expérience en informatique, notre équipe combine expertise technique et compréhension des enjeux d\'affaires.',
    en: 'Built on years of IT experience, our team combines technical expertise with an understanding of business challenges.',
  },
  companyIntro1: {
    fr: "Forte d'une formation en technologies de l'information, notre équipe possède de l'expérience en analyse de données, en développement logiciel et en soutien aux opérations TI.",
    en: 'With a background in information technology, our team brings experience in data analysis, software development and IT operations support.',
  },
  companyIntro2: {
    fr: 'Cette polyvalence nous permet de comprendre à la fois les enjeux d\'affaires et les contraintes techniques, afin de livrer des solutions concrètes et fiables, adaptées à chaque organisation.',
    en: 'This versatility lets us understand both business challenges and technical constraints, so we can deliver concrete, reliable solutions tailored to each organization.',
  },
  expertisePrefix: { fr: 'Nos', en: 'Our key' },
  expertiseAccent: { fr: 'atouts clés', en: 'strengths' },
  teamPrefix: { fr: 'Profil de', en: 'Our' },
  teamAccent: { fr: 'notre équipe', en: 'team' },
  experiencePrefix: { fr: 'Nos', en: 'Our' },
  experienceAccent: { fr: 'projets & expérience', en: 'projects & experience' },
  educationPrefix: { fr: 'Notre', en: 'Our' },
  educationAccent: { fr: 'formation', en: 'education' },
  ctaPrefix: { fr: 'Travaillons ensemble sur', en: 'Let\'s work together on' },
  ctaAccent: { fr: 'vos défis technologiques', en: 'your technology challenges' },
  ctaButton: { fr: 'Planifier une consultation', en: 'Schedule a consultation' },
  slogan: {
    fr: 'Votre performance. Notre technologie.',
    en: 'Your performance. Our technology.',
  },
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
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ProfessionalProfilePage() {
  const { lang } = useLanguage();
  const t = (b: Bi): string => b[lang];

  return (
    <div id="professional-profile-page-root" className="pt-20 bg-slate-950 text-slate-200 min-h-screen">
      {/* Hero Section */}
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
              {t(copy.heroTitle)}
            </h1>
            <p className="text-slate-300 text-lg md:text-xl font-light mb-8 max-w-3xl mx-auto">
              {t(copy.heroIntro)}
            </p>
            <p className="font-mono text-cyan-300 text-sm md:text-base">{t(copy.slogan)}</p>
          </motion.div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="bg-slate-900 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-slate-300 font-light leading-relaxed text-lg"
          >
            <p>{t(copy.companyIntro1)}</p>
            <p>{t(copy.companyIntro2)}</p>
          </motion.div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section id="expertise-areas-section" className="relative bg-slate-950 py-24">
        <div className="absolute inset-0 pointer-events-none opacity-[0.07]" style={gridStyle}></div>
        <div className="absolute inset-0 pointer-events-none" style={fadeStyle}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => document.getElementById('expertise-areas-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full text-center hover:opacity-80 transition-opacity cursor-pointer"
            >
              <h2 className="font-display text-white text-3xl md:text-5xl font-semibold">
                {t(copy.expertisePrefix)} <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">{t(copy.expertiseAccent)}</span>
              </h2>
            </motion.button>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {expertiseAreas.map((item) => (
              <Link
                key={item.title.en}
                to={`/about/profils/${item.slug}`}
                className="group no-underline"
              >
                <motion.div
                  variants={itemVariants}
                  className="bg-slate-900/70 border border-slate-700 rounded-xl backdrop-blur transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_24px_rgba(34,211,238,0.35)] p-8 text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-white text-xl font-medium mb-3">{t(item.title)}</h3>
                  <p className="text-slate-400 font-light leading-relaxed">{t(item.desc)}</p>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Background */}
      <section id="team-background-section" className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => document.getElementById('team-background-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full text-center hover:opacity-80 transition-opacity cursor-pointer"
            >
              <h2 className="font-display text-white text-3xl md:text-5xl font-semibold">
                {t(copy.teamPrefix)} <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">{t(copy.teamAccent)}</span>
              </h2>
            </motion.button>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {teamBackground.map((item) => (
              <motion.div
                key={item.title.en}
                variants={itemVariants}
                className="bg-slate-900/70 border border-slate-700 rounded-xl backdrop-blur transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_24px_rgba(34,211,238,0.35)] p-8 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-white text-xl font-medium mb-3">{t(item.title)}</h3>
                <p className="text-slate-400 font-light leading-relaxed">{t(item.desc)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience & Projects */}
      <section id="experience-projects-section" className="relative bg-slate-950 py-24">
        <div className="absolute inset-0 pointer-events-none opacity-[0.07]" style={gridStyle}></div>
        <div className="absolute inset-0 pointer-events-none" style={fadeStyle}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => document.getElementById('experience-projects-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full text-center hover:opacity-80 transition-opacity cursor-pointer"
            >
              <h2 className="font-display text-white text-3xl md:text-5xl font-semibold">
                {t(copy.experiencePrefix)} <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">{t(copy.experienceAccent)}</span>
              </h2>
            </motion.button>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experienceProjects.map((item) => (
              <motion.div
                key={item.title.en}
                variants={itemVariants}
                className="bg-slate-900/70 border border-slate-700 rounded-xl backdrop-blur transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_24px_rgba(34,211,238,0.35)] p-8 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-white text-xl font-medium mb-3">{t(item.title)}</h3>
                <p className="text-slate-400 font-light leading-relaxed">{t(item.desc)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Education & Training */}
      <section id="education-training-section" className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => document.getElementById('education-training-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full text-center hover:opacity-80 transition-opacity cursor-pointer"
            >
              <h2 className="font-display text-white text-3xl md:text-5xl font-semibold">
                {t(copy.educationPrefix)} <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">{t(copy.educationAccent)}</span>
              </h2>
            </motion.button>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {educationTraining.map((item) => (
              <motion.div
                key={item.title.en}
                variants={itemVariants}
                className="bg-slate-900/70 border border-slate-700 rounded-xl backdrop-blur transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_24px_rgba(34,211,238,0.35)] p-8 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-white text-xl font-medium mb-3">{t(item.title)}</h3>
                <p className="text-slate-400 font-light leading-relaxed">{t(item.desc)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-slate-950 py-24">
        <div className="absolute inset-0 pointer-events-none" style={glowStyle}></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="block rounded-2xl border border-cyan-400/30 bg-slate-800/70 p-12 shadow-[0_0_24px_rgba(34,211,238,0.35)] text-center"
          >
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}
