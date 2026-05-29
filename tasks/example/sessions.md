# Sessions: Magic-link login

---

## 2026-01-14

**Accomplished:**
- Scaffolded the login screen UI component
- Wired up the "Email me a magic link" form to the API endpoint
- Implemented JWT generation and email dispatch via Resend

**Decisions:**
- Using `jti` claim for one-time use tracking (no DB row needed — simpler, good enough for our scale)
- Email subject: "Your sign-in link" — plain text, single CTA
- HTTP-only cookies for session storage over localStorage (more secure)

**Next steps:**
- Implement the link-click handler and redirect logic
- Add the "link expired" error state with pre-filled form
- Add rate-limiting middleware (3 requests/email/hour via Redis)

**Status:** In progress

---

## 2026-01-15

**Accomplished:**
- Implemented link-click handler — validates JWT, creates session, redirects to `/dashboard`
- Added "link expired" error state with pre-filled email field
- Wired up rate-limiting middleware using existing Redis client

**Decisions:**
- "Link expired" state reuses the login form component — no new UI needed
- Rate-limit returns a 429 with a user-facing message ("Too many requests. Try again in an hour.")

**Next steps:**
- Write tests for the auth flow (happy path + expired link + rate-limit)
- QA on mobile — confirm email CTA renders correctly in Gmail/Apple Mail
- Deploy to staging and run drop-off metrics against baseline

**Status:** In progress
