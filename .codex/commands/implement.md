# Implement

## Purpose

Execute an implementation plan with validation loops.

## Input

Path to `.agents/plans/*.plan.md`.

## Process

### 1. Load Plan

Read:

- summary
- files to change
- tasks
- validation commands
- acceptance criteria

### 2. Check Git State

Run:

\```bash
git status
git branch --show-current
\```

Do not overwrite unrelated user changes.

### 3. Execute Tasks

For each task:

- verify assumptions
- read target and adjacent files
- implement only that task
- run relevant validation
- fix failures before continuing

### 4. Full Validation

Run:

\```bash
npm run typecheck
npm run lint
npm run test
\```

Use the project's actual commands from `AGENTS.md`.

### 5. E2E / Manual Smoke Test

If UI changed:

- start dev server
- test happy path
- test at least one edge case
- capture notes or screenshots if available

### 6. Report

Save report to:

`.agents/reports/{feature}-implementation-report.md`

Include:

- tasks completed
- files changed
- tests added
- validation results
- deviations from plan
- remaining risks
