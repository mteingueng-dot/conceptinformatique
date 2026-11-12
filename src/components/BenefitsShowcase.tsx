import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Photo from './Photo';
import type { PhotoKey } from '../data/photos';

type Props = {
  prefix: string;
  highlight: string;
  /** Phrase affichée sur la photo, sous le titre. */
  subtitle?: string;
  photo?: PhotoKey;
  items: { title: string; text?: string }[];
};

/** Section « Les avantages » des pages de détail : grande photo à gauche, avantages numérotés à droite. */
export default function BenefitsShowcase({ prefix, highlight, subtitle, photo, items }: Props) {
  const twoCols = items.length % 2 === 0;
  return (
    <section className="py-24 bg-white/50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative min-h-[18rem] overflow-hidden rounded-3xl bg-ci-navy shadow-[0_30px_60px_-30px_rgba(11,31,58,0.6)]"
        >
          {photo && <Photo name={photo} decorative sizes="(min-width: 1024px) 40vw, 100vw" className="absolute inset-0 h-full w-full" />}
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/95 via-[#0b1f3a]/50 to-[#0b1f3a]/10" />
          <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
            <h2 className="font-display font-bold tracking-[-0.03em] text-4xl md:text-5xl text-white">
              {prefix}<span className="text-[#6ee7a8]">{highlight}</span>
            </h2>
            {subtitle && <p className="mt-4 max-w-md text-lg font-light text-white/85">{subtitle}</p>}
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-white/60">
              {String(items.length).padStart(2, '0')} ·{' '}
              <span aria-hidden="true">{'▮'.repeat(items.length)}</span>
            </p>
          </div>
        </motion.div>
        <div className={`grid grid-cols-1 gap-5 ${twoCols ? 'sm:grid-cols-2' : ''}`}>
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative overflow-hidden bg-white border border-slate-200 p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-ci-green-400/40 hover:shadow-xl hover:shadow-ci-blue-600/10"
            >
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-ci-blue-600 to-ci-green-500 transition-transform duration-500 group-hover:scale-x-100" />
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-ci-blue-600 to-ci-green-500 font-mono text-sm font-bold text-white shadow-[0_10px_25px_-8px_rgba(31,111,235,0.6)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="flex items-start gap-2 text-lg font-sans font-semibold text-ci-navy">
                    {item.title}
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-ci-green-600 opacity-0 transition-opacity group-hover:opacity-100" />
                  </h3>
                  {item.text && <p className="mt-2 text-slate-600 font-light leading-relaxed">{item.text}</p>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
