# CLAUDE.md

> Memory file. Claude reads this on every session start. Keep it under 500 lines.
> Replace the bracketed TODOs with details about your team and product.

## Product

[TODO] One paragraph: what you're building and who it's for.

Example: *We build a payments API for marketplaces with 1–50 sellers. Our buyer is the marketplace's founding engineer. Our anti-buyer is enterprise procurement.*

## Team

- **PM:** [TODO — your name + handle]
- **Eng lead:** [TODO]
- **Design:** [TODO]
- **Anyone else with commit access:** [TODO]

## Stack

- [TODO] Frontend
- [TODO] Backend
- [TODO] Database
- [TODO] Hosting
- [TODO] Auth
- [TODO] Analytics

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

- `your-brand/` — our design system as a skill
- `writing-prds/` — paired with `pr_flow/create-prd.mdc`
- `writing-release-notes/` — user-facing notes from merged PRs
- `writing-stakeholder-updates/` — weekly updates by audience
- `synthesizing-user-research/` — interview → themes + JTBD
- `prioritizing-features/` — framework picker + scoring

When you write the same kind of artifact twice, build a skill the third time. Gerund form (`writing-foo`, `prioritizing-bar`) so Claude auto-invokes.

## Workflow

For any non-trivial feature:

1. Drop a PRD into `tasks/prd-<feature>.md` using `pr_flow/create-prd.mdc`.
2. Generate the task list with `pr_flow/generate-tasks.mdc`.
3. Process tasks one at a time with `pr_flow/process-task-list.mdc`.
4. Use plan mode (`Shift+Tab` in the CLI) before any file changes.

## What not to do

- Don't commit `.env`, API keys, or anything in `.gitignore`'d paths.
- Don't paste secrets into chat. They live in the context forever.
- Don't skip the PRD on features the eng team will spend more than a day on.
- Don't approve a plan you didn't read.
- Don't write a skill named `helper`, `utils`, or anything vague.
- Don't stay in a session past the point Claude has lost the plot — open a new chat.
- **Don't force-push or reset shared branches.** Never run `git reset --hard`, `git push --force`, or `git rebase -i` against `main` or any branch others use without explicit written approval. Even retroactively "fixing" commit history rewrites what others have cloned and causes merge conflicts.

## References

Long-form context Claude can pull in when relevant:

- `docs/product.md` — what we're building, in depth
- `docs/architecture.md` — stack, dependencies, decisions
- `docs/voice.md` — voice rules with examples
- `DESIGN.md` — brand spec (colors, type, components)
- `pr_flow/*.mdc` — the PRD → tasks → execute rules
