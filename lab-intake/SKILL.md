---
name: researchstack-lab-intake
description: |
  Intake skill for new research directions in computer systems, networking, and AI. Use when the user has a
  rough idea, partial implementation, benchmark intuition, or venue target and needs to turn it into a clear
  paper plan with thesis, hypotheses, workstreams, and next decisions.
---

# Lab Intake

Read [../references/workflow.md](../references/workflow.md), [../references/venues.md](../references/venues.md), [../references/conference-story-patterns.md](../references/conference-story-patterns.md), [../references/novelty-boundary.md](../references/novelty-boundary.md), and [../references/memory.md](../references/memory.md).

If this is not a brand-new project, read project memory and researcher preferences first. Pull in only relevant durable context:

- prior thesis definitions,
- venue targets already chosen,
- recurring reviewer risks,
- experiment constraints,
- writing or claim-style preferences.

Produce a compact research brief with:

1. Target venue and why it fits.
2. Paper type: measurement, mechanism, system, algorithm/control, architecture/co-design, artifact/evaluation, or abstraction.
3. One-sentence thesis.
4. Core technical bet.
5. Fixed topic boundary and whether topic choice is open.
6. Candidate method delta relative to the closest method competitor.
7. Assumptions and threat model.
8. Required evidence to make the paper believable.
9. Highest-risk unknowns.
10. Immediate next experiments or reading tasks.

Do not default to an abstraction-centric thesis. If the paper type is "abstraction", explicitly check the Abstraction Gate in `conference-story-patterns.md`; otherwise prefer a concrete measurement, mechanism, system, control, or artifact framing.

Push the user toward a falsifiable framing. Replace "this seems useful" with:

- what changes,
- for whom,
- under which workloads or conditions,
- relative to which baseline,
- with which metric.

If the idea is too broad, split it into:

- a main contribution that can fit one paper,
- stretch ideas that belong in future work,
- engineering tasks that are necessary but not publication contributions.

If the user has a fixed topic but no defensible method yet, route to `researchstack-method-synthesis`; do not solve the problem by changing topics. If the direction is expected to support several papers, route program-level branches to `researchstack-program-map` and keep this intake scoped to one selected paper.

When choosing venues, reason from contribution type:

- algorithmic or representation novelty points toward ICLR,
- hardware-software co-design toward ASPLOS,
- large-scale performance engineering toward SC,
- deployable networked systems toward NSDI,
- protocol and network mechanism novelty toward SIGCOMM.

At the end, propose 1 to 3 durable memory entries when the session clarified something future work should inherit, especially:

- the real thesis,
- a venue decision and why,
- a project constraint,
- a killer reviewer risk discovered early.
