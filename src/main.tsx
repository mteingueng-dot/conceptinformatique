import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { getInitialLang } from './i18n/LanguageContext';

// Anciennes adresses avec dièse (/#/services/...) : on les convertit en vraies adresses.
if (window.location.hash.startsWith('#/')) {
  window.history.replaceState(null, '', window.location.hash.slice(1));
}

document.documentElement.lang = getInitialLang() === 'fr' ? 'fr-CA' : 'en-CA';

// La page arrive déjà pré-rendue (HTML pour les moteurs de recherche) ; React la remplace
// par la version interactive, dans la langue choisie par le visiteur.
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode><App /></React.StrictMode>
);
