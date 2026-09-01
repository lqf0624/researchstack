---
name: researchstack-program-map
description: |
  Research-program planning skill for computer systems, networking, and AI. Use when a durable topic or grant direction
  should support several non-duplicative papers, with explicit shared infrastructure, distinct theses, dependencies,
  evidence paths, and stop conditions rather than repeated topic switching or salami slicing.
---

<!-- AUTO-GENERATED for codex from researchstack v0.3.0. Edit source SKILL.md files, then regenerate from the source checkout. -->

# Program Map

Read [../researchstack/references/workflow.md](../researchstack/references/workflow.md), [../researchstack/references/novelty-boundary.md](../researchstack/references/novelty-boundary.md), and [../researchstack/references/memory.md](../researchstack/references/memory.md).

Keep the program topic stable while separating paper-sized contributions.

Build the program from:

- durable scientific question,
- shared system or experimental infrastructure,
- method design-space axes,
- measurement and mechanism unknowns,
- resource and timeline constraints,
- target venue families.

Each paper candidate must have its own:

- research question,
- irreducible contribution,
- closest-work and method boundary,
- claim and evidence path,
- decisive experiment,
- artifact boundary,
- reason it is not merely a subsection of another candidate.

Shared code, datasets, simulators, hardware access, and benchmark harnesses are program assets, not repeated contributions. Do not create multiple papers by renaming the same mechanism, slicing one experiment matrix, or moving one system component between manuscripts.

Use [assets/program-roadmap-template.md](assets/program-roadmap-template.md).

Produce:

1. program thesis and stable topic boundary,
2. shared infrastructure map,
3. a portfolio of paper candidates across near-, mid-, and longer-term horizons,
4. dependency and reuse map,
5. overlap and salami-slicing audit,
6. venue and evidence-risk notes,
7. stop, merge, or pivot conditions for every candidate.

Route each selected candidate to `researchstack-lab-intake`, `researchstack-method-synthesis`, and `researchstack-idea-review` before major implementation.
