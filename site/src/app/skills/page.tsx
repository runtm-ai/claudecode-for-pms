'use client';

import { useMemo, useState } from 'react';
import { SkillCard, type SkillCardData } from '@/components/ui/SkillCard';
import { RepoCTA } from '@/components/ui/RepoCTA';
import skillsData from '@/content/skills.json';

const ALL = skillsData.skills as SkillCardData[];
const CATEGORIES = [
  'all',
  ...Array.from(new Set(ALL.map((s) => s.category))).sort(),
];
const SHIPPED_COUNT = ALL.filter((s) => s.shipped).length;

export default function SkillsPage() {
  const [active, setActive] = useState<string>('all');
  const [oursOnly, setOursOnly] = useState(false);

  const filtered = useMemo(() => {
    return ALL.filter((s) => {
      if (active !== 'all' && s.category !== active) return false;
      if (oursOnly && !s.shipped) return false;
      return true;
    });
  }, [active, oursOnly]);

  return (
    <>
      <section className="brand-mesh">
        <div className="max-w-6xl mx-auto px-5 pt-14 pb-12 sm:pt-16 sm:pb-16">
          <p className="eyebrow-pill">Skills</p>
          <h1 className="headline-xl mt-5 max-w-3xl">
            {ALL.length} curated PM skills for Claude Code.
          </h1>
          <p className="text-base sm:text-lg text-text-muted mt-5 max-w-2xl leading-relaxed">
            {SHIPPED_COUNT} ship in this repo as our own. The rest we&rsquo;ve
            vetted from elsewhere &mdash; each card has the exact{' '}
            <code className="font-mono text-sm text-text">/plugin</code> command
            you paste into Claude Code. Pull-request your own at any time.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 pb-6">
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-xs px-3 py-1.5 rounded-full border-2 transition-colors capitalize ${
                active === cat
                  ? 'border-text bg-text text-white'
                  : 'border-border text-text-muted hover:border-text'
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="hidden md:inline-block w-px h-5 bg-border mx-2" />
          <label className="inline-flex items-center gap-2 text-xs text-text-muted ml-1">
            <input
              type="checkbox"
              checked={oursOnly}
              onChange={(e) => setOursOnly(e.target.checked)}
              className="accent-accent"
            />
            In this repo only
          </label>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 pb-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s) => (
            <SkillCard key={s.slug} skill={s} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-text-soft py-12">
            No skills match this filter.
          </p>
        )}
      </section>

      <section className="max-w-6xl mx-auto px-5 pb-20">
        <RepoCTA context="skills-index" />
      </section>
    </>
  );
}
