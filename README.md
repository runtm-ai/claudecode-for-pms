# Claude Code for PMs

> An opinionated open-source playbook of best practices, templates, and skills for PMs using Claude Code. Cloneable today.

Built by [Runtime](https://runtm.com). MIT licensed.

The website lives at [claudecodeforpms.com](https://claudecodeforpms.com).

## Two paths

**You want the templates?** Browse `templates/`. Copy `templates/CLAUDE.md` and `templates/DESIGN.md` into your own repo root. You're done.

**You want to run the site locally?** `cd site && npm install && npm run dev`. See `site/README.md`.

## What's in the box

```
.
├── CLAUDE.md                      # Project memory for this repo (Claude reads every session)
├── templates/                     # Copy these into your own project
│   ├── CLAUDE.md                  # Memory file template — fill in your product, team, stack
│   ├── DESIGN.md                  # Brand spec template — fill in your colors, type, voice
│   └── docs/                      # Long-form context templates Claude loads on demand
│       ├── product.md
│       ├── architecture.md
│       └── voice.md
├── .env.example                   # Common env keys
├── .gitignore                     # Includes .env*, .DS_Store, node_modules
├── .mcp.json                      # Starter MCP config (GitHub, Notion, Linear, PostHog)
├── pr_flow/                       # PRD → tasks → execute workflow
│   ├── create-prd.mdc
│   ├── generate-tasks.mdc
│   └── process-task-list.mdc
├── tasks/                         # Where your PRDs and task lists live
├── skills/                        # Seven starter skills, ready to use
│   ├── your-brand/                # Blank brand skill — fill in your design system
│   ├── writing-prds/              # PRD authoring (pairs with pr_flow/)
│   ├── writing-release-notes/     # User-facing release notes from PRs
│   ├── writing-stakeholder-updates/  # Weekly updates by audience
│   ├── synthesizing-user-research/   # Interview transcripts → JTBD + themes
│   ├── prioritizing-features/     # RICE / MoSCoW / WSJF framework picker
│   └── animating-with-remotion/   # Product animations via Remotion
└── site/                          # The website source (Next.js)
```

## The 10 practices

1. Write a PRD before you write a prompt
2. Use plan mode for anything non-trivial
3. Put your rules in `CLAUDE.md`, not in prompts
4. Build a skill for anything you do twice
5. Keep a `DESIGN.md` so every artifact looks like your brand
6. Connect MCPs once, use them everywhere
7. Never commit secrets — `.env` + a vault, always
8. Use design skills so your UI doesn't look like ChatGPT made it
9. Use Remotion (and other prebuilt packages) for visuals you'd otherwise skip
10. Treat the agent as a teammate — give it the same onboarding doc

Each practice is one page at [claudecodeforpms.com/best-practices](https://claudecodeforpms.com/best-practices).

## Contribute

Open a PR. We curate, we don't gatekeep. See `/contribute` on the site.

## License

MIT.
