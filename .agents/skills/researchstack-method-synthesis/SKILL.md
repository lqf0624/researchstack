---
name: researchstack-method-synthesis
description: |
  Method-design skill for computer systems, networking, and AI research. Use when the topic is fixed or prior work
  already studies a similar problem, but the user needs genuinely different mechanisms, algorithms, interfaces, or
  system designs rather than another topic suggestion or superficial novelty claim.
---

<!-- AUTO-GENERATED for codex from researchstack v0.3.0. Edit source SKILL.md files, then regenerate from the source checkout. -->

# Method Synthesis

Read [../researchstack/references/novelty-boundary.md](../researchstack/references/novelty-boundary.md), [../researchstack/references/conference-story-patterns.md](../researchstack/references/conference-story-patterns.md), and [../researchstack/references/evidence-contracts.md](../researchstack/references/evidence-contracts.md).

Keep the user's topic fixed unless the user explicitly asks for new topics.

## Required Flow

1. State the exact problem, semantic unit, performance target, deployment lifecycle, and resource constraints.
2. Audit established mechanisms in papers, official documentation, mature open-source systems, and production implementations.
3. Build an established-mechanism table: reusable, adaptable, and incompatible mechanisms, with evidence for each judgment.
4. Identify the unresolved bottleneck or failure mode after strong established mechanisms are considered.
5. Build a method design space across information, action granularity, objective, coordination boundary, time/state model, layer interface, failure model, and resource cost.
6. Generate several candidate mechanisms on the same topic. Use different design-space moves rather than cosmetic variants.
7. Stress-test each candidate against the closest method competitor and a strong engineered baseline.
8. Keep only candidates with a plausible mechanism chain and a discriminating experiment.

Useful method-generation moves include:

- expose a signal hidden by the current layer boundary,
- change the decision or scheduling granularity,
- replace a proxy objective that misranks real decisions,
- move from static to stateful or feedback-driven control,
- coordinate components that fail under independent local decisions,
- exploit a new hardware/runtime/compiler/network contract,
- adapt an established mechanism to constraints it cannot satisfy unchanged,
- turn a measured failure mode into a minimal new mechanism.

Combining techniques is not enough. A combination must create a causal interaction, capability, or tradeoff that neither component provides alone.

## Candidate Collapse Tests

Reject or revise a candidate when:

- one extra heuristic, state variable, or tuning pass in the baseline erases it,
- the difference is only code volume, framework choice, or packaging,
- required dynamic work is moved outside the end-to-end measured lifecycle,
- it changes terminology but not information, decisions, or outcomes,
- the claimed mechanism has no prediction that differs from a rival explanation,
- deployment cost or semantic change invalidates the comparison.

## Output

Use [assets/design-space-matrix.md](assets/design-space-matrix.md) and [assets/method-candidate-card.md](assets/method-candidate-card.md).

Return:

1. fixed topic and constraints,
2. established-mechanism audit,
3. method design-space matrix,
4. two to four surviving method cards,
5. rejected candidates and collapse reasons,
6. the first minimal experiment for each survivor,
7. a recommendation about which candidate to test first and why.

Do not automatically select a winner from an opaque score. Explain the tradeoff, uncertainty, and evidence needed. If no method survives, report which capability or new evidence would reopen the topic before suggesting a topic change.
