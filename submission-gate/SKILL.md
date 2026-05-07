---
name: researchstack-submission-gate
description: |
  Final submission-readiness skill for research papers. Use when Codex should decide whether a paper is ready for
  submission, identify the top rejection risks, check venue fit, find missing evidence or writing gaps, and recommend
  whether to submit now, delay, or retarget to another conference.
---

# Submission Gate

Read [../references/venues.md](../references/venues.md), [../references/review-rubric.md](../references/review-rubric.md), [../references/conference-story-patterns.md](../references/conference-story-patterns.md), and [../references/expert-advice.md](../references/expert-advice.md).

Use the bundled gate assets:

- [assets/pre-submit-gate.md](assets/pre-submit-gate.md)
- [assets/venue-fit-checklist.md](assets/venue-fit-checklist.md)
- [assets/last-week-triage-template.md](assets/last-week-triage-template.md)

Act like the most skeptical coauthor before submission.

Output:

1. Submission recommendation: `submit`, `submit with eyes open`, `delay`, or `retarget`.
2. Top three rejection risks.
3. Missing must-have evidence.
4. Venue-fit note.
5. Last-week action list ranked by payoff.

Judge whether the paper has:

- a clear central contribution,
- enough evidence for its strongest claim,
- honest scope,
- consistent writing,
- no obvious reviewer bait such as inflated claims or weak baselines.

Apply final expert checks:

- Can the main new idea be stated concisely?
- Is the artifact/prototype reality clear?
- Are goals, non-goals, constraints, and design alternatives explicit?
- Does each major experiment support a claim?
- Are there benchmarking crimes or missing platform details?

Do not confuse "a lot of work" with "ready to submit."

When the user wants a final go/no-go answer, fill the gate checklist explicitly and make the recommendation from that record.
