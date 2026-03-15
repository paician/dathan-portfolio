import { useState } from 'react';
import { useLang } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Send, Mail, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const { t } = useLang();
  const ref = useScrollReveal<HTMLElement>();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({
        title: t('Missing fields', '欄位不完整'),
        description: t('Please fill in all fields.', '請填寫所有欄位。'),
        variant: 'destructive',
      });
      return;
    }

    setSending(true);

    // Open mailto with pre-filled content
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:paicianer@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSending(false);
      toast({
        title: t('Email client opened!', '已開啟郵件程式！'),
        description: t(
          'Your default email app should open with the message ready to send.',
          '您的預設郵件應用程式應已開啟，訊息已準備好發送。'
        ),
      });
      setForm({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" ref={ref} className="py-24 section-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            {t('Get In Touch', '聯繫我')}
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {t(
              'Have a project idea or want to collaborate? Send me a message!',
              '有專案想法或想合作？歡迎聯繫我！'
            )}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-5"
        >
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
            <Input
              placeholder={t('Your Name', '你的名字')}
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              className="pl-10 bg-card border-border/50 focus:border-primary/50"
              maxLength={100}
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
            <Input
              type="email"
              placeholder={t('Your Email', '你的電子郵件')}
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              className="pl-10 bg-card border-border/50 focus:border-primary/50"
              maxLength={255}
            />
          </div>

          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 text-muted-foreground" size={16} />
            <Textarea
              placeholder={t('Your Message', '你的訊息')}
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              className="pl-10 min-h-[120px] bg-card border-border/50 focus:border-primary/50 resize-none"
              maxLength={1000}
            />
          </div>

          <Button
            type="submit"
            disabled={sending}
            className="w-full gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity"
          >
            <Send size={16} />
            {sending
              ? t('Opening...', '開啟中...')
              : t('Send Message', '發送訊息')}
          </Button>
        </form>
      </div>
    </section>
  );
}
