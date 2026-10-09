import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { getInitialLang } from './i18n/LanguageContext';

document.documentElement.lang = getInitialLang();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode><App /></React.StrictMode>
);