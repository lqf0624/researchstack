---
name: researchstack-idea-finder
description: |
  Topic-finding skill for research projects in computer systems, networking, and AI. Use when the user has a broad
  research area, venue target, resource constraint, or personal interest but does not yet have a one-paper thesis.
  This skill must scan recent papers, generate candidate topics, run each candidate through researchstack-idea-review, and only
  surface the surviving paper-sized ideas.
---

# Idea Finder

Read [../references/workflow.md](../references/workflow.md), [../references/venues.md](../references/venues.md), and [../references/memory.md](../references/memory.md).

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
4. Run every candidate through `researchstack-idea-review`.
5. Apply a one-paper envelope filter.
6. Only then return the surviving topic cards.

Hard rules:

- Do not surface unreviewed ideas to the user.
- Do not return directions that need multiple papers to execute cleanly.
- Do not reward vague trend-chasing. Anchor every surviving topic to a real gap relative to recent papers.
- If no candidate survives review, say so plainly and explain what input needs tightening.

The `researchstack-idea-review` gate is mandatory. Use it to reject:

- novelty that collapses under obvious prior work,
- ideas with evidence burden beyond the user's likely resources,
- topics that are too small to support a paper,
- topics that are too large for one paper,
- ideas with weak venue fit,
- ideas that reduce to engineering effort without scientific contribution.

For each surviving topic, output a compact card using [assets/topic-card-template.md](assets/topic-card-template.md).

For each rejected direction, output a short line using [assets/rejected-directions-template.md](assets/rejected-directions-template.md).

Every surviving topic card must include:

1. A one-paper thesis.
2. Why this is timely now.
3. Which recent papers frame the gap.
4. The irreducible new idea.
5. One to two core claims.
6. Minimum believable experiment path.
7. The top reviewer objection.
8. What is explicitly out of scope.
9. The `researchstack-idea-review` verdict and why it survived.

The goal is not to maximize idea count. The goal is to return a few paper-sized theses that already survived skeptical filtering.

If the user chooses one survivor, hand off immediately to:

1. `researchstack-lab-intake`
2. `researchstack-idea-review` again if the thesis changed materially
3. `researchstack-literature-map`
