import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { PRACTICES, getPractice } from '@/lib/practices';
import { readMDX } from '@/lib/content';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { PracticeCard } from '@/components/ui/PracticeCard';
import { RepoCTA } from '@/components/ui/RepoCTA';
import { mdxComponents } from '@/components/mdx/MdxComponents';

export const dynamicParams = false;

export function generateStaticParams() {
  return PRACTICES.map((p) => ({ slug: p.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const practice = getPractice(slug);
  if (!practice) return {};
  return {
    title: practice.title,
    description: practice.blurb,
    openGraph: { title: practice.title, description: practice.blurb },
  };
}

export default async function PracticePage({ params }: PageProps) {
  const { slug } = await params;
  const practice = getPractice(slug);
  if (!practice) notFound();

  const doc = readMDX('best-practices', slug);
  if (!doc) notFound();

  const idx = PRACTICES.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? PRACTICES[idx - 1] : null;
  const next = idx < PRACTICES.length - 1 ? PRACTICES[idx + 1] : null;
  const related = practice.related
    .map((s) => getPractice(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <article className="max-w-3xl mx-auto px-5 pt-16 pb-12">
        <nav className="text-sm text-text-soft mb-6">
          <Link href="/best-practices/" className="hover:text-text">
            Best practices
          </Link>
          <span className="mx-2">/</span>
          <span className="text-text">{practice.title}</span>
        </nav>
        <SectionEyebrow>
          {String(practice.number).padStart(2, '0')} · Best practice
        </SectionEyebrow>
        <h1 className="text-4xl md:text-5xl font-bold text-text mt-3 leading-tight">
          {practice.title}
        </h1>
        <p className="text-lg text-text-muted mt-4 leading-relaxed">{practice.blurb}</p>
        <div className="prose-runtime mt-10">
          <MDXRemote source={doc.body} components={mdxComponents} />
        </div>
      </article>

      <section className="max-w-3xl mx-auto px-5 pb-12">
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          {prev ? (
            <Link
              href={`/best-practices/${prev.slug}/`}
              className="text-sm text-text-muted hover:text-text"
            >
              &larr; {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              href={`/best-practices/${next.slug}/`}
              className="text-sm text-text-muted hover:text-text text-right"
            >
              {next.title} &rarr;
            </Link>
          )}
        </div>
      </section>

      {related.length > 0 && (
        <section className="max-w-6xl mx-auto px-5 py-12">
          <SectionEyebrow>Related</SectionEyebrow>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <PracticeCard key={p.slug} practice={p} />
            ))}
          </div>
        </section>
      )}

      <section className="max-w-6xl mx-auto px-5 pb-20">
        <RepoCTA context={`best-practice-${slug}`} />
      </section>
    </>
  );
}
