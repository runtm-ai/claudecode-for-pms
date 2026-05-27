'use client';

import { useState } from 'react';
import { SITE } from '@/lib/tokens';

export function RepoCTA({ context = 'inline' }: { context?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(SITE.cloneCmd);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'cta_clone_copied', { context });
      }
    } catch {}
  };

  const onGithub = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_open_github', { context });
    }
  };

  return (
    <section className="brand-mesh rounded-3xl border border-border shadow-hero p-6 sm:p-10 md:p-12">
      <p className="eyebrow-pill">Get started</p>
      <h2 className="headline mt-4 max-w-2xl">
        Clone the repo. Open it in Claude Code.
      </h2>
      <p className="text-text-muted mt-3 max-w-xl text-base sm:text-lg">
        Two minutes from clone to your first PRD. Fill in three files and ship.
      </p>
      <div className="mt-6 grid gap-3 md:grid-cols-[1fr_auto]">
        <div className="relative">
          <pre className="font-mono text-xs sm:text-sm bg-white border border-border rounded-lg p-4 pr-20 overflow-x-auto text-text">
            <code>{SITE.cloneCmd}</code>
          </pre>
          <button
            onClick={copy}
            className="absolute top-1/2 -translate-y-1/2 right-2 text-xs px-2.5 py-1.5 border border-border rounded-md bg-white text-text font-medium hover:border-text"
          >
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
        <a
          href={SITE.repo}
          onClick={onGithub}
          className="btn-primary w-full md:w-auto"
        >
          Open on GitHub
        </a>
      </div>
      <p className="text-xs text-text-soft mt-4">
        MIT licensed. Star the repo if it saves you an afternoon.
      </p>
    </section>
  );
}
