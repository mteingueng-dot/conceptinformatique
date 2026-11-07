/*
 * Pré-rendu : écrit une page HTML complète par adresse (dist/<adresse>/index.html),
 * avec son titre, sa description, sa canonique et ses balises Open Graph, puis le sitemap.
 * Lancé par « npm run build » après les deux compilations Vite (client puis serveur).
 */
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const ssrDir = join(root, 'dist-ssr');

const { render, getPageMeta, getStructuredData, getAlternates, listRoutes, langFromPath, SITE_URL, NOT_FOUND_PATH } = await import(pathToFileURL(join(ssrDir, 'entry-server.js')).href);

const template = readFileSync(join(dist, 'index.html'), 'utf-8');

const escapeAttr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const escapeText = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

function setTag(html, pattern, replacement, label) {
  const found = typeof pattern === 'string' ? html.includes(pattern) : pattern.test(html);
  if (!found) throw new Error(`Balise introuvable dans index.html : ${label}`);
  // fonction de remplacement : évite que des « $ » du contenu soient interprétés
  return html.replace(pattern, () => replacement);
}

function pageHtml(route) {
  const lang = langFromPath(route);
  const meta = getPageMeta(route);
  const url = SITE_URL + meta.path;
  const t = escapeAttr(meta.title);
  const d = escapeAttr(meta.description);
  let html = template;
  html = setTag(html, /<title>[^<]*<\/title>/, `<title>${escapeText(meta.title)}</title>`, 'title');
  html = setTag(html, /<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${d}" />`, 'description');
  html = setTag(html, /<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${url}" />`, 'canonical');
  html = setTag(html, /<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${t}" />`, 'og:title');
  html = setTag(html, /<meta property="og:description" content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${d}" />`, 'og:description');
  html = setTag(html, /<meta property="og:url" content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${url}" />`, 'og:url');
  html = setTag(html, /<meta property="og:locale" content="[^"]*"\s*\/?>/, `<meta property="og:locale" content="${lang === 'fr' ? 'fr_CA' : 'en_CA'}" />`, 'og:locale');
  html = setTag(html, /<html lang="[^"]*">/, `<html lang="${lang === 'fr' ? 'fr-CA' : 'en-CA'}">`, 'html lang');
  // data-prerendered : adresse de la page contenue, pour que le navigateur sache s'il peut reprendre ce HTML tel quel
  html = setTag(html, '<div id="root"></div>', `<div id="root" data-prerendered="${meta.notFound ? '404' : meta.path}">${render(route)}</div>`, 'root');

  if (meta.notFound) {
    // Page « introuvable » : pas de canonique, non indexée
    html = setTag(html, /\s*<link rel="canonical" href="[^"]*"\s*\/?>/, '', 'canonical');
    html = setTag(html, '</head>', '  <meta name="robots" content="noindex" />\n  </head>', 'head');
  } else {
    // Versions linguistiques de la même page (Google montre la bonne langue à chaque internaute)
    const alt = getAlternates(route);
    const links = [
      `<link rel="alternate" hreflang="fr-CA" href="${alt.fr}" />`,
      `<link rel="alternate" hreflang="en-CA" href="${alt.en}" />`,
      `<link rel="alternate" hreflang="x-default" href="${alt.fr}" />`,
    ];
    html = setTag(html, '</head>', `  ${links.join('\n    ')}\n  </head>`, 'head');
    const data = getStructuredData(route);
    if (data.length) {
      // « < » échappé pour qu'aucun texte ne puisse fermer la balise <script>
      const json = JSON.stringify(data.length === 1 ? data[0] : data).replace(/</g, '\\u003c');
      html = setTag(html, '</head>', `  <script id="ld-page" type="application/ld+json">${json}</script>\n  </head>`, 'head');
    }
  }
  return html;
}

const routes = listRoutes();
for (const route of routes) {
  const html = pageHtml(route);
  const file = route === '/' ? join(dist, 'index.html') : join(dist, route, 'index.html');
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
}

// Page « introuvable », servie par le serveur pour toute adresse inexistante (ErrorDocument 404)
writeFileSync(join(dist, '404.html'), pageHtml(NOT_FOUND_PATH));

// Sitemap bilingue : chaque adresse annonce sa version dans l'autre langue
const today = new Date().toISOString().slice(0, 10);
const entry = (r) => {
  const alt = getAlternates(r);
  return (
    `  <url><loc>${SITE_URL}${r}</loc><lastmod>${today}</lastmod>` +
    `<xhtml:link rel="alternate" hreflang="fr-CA" href="${alt.fr}"/>` +
    `<xhtml:link rel="alternate" hreflang="en-CA" href="${alt.en}"/>` +
    `<xhtml:link rel="alternate" hreflang="x-default" href="${alt.fr}"/></url>`
  );
};
const sitemap =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' +
  routes.map(entry).join('\n') +
  '\n</urlset>\n';
writeFileSync(join(dist, 'sitemap.xml'), sitemap);

rmSync(ssrDir, { recursive: true, force: true });
console.log(`Pré-rendu : ${routes.length} pages et sitemap.xml écrits dans dist/`);
