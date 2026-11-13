/*
 * Début du build : capture les offres publiées par l'application ConceptSolution RH
 * dans src/data/jobsSnapshot.json, pour que chaque offre ait sa page pré-rendue
 * (titre et description lus par Google, LinkedIn, Facebook…).
 * Si l'API ne répond pas ou ne rend aucune offre, la capture précédente est gardée.
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const API = 'https://rh.conceptinformatique.net/api/offres.json';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const file = join(root, 'src', 'data', 'jobsSnapshot.json');

const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Toronto' }).format(new Date());
const validId = (id) => typeof id === 'string' && /^[a-z0-9][a-z0-9-]{0,99}$/i.test(id);
const current = (list) =>
  Array.isArray(list) ? list.filter((j) => j && validId(j.id) && typeof j.title === 'string' && !(j.deadline && j.deadline < today)) : [];

function keepPrevious(reason) {
  if (!existsSync(file)) writeFileSync(file, JSON.stringify({ generatedAt: null, fr: [], en: [] }, null, 2) + '\n');
  console.warn(`Offres de l'application RH : ${reason} ; capture précédente gardée.`);
}

try {
  const res = await fetch(API, { signal: AbortSignal.timeout(20000) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  const fr = current(data.fr);
  const en = current(data.en);
  if (fr.length === 0 || en.length === 0) {
    keepPrevious('aucune offre rendue');
  } else {
    const next = JSON.stringify({ generatedAt: data.generatedAt ?? null, fr, en }, null, 2) + '\n';
    const previous = existsSync(file) ? readFileSync(file, 'utf-8') : '';
    if (next !== previous) writeFileSync(file, next);
    console.log(`Offres de l'application RH : ${fr.length} (fr) / ${en.length} (en) capturées.`);
  }
} catch (err) {
  keepPrevious(`API injoignable (${err.message})`);
}
