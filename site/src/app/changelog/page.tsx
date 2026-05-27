import { MDXRemote } from 'next-mdx-remote/rsc';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { ChangelogEntry } from '@/components/ui/ChangelogEntry';
import { RepoCTA } from '@/components/ui/RepoCTA';
import { listMDX } from '@/lib/content';

export const metadata = {
  title: 'Changelog',
  description: 'What changed and when. Newest first.',
};

export default function ChangelogPage() {
  const entries = listMDX('changelog').sort((a, b) =>
    String(b.frontmatter.date).localeCompare(String(a.frontmatter.date))
  );

  return (
    <>
      <section className="max-w-3xl mx-auto px-5 pt-16 pb-10">
        <SectionEyebrow>Changelog</SectionEyebrow>
        <h1 className="text-4xl md:text-5xl font-bold text-text mt-3 leading-tight">
          What changed and when.
        </h1>
        <p className="text-lg text-text-muted mt-4">
          Newest first. <a className="underline" href="/changelog.rss">Subscribe via RSS.</a>
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-5 pb-12 space-y-6">
        {entries.map((e) => (
          <ChangelogEntry
            key={e.slug}
            date={String(e.frontmatter.date)}
            version={String(e.frontmatter.version)}
            title={String(e.frontmatter.title)}
          >
            <MDXRemote source={e.body} />
          </ChangelogEntry>
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-5 pb-20">
        <RepoCTA context="changelog" />
      </section>
    </>
  );
}
