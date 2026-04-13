---
name: researchstack-next-step
description: |
  Next-step triage skill for long-running research projects. Use when the user is mid-paper, mid-experiment,
  mid-writing, or generally stuck and needs a clear recommendation for which researchstack skill to use next,
  what not to do yet, and why.
---

<!-- AUTO-GENERATED for codex. Edit source SKILL.md files, then rerun bun run gen:skill-docs. -->

# Next Step

Read [../references/workflow.md](references/workflow.md) and [../references/memory.md](references/memory.md).

If the project is ongoing, inspect relevant project memory first via the `researchstack-learn` workflow. Pull in only high-signal context:

- current thesis,
- venue and deadline,
- known reviewer risks,
- experiment status,
- artifact or reproducibility constraints,
- writing or framing preferences,
- rejected directions.

This skill is a decision layer, not an execution skill.

The job is to answer:

> Given the current research state, what should the user do next?

Required output:

1. Current stage.
2. Blocking mismatch.
3. Recommended next skill, usually exactly one and at most two.
4. Why this step beats the alternatives.
5. What not to do yet.
6. A short follow-up chain after the recommended step.

Use [assets/next-step-decision-template.md](assets/next-step-decision-template.md).

Stage labels:

- idea formation,
- literature positioning,
- evidence building,
- experiment operations,
- artifact hardening,
- writing,
- layout and figure polish,
- submission triage,
- review and rebuttal.

Common blocking mismatches:

- thesis exists but novelty is untested,
- thesis exists but related-work boundary is unclear,
- claims are broader than current evidence,
- results exist but artifact provenance is weak,
- figures exist but claim-to-evidence mapping is unclear,
- writing started before experiment design is locked,
- deadline pressure means scope should shrink rather than expand,
- reviewer risk is known but not answered by an experiment.

Decision rules:

- If the thesis is vague, recommend `researchstack-lab-intake` or `researchstack-idea-refine`.
- If the user only has an area, recommend `researchstack-idea-finder`.
- If novelty is untested, recommend `researchstack-idea-review`.
- If the closest competitors are unclear, recommend `researchstack-literature-map`.
- If claims and evaluation are not aligned, recommend `researchstack-experiment-design`.
- If experiments are chaotic or results are hard to promote, recommend `researchstack-experiment-ops`.
- If numbers or figures cannot be traced, recommend `researchstack-artifact-audit`.
- If implementation could invalidate conclusions, recommend `researchstack-code-review`.
- If evidence is stable and the thesis is locked, recommend `researchstack-paper-write`.
- If writing exists but figures/tables/captions are weak, recommend `researchstack-figure-studio` or `researchstack-paper-layout`.
- If the user is near a deadline, recommend `researchstack-submission-gate`.
- If a draft is complete enough to attack, recommend `researchstack-peer-review`.
- If reviews exist, recommend `researchstack-rebuttal-coach`.

Be decisive. Do not list the whole skill catalog.

If there is not enough information to decide, ask for only the missing state needed to choose the next skill:

- current thesis,
- strongest current evidence,
- closest baseline or related paper,
- venue or deadline,
- what artifact/code/result exists now.

When a durable decision emerges, suggest recording it with `researchstack-learn`.
