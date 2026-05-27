import Link from 'next/link';
import type { Practice } from '@/lib/practices';

export function PracticeCard({ practice }: { practice: Practice }) {
  return (
    <Link
      href={`/best-practices/${practice.slug}/`}
      className="card-anchor block focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
    >
      <div className="flex items-baseline justify-between mb-3">
        <span className="font-mono text-xs text-text-soft">
          {String(practice.number).padStart(2, '0')}
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-eyebrow text-accent">
          Practice
        </span>
      </div>
      <h3 className="text-lg font-semibold text-text leading-snug tracking-tight2">
        {practice.title}
      </h3>
      <p className="text-sm text-text-muted mt-2 leading-relaxed">{practice.blurb}</p>
      <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
        Read <span aria-hidden>&rarr;</span>
      </div>
    </Link>
  );
}
