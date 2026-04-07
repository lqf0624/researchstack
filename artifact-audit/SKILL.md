---
name: researchstack-artifact-audit
description: |
  Reproducibility and evidence-audit skill for research projects. Use when Codex should trace figures and claims back
  to scripts, configs, datasets, seeds, hardware assumptions, and logs; find missing provenance; or prepare the code
  and experiment pipeline for submission, open-sourcing, or artifact evaluation.
---

# Artifact Audit

Audit the paper like an artifact evaluator.

Check for each reported result:

- where the number came from,
- which code path produced it,
- which config or seed was used,
- whether the environment is documented,
- whether reruns are expected to match exactly or statistically.

Produce:

1. Provenance table mapping claim -> experiment -> script/config -> output artifact.
2. Reproducibility gaps.
3. Environment assumptions.
4. Highest-risk silent failure modes.

Be especially strict about:

- cached outputs with unclear freshness,
- figures hand-edited after generation,
- hidden dataset filtering,
- mismatched train/test or warmup/steady-state conditions,
- benchmark harnesses that favor the proposed method,
- copied numbers that no longer match the current codebase.
