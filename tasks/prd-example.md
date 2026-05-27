# PRD — Magic-link login

> Example PRD. Real ones live alongside this file. Delete me when you start your first one.

## 1. Introduction / Overview

We need a passwordless login flow for first-time users on the marketing site. Users today drop off when asked to set a password before they've seen value. Magic links let them in with one click from email.

**Goal:** halve the signup-to-active-session drop-off rate.

## 2. Goals

1. Reduce signup → first-active-session drop from 38% to <20% within 60 days of launch.
2. Zero password-reset tickets for users who used magic link (they have no password to reset).
3. Email delivery p95 under 60 seconds.

## 3. User Stories

- As a **first-time visitor**, I want to sign up without creating a password, so I can try the product without committing.
- As a **returning user on a new device**, I want a quick way back in without remembering a password.
- As an **eng on call**, I want to see magic-link delivery latency on a dashboard, so I know when email is degraded.

## 4. Functional Requirements

1. Login screen has an email field and a single "Email me a magic link" button.
2. Submitting the form sends a one-time link valid for 15 minutes.
3. Clicking the link signs the user in and redirects to `/dashboard`.
4. If the link is expired or already used, show "Link expired. Request a new one." with the form pre-filled.
5. Email subject: *"Your sign-in link"*. Body: plain-text with a single CTA button.
6. Rate-limit: max 3 magic-link requests per email per hour.
7. Existing password-login flow remains available behind a "Use password instead" link.

## 5. Non-Goals

- We are NOT removing the password flow yet.
- We are NOT implementing SSO (Google, GitHub) in this scope.
- We are NOT supporting SMS as an alternative channel.

## 6. Design Considerations

- The login screen should match the existing brand. See `DESIGN.md`.
- The email template should use our existing transactional template, not invent a new one.

## 7. Technical Considerations

- Email goes through our existing Resend account.
- Token storage: short-lived JWT, no DB row. The `jti` claim is enough.
- Rate-limit uses our existing Redis instance.

## 8. Success Metrics

- Drop-off rate (signup → first session) — primary.
- Magic-link email delivery success rate — guardrail.
- Magic-link expiration rate (links that expired before use) — secondary.

## 9. Open Questions

- Do we send a confirmation email *after* first successful login? (Lean no.)
- What's the copy on the "link expired" screen? (Marketing to draft.)
