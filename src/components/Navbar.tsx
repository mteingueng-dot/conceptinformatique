import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage, type Lang } from '../i18n/LanguageContext';

const t = {
  fr: {
    home: 'Accueil',
    services: 'Services',
    about: 'À Propos',
    careers: 'Carrières',
    contact: 'Contact',
    cta: 'Consultation',
    mobileCta: 'Contactez-nous',
    tagline: '// solutions TI',
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
    tagline: '// IT solutions',
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
      className={`flex items-center rounded-md border border-cyan-400/30 overflow-hidden font-mono text-xs uppercase tracking-widest ${className}`}
    >
      {(['fr', 'en'] as const).map((l) => (
        <button
          key={l}
          type="button"
          lang={l}
          aria-label={l === 'fr' ? 'Français' : 'English'}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`px-3 py-1.5 transition-colors ${
            lang === l
              ? 'bg-cyan-400/20 text-cyan-200'
              : 'text-slate-400 hover:text-cyan-300'
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
  const isHome = location.pathname === '/';
  const [scrolled, setScrolled] = useState(() => (isHome ? window.scrollY > 50 : true));

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks: { key: NavKey; idSlug: string; path: string }[] = [
    { key: 'home', idSlug: 'accueil', path: '/' },
    { key: 'services', idSlug: 'services', path: '/services' },
    { key: 'about', idSlug: 'à propos', path: '/about' },
    { key: 'careers', idSlug: 'carrières', path: '/careers' },
    { key: 'contact', idSlug: 'contact', path: '/contact' },
  ];

  const isActive = (path: string) =>
    path === '/'
      ? location.pathname === '/'
      : location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    <nav
      id="navbar-root-w8p1k9m3"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-cyan-400/20 shadow-[0_4px_30px_rgba(6,182,212,0.12)]'
          : 'bg-gradient-to-b from-slate-950/70 to-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-50 flex justify-between h-20 items-center">
          <div id="nav-logo-container-k4m2p8n1" data-role="logo" className="flex items-center gap-2">
            <Link to="/" className="group flex items-center gap-3">
              <div className="relative bg-transparent">
                <img
                  src="/logo-concept-informatique-mark.png"
                  alt="Logo Concept Informatique"
                  className="relative h-10 w-auto object-contain bg-transparent"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-sans font-light text-xl tracking-tight text-white">
                  Concept{' '}
                  <span className="font-display italic bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                    Informatique
                  </span>
                </span>
                <span className="hidden sm:block font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-300/70">
                  {tr.tagline}
                </span>
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.key}
                  to={link.path}
                  className={`group relative px-4 py-2 text-xs font-mono uppercase tracking-widest transition-colors ${
                    active ? 'text-cyan-300' : 'text-slate-300 hover:text-cyan-300'
                  }`}
                  id={`nav-link-${link.idSlug}-p8n2k1m4`}
                >
                  {active && <span className="text-emerald-400 mr-1">&gt;</span>}
                  {tr[link.key]}
                  <span
                    className={`absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-opacity group-hover:opacity-100 ${
                      active ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </Link>
              );
            })}
            <Link
              to="/contact"
              id="nav-cta-button-q3x7v1n9"
              className="ml-4 px-6 py-2 rounded-md border border-cyan-400/50 bg-gradient-to-r from-cyan-400/20 to-emerald-400/20 text-xs font-mono uppercase tracking-widest text-cyan-200 shadow-[0_0_15px_rgba(34,211,238,0.25)] transition-all hover:border-cyan-300 hover:text-white hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]"
            >
              {tr.cta}
            </Link>
            <LangSwitcher lang={lang} setLang={setLang} label={tr.langLabel} className="ml-4" />
          </div>

          <div className="lg:hidden flex items-center gap-3">
            <LangSwitcher lang={lang} setLang={setLang} label={tr.langLabel} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md border border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10 transition-colors"
              id="nav-mobile-toggle-v7m2n1k4"
              aria-label={tr.toggleMenu}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <div
          className={`pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent transition-opacity duration-300 ${
            scrolled ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu-overlay-k4m8n2p1"
        className={`lg:hidden fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.key}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-xl font-mono uppercase tracking-widest transition-colors hover:text-cyan-300 ${
                  active ? 'text-cyan-300' : 'text-slate-200'
                }`}
              >
                {active && <span className="text-emerald-400 mr-2">&gt;</span>}
                {tr[link.key]}
              </Link>
            );
          })}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="px-10 py-4 rounded-md border border-cyan-400/50 bg-gradient-to-r from-cyan-400/20 to-emerald-400/20 text-sm font-mono uppercase tracking-widest text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.3)]"
          >
            {tr.mobileCta}
          </Link>
        </div>
      </div>
    </nav>
  );
}
