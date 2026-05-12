# Create Stories

## Purpose

Turn a PRD into small implementation stories.

## Input

Path to PRD.

## Process

1. Load PRD.
2. Extract requirements.
3. Break into stories.
4. Add acceptance criteria.
5. Estimate complexity.
6. Identify dependencies.
7. Order stories by dependency and priority.

## Story Format

\```markdown
## Story: {title}

**Type:** Feature | Enhancement | Technical | Bug | Spike
**Priority:** High | Medium | Low
**Complexity:** Small | Medium | Large
**Depends on:** {story names or None}

### User Story
As a {user}, I want {action}, so that {benefit}.

### Acceptance Criteria
- [ ] Given ..., when ..., then ...
- [ ] Given ..., when ..., then ...

### Technical Notes
- Files or patterns likely involved
- Risks
- Validation notes
\```

## Output

Save to:

`.agents/stories/{feature}.stories.md`
