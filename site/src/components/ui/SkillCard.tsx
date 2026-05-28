'use client';

import { useState } from 'react';

export type SkillCardData = {
  slug: string;
  name: string;
  title: string;
  category: string;
  blurb: string;
  trigger?: string;
  source: string;
  sourceUrl?: string;
  install: string;
  shipped: boolean;
};

export function SkillCard({ skill }: { skill: SkillCardData }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(skill.install);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <div id={skill.slug} className="card-anchor flex flex-col">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="font-semibold text-text">{skill.title}</h3>
          <p className="font-mono text-xs text-text-soft mt-0.5 truncate">
            {skill.name}
          </p>
        </div>
        <span
          className={`shrink-0 text-xs px-2 py-0.5 rounded border ${
            skill.shipped
              ? 'border-accent text-accent bg-accent/5'
              : 'border-border text-text-soft'
          }`}
        >
          {skill.shipped ? 'In this repo' : 'External'}
        </span>
      </div>

      <p className="text-sm text-text-muted mt-3 leading-relaxed">
        {skill.blurb}
      </p>

      {skill.trigger && (
        <p className="text-xs text-text-soft mt-3">
          <span className="font-semibold">Triggers:</span> {skill.trigger}
        </p>
      )}

      <div className="mt-3 relative">
        <pre className="font-mono text-[11px] leading-relaxed bg-bg-cream border border-border rounded-md p-2.5 pr-14 overflow-x-auto text-text whitespace-pre-wrap break-all">
          <code>{skill.install}</code>
        </pre>
        <button
          onClick={copy}
          aria-label="Copy install command"
          className="absolute top-1.5 right-1.5 text-[11px] px-1.5 py-0.5 border border-border rounded bg-white hover:border-text"
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>

      <div className="mt-3 flex items-center justify-between gap-2 pt-3 border-t border-border">
        <span className="text-xs text-text-soft capitalize">{skill.category}</span>
        {skill.sourceUrl ? (
          <a
            href={skill.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-text-soft hover:text-accent truncate max-w-[60%]"
            title={skill.source}
          >
            {skill.source} ↗
          </a>
        ) : (
          <span className="text-xs text-text-soft truncate">{skill.source}</span>
        )}
      </div>
    </div>
  );
}
