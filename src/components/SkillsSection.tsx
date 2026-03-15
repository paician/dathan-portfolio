import { useState } from 'react';
import { useLang } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { skills, skillCategories, type Skill } from '@/data/skills';

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  return (
    <div
      className="group"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-card-foreground group-hover:text-primary transition-colors">
          {skill.name}
        </span>
        <span className="text-xs font-mono text-muted-foreground">
          {skill.level}%
        </span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-700 ease-out"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const { lang, t } = useLang();
  const [active, setActive] = useState<string>('all');
  const ref = useScrollReveal<HTMLElement>();

  const filtered = active === 'all'
    ? skills
    : skills.filter(s => s.category === active);

  // Sort by level descending
  const sorted = [...filtered].sort((a, b) => b.level - a.level);

  return (
    <section id="skills" ref={ref} className="py-24 section-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            {t('Technical Skills', '技術能力')}
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {t('Proficiency levels across different technology domains.', '各技術領域的熟練程度。')}
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {skillCategories.map(cat => (
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

        {/* Skills grid */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
          {sorted.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
