# Sessions: Template folder separation + Vanja PRD system

---

## 2026-05-29 (Session 1)

**Accomplished:**
- Moved CLAUDE.md, DESIGN.md, and docs/* into templates/ folder via git mv
- Wrote a real root CLAUDE.md for the playbook project (filled in: product from README, Next.js 15/React 19/Tailwind stack, 7 shipped skills, Manolo as PM, existing voice rules, no TODOs)
- Updated site/src/lib/content.ts REPO_TEMPLATE_FILES paths to read from templates/CLAUDE.md and templates/DESIGN.md
- Updated site/src/app/contribute/page.tsx to reference templates/CLAUDE.md in both prose and GitHub link
- Updated README.md two-paths section and directory tree to show new templates/ layout
- Updated site/src/content/best-practices/claude-md.mdx step 1 to reference templates/CLAUDE.md

**Decisions:**
- Template files inside templates/CLAUDE.md keep flat references (docs/product.md, DESIGN.md) because users copy templates/* to their own root — references describe the destination layout, not the source
- Project's root CLAUDE.md is filled in concretely (not a template) to serve as actual project memory

**Next steps:**
- Adopt Vanja Petreski's PRD system with cross-session memory (sessions.md files)

**Status:** Completed, pushed to origin as commit bd46800

---

## 2026-05-29 (Session 2 — same day continuation)

**Accomplished:**
- Restructured tasks/ folder: replaced flat prd-*.md and tasks-prd-*.md with folder-per-task pattern (tasks/{feature}/)
- Created tasks/TEMPLATE.md — a simple template users copy when starting a new task
- Created tasks/example/ with a two-session worked example (task.md + sessions.md) showing the magic-link login feature
  - sessions.md demonstrates the running-log pattern: two dated entries with accomplished/decisions/next-steps/status
- Updated pr_flow/create-prd.mdc to:
  - Save to tasks/[feature-name]/task.md (not tasks/prd-[feature-name].md)
  - Seed tasks/[feature-name]/sessions.md with a starter entry
- Updated pr_flow/generate-tasks.mdc to:
  - Read from tasks/[feature-name]/task.md
  - Save to tasks/[feature-name]/tasks.md
- Updated pr_flow/process-task-list.mdc to:
  - Include "starting a session" step: load both task.md and sessions.md for full context
  - Include "ending a session" step: append a dated entry to sessions.md with accomplished/decisions/next-steps/status
- Updated root CLAUDE.md Workflow section to reflect new folder convention (create tasks/{feature}/task.md, etc.)
- Created site/src/content/best-practices/prd-sessions.mdx — practice #11 with full narrative, 5 steps, anti-patterns, and credit to Vanja Petreski at vanja.io
- Updated site/src/lib/practices.ts to add practice #11 entry
- Updated README.md "The 10 practices" → "The 11 practices", added item 11 to the list
- Committed all changes: "Adopt Vanja's PRD system and add as best practice #11"
- Pushed to origin as branch feat/templates-folder

**Decisions:**
- Vanja's system adapted for in-repo use: tasks/ folder at project root (not ~/prd)
- sessions.md uses dated headers (## YYYY-MM-DD) with standard sections: Accomplished / Decisions / Next steps / Status
- tasks/example/ shows a realistic two-session log, not an empty template
- Best practice #11 credits Vanja directly and links to his blog post
- pr_flow/process-task-list.mdc makes sessions.md updates explicit and mandatory (not optional)

**Next steps:**
- Create a PR to merge feat/templates-folder into main
- Review and approve the structure with the team

**Status:** Completed, pushed to origin as commit 6038c5e
