# Research Workflow

Use this shared pipeline across computer systems, networking, and AI papers.

1. Next-step triage: when the project is in flight and the user is stuck, identify the current stage, blocking mismatch, and best next skill.
2. Intake: identify venue, claim type, artifact maturity, evaluation budget, and deadline risk.
3. Idea finding when the user has only a broad area: scan recent papers, generate candidate topics, and discard anything that does not survive skeptical review.
4. Idea review: test novelty, importance, falsifiability, one-paper scope, and whether the scope matches ICLR, ASPLOS, SC, NSDI, or SIGCOMM.
5. Idea refine: turn loose concepts into a thesis, threat model, assumptions, and measurable hypotheses.
6. Literature map: position against the closest 10-20 papers and separate "incremental engineering" from real contribution.
7. Experiment design: define baselines, ablations, metrics, datasets, workloads, statistical checks, and failure cases before coding more.
8. Artifact audit: verify code paths, configs, seeds, hardware assumptions, and whether every plotted number is reproducible.
9. Paper writing: draft around claims and evidence, not around implementation chronology.
10. Layout and figures: polish captions, tables, notation, and visual hierarchy so reviewers can parse results quickly.
11. Submission gate: check claim-evidence alignment, missing ablations, weak comparisons, formatting risks, and venue fit.
12. Peer review and rebuttal: simulate strict reviewers, then answer with evidence, humility, and concrete revisions.

Use evidence ladders when judging strength:

- Level 1: intuition, anecdotes, or one-off examples
- Level 2: consistent qualitative patterns
- Level 3: controlled quantitative experiments
- Level 4: robust ablations, sensitivity checks, and error analysis
- Level 5: reproducible artifact with external validity discussion
