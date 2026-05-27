---
name: synthesizing-user-research
description: |
  Turning a stack of interview transcripts or research notes into themes,
  Jobs-To-Be-Done statements, and a recommended next step. Use when the user
  says "synthesize this research", "I have N interview transcripts", "what
  did we learn from the user interviews", "pull out the themes", or
  "what's the JTBD here".
allowed-tools:
  - Read
  - Write
  - Edit
---

# Rule: Synthesizing user research

## Goal

A research synthesis answers one question: **what should we do differently because of what we heard?** Everything else — themes, quotes, frameworks — only earns its place by serving that answer. The mistake most PMs make is producing a beautiful Notion page that nobody acts on. This skill ends with a recommendation, not a wall of color-coded sticky notes.

## Process

1. **Receive input** — transcripts (raw or summarized), call notes, survey results, support tickets, sales-call snippets.
2. **Ask the clarifying questions** below. The research goal changes which framework fits.
3. **Read everything once** before synthesizing. Don't synthesize as you read.
4. **Cluster** observations into 3–7 themes. Fewer than 3 means you didn't push; more than 7 means you didn't cluster.
5. **Write JTBD statements** for each theme that has a clear user motivation.
6. **Surface the surprises** — what contradicted your prior beliefs, not what confirmed them.
7. **Recommend a next step.** One paragraph. Specific.

## Clarifying Questions

**Research goal** — what were you trying to learn?
- 1. Problem discovery (do users have the pain we think they do?)
- 2. Solution validation (does this approach work?)
- 3. Usability (where do people get stuck in the flow?)
- 4. Pricing / willingness to pay
- 5. Churn / win-loss

**Synthesis depth**
- A. Themes only (a one-pager)
- B. Themes + JTBD statements
- C. Themes + JTBD + opportunity sizing
- D. Full opportunity-solution tree (Teresa Torres style)

**Sample size + segmentation**
- How many interviews? Roughly how were they segmented (new vs. churned, paid vs. free, role)?
- If under 5 interviews: say so explicitly in the output. Patterns from <5 are hypotheses, not findings.

**Where the output goes**
- A. Internal Notion / Linear doc
- B. Exec memo
- C. Input to a PRD
- D. Customer-facing report (rare; needs a tone shift)

## Output Structure

```markdown
# <Research topic> — synthesis

**Goal of the research.** <One sentence — what you were trying to learn.>
**What we did.** <N interviews / surveys / sessions, period, segment.>
**What we'd do differently because of this.** <One paragraph. The recommendation.>

## Top themes

### 1. <Theme name — a short noun phrase, not a sentence>
- What we heard: <Plain-language summary of the pattern.>
- Strength: <How many of the N participants showed this. e.g. "7/9".>
- Representative quote: > "<Direct quote.>" — <Participant ID or anonymized role>
- So what: <Why this matters for the product.>

### 2. <Next theme>
…

## Jobs To Be Done

- **When** <situation>, **I want to** <motivation>, **so I can** <outcome>.
- **When** <situation>, **I want to** <motivation>, **so I can** <outcome>.

(One per theme that has a clear underlying user motivation.)

## Surprises

- <Things that contradicted our prior beliefs. These are the highest-value lines in the doc.>

## Opportunity sizing (if requested)

| Opportunity | T-shirt | Confidence | Notes |
|---|---|---|---|
| <Theme as opportunity> | S / M / L | low / med / high | <one line> |

## Recommended next step

<One paragraph. Names a decision, an owner, and a date. e.g. "Run a 5-day prototype test of the simplified onboarding with 6 new free-trial users. Owner: <name>. Decision point: Apr 12 — go / no-go on shipping the redesign.">

## What we did NOT learn

- <Be honest about gaps. This is what the next round of research should cover.>

## Method appendix

- Participants: <N, segmentation>
- Interview protocol: <link or paste 4–6 questions>
- Recruiter / script source: <link>
```

## Voice rules

- **Quotes are sacred — verbatim only.** No paraphrasing inside quotation marks.
- **Counts beat adjectives.** "7 of 9" beats "most".
- **Name the surprise.** Synthesis without a surprise is a synthesis you didn't push hard enough on.
- **Themes are nouns.** "Pricing confusion" — not "Users were confused about pricing".
- **Don't recommend the obvious.** "Talk to more users" is not a recommendation.

## Target Audience

The doc usually has two readers: an exec who reads only the top three paragraphs, and a teammate who reads it carefully and acts on it. Write so both get value: the top is dense and declarative; the body has enough detail that the doer can do.

## Tiny worked example

**Theme excerpt (from 9 onboarding interviews):**

> ### 2. People skip the sample data step because they don't trust it'll be deleted later
> - What we heard: Six of nine new accounts skipped the "load sample data" toggle. Three said they were worried about cleaning it up before going live.
> - Strength: 6/9 skipped; 3/9 said it out loud.
> - Representative quote: > "I don't want fake invoices floating around in my real account. I'll figure it out without the sample stuff." — P4, ops lead
> - So what: We're hiding the product behind a trust problem we can fix with one sentence and a "delete sample data" button.

**JTBD:**

> When I'm setting up the tool for my real team, I want to evaluate the workflow without polluting my live data, so I can adopt confidently without rework later.

**Recommended next step:**

> Add a one-click "remove sample data" button on the dashboard and a "you can delete this anytime" line under the sample-data toggle. Ship within the sprint. If sample-data usage doesn't move 15 points in 30 days, the trust issue is deeper than copy and we run a longer test.

## Anti-patterns

- **Synthesis = quote highlight reel.** Quotes support themes; they don't replace them.
- **20 themes that are really 4 themes with synonyms.** Cluster harder.
- **No recommendation.** If you don't end with one, the work is incomplete.
- **Confirming what you already believed.** If nothing surprised you, you led the witness.
- **Hiding tiny-N caveats.** Five interviews is a hypothesis, not a finding. Say so.

## Output

- **Format:** Markdown (`.md`)
- **Location:** `research/` or `tasks/research/`
- **Filename:** `<YYYY-MM-DD>-<topic>.md`

## Final instructions

1. Always read all transcripts before clustering. Synthesis-as-you-go biases toward the first interview.
2. End with the recommended next step. If you can't write one, the doc isn't done.
3. After delivering the draft, ask: *"What was surprising — and what would change your mind?"* Then revise.

## Attribution

Synthesized from: `anthropics/knowledge-work-plugins · user-research-synthesis` (Apache 2.0); `phuryn/pm-skills · summarize-interview` + `opportunity-solution-tree` (MIT); Teresa Torres' Opportunity-Solution Tree framing from *Continuous Discovery Habits*; Tony Ulwick's Jobs-To-Be-Done formulation; voice principles from the Runtime brand skill.
