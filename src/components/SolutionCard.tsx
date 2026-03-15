import { useLang } from '@/contexts/LanguageContext';
import { useTilt } from '@/hooks/useTilt';
import { CheckCircle, Clock, Wrench } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { Solution } from '@/data/solutions';

const statusConfig = {
  live: { icon: CheckCircle, label: { en: 'Live', zh: '上線' }, className: 'bg-accent/10 text-accent border-accent/20' },
  pending: { icon: Clock, label: { en: 'Pending', zh: '待發布' }, className: 'bg-amber-500/10 text-amber-500 border-amber-500/20' },
  dev: { icon: Wrench, label: { en: 'In Dev', zh: '開發中' }, className: 'bg-primary/10 text-primary border-primary/20' },
};

export default function SolutionCard({ solution }: { solution: Solution }) {
  const { lang } = useLang();
  const status = statusConfig[solution.status];
  const StatusIcon = status.icon;
  const { ref, onMouseMove, onMouseLeave } = useTilt<HTMLDivElement>();

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="group relative rounded-xl overflow-hidden bg-card border border-border/50 hover:border-primary/30 transition-colors duration-300 hover:shadow-xl hover:shadow-primary/5 glow-card"
      style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
    >
      {/* Mouse glow overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" style={{ background: 'radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(var(--primary) / 0.12), transparent 60%)' }} />

      <div className={`h-1.5 bg-gradient-to-r ${solution.gradient}`} />

      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="font-semibold text-lg text-card-foreground">
            {lang === 'en' ? solution.title.en : solution.title.zh}
          </h3>
          <Badge variant="outline" className={`text-xs gap-1 shrink-0 ml-2 ${status.className}`}>
            <StatusIcon size={12} />
            {lang === 'en' ? status.label.en : status.label.zh}
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground mb-4">
          {lang === 'en' ? solution.description.en : solution.description.zh}
        </p>

        <ul className="space-y-2">
          {(lang === 'en' ? solution.features.en : solution.features.zh).map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="text-primary mt-0.5">▸</span>
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
