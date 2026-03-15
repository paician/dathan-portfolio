import { useLang } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { experiences, aboutText } from '@/data/experience';
import TimelineItem from '@/components/TimelineItem';

export default function AboutSection() {
  const { lang, t } = useLang();
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="about" ref={ref} className="py-24 section-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            {t('About Me', '關於我')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Bio */}
          <div>
            <div className="prose prose-sm dark:prose-invert max-w-none">
              {(lang === 'en' ? aboutText.en : aboutText.zh).split('\n\n').map((p, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed mb-4">{p}</p>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              {t('Experience & Achievements', '經歷與成就')}
            </h3>
            <div>
              {experiences.map((exp, i) => (
                <TimelineItem key={exp.period} exp={exp} isLast={i === experiences.length - 1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
