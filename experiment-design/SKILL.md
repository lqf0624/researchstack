---
name: researchstack-experiment-design
description: |
  Experiment-planning skill for research papers in systems, networking, and AI. Use when Codex must design or audit
  baselines, metrics, workloads, ablations, statistical checks, scaling studies, sensitivity analysis, and failure
  tests so that a paper's claims are actually supported.
---

# Experiment Design

Read [../references/workflow.md](../references/workflow.md), [../references/venues.md](../references/venues.md), [../references/conference-story-patterns.md](../references/conference-story-patterns.md), [../references/novelty-boundary.md](../references/novelty-boundary.md), and [../references/memory.md](../references/memory.md).

Before proposing new experiments, load relevant memory if it exists:

- known mandatory baselines,
- reviewer risks tied to evaluation,
- hardware or compute constraints,
- past failed experiment branches,
- user preferences about fairness, realism, and reporting.

Design evaluation from claims backward.

First identify the paper type from `conference-story-patterns.md`. Match evidence to that type:

- measurement papers need real phenomena, coverage, controls, and external-validity discussion,
- mechanism papers need causal ablations and strong tuned baselines,
- system papers need implementation realism, end-to-end workloads, and operational failure cases,
- algorithm/control papers need action-ranking or decision-quality evidence, not only final reward,
- architecture/co-design papers need cross-layer cost/complexity and scaling/sensitivity,
- artifact/evaluation papers need reproducibility and examples of changed conclusions,
- abstraction papers need the Abstraction Gate as explicit experiments.

Then identify the closest-work boundary from `novelty-boundary.md`. For each closest competitor, include at least one experiment or baseline configuration that tests whether the claimed gap actually matters. If a strong baseline using one extra heuristic/state variable could close the gap, include that baseline.

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
