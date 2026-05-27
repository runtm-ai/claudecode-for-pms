'use client';

import { useMemo, useState } from 'react';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { SkillCard, type SkillCardData } from '@/components/ui/SkillCard';
import { RepoCTA } from '@/components/ui/RepoCTA';
import skillsData from '@/content/skills.json';

const ALL = skillsData.skills as SkillCardData[];
const CATEGORIES = ['all', ...Array.from(new Set(ALL.map((s) => s.category)))];

export default function SkillsPage() {
  const [active, setActive] = useState<string>('all');
  const [showShippedOnly, setShowShippedOnly] = useState(false);

  const filtered = useMemo(() => {
    return ALL.filter((s) => {
      if (active !== 'all' && s.category !== active) return false;
      if (showShippedOnly && !s.shipped) return false;
      return true;
    });
  }, [active, showShippedOnly]);

  return (
    <>
      <section className="brand-mesh">
        <div className="max-w-6xl mx-auto px-5 pt-14 pb-12 sm:pt-16 sm:pb-16">
          <p className="eyebrow-pill">Skills</p>
          <h1 className="headline-xl mt-5 max-w-3xl">
            {ALL.length} curated PM skills for Claude Code.
          </h1>
          <p className="text-base sm:text-lg text-text-muted mt-5 max-w-2xl leading-relaxed">
            Six ship in the repo today. The rest are the next ones we&rsquo;ll add
            &mdash; in priority order. Pull-request your own at any time.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 pb-6">
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-xs px-3 py-1.5 rounded-full border-2 transition-colors ${
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
              checked={showShippedOnly}
              onChange={(e) => setShowShippedOnly(e.target.checked)}
              className="accent-accent"
            />
            Shipped only
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
          <p className="text-center text-text-soft py-12">No skills match this filter.</p>
        )}
      </section>

      <section className="max-w-6xl mx-auto px-5 pb-20">
        <RepoCTA context="skills-index" />
      </section>
    </>
  );
}
