import React, { createContext, useContext, useState, ReactNode } from 'react';

type Lang = 'en' | 'zh';

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (en: string, zh: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>('en');
  const toggleLang = () => setLang(l => l === 'en' ? 'zh' : 'en');
  const t = (en: string, zh: string) => lang === 'en' ? en : zh;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
};
