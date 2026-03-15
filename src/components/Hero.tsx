import { useLang } from '@/contexts/LanguageContext';
import { MapPin, FileText, Linkedin, Github, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import avatarImg from '@/assets/avatar.png';

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-glow-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-glow-pulse [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-float" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Avatar — delay 0 */}
        <div className="opacity-0 animate-hero-in">
          <Avatar className="w-28 h-28 mx-auto mb-6 ring-4 ring-primary/20 ring-offset-4 ring-offset-background">
            <AvatarImage src={avatarImg} alt="Dathan Li" className="object-cover" />
            <AvatarFallback className="text-3xl font-bold bg-gradient-to-br from-primary to-accent text-primary-foreground">
              DL
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Name — delay 0.15s */}
        <div className="opacity-0 animate-hero-in [animation-delay:0.15s]">
          <div className="flex items-center justify-center gap-2 mb-3">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Dathan Li
            </h1>
            <span className="text-primary text-2xl">✓</span>
          </div>
        </div>

        {/* Subtitle — delay 0.3s */}
        <div className="opacity-0 animate-hero-blur-in [animation-delay:0.3s]">
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            {t(
              'System Administrator | Automation Specialist | Lark & Python Developer',
              '系統管理員 | 自動化專家 | Lark & Python 開發者'
            )}
          </p>
        </div>

        {/* Location — delay 0.45s */}
        <div className="opacity-0 animate-hero-blur-in [animation-delay:0.45s]">
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
            <MapPin size={16} />
            <span className="text-sm">🇹🇼 Taiwan</span>
          </div>
        </div>

        {/* Social links — delay 0.6s */}
        <div className="opacity-0 animate-hero-in [animation-delay:0.6s]">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Button variant="outline" size="sm" className="gap-2" asChild>
              <a href="https://www.cake.me/resumes/dathan-li" target="_blank" rel="noopener noreferrer">
                <FileText size={16} />
                {t('Resume', '履歷')}
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
              <a href="https://www.linkedin.com/in/dathan-li-97b615300/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
              <a href="https://github.com/paician/Script-backup" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={18} />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
              <a href="https://www.youtube.com/watch?v=tzQBv4FftzE&list=PLWiZuYNGFTuo9Tpp1XVm_PyTcFIWTg-J2&pp=sAgC" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube size={18} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
