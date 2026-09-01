---
name: researchstack-idea-review
description: |
  Skeptical but generative review for systems, networking, and AI ideas. Use to judge topic significance, method novelty,
  mechanism plausibility, evidence burden, scope, and venue fit without treating a crowded topic as automatic rejection.
---

<!-- AUTO-GENERATED for codex from researchstack v0.3.0. Edit source SKILL.md files, then regenerate from the source checkout. -->

# Idea Review

Read [../researchstack/references/venues.md](../researchstack/references/venues.md), [../researchstack/references/review-rubric.md](../researchstack/references/review-rubric.md), [../researchstack/references/conference-story-patterns.md](../researchstack/references/conference-story-patterns.md), [../researchstack/references/expert-advice.md](../researchstack/references/expert-advice.md), [../researchstack/references/novelty-boundary.md](../researchstack/references/novelty-boundary.md), and [../researchstack/references/evidence-contracts.md](../researchstack/references/evidence-contracts.md).

Default posture: skeptical, specific, and generative.

## Review Order

1. State the topic, semantic unit, constraints, and strongest truthful paper type.
2. Audit established mechanisms before crediting a new one.
3. Identify closest topic, method, adjacent, industrial/open-source, and foundational work.
4. Assign separate topic and method states from `novelty-boundary.md`.
5. Test the mechanism chain, rival explanations, evidence burden, and deployment realism.
6. Decide whether the idea is publishable, needs a new method on the same topic, or is infeasible under current constraints.

If the contribution is framed as an abstraction, apply the Abstraction Gate from `conference-story-patterns.md`. Do not use abstraction language to hide an under-specified method.

Topic overlap alone cannot justify `incremental` or `already done`. Use `already done` only when problem, method, assumptions, and claim substantially match. A crowded topic with a distinct method may be stronger than a new topic with a familiar method.

## Output

- **Verdict**: `promising`, `borderline`, or `not yet publishable`.
- **Innovation profile**: paper type, topic state, method state, and one-sentence boundary.
- **Strengths**: only those that survive closest-work comparison.
- **Fatal or major risks**: distinguish problem, method, evidence, and feasibility risks.
- **Mechanism test**: causal chain, primary prediction, rival explanation, discriminating experiment, and falsifier.
- **Story candidate**: venue story pattern, systems X/Y/Z statement, closest-work contrast, and first decisive figure or experiment.
- **Salvage path**: concrete next move.

When the topic matters but the proposed method collapses into a strong baseline, route to `researchstack-method-synthesis` and preserve the topic. Recommend a new topic only after the relevant method space is audited and no credible candidate survives.

Do not offer fake encouragement, but do not use novelty review only as a veto. A senior coauthor must explain how a weak idea could become a stronger method, measurement, system, control, co-design, or artifact paper.
