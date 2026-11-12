import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, BrainCircuit, Database, GitBranch, LineChart, Radio, Sparkles } from 'lucide-react';
import { Link } from '../i18n/router';
import { useLanguage } from '../i18n/LanguageContext';
import Photo from '../components/Photo';
import { servicePhoto } from '../data/photos';
import { getServices } from '../data/services';

/*
 * Page d'accueil — style « 3D futuriste » sur fond bleu clair (version F retenue).
 * Sphère de données en 3D dessinée sur <canvas> (sans bibliothèque), grille en perspective,
 * cartes inclinables à la souris. Contenu « pile de données moderne » (technologies déjà
 * annoncées sur le site). Les animations s'arrêtent si l'utilisateur préfère moins de mouvement.
 */

const fr = {
  h1: 'Services informatiques à Sherbrooke et en Estrie',
  aboutTag: 'Services informatiques en Estrie',
  aboutTitle: 'Vos données et vos technologies, enfin au service de vos affaires',
  aboutText: [
    "Concept Informatique inc. est une firme de services informatiques établie à Sherbrooke qui aide les PME et les organisations de toute l’Estrie (Sherbrooke, Magog, Coaticook, Windsor, East Angus, Lac-Mégantic…) à tirer le meilleur de leurs données et de leurs technologies. Depuis plus de 17 ans, notre équipe conçoit des logiciels sur mesure, bâtit des tableaux de bord Power BI en intelligence d’affaires, centralise l’information dans des entrepôts de données modernes (Microsoft Fabric, Azure, Databricks) et assure le soutien informatique et la cybersécurité de votre parc.",
    "Vos rapports prennent des heures à produire? Vos systèmes ne se parlent pas? Un processus repose encore sur des fichiers Excel? Nous partons de vos besoins d’affaires, livrons par étapes courtes et restons à vos côtés après la mise en production, en personne à Sherbrooke et en Estrie, ou à distance, partout au Québec.",
  ],
  aboutCta: 'Parlons de votre projet',
  titleA: 'Le futur de vos données',
  titleB: 'commence ici.',
  intro:
    'Plateformes de données modernes, streaming en temps réel, BI et intelligence artificielle. Depuis Sherbrooke, Concept Informatique inc. met plus de 17 ans d’expérience au service de vos décisions.',
  ctaPrimary: 'Lancer mon projet',
  ctaSecondary: 'Explorer nos services',
  sphereLabel: 'Sherbrooke, QC',
  stats: [
    { v: '17+', l: 'années d’expérience' },
    { v: '7', l: 'domaines d’expertise' },
    { v: '24/7', l: 'surveillance et soutien' },
    { v: '100 %', l: 'sur mesure' },
  ],
  stackTag: 'Pile technologique',
  stackTitle: 'Cinq couches. Une plateforme intelligente.',
  layers: [
    { title: 'Ingestion et streaming', tech: 'Azure Data Factory · Kafka · Apache Airflow' },
    { title: 'Lakehouse et entrepôt', tech: 'Microsoft Fabric · Databricks · Snowflake' },
    { title: 'Transformation et qualité', tech: 'dbt · Spark · Great Expectations' },
    { title: 'Analytique et BI', tech: 'Power BI · Direct Lake · DAX' },
    { title: 'IA et apprentissage automatique', tech: 'Azure ML · MLflow · OpenAI · Agents IA' },
  ],
  capTag: 'Ce que nous bâtissons',
  caps: [
    { title: 'Lakehouse moderne', text: 'Une source de vérité unique, gouvernée et performante.', to: '/services/data-engineering/', badge: 'Données centralisées', tech: ['Fabric', 'Databricks', 'Snowflake'] },
    { title: 'Temps réel', text: 'Des flux continus pour décider à la seconde près.', to: '/services/data-engineering/', badge: 'En direct', tech: ['Kafka', 'Event Hubs', 'Spark'] },
    { title: 'BI augmentée', text: 'Des tableaux de bord rapides sur des données à jour.', to: '/services/business-intelligence/', badge: 'Mis à jour automatiquement', tech: ['Power BI', 'Direct Lake', 'DAX'] },
    { title: 'IA en production', text: 'Agents et modèles intégrés à vos processus.', to: '/services/automatisation-ia/', badge: 'Agent IA actif', tech: ['Azure OpenAI', 'MLflow', 'Agents IA'] },
  ],
  workTag: 'Nos réalisations',
  workTitle: 'Des sites que nous avons conçus.',
  workText: 'Concept Informatique conçoit, développe et met en ligne des sites web sur mesure pour des entreprises d’ici.',
  workKind: 'Site web',
  projects: [
    {
      name: 'Marché Mvog-Mbi',
      nameStart: 'Marché ',
      nameAccent: 'Mvog-Mbi',
      tagline: 'Épicerie africaine, caribéenne et latine · Sherbrooke',
      text: 'Site de l’épicerie Marché Mvog-Mbi à Sherbrooke : catalogue de plus de 2 000 produits avec recherche, rayons, nouveautés, recettes du monde et informations de livraison. Le site est entièrement conçu et développé par Concept Informatique.',
      url: 'https://www.marchemvogmbi.com/',
      logo: '/realisations/marche-mvog-mbi-logo.webp',
      cta: 'Visiter marchemvogmbi.com',
    },
  ],
  learnMore: 'Découvrir',
  servicesTag: 'Nos services',
  servicesTitle: 'Sept expertises, une seule équipe.',
  servicesText: 'Du logiciel sur mesure à l’intelligence artificielle, nous couvrons l’ensemble de vos besoins technologiques.',
  servicesAll: 'Voir tous les services',
  processTag: 'Notre démarche',
  processTitle: 'Un projet clair, du premier appel au soutien.',
  processText: 'Chaque mandat suit les mêmes étapes simples. Vous savez toujours où en est votre projet et ce qui vient ensuite.',
  processSteps: [
    { title: 'Écoute', text: 'Une rencontre pour comprendre vos objectifs, vos irritants et vos systèmes actuels.' },
    { title: 'Proposition', text: 'Une solution, un échéancier et un budget clairs, présentés en langage d’affaires.' },
    { title: 'Livraisons par étapes', text: 'Des versions fonctionnelles livrées régulièrement, que vous validez au fur et à mesure.' },
    { title: 'Soutien continu', text: 'Formation, documentation et accompagnement après la mise en production.' },
  ],
  localTag: 'Ancrés en Estrie',
  localTitle: 'Une équipe d’ici, des solutions de calibre international.',
  localText: 'Établie à Sherbrooke, Concept Informatique inc. se déplace chez ses clients de l’Estrie et accompagne à distance des organisations partout au Québec. Nous utilisons les mêmes technologies que les grandes entreprises, adaptées à la taille et au budget des PME.',
  ctaTitle: 'Prêt à passer à la vitesse supérieure?',
  ctaText: 'Parlons de votre plateforme de données et de vos ambitions en IA.',
  ctaButton: 'Contacter Concept Informatique',
};

const en: typeof fr = {
  h1: 'IT services in Sherbrooke and the Eastern Townships',
  aboutTag: 'IT services in the Eastern Townships',
  aboutTitle: 'Your data and technology, finally working for your business',
  aboutText: [
    'Concept Informatique inc. is an IT services firm based in Sherbrooke that helps SMEs and organizations across the Eastern Townships (Sherbrooke, Magog, Coaticook, Windsor, East Angus, Lac-Mégantic…) get the most out of their data and technology. For more than 17 years, our team has been building custom software, Power BI business intelligence dashboards, modern data warehouses (Microsoft Fabric, Azure, Databricks), and providing IT support and cybersecurity for your systems.',
    'Do your reports take hours to produce? Do your systems not talk to each other? Does a process still rely on Excel files? We start from your business needs, deliver in short stages and stay by your side after go-live, in person in Sherbrooke and the Eastern Townships, or remotely, anywhere in Québec.',
  ],
  aboutCta: "Let's talk about your project",
  titleA: 'The future of your data',
  titleB: 'starts here.',
  intro:
    'Modern data platforms, real-time streaming, BI and artificial intelligence. From Sherbrooke, Concept Informatique inc. brings more than 17 years of experience to your decisions.',
  ctaPrimary: 'Start my project',
  ctaSecondary: 'Explore our services',
  sphereLabel: 'Sherbrooke, QC',
  stats: [
    { v: '17+', l: 'years of experience' },
    { v: '7', l: 'areas of expertise' },
    { v: '24/7', l: 'monitoring and support' },
    { v: '100%', l: 'tailored' },
  ],
  stackTag: 'Technology stack',
  stackTitle: 'Five layers. One intelligent platform.',
  layers: [
    { title: 'Ingestion and streaming', tech: 'Azure Data Factory · Kafka · Apache Airflow' },
    { title: 'Lakehouse and warehouse', tech: 'Microsoft Fabric · Databricks · Snowflake' },
    { title: 'Transformation and quality', tech: 'dbt · Spark · Great Expectations' },
    { title: 'Analytics and BI', tech: 'Power BI · Direct Lake · DAX' },
    { title: 'AI and machine learning', tech: 'Azure ML · MLflow · OpenAI · AI agents' },
  ],
  capTag: 'What we build',
  caps: [
    { title: 'Modern lakehouse', text: 'A single, governed, high-performance source of truth.', to: '/services/data-engineering/', badge: 'Centralized data', tech: ['Fabric', 'Databricks', 'Snowflake'] },
    { title: 'Real time', text: 'Continuous streams to decide in seconds.', to: '/services/data-engineering/', badge: 'Live', tech: ['Kafka', 'Event Hubs', 'Spark'] },
    { title: 'Augmented BI', text: 'Fast dashboards on up-to-date data.', to: '/services/business-intelligence/', badge: 'Refreshed automatically', tech: ['Power BI', 'Direct Lake', 'DAX'] },
    { title: 'AI in production', text: 'Agents and models built into your processes.', to: '/services/automatisation-ia/', badge: 'AI agent running', tech: ['Azure OpenAI', 'MLflow', 'AI agents'] },
  ],
  workTag: 'Our work',
  workTitle: 'Websites we have built.',
  workText: 'Concept Informatique designs, develops and launches custom websites for local businesses.',
  workKind: 'Website',
  projects: [
    {
      name: 'Marché Mvog-Mbi',
      nameStart: 'Marché ',
      nameAccent: 'Mvog-Mbi',
      tagline: 'African, Caribbean and Latin grocery · Sherbrooke',
      text: 'Website for the Marché Mvog-Mbi grocery store in Sherbrooke: a catalogue of over 2,000 products with search, aisles, new arrivals, world recipes and delivery information. The site was fully designed and developed by Concept Informatique.',
      url: 'https://www.marchemvogmbi.com/',
      logo: '/realisations/marche-mvog-mbi-logo.webp',
      cta: 'Visit marchemvogmbi.com',
    },
  ],
  learnMore: 'Discover',
  servicesTag: 'Our services',
  servicesTitle: 'Seven areas of expertise, one team.',
  servicesText: 'From custom software to artificial intelligence, we cover all your technology needs.',
  servicesAll: 'See all services',
  processTag: 'How we work',
  processTitle: 'A clear project, from the first call to ongoing support.',
  processText: 'Every engagement follows the same simple steps. You always know where your project stands and what comes next.',
  processSteps: [
    { title: 'Listening', text: 'A meeting to understand your goals, pain points and current systems.' },
    { title: 'Proposal', text: 'A clear solution, timeline and budget, presented in business terms.' },
    { title: 'Delivery in stages', text: 'Working versions delivered regularly, which you validate as we go.' },
    { title: 'Ongoing support', text: 'Training, documentation and support after go-live.' },
  ],
  localTag: 'Rooted in the Eastern Townships',
  localTitle: 'A local team, world-class solutions.',
  localText: 'Based in Sherbrooke, Concept Informatique inc. visits clients across the Eastern Townships and supports organizations remotely throughout Québec. We use the same technologies as large enterprises, adapted to the size and budget of SMEs.',
  ctaTitle: 'Ready to shift into high gear?',
  ctaText: "Let's talk about your data platform and your AI ambitions.",
  ctaButton: 'Contact Concept Informatique',
};

const dict = { fr, en };
const layerIcons = [Radio, Database, GitBranch, LineChart, BrainCircuit];
// Page de service liée à chaque couche de la pile
const layerLinks = [
  '/services/data-engineering/',
  '/services/architecture-cloud/',
  '/services/data-engineering/',
  '/services/business-intelligence/',
  '/services/automatisation-ia/',
];
const capIcons = [Database, Radio, LineChart, Sparkles];
const capPhotos = ['expertise-ingenierie-de-donnees', 'reseau-mondial', 'profil-approche-axee-donnees', 'expertise-automatisation-ia'] as const;

/* Petit indicateur posé sur la photo de chaque carte (purement décoratif) */
function CapIndicator({ index, label }: { index: number; label: string }) {
  return (
    <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#0b1f3a]/75 px-3 py-1.5 font-mono text-[11px] font-semibold text-white backdrop-blur">
      {index === 1 ? (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34d17f] opacity-75 motion-reduce:animate-none" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#34d17f]" />
        </span>
      ) : index === 2 ? (
        <span aria-hidden="true" className="flex h-3 items-end gap-[2px]">
          {[40, 70, 55, 90, 75].map((h, i) => (
            <span key={i} className="w-[3px] rounded-sm bg-[#6ee7a8]" style={{ height: `${h}%` }} />
          ))}
        </span>
      ) : index === 3 ? (
        <Sparkles className="h-3 w-3 text-[#6ee7a8]" />
      ) : (
        <Database className="h-3 w-3 text-[#6ee7a8]" />
      )}
      {label}
    </span>
  );
}
const reveal = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-60px' } };

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/* ---------- Sphère de données 3D (canvas 2D, projection en perspective) ---------- */
function DataSphere({ label }: { label: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Points répartis uniformément (spirale de Fibonacci)
    const N = 650; // assez de points pour l'effet, sans surcharger les téléphones
    const pts: [number, number, number][] = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const th = golden * i;
      pts.push([Math.cos(th) * r, y, Math.sin(th) * r]);
    }
    // Sherbrooke (45,4° N, 71,9° O) sur la sphère
    const lat = (45.4 * Math.PI) / 180;
    const lon = (-71.9 * Math.PI) / 180;
    const home: [number, number, number] = [Math.cos(lat) * Math.cos(lon), Math.sin(lat), Math.cos(lat) * Math.sin(lon)];
    // Quelques nœuds abstraits reliés par des arcs
    const targets = [0.03, 0.14, 0.26, 0.37, 0.47, 0.58, 0.67, 0.79, 0.86].map((f) => pts[Math.floor(f * N)]);

    let w = 0, h = 0, dpr = 1;
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const tilt = 0.38;
    const project = (p: [number, number, number], rot: number) => {
      const [x0, y0, z0] = p;
      const x1 = x0 * Math.cos(rot) - z0 * Math.sin(rot);
      const z1 = x0 * Math.sin(rot) + z0 * Math.cos(rot);
      const y2 = y0 * Math.cos(tilt) - z1 * Math.sin(tilt);
      const z2 = y0 * Math.sin(tilt) + z1 * Math.cos(tilt);
      const R = Math.min(w, h) * 0.34;
      const persp = 4 / (4 - z2);
      return { x: w / 2 + x1 * R * persp, y: h / 2 - y2 * R * persp, z: z2, s: persp };
    };
    const slerp = (a: number[], b: number[], t: number): [number, number, number] => {
      const dot = Math.min(1, Math.max(-1, a[0] * b[0] + a[1] * b[1] + a[2] * b[2]));
      const om = Math.acos(dot) || 1e-6;
      const s0 = Math.sin((1 - t) * om) / Math.sin(om);
      const s1 = Math.sin(t * om) / Math.sin(om);
      const lift = 1 + Math.sin(Math.PI * t) * 0.18;
      return [(a[0] * s0 + b[0] * s1) * lift, (a[1] * s0 + b[1] * s1) * lift, (a[2] * s0 + b[2] * s1) * lift];
    };

    let rot = 1.2;
    let raf = 0;
    let running = true;
    let last = performance.now();
    let t0 = 0;
    const reduce = prefersReducedMotion();

    // Libellé « Sherbrooke » : largeur mesurée une fois (lire offsetWidth à chaque image force un recalcul de mise en page)
    let labelWidth = labelRef.current?.offsetWidth ?? 90;
    const BUCKETS = 8;
    const buckets: number[][] = Array.from({ length: BUCKETS }, () => []);
    let lastFrame = 0;

    const draw = (now: number) => {
      // 30 images/seconde suffisent pour une rotation lente et divisent le travail par deux
      if (now - lastFrame < 32) {
        if (running && !reduce) raf = requestAnimationFrame(draw);
        return;
      }
      lastFrame = now;
      const dt = Math.min(64, now - last);
      last = now;
      if (!reduce) {
        rot += dt * 0.00012;
        t0 += dt * 0.00035;
      }
      ctx.clearRect(0, 0, w, h);

      // Halo
      const g = ctx.createRadialGradient(w / 2, h / 2, Math.min(w, h) * 0.1, w / 2, h / 2, Math.min(w, h) * 0.55);
      g.addColorStop(0, 'rgba(31,111,235,0.08)');
      g.addColorStop(1, 'rgba(31,111,235,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      // Points, regroupés par niveau de transparence (une seule couleur à définir par groupe)
      for (const b of buckets) b.length = 0;
      for (const p of pts) {
        const q = project(p, rot);
        const front = (q.z + 1) / 2;
        const size = (0.6 + front * 1.1) * q.s;
        buckets[Math.min(BUCKETS - 1, Math.floor(front * BUCKETS))].push(q.x - size / 2, q.y - size / 2, size);
      }
      buckets.forEach((b, i) => {
        if (!b.length) return;
        ctx.fillStyle = `rgba(21,89,209,${(0.06 + ((i + 0.5) / BUCKETS) * 0.55).toFixed(3)})`;
        for (let j = 0; j < b.length; j += 3) ctx.fillRect(b[j], b[j + 1], b[j + 2], b[j + 2]);
      });

      // Arcs depuis Sherbrooke
      targets.forEach((tp, k) => {
        ctx.beginPath();
        let started = false;
        for (let i = 0; i <= 40; i++) {
          const q = project(slerp(home, tp, i / 40), rot);
          if (q.z < -0.15) { started = false; continue; }
          if (!started) { ctx.moveTo(q.x, q.y); started = true; } else ctx.lineTo(q.x, q.y);
        }
        ctx.strokeStyle = k % 2 ? 'rgba(14,145,80,0.55)' : 'rgba(21,89,209,0.45)';
        ctx.lineWidth = 1;
        ctx.stroke();
        // Impulsion qui voyage sur l'arc
        const tt = (t0 + k * 0.17) % 1;
        const q = project(slerp(home, tp, tt), rot);
        if (q.z > -0.15) {
          ctx.beginPath();
          ctx.arc(q.x, q.y, 5 * q.s, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(52,209,127,0.25)';
          ctx.fill();
          ctx.beginPath();
          ctx.arc(q.x, q.y, 2.4 * q.s, 0, Math.PI * 2);
          ctx.fillStyle = '#16b364';
          ctx.fill();
        }
      });

      // Point Sherbrooke
      const hq = project(home, rot);
      const visible = hq.z > 0;
      if (visible) {
        const pulse = 6 + ((now / 400) % 1) * 14;
        ctx.beginPath();
        ctx.arc(hq.x, hq.y, pulse, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(22,179,100,${0.7 - (pulse - 6) / 28})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(hq.x, hq.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#16b364';
        ctx.fill();
      }
      // Étiquette déplacée directement dans le DOM (pas de rendu React à chaque image)
      const el = labelRef.current;
      if (el) {
        if (!labelWidth) labelWidth = el.offsetWidth;
        const lx = hq.x + 14 + labelWidth > w ? hq.x - 14 - labelWidth : hq.x + 14; // bascule à gauche près du bord
        el.style.transform = `translate(${lx}px, ${hq.y - 14}px)`;
        el.style.opacity = visible ? '1' : '0';
      }

      if (running && !reduce) raf = requestAnimationFrame(draw);
    };

    const io = new IntersectionObserver(([entry]) => {
      const was = running;
      running = entry.isIntersecting;
      if (running && !was && !reduce) {
        last = performance.now();
        raf = requestAnimationFrame(draw);
      }
    });
    // Démarrage différé : la page s'affiche et devient utilisable d'abord, l'animation ensuite
    let started = false;
    let idleId = 0;
    const start = () => {
      if (started) return;
      started = true;
      labelWidth = labelRef.current?.offsetWidth ?? labelWidth;
      io.observe(canvas);
      raf = requestAnimationFrame(draw);
    };
    const schedule = () => {
      if ('requestIdleCallback' in window) idleId = window.requestIdleCallback(start, { timeout: 2500 });
      else idleId = globalThis.setTimeout(start, 1200) as unknown as number;
    };
    if (document.readyState === 'complete') schedule();
    else window.addEventListener('load', schedule, { once: true });

    return () => {
      running = false;
      window.removeEventListener('load', schedule);
      if ('cancelIdleCallback' in window) window.cancelIdleCallback(idleId);
      window.clearTimeout(idleId);
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="relative aspect-square w-full">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
      <div ref={labelRef} className="pointer-events-none absolute left-0 top-0 opacity-0 transition-opacity duration-300">
        <span className="whitespace-nowrap rounded-md border border-ci-green-100 bg-white px-2 py-1 font-mono text-[11px] font-semibold text-ci-green-600 shadow-sm">
          {label}
        </span>
      </div>
    </div>
  );
}

/* ---------- Carte inclinable à la souris ---------- */
function TiltCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  const [style, setStyle] = useState({ transform: 'perspective(900px) rotateX(0deg) rotateY(0deg)', glare: '50% 50%' });
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion()) return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setStyle({
      transform: `perspective(900px) rotateX(${(0.5 - py) * 10}deg) rotateY(${(px - 0.5) * 12}deg)`,
      glare: `${px * 100}% ${py * 100}%`,
    });
  };
  const onLeave = () => setStyle({ transform: 'perspective(900px) rotateX(0deg) rotateY(0deg)', glare: '50% 50%' });
  return (
    <div onMouseMove={onMove} onMouseLeave={onLeave} className={`group relative transition-transform duration-200 ease-out [transform-style:preserve-3d] ${className}`} style={{ transform: style.transform }}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `radial-gradient(400px circle at ${style.glare}, rgba(31,111,235,0.08), transparent 45%)` }}
      />
      {children}
    </div>
  );
}

export default function HomePage() {
  const { lang: ctxLang } = useLanguage();
  const lang: 'fr' | 'en' = ctxLang === 'en' ? 'en' : 'fr';
  const t = dict[lang];
  const services = getServices(lang);

  return (
    <div className="relative overflow-hidden bg-[#dfeafb] text-slate-600">
      {/* Fond bleu clair teinté (couleurs du logo) : dégradé bleu pâle → menthe pâle, lueurs et trame de points */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#d3e3fb_0%,#e2ecfc_30%,#e6effc_60%,#ddf3e8_100%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_40rem_at_85%_35%,rgba(22,179,100,0.12),transparent_70%),radial-gradient(70rem_45rem_at_10%_60%,rgba(31,111,235,0.14),transparent_70%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-dot-grid opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent_20%,transparent_85%,black)]" />
      {/* Hero */}
      <section className="relative min-h-[max(100svh,760px)] pt-28 pb-16 flex items-center">
        {/* Grille en perspective qui défile */}
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[55%] overflow-hidden [perspective:600px] [mask-image:linear-gradient(to_top,black_10%,transparent_95%)]">
          <div
            className="absolute -inset-x-1/2 -top-full bottom-0 origin-bottom"
            style={{
              transform: 'rotateX(68deg)',
              backgroundImage:
                'linear-gradient(rgba(22,179,100,0.30) 1px, transparent 1px), linear-gradient(90deg, rgba(31,111,235,0.30) 1px, transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />
        </div>
        {/* Aurore animée aux couleurs du logo */}
        <div
          aria-hidden="true"
          className="absolute -top-40 left-[10%] w-[44rem] h-[30rem] rounded-full bg-ci-blue-200/70 blur-[130px]"
          />
        <div
          aria-hidden="true"
          className="absolute top-10 right-[5%] w-[34rem] h-[26rem] rounded-full bg-[#a5f3fc]/50 blur-[130px]"
          />
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-1/3 w-[40rem] h-[20rem] rounded-full bg-ci-green-100 blur-[130px]"
          />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            {/* Titre principal (H1) : services + ville, pour le référencement ; le slogan reste le grand texte */}
            <h1
              className="inline-flex items-center gap-2 rounded-2xl sm:rounded-full border border-ci-blue-100 bg-white px-4 py-1.5 font-sans text-sm font-semibold tracking-normal text-ci-blue-700 shadow-sm"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ci-green-500 shadow-[0_0_10px_#34d17f]" /> {t.h1}
            </h1>
            {/* Haut de page affiché immédiatement (sans animation d'entrée) : meilleur temps d'affichage pour Google */}
            <p
              className="mt-8 font-display font-bold text-ci-navy text-[2.9rem] leading-[1] sm:text-7xl lg:text-[5.2rem] tracking-[-0.045em]"
            >
              {t.titleA}{' '}
              <span className="text-gradient-ci">
                {t.titleB}
              </span>
            </p>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-600">
              {t.intro}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact/"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-ci-blue-600 to-ci-green-500 px-7 py-4 font-semibold text-white shadow-[0_12px_40px_-10px_rgba(31,111,235,0.6)]"
              >
                <span aria-hidden="true" className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">{t.ctaPrimary}</span>
                <ArrowRight className="relative w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/services/" className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-7 py-4 font-semibold text-ci-navy hover:border-ci-blue-200 hover:bg-ci-blue-50 transition-colors">
                {t.ctaSecondary}
              </Link>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.1 }} className="relative mx-auto w-full max-w-[560px]">
            <DataSphere label={t.sphereLabel} />
          </motion.div>
        </div>
      </section>

      {/* Chiffres */}
      <section className="relative border-y border-white/70 bg-white/50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {t.stats.map((s, i) => (
            <motion.div key={s.l} {...reveal} transition={{ delay: i * 0.08 }}>
              <p className="font-display text-4xl md:text-5xl font-bold text-gradient-ci">{s.v}</p>
              <p className="mt-1 text-sm text-slate-500">{s.l}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Présentation (texte riche en mots-clés pour le référencement) */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <motion.div {...reveal}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ci-green-600">{t.aboutTag}</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-[-0.04em] text-ci-navy">{t.aboutTitle}</h2>
            <Photo name="equipe-atelier" sizes="(min-width: 1024px) 45vw, 100vw" className="mt-10 aspect-[3/2] w-full rounded-3xl border border-white shadow-[0_30px_60px_-30px_rgba(11,31,58,0.45)]" />
          </motion.div>
          <motion.div {...reveal} transition={{ delay: 0.1 }} className="space-y-5 text-lg leading-relaxed text-slate-600">
            {t.aboutText.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
            <Link to="/contact/" className="group inline-flex items-center gap-2 pt-2 font-semibold text-ci-blue-600 hover:text-ci-blue-700">
              {t.aboutCta} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Pile en 3D */}
      <section className="relative py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...reveal}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ci-green-600">{t.stackTag}</p>
            <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold tracking-[-0.04em] text-ci-navy">{t.stackTitle}</h2>
          </motion.div>
          <div className="[perspective:1200px]">
            <div className="space-y-3 [transform:rotateX(18deg)_rotateY(-14deg)] [transform-style:preserve-3d]">
              {t.layers.map((layer, i) => {
                const Icon = layerIcons[i];
                return (
                  <motion.div
                    key={layer.title}
                    initial={{ opacity: 0, x: 60, z: -80 }}
                    whileInView={{ opacity: 1, x: 0, z: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.12 }}
                    style={{ marginLeft: `${i * 5}%` }}
                  >
                    <Link
                      to={layerLinks[i]}
                      className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-[0_25px_50px_-25px_rgba(11,31,58,0.35)] transition-all hover:-translate-x-1 hover:border-ci-blue-200 hover:shadow-[0_25px_50px_-20px_rgba(21,89,209,0.5)]"
                    >
                      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${i === 4 ? 'bg-ci-green-500 shadow-[0_8px_20px_-4px_rgba(22,179,100,0.6)]' : 'bg-ci-blue-600 shadow-[0_8px_20px_-4px_rgba(31,111,235,0.6)]'} text-white`}>
                        <Icon className="w-5 h-5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="font-bold text-ci-navy">{layer.title}</p>
                        <p className="truncate font-mono text-[11px] text-slate-500">{layer.tech}</p>
                      </div>
                      <span className={`ml-auto inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${i === 4 ? 'border-ci-green-100 bg-ci-green-50 text-ci-green-600 group-hover:bg-ci-green-500 group-hover:text-white' : 'border-ci-blue-100 bg-ci-blue-50 text-ci-blue-600 group-hover:bg-ci-blue-600 group-hover:text-white'}`}>
                        <span className="hidden sm:inline">{t.learnMore}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Capacités */}
      <section className="relative py-24 border-t border-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mb-12 font-mono text-xs uppercase tracking-[0.2em] text-ci-green-600">{t.capTag}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.caps.map((c, i) => {
              const Icon = capIcons[i];
              return (
                <motion.div key={c.title} {...reveal} transition={{ delay: i * 0.08 }}>
                  <TiltCard className="h-full rounded-3xl">
                    <Link to={c.to} className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all hover:border-ci-blue-200 hover:shadow-[0_25px_50px_-25px_rgba(21,89,209,0.45)]">
                      <div className="relative overflow-hidden">
                        <Photo name={capPhotos[i]} decorative sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="aspect-[16/10] w-full transition-transform duration-700 group-hover:scale-105" />
                        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/40 to-transparent" />
                        <CapIndicator index={i} label={c.badge} />
                      </div>
                      <div className="flex flex-1 flex-col p-7">
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ci-blue-600/10 text-ci-blue-600 [transform:translateZ(30px)]">
                            <Icon className="w-5 h-5" />
                          </span>
                          <h3 className="font-display text-xl font-bold text-ci-navy">{c.title}</h3>
                        </div>
                        <p className="mt-4 text-slate-600">{c.text}</p>
                        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                          {c.tech.map((tech) => (
                            <li key={tech} className="rounded-full border border-ci-green-100 bg-ci-green-50 px-2.5 py-1 font-mono text-[11px] font-semibold text-ci-green-600">{tech}</li>
                          ))}
                        </ul>
                        <span className="mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ci-green-600">
                          {t.learnMore} <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      </div>
                    </Link>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services en images */}
      <section className="relative py-24 border-t border-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...reveal} className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ci-green-600">{t.servicesTag}</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-[-0.04em] text-ci-navy">{t.servicesTitle}</h2>
              <p className="mt-4 text-lg text-slate-600">{t.servicesText}</p>
            </div>
            <Link to="/services/" className="group inline-flex shrink-0 items-center gap-2 font-semibold text-ci-blue-600 hover:text-ci-blue-700">
              {t.servicesAll} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((svc, i) => (
              <motion.div key={svc.slug} {...reveal} transition={{ delay: (i % 4) * 0.06 }} className={i === 0 ? 'sm:col-span-2 lg:row-span-2' : ''}>
                <Link
                  to={`/services/${svc.slug}/`}
                  className="group relative flex h-full min-h-[15rem] flex-col justify-end overflow-hidden rounded-3xl border border-white bg-ci-navy shadow-[0_25px_50px_-30px_rgba(11,31,58,0.6)]"
                >
                  {servicePhoto[svc.slug] && (
                    <Photo
                      name={servicePhoto[svc.slug]}
                      decorative
                      sizes={i === 0 ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw'}
                      className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/95 via-[#0b1f3a]/45 to-transparent" />
                  <div className="relative p-6">
                    <h3 className={`font-display font-bold text-white ${i === 0 ? 'text-3xl' : 'text-xl'}`}>{svc.title}</h3>
                    <p className={`mt-2 text-sm text-white/80 ${i === 0 ? 'max-w-md' : 'line-clamp-2'}`}>{svc.tagline}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#6ee7a8]">
                      {t.learnMore} <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Démarche */}
      <section className="relative py-24 border-t border-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div {...reveal} className="relative order-last lg:order-first">
            <Photo name="planification-projet" sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-[3/2] w-full rounded-3xl border border-white shadow-[0_30px_60px_-30px_rgba(11,31,58,0.45)]" />
            <div className="absolute -bottom-6 right-6 hidden w-1/2 sm:block">
              <Photo name="bureau-moderne" sizes="25vw" className="aspect-[3/2] w-full rounded-2xl border-4 border-white shadow-xl" />
            </div>
          </motion.div>
          <motion.div {...reveal} transition={{ delay: 0.1 }}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ci-green-600">{t.processTag}</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-[-0.04em] text-ci-navy">{t.processTitle}</h2>
            <p className="mt-4 text-lg text-slate-600">{t.processText}</p>
            <ol className="mt-10 space-y-6">
              {t.processSteps.map((step, i) => (
                <li key={step.title} className="flex gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-ci-blue-600 to-ci-green-500 font-mono text-sm font-bold text-white shadow-[0_10px_25px_-8px_rgba(31,111,235,0.6)]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-bold text-ci-navy text-lg">{step.title}</h3>
                    <p className="mt-1 text-slate-600">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </section>

      {/* Réalisations : sites produits pour nos clients */}
      <section className="relative py-24 border-t border-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...reveal} className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ci-green-600">{t.workTag}</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-[-0.04em] text-ci-navy">{t.workTitle}</h2>
            <p className="mt-4 text-lg text-slate-600">{t.workText}</p>
          </motion.div>
          <div className="mt-12 space-y-8">
            {t.projects.map((p) => (
              <motion.article
                key={p.url}
                {...reveal}
                className="grid grid-cols-1 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_30px_60px_-35px_rgba(11,31,58,0.35)] md:grid-cols-2"
              >
                <div className="flex flex-col justify-center p-8 sm:p-12">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ci-blue-600">{t.workKind}</p>
                  <h3 className="mt-4 font-display text-3xl font-bold text-ci-navy">{p.name}</h3>
                  <p className="mt-4 leading-relaxed text-slate-600">{p.text}</p>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener"
                    className="group mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-ci-navy px-6 py-3.5 font-semibold text-white transition-colors hover:bg-ci-blue-700"
                  >
                    {p.cta} <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener"
                  tabIndex={-1}
                  aria-hidden="true"
                  className="relative flex min-h-[16rem] flex-col items-center justify-center bg-gradient-to-br from-[#1f6b3a] to-[#0d3b20] px-8 py-12 text-center"
                >
                  <span className="flex rounded-3xl bg-white p-4 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)]">
                    <img src={p.logo} alt="" width="240" height="308" loading="lazy" className="h-40 w-auto sm:h-48" />
                  </span>
                  <span className="mt-6 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                    {p.nameStart}<span className="text-[#f5b82e]">{p.nameAccent}</span>
                  </span>
                  <span className="mt-4 text-sm text-white/80">{p.tagline}</span>
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Ancrage local */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <motion.div {...reveal} className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] shadow-[0_30px_80px_-40px_rgba(11,31,58,0.6)]">
          <Photo name="sherbrooke-estrie" decorative sizes="100vw" className="absolute inset-0 h-full w-full" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#0b1f3a]/90 via-[#0b1f3a]/65 to-[#0b1f3a]/20" />
          <div className="relative max-w-2xl px-8 py-20 sm:px-14">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#6ee7a8]">{t.localTag}</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-[-0.04em] text-white">{t.localTitle}</h2>
            <p className="mt-5 text-lg leading-relaxed text-white/85">{t.localText}</p>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-28 pt-8">
        <motion.div {...reveal} className="relative max-w-7xl mx-auto overflow-hidden rounded-[2rem] border border-white bg-white/70 px-6 py-20 shadow-[0_30px_80px_-40px_rgba(11,31,58,0.4)] backdrop-blur sm:px-12 text-center">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(31,111,235,0.07),transparent_70%)]" />
          <motion.div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-ci-blue-100"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-ci-green-100"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl font-display text-4xl md:text-6xl font-bold tracking-[-0.04em] text-ci-navy">{t.ctaTitle}</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-slate-600">{t.ctaText}</p>
            <Link to="/contact/" className="group mt-10 inline-flex items-center gap-2 rounded-xl bg-ci-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-ci-blue-600/30 hover:bg-ci-blue-700 transition-colors">
              {t.ctaButton} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
