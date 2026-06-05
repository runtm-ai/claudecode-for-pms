import { RepoCTA } from '@/components/ui/RepoCTA';
import { TemplatesExplorer } from '@/components/ui/TemplatesExplorer';
import { readRepoFile, REPO_TEMPLATE_FILES } from '@/lib/content';

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

      <section className="max-w-6xl mx-auto px-5 pt-12 sm:pt-16 pb-10">
        <TemplatesExplorer files={files} />
      </section>

      <section className="max-w-6xl mx-auto px-5 pb-20">
        <RepoCTA context="templates-index" />
      </section>
    </>
  );
}
