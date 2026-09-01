---
name: researchstack-idea-finder
description: |
  Problem-discovery skill for systems, networking, and AI research. Use when the user has a broad area and is willing
  to choose among paper-sized problems. Do not use it to force a topic change when the user has fixed the topic and
  needs a new method; use method-synthesis instead.
---

# Idea Finder

Read [../references/workflow.md](../references/workflow.md), [../references/venues.md](../references/venues.md), [../references/conference-story-patterns.md](../references/conference-story-patterns.md), [../references/novelty-boundary.md](../references/novelty-boundary.md), [../references/evidence-contracts.md](../references/evidence-contracts.md), and [../references/memory.md](../references/memory.md).

First decide whether topic choice is actually open.

- If the user wants to preserve a topic, hand off to `researchstack-method-synthesis` and do not return replacement topics.
- If the user is planning several papers under one direction, hand off to `researchstack-program-map`.
- Continue here only when problem discovery is wanted.

## Flow

1. Establish area, venue family, resource constraints, available artifacts, and excluded directions.
2. Search recent papers, official systems, and mature open-source implementations.
3. Map concrete failures, unexplained phenomena, deployment mismatches, and missing capabilities.
4. Generate a small candidate set across different paper types; do not vary only the application label.
5. For each candidate, identify the closest topic and method competitors.
6. Run `researchstack-idea-review` and the one-paper envelope.
7. Surface only candidates with an honest contribution and feasible evidence path.

Reject trend labels without a research question, topic novelty backed only by terminology, and directions whose method is ordinary engineering. Do not reject a crowded topic solely because it is crowded; route it to method synthesis when the problem remains important.

For each survivor use [assets/topic-card-template.md](assets/topic-card-template.md) and include:

- one-paper thesis and paper type,
- why the problem matters now,
- topic state and method state,
- closest topic and method competitors,
- irreducible contribution,
- one or two falsifiable claims,
- minimum evidence path,
- top reviewer objection,
- explicit out-of-scope work,
- idea-review verdict.

Use [assets/rejected-directions-template.md](assets/rejected-directions-template.md) for rejected candidates. Distinguish `problem weak`, `method weak`, `evidence infeasible`, and `already done` rather than collapsing them into one novelty label.
