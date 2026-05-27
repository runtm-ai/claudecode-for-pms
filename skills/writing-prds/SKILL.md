---
name: writing-prds
description: |
  Authoring a Product Requirements Document — the spec a junior dev can build
  from. Use when the user says "write a PRD", "spec out a feature", "what are
  the requirements for X", "draft a feature brief", or mentions a feature they
  want to scope. Pairs with `pr_flow/create-prd.mdc` for the full workflow.
allowed-tools:
  - Read
  - Write
  - Edit
---

# Rule: Writing a PRD

## Goal

Turn a one-line feature ask into a Product Requirements Document a junior developer can implement without having to come back with twenty questions. A PRD answers four things a prompt usually doesn't: **what problem we're solving, who it's for, what "done" looks like, and what's out of scope.** Hand Claude a prompt without those and it picks its own answers — the prompt becomes a negotiation. A PRD makes it a brief.

## Process

1. **Receive the feature request.** One sentence is fine.
2. **Ask clarifying questions** (see below) — letter/number options so the user replies with selections, not paragraphs. Never skip this step, even if the request seems clear.
3. **Draft the PRD** using the structure below.
4. **Show it to the user, ask for corrections, refine.**
5. **Save** as `tasks/prd-<feature-name>.md`.

## Clarifying Questions

Pick from these categories. Ask 4–7 questions, not all of them. Format each as a numbered or lettered list so the user can reply "1, B, 2, A".

**Problem & Goal**
- What problem does this solve?
- Why now? What changes if we don't ship this?
- A. New behavior. B. Speeds up an existing behavior. C. Fixes a broken behavior.

**Users**
- Who's the primary user? Pick one: A. New visitor. B. Existing customer. C. Internal team. D. Partner / API consumer.
- Roughly how many of them, and how often will they hit this?

**Core functionality**
- What's the smallest version that delivers the value? List the top 3 actions in order of importance.

**Acceptance criteria**
- How will we know it's working? Name one metric and one observable behavior.

**Scope**
- What's explicitly *out* of scope for this version? List 2–3 things this feature will NOT do.

**Data**
- What does the feature read, write, or transform? Is any of it sensitive?

**Design**
- Is there a mockup, a Figma link, an existing pattern to match, or do you want Claude to propose UI?

**Edge cases**
- What happens on: empty state, error state, rate-limit, offline, slow network?

## PRD Structure

The output is one Markdown file with these sections, in this order.

1. **Introduction / Overview** — one paragraph. The feature in plain words and the problem it solves.
2. **Goals** — numbered list. Each goal is specific and measurable.
3. **User Stories** — `As a [user], I want to [action] so that [benefit].` Three to seven.
4. **Functional Requirements** — numbered. Each starts with "The system must…". Junior-dev-clear.
5. **Non-Goals (Out of Scope)** — bullet list. Each line starts with "We are NOT…".
6. **Design Considerations** — links to mockups, references to existing components, brand notes.
7. **Technical Considerations** — known constraints, dependencies, "should integrate with X".
8. **Success Metrics** — primary, guardrail, secondary. Number the threshold if you can.
9. **Open Questions** — list what you couldn't pin down. Don't pretend the doc is final when it isn't.

## Target Audience

Assume the reader is a **junior developer**. Requirements must be explicit and unambiguous. Avoid jargon when a plain word works. If the team has a `docs/architecture.md` or `CLAUDE.md`, reference it instead of restating it.

## Tiny worked example

> *Feature: "passwordless login"*
>
> **Functional Requirements (excerpt):**
> 1. The login screen shall display an email field and a single "Email me a sign-in link" button.
> 2. The system shall send a one-time link valid for 15 minutes.
> 3. Clicking the link shall sign the user in and redirect them to `/dashboard`.
> 4. If the link is expired or already used, the system shall display "Link expired. Request a new one." with the email pre-filled.
> 5. The system shall rate-limit magic-link requests to 3 per email per hour.

Numbered, "system shall" form, one behavior per line. No "robust authentication flow". A junior dev reads this and writes it.

## Anti-patterns

- A PRD without a Non-Goals section. You will regret this within a week.
- "Build a feature" written in chat instead of a file Claude can re-read.
- Acceptance criteria that are vibes ("works well", "feels fast"). Pick a number.
- Functional requirements written like marketing copy. Boring is correct.
- Skipping the clarifying questions to "save time". This costs time downstream.

## Output

- **Format:** Markdown (`.md`)
- **Location:** `tasks/`
- **Filename:** `prd-<feature-name>.md` (kebab-case)

## Final instructions

1. Do NOT start implementing the feature from the PRD. The PRD's job is the spec.
2. Always ask the clarifying questions before writing. If the user pushes to skip them, write the PRD with explicit `[TBD]` markers for the answers you skipped.
3. After delivering the draft, ask one question: *"What's wrong with it?"* Then revise.

## Attribution

Synthesized from: `anthropics/knowledge-work-plugins · feature-spec` (Apache 2.0); the create-prd.mdc rule popularized in the Cursor community and updated for Claude Code; Andre Albuquerque on Aakash Gupta's [Product Growth podcast](https://www.aakashg.com/albuquerque-podcast/) (the 4-level Lovable→CC→Cursor→Agents framing); Cat Wu / Anthropic team on Lenny's Newsletter; Marcus Moretti / [Every](https://every.to/source-code/claude-code-for-product-managers) on roadmap-then-PRD; Ryan Nystrom (Notion) on [chatprd.ai](https://www.chatprd.ai/how-i-ai/ryan-nystrom-notion-workflows-for-engineering-velocity) for the spec-first dev pattern.
