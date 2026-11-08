/*
 * Référencement : adresse officielle (canonique), titre et description de chaque page.
 * Sert à la fois au navigateur (SeoManager) et au pré-rendu des pages HTML (scripts/prerender.mjs).
 * Les adresses officielles se terminent par « / » (une page HTML par dossier dans dist/).
 */
import { services, getServiceBySlug } from '../data/services';
import { values } from '../data/values';
import { professionalProfiles } from '../data/professionalProfiles';
import { jobsContent } from '../data/jobs';
import { langFromPath, localizePath, stripLang } from '../i18n/paths';

export type SeoLang = 'fr' | 'en';

export const SITE_URL = 'https://www.conceptinformatique.net';
const BRAND = 'Concept Informatique';

export interface PageMeta {
  /** Adresse officielle, avec « / » final */
  path: string;
  title: string;
  description: string;
  /** Page inexistante : ne pas indexer, pas de canonique */
  notFound?: boolean;
}

/** Chemin utilisé pour pré-rendre la page « introuvable » (dist/404.html). */
export const NOT_FOUND_PATH = '/404-page-introuvable/';

const NOT_FOUND: StaticMeta = {
  title: { fr: 'Page introuvable | Concept Informatique', en: 'Page Not Found | Concept Informatique' },
  description: {
    fr: "L'adresse demandée n'existe pas ou a été déplacée. Retrouvez les services de Concept Informatique, firme TI de Sherbrooke.",
    en: 'The address you requested does not exist or has moved. Find the services of Concept Informatique, an IT firm in Sherbrooke.',
  },
};

type Bi = { fr: string; en: string };
type StaticMeta = { title: Bi; description: Bi };

const STATIC: Record<string, StaticMeta> = {
  '/': {
    title: {
      fr: 'Services informatiques en Estrie | Concept Informatique',
      en: 'Eastern Townships IT Services | Concept Informatique',
    },
    description: {
      fr: "Services informatiques à Sherbrooke et en Estrie : logiciels sur mesure, Power BI, données, soutien TI et cybersécurité pour les PME, de Magog à Coaticook.",
      en: 'IT services in Sherbrooke and the Eastern Townships: custom software, Power BI, data, IT support and cybersecurity for businesses, from Magog to Coaticook.',
    },
  },
  '/services/': {
    title: {
      fr: 'Services informatiques à Sherbrooke | Concept Informatique',
      en: 'IT Services in Sherbrooke | Concept Informatique',
    },
    description: {
      fr: 'Logiciels sur mesure, Power BI, entrepôts de données, soutien TI et IA : les services informatiques de Concept Informatique, à Sherbrooke et en Estrie.',
      en: 'Custom software, Power BI, data warehouses, IT support and AI: IT services by Concept Informatique, in Sherbrooke and the Eastern Townships.',
    },
  },
  '/about/': {
    title: {
      fr: 'À propos de Concept Informatique | Firme TI Sherbrooke',
      en: 'About Concept Informatique | Sherbrooke IT Firm',
    },
    description: {
      fr: "Plus de 17 ans d'expérience en logiciels, données et TI. Découvrez l'équipe, les valeurs et l'expertise de Concept Informatique inc., à Sherbrooke.",
      en: 'More than 17 years of experience in software, data and IT. Discover the team, values and expertise of Concept Informatique inc., in Sherbrooke.',
    },
  },
  '/about/values/': {
    title: {
      fr: 'Nos valeurs | Concept Informatique, Sherbrooke',
      en: 'Our Values | Concept Informatique, Sherbrooke',
    },
    description: {
      fr: 'Innovation, rigueur et expertise : les valeurs qui guident Concept Informatique dans chaque projet logiciel, de données et de soutien TI, à Sherbrooke.',
      en: 'Innovation, rigour and expertise: the values that guide Concept Informatique in every software, data and IT support project, in Sherbrooke.',
    },
  },
  '/about/profil-professionnel/': {
    title: {
      fr: 'Profil professionnel | Concept Informatique',
      en: 'Professional Profile | Concept Informatique',
    },
    description: {
      fr: "Une équipe qui allie expertise technique et compréhension des enjeux d'affaires : expérience concrète, approche axée sur les données, qualité et fiabilité.",
      en: 'A team that combines technical expertise with an understanding of business challenges: hands-on experience, a data-driven approach, quality and reliability.',
    },
  },
  '/careers/': {
    title: {
      fr: 'Emplois en informatique à Sherbrooke | Concept Informatique',
      en: 'IT Jobs in Sherbrooke | Concept Informatique',
    },
    description: {
      fr: "Développeur, analyste BI ou ingénieur de données? Consultez les postes ouverts chez Concept Informatique à Sherbrooke et postulez en ligne dès aujourd'hui.",
      en: 'Developer, BI analyst or data engineer? Browse the open positions at Concept Informatique in Sherbrooke and apply online today.',
    },
  },
  '/contact/': {
    title: {
      fr: 'Contact | Concept Informatique, Sherbrooke',
      en: 'Contact Us | Concept Informatique, Sherbrooke',
    },
    description: {
      fr: 'Un projet informatique en Estrie? Joignez Concept Informatique à Sherbrooke au 514 712-0371 ou par notre formulaire. Réponse rapide.',
      en: 'An IT project in the Eastern Townships? Reach Concept Informatique in Sherbrooke at 514-712-0371 or through our form. Quick response.',
    },
  },
  '/privacy/': {
    title: {
      fr: 'Politique de confidentialité | Concept Informatique',
      en: 'Privacy Policy | Concept Informatique',
    },
    description: {
      fr: 'Comment Concept Informatique inc. recueille, utilise et protège les renseignements personnels transmis par son site Web.',
      en: 'How Concept Informatique inc. collects, uses and protects the personal information submitted through its website.',
    },
  },
  '/terms/': {
    title: {
      fr: "Conditions d'utilisation | Concept Informatique",
      en: 'Terms of Use | Concept Informatique',
    },
    description: {
      fr: "Conditions d'utilisation du site Web de Concept Informatique inc., firme informatique de Sherbrooke.",
      en: 'Terms of use of the website of Concept Informatique inc., an IT firm in Sherbrooke.',
    },
  },
};

const SERVICE_META: Record<string, StaticMeta> = {
  'developpement-logiciel': {
    title: { fr: 'Développement logiciel sur mesure à Sherbrooke', en: 'Custom Software Development in Sherbrooke' },
    description: {
      fr: "Applications web et logiciels d'entreprise sur mesure (React, .NET, Node.js) conçus à Sherbrooke pour vos processus. Livraison par étapes. Parlons-en.",
      en: 'Custom web applications and business software (React, .NET, Node.js) built in Sherbrooke around your processes. Delivered in stages.',
    },
  },
  'business-intelligence': {
    title: { fr: "Intelligence d'affaires et Power BI à Sherbrooke", en: 'Business Intelligence and Power BI in Sherbrooke' },
    description: {
      fr: "Tableaux de bord Power BI, indicateurs et rapports automatisés pour les entreprises de Sherbrooke et de l'Estrie. Décidez avec des chiffres fiables.",
      en: 'Power BI dashboards, indicators and automated reports for businesses in Sherbrooke and the Eastern Townships. Decide with reliable numbers.',
    },
  },
  'data-engineering': {
    title: { fr: 'Ingénierie de données à Sherbrooke | Concept Informatique', en: 'Data Engineering in Sherbrooke | Concept Informatique' },
    description: {
      fr: "Entrepôts de données, pipelines ETL, Microsoft Fabric et Azure : nous centralisons et fiabilisons vos données d'entreprise, depuis Sherbrooke.",
      en: 'Data warehouses, ETL pipelines, Microsoft Fabric and Azure: we centralize your business data and make it reliable, from Sherbrooke.',
    },
  },
  'support-ti-securite': {
    title: { fr: 'Soutien informatique et cybersécurité à Sherbrooke', en: 'IT Support and Cybersecurity in Sherbrooke' },
    description: {
      fr: 'Soutien TI pour entreprises de Sherbrooke : gestion du parc, Microsoft 365, sauvegardes, cybersécurité et assistance aux utilisateurs.',
      en: 'IT support for Sherbrooke businesses: device management, Microsoft 365, backups, cybersecurity and user assistance.',
    },
  },
  'automatisation-ia': {
    title: { fr: 'Automatisation et IA pour entreprises | Sherbrooke', en: 'Automation and AI for Businesses | Sherbrooke' },
    description: {
      fr: "Automatisez les tâches répétitives et intégrez l'intelligence artificielle à vos processus : projets pilotes et retour sur investissement mesuré, à Sherbrooke.",
      en: 'Automate repetitive tasks and bring artificial intelligence into your processes: pilot projects and measured return on investment, in Sherbrooke.',
    },
  },
  'transformation-numerique': {
    title: { fr: 'Transformation numérique des entreprises | Sherbrooke', en: 'Digital Transformation for Businesses | Sherbrooke' },
    description: {
      fr: "Feuille de route, Microsoft 365, Power Platform et automatisation : nous accompagnons la transformation numérique des entreprises de l'Estrie.",
      en: 'Roadmap, Microsoft 365, Power Platform and automation: we guide the digital transformation of businesses in the Eastern Townships.',
    },
  },
  'architecture-cloud': {
    title: { fr: 'Architecture infonuagique Azure et AWS | Sherbrooke', en: 'Cloud Architecture on Azure and AWS | Sherbrooke' },
    description: {
      fr: 'Migration et architecture infonuagique sur Microsoft Azure et AWS, avec Microsoft Fabric et Databricks : une plateforme sécurisée et maîtrisée.',
      en: 'Cloud migration and architecture on Microsoft Azure and AWS, with Microsoft Fabric and Databricks: a secure, well-managed platform.',
    },
  },
};

/** Coupe un texte à `max` caractères au plus, sur une limite de mot. */
function clip(text: string, max: number): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:.\s]+$/, '') + '…';
}

function withBrand(name: string): string {
  const suffix = ` | ${BRAND}`;
  return name.length + suffix.length <= 60 ? name + suffix : clip(name, 60);
}

/** Ancienne page « expertise » -> page de service correspondante. */
export const EXPERTISE_TO_SERVICE: Record<string, string> = {"business-intelligence": "business-intelligence", "ingenierie-de-donnees": "data-engineering", "developpement-logiciel": "developpement-logiciel", "support-ti": "support-ti-securite", "automatisation-ia": "automatisation-ia", "transformation-numerique": "transformation-numerique"};

/** Adresses en double -> adresse officielle (sans « / » final dans les motifs). */
const ALIASES: [RegExp, (m: RegExpMatchArray) => string][] = [
  [/^\/home$/, () => '/'],
  [/^\/values$/, () => '/about/values/'],
  [/^\/values\/([^/]+)$/, (m) => `/about/values/${m[1]}/`],
  [/^\/professional-profiles?$/, () => '/about/profil-professionnel/'],
  [/^\/professional-profiles\/([^/]+)$/, (m) => `/about/profils/${m[1]}/`],
  [/^\/expertises$/, () => '/services/'],
  // Anciennes pages « expertises » : fusionnées avec les pages de services (même sujet)
  [/^\/(?:about\/)?expertises\/([^/]+)$/, (m) => `/services/${EXPERTISE_TO_SERVICE[m[1]] ?? ''}${EXPERTISE_TO_SERVICE[m[1]] ? '/' : ''}`],
];

/** Adresse officielle d'un chemin de base, sans préfixe de langue (gère les doublons et le « / » final). */
function canonicalBase(pathname: string): string {
  const bare = pathname.replace(/\/+$/, '') || '/';
  for (const [re, to] of ALIASES) {
    const m = bare.match(re);
    if (m) return to(m);
  }
  return bare === '/' ? '/' : `${bare}/`;
}

/** Adresse officielle d'une adresse quelconque, dans sa langue (/en/… reste en anglais). */
export function canonicalPath(pathname: string): string {
  return localizePath(canonicalBase(stripLang(pathname)), langFromPath(pathname));
}

/** Adresses de la même page en français et en anglais (balises hreflang, sitemap). */
export function getAlternates(pathname: string): { fr: string; en: string } {
  const base = canonicalBase(stripLang(pathname));
  return { fr: SITE_URL + base, en: SITE_URL + localizePath(base, 'en') };
}

/** Métadonnées d'une page ; la langue est celle de l'adresse (/en/… = anglais). */
export function getPageMeta(pathname: string, langHint?: SeoLang): PageMeta {
  void langHint; // la langue vient de l'adresse
  const lang: SeoLang = langFromPath(pathname);
  const base = canonicalBase(stripLang(pathname));
  const path = localizePath(base, lang);
  const fixed = STATIC[base];
  if (fixed) return { path, title: fixed.title[lang], description: fixed.description[lang] };

  let m = base.match(/^\/services\/([^/]+)\/$/);
  if (m) {
    const meta = SERVICE_META[m[1]];
    if (meta) return { path, title: meta.title[lang], description: meta.description[lang] };
    const s = getServiceBySlug(m[1], lang);
    if (s) return { path, title: withBrand(s.title), description: clip(`${s.tagline} ${s.desc}`, 158) };
  }

  m = base.match(/^\/about\/values\/([^/]+)\/$/);
  const value = m && values.find((v) => v.slug === m![1]);
  if (value) {
    return { path, title: withBrand(`${value.title[lang]} – ${lang === 'fr' ? 'Nos valeurs' : 'Our Values'}`), description: clip(`${value.tagline[lang]}. ${value.description[lang]}`, 158) };
  }

  m = base.match(/^\/about\/profils\/([^/]+)\/$/);
  const profile = m && professionalProfiles.find((p) => p.slug === m![1]);
  if (profile) {
    return { path, title: withBrand(profile.title[lang]), description: clip(`${profile.tagline[lang]}. ${profile.description[lang]}`, 158) };
  }

  m = base.match(/^\/careers\/([^/]+)\/$/);
  const job = m && jobsContent[lang].find((j) => j.id === m![1]);
  if (job) {
    return { path, title: withBrand(job.title), description: clip(`${job.title}${lang === 'fr' ? ' :' : ':'} ${job.summary}`, 158) };
  }

  // Page inconnue
  return { path, title: NOT_FOUND.title[lang], description: NOT_FOUND.description[lang], notFound: true };
}

/** Toutes les adresses officielles du site, en français puis en anglais (pré-rendu et sitemap). */
export function listRoutes(): string[] {
  const fr = [
    ...Object.keys(STATIC),
    ...services.map((s) => `/services/${s.slug}/`),
    ...values.map((v) => `/about/values/${v.slug}/`),
    ...professionalProfiles.map((p) => `/about/profils/${p.slug}/`),
    ...jobsContent.fr.map((j) => `/careers/${j.id}/`),
  ];
  return [...fr, ...fr.map((r) => localizePath(r, 'en'))];
}

/* ---------- Données structurées propres à chaque page (JSON-LD) ---------- */

const CRUMB_LABELS: Record<string, Bi> = {
  '/services/': { fr: 'Services', en: 'Services' },
  '/about/': { fr: 'À propos', en: 'About' },
  '/about/values/': { fr: 'Nos valeurs', en: 'Our values' },
  '/about/profil-professionnel/': { fr: 'Profil professionnel', en: 'Professional profile' },
  '/careers/': { fr: 'Carrières', en: 'Careers' },
  '/contact/': { fr: 'Contact', en: 'Contact' },
  '/privacy/': { fr: 'Confidentialité', en: 'Privacy' },
  '/terms/': { fr: 'Conditions', en: 'Terms' },
};

/** Nom affiché d'une page de détail (dernier élément du fil d'Ariane). */
function detailName(path: string, lang: SeoLang): string | undefined {
  const slug = path.split('/').filter(Boolean).pop() ?? '';
  if (path.startsWith('/services/')) return getServiceBySlug(slug, lang)?.title;
  if (path.startsWith('/about/values/')) return values.find((v) => v.slug === slug)?.title[lang];
  if (path.startsWith('/about/profils/')) return professionalProfiles.find((p) => p.slug === slug)?.title[lang];
  if (path.startsWith('/careers/')) return jobsContent[lang].find((j) => j.id === slug)?.title;
  return undefined;
}

/** Fil d'Ariane : Accueil › section › page. */
function breadcrumb(path: string, lang: SeoLang): { name: string; path: string }[] {
  const trail = [{ name: lang === 'fr' ? 'Accueil' : 'Home', path: '/' }];
  if (path === '/') return trail;
  const parents: Record<string, string[]> = {
    '/about/profils/': ['/about/', '/about/profil-professionnel/'],
    '/about/values/': ['/about/', '/about/values/'],
    '/about/profil-professionnel/': ['/about/'],
    '/services/': ['/services/'],
    '/careers/': ['/careers/'],
  };
  const prefix = Object.keys(parents).find((p) => path.startsWith(p) && path !== p);
  for (const parent of prefix ? parents[prefix] : path === '/about/profil-professionnel/' || path === '/about/values/' ? ['/about/'] : []) {
    trail.push({ name: CRUMB_LABELS[parent][lang], path: parent });
  }
  const name = CRUMB_LABELS[path]?.[lang] ?? detailName(path, lang);
  if (name) trail.push({ name, path });
  return trail;
}

export function getStructuredData(pathname: string, langHint?: SeoLang): object[] {
  const meta = getPageMeta(pathname, langHint);
  const lang: SeoLang = langFromPath(meta.path);
  const base = stripLang(meta.path);
  if (meta.notFound || base === '/') return [];
  const data: object[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumb(base, lang).map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        item: SITE_URL + localizePath(c.path, lang),
      })),
    },
  ];
  const m = base.match(/^\/services\/([^/]+)\/$/);
  const service = m && getServiceBySlug(m[1], lang);
  if (service) {
    data.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.title,
      serviceType: service.shortTitle,
      description: meta.description,
      url: SITE_URL + meta.path,
      provider: { '@id': `${SITE_URL}/#entreprise` },
      areaServed: [
        { '@type': 'City', name: 'Sherbrooke' },
        { '@type': 'AdministrativeArea', name: 'Estrie' },
        { '@type': 'AdministrativeArea', name: 'Québec' },
      ],
      inLanguage: lang === 'fr' ? 'fr-CA' : 'en-CA',
      availableLanguage: ['fr-CA', 'en-CA'],
    });
  }
  return data;
}
