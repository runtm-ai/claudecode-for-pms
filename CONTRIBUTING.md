# Contributing to Claude Code for PMs

We curate, we don't gatekeep. Drive-by PRs are welcome.

## What we accept

- **A new best practice** — backed by a published source (article, podcast, repo). Add an MDX file in `site/src/content/best-practices/` + a row in `site/src/lib/practices.ts`.
- **A new skill in the curation** — add a row to `site/src/content/skills.json` with install command, category, source URL. Skills must be free to install.
- **A fix or improvement** — broken links, typos, tightened copy, a11y fixes.
- **A new resource (person / podcast / article / repo)** — edit the resources page under `site/src/app/resources/`.

Not sure where something goes? Open an issue first — there are templates for proposing a [practice](.github/ISSUE_TEMPLATE/new-practice.yml) or a [skill](.github/ISSUE_TEMPLATE/new-skill.yml).

## What we don't accept

- Marketing for your product.
- Unverified claims you can't link to a public source.
- Anything that violates the code of conduct.
- Skills that require payment to install.
- Anything that turns this into a course or gated content.

## Branching & merging

`main` is protected. **Direct commits and pushes to `main` are rejected — for everyone, maintainers included.** The only way in is a reviewed pull request.

1. Fork `runtm-ai/claudecode-for-pms` (or branch, if you have write access).
2. Make your change on a branch — `git checkout -b your-change`.
3. Open a PR with a one-line title and a 2-3 sentence description (what + why).
4. CI runs lint, typecheck, build, and a gitleaks secret scan. All must pass.
5. A maintainer reviews. PRs need **1 approving review** to merge.
6. We squash-merge; your branch is deleted automatically after merge.
7. Add yourself to the Contributors section in the changelog if it's substantive.

We aim to respond within a week.

## Local development

This repo uses **npm** (there's a `package-lock.json` — don't switch to pnpm or yarn).

```bash
cd site
npm install
npm run dev        # http://localhost:3000
npm run lint       # next lint
npm run typecheck  # tsc --noEmit
npm run build      # production build
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

Never commit a real API key. Use `.env.local` (gitignored) and `${VAR}` substitution in `.mcp.json`.

We scan for leaks two ways: GitHub secret scanning with push protection (blocks a secret at push time) and a [`gitleaks`](.gitleaks.toml) job that runs on every PR. Neither replaces your own care.

Want a local guard too? Opt into a pre-commit hook — it isn't installed automatically:

```bash
# from the repo root, requires gitleaks installed locally
cat > .git/hooks/pre-commit <<'EOF'
#!/usr/bin/env bash
exec gitleaks protect --staged --config .gitleaks.toml --no-banner
EOF
chmod +x .git/hooks/pre-commit
```

Read [practice 07](https://claudecodeforpms.com/best-practices/secrets) for the full story (including how we burned ourselves on day zero).

## Code of conduct

By participating, you agree to the [Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/). See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
