import { projects } from './projects';

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'infra' | 'dev' | 'cloud' | 'automation';
}

export const skillCategories = [
  { id: 'all' as const, label: { en: 'All', zh: '全部' } },
  { id: 'infra' as const, label: { en: 'Infrastructure', zh: '基礎架構' } },
  { id: 'dev' as const, label: { en: 'Development', zh: '開發' } },
  { id: 'cloud' as const, label: { en: 'Cloud / SaaS', zh: '雲端 / SaaS' } },
  { id: 'automation' as const, label: { en: 'Automation', zh: '自動化' } },
];

// Map each tag to a skill category
const tagCategoryMap: Record<string, Skill['category']> = {
  'AutoIT': 'automation',
  'PowerShell': 'automation',
  'Python': 'dev',
  'PyQt5': 'dev',
  'Flask': 'dev',
  'Javascript': 'dev',
  'HTML': 'dev',
  'SQL': 'dev',
  'Lark API': 'cloud',
  'LINE API': 'cloud',
};

// Auto-calculate skills from project tags
function buildSkills(): Skill[] {
  const tagCount: Record<string, number> = {};

  for (const p of projects) {
    for (const tag of p.tags) {
      tagCount[tag] = (tagCount[tag] || 0) + 1;
    }
  }

  const maxCount = Math.max(...Object.values(tagCount));

  // Scale: most-used tag → 95, least → 55, linear interpolation
  const entries = Object.entries(tagCount)
    .map(([name, count]) => ({
      name,
      level: Math.round(55 + (count / maxCount) * 40),
      category: tagCategoryMap[name] ?? 'dev' as Skill['category'],
    }))
    .sort((a, b) => b.level - a.level);

  return entries;
}

export const skills: Skill[] = buildSkills();
