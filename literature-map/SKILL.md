---
name: researchstack-literature-map
description: |
  Related-work and mechanism-positioning skill for systems, networking, and AI papers. Use to map competing methods,
  assumptions, signals, decisions, claims, and evidence; identify established solutions; and define topic and method
  innovation boundaries with traceable source coverage.
---

# Literature Map

Read [../references/novelty-boundary.md](../references/novelty-boundary.md) and [../references/evidence-contracts.md](../references/evidence-contracts.md).

Build a comparison map, not a chronological survey.

Start with any local bibliography, PDF corpus, or prior notes. Label every consequential source by read state. Search current papers, official documentation, mature open-source systems, and production implementations to fill explicit gaps. Do not make detailed method or novelty claims from metadata or abstracts alone.

For each relevant work capture:

- stable identifier and read state,
- problem and semantic unit,
- method or mechanism,
- information, action, objective, and coordination boundary,
- assumptions about time, state, failures, heterogeneity, and scale,
- resource and deployment cost,
- evaluation setting and strongest supported result,
- limitation relevant to the current topic,
- whether the mechanism is reusable, adaptable, or incompatible.

Always identify the closest topic competitor, closest method competitor, closest adjacent work, strongest industrial/open-source baseline, and foundational predecessor.

Produce:

- topic state and method state,
- established-mechanism reuse/adapt/fail table,
- closest-work matrix organized by competing mechanisms or explanations,
- source passport and explicit coverage limits,
- baseline shortlist,
- likely reviewer objections,
- innovation-boundary statement,
- method design-space gaps that can feed `researchstack-method-synthesis`,
- related-work paragraph structure.

If evidence is insufficient, label the relevant state `unknown`. Do not infer that a topic is exhausted from paper count, or that a method is novel because its application name differs.
