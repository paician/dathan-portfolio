import { useState } from 'react';
import { useLang } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { projects, categories } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsSection() {
  const { lang, t } = useLang();
  const [active, setActive] = useState('all');
  const ref = useScrollReveal<HTMLElement>();

  const filtered = active === 'all' ? projects : projects.filter(p => p.category === active);

  return (
    <section id="projects" ref={ref} className="py-24 section-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            {t('Projects', '專案作品')}
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {t('Selected works grouped by technology stack.', '依技術棧分類的精選作品。')}
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat.id
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80'
              }`}
            >
              {lang === 'en' ? cat.label.en : cat.label.zh}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
