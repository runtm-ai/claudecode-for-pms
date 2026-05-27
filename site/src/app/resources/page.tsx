import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { PersonCard } from '@/components/ui/PersonCard';
import { RepoCTA } from '@/components/ui/RepoCTA';

export const metadata = {
  title: 'Resources',
  description:
    'The articles, podcasts, repos, and people that shaped this project. Read these; you will recognize the patterns.',
};

const PEOPLE = [
  {
    name: 'Aakash Gupta',
    role: 'Product Growth newsletter · Albuquerque podcast',
    quote:
      'The four-level pipeline: Lovable, Claude Code, Cursor, Agents \u2014 pick the right tool for the artifact.',
    link: 'https://www.aakashg.com/albuquerque-podcast/',
    linkLabel: 'Listen',
  },
  {
    name: 'Aman Khan',
    role: 'PM at Arize',
    quote:
      'Skills encode judgment. Stop re-prompting; ship a skill.',
    link: 'https://amankhan1.substack.com/p/every-pm-should-be-building-skills',
    linkLabel: 'Read',
  },
  {
    name: 'Cat Wu',
    role: 'PM, Claude Code at Anthropic',
    quote: 'Anthropic\u2019s product team writes specs first. The code falls out.',
    link: 'https://www.lennysnewsletter.com/p/how-anthropics-product-team-uses-claude-code',
    linkLabel: 'Read on Lenny\u2019s',
  },
  {
    name: 'Ryan Nystrom',
    role: 'EM at Notion · chatprd.ai',
    quote:
      'Voice doc + plan mode + skill library = a PR in twenty minutes.',
    link: 'https://www.chatprd.ai/how-i-ai/ryan-nystrom-notion-workflows-for-engineering-velocity',
    linkLabel: 'Read',
  },
  {
    name: 'Owen Williams',
    role: 'Design Engineer at Stripe · How I AI',
    quote:
      'The design system has to be a skill. Otherwise every page comes back indigo.',
    link: 'https://www.youtube.com/watch?v=hQFEAZK__q0',
    linkLabel: 'Watch',
  },
  {
    name: 'Marcus Moretti',
    role: 'Writing at Every',
    quote: 'Roadmap first, PRDs second. The order matters.',
    link: 'https://every.to/source-code/claude-code-for-product-managers',
    linkLabel: 'Read',
  },
];

const PODCASTS = [
  { title: 'How I AI (Lenny\u2019s)', host: 'Claire Vo', link: 'https://www.lennysnewsletter.com/p/how-i-ai' },
  { title: 'ChatPRD\u2019s "How I AI"', host: 'Ben Slater', link: 'https://www.chatprd.ai/how-i-ai' },
  { title: 'Product Growth', host: 'Aakash Gupta', link: 'https://www.aakashg.com/' },
];

const ARTICLES = [
  { title: 'How Anthropic\u2019s product team uses Claude Code', source: 'Lenny\u2019s', link: 'https://www.lennysnewsletter.com/p/how-anthropics-product-team-uses-claude-code' },
  { title: 'Every PM should be building skills', source: 'Aman Khan', link: 'https://amankhan1.substack.com/p/every-pm-should-be-building-skills' },
  { title: 'Claude Code for product managers', source: 'Every \u00b7 Marcus Moretti', link: 'https://every.to/source-code/claude-code-for-product-managers' },
];

const REPOS = [
  { name: 'anthropics/knowledge-work-plugins', license: 'Apache 2.0', link: 'https://github.com/anthropics/knowledge-work-plugins' },
  { name: 'phuryn/pm-skills', license: 'MIT', link: 'https://github.com/phuryn/pm-skills' },
  { name: 'deanpeters/Product-Manager-Skills', license: 'MIT', link: 'https://github.com/deanpeters/Product-Manager-Skills' },
  { name: 'slgoodrich/agents', license: 'Apache 2.0', link: 'https://github.com/slgoodrich/agents' },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="brand-mesh">
        <div className="max-w-6xl mx-auto px-5 pt-14 pb-12 sm:pt-16 sm:pb-16">
          <p className="eyebrow-pill">Resources</p>
          <h1 className="headline-xl mt-5 max-w-3xl">
            The reading list behind this project.
          </h1>
          <p className="text-base sm:text-lg text-text-muted mt-5 max-w-2xl leading-relaxed">
            We didn&rsquo;t invent any of this. We synthesized from the people
            doing it best. Read these; you&rsquo;ll recognize the patterns.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 pb-12">
        <h2 className="text-2xl font-bold text-text mb-6">People we listened to</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PEOPLE.map((p) => (
            <PersonCard key={p.name} {...p} />
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-border">
        <div className="max-w-6xl mx-auto px-5 py-12 grid gap-8 lg:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text mb-4">
              Podcasts
            </h3>
            <ul className="space-y-3 text-sm">
              {PODCASTS.map((p) => (
                <li key={p.title}>
                  <a href={p.link} className="font-medium text-text hover:text-accent">
                    {p.title}
                  </a>
                  <span className="text-text-soft"> &mdash; {p.host}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text mb-4">
              Articles
            </h3>
            <ul className="space-y-3 text-sm">
              {ARTICLES.map((a) => (
                <li key={a.title}>
                  <a href={a.link} className="font-medium text-text hover:text-accent">
                    {a.title}
                  </a>
                  <span className="text-text-soft"> &mdash; {a.source}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text mb-4">
              Source repos
            </h3>
            <ul className="space-y-3 text-sm">
              {REPOS.map((r) => (
                <li key={r.name}>
                  <a href={r.link} className="font-mono font-medium text-text hover:text-accent">
                    {r.name}
                  </a>
                  <span className="text-text-soft"> &mdash; {r.license}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-20">
        <RepoCTA context="resources" />
      </section>
    </>
  );
}
