import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useLanguage, type Lang } from '../i18n/LanguageContext';

const t = {
  fr: {
    home: 'Accueil',
    services: 'Services',
    about: 'À propos',
    careers: 'Carrières',
    contact: 'Contact',
    cta: 'Consultation',
    mobileCta: 'Contactez-nous',
    tagline: 'Solutions TI · Sherbrooke',
    toggleMenu: 'Ouvrir ou fermer le menu',
    langLabel: 'Choisir la langue',
  },
  en: {
    home: 'Home',
    services: 'Services',
    about: 'About',
    careers: 'Careers',
    contact: 'Contact',
    cta: 'Consultation',
    mobileCta: 'Contact us',
    tagline: 'IT solutions · Sherbrooke',
    toggleMenu: 'Toggle menu',
    langLabel: 'Choose language',
  },
};

type NavKey = 'home' | 'services' | 'about' | 'careers' | 'contact';

interface LangSwitcherProps {
  lang: Lang;
  setLang: (l: Lang) => void;
  label: string;
  className?: string;
}

function LangSwitcher({ lang, setLang, label, className = '' }: LangSwitcherProps) {
  return (
    <div
      role="group"
      aria-label={label}
      className={`flex items-center rounded-lg border border-slate-200 bg-white p-0.5 text-xs font-semibold uppercase ${className}`}
    >
      {(['fr', 'en'] as const).map((l) => (
        <button
          key={l}
          type="button"
          lang={l}
          aria-label={l === 'fr' ? 'Français' : 'English'}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-md px-2.5 py-1 transition-colors ${
            lang === l ? 'bg-ci-navy text-white' : 'text-slate-500 hover:text-ci-navy'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const location = useLocation();
  const tr = t[lang];
  const [isOpen, setIsOpen] = useState(false);
  // Barre transparente seulement en haut de l'accueil (fond clair) ; blanche partout ailleurs.
  const isHome = location.pathname === '/' || location.pathname === '/home';
  const [scrolledDown, setScrolledDown] = useState(() => typeof window !== 'undefined' && window.scrollY > 10);
  const scrolled = !isHome || scrolledDown;

  useEffect(() => {
    const handleScroll = () => setScrolledDown(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks: { key: NavKey; idSlug: string; path: string }[] = [
    { key: 'home', idSlug: 'accueil', path: '/' },
    { key: 'services', idSlug: 'services', path: '/services/' },
    { key: 'about', idSlug: 'à propos', path: '/about/' },
    { key: 'careers', idSlug: 'carrières', path: '/careers/' },
    { key: 'contact', idSlug: 'contact', path: '/contact/' },
  ];

  const isActive = (path: string) => {
    const current = location.pathname.replace(/\/+$/, '') || '/';
    const target = path.replace(/\/+$/, '') || '/';
    return target === '/' ? current === '/' : current === target || current.startsWith(target + '/');
  };

  return (
    <nav
      id="navbar-root-w8p1k9m3"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_8px_30px_-20px_rgba(11,31,58,0.35)]'
          : 'bg-white/0 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-50 flex justify-between h-20 items-center">
          <div id="nav-logo-container-k4m2p8n1" data-role="logo" className="flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo-concept-informatique-mark.png" alt="Logo Concept Informatique" className="h-10 w-auto object-contain" />
              <span className="hidden min-[420px]:flex flex-col leading-tight whitespace-nowrap">
                <span className="text-lg font-extrabold tracking-tight text-ci-navy">
                  Concept <span className="text-ci-green-600">Informatique</span>
                </span>
                <span className="hidden sm:block text-[11px] font-medium text-slate-500">{tr.tagline}</span>
              </span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.key}
                  to={link.path}
                  aria-current={active ? 'page' : undefined}
                  className={`relative whitespace-nowrap rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors ${
                    active ? 'text-ci-blue-600 bg-ci-blue-50' : 'text-slate-600 hover:text-ci-navy hover:bg-slate-100'
                  }`}
                  id={`nav-link-${link.idSlug}-p8n2k1m4`}
                >
                  {tr[link.key]}
                </Link>
              );
            })}
            <LangSwitcher lang={lang} setLang={setLang} label={tr.langLabel} className="ml-4" />
            <Link
              to="/contact/"
              id="nav-cta-button-q3x7v1n9"
              className="group ml-3 inline-flex items-center gap-1.5 rounded-xl bg-ci-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-ci-blue-600/25 transition-colors hover:bg-ci-blue-700"
            >
              {tr.cta}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-3">
            <LangSwitcher lang={lang} setLang={setLang} label={tr.langLabel} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg border border-slate-200 bg-white p-2 text-ci-navy transition-colors hover:bg-slate-100"
              id="nav-mobile-toggle-v7m2n1k4"
              aria-label={tr.toggleMenu}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu-overlay-k4m8n2p1"
        className={`lg:hidden fixed inset-0 z-40 bg-white transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex h-full flex-col px-6 pt-28 pb-10">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.key}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-xl px-4 py-4 text-2xl font-bold transition-colors ${
                    active ? 'bg-ci-blue-50 text-ci-blue-600' : 'text-ci-navy hover:bg-slate-50'
                  }`}
                >
                  {tr[link.key]}
                </Link>
              );
            })}
          </div>
          <Link
            to="/contact/"
            onClick={() => setIsOpen(false)}
            className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-ci-blue-600 px-6 py-4 text-base font-semibold text-white"
          >
            {tr.mobileCta} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
