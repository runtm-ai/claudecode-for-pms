# CLAUDE.md

> Memory file. Claude reads this on every session start. Keep it under 500 lines.

## Product

We publish an open-source playbook of best practices, templates, and skills for PMs using Claude Code. Our buyer is the PM who wants a repeatable system for AI-assisted product work. Our anti-buyer is the developer looking for a general coding assistant.

The playbook lives at claudecodeforpms.com (a Next.js static site deployed on Runtime) and as a cloneable GitHub repo at runtm-ai/claudecode-for-pms. The repo ships ready-to-use templates (in `templates/`), a workflow system (`pr_flow/`), and seven starter skills (`skills/`). The site displays and explains all of them.

## Team

- **PM:** Manolo (@manoloah)
- **Eng lead:** [TODO]
- **Design:** [TODO]
- **Anyone else with commit access:** [TODO]

## Stack

- **Frontend:** Next.js 15.1 / React 19 / TailwindCSS 3.4 — app router, static export to `site/out/`
- **Content:** MDX files in `site/src/content/` via next-mdx-remote + gray-matter
- **Hosting:** Runtime (runtm.ai) — preview per session, production at claudecodeforpms.com
- **Auth:** None — fully public static site
- **Analytics:** [TODO]

## Voice

How we write — for docs, release notes, support replies, and anything else that goes out.

- Period-end declarative sentences. No questions in marketing copy.
- Specific nouns over abstract claims. "Datadog, Salesforce, Stripe" beats "every major tool".
- Active verbs. "Ships the fix" beats "facilitates resolution".
- Trust the reader. Don't over-explain.
- Plain words. "Tag" not "invoke". "Run" not "execute".

**Words we don't use:** unlock, empower, leverage, seamless, frictionless, revolutionary, next-generation, AI-powered, ecosystem, cutting-edge, robust, scalable, enterprise-grade.

## Agents and skills

Skills live in `skills/`. The ones shipped with this repo:

- `your-brand/` — blank design system skill template
- `writing-prds/` — paired with `pr_flow/create-prd.mdc`
- `writing-release-notes/` — user-facing notes from merged PRs
- `writing-stakeholder-updates/` — weekly updates by audience
- `synthesizing-user-research/` — interview → themes + JTBD
- `prioritizing-features/` — framework picker + scoring
- `animating-with-remotion/` — product animations via Remotion

When you write the same kind of artifact twice, build a skill the third time. Gerund form (`writing-foo`, `prioritizing-bar`) so Claude auto-invokes.

## Workflow

For any non-trivial feature:

1. Create `tasks/<feature>/task.md` using `pr_flow/create-prd.mdc`. It also seeds `tasks/<feature>/sessions.md`.
2. Generate `tasks/<feature>/tasks.md` with `pr_flow/generate-tasks.mdc`.
3. Process tasks one at a time with `pr_flow/process-task-list.mdc`.
4. At session end, update `tasks/<feature>/sessions.md` with what was done.
5. Use plan mode (`Shift+Tab` in the CLI) before any file changes.

## Adding a best practice

Best practices live in `site/src/content/best-practices/` as MDX files. The site auto-discovers them by scanning that directory — no registration or index update needed.

**Steps to add one:**

1. Create a new file: `site/src/content/best-practices/<slug>.mdx`
   - The slug becomes the URL: `/best-practices/<slug>`
   - Use kebab-case, descriptive, gerund or noun form (e.g. `writing-prds`, `agent-secrets-state`)

2. Add the required frontmatter at the top:
   ```yaml
   ---
   title: Your practice title
   number: 13          # next sequential number — check existing files for the highest
   blurb: One or two sentences shown on the card and listing page.
   related:
     - slug-of-related-practice
   ---
   ```

3. Write the body in MDX. Available components:
   - `<Step n={1}>` — numbered step with code blocks inside
   - `<AntiPatterns>` — bulleted list of what not to do
   - `<Callout>` — highlighted aside

4. Verify it appears on the site:
   ```bash
   cd site && npm run dev
   # open /best-practices to confirm the card appears
   # open /best-practices/<slug> to confirm the full page renders
   ```

5. Run checks before opening a PR:
   ```bash
   cd site && npm run lint && npm run typecheck && npm run build
   ```

The `number` field controls sort order on the listing page and prev/next navigation. Pick the next integer; gaps are fine.

## Contributing to this repo

This applies when working on *this* repository (not the downstream template).

- **Never commit or push directly to `main`.** It is protected — pushes are rejected. Always branch (`git checkout -b <name>`), push the branch, and open a PR.
- Every change lands via a PR with **1 approving review** and passing CI (lint, typecheck, build, gitleaks).
- Before opening a PR, run `cd site && npm run lint && npm run typecheck && npm run build` and confirm gitleaks is clean.
- Use **npm**, not pnpm or yarn (the repo has a `package-lock.json`).
- Follow the voice rules above and the "What we accept" list in `CONTRIBUTING.md`. PRs squash-merge; the head branch auto-deletes.

## What not to do

- Don't commit `.env`, API keys, or anything in `.gitignore`'d paths.
- Don't paste secrets into chat. They live in the context forever.
- Don't skip the PRD on features the eng team will spend more than a day on.
- Don't approve a plan you didn't read.
- Don't write a skill named `helper`, `utils`, or anything vague.
- Don't stay in a session past the point Claude has lost the plot — open a new chat.
- **Don't force-push or reset shared branches.** Never run `git reset --hard`, `git push --force`, or `git rebase -i` against `main` or any branch others use without explicit written approval.
- Don't edit files inside `site/out/` directly — it's a generated build artifact. Change source in `site/src/` instead.

## References

Long-form context Claude can pull in when relevant:

- `templates/CLAUDE.md` — the CLAUDE.md template we ship to users
- `templates/DESIGN.md` — brand spec template
- `templates/docs/` — product, architecture, and voice doc templates
- `site/src/content/best-practices/` — the practice MDX pages
- `site/src/lib/content.ts` — how the site reads repo files and lists templates
- `pr_flow/*.mdc` — the PRD → tasks → execute rules
