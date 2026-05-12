# Plan

## Purpose

Create an implementation plan through codebase analysis.

## Rule

Plan only. Do not write code.

## Process

### 1. Parse

Understand:

- feature
- user story
- acceptance criteria
- complexity
- systems affected

### 2. Explore

Inspect the codebase first.

Find:

- similar files
- naming conventions
- error patterns
- validation patterns
- test patterns
- UI patterns

### 3. Design

Identify:

- files to create
- files to update
- implementation order
- risks
- validation strategy

### 4. Generate

Save plan to:

`.agents/plans/{feature}.plan.md`

Plan structure:

- Summary
- User Story
- Metadata
- Patterns to Follow
- Files to Change
- Tasks
- Validation
- Acceptance Criteria
- Risks

## Output

Report the plan path and next step: review plan, then implement.
