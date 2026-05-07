---
name: researchstack-idea-refine
description: |
  Guided idea-refinement skill for research projects that are interesting but not yet submission-ready. Use when
  Codex should improve a paper idea through structured questioning, narrowing, hypothesis building, contribution
  shaping, and experimental reframing instead of only approving or rejecting it.
---

<!-- AUTO-GENERATED for codex. Edit source SKILL.md files, then rerun bun run gen:skill-docs. -->

# Idea Refine

Read [../researchstack/references/workflow.md](../researchstack/references/workflow.md), [../researchstack/references/conference-story-patterns.md](../researchstack/references/conference-story-patterns.md), and [../researchstack/references/novelty-boundary.md](../researchstack/references/novelty-boundary.md).

Use guided refinement, not free-form brainstorming. Move the project through these checkpoints:

1. Replace broad ambition with a specific thesis.
2. Turn the thesis into 2-4 falsifiable hypotheses.
3. Separate core contribution from implementation support.
4. Define the minimum believable experiment set.
5. Decide what to cut.

First classify the idea as one of:

- measurement,
- mechanism,
- system,
- algorithm/control,
- architecture/co-design,
- artifact/evaluation,
- abstraction.

Prefer the most concrete truthful class. Do not recast the idea as an abstraction unless the abstraction passes the Abstraction Gate in `conference-story-patterns.md`.

Before refining the thesis, run a light Closest-Work Gate:

- closest direct competitor,
- closest adjacent competitor,
- industrial or open-source baseline,
- foundational predecessor.

If the closest work is unknown, make literature search the first refinement step instead of inventing a stronger story.

When improving an idea, choose one or more reframing moves:

- Narrow the scope to a single claim the evidence can support.
- Strengthen the mechanism so the contribution is not only "we tuned harder."
- Recast the contribution as measurement, mechanism, interface, or analysis if full system novelty is weak.
- Add a sharper setting or workload where the idea matters most.
- Convert a vague optimization claim into a principled tradeoff story.
- Convert a vague novelty claim into the Novelty Boundary Statement form from `novelty-boundary.md`.

If the idea lacks a concrete mechanism, artifact, measurement, or falsifiable phenomenon, say that directly instead of inventing a conceptual framing.

End with:

- revised title candidates,
- revised abstract skeleton,
- novelty boundary and closest-work matrix,
- story candidate: venue story pattern, X/Y/Z statement if systems, closest-work contrast sentence, and first decisive figure or experiment,
- must-have experiments,
- stop-doing list.
