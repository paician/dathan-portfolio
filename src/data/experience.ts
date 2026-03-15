export interface Experience {
  period: string;
  title: { en: string; zh: string };
  company: string;
  highlights: { en: string[]; zh: string[] };
}

export const experiences: Experience[] = [
  {
    period: '2024 – Present',
    title: { en: 'System Administrator', zh: '系統管理員' },
    company: 'Hytech',
    highlights: {
      en: [
        'Lark automation framework implementation, increasing efficiency by ~200%.',
        'Complex permission division, assisting departments with automation between Lark native collaboration systems, accelerating operations by ~50%.',
      ],
      zh: [
        'Lark 自動化框架導入，效率提升約 200%。',
        '複雜權限劃分，協助部門在 Lark 原生協作系統間的自動化，加速作業約 50%。',
      ]
    }
  },
  {
    period: '2017 – 2024',
    title: { en: 'Senior IT Support', zh: '資深 IT 支援' },
    company: 'Hytech',
    highlights: {
      en: [
        'Developed AutoIT and Python automation scripts, reducing 30% of Helpdesk daily repetitive tickets.',
        'Automated deployment of VMware Horizon AppVolumes and other system troubleshooting.',
      ],
      zh: [
        '開發 AutoIT 和 Python 自動化腳本，減少 30% 的 Helpdesk 日常重複工單。',
        'VMware Horizon AppVolumes 自動化部署及其他系統疑難排解。',
      ]
    }
  }
];

export const aboutText = {
  en: `With over 7 years of experience in MIS system maintenance and IT technical support, I specialize in cross-department communication and requirements analysis. I am proficient in developing automation tools, scripts, and development environments using AutoIT and Python, while strictly adhering to information security standards to deliver efficient and secure solutions.

Currently, I work as a Lark Automation Developer, focusing on enterprise collaboration and system automation on the SaaS platform Lark. I integrate multiple programming languages and technologies to support enterprise digital transformation. I am highly experienced in building Lark Anycross workflows and API integrations, and I develop secure web applications through OAuth2 authentication.

I also possess extensive cross-department collaboration experience, having led an onboarding/offboarding automation project that transformed a traditional email-based process into an online system, reducing communication overhead between HR and IT by approximately 50% within two months.`,
  zh: `擁有超過 7 年的 MIS 系統維護及 IT 技術支援經驗，專精於跨部門溝通與需求分析。精通使用 AutoIT 和 Python 開發自動化工具、腳本及開發環境，嚴格遵循資訊安全規範，為客戶提供高效且安全的解決方案。

目前擔任 Lark 自動化開發人員，專注於 SaaS 平台 Lark 上的企業協作與系統自動化。整合多種程式語言和技術，支援企業數位轉型。在建構 Lark Anycross 工作流程和 API 整合方面擁有豐富經驗，並透過 OAuth2 認證開發安全的 Web 應用程式。

同時具備豐富的跨部門協作經驗，曾主導入職/離職自動化專案，將傳統的郵件流程轉為線上系統，兩個月內將 HR 與 IT 間的溝通成本降低約 50%。`
};
