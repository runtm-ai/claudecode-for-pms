import Link from 'next/link';
import Image from 'next/image';
import { SITE } from '@/lib/tokens';

export function Footer() {
  const lastUpdated = new Date().toISOString().slice(0, 10);
  return (
    <footer className="border-t border-border bg-white mt-24">
      <div className="max-w-6xl mx-auto px-5 py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <a
            href={SITE.runtimeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 group"
          >
            <span className="text-[10px] font-medium uppercase tracking-eyebrow text-text-soft group-hover:text-text-muted">
              Built &amp; maintained by
            </span>
            <Image
              src="/logos/runtime-wordmark.png"
              alt="Runtime"
              width={120}
              height={32}
              className="h-7 w-auto"
            />
          </a>
          <p className="text-sm text-text-muted mt-4 max-w-md leading-relaxed">
            Claude Code for PMs is an open-source set of templates and skills,
            stewarded by <a href={SITE.runtimeUrl} className="text-accent underline underline-offset-2">Runtime</a>.
            Sandboxed coding agents with your company&rsquo;s context, integrations, and guardrails.
          </p>
          <p className="text-xs text-text-soft mt-4">MIT licensed.</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-eyebrow text-text mb-3">Site</h4>
          <ul className="text-sm space-y-2 text-text-muted">
            <li><Link href="/best-practices/" className="hover:text-text">Best practices</Link></li>
            <li><Link href="/skills/" className="hover:text-text">Skills</Link></li>
            <li><Link href="/templates/" className="hover:text-text">Templates</Link></li>
            <li><Link href="/resources/" className="hover:text-text">Resources</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-eyebrow text-text mb-3">Project</h4>
          <ul className="text-sm space-y-2 text-text-muted">
            <li><Link href="/contribute/" className="hover:text-text">Contribute</Link></li>
            <li><Link href="/changelog/" className="hover:text-text">Changelog</Link></li>
            <li><a href={SITE.repo} className="hover:text-text">GitHub</a></li>
            <li><a href="/changelog.rss" className="hover:text-text">RSS</a></li>
            <li><a href={SITE.runtimeUrl} className="hover:text-text">Runtime &rarr;</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border-soft">
        <div className="max-w-6xl mx-auto px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-text-soft">
          <p>Last updated {lastUpdated}.</p>
          <a
            href={`${SITE.repo}/edit/main/site/src/app/page.tsx`}
            className="hover:text-text underline underline-offset-2"
          >
            Suggest a change on GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
