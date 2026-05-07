---
name: researchstack-idea-finder
description: |
  Topic-finding skill for research projects in computer systems, networking, and AI. Use when the user has a broad
  research area, venue target, resource constraint, or personal interest but does not yet have a one-paper thesis.
  This skill must scan recent papers, generate candidate topics, run each candidate through researchstack-idea-review, and only
  surface the surviving paper-sized ideas.
---

<!-- AUTO-GENERATED for codex. Edit source SKILL.md files, then rerun bun run gen:skill-docs. -->

# Idea Finder

Read [../researchstack/references/workflow.md](../researchstack/references/workflow.md), [../researchstack/references/venues.md](../researchstack/references/venues.md), [../researchstack/references/conference-story-patterns.md](../researchstack/references/conference-story-patterns.md), [../researchstack/references/novelty-boundary.md](../researchstack/references/novelty-boundary.md), and [../researchstack/references/memory.md](../researchstack/references/memory.md).

If the project already has memory, read only the relevant durable context first:

- venue targets already chosen,
- repeated reviewer risks,
- resource constraints,
- topics already rejected,
- project or researcher preferences about claim style and evaluation cost.

This skill is an orchestrator. Do not return raw brainstorm output.

Required flow:

1. Clarify the user's area, venue interest, and constraints.
2. Scan recent papers in the relevant subfield.
3. Generate a small set of candidate topics.
4. For every candidate, run the Closest-Work Gate from `novelty-boundary.md`.
5. Run every candidate through `researchstack-idea-review`.
6. Apply a one-paper envelope filter.
7. Only then return the surviving topic cards.

Hard rules:

- Do not surface unreviewed ideas to the user.
- Do not return directions that need multiple papers to execute cleanly.
- Do not reward vague trend-chasing. Anchor every surviving topic to a real gap relative to recent papers.
- Do not overproduce abstraction papers. First try measurement, mechanism, system, algorithm/control, architecture/co-design, or artifact/evaluation framing.
- Only surface an abstraction-framed topic if it passes the Abstraction Gate in `conference-story-patterns.md`.
- Do not surface topics whose closest direct competitor is unknown.
- Do not surface topics where the novelty boundary is only "this exact combination has not been tried."
- If no candidate survives review, say so plainly and explain what input needs tightening.

The `researchstack-idea-review` gate is mandatory. Use it to reject:

- novelty that collapses under obvious prior work,
- novelty whose closest-work boundary is unknown,
- ideas with evidence burden beyond the user's likely resources,
- topics that are too small to support a paper,
- topics that are too large for one paper,
- ideas with weak venue fit,
- ideas that reduce to engineering effort without scientific contribution.

For each surviving topic, output a compact card using [assets/topic-card-template.md](assets/topic-card-template.md).

For each rejected direction, output a short line using [assets/rejected-directions-template.md](assets/rejected-directions-template.md).

Every surviving topic card must include:

1. A one-paper thesis.
2. Paper type.
3. Why this is timely now.
4. Which recent papers frame the gap.
5. Closest direct/adjacent/industrial/foundational competitors.
6. Novelty boundary label and one-sentence boundary.
7. The irreducible new idea or concrete mechanism.
8. One to two core claims.
9. Minimum believable experiment path.
10. The top reviewer objection.
11. What is explicitly out of scope.
12. The `researchstack-idea-review` verdict and why it survived.

The goal is not to maximize idea count. The goal is to return a few paper-sized theses that already survived skeptical filtering.

If the user chooses one survivor, hand off immediately to:

1. `researchstack-lab-intake`
2. `researchstack-idea-review` again if the thesis changed materially
3. `researchstack-literature-map`
