'use client';

import { useState } from 'react';

export type SkillCardData = {
  slug: string;
  name: string;
  title: string;
  category: string;
  blurb: string;
  trigger: string;
  source: string;
  shipped: boolean;
};

export function SkillCard({ skill }: { skill: SkillCardData }) {
  const [copied, setCopied] = useState(false);
  const installCmd = skill.shipped
    ? `# already in the repo at skills/${skill.slug}/SKILL.md`
    : `# coming soon — vote with a thumbs-up at github.com/runtm-ai/claudecode-for-pms/issues`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(installCmd);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <div className="card-anchor flex flex-col">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-text">{skill.title}</h3>
          <p className="font-mono text-xs text-text-soft mt-0.5">{skill.name}</p>
        </div>
        <span
          className={`text-xs px-2 py-0.5 rounded border ${
            skill.shipped
              ? 'border-accent text-accent bg-accent/5'
              : 'border-border text-text-soft'
          }`}
        >
          {skill.shipped ? 'Shipped' : 'Coming soon'}
        </span>
      </div>
      <p className="text-sm text-text-muted mt-3 leading-relaxed">{skill.blurb}</p>
      <p className="text-xs text-text-soft mt-3">
        <span className="font-semibold">Triggers:</span> {skill.trigger}
      </p>
      <div className="mt-4 flex items-center justify-between gap-2 pt-3 border-t border-border">
        <span className="text-xs text-text-soft">{skill.category}</span>
        <button
          onClick={copy}
          className="text-xs px-2 py-1 border border-border rounded hover:border-text"
        >
          {copied ? 'Copied' : 'Copy path'}
        </button>
      </div>
    </div>
  );
}
