---
name: your-brand
description: |
  Your team's brand system — colors, typography, voice, logo rules, and the
  surface treatments that make every artifact look like the same studio shipped
  it. Use whenever generating UI, landing pages, ads, decks, emails, animations,
  release notes, or any artifact that will be seen by a customer or stakeholder.
allowed-tools:
  - Read
  - Write
  - Edit
  - Glob
  - Grep
---

# Rule: <Your brand> visual + voice system

> This file is a **template**. Fill in every `[TODO]`. Delete this notice when done.
> Reference this skill from `CLAUDE.md` so Claude loads it on every session.

## Goal

To give Claude one source of truth for how your brand looks and sounds, so every artifact it produces — a release note, a landing page, a slide, a tweet — comes out looking like the same studio shipped it. Without this skill, Claude defaults to mesh gradients and Tailwind indigo. With it, your design system wins.

## At a glance

| Element | Spec |
|---|---|
| Primary color | `[TODO #xxxxxx]` |
| Secondary / accent | `[TODO]` |
| Logo | `[TODO file path]` — `[TODO when to invert]` |
| Headline type | `[TODO size / weight / letter-spacing / color]` |
| Body type | `[TODO size / line-height / color]` |
| Voice | `[TODO one sentence — e.g. "Short, declarative, period-ending."]` |

## Color system

### Primary
- `primary` `[TODO]` — the brand color. Use sparingly.
- `primarySoft` `[TODO]` — tinted backgrounds, focus rings.

### Neutrals
- `text` `[TODO]` — body, headlines.
- `textMuted` `[TODO]` — supporting copy.
- `textSoft` `[TODO]` — captions, metadata.
- `border` `[TODO]` — dividers, card borders.

### Status (use only for meaning, not branding)
- `success` `[TODO]` · `info` `[TODO]` · `warning` `[TODO]` · `error` `[TODO]`

### Rules
- Don't introduce a new shade of the primary. If the existing tone doesn't work, change the surface around it.
- Don't use status colors for branding.
- Don't use true black. Use `text` (a near-black like `#18181b`).

## Typography

System stacks unless you have a tested webfont reason otherwise.

- Sans: `-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif`
- Mono: `"SF Mono", "JetBrains Mono", Menlo, monospace`

### Type scale

| Role | Size | Weight | Letter-spacing | Line-height | Color |
|---|---|---|---|---|---|
| Hero headline | `[TODO]` | `[TODO]` | `[TODO]` | `[TODO]` | text |
| Page H1 | `[TODO]` | `[TODO]` | normal | `[TODO]` | text |
| Section H2 | `[TODO]` | `[TODO]` | normal | `[TODO]` | text |
| Body | `[TODO]` | `[TODO]` | normal | `[TODO]` | textMuted |
| Eyebrow | `[TODO]` ALL CAPS | `[TODO]` | `[TODO]` | 1 | primary |
| Code | `[TODO]` | `[TODO]` | normal | inherit | text (mono) |

### Mono use
Only for: code blocks, terminal output, IDs, URLs, agent handles, file paths.

## Logo

- Source asset: `[TODO file path]`
- On dark surfaces: `[TODO invert / use alt asset / never on dark]`
- Minimum clear space: `[TODO]`
- What never to do: `[TODO — e.g. recolor, stretch, combine with wordmark]`

## Voice

### In one sentence
`[TODO — e.g. "Plainspoken and concrete. Like an engineer confident in what they built, not a marketer trying to convince you."]`

### Principles
- **Specific nouns** over abstract claims. List the three things, not "every feature".
- **Active verbs.** "Ships" beats "facilitates".
- **Period-end declarative sentences.** No questions in marketing.
- **Plain words.** Choose the word a colleague would use in a demo.

### Real example headlines (your voice)
`[TODO — paste 5 real headlines from shipped work. These are the reference.]`

### Words to avoid
| Don't say | Say instead |
|---|---|
| Unlock, empower, leverage | Use, give, let |
| Seamless, frictionless | (describe what happens) |
| Revolutionary, next-generation | (cut) |
| Ecosystem, platform, solution | The actual product noun |
| Robust, scalable, enterprise-grade | (specific capability) |

## Cards & surfaces

`[TODO — describe how your cards look: border, radius, shadow, padding. Include one block of CSS or a tiny tsx snippet.]`

## Iconography

`[TODO — emoji policy, SVG line weight, when to use the brand logo as an icon.]`

## Process

1. Receive the request (a piece of UI, a release note, a deck slide, etc.).
2. Ask which surface this lives on (`marketing site`, `in-app`, `email`, `social`, `internal doc`).
3. Apply the rules above. When in doubt, fewer colors, smaller shadows, plainer copy.
4. Before delivering, run the checklist below.

## Checklist before shipping

- [ ] Color is from the palette above (no improvised hex codes).
- [ ] Headline reads like one of the example headlines.
- [ ] Body uses no banned words.
- [ ] Logo respects clear space and color rules.
- [ ] Mono font only for code, IDs, URLs.
- [ ] If it lives next to other brand artifacts, they look like siblings.

## Final instructions

1. Never improvise on color, type, or voice. If a request can't fit the spec, ask the user before extending.
2. The voice section is non-negotiable. The visual spec accommodates new surfaces; the voice carries across all of them.
3. When the user pushes back on output, note the rule that was missing. Add it to this skill the same day.

## Attribution

Inspired by Runtime's brand skill ([source](https://github.com/runtm-ai/claudecode-for-pms)) and the Notion [Brand Design Template](https://www.notion.so/Brand-Design-Template-29af2126a3a28019ba24fcd5fa6b6fc2). Approach to design-system-as-skill from Owen Williams (Stripe) on *How I AI*.
