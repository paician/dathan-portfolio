export interface Project {
  id: string;
  title: { en: string; zh: string };
  description: { en: string; zh: string };
  category: string;
  tags: string[];
  actionType: 'watch' | 'visit';
  actionUrl?: string;
  videoId?: string; // YouTube video ID
  gradient: string;
}

export const categories = [
  { id: 'all', label: { en: 'All', zh: '全部' } },
  { id: 'autoit', label: { en: 'AutoIT', zh: 'AutoIT' } },
  { id: 'python', label: { en: 'Python', zh: 'Python' } },
  { id: 'cloud', label: { en: 'Cloud / SaaS', zh: '雲端 / SaaS' } },
  { id: 'powershell', label: { en: 'PowerShell', zh: 'PowerShell' } },
  { id: 'web', label: { en: 'Web', zh: '網頁' } },
];

export const projects: Project[] = [
  {
    id: 'autoit-suite',
    title: { en: 'AutoIT Admin Suite', zh: 'AutoIT 管理套件' },
    description: {
      en: 'Includes elevated-privilege installation and automated installation of other software.',
      zh: '包含提權安裝及其他軟體的自動化安裝。'
    },
    category: 'autoit',
    tags: ['AutoIT'],
    actionType: 'watch',
    videoId: 'NCJMWkthP74',
    gradient: 'from-violet-600 to-purple-700',
  },
  {
    id: 'autoit-host-editor',
    title: { en: 'AutoIT Admin Host Editor', zh: 'AutoIT Host 檔編輯器' },
    description: { en: 'Modify your Host file.', zh: '修改你的 Host 檔案。' },
    category: 'autoit',
    tags: ['AutoIT'],
    actionType: 'watch',
    videoId: 'pM3y6c1W6qw',
    gradient: 'from-purple-600 to-indigo-700',
  },
  {
    id: 'safe-sql',
    title: { en: 'Safe SQL Query Tool', zh: '安全 SQL 查詢工具' },
    description: {
      en: 'Secure database query tool for non-tech users.',
      zh: '為非技術使用者設計的安全資料庫查詢工具。'
    },
    category: 'python',
    tags: ['Python', 'PyQt5'],
    actionType: 'watch',
    videoId: 'w8JzTLH53S0',
    gradient: 'from-emerald-600 to-teal-700',
  },
  {
    id: 'python-log',
    title: { en: 'Python Log Tools', zh: 'Python 日誌工具' },
    description: {
      en: 'Windows Event Log query tool for beginners.',
      zh: 'Windows 事件日誌查詢工具，適合初學者。'
    },
    category: 'python',
    tags: ['Python', 'PyQt5'],
    actionType: 'watch',
    videoId: 'oyrlDdG7ofc',
    gradient: 'from-teal-600 to-cyan-700',
  },
  {
    id: 'lark-security',
    title: { en: 'Lark Security Manager', zh: 'Lark 安全管理器' },
    description: {
      en: 'Lark Drive encryption level batch modification and management tool.',
      zh: 'Lark 雲端硬碟加密等級批次修改與管理工具。'
    },
    category: 'cloud',
    tags: ['Lark API', 'Flask'],
    actionType: 'watch',
    videoId: 'gfsQzpQm-og',
    gradient: 'from-blue-600 to-indigo-700',
  },
  {
    id: 'line-auto-send',
    title: { en: 'LINE Auto Send Messages', zh: 'LINE 自動發送訊息' },
    description: {
      en: 'Monitor your Google Sheet; when specific table is modified, auto-send LINE messages.',
      zh: '監控 Google Sheet，當特定表格修改時自動發送 LINE 訊息。'
    },
    category: 'cloud',
    tags: ['Javascript', 'LINE API'],
    actionType: 'watch',
    videoId: '45zPwWtVBr4',
    gradient: 'from-green-600 to-emerald-700',
  },
  {
    id: 'ad-manager',
    title: { en: 'AD Manager', zh: 'AD 管理器' },
    description: {
      en: 'Simple to batch your OU and create Group or Users.',
      zh: '簡單批次管理 OU 並建立群組或使用者。'
    },
    category: 'powershell',
    tags: ['PowerShell'],
    actionType: 'watch',
    videoId: 'GV-S-yFGACI',
    gradient: 'from-sky-600 to-blue-700',
  },
  {
    id: 'gdrive-share',
    title: { en: 'Google Drive Share Center', zh: 'Google Drive 共享中心' },
    description: { en: 'Google Drive Share Center.', zh: 'Google Drive 共享中心。' },
    category: 'web',
    tags: ['Javascript', 'HTML'],
    actionType: 'visit',
    actionUrl: 'https://paician.github.io/GD_Share/',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    id: 'lucky-today',
    title: { en: 'Lucky Today!', zh: '今天好運！' },
    description: { en: 'Lucky Today!', zh: '今天好運！' },
    category: 'web',
    tags: ['HTML'],
    actionType: 'visit',
    actionUrl: 'https://paician.github.io/luckytoday/',
    gradient: 'from-rose-500 to-pink-600',
  },
];
