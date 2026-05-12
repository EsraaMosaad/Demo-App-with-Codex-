# Security Review

## Purpose

Review the implementation for common security risks.

## Process

Check for:

- input validation issues
- unsafe user input handling
- missing authorization checks
- exposed secrets
- insecure dependencies
- unsafe database access
- XSS risks
- injection risks

Run validation commands if needed.

## Output

Save review to:

`.agents/reviews/security-review-{feature}.md`

Include:

- critical risks
- high risks
- medium risks
- recommendations
- validation summary