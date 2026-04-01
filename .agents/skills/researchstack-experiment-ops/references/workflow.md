# Research Workflow

Use this shared pipeline across computer systems, networking, and AI papers.

1. Intake: identify venue, claim type, artifact maturity, evaluation budget, and deadline risk.
2. Idea finding when the user has only a broad area: scan recent papers, generate candidate topics, and discard anything that does not survive skeptical review.
3. Idea review: test novelty, importance, falsifiability, one-paper scope, and whether the scope matches ICLR, ASPLOS, SC, NSDI, or SIGCOMM.
4. Idea refine: turn loose concepts into a thesis, threat model, assumptions, and measurable hypotheses.
5. Literature map: position against the closest 10-20 papers and separate "incremental engineering" from real contribution.
6. Experiment design: define baselines, ablations, metrics, datasets, workloads, statistical checks, and failure cases before coding more.
7. Artifact audit: verify code paths, configs, seeds, hardware assumptions, and whether every plotted number is reproducible.
8. Paper writing: draft around claims and evidence, not around implementation chronology.
9. Layout and figures: polish captions, tables, notation, and visual hierarchy so reviewers can parse results quickly.
10. Submission gate: check claim-evidence alignment, missing ablations, weak comparisons, formatting risks, and venue fit.
11. Peer review and rebuttal: simulate strict reviewers, then answer with evidence, humility, and concrete revisions.

Use evidence ladders when judging strength:

- Level 1: intuition, anecdotes, or one-off examples
- Level 2: consistent qualitative patterns
- Level 3: controlled quantitative experiments
- Level 4: robust ablations, sensitivity checks, and error analysis
- Level 5: reproducible artifact with external validity discussion
