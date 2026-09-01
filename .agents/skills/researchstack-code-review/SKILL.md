---
name: researchstack-code-review
description: |
  Research-code review skill for systems, networking, and AI projects. Use when Codex should review experiment code,
  simulators, training pipelines, benchmarks, data processing, or plotting logic with emphasis on correctness,
  reproducibility, and whether the implementation really supports the paper's claims.
---

<!-- AUTO-GENERATED for codex from researchstack v0.3.0. Edit source SKILL.md files, then regenerate from the source checkout. -->

# Code Review

Review with a research lens, not only software style.

Prioritize:

1. Correctness bugs that invalidate conclusions.
2. Mismatches between claimed methodology and implemented behavior.
3. Reproducibility and configuration hazards.
4. Benchmark or evaluation bias.
5. Missing tests around scientific assumptions.
6. Performance-boundary changes presented as mechanism improvements.

Look for:

- accidental leakage between training and evaluation,
- simulator shortcuts hidden behind default flags,
- inconsistent preprocessing across baselines,
- unit mistakes,
- silent fallback behavior,
- plotting or aggregation bugs,
- misuse of randomness and seeds,
- benchmark harness changes that break comparability.
- caching or precomputation whose reuse assumptions do not hold for dynamic inputs,
- required work moved outside the timed path without an end-to-end metric.

If no severe bug is found, still report residual validity risks.
