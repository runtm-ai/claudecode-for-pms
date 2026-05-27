---
name: writing-release-notes
description: |
  Drafting user-facing release notes from a list of merged PRs, a git log range,
  or a changelog. Use when the user says "release notes", "what shipped this
  week", "changelog entry", "write the announcement for X", or shares a PR list.
allowed-tools:
  - Read
  - Write
  - Edit
---

# Rule: Writing release notes

## Goal

Turn a list of merged PRs into release notes a customer would actually read. The PRs say what work happened; the release notes say what changed for the user. Most release notes fail by listing the work ("Refactored billing service") instead of the change ("You can now switch plans mid-cycle without losing prorated credit"). Fix that.

## Process

1. **Receive input** — a list of merged PRs (titles + descriptions), a git log range, a draft changelog, or a Linear / Jira label.
2. **Ask clarifying questions** to set audience, tone, and grouping.
3. **Triage** — separate user-visible changes from internal work. Internal work goes in "Under the hood" or gets cut.
4. **Draft** in the structure below.
5. **Review with the user.** Revise. The first draft is usually too long.

## Clarifying Questions

Pick from these. Ask 3–4 max.

**Audience** — who reads this?
- A. End users (the people who use the product)
- B. Customers (the people who pay)
- C. Internal stakeholders
- D. Cross-team eng (other teams in the company)

**Tone** — match it to the audience and the product's voice.
- A. Plainspoken, period-ending. Like a colleague's email.
- B. Excited (real launches, big features). Use sparingly.
- C. Operational (status / fixes / maintenance).

**Length**
- 1. Headline-only (one paragraph for the changelog page)
- 2. Per-feature paragraphs (a digest email)
- 3. Full announcement (one section per feature with detail)

**Grouping**
- A. By area / surface (Billing, Dashboard, API)
- B. By impact (New, Improved, Fixed)
- C. By the named release / version

## Output Structure

```markdown
# <Release name or date>

<TL;DR — one sentence, three things max.>

## Highlights

- <Bullet — the change in one line, user-facing.>
- <Bullet>
- <Bullet>

## What's new

### <Feature name>
<One paragraph in the brand voice. Specific nouns, active verbs, what the user can now do.>

### <Next feature>
…

## Improvements

- <One-liner each, ordered by user impact.>

## Fixed

- <One-liner each. Be specific — "Fixed crash on Safari 17 when editing project name" beats "Fixed a bug".>

## Under the hood

- <Internal changes the user doesn't feel but might want to know about. Cut this section if there isn't anything.>

## Known issues

- <Things shipping with known limitations. Be honest.>
```

## Voice rules

- **List the feature, not the work.** "You can now switch plans mid-cycle" beats "Refactored the billing service".
- **Specific nouns.** "Stripe, Adyen, Braintree" beats "all major payment providers".
- **Active verbs.** "Adds", "ships", "fixes" — not "facilitates", "enables", "unlocks".
- **No marketing buzzwords.** No "unlock", "empower", "leverage", "seamless", "next-generation", "AI-powered".
- **Numbers when you have them.** "30% faster" beats "much faster".
- **One emoji per row max** if your brand allows them at all. None in headlines.
- **Period-end declarative.** No question headlines. No exclamation drama.

## Target Audience

Whoever you picked in Q1. If end users, write like a colleague explaining a change. If customers (paying), include the "why this matters for your team" thread. If internal, use the team's jargon — and skip what they already know.

## Tiny worked example

**PR list (input):**
- #842 "Refactor billing service to support mid-cycle plan changes"
- #847 "Add prorated credit calculation"
- #851 "Fix Safari 17 crash on /projects/edit"
- #855 "Bump Stripe SDK to v17"

**Output (excerpt):**
> ### Switch plans mid-cycle without losing credit
> You can now upgrade or downgrade your plan in the middle of a billing period. Any unused time on your old plan is converted to prorated credit and applied to the new one — no support ticket needed.
>
> ## Fixed
> - Editing a project name no longer crashes Safari 17.

Note what disappears: the SDK bump (irrelevant to the user) and the "refactor" framing (internal). What survives is the user-visible change with a specific verb.

## Anti-patterns

- One bullet per PR, copy-pasted from the title. PRs aren't release notes.
- "We're excited to announce…" The reader doesn't care that you're excited.
- "Multiple bug fixes and improvements". Name three of them, by impact.
- Hiding a breaking change in "Under the hood". Breaking changes get their own callout at the top.
- Release notes longer than the feature they describe. Cut by half.

## Output

- **Format:** Markdown (`.md`)
- **Location:** `tasks/release-notes/` or wherever your team keeps them.
- **Filename:** `<YYYY-MM-DD>-<release-name>.md`

## Final instructions

1. Always ask the clarifying questions first. The same PR list produces different notes for end users vs. exec audiences.
2. Read your draft aloud. If a sentence sounds like a press release, rewrite it.
3. Cut at least 30% on the second pass. Most first drafts are too long.

## Attribution

Synthesized from: `phuryn/pm-skills · release-notes` (11.6k★, MIT); voice principles from the Runtime brand skill; Aman Khan's framing of "skills encode judgment" from his Substack on [Every PM should be building skills](https://amankhan1.substack.com/p/every-pm-should-be-building-skills).
