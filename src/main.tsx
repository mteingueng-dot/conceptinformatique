import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { getInitialLang } from './i18n/LanguageContext';
import { canonicalPath, getPageMeta } from './seo/meta';

// Anciennes adresses avec dièse (/#/services/...) : on les convertit en vraies adresses.
if (window.location.hash.startsWith('#/')) {
  window.history.replaceState(null, '', window.location.hash.slice(1));
}

const lang = getInitialLang();
document.documentElement.lang = lang === 'fr' ? 'fr-CA' : 'en-CA';

const container = document.getElementById('root')!;
const app = <React.StrictMode><App /></React.StrictMode>;

// La page arrive pré-rendue en français. Pour un visiteur en français, React « reprend » ce HTML
// sans le reconstruire (plus rapide) ; sinon (anglais, ancienne adresse, redirection) la page est rendue à nouveau.
const prerendered = container.dataset.prerendered;
const current = getPageMeta(window.location.pathname, 'fr').notFound ? '404' : canonicalPath(window.location.pathname);
if (container.hasChildNodes() && lang === 'fr' && prerendered === current) {
  ReactDOM.hydrateRoot(container, app);
} else {
  ReactDOM.createRoot(container).render(app);
}
