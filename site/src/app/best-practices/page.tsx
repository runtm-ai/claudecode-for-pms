import { PracticeCard } from '@/components/ui/PracticeCard';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { RepoCTA } from '@/components/ui/RepoCTA';
import { PRACTICES } from '@/lib/practices';

export const metadata = {
  title: '10 best practices',
  description:
    'The ten things PMs shipping fastest with Claude Code do differently — from PRD-first workflows to skills, MCPs, and design tokens.',
};

export default function BestPracticesIndex() {
  return (
    <>
      <section className="brand-mesh">
        <div className="max-w-6xl mx-auto px-5 pt-14 pb-12 sm:pt-16 sm:pb-16">
          <p className="eyebrow-pill">Best practices</p>
          <h1 className="headline-xl mt-5 max-w-3xl">
            What PMs shipping fastest with Claude Code do differently.
          </h1>
          <p className="text-base sm:text-lg text-text-muted mt-5 max-w-2xl leading-relaxed">
            Ten practices, one per page. Read in order or jump to the one that
            fixes the problem you have today.
          </p>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-5 pt-12 pb-16 sm:pb-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRACTICES.map((p) => (
            <PracticeCard key={p.slug} practice={p} />
          ))}
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-5 pb-20">
        <RepoCTA context="best-practices-index" />
      </section>
    </>
  );
}
