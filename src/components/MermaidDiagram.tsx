import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

interface Props {
  chart: string;
  className?: string;
}

let initCount = 0;

export default function MermaidDiagram({ chart, className = '' }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState('');

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    const id = `mermaid-${++initCount}`;

    mermaid.initialize({
      startOnLoad: false,
      theme: isDark ? 'dark' : 'default',
      themeVariables: isDark
        ? { primaryColor: '#7c3aed', primaryTextColor: '#e2e8f0', lineColor: '#6366f1', secondaryColor: '#1e1b4b' }
        : { primaryColor: '#7c3aed', primaryTextColor: '#1e293b', lineColor: '#6366f1', secondaryColor: '#ede9fe' },
      flowchart: { curve: 'basis', padding: 16 },
      securityLevel: 'loose',
    });

    mermaid.render(id, chart).then(({ svg: rendered }) => {
      setSvg(rendered);
    }).catch(console.error);
  }, [chart]);

  return (
    <div
      ref={containerRef}
      className={`overflow-x-auto [&_svg]:mx-auto [&_svg]:max-w-full ${className}`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
