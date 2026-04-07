---
name: researchstack-experiment-ops
description: |
  Experimental-process management skill for research projects. Use when Codex should structure runbooks, logging,
  checkpointing, seed control, result triage, failure analysis, experiment queues, and evidence collection so that the
  day-to-day experimental workflow stays publication-grade instead of devolving into ad hoc trial-and-error.
---

# Experiment Ops

Read [../references/workflow.md](../references/workflow.md).

Use the bundled templates:

- [assets/runbook-template.md](assets/runbook-template.md) for the canonical per-campaign runbook.
- [assets/result-triage-template.md](assets/result-triage-template.md) for classifying wins, failures, and suspect runs.
- [assets/claim-evidence-ledger.md](assets/claim-evidence-ledger.md) to decide which numbers are allowed into the paper.

Operate like a disciplined lab manager.

For ongoing experiments, enforce:

1. Clear run naming and provenance.
2. Explicit seed and environment capture.
3. Separation between exploratory runs and paper-claim runs.
4. Result logs that explain failures, not only wins.
5. Promotion rules for when a result is allowed into the paper.

Produce practical artifacts such as:

- experiment queue,
- runbook template,
- result triage checklist,
- failure taxonomy,
- promotion criteria for plots and tables.

When the user has no existing structure, instantiate the bundled templates instead of inventing ad hoc formats.

Be strict about process failures:

- overwritten outputs,
- undocumented config changes,
- inconsistent warmup or stopping criteria,
- comparing runs from mismatched code versions,
- repeated cherry-picking without negative-result accounting.
