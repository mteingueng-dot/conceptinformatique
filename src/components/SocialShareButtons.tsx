import { MessageCircle, Share2 } from 'lucide-react';

interface SocialShareButtonsProps {
  jobId: string;
  jobTitle: string;
  labels: {
    group: string;
    linkedin: string;
    whatsapp: string;
    facebook: string;
  };
}

export default function SocialShareButtons({ jobId, jobTitle, labels }: SocialShareButtonsProps) {
  const jobUrl = `https://conceptinformatique.net/#/careers/${encodeURIComponent(jobId)}`;
  const shareText = `${jobTitle} - ${jobUrl}`;
  const linkedInUrl = new URL('https://www.linkedin.com/feed/');
  linkedInUrl.searchParams.set('shareActive', 'true');
  linkedInUrl.searchParams.set('text', shareText);
  const facebookUrl = new URL('https://www.facebook.com/sharer/sharer.php');
  facebookUrl.searchParams.set('u', jobUrl);
  facebookUrl.searchParams.set('quote', jobTitle);
  const whatsappUrl = new URL('https://wa.me/');
  whatsappUrl.searchParams.set('text', shareText);
  const channels = [
    { label: labels.linkedin, href: linkedInUrl.toString(), Icon: Share2 },
    { label: labels.whatsapp, href: whatsappUrl.toString(), Icon: MessageCircle },
    { label: labels.facebook, href: facebookUrl.toString(), Icon: Share2 },
  ];

  return (
    <div role="group" aria-label={labels.group} className="flex flex-wrap items-center gap-2">
      {channels.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          onClick={(event) => event.stopPropagation()}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-slate-600 px-3 text-xs font-medium text-slate-300 transition-colors hover:border-cyan-300 hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
        >
          <Icon aria-hidden="true" className="h-4 w-4" />
          <span>{label}</span>
        </a>
      ))}
    </div>
  );
}