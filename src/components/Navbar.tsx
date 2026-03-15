import { useState, useEffect } from 'react';
import { useLang } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { Moon, Sun, Menu, X, FolderOpen, Brain, Globe, Diamond, User, Cpu, Mail, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { id: 'projects', icon: FolderOpen, en: 'Projects', zh: '專案' },
  { id: 'skills', icon: Cpu, en: 'Skills', zh: '技能' },
  { id: 'solutions', icon: Diamond, en: 'Solutions', zh: '方案' },
  { id: 'about', icon: User, en: 'About', zh: '關於我' },
  { id: 'contact', icon: Mail, en: 'Contact', zh: '聯繫' },
];

export default function Navbar() {
  const { lang, toggleLang, t } = useLang();
  const navigate = useNavigate();
  const [dark, setDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleDark = () => {
    document.documentElement.classList.add('theme-transition');
    setDark(d => !d);
    document.documentElement.classList.toggle('dark');
    setTimeout(() => document.documentElement.classList.remove('theme-transition'), 500);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <button onClick={() => scrollTo('hero')} className="text-xl font-bold gradient-text tracking-tight">
          Dathan
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            >
              <item.icon size={16} />
              {t(item.en, item.zh)}
            </button>
          ))}
          <button
            onClick={() => navigate('/ai-build')}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
          >
            <Bot size={16} />
            {t('AI Build', 'AI 成品')}
          </button>
          <div className="ml-2 flex items-center gap-1">
            <Button variant="ghost" size="icon" onClick={toggleDark} className="h-9 w-9">
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </Button>
            <Button variant="ghost" size="sm" onClick={toggleLang} className="text-xs font-mono">
              {lang === 'en' ? '中文' : 'EN'}
            </Button>
          </div>
        </div>

        {/* Mobile toggle */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-border/50 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
              >
                <item.icon size={16} />
                {t(item.en, item.zh)}
              </button>
            ))}
            <button
              onClick={() => { navigate('/ai-build'); setMobileOpen(false); }}
              className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
            >
              <Bot size={16} />
              {t('AI Build', 'AI 成品')}
            </button>
            <div className="flex items-center gap-2 pt-2 border-t border-border/50">
              <Button variant="ghost" size="icon" onClick={toggleDark} className="h-9 w-9">
                {dark ? <Sun size={16} /> : <Moon size={16} />}
              </Button>
              <Button variant="ghost" size="sm" onClick={toggleLang} className="text-xs font-mono">
                {lang === 'en' ? '中文' : 'EN'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
