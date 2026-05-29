# Task: Magic-link login

> Example task folder. Delete this when you start your first real one.

## Goal

Add a passwordless login flow for first-time users. Users drop off when asked to set a password before they've seen value. Magic links let them sign in with one click from email. Target: halve the signup-to-active-session drop-off rate from 38% to under 20%.

## Requirements

- [ ] Email field + "Email me a magic link" button on the login screen
- [ ] One-time link valid for 15 minutes; clicking it signs the user in and redirects to `/dashboard`
- [ ] Expired or already-used link shows "Link expired. Request a new one." with form pre-filled
- [ ] Rate-limit: max 3 magic-link requests per email per hour
- [ ] Existing password login remains available via "Use password instead" link
- [ ] Email subject: "Your sign-in link" — plain text, single CTA button

## Technical notes

- Email via existing Resend account
- Token: short-lived JWT using `jti` claim for one-time use — no DB row needed
- Rate-limit via existing Redis instance
- Session storage: HTTP-only cookies, 7-day expiry with sliding window

## Out of scope

- SSO (Google, GitHub) — separate initiative
- SMS as an alternative channel
- Removing the existing password flow

## Open questions

- Send a confirmation email after first successful login? (Lean no.)
- What's the copy on the "link expired" screen? (Marketing to draft.)
