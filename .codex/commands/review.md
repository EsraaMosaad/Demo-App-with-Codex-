# Validate

## Purpose

Run all project validation checks and report failures.

## Process

Run:

\```bash
npm run typecheck
npm run lint
npm run test
\```

If the project uses different commands, read `AGENTS.md` and use those.

## Output

Save to:

`.agents/reports/validation-{date}.md`

Report:

| Check | Result | Details |
|-------|--------|---------|
| Typecheck | PASS/FAIL | |
| Lint | PASS/FAIL | |
| Tests | PASS/FAIL | |

For failures, include:

- file
- line
- message
- likely fix
