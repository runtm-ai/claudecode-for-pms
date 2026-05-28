# skills/

Six starter skills to get a PM productive on day one. Each is a `SKILL.md` Claude auto-loads when a relevant request comes in.

| Skill | When it fires |
|---|---|
| `your-brand/` | Any time Claude generates a branded artifact. Fill it in first. |
| `writing-prds/` | "Write a PRD for X", "spec out Y", "what are the requirements for Z". |
| `writing-release-notes/` | "What shipped this week?", "draft release notes". |
| `writing-stakeholder-updates/` | "Draft a weekly update", "exec note", "what to tell the team". |
| `synthesizing-user-research/` | "I have N interview transcripts", "synthesize this research". |
| `prioritizing-features/` | "How should I prioritize", "score this backlog", "which framework". |
| `animating-with-remotion/` | "Create a Remotion animation", "animate my product", "build an onboarding video". |

## How skills load

At Claude Code session start, only the `name` and `description` from each skill's frontmatter are loaded into context. The body of `SKILL.md` only gets read when Claude judges it relevant. That means you can have 50 skills installed without bloating context.

This is why the `description` field matters: include the trigger phrases a user is likely to say.

## Add your own

The next time you re-prompt yourself for the same kind of task, stop. Tell Claude: *"Create a skill for [the task]. It should include [your requirements]."* Save it under `skills/<gerund-form-name>/SKILL.md`.

Rules of thumb:

- Gerund form names: `writing-foo`, `prioritizing-bar` — not `helper` or `utils`.
- 80–150 lines per skill. Split into reference files if it's longer.
- Include a one-line worked example so Claude sees what good output looks like.
- Trigger phrases in the `description` field. Without them, the skill won't auto-load.
