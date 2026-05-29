export type Practice = {
  slug: string;
  number: number;
  title: string;
  blurb: string;
  related: string[];
};

export const PRACTICES: Practice[] = [
  {
    slug: 'prd-first',
    number: 1,
    title: 'Write the PRD before the prompt',
    blurb:
      'A PRD answers the four things a chat prompt skips: problem, user, done, and out-of-scope.',
    related: ['plan-mode', 'claude-md', 'skills'],
  },
  {
    slug: 'plan-mode',
    number: 2,
    title: 'Use plan mode for anything non-trivial',
    blurb:
      'Plan mode forces Claude to think before it edits. Approve the plan, then implementation gets boring.',
    related: ['prd-first', 'agent-onboarding'],
  },
  {
    slug: 'claude-md',
    number: 3,
    title: 'Make CLAUDE.md the single source of truth',
    blurb:
      'Product, voice, architecture, and conventions live in one file Claude reads on every session.',
    related: ['design-md', 'skills', 'mcps'],
  },
  {
    slug: 'skills',
    number: 4,
    title: 'Author skills, not prompts',
    blurb:
      'Skills auto-load by trigger phrase. Stop re-typing the same instructions in chat.',
    related: ['claude-md', 'design-skills'],
  },
  {
    slug: 'design-md',
    number: 5,
    title: 'Ship a DESIGN.md with brand tokens',
    blurb:
      'Tokens at the source level so contributors can\u2019t reach default indigo by accident.',
    related: ['claude-md', 'design-skills'],
  },
  {
    slug: 'mcps',
    number: 6,
    title: 'Wire up the right MCPs early',
    blurb:
      'GitHub, Linear, Notion, PostHog. The model can read real data, not your paraphrase of it.',
    related: ['claude-md', 'secrets'],
  },
  {
    slug: 'secrets',
    number: 7,
    title: 'Never commit a secret',
    blurb:
      '.env.example in repo, .env in .gitignore, MCP tokens loaded from the shell.',
    related: ['mcps'],
  },
  {
    slug: 'design-skills',
    number: 8,
    title: 'Treat the design system as a skill',
    blurb:
      'Colors, type, voice, surfaces. Claude defaults to indigo and mesh gradients without it.',
    related: ['design-md', 'skills'],
  },
  {
    slug: 'remotion',
    number: 9,
    title: 'Generate product animations with Remotion',
    blurb:
      'Programmatic video lets one PM ship feature demos and onboarding walkthroughs faster than waiting for the design team.',
    related: ['design-skills'],
  },
  {
    slug: 'agent-onboarding',
    number: 10,
    title: 'Onboard the agent like a teammate',
    blurb:
      'First-day reading list, code map, voice doc. Treat the agent like a new hire who reads fast.',
    related: ['claude-md', 'plan-mode'],
  },
  {
    slug: 'prd-sessions',
    number: 11,
    title: 'Log every session so Claude can pick up where you left off',
    blurb:
      'Two files per task — requirements and a running work log — so Claude starts each session with full context instead of a blank slate.',
    related: ['prd-first', 'claude-md', 'plan-mode'],
  },
];

export const getPractice = (slug: string): Practice | undefined =>
  PRACTICES.find((p) => p.slug === slug);
