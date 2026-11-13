/*
 * Offres d'emploi publiées par l'application ConceptSolution RH (https://rh.conceptinformatique.net).
 * Lues dans le navigateur seulement (jamais pendant le pré-rendu). Tant que la réponse n'est pas
 * arrivée, ou si l'API échoue ou ne rend aucune offre, le site affiche les offres de jobs.ts.
 */
import { useEffect, useState } from 'react';
import { siteJobs, type JobDetail } from './jobs';
import { cleanJobList, isExpired } from './jobsClean';

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
        const jobs = { fr: cleanJobList(d.fr, true), en: cleanJobList(d.en, true) };
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

/**
 * Offres à afficher : celles de l'API si elle a répondu ; sinon celles du build (siteJobs),
 * sans les offres échues une fois le rendu initial passé.
 */
export function jobsFor(state: RemoteJobsState, lang: Lang): JobDetail[] {
  if (state.status === 'ready') return state.jobs[lang];
  if (state.status === 'fallback') return siteJobs[lang].filter((j) => !isExpired(j));
  return siteJobs[lang];
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
