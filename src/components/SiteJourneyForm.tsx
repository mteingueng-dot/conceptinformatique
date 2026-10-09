import { useState, type FormEvent, type ReactNode } from 'react';

interface SiteJourneyFormProps {
  className?: string;
  formType?: string;
  endpoint?: string;
  successMessage?: string;
  children: ReactNode;
  onSuccess?: () => void;
}

declare global {
  interface Window {
    __FORM_API_URL__?: string;
    __SITE_ID__?: string;
  }
}

export default function SiteJourneyForm({
  className,
  formType,
  endpoint,
  successMessage = 'Thank you! Your submission has been received.',
  children,
  onSuccess,
}: SiteJourneyFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    // If the form has an external action, let the browser handle it natively
    const action = form.getAttribute('action');
    if (action && action.startsWith('http')) {
      form.submit();
      return;
    }

    setStatus('submitting');
    setErrorMsg('');

    const formData = new FormData(form);

    try {
      let res: Response;
      if (endpoint) {
        res = await fetch(endpoint, { method: 'POST', body: formData });
      } else {
        const payload: Record<string, string | { name: string; type: string; size: number; lastModified: number }> = {};
        formData.forEach((value, key) => {
          if (value instanceof File) {
            payload[key] = {
              name: value.name,
              type: value.type,
              size: value.size,
              lastModified: value.lastModified,
            };
            return;
          }
          payload[key] = String(value);
        });

        const apiUrl = window.__FORM_API_URL__;
        const siteId = window.__SITE_ID__;
        if (!apiUrl || !siteId) throw new Error('Form service not configured');

        res = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ siteId, formType: formType || undefined, payload }),
        });
      }

      if (!res.headers.get('content-type')?.includes('application/json')) {
        const isLocalPreview = endpoint && ['localhost', '127.0.0.1'].includes(window.location.hostname);
        throw new Error(
          isLocalPreview
            ? 'Aucun courriel n’a été envoyé : Vite ne peut pas exécuter PHP en local. Testez le formulaire sur le site publié dans cPanel.'
            : 'Le serveur n’a pas retourné une réponse valide. Vérifiez que PHP est activé sur l’hébergement.',
        );
      }
      const result = await res.json() as { message?: string };
      if (!res.ok) throw new Error(result.message || 'L’envoi du formulaire a échoué. Veuillez réessayer.');

      setStatus('success');
      form.reset();
      onSuccess?.();
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong');
    }
  };

  if (status === 'success') {
    return (
      <div className={className}>
        <div className="rounded-lg bg-green-50 border border-green-200 p-6 text-center">
          <p className="text-green-800 font-medium">{successMessage}</p>
          <button
            type="button"
            className="mt-3 text-sm text-green-600 underline hover:text-green-800"
            onClick={() => setStatus('idle')}
          >
            Submit another response
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      {children}
      {status === 'error' && (
        <p className="text-red-600 text-sm mt-2">{errorMsg}</p>
      )}
      {status === 'submitting' && (
        <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
          Submitting...
        </div>
      )}
    </form>
  );
}