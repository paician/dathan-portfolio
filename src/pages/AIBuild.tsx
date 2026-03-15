import { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { useLang } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, ExternalLink, Server, Shield, Eye, MessageSquare, GraduationCap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { useTilt } from '@/hooks/useTilt';
import MermaidDiagram from '@/components/MermaidDiagram';

/* ── Translations ── */
const tx = {
  pageTitle: { en: 'Private AI Infrastructure', zh: '私有化 AI 基礎設施' },
  pageDesc: { en: 'Enterprise-grade Local AI Deployment & System Integration.', zh: '企業級本地部署、系統整合與自動化串接。' },
  heroTitle: { en: 'Private AI & Automation Builder', zh: '私有化 AI 與自動化建構者' },
  heroDesc: {
    en: 'Specializing in building Self-Hosted AI Modules for enterprises. I focus on the infrastructure, API connectivity, and security layers that make LLMs deployable in business environments.',
    zh: '專注於為企業構建私有化 AI 模組。我負責基礎設施、API 連接和安全層，確保大型語言模型（LLM）能在商業環境中穩定落地部署。',
  },
  archTab: { en: 'Architecture', zh: '架構設計' },
  demoTab: { en: 'Live Demo', zh: '實機展示' },
  back: { en: 'Back to Home', zh: '返回首頁' },
  sysArch: { en: 'System Architecture', zh: '系統架構圖' },
  infraDiagram: { en: 'Infrastructure Diagram', zh: '基礎設施拓撲' },
  infraDesc: { en: 'Multi-host architecture separating Operations (Host A) from External Chat Services (Host B).', zh: '多主機架構：分離運維中樞 (Host A) 與外部聊天服務 (Host B)。' },
  deploySpecs: { en: 'Deployment Specs', zh: '部署規格' },
  infraConnect: { en: 'Infrastructure & Connectivity', zh: '基礎建設與連接' },
  infraConnectDesc: { en: 'I ensure the system is "accessible, secure, and monitored".', zh: '我確保系統具備「可存取性、安全性與可監控性」。' },
  demoTitle: { en: 'Live Demonstration', zh: '實機展示' },
  demoIntro: { en: 'Below is a preview of the "D-Mail" RAG Chat system and the "Watchyou" monitoring dashboard running on Host A.', zh: '以下是運行於 Host A 上的 "D-Mail" RAG 聊天系統與 "Watchyou" 監控儀表板預覽。' },
  visitPortal: { en: 'Visit Live Portal', zh: '前往系統入口' },
  watchVideo: { en: 'Watch Overview', zh: '觀看概覽' },
  topology: { en: 'System Topology', zh: '系統拓撲圖' },
  topologyDesc: { en: 'Interactive architecture diagram showing multi-host infrastructure and service routing.', zh: '互動式架構圖，展示多主機基礎設施與服務路由。' },
};

/* ── Metric data ── */
const metrics = [
  { title: { en: 'INFRASTRUCTURE', zh: '基礎設施' }, desc: { en: 'Host A (Main Ops) & Host B (Remote Chat) orchestration.', zh: 'Host A (運維中樞) 與 Host B (外部聊天) 多主機協作。' }, icon: Server },
  { title: { en: 'PARTNERSHIP MODEL', zh: '合作模式' }, desc: { en: 'I build the Architecture & IO; My partner handles RAG Logic & Fine-tuning.', zh: '我負責架構與 IO 串接；合作夥伴負責 RAG 邏輯與模型調優。' }, icon: Shield },
  { title: { en: 'INTEGRATION', zh: '系統整合' }, desc: { en: 'Seamless connection with Lark Base & Enterprise API Gateways.', zh: '無縫對接 Lark Base 與企業 API Gateway。' }, icon: Globe },
];

const specs = {
  en: [
    'Host A (Operations): Runs the core RAG Engine (FastAPI), Qdrant Vector DB, and internal Streamlit tools (D-Mail, Mentor, Watchyou).',
    'Host B (Remote): Dedicated to external chat services (Chat) to isolate public-facing traffic.',
    'Routing: Caddy handles all SSL termination and reverse proxies traffic to specific ports (8501-8503) or remote hosts.',
    'Data Flow: Internal apps communicate with the Intelligence Engine via local FastAPI calls for high-speed retrieval.',
  ],
  zh: [
    'Host A (運維): 運行核心 RAG 引擎 (FastAPI)、Qdrant 向量庫及內部工具群 (D-Mail, Mentor, Watchyou)。',
    'Host B (外部): 專用於外部聊天服務 (Chat)，隔離對外流量以提升安全性。',
    '路由: Caddy 負責 SSL 加密，並將流量反向代理至指定端口 (8501-8503) 或遠端主機。',
    '資料流: 內部應用透過本地 FastAPI 呼叫智能引擎，實現高速檢索。',
  ],
};

const collabPoints = {
  en: [
    'Streamlit Suite: Deployed 3 distinct internal tools for Chat, Training, and Monitoring.',
    'Cross-Host Proxy: Configured Caddy to securely tunnel traffic to the secondary Host B.',
    'Observability: Built "Watchyou" app to visualize system logs and API health in real-time.',
  ],
  zh: [
    '應用套件: 部署了三個獨立內部工具：聊天 (Chat)、訓練 (Training) 與監控 (Monitor)。',
    '跨主機代理: 配置 Caddy 安全隧道，將流量導向輔助主機 Host B。',
    '可觀測性: 建構 "Watchyou" 應用，即時視覺化系統日誌與 API 健康狀態。',
  ],
};

const techStack = ['AWS EC2', 'Python / FastAPI', 'RAG / Qdrant', 'Streamlit Apps', 'Caddy', 'Ollama (Qwen 2.5)'];

const archChart = `graph TB
  subgraph Internet
    U[Users / Browser]
  end

  subgraph HostA["Host A - Operations"]
    Caddy["Caddy Reverse Proxy\nSSL Termination"]
    FastAPI["FastAPI\nRAG Engine"]
    Qdrant["Qdrant\nVector DB"]
    DMail["D-Mail\n:8501"]
    Mentor["Mentor\n:8502"]
    Watchyou["Watchyou\n:8503"]
  end

  subgraph HostB["Host B - External"]
    Chat["Chat Service\nPublic-facing"]
  end

  U --> Caddy
  Caddy --> DMail
  Caddy --> Mentor
  Caddy --> Watchyou
  Caddy -->|"Cross-host proxy"| Chat
  DMail --> FastAPI
  Mentor --> FastAPI
  FastAPI --> Qdrant
  FastAPI -->|"Ollama API"| LLM["Ollama\nQwen 2.5"]
`;

/* ── Video Card ── */
function VideoCard({ videoId, title }: { videoId: string; title: string }) {
  const [open, setOpen] = useState(false);
  const { ref, onMouseMove, onMouseLeave } = useTilt<HTMLDivElement>(5);

  return (
    <>
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onClick={() => setOpen(true)}
        className="group relative rounded-xl overflow-hidden aspect-video cursor-pointer border border-border/50 hover:border-primary/30 transition-all duration-300 glow-card"
        style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(var(--primary) / 0.15), transparent 60%)' }} />
        <img
          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          alt={title}
          className="w-full h-full object-cover opacity-70 group-hover:opacity-40 transition-opacity"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-background/80 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
            <Play size={28} className="text-primary ml-1" />
          </div>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-3xl p-0 overflow-hidden bg-background border-border">
          <DialogTitle className="sr-only">{title}</DialogTitle>
          <div className="relative pt-[56.25%]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

/* ── Tilt Card wrapper ── */
function TiltCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt<HTMLDivElement>(6);

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`group relative rounded-xl overflow-hidden bg-card border border-border/50 hover:border-primary/30 transition-colors duration-300 hover:shadow-xl hover:shadow-primary/5 glow-card ${className}`}
      style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" style={{ background: 'radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(var(--primary) / 0.1), transparent 60%)' }} />
      {/* Left accent bar */}
      <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-primary to-accent opacity-80" />
      <div className="pl-4">{children}</div>
    </div>
  );
}

/* ── Status Check ── */
function useServiceStatus() {
  const [online, setOnline] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      try {
        await fetch('https://bbdog.duckdns.org/', { mode: 'no-cors', cache: 'no-cache' });
        setOnline(true);
      } catch {
        setOnline(false);
      }
    })();
  }, []);

  return online;
}

/* ── Main Content ── */
function AIBuildContent() {
  const { lang, t } = useLang();
  const navigate = useNavigate();
  const [tab, setTab] = useState<'arch' | 'demo'>('arch');
  const online = useServiceStatus();
  const tt = useCallback((key: keyof typeof tx) => lang === 'en' ? tx[key].en : tx[key].zh, [lang]);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-40 right-1/4 w-[600px] h-[400px] rounded-full bg-primary/8 blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl animate-glow-pulse [animation-delay:2s]" />
      </div>

      {/* Top Bar */}
      <header className="sticky top-0 z-50 glass border-b border-border/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="gap-2" onClick={() => navigate('/')}>
              <ArrowLeft size={16} /> {tt('back')}
            </Button>
            <div className="hidden sm:block">
              <h1 className="text-sm font-semibold">{tt('pageTitle')}</h1>
              <p className="text-xs text-muted-foreground">{tt('pageDesc')}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-2.5 h-2.5 rounded-full ${online === true ? 'bg-green-400 shadow-[0_0_8px_theme(colors.green.400)]' : online === false ? 'bg-red-400 shadow-[0_0_8px_theme(colors.red.400)]' : 'bg-muted-foreground'}`} />
            <span className="text-xs text-muted-foreground">
              {online === null ? t('Checking...', '檢測中...') : online ? t('System Online', 'AWS 服務正常') : t('System Offline', 'AWS 離線')}
            </span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 relative z-10 max-w-5xl">
        {/* Hero */}
        <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 md:p-8 mb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none" />
          <div className="relative grid md:grid-cols-[1.5fr_1fr] gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-4">{tt('heroTitle')}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{tt('heroDesc')}</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map(tag => (
                  <Badge key={tag} variant="outline" className="text-xs border-primary/30 text-primary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              {metrics.map((m, i) => {
                const Icon = m.icon;
                return (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border-l-2 border-accent">
                    <Icon size={16} className="text-accent mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-accent">{lang === 'en' ? m.title.en : m.title.zh}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{lang === 'en' ? m.desc.en : m.desc.zh}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex gap-2 mb-8">
          {(['arch', 'demo'] as const).map(id => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                tab === id
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-muted text-muted-foreground hover:text-foreground'
              }`}
            >
              {id === 'arch' ? tt('archTab') : tt('demoTab')}
            </button>
          ))}
        </div>

        {/* Architecture View */}
        {tab === 'arch' && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <div className="w-1 h-6 rounded bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
                {tt('sysArch')}
              </h3>

              <TiltCard>
                <div className="p-5">
                  <h4 className="font-semibold text-card-foreground mb-1">{tt('infraDiagram')}</h4>
                  <p className="text-xs text-muted-foreground mb-4">{tt('infraDesc')}</p>
                  <VideoCard videoId="QzukDi-RM6g" title="AI Build Architecture Overview" />
                </div>
              </TiltCard>
            </div>

            {/* Mermaid Topology */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <div className="w-1 h-6 rounded bg-accent shadow-[0_0_10px_hsl(var(--accent))]" />
                {tt('topology')}
              </h3>
              <TiltCard>
                <div className="p-5">
                  <p className="text-xs text-muted-foreground mb-4">{tt('topologyDesc')}</p>
                  <MermaidDiagram chart={archChart} className="py-4" />
                </div>
              </TiltCard>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <TiltCard>
                <div className="p-5">
                  <h4 className="font-semibold text-card-foreground mb-3">{tt('deploySpecs')}</h4>
                  <ul className="space-y-3">
                    {(lang === 'en' ? specs.en : specs.zh).map((s, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-0.5 shrink-0">▸</span>
                        <span dangerouslySetInnerHTML={{ __html: s }} />
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>

              <TiltCard>
                <div className="p-5">
                  <h4 className="font-semibold text-accent mb-2">{tt('infraConnect')}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{tt('infraConnectDesc')}</p>
                  <ul className="space-y-2">
                    {(lang === 'en' ? collabPoints.en : collabPoints.zh).map((p, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-accent mt-0.5 shrink-0">▸</span>
                        <span dangerouslySetInnerHTML={{ __html: p }} />
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </div>
          </div>
        )}

        {/* Demo View */}
        {tab === 'demo' && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <div className="w-1 h-6 rounded bg-destructive shadow-[0_0_10px_hsl(var(--destructive))]" />
                {tt('demoTitle')}
              </h3>

              <TiltCard>
                <div className="p-5 text-center">
                  <p className="text-muted-foreground mb-6 max-w-xl mx-auto">{tt('demoIntro')}</p>
                  <VideoCard videoId="Yh7oTK-Ncg0" title="D-Mail & Watchyou Demo" />

                  <div className="flex items-center justify-center gap-4 flex-wrap mt-6">
                    <Button className="gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg hover:shadow-xl" asChild>
                      <a href="https://bbdog.duckdns.org/" target="_blank" rel="noopener noreferrer">
                        <Globe size={16} /> {tt('visitPortal')}
                      </a>
                    </Button>

                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border/50">
                      <div className={`w-2.5 h-2.5 rounded-full ${online ? 'bg-green-400 shadow-[0_0_6px_theme(colors.green.400)]' : 'bg-red-400 shadow-[0_0_6px_theme(colors.red.400)]'}`} />
                      <span className="text-xs text-muted-foreground">
                        {online ? t('System Online', 'AWS 服務正常') : t('System Offline', 'AWS 離線')}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground mt-4">
                    * Access requires enterprise VPN or whitelisted IP.
                  </p>
                </div>
              </TiltCard>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default function AIBuild() {
  return <AIBuildContent />;
}
