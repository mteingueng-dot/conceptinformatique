import { photoAlt, photoSrc, type PhotoKey } from '../data/photos';
import { useLanguage } from '../i18n/LanguageContext';

type PhotoProps = {
  name: PhotoKey;
  className?: string;
  /** Largeur affichée, pour que le navigateur choisisse la bonne taille (attribut sizes). */
  sizes?: string;
  /** true pour une photo visible dès l'ouverture de la page (pas de chargement différé). */
  priority?: boolean;
  /** true si la photo est purement décorative (texte alternatif vide). */
  decorative?: boolean;
};

/** Photo responsive (WebP 800 / 1600 px, format 3:2) avec texte alternatif traduit. */
export default function Photo({ name, className = '', sizes = '(min-width: 1024px) 50vw, 100vw', priority = false, decorative = false }: PhotoProps) {
  const { lang } = useLanguage();
  return (
    <img
      src={photoSrc(name, 1600)}
      srcSet={`${photoSrc(name, 800)} 800w, ${photoSrc(name, 1600)} 1600w`}
      sizes={sizes}
      width={1600}
      height={1066}
      alt={decorative ? '' : photoAlt[name][lang === 'en' ? 'en' : 'fr']}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      {...(priority ? { fetchPriority: 'high' as const } : {})}
      className={`object-cover ${className}`}
    />
  );
}
