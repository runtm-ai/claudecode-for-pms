# Security Policy

## Reporting a vulnerability

Report security issues privately. Do **not** open a public issue for a
vulnerability.

- Preferred: use GitHub's [private vulnerability reporting](https://github.com/runtm-ai/claudecode-for-pms/security/advisories/new)
  ("Report a vulnerability" under the repo's **Security** tab).
- Alternative: reach the maintainers through the [@runtm-ai](https://github.com/runtm-ai) org.

We aim to acknowledge a report within a week and will keep you updated on the fix.

## In scope

- The website (`site/`) — XSS, injection, dependency vulnerabilities, build-time issues.
- The templates, skills, and `pr_flow/` rules — anything that could lead a user to leak
  data or run unsafe code.
- **Leaked secrets** — if you find a real API key or credential committed anywhere in this
  repo or its history, report it privately so we can rotate it. See
  [best practice 07 — Secrets](https://claudecodeforpms.com/best-practices/secrets) for our
  own recovery playbook.

## Out of scope

- Vulnerabilities in third-party services we link to (report those upstream).
- Social-engineering or physical attacks.

## Defenses already in place

- `gitleaks` runs on every pull request (`.github/workflows/ci.yml`, `.gitleaks.toml`).
- GitHub secret scanning with push protection is enabled on this repo.
- Dependabot watches `site/` npm dependencies and the GitHub Actions we pin.
