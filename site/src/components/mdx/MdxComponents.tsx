import type { ReactNode } from 'react';

// MDX components for the best-practice pages.
// Kept lightweight — Tailwind only, no extra deps.

export function Step({ n, children }: { n: number; children: ReactNode }) {
  return (
    <div className="flex gap-4 my-5 not-prose">
      <div className="shrink-0 w-8 h-8 rounded-full bg-accent text-white font-semibold text-sm flex items-center justify-center">
        {n}
      </div>
      <div className="prose-runtime flex-1 [&>*:first-child]:mt-0">{children}</div>
    </div>
  );
}

type CalloutTone = 'info' | 'success' | 'warning';

const TONE_STYLES: Record<CalloutTone, string> = {
  info: 'border-info bg-info/5',
  success: 'border-success bg-success/5',
  warning: 'border-warning bg-warning/5',
};

export function Callout({
  tone = 'info',
  children,
}: {
  tone?: CalloutTone;
  children: ReactNode;
}) {
  return (
    <div
      className={`my-5 border-l-4 rounded-r-md px-4 py-3 ${TONE_STYLES[tone]} [&>p:first-child]:mt-0 [&>p:last-child]:mb-0`}
    >
      {children}
    </div>
  );
}

export function AntiPatterns({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 border-l-4 border-error bg-coral-soft/40 rounded-r-md px-4 py-3 not-prose">
      <p className="eyebrow mb-2 !text-error">Anti-patterns</p>
      <div className="prose-runtime [&_ul]:my-1 [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
        {children}
      </div>
    </div>
  );
}

export const mdxComponents = {
  Step,
  Callout,
  AntiPatterns,
};
