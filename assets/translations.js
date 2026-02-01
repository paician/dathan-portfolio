const translations = {
  "nav-menu": "選單",
  "nav-projects": "專案作品",
  "nav-websites": "網站開發",
  "nav-solutions": "解決方案",
  "nav-about": "關於我",
  "nav-filter": "技術棧篩選",
  "filter-all": "全部顯示",
  "status-work": "歡迎！",

  "page-desc-projects": "依照技術棧分類的精選自動化作品。",
  
  "project-autoit-short": "包含提權安裝、其他軟體自動化安裝。",
  "project-autoit-detail": "<strong>專案背景：</strong>為解決 Helpdesk 重複處理使用者權限不足無法安裝軟體的問題。<br><strong>技術亮點：</strong>使用 AutoIT 封裝 Administrator 憑證，並編譯為加密 EXE。",
  
  "project-autoit2-short": "提權編輯你的主機設定檔。",
  "project-autoit2-detail": "使用 AutoIT 封裝 Administrator 憑證，編輯你的主機設定檔。",
  
  "project-sql-short": "讓非技術人員也能安全查詢資料庫的工具。",
  "project-log-short": "讓不熟悉指令的使用者也能查詢 Windows 事件紀錄。",
  "project-lark-short": "Lark Drive 加密等級批次修改與管理工具。",
  "project-line-short": "監控Google雲端檔案變更時就發通知到Line",

  "project-ps-short": "簡單地在Local端管理AD帳號及群組",


  "web-vue-desc": "Google Drive 雲端檔案分享管理主控台。",
  "btn-visit-site": "造訪網站",
  "web-vue-desc2": "今天的幸運數字是什麼呢？",
  "btn-visit-site2": "造訪網站",

  "sol-main-title": "企業解決方案",
  "sol-main-desc": "針對企業 IT 痛點開發的標準化產品，可快速部署至私有環境。",
  "sol-tab-1": "Lark Drive雲端私有加密等集檔案管理中心",
  "sol-tab-2": "入離職自動化",
  "sol-tab-3": "警報機器人(開發中)",
  "btn-view-video": "▶ 觀看影片",

  "sol-1-title": "Lark Drive雲端私有加密等集檔案管理中心",
  "sol-1-desc": "專為解決企業 Lark Drive 權限混亂問題設計，提供視覺化儀表板。<br>自動掃描全域文件權限、根據需求批次修改。",
  
  "gallery-dashboard-desc": "全域安全標籤分佈概覽，可一眼看出低中高風險文件數量。",
  "gallery-scan-desc": "自動掃描外部共享連結，並標記潛在風險。",
  "gallery-rule-desc": "設定自動化規則，根據關鍵字自動套用安全標籤。",

  "sol-2-title": "全自動入離職中控台",
  "sol-2-desc": "串接 LARL審核系統表單，內部審核完成即刻建立Lark帳號。",

  "sol-3-title": "智慧維運告警機器人",
  "sol-3-desc": "開發中",

  "about-title": "關於我",
  "btn-resume": "📄 查看履歷",
  "about-p1": "8 年 IT 維運與系統自動化經驗，聚焦私有 GenAI 基礎建設與 AI 平台維運（Platform Ops）。具備在 AWS/On-prem 建置私有 LLM/RAG 的能力，整合 DuckDNS/ACME 憑證自動化、Nginx 反向代理閘道與 VPC／網路分層隔離，降低推論服務直接暴露公網的風險。並以 Python/API 串接 Lark／Outlook 等企業系統，建立可稽核、可維運的流程自動化。",
  "about-p2": "【跨平台 API 整合 / 自動化】<br>・整合 Lark／Outlook／Base 等平台 API，建立通知推播與審核紀錄彙整機制，降低人工介入與資訊落差。<br>・整合 Outlook 雲端空間，支援自動上傳附件並嵌入信件內容，減少人工介入。<br>・建置 Web 端中介層串接 Lark API，支援自動化文件與流程操作。<br>・維護與最佳化 Lark Anycross 自動化工作流，提升穩定性與可追溯性（logging／狀態追蹤）。",
  "about-p3": "【流程優化與協作】<br>・主導集團子公司入離職流程自動化，將傳統 Email 作業轉型為線上審批＋自動化處理，降低 HR 與 IT 協作成本並減少人為失誤。<br>・串接 Chat × Base 自動化機器人，自動整合業務追蹤資料，提升管理追蹤效率。<br>・精準調整組織架構權限與協作文件權限控管，兼顧安全與效率。<br>・支援跨部門新產品專案建置與導入，加速內部系統落地與複製推廣。<br><br><strong>私有 GenAI 平台 PoC：</strong>自發規劃並建置私有 AI Chat PoC：Public Host（WebUI + Nginx，Caddy/ACME 自動化 DuckDNS 憑證）與 Private AI Host（Ollama + Python/RAG）分離，透過 VPC private IP 互通並以不同 Security Group 控制 east-west 流量。",

  "exp-title": "經歷與成就",
  "exp-1-role": "系統管理工程師",
  "exp-1-desc": "整合 Lark／Outlook／Base 等平台 API，建立通知推播與審核紀錄彙整；建置 Web 中介層串接 Lark API，支援文件/流程自動化；維護 Anycross 工作流，導入 logging／狀態追蹤以提升穩定性與可追溯性；並主導子公司入離職自動化，將 Email 流程轉為線上審批＋自動化，降低 HR/IT 協作成本與人為失誤。",
  "exp-2-role": "資深 IT 支援工程師",
  "exp-2-desc": "開發AutoIT & Python 自動化腳本，減少 Helpdesk 日常 30% 重複性工單。<br>以及其他系統疑難雜症包含Vmware Horizon Appvolumes之自動化部署導入"
};