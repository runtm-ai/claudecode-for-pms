---
name: prioritizing-features
description: |
  Picking the right prioritization framework (RICE, MoSCoW, WSJF, Kano) and
  applying it to a backlog. Use when the user says "how should I prioritize",
  "score this backlog", "which framework", "what should we cut", "roadmap
  prioritization", or "RICE / MoSCoW / WSJF / Kano".
allowed-tools:
  - Read
  - Write
  - Edit
---

# Rule: Prioritizing features

## Goal

Most prioritization fails one of two ways: someone picks RICE because it's the framework they know, then spends an afternoon multiplying made-up numbers — or no framework is used and the loudest stakeholder wins. The job of this skill is to **pick the framework that fits the question being asked**, score honestly (showing the math), and recommend what to cut. The output is a defensible ordering, not a precise number.

## Process

1. **Receive input** — a backlog (any format), a strategic ask ("what do we ship next quarter?"), or a "help me decide between A and B".
2. **Ask the clarifying questions** below. The stage of work determines the framework.
3. **Recommend a framework first**, with a one-sentence why. Don't default.
4. **Score the items** transparently. Every score has an assumption next to it.
5. **Surface the sensitivity.** "If reach is off by 2x, item #4 jumps to #2." This is the most useful line in the doc.
6. **Recommend the cut.** What you'd drop, not just what you'd keep.

## Clarifying Questions

**Stage of work**
- 1. Early discovery (we don't know what to build yet)
- 2. Roadmap planning (next quarter)
- 3. Sprint backlog (next 2 weeks)
- 4. Cut list (we have too much; what goes?)

**Primary constraint**
- A. Time (a deadline is non-negotiable)
- B. Engineering capacity (people-weeks)
- C. Strategic bet (must move metric X)
- D. Customer commitment (specific accounts asked)

**How many items**
- Under 10 / 10–30 / 30+

**Confidence in the inputs**
- A. Solid (we've measured reach / effort recently)
- B. Mixed (some real numbers, some guesses)
- C. Vibes (we're guessing on all of it — say so)

## Framework picker

Use this as the recommendation table. The skill should *open* with a framework call, not assume one.

| If the question is… | Framework | Why |
|---|---|---|
| "What should we ship next quarter from this big list?" | **RICE** | Forces reach + impact + confidence onto a comparable scale. Best when items vary a lot in size. |
| "What's in scope for this release?" | **MoSCoW** | Categorical (Must / Should / Could / Won't) — fast, no false precision. |
| "Which of these will pay off soonest given fixed engineering capacity?" | **WSJF** | Cost-of-delay ÷ job size. Built for capacity-constrained roadmaps. |
| "Are we missing the basics that make customers love this?" | **Kano** | Separates table-stakes from delighters from must-haves. Use after research, not in a vacuum. |
| "Should we do A or B?" | **None — just decide.** | Two items don't need a framework. Pick the one with the bigger consequence-of-being-wrong and ship. |

## Output Structure

```markdown
# <Project / quarter> — prioritization

**Recommended framework: <name>.** <One sentence why this fits the question.>
**What changes if we change framework:** <One sentence — show you considered alternatives.>

## Inputs

- Items considered: <N>
- Source: <where they came from>
- Confidence: <A / B / C from above>

## Scored list

| # | Item | <Score components shown> | Score | Notes |
|---|---|---|---|---|
| 1 | <Item> | R 8000 · I 3 · C 0.8 · E 4 | **4800** | <One line: the key assumption.> |
| 2 | <Item> | … | … | … |

(For RICE, columns are R / I / C / E and the score = R × I × C / E. Show the math, not just the result.)
(For MoSCoW, columns are category + rationale.)
(For WSJF, columns are User-business value / Time criticality / Risk-opportunity / Job size, score = (sum of first three) / job size.)

## What I would cut

- <2–4 items from the bottom, named, with a one-line reason.> "<Item>: lowest reach, requires a new vendor relationship. Park until Q3."

## Sensitivity check

- <"If reach on item #4 is half what we estimated, it drops below the line.">
- <"If the legal review on item #2 takes 6 weeks not 2, it should slip to next quarter.">

## Recommended next step

<One paragraph. The first three items in priority order, who's the owner, when each kicks off. Specific.>

## What I'm not sure about

- <Honest list of guesses. Confidence calibration matters more than precision.>
```

## RICE quick reference

For when RICE is the chosen framework. Score each on these scales — don't invent new ones.

- **Reach (R):** Number of users / events the change touches in a chosen period (e.g. per quarter). Use a real number.
- **Impact (I):** 0.25 (minimal) · 0.5 (low) · 1 (medium) · 2 (high) · 3 (massive). Anchored — don't invent intermediate values.
- **Confidence (C):** 0.5 (low) · 0.8 (medium) · 1.0 (high). If lower than 0.5, do more research before scoring.
- **Effort (E):** Person-months (or weeks — pick one and stay consistent).
- **Score:** R × I × C / E.

The point of RICE isn't the number. It's that two PMs scoring the same item in a room together usually agree within 2x — which is good enough to order a backlog.

## WSJF quick reference

When capacity is the binding constraint:

- **Cost of Delay (CoD)** = User-business value + Time criticality + Risk reduction / Opportunity enablement.
- **WSJF score** = CoD / Job size.
- Score each component on a 1 / 2 / 3 / 5 / 8 / 13 / 20 Fibonacci scale. Higher = more.

## MoSCoW quick reference

- **Must:** the release fails without it.
- **Should:** important, but the release survives without it (with workarounds).
- **Could:** nice to have if there's time.
- **Won't:** explicitly out of this release. Document so it doesn't re-litigate.

Rule of thumb: Must items ≤ 60% of capacity. If Musts are 90% of capacity, you've called everything must, which means nothing is.

## Voice rules

- **Show the math.** A score with no decomposition is a vibe with a number bolted on.
- **State the assumption.** Every score has one — name it. "Assumes reach matches Q1 actuals."
- **Recommend a cut.** Saying yes to everything is not prioritization.
- **No precision theater.** RICE scores of 4823 vs. 4814 are noise. Round to one significant digit and move on.

## Target Audience

The reader is usually an eng lead or VP making a capacity call. They want to know *what to build first, what to drop, and why* — in that order. The framework is the supporting evidence, not the headline.

## Tiny worked example

**Backlog of 5 items, roadmap planning, mixed confidence — RICE chosen.**

| # | Item | R | I | C | E | Score | Note |
|---|---|---|---|---|---|---|---|
| 1 | SSO for enterprise tier | 800 (paying users) | 2 | 0.8 | 6 | **213** | Two largest accounts asked. Confidence high. |
| 2 | Dashboard speed pass | 12,000 (all DAU) | 1 | 0.8 | 3 | **3200** | We have measurements; this is real. |
| 3 | Mobile redesign | 8,000 | 1 | 0.5 | 12 | **333** | Confidence low — we haven't user-tested. |
| 4 | Webhook retries | 2,000 (API users) | 2 | 1.0 | 2 | **2000** | Top support ticket category. |
| 5 | Branded export themes | 400 | 0.5 | 0.8 | 4 | **40** | Nobody asked. |

> **Recommended order:** Dashboard speed → Webhooks retries → Mobile redesign (after lightweight user test) → SSO (gates two big accounts but small reach) → Cut: Branded export themes.
>
> **Sensitivity check:** If the mobile redesign's confidence ticks to 0.8 after one prototype test, it moves above SSO. Run that test before locking the quarter.

## Anti-patterns

- **Defaulting to RICE.** Pick the framework. Don't reach.
- **Scoring without a number for Reach.** "Reach: high" is not a Reach value.
- **Three-decimal precision.** RICE is for ordering, not for ranking 1st vs. 2nd by score.
- **No "cut" recommendation.** You optimized for what to keep instead of what to drop. The cut is the harder, more useful call.
- **Hidden assumptions.** A score without a note next to it is unauditable.
- **Re-litigating Won't items.** MoSCoW only works if "Won't" is enforced.

## Output

- **Format:** Markdown (`.md`)
- **Location:** `tasks/prioritization/`
- **Filename:** `<YYYY-MM-DD>-<topic>.md`

## Final instructions

1. Recommend the framework first. The framework recommendation is part of the deliverable.
2. Show the math. Every score has an assumption next to it.
3. End with the cut and the sensitivity check. Those are the lines that get used in the meeting.

## Attribution

Synthesized from: `anthropics/knowledge-work-plugins · roadmap-management` (Apache 2.0); `phuryn/pm-skills · prioritize-features` (MIT); `deanpeters/Product-Manager-Skills · prioritization-advisor` (MIT); Sean McBride's original RICE writeup at Intercom; Don Reinertsen's *Principles of Product Development Flow* (WSJF); Noriaki Kano's model; Dai Clegg's MoSCoW formulation.
