# Create PRD

## Purpose

Create a Product Requirements Document from a feature brain dump.

## Input

Feature idea, user goal, or conversation context.

## Process

### 1. Extract

Identify:

- problem
- target users
- goals
- non-goals
- constraints
- open questions

If critical information is missing, ask questions before generating.

### 2. Synthesize

Create a coherent product definition.

### 3. Generate

Save the PRD to:

`.agents/PRDs/{kebab-feature-name}.prd.md`

Use this structure:

- Executive Summary
- Problem
- Goals
- Non-goals
- Target Users
- User Stories
- MVP Scope
- Functional Requirements
- Technical Considerations
- Success Criteria
- Risks
- Open Questions
- Implementation Phases

### 4. Validate

Before finalizing, check:

- user stories are testable
- MVP is realistic
- non-goals are explicit
- risks are named
- open questions are not hidden assumptions

## Output

Report:

- PRD path
- assumptions made
- recommended next step: create stories
