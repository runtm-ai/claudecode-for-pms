import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { TemplateBlock } from '@/components/ui/TemplateBlock';
import { RepoCTA } from '@/components/ui/RepoCTA';
import { readRepoFile, REPO_TEMPLATE_FILES } from '@/lib/content';
import { SITE } from '@/lib/tokens';

export const metadata = {
  title: 'Templates',
  description:
    'The CLAUDE.md, DESIGN.md, pr_flow rules, and skill files in the cloneable repo. Copy any of them into your project.',
};

export default function TemplatesPage() {
  const files = REPO_TEMPLATE_FILES.map((f) => ({
    ...f,
    content: readRepoFile(f.path),
  }));

  return (
    <>
      <section className="brand-mesh">
        <div className="max-w-6xl mx-auto px-5 pt-14 pb-12 sm:pt-16 sm:pb-16">
          <p className="eyebrow-pill">Templates</p>
          <h1 className="headline-xl mt-5 max-w-3xl">
            Every template Claude reads on session start.
          </h1>
          <p className="text-base sm:text-lg text-text-muted mt-5 max-w-2xl leading-relaxed">
            Files in the cloneable repo. Read end-to-end, copy what helps, swap
            your defaults in.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 pb-10">
        <aside className="card-content mb-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-text mb-3">
            Quick jump
          </h2>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {files.map((f) => (
              <li key={f.path}>
                <a
                  href={`#${f.path.replace(/[\/\.]/g, '-')}`}
                  className="font-mono text-text-muted hover:text-text"
                >
                  {f.path}
                </a>
                <span className="text-text-soft"> &mdash; {f.label}</span>
              </li>
            ))}
          </ul>
        </aside>

        <div className="space-y-8">
          {files.map((f) => (
            <div key={f.path} id={f.path.replace(/[\/\.]/g, '-')}>
              <div className="flex items-baseline gap-3 mb-3">
                <h2 className="font-mono text-lg text-text">{f.path}</h2>
                <p className="text-sm text-text-soft">{f.label}</p>
              </div>
              <TemplateBlock
                path={f.path}
                content={f.content}
                href={`${SITE.repo}/blob/main/${f.path}`}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 pb-20">
        <RepoCTA context="templates-index" />
      </section>
    </>
  );
}
