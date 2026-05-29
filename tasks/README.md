# tasks/

Where work lives. One folder per task, three files inside.

Adapted from Vanja Petreski's PRD system — vanja.io/prd-system-for-claude-code/

## Structure

```
tasks/
├── TEMPLATE.md              # Copy this to start a new task.md
└── {feature-name}/
    ├── task.md              # Requirements, goals, context — stable
    ├── tasks.md             # Generated task list — updated as work progresses
    └── sessions.md          # Running work log — append after every session
```

## Starting a task

```
I want to add [feature]. Use pr_flow/create-prd.mdc.
```

Claude asks clarifying questions, writes `tasks/{feature}/task.md`, and seeds `tasks/{feature}/sessions.md`.

Or copy `TEMPLATE.md` into a new folder and fill it in yourself.

## Starting a session

```
Read tasks/{feature}/task.md and tasks/{feature}/sessions.md.
Give me a summary and let's continue from where we left off.
```

Claude loads the requirements and the full history of prior sessions. No re-explaining.

## Ending a session

```
Update tasks/{feature}/sessions.md with today's progress.
```

Claude appends a dated entry: what was accomplished, decisions made, what's next, current status.

## Generating and processing the task list

```
Generate tasks for tasks/{feature}/task.md using pr_flow/generate-tasks.mdc.
```

Then:

```
Process the task list using pr_flow/process-task-list.mdc.
```

Reply `next` between sub-tasks.

## When a task is done

Move the folder to `tasks/archive/` or delete it. Keep `tasks/` reflecting active work only.

## See also

`tasks/example/` — a worked example showing what task.md and sessions.md look like.
