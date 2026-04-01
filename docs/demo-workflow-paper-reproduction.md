# Demo Workflow: Reproduce a Published Paper from PDF

This example shows how `researchstack` should be used when the user starts from an existing paper, not from their own new idea.

## Starting point

Inputs:

- a paper PDF
- optional appendix or supplementary material
- optional public code repository
- goal: decide whether the paper is reproducible enough to trust, use as a baseline, or critique

Example scenario:

- domain: computer systems / AI systems
- venue: ASPLOS, SC, NSDI, SIGCOMM, or ICLR
- user goal: reproduce a published result for baseline comparison

## Default reproduction branch

Use this branch:

1. `researchstack-paper-reproduction`
2. `researchstack-experiment-design`
3. `researchstack-experiment-ops`
4. `researchstack-artifact-audit`
5. `researchstack-peer-review`

## Step 1: Build the reproduction brief

Run:

```text
Use $researchstack-paper-reproduction to read this paper PDF and produce a reproduction brief.
```

Expected outputs:

- top-level contribution summary
- claim list
- key figures and tables to target
- mandatory assets and dependencies
- initial ambiguity log

Useful bundled templates:

- `assets/reproduction-brief-template.md`
- `assets/ambiguity-log-template.md`

## Step 2: Reconstruct the experimental contract

Run:

```text
Use $researchstack-paper-reproduction to extract the experiment contract from this paper: datasets, workloads, metrics, baselines, and environment assumptions.
```

Expected outputs:

- experiment inventory
- claim-to-figure mapping
- baseline list
- ambiguous or missing implementation details

Useful bundled template:

- `assets/reconstruction-matrix-template.md`

## Step 3: Turn the paper into a reproducible experiment matrix

Run:

```text
Use $researchstack-experiment-design to convert this paper's evidence into a reproduction experiment matrix.
```

Expected outputs:

- mandatory reruns
- optional reruns
- stress tests
- failure interpretation plan

This is the point where the user should know which experiments are essential and which are nice-to-have.

## Step 4: Operate the reproduction cleanly

Run:

```text
Use $researchstack-experiment-ops to create a runbook and result triage plan for reproducing this paper.
```

Expected outputs:

- run naming rules
- seed policy
- promotion rule for whether a reproduced result is trustworthy enough to cite
- triage process for failed or ambiguous runs

## Step 5: Audit trustworthiness

Run:

```text
Use $researchstack-artifact-audit to audit whether the reproduced results are actually traceable and trustworthy.
```

Expected outputs:

- provenance map
- mismatch analysis
- confidence judgment

Important distinction:

- reproduction failure does not automatically mean the paper is wrong
- successful rerun does not automatically mean the paper is rigorous

## Step 6: Produce a reproducibility verdict

Run:

```text
Use $researchstack-paper-reproduction to write a final reproduction verdict.
```

Expected outputs:

- reproduced
- partially reproduced
- blocked
- contradicted

Useful bundled template:

- `assets/reproduction-verdict-template.md`

## Step 7: Translate findings into reviewer language

Run:

```text
Use $researchstack-peer-review to write a reviewer-style critique based on the reproduction outcome.
```

Expected outputs:

- likely reviewer concerns
- whether the paper would survive reproducibility scrutiny
- what should be trusted, down-weighted, or challenged

## What this branch is for

This branch is for answering:

- What did the paper really claim?
- What would it take to reproduce those claims?
- Which assumptions are underspecified?
- Which results can be trusted?
- Is this paper safe to use as a baseline or reference point?

That is different from the main `researchstack` branch, which is about advancing the user's own paper.
