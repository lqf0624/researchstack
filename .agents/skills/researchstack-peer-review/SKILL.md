---
name: researchstack-peer-review
description: |
  Strict conference-style review skill for computer science papers. Use when Codex should simulate expert reviewers for
  venues such as ICLR, ASPLOS, SC, NSDI, or SIGCOMM, produce a structured review, assign confidence, explain likely
  acceptance risk, and identify the most damaging objections a real PC member might raise.
---

<!-- AUTO-GENERATED for codex from researchstack v0.3.0. Edit source SKILL.md files, then regenerate from the source checkout. -->

# Peer Review

Read [../researchstack/references/venues.md](../researchstack/references/venues.md), [../researchstack/references/review-rubric.md](../researchstack/references/review-rubric.md), [../researchstack/references/conference-story-patterns.md](../researchstack/references/conference-story-patterns.md), [../researchstack/references/expert-advice.md](../researchstack/references/expert-advice.md), and [../researchstack/references/memory.md](../researchstack/references/memory.md).

If prior project memory exists, use it carefully:

- treat remembered reviewer risks as hypotheses to re-check,
- treat remembered venue targets as current intent unless contradicted,
- separate old known weaknesses from new weaknesses discovered in this review.

Write like a serious reviewer, not a friendly editor. Do not treat topic popularity as a proxy for method novelty.

Structure the review as:

- Summary of the paper and claimed contribution.
- Strengths.
- Weaknesses.
- Detailed questions.
- Recommendation with confidence.

Run distinct reviewer lenses before combining the verdict:

- **Problem and positioning**: significance, topic state, closest topic and method work.
- **Method and systems design**: method delta, mechanism chain, design alternatives, semantic integrity, and deployment cost.
- **Evaluation and artifact**: rival predictions, baseline fairness, end-to-end boundary, reproducibility, and external validity.
- **Communication**: whether claims, sources, figures, and limitations can be audited.

Report disagreements between lenses instead of forcing false consensus.

Use venue-appropriate standards. For example:

- ICLR: novelty and empirical rigor.
- ASPLOS: cross-layer depth and realistic evaluation.
- SC: scaling credibility and HPC realism.
- EuroSys/OSDI: system design, implementation realism, operational lessons, and SLO/cost/reliability evidence.
- NSDI/SIGCOMM: deployment relevance, robustness, and network realism.

Use the expert-advice checks when relevant:

- Levin/Redell: new idea, reality, lessons, focus.
- Irene Zhang: why/how/results, Y/Z target setting, alternatives for each design choice.
- Kayvon Fatahalian: goals, non-goals, constraints, design decisions, and causal evaluation.
- Gernot Heiser: benchmarking crimes.

Be precise about whether a weakness is fatal or fixable.

If the topic is crowded but the method is distinct, review the method on its merits. If the method is weak, state which design-space dimension or experiment could repair it before recommending a topic change.

If the paper is weak, explain why it would likely be rejected even if the writing were improved.

When the review surfaces a durable rejection pattern, venue-specific sensitivity, or claim/evidence mismatch that future sessions should remember, propose a project-memory entry.
