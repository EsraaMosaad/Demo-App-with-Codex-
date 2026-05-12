# AGENTS.md

This file provides guidance to Codex when working in this repository.

## Commands

Use these commands from the project root:

```bash
npm run dev
npm run build
npm run lint
npm run test
npm run typecheck
```

## Self-Correction Workflow

After writing or modifying code:

1. Run typecheck.
2. Run lint.
3. Run tests.
4. Read errors carefully.
5. Fix issues.
6. Re-run until clean.

Never report a feature as complete while validation is failing.

## Architecture

Use vertical slices under `src/features/{feature}`.

Each feature owns:

- models/types
- schemas
- repository or data access
- service/business logic
- errors
- components
- tests
- public exports

## Feature Structure

```text
src/features/{feature}/
  models.ts
  schemas.ts
  repository.ts
  service.ts
  errors.ts
  index.ts
  components/
  tests/
```

## Code Style

- TypeScript strict.
- Named exports unless framework requires default exports.
- Keep changes scoped.
- Do not modify unrelated files.
- Prefer small functions.
- Do not use `any` unless justified.
- Use explicit domain errors.
- Validate user input with Zod.

## Testing Rules

- New business logic needs tests.
- Validation schemas need tests.
- Error cases need tests.
- UI behavior should have component or E2E coverage when practical.

## Codex Workflow

Use the command files under `.codex/commands/`:

- create-prd
- create-stories
- plan
- implement
- validate
- review
- security-review
- prime

Generated artifacts go under `.agents/`.

## System Evolution

If Codex makes a mistake, fix the source of the mistake:

- update AGENTS.md
- update a command file
- update a template
- add on-demand context
- add a validation checklist

Every failure should make the AI layer better.