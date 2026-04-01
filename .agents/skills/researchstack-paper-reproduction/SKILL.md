---
name: researchstack-paper-reproduction
description: |
  Paper reproduction skill for computer systems, networking, and AI research. Use when the user provides a paper PDF,
  appendix, or repository and wants Codex to reconstruct the method, extract claims and experiments, identify missing
  details, plan a faithful reproduction, and judge whether the paper is reproducible, partially reproducible, blocked,
  or contradicted.
---

<!-- AUTO-GENERATED for codex. Edit source SKILL.md files, then rerun bun run gen:skill-docs. -->

# Paper Reproduction

Read [../references/workflow.md](references/workflow.md), [../references/venues.md](references/venues.md), and [../references/review-rubric.md](references/review-rubric.md).

Use the bundled templates:

- [assets/reproduction-brief-template.md](assets/reproduction-brief-template.md)
- [assets/ambiguity-log-template.md](assets/ambiguity-log-template.md)
- [assets/reconstruction-matrix-template.md](assets/reconstruction-matrix-template.md)
- [assets/reproduction-verdict-template.md](assets/reproduction-verdict-template.md)

Treat reproduction as a structured audit, not a vague attempt to "see if it runs."

Core outputs:

1. Reproduction brief.
2. Claim extraction.
3. Method reconstruction.
4. Experiment reconstruction matrix.
5. Ambiguity log.
6. Reproduction verdict.

Work in this order:

1. Extract the paper's top claims and intended contribution.
2. Identify the exact experiments, datasets, workloads, metrics, and baselines that support those claims.
3. Reconstruct the minimal environment and dependency assumptions needed to rerun the evidence.
4. List missing or ambiguous details before pretending the paper is reproducible.
5. Decide which experiments are mandatory for a faithful reproduction and which are nice-to-have.
6. Distinguish four outcomes clearly:
   - reproduced
   - partially reproduced
   - blocked by ambiguity or missing assets
   - contradicted by rerun evidence

Be explicit about failure sources:

- paper underspecification,
- code-release mismatch,
- environment mismatch,
- hidden tuning or preprocessing,
- unstable results,
- invalid assumptions by the reproducer.

Do not equate "result mismatch" with "paper is wrong" unless the evidence is strong enough to support that conclusion.

When a repository is available, connect this skill to:

- `researchstack-experiment-design` for the reproduced experiment matrix,
- `researchstack-experiment-ops` for run tracking,
- `researchstack-artifact-audit` for provenance and credibility,
- `researchstack-peer-review` for reviewer-style reproducibility critique.
