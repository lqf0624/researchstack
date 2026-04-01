---
name: researchstack-experiment-design
description: |
  Experiment-planning skill for research papers in systems, networking, and AI. Use when Codex must design or audit
  baselines, metrics, workloads, ablations, statistical checks, scaling studies, sensitivity analysis, and failure
  tests so that a paper's claims are actually supported.
---

<!-- AUTO-GENERATED for codex. Edit source SKILL.md files, then rerun bun run gen:skill-docs. -->

# Experiment Design

Read [../references/workflow.md](references/workflow.md), [../references/venues.md](references/venues.md), and [../references/memory.md](references/memory.md).

Before proposing new experiments, load relevant memory if it exists:

- known mandatory baselines,
- reviewer risks tied to evaluation,
- hardware or compute constraints,
- past failed experiment branches,
- user preferences about fairness, realism, and reporting.

Design evaluation from claims backward.

For each claim, specify:

- what evidence type is required,
- which baselines are mandatory,
- which metrics matter,
- what ablation isolates the mechanism,
- what stress case could invalidate the claim.

Produce an experiment matrix with columns:

- claim,
- metric,
- workload or dataset,
- baseline,
- ablation,
- expected outcome,
- failure interpretation.

Default rigor checks:

- fair baseline tuning and budget disclosure,
- scale sensitivity,
- compute or hardware cost,
- robustness to parameter changes,
- tail or worst-case behavior if relevant,
- negative results worth reporting.

Flag common paper-killing problems:

- main claim depends on one cherry-picked setup,
- ablations do not isolate causal factors,
- systems speedups ignore resource cost,
- ML comparisons use stale or weak baselines,
- networking evaluation omits adverse or dynamic conditions.

When the session establishes a durable evaluation rule, baseline policy, or failed direction that should not be relearned next time, propose a project-memory entry for it.
