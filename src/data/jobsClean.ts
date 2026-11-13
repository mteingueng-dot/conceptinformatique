/*
 * Validation des offres venant de l'application ConceptSolution RH (API ou capture du build).
 * Ne garde que les offres complètes ; l'identifiant sert dans l'adresse, il doit rester simple.
 */
import type { JobDetail } from './jobs';

const isText = (v: unknown): v is string => typeof v === 'string' && v.trim() !== '';
const textList = (v: unknown): string[] => (Array.isArray(v) ? v.filter(isText) : []);
const isoDate = (v: unknown): string | undefined =>
  typeof v === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(v) ? v : undefined;

/** Date du jour au Québec (AAAA-MM-JJ). */
export function todayInQuebec(): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Toronto' }).format(new Date());
}

/** Offre dont la date limite est passée. */
export const isExpired = (job: JobDetail, today = todayInQuebec()) => !!job.deadline && job.deadline < today;

/**
 * Offres valides d'une liste brute. `dropExpired` : retirer aussi les offres échues
 * (jamais pendant le rendu initial, pour que le HTML pré-rendu et le navigateur concordent).
 */
export function cleanJobList(raw: unknown, dropExpired: boolean): JobDetail[] {
  if (!Array.isArray(raw)) return [];
  const today = todayInQuebec();
  const seen = new Set<string>();
  const out: JobDetail[] = [];
  for (const item of raw) {
    if (!item || typeof item !== 'object') continue;
    const j = item as Record<string, unknown>;
    if (!isText(j.id) || !/^[a-z0-9][a-z0-9-]{0,99}$/i.test(j.id) || seen.has(j.id)) continue;
    if (!isText(j.title) || !isText(j.summary) || !isText(j.location) || !isText(j.type) || !isText(j.intro)) continue;
    const job: JobDetail = {
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
      deadline: isoDate(j.deadline),
      publishedAt: isoDate(j.publishedAt),
      client: isText(j.client) ? j.client : undefined,
    };
    if (dropExpired && isExpired(job, today)) continue;
    seen.add(job.id);
    out.push(job);
  }
  return out;
}
