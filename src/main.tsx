import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { langFromPath } from './i18n/paths';
import { canonicalPath, getPageMeta } from './seo/meta';

// Anciennes adresses avec dièse (/#/services/...) : on les convertit en vraies adresses.
if (window.location.hash.startsWith('#/')) {
  window.history.replaceState(null, '', window.location.hash.slice(1));
}

document.documentElement.lang = langFromPath(window.location.pathname) === 'fr' ? 'fr-CA' : 'en-CA';

const container = document.getElementById('root')!;
const app = <React.StrictMode><App /></React.StrictMode>;

// Chaque page arrive pré-rendue dans sa langue. Si le HTML reçu correspond bien à l'adresse,
// React le « reprend » sans le reconstruire (plus rapide) ; sinon (ancienne adresse, redirection),
// la page est rendue à nouveau.
const prerendered = container.dataset.prerendered;
// (la page « introuvable » pré-rendue est en français : en anglais, elle est rendue à nouveau)
const notFound = getPageMeta(window.location.pathname).notFound;
const current = notFound
  ? langFromPath(window.location.pathname) === 'fr' ? '404' : '404-en'
  : canonicalPath(window.location.pathname);
if (container.hasChildNodes() && prerendered === current) {
  ReactDOM.hydrateRoot(container, app);
} else {
  ReactDOM.createRoot(container).render(app);
}
