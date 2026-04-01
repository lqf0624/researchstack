# Demo Workflow: GPU Simulator Paper

This example shows how `researchstack` is meant to be used on a realistic systems paper.

## Starting point

Project shape:

- domain: GPU systems / simulator co-design
- rough claim: a multi-granularity simulator can cut validation cost while preserving enough fidelity for architecture exploration
- target venues under consideration: ASPLOS, SC
- current assets: prototype code, partial experiments, unclear paper thesis

## Suggested workflow

### 1. Intake

Run:

```text
Use $researchstack-lab-intake to turn this GPU simulator project into a paper brief for ASPLOS or SC.
```

Expected outputs:

- venue recommendation
- one-sentence thesis
- core technical bet
- top risks

### 2. Skeptical idea review

Run:

```text
Use $researchstack-idea-review to assess whether the simulator idea is actually novel and publishable.
```

Expected outputs:

- verdict
- likely closest prior work
- fatal weaknesses
- salvage path

### 3. Thesis refinement

Run:

```text
Use $researchstack-idea-refine to narrow the simulator story into one defensible contribution.
```

Expected outputs:

- revised title options
- contribution boundary
- must-cut scope

### 4. Related-work positioning

Run:

```text
Use $researchstack-literature-map to map GPU simulators, architecture validation systems, and multi-fidelity modeling papers.
```

Expected outputs:

- novelty matrix
- baseline shortlist
- reviewer-comparison shortlist

### 5. Evaluation planning

Run:

```text
Use $researchstack-experiment-design to define baselines, fidelity metrics, speed metrics, and ablations.
```

Expected outputs:

- claim-to-experiment matrix
- mandatory baselines
- stress tests that could break the paper

### 6. Experiment operations

Run:

```text
Use $researchstack-experiment-ops to organize simulator runs and result promotion.
```

Expected outputs:

- populated runbook
- result triage sheet
- claim-evidence ledger

Suggested bundled templates:

- `assets/runbook-template.md`
- `assets/result-triage-template.md`
- `assets/claim-evidence-ledger.md`

### 7. Artifact and code trust pass

Run:

```text
Use $researchstack-artifact-audit to trace every reported simulator result back to scripts and configs.
Use $researchstack-code-review to review the simulator and benchmarking code for validity risks.
```

Expected outputs:

- provenance map
- reproducibility gaps
- hidden bias or bug checklist

### 8. Writing and figures

Run:

```text
Use $researchstack-paper-write to draft the abstract and evaluation section.
Use $researchstack-figure-studio to storyboard the main figures.
Use $researchstack-paper-layout to review captions, tables, notation, and appendix structure.
```

Expected outputs:

- draft section plans
- figure storyboard
- caption and layout fixes

### 9. Submission gate

Run:

```text
Use $researchstack-submission-gate to decide whether this paper is ready for ASPLOS submission.
```

Expected outputs:

- submit / delay / retarget recommendation
- top rejection risks
- last-week action list

### 10. Simulated review and rebuttal

Run:

```text
Use $researchstack-peer-review to produce an ASPLOS-style review.
Use $researchstack-rebuttal-coach to respond to the review.
```

Expected outputs:

- realistic reviewer summary
- likely score pressure points
- point-by-point rebuttal plan

## Why this demo matters

The point is not to invoke every skill mechanically.

The point is that the pack gives a default path:

- thesis before polish
- evidence before prose
- operations before cherry-picking
- harsh review before submission

That is the core `researchstack` promise.

## Alternate branch: reproduce a published simulator paper

If the user starts from an existing paper PDF instead of an internal project, use this branch:

1. `researchstack-paper-reproduction`
2. `researchstack-experiment-design`
3. `researchstack-experiment-ops`
4. `researchstack-artifact-audit`
5. `researchstack-peer-review`

This branch answers a different question:

- what did the paper really claim?
- what can be reconstructed from the PDF and code?
- what remains ambiguous?
- did the results reproduce, partially reproduce, or fail cleanly?
