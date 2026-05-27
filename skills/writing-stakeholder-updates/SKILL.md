---
name: writing-stakeholder-updates
description: |
  Drafting weekly or per-meeting updates for different audiences — eng leads,
  executives, customer success, cross-team partners. Use when the user mentions
  "weekly update", "exec note", "team update", "Friday recap", "stakeholder
  email", "status report", or asks for "something to send the team".
allowed-tools:
  - Read
  - Write
  - Edit
---

# Rule: Writing stakeholder updates

## Goal

A good stakeholder update answers three things in the first 30 seconds: **what shipped, what's blocked, what I need from you.** Anything else is supporting material. The mistake most PMs make is writing the same update for every audience — exec versions read like sprint reports, eng versions read like marketing. This skill picks the right shape for the audience and resists the temptation to over-explain.

## Process

1. **Receive input** — a sprint report, a list of PRs, the team's Linear board, a transcript, or just "draft an update".
2. **Ask the audience and the time horizon.** Without those two, every other choice is wrong.
3. **Pull the three threads** — shipped, in-flight, blocked. Add risks + decisions needed.
4. **Draft** in the structure for the chosen audience.
5. **Cut by a third.** First drafts are too long.

## Clarifying Questions

**Audience** — who reads this? Pick one:
- 1. Eng leads + tech leads
- 2. Executives (VPs, founders, C-suite)
- 3. Customer success / support
- 4. Cross-team partners (other PMs, design, data)
- 5. The whole company

**Time horizon**
- A. Last week
- B. Last 2 weeks (a sprint)
- C. Last month
- D. The quarter so far

**Signal** — what's the headline?
- 1. Shipped something
- 2. Stuck and need help
- 3. Risk surfacing
- 4. Decision needed
- 5. Steady progress, no drama

**Tone**
- A. Plainspoken, period-ending (default)
- B. Formal (board-style)
- C. Conversational (slack-style)

## Output Structure — per audience

### A. Eng leads + tech leads

```markdown
**<Team / project name> — week of <date>**

**Shipped**
- <One line each. Link to PRs.>

**In flight**
- <One line. ETA if you have one.>

**Blocked / risk**
- <Specific blocker. Who can unblock and by when.>

**Decisions needed**
- <One per line, format: "Decision needed by [date]: [the question]". Tag the decider.>

**Heads up**
- <Anything else they should know but no action required.>
```

### B. Executives

```markdown
**<Team / project> — <period>**

**TL;DR.** One sentence. The thing that matters.

**Metrics**
- <Primary metric>: <current vs. target>
- <Guardrail metric>: <state>

**What moved this week**
- <2–4 bullets, each tied to a metric or a goal.>

**Risks**
- <One line per risk. Format: "Risk + mitigation + when we'll know if it's working".>

**Asks**
- <Specific. "Need <name> to approve <thing> by <date>" — not "would appreciate input".>
```

### C. Customer success / support

```markdown
**What's new for customers — <date>**

**Shipped this week**
- <Customer-visible change in one line.>

**Known issues**
- <Issue + workaround + ETA.>

**Customer-requested items**
- <Top 3 from feedback this period. Status: shipped / in flight / not on roadmap.>

**FYI**
- <Things to be aware of in customer conversations.>
```

### D. Cross-team partners

```markdown
**<Team> sync — <date>**

**What we shipped that you might care about**
- <Things with cross-team impact. Be specific about the impact.>

**What we're starting that touches your area**
- <Heads-up items. Who to talk to on our side.>

**What we need from you**
- <Direct asks. Person + thing + date.>
```

### E. Whole company

Short. Format like option B (Exec) but lighter — TL;DR + 3 bullets + asks. Slack-friendly.

## Voice rules

- **Period-end declarative.** No questions. No "thoughts?" at the end.
- **Specific names and dates.** "Need Priya's approval by Thursday" beats "need input soon".
- **Numbers over adjectives.** "Down 12% this week" beats "down significantly".
- **Active verbs.** "Shipped", "Blocked on", "Decided to" — not "facilitated", "explored".
- **Bullets are sentences, not phrases.** Two-word bullets are a coward's update.
- **No buzzwords.** No "alignment", "synergy", "leverage", "seamless".

## Risk communication

Every risk gets three lines:

1. **The risk.** "If A doesn't happen, B fails."
2. **The mitigation.** "We're doing C to reduce the chance."
3. **The trip-wire.** "We'll know if it's working by [date / signal]."

Without all three, it's not a risk — it's a worry, and exec readers will treat it as one.

## Target Audience

You picked it in Q1. Now write *only* what that audience needs. The PM error pattern is to copy-paste sections "in case it's useful". It isn't. Different audience = different doc.

## Tiny worked example

**Audience: Exec, weekly**

> **Checkout flow — week of Mar 24**
>
> **TL;DR.** Mobile checkout conversion ticked up 1.8 points after we shipped the simplified shipping selector. We're prepping a similar pass on the payment screen next week.
>
> **Metrics**
> - Mobile checkout conversion: **22.4%** (up from 20.6%, target 25% by EOQ).
> - Refund rate (guardrail): 1.1%, no change.
>
> **What moved**
> - Shipped simplified shipping selector on Tuesday (cut 3 fields to 1).
> - Cleaned up 2 prod errors on Safari that were silently failing checkout.
>
> **Risks**
> - Risk: payment-screen experiment may not show signal in 1 week if traffic dips for spring break. Mitigation: extended runway 7 days. Trip-wire: 50k sessions by Apr 7.
>
> **Asks**
> - Need legal sign-off on the 3DS copy by Friday — sent the draft to Priya yesterday.

## Anti-patterns

- The same update sent to three audiences. Pick one, write for them, send a different shape to others.
- "Things are going well" with no numbers. Pick a metric.
- A blocked-items list without dates or decision owners.
- Risks without trip-wires. They read as worry.
- Updates longer than 250 words for exec audiences. Cut.

## Output

- **Format:** Markdown (`.md`) or paste directly into Slack / email.
- **Location:** `tasks/updates/` if archived.
- **Filename:** `<YYYY-MM-DD>-<audience>.md`

## Final instructions

1. Always confirm audience and time horizon before drafting. Don't guess.
2. After drafting, count the asks. If there isn't a specific named ask, the update is a status report, not a stakeholder update.
3. Read aloud. If you wouldn't say it in a hallway conversation, rewrite it.

## Attribution

Synthesized from: `anthropics/knowledge-work-plugins · stakeholder-comms` (Apache 2.0); Ryan Nystrom (Notion EM) on async work patterns from [chatprd.ai](https://www.chatprd.ai/how-i-ai/ryan-nystrom-notion-workflows-for-engineering-velocity); Cat Wu / Anthropic team's update cadence via Lenny's; voice rules from the Runtime brand skill.
