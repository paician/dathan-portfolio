import { useLang } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { solutions } from '@/data/solutions';
import SolutionCard from '@/components/SolutionCard';

export default function SolutionsSection() {
  const { t } = useLang();
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="solutions" ref={ref} className="py-24 section-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            {t('Enterprise Solutions', '企業解決方案')}
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {t(
              'Standardized products for IT pain points, ready for private deployment.',
              '針對 IT 痛點的標準化產品，可私有化部署。'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map(s => (
            <SolutionCard key={s.id} solution={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
