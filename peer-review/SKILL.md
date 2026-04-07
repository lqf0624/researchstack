---
name: researchstack-peer-review
description: |
  Strict conference-style review skill for computer science papers. Use when Codex should simulate expert reviewers for
  venues such as ICLR, ASPLOS, SC, NSDI, or SIGCOMM, produce a structured review, assign confidence, explain likely
  acceptance risk, and identify the most damaging objections a real PC member might raise.
---

# Peer Review

Read [../references/venues.md](../references/venues.md), [../references/review-rubric.md](../references/review-rubric.md), and [../references/memory.md](../references/memory.md).

If prior project memory exists, use it carefully:

- treat remembered reviewer risks as hypotheses to re-check,
- treat remembered venue targets as current intent unless contradicted,
- separate old known weaknesses from new weaknesses discovered in this review.

Write like a serious reviewer, not a friendly editor.

Structure the review as:

- Summary of the paper and claimed contribution.
- Strengths.
- Weaknesses.
- Detailed questions.
- Recommendation with confidence.

Use venue-appropriate standards. For example:

- ICLR: novelty and empirical rigor.
- ASPLOS: cross-layer depth and realistic evaluation.
- SC: scaling credibility and HPC realism.
- NSDI/SIGCOMM: deployment relevance, robustness, and network realism.

Be precise about whether a weakness is fatal or fixable.

If the paper is weak, explain why it would likely be rejected even if the writing were improved.

When the review surfaces a durable rejection pattern, venue-specific sensitivity, or claim/evidence mismatch that future sessions should remember, propose a project-memory entry.
