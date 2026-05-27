# DESIGN.md

> Brand spec template. Fill in your brand values and Claude reads them every session.
> Reference this file from `CLAUDE.md` so the design system is always in context.
>
> For the deeper version (used by Claude when generating artifacts), see `skills/your-brand/SKILL.md`.

## At a glance

| Element | Spec |
|---|---|
| Primary color | [TODO `#xxxxxx`] |
| Logo | [TODO file path + dark/light variants] |
| Headline type | [TODO size/weight/letter-spacing/color] |
| Body type | [TODO size/line-height/color] |
| Voice | [TODO one sentence — e.g. "Short, declarative, period-ending. One idea per sentence."] |

## Colors

- `primary` `[TODO]` — brand color, used sparingly
- `text` `[TODO]` — body and headlines
- `textMuted` `[TODO]` — supporting copy
- `border` `[TODO]` — card borders, dividers
- `bg` `[TODO]` — default background

Status colors (use only for meaning, not branding):

- `success` `[TODO]`
- `info` `[TODO]`
- `warning` `[TODO]`
- `error` `[TODO]`

## Typography

System stacks recommended (no webfont latency, consistent everywhere):

- Sans: `-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif`
- Mono: `"SF Mono", "JetBrains Mono", Menlo, monospace`

Type scale:

| Role | Size | Weight | Color |
|---|---|---|---|
| Hero headline | [TODO] | [TODO] | text |
| Page H1 | [TODO] | [TODO] | text |
| Section H2 | [TODO] | [TODO] | text |
| Body | [TODO] | [TODO] | textMuted |
| Code | [TODO] | [TODO] | text (mono) |

## Voice

[TODO three paragraphs on how your brand sounds. Include 3–5 example sentences in your voice and 3–5 words you never use.]

### Words we don't use

[TODO list]

## Logo

- Where to find it: [TODO file path]
- When to invert: [TODO]
- Minimum clear space: [TODO]
- What never to do: [TODO]

## Cards & surfaces

[TODO describe how cards look — border, radius, shadow, padding]

## Checklist before shipping anything branded

- [ ] Color is from the palette above (no improvised hex codes)
- [ ] Headline reads like one of our example sentences
- [ ] No words from the "don't use" list
- [ ] Logo respects clear space and color rules
- [ ] If it lives next to other brand artifacts, they look like siblings
