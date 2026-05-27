# Contributing to Claude Code for PMs

We curate, we don't gatekeep. Drive-by PRs are welcome.

## What we accept

- **A new best practice** — backed by a published source (article, podcast, repo). Add an MDX file in `site/content/practices/` + a row in `site/content/practices.ts`.
- **A new skill in the curation** — add a row to `site/content/skills.json` with install command, category, source URL.
- **A fix or improvement** — broken links, typos, tightened copy, a11y fixes.
- **A new person / podcast / article / repo** — edit `site/content/resources.ts`.

## What we don't accept

- Marketing for your product.
- Unverified claims you can't link to a public source.
- Anything that violates the code of conduct.
- Skills that require payment to install.
- Anything that turns this into a course or gated content.

## How to open a PR

1. Fork `runtm-ai/claudecode-for-pms`.
2. Make your change on a branch.
3. Open a PR with a one-line title and a 2-3 sentence description (what + why).
4. Add yourself to the Contributors section in the changelog if it's substantive.

We aim to respond within a week.

## Local development

```bash
cd site
pnpm install
pnpm dev          # http://localhost:3000
pnpm lint         # eslint
pnpm typecheck    # tsc --noEmit
pnpm build        # production build
```

## Code style

- TypeScript everywhere. No `any` without justification.
- Tailwind tokens from `site/tailwind.config.js`. Don't inline hex.
- Match the surrounding code's pattern. If you'd introduce a new pattern (library, abstraction, file layout), open an issue first.
- Default to writing no comments. Add one only when the *why* is non-obvious.

## Voice (for content edits)

- Plainspoken, declarative, period-ending sentences.
- No buzzwords. Banned words list lives in [`CLAUDE.md`](CLAUDE.md).
- Active verbs, specific nouns.

## Secrets

Never commit a real API key. The repo has [`.gitleaks.toml`](.gitleaks.toml) and a pre-commit guard — but you should also do the work to check. Use `.env.local` (gitignored) and `${VAR}` substitution in `.mcp.json`. Read [practice 07](https://claudecodeforpms.com/best-practices/secrets) for the full story (including how we burned ourselves on day zero).

## Code of conduct

By participating, you agree to the [Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/). See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
