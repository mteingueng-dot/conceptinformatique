/*
 * Liens et navigation dans la langue courante : un lien écrit « /services/ » mène à /en/services/
 * quand la page est en anglais. À utiliser à la place de Link / useNavigate de react-router-dom.
 */
import { forwardRef, useCallback } from 'react';
import { Link as RouterLink, Navigate as RouterNavigate, useNavigate as useRouterNavigate, type LinkProps, type NavigateOptions, type To } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import { localizePath, type Lang } from './paths';

function localizeTo(to: To, lang: Lang): To {
  if (typeof to === 'string') return localizePath(to, lang);
  return to.pathname ? { ...to, pathname: localizePath(to.pathname, lang) } : to;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link({ to, ...rest }, ref) {
  const { lang } = useLanguage();
  return <RouterLink ref={ref} to={localizeTo(to, lang)} {...rest} />;
});

export function Navigate({ to, ...rest }: { to: To; replace?: boolean; state?: unknown }) {
  const { lang } = useLanguage();
  return <RouterNavigate to={localizeTo(to, lang)} {...rest} />;
}

export function useNavigate() {
  const navigate = useRouterNavigate();
  const { lang } = useLanguage();
  return useCallback(
    (to: To | number, options?: NavigateOptions) => {
      if (typeof to === 'number') navigate(to);
      else navigate(localizeTo(to, lang), options);
    },
    [navigate, lang],
  );
}
