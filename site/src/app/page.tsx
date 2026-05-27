import { Hero } from '@/components/ui/Hero';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { PracticeCard } from '@/components/ui/PracticeCard';
import { PersonCard } from '@/components/ui/PersonCard';
import { TemplateBlock } from '@/components/ui/TemplateBlock';
import { RepoCTA } from '@/components/ui/RepoCTA';
import { PRACTICES } from '@/lib/practices';
import { readRepoFile, REPO_TEMPLATE_FILES } from '@/lib/content';
import { SITE } from '@/lib/tokens';

const VOICES = [
  {
    name: 'Aakash Gupta',
    role: 'Product Growth \u00b7 Albuquerque podcast',
    quote:
      'The PMs winning right now treat Claude Code like a junior dev, not a search bar.',
    link: 'https://www.aakashg.com/albuquerque-podcast/',
    linkLabel: 'Listen',
  },
  {
    name: 'Aman Khan',
    role: 'PM at Arize \u00b7 Every PM should be building skills',
    quote:
      'Skills encode judgment. A prompt is a one-time ask; a skill is a teammate that shows up.',
    link: 'https://amankhan1.substack.com/p/every-pm-should-be-building-skills',
    linkLabel: 'Read',
  },
  {
    name: 'Cat Wu',
    role: 'Claude Code PM at Anthropic',
    quote:
      'Our team writes a spec before the code. Then the code writes itself, mostly.',
    link: 'https://www.lennysnewsletter.com/p/how-anthropics-product-team-uses-claude-code',
    linkLabel: 'Read on Lenny\u2019s',
  },
  {
    name: 'Ryan Nystrom',
    role: 'EM at Notion \u00b7 via chatprd.ai',
    quote:
      'A clean voice doc plus plan mode equals a PR in twenty minutes, not a sprint.',
    link: 'https://www.chatprd.ai/how-i-ai/ryan-nystrom-notion-workflows-for-engineering-velocity',
    linkLabel: 'Read',
  },
  {
    name: 'Owen Williams',
    role: 'Design Engineer at Stripe \u00b7 How I AI',
    quote:
      'The design system has to be a skill. Otherwise every page comes back indigo.',
    link: 'https://www.youtube.com/watch?v=hQFEAZK__q0',
    linkLabel: 'Watch',
  },
];

export default function Home() {
  const previews = REPO_TEMPLATE_FILES.slice(0, 3).map((f) => ({
    ...f,
    content: readRepoFile(f.path),
  }));

  return (
    <>
      <Hero
        eyebrow="Open source · For product managers"
        headline="Claude Code configured for PMs to ship faster."
        subhead="Templates, skills, and ten practices that turn a fresh Claude Code session into a working PM workflow. Clone the repo, fill in three files, ship."
        primaryCta={{ label: 'Get the repo', href: SITE.repo }}
        secondaryCta={{ label: 'Read the practices', href: '/best-practices/' }}
      />

      <section className="max-w-6xl mx-auto px-5 py-16 sm:py-20">
        <p className="eyebrow-pill">10 best practices</p>
        <h2 className="headline mt-4 max-w-2xl">
          What PMs shipping fastest with Claude Code do differently.
        </h2>
        <p className="text-text-muted mt-3 max-w-xl text-base sm:text-lg">
          One screen per practice. Read in order, or jump to the one that solves
          the problem you have today.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRACTICES.map((p) => (
            <PracticeCard key={p.slug} practice={p} />
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-border">
        <div className="max-w-6xl mx-auto px-5 py-16 sm:py-20">
          <p className="eyebrow-pill">Templates</p>
          <h2 className="headline mt-4 max-w-2xl">
            The files Claude reads on every session.
          </h2>
          <p className="text-text-muted mt-3 max-w-xl text-base sm:text-lg">
            Three of the ten in the repo. The whole set lives on{' '}
            <a className="text-accent underline underline-offset-2" href="/templates/">
              /templates
            </a>
            .
          </p>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {previews.map((t) => (
              <TemplateBlock
                key={t.path}
                path={t.path}
                content={t.content}
                excerpt
                href={`${SITE.repo}/blob/main/${t.path}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-16 sm:py-20">
        <p className="eyebrow-pill">Who says so</p>
        <h2 className="headline mt-4 max-w-2xl">
          Synthesized from PMs and engineers shipping with Claude every day.
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VOICES.map((v) => (
            <PersonCard key={v.name} {...v} />
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-16 sm:py-20">
        <RepoCTA context="home" />
      </section>
    </>
  );
}
