export interface Solution {
  id: string;
  title: { en: string; zh: string };
  description: { en: string; zh: string };
  features: { en: string[]; zh: string[] };
  status: 'live' | 'pending' | 'dev';
  gradient: string;
}

export const solutions: Solution[] = [
  {
    id: 'lark-drive',
    title: { en: 'Lark Drive Governance Center', zh: 'Lark 雲端硬碟治理中心' },
    description: {
      en: 'Designed to solve enterprise Lark Drive permission chaos, providing a visual dashboard.',
      zh: '旨在解決企業 Lark Drive 權限混亂問題，提供可視化儀表板。'
    },
    features: {
      en: ['Automatically scans global file permissions', 'Batch modification as needed', 'Visual permission dashboard'],
      zh: ['自動掃描全域檔案權限', '按需批次修改', '可視化權限儀表板']
    },
    status: 'pending',
    gradient: 'from-primary to-accent',
  },
  {
    id: 'onboarding',
    title: { en: 'Auto Onboarding Console', zh: '自動入職控制台' },
    description: {
      en: 'Integrated with the Lark approval system; once internal approval is completed, the Lark account is created immediately.',
      zh: '整合 Lark 審批系統表單，內部審批完成後即時建立 Lark 帳號。'
    },
    features: {
      en: ['Lark approval integration', 'Instant account creation', 'Automated onboarding flow'],
      zh: ['Lark 審批整合', '即時帳號建立', '自動化入職流程']
    },
    status: 'pending',
    gradient: 'from-accent to-primary',
  },
  {
    id: 'alert-bots',
    title: { en: 'Smart Alert Bots', zh: '智慧告警機器人' },
    description: {
      en: 'Integrates Zabbix, Grafana, and Cloud Logs for unified monitoring alerts.',
      zh: '整合 Zabbix、Grafana 和雲端日誌，統一監控告警。'
    },
    features: {
      en: ['Zabbix integration', 'Grafana dashboards', 'Cloud log aggregation'],
      zh: ['Zabbix 整合', 'Grafana 儀表板', '雲端日誌彙整']
    },
    status: 'dev',
    gradient: 'from-amber-500 to-primary',
  },
];
