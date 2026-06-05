'use client';

import { useCallback, useEffect, useState } from 'react';
import { CodeBlock } from './CodeBlock';
import { SITE } from '@/lib/tokens';

type FileEntry = { path: string; label: string; content: string };

function anchorId(path: string) {
  return path.replace(/[\/\.]/g, '-');
}

export function TemplatesExplorer({ files }: { files: FileEntry[] }) {
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const toggle = (path: string) =>
    setOpen((o) => ({ ...o, [path]: !o[path] }));

  const setAll = (value: boolean) =>
    setOpen(Object.fromEntries(files.map((f) => [f.path, value])));

  // Open a section and scroll it into view.
  const openAndJump = useCallback((path: string) => {
    setOpen((o) => ({ ...o, [path]: true }));
    requestAnimationFrame(() => {
      document
        .getElementById(anchorId(path))
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, []);

  // If the page loads with a hash, open and reveal that section.
  useEffect(() => {
    const id = window.location.hash.replace('#', '');
    if (!id) return;
    const match = files.find((f) => anchorId(f.path) === id);
    if (!match) return;
    setOpen((o) => ({ ...o, [match.path]: true }));
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ block: 'start' });
    });
  }, [files]);

  const anyOpen = files.some((f) => open[f.path]);

  return (
    <>
      <aside className="card-content mb-8">
        <div className="flex items-center justify-between gap-3 mb-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-text">
            Quick jump
          </h2>
          <button
            type="button"
            onClick={() => setAll(!anyOpen)}
            className="text-xs font-medium text-accent hover:text-accent-dark"
          >
            {anyOpen ? 'Collapse all' : 'Expand all'}
          </button>
        </div>
        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1 text-sm">
          {files.map((f) => (
            <li key={f.path}>
              <a
                href={`#${anchorId(f.path)}`}
                onClick={(e) => {
                  e.preventDefault();
                  history.replaceState(null, '', `#${anchorId(f.path)}`);
                  openAndJump(f.path);
                }}
                className="group inline-flex items-baseline gap-1.5 py-1 rounded-md text-accent hover:text-accent-dark"
              >
                <span aria-hidden className="text-text-soft transition-transform group-hover:translate-x-0.5">
                  &rarr;
                </span>
                <span className="font-mono underline decoration-accent/30 underline-offset-2 group-hover:decoration-accent">
                  {f.path}
                </span>
                <span className="text-text-soft no-underline">&mdash; {f.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </aside>

      <div className="space-y-4">
        {files.map((f) => {
          const isOpen = !!open[f.path];
          return (
            <div
              key={f.path}
              id={anchorId(f.path)}
              className="card-content scroll-mt-24 p-0 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggle(f.path)}
                aria-expanded={isOpen}
                className="w-full flex items-center gap-3 px-6 py-4 text-left hover:bg-bg-cream/50 transition-colors"
              >
                <svg
                  aria-hidden
                  viewBox="0 0 20 20"
                  className={`h-4 w-4 shrink-0 text-text-soft transition-transform ${
                    isOpen ? 'rotate-90' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 4l6 6-6 6" />
                </svg>
                <span className="font-mono text-base sm:text-lg text-text truncate">
                  {f.path}
                </span>
                <span className="text-sm text-text-soft truncate hidden sm:inline">
                  {f.label}
                </span>
                <span className="ml-auto shrink-0 text-xs text-text-soft">
                  {isOpen ? 'Hide' : 'Show'}
                </span>
              </button>

              {isOpen && (
                <div className="border-t border-border px-6 pb-6 pt-4">
                  <div className="flex items-center justify-end mb-2">
                    <a
                      href={`${SITE.repo}/blob/main/${f.path}`}
                      className="text-xs text-text-soft hover:text-text underline underline-offset-2"
                    >
                      View on GitHub
                    </a>
                  </div>
                  <CodeBlock code={f.content} snippetId={f.path} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
