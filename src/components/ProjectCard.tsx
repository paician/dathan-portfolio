import { useState } from 'react';
import { useLang } from '@/contexts/LanguageContext';
import { useTilt } from '@/hooks/useTilt';
import { Play, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import type { Project } from '@/data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  const { lang, t } = useLang();
  const [open, setOpen] = useState(false);
  const { ref, onMouseMove, onMouseLeave } = useTilt<HTMLDivElement>();

  const handleAction = () => {
    if (project.actionType === 'watch' && project.videoId) {
      setOpen(true);
    } else if (project.actionUrl) {
      window.open(project.actionUrl, '_blank', 'noopener');
    }
  };

  return (
    <>
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="group relative rounded-xl overflow-hidden bg-card border border-border/50 hover:border-primary/30 transition-colors duration-300 hover:shadow-xl hover:shadow-primary/5 glow-card"
        style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
      >
        {/* Mouse glow overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" style={{ background: 'radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(var(--primary) / 0.12), transparent 60%)' }} />

        <div
          className={`h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden cursor-pointer`}
          onClick={handleAction}
        >
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
          {project.actionType === 'watch' && project.videoId && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center shadow-lg">
                <Play size={20} className="text-primary ml-0.5" />
              </div>
            </div>
          )}
          <span className="text-3xl font-bold text-white/90 tracking-wider">
            {project.tags[0]}
          </span>
        </div>

        <div className="p-5">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.map(tag => (
              <Badge key={tag} variant="secondary" className="text-xs font-mono">
                {tag}
              </Badge>
            ))}
          </div>

          <h3 className="font-semibold text-lg mb-2 text-card-foreground">
            {lang === 'en' ? project.title.en : project.title.zh}
          </h3>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {lang === 'en' ? project.description.en : project.description.zh}
          </p>

          <Button
            variant="outline"
            size="sm"
            className="w-full gap-2 group-hover:border-primary/50 group-hover:text-primary transition-colors"
            onClick={handleAction}
          >
            {project.actionType === 'watch' ? (
              <>
                <Play size={14} />
                {t('Watch Demo', '觀看示範')}
              </>
            ) : (
              <>
                <ExternalLink size={14} />
                {t('Visit Site', '前往網站')}
              </>
            )}
          </Button>
        </div>
      </div>

      {project.videoId && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-3xl p-0 overflow-hidden bg-background border-border">
            <DialogTitle className="sr-only">
              {lang === 'en' ? project.title.en : project.title.zh}
            </DialogTitle>
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1&rel=0`}
                title={lang === 'en' ? project.title.en : project.title.zh}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-card-foreground">
                {lang === 'en' ? project.title.en : project.title.zh}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {lang === 'en' ? project.description.en : project.description.zh}
              </p>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
