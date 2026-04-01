---
name: researchstack-lab-intake
description: |
  Intake skill for new research directions in computer systems, networking, and AI. Use when the user has a
  rough idea, partial implementation, benchmark intuition, or venue target and needs to turn it into a clear
  paper plan with thesis, hypotheses, workstreams, and next decisions.
---

<!-- AUTO-GENERATED for codex. Edit source SKILL.md files, then rerun bun run gen:skill-docs. -->

# Lab Intake

Read [../references/workflow.md](references/workflow.md), [../references/venues.md](references/venues.md), and [../references/memory.md](references/memory.md).

If this is not a brand-new project, read project memory and researcher preferences first. Pull in only relevant durable context:

- prior thesis definitions,
- venue targets already chosen,
- recurring reviewer risks,
- experiment constraints,
- writing or claim-style preferences.

Produce a compact research brief with:

1. Target venue and why it fits.
2. One-sentence thesis.
3. Core technical bet.
4. Assumptions and threat model.
5. Required evidence to make the paper believable.
6. Highest-risk unknowns.
7. Immediate next experiments or reading tasks.

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
