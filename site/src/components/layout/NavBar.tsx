'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { SITE } from '@/lib/tokens';

const LINKS = [
  { href: '/best-practices/', label: 'Best practices' },
  { href: '/skills/', label: 'Skills' },
  { href: '/templates/', label: 'Templates' },
  { href: '/resources/', label: 'Resources' },
  { href: '/changelog/', label: 'Changelog' },
];

function BuiltByRuntime({ className = '' }: { className?: string }) {
  return (
    <a
      href={SITE.runtimeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2.5 group ${className}`}
      aria-label="Built and maintained by Runtime"
    >
      <span className="text-[10px] sm:text-xs font-medium uppercase tracking-eyebrow text-text-soft group-hover:text-text-muted leading-tight">
        Built &amp; maintained by
      </span>
      <Image
        src="/logos/runtime-wordmark.png"
        alt="Runtime"
        width={160}
        height={40}
        priority
        className="h-8 sm:h-9 w-auto"
      />
    </a>
  );
}

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur transition-all ${
        scrolled
          ? 'bg-white/85 border-b border-border'
          : 'bg-white/60 border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-5 h-16 flex items-center justify-between gap-3">
        <BuiltByRuntime />
        <nav className="hidden lg:flex items-center gap-6">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-text-muted hover:text-text"
            >
              {l.label}
            </Link>
          ))}
          <a href={SITE.repo} className="btn-primary text-sm py-2 min-h-0">
            Get the repo
          </a>
        </nav>
        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="lg:hidden p-2 border-2 border-text rounded-md min-w-[44px] min-h-[44px] flex flex-col items-center justify-center gap-1"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-5 h-0.5 bg-text" />
          <span className="block w-5 h-0.5 bg-text" />
          <span className="block w-5 h-0.5 bg-text" />
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-text py-3 border-b border-border-soft"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={SITE.repo}
              onClick={() => setOpen(false)}
              className="btn-primary text-base mt-3 w-full"
            >
              Get the repo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
