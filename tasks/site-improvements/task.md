# Task: Template folder separation + Vanja PRD system

## Goal

Reorganize the repo to clearly separate user-facing templates from project-specific documentation, and adopt Vanja Petreski's PRD management system with cross-session memory via `sessions.md` files.

## Requirements

- [x] Move CLAUDE.md, DESIGN.md, and docs/* to `templates/` folder
- [x] Write a real root `CLAUDE.md` for the playbook project (filled in, no TODOs)
- [x] Update site code to reference templates at new paths (REPO_TEMPLATE_FILES, contribute page, README)
- [x] Restructure tasks/ folder to use folder-per-task pattern with task.md + tasks.md + sessions.md
- [x] Update all three pr_flow/*.mdc rules to match new paths and include sessions.md workflow
- [x] Add practice #11: "Log every session so Claude can pick up where you left off" (with Vanja credit)
- [x] Update README.md to reflect new structure and 11 practices

## Technical notes

- Template files keep flat references (docs/product.md, DESIGN.md) because users copy them to their own root
- Site code reads templates at new paths via REPO_TEMPLATE_FILES array in content.ts
- pr_flow/process-task-list.mdc now includes instructions to load both task.md and sessions.md at session start, and to update sessions.md at session end
- tasks/example/ shows a two-entry sessions.md demonstrating the running-log pattern

## Out of scope

- Publishing the changes (creating a PR is separate)
- Updating existing tasks to the new structure (only documented the pattern)
- Merging to main (branch stays as feat/templates-folder until review)

## Open questions

None — all requirements completed.
