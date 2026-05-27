'use client';

import { useState } from 'react';

type Props = { code: string; language?: string; snippetId?: string; label?: string };

export function CodeBlock({ code, language, snippetId, label }: Props) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'code_copied', { snippet_id: snippetId ?? 'unknown' });
      }
    } catch {
      // clipboard may not be available
    }
  };

  return (
    <div className="my-4">
      {label && (
        <div className="text-xs text-text-soft font-mono mb-1">{label}</div>
      )}
      <div className="relative group">
        <pre className="font-mono text-sm bg-bg-cream border border-border rounded-md p-4 pr-16 overflow-x-auto">
          <code className={language ? `language-${language}` : undefined}>{code}</code>
        </pre>
        <button
          onClick={copy}
          aria-label="Copy code"
          className="absolute top-2 right-2 text-xs px-2 py-1 border border-border rounded bg-white hover:border-text"
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
    </div>
  );
}
