/*
 * Offres d'emploi publiées par l'application ConceptSolution RH (https://rh.conceptinformatique.net).
 * Lues dans le navigateur seulement (jamais pendant le pré-rendu). Tant que la réponse n'est pas
 * arrivée, ou si l'API échoue ou ne rend aucune offre, le site affiche les offres de jobs.ts.
 */
import { useEffect, useState } from 'react';
import { jobsContent, type JobDetail } from './jobs';

export const JOBS_API_URL = 'https://rh.conceptinformatique.net/api/offres.json';

type Lang = 'fr' | 'en';
type JobLists = Record<Lang, JobDetail[]>;

export type RemoteJobsState =
  /** Réponse pas encore arrivée (et toujours pendant le pré-rendu) */
  | { status: 'loading' }
  /** L'API a rendu des offres : elle fait foi */
  | { status: 'ready'; jobs: JobLists }
  /** Échec ou listes vides : repli sur jobs.ts */
  | { status: 'fallback' };

const isText = (v: unknown): v is string => typeof v === 'string' && v.trim() !== '';
const textList = (v: unknown): string[] => (Array.isArray(v) ? v.filter(isText) : []);
const isoDate = (v: unknown): string | undefined =>
  typeof v === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(v) ? v : undefined;

/** Date du jour au Québec (AAAA-MM-JJ), pour masquer une offre échue même si l'API est en cache. */
function todayInQuebec(): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Toronto' }).format(new Date());
}

/** Garde seulement les offres complètes ; l'identifiant sert dans l'adresse, il doit rester simple. */
function cleanList(raw: unknown): JobDetail[] {
  if (!Array.isArray(raw)) return [];
  const today = todayInQuebec();
  const seen = new Set<string>();
  const out: JobDetail[] = [];
  for (const item of raw) {
    if (!item || typeof item !== 'object') continue;
    const j = item as Record<string, unknown>;
    if (!isText(j.id) || !/^[a-z0-9][a-z0-9-]{0,99}$/i.test(j.id) || seen.has(j.id)) continue;
    if (!isText(j.title) || !isText(j.summary) || !isText(j.location) || !isText(j.type) || !isText(j.intro)) continue;
    const deadline = isoDate(j.deadline);
    if (deadline && deadline < today) continue;
    seen.add(j.id);
    out.push({
      id: j.id,
      title: j.title,
      summary: j.summary,
      location: j.location,
      type: j.type,
      intro: j.intro,
      responsibilities: textList(j.responsibilities),
      requirements: textList(j.requirements),
      assets: textList(j.assets),
      benefits: textList(j.benefits),
      terms: textList(j.terms),
      deliverables: textList(j.deliverables),
      deadline,
      publishedAt: isoDate(j.publishedAt),
      client: isText(j.client) ? j.client : undefined,
    });
  }
  return out;
}

let request: Promise<RemoteJobsState> | null = null;

/** Une seule requête par visite, partagée par toutes les pages. */
function loadRemoteJobs(): Promise<RemoteJobsState> {
  if (!request) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);
    request = fetch(JOBS_API_URL, { signal: controller.signal, credentials: 'omit' })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`))))
      .then((data: unknown): RemoteJobsState => {
        const d = (data ?? {}) as Record<string, unknown>;
        const jobs = { fr: cleanList(d.fr), en: cleanList(d.en) };
        return jobs.fr.length > 0 && jobs.en.length > 0 ? { status: 'ready', jobs } : { status: 'fallback' };
      })
      .catch((): RemoteJobsState => ({ status: 'fallback' }))
      .finally(() => clearTimeout(timer));
  }
  return request;
}

let settled: RemoteJobsState | null = null;

/** État des offres de l'application RH (« loading » au premier rendu, pour reprendre le HTML pré-rendu). */
export function useRemoteJobs(): RemoteJobsState {
  const [state, setState] = useState<RemoteJobsState>({ status: 'loading' });
  useEffect(() => {
    let alive = true;
    if (settled) {
      setState(settled);
    } else {
      loadRemoteJobs().then((s) => {
        settled = s;
        if (alive) setState(s);
      });
    }
    return () => {
      alive = false;
    };
  }, []);
  return state;
}

/** Offres à afficher : celles de l'API si elle a répondu, sinon celles de jobs.ts. */
export function jobsFor(state: RemoteJobsState, lang: Lang): JobDetail[] {
  return state.status === 'ready' ? state.jobs[lang] : jobsContent[lang];
}

/** Date limite affichée (« 20 novembre 2026 » / « November 20, 2026 »). */
export function formatDeadline(date: string, lang: Lang): string {
  const [y, m, d] = date.split('-').map(Number);
  return new Intl.DateTimeFormat(lang === 'fr' ? 'fr-CA' : 'en-CA', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(y, m - 1, d)));
}
