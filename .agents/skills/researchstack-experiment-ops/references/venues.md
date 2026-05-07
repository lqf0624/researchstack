# Venue Lenses

Use these coarse lenses when routing work. They are heuristics, not official CFP text.

For deeper systems-conference storytelling patterns across ASPLOS, SC, EuroSys, OSDI, and NSDI, also read `conference-story-patterns.md`.

## ICLR

- Emphasize new learning methods, theory, representation, data curation, evaluation, or alignment insights.
- Expect strong novelty claims and careful comparisons to recent baselines.
- Weakness patterns: underpowered ablations, unclear compute budget fairness, selective benchmark choice, and overstated generality.

## ASPLOS

- Emphasize co-design across architecture, systems, compilers, runtimes, and applications.
- Expect realistic workloads, principled design tradeoffs, and careful end-to-end evaluation.
- Weakness patterns: microbenchmark-only evidence, ungrounded hardware assumptions, or missing cost/complexity discussion.

## SC

- Emphasize scale, performance portability, numerical rigor, and impact on HPC workflows.
- Expect production realism, system characterization, and clear scaling methodology.
- Weakness patterns: cluster assumptions hidden in appendix, weak weak-scaling/strong-scaling analysis, and lack of reproducibility details.

## EuroSys

- Emphasize production-relevant systems problems, deployable control planes, operational realism, and clean system design.
- Expect real traces or real deployments, calibrated simulation when needed, strong baselines, and clear SLO/cost/reliability tradeoffs.
- Weakness patterns: named abstractions without deployable mechanisms, simulator-only claims, weak production baselines, and overclaiming from one workload.

## OSDI

- Emphasize complete systems, clean interfaces, operational lessons, and design principles that survive beyond one benchmark.
- Expect serious implementation, end-to-end evaluation, failure-mode discussion, and a crisp explanation of why prior system structures were insufficient.
- Weakness patterns: prototype too thin, contribution mostly tuning, missing deployment path, or unclear generality beyond one stack.

## NSDI

- Emphasize deployable networked systems, operational realism, robustness, and measured impact.
- Expect failure handling, load characterization, implementation detail, and strong comparisons to production alternatives.
- Weakness patterns: toy workloads, unclear deployment path, and insufficient operational evidence.

## SIGCOMM

- Emphasize core networking insight, principled design, and convincing experimental or analytical validation.
- Expect careful problem framing and clear distinction between protocol novelty and engineering packaging.
- Weakness patterns: shallow theory, narrow topologies, weak tail-behavior analysis, and inadequate fairness reasoning.
