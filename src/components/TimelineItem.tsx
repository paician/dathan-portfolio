import { useLang } from '@/contexts/LanguageContext';
import type { Experience } from '@/data/experience';

export default function TimelineItem({ exp, isLast }: { exp: Experience; isLast: boolean }) {
  const { lang } = useLang();

  return (
    <div className="relative flex gap-6">
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20 shrink-0 mt-1.5" />
        {!isLast && <div className="w-px flex-1 bg-border mt-2" />}
      </div>

      <div className="pb-10">
        <span className="text-xs font-mono text-primary">{exp.period}</span>
        <h3 className="text-lg font-semibold mt-1">
          {lang === 'en' ? exp.title.en : exp.title.zh}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">{exp.company}</p>
        <ul className="space-y-2">
          {(lang === 'en' ? exp.highlights.en : exp.highlights.zh).map((h, i) => (
            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-accent mt-0.5">▸</span>
              {h}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
