# Demo Workflow: Project Memory for an Ongoing Paper

This example shows how `researchstack` memory should be used on a real long-running project.

The goal is simple:

- do not rediscover the same thesis every week,
- do not forget why a venue was chosen,
- do not repeat failed experiment branches,
- do not lose reviewer-risk knowledge between sessions.

## Starting point

Project shape:

- domain: datacenter transport / scheduling
- working paper direction: reducing tail latency under bursty multi-tenant traffic
- likely venues: NSDI or SIGCOMM
- current problem: the team keeps revisiting the same scope, changing baselines, and forgetting prior objections

## Step 1: Create the first project memory

Run:

```text
Use $researchstack-learn to create project memory for this scheduling paper. Record the thesis, venue target, strongest reviewer risks, and mandatory evaluation rules.
```

Expected outputs:

- a project slug
- a memory summary grouped by category
- 1 to 3 durable entries worth writing now

Recommended slug pattern:

- `repo-name-<sha256(normalized-remote-or-root-path)[:6]>`

Good first entries:

- thesis boundary
- venue choice and why
- mandatory baseline policy
- top reviewer risk

## Step 2: Use memory during intake

Later, when the project is reopened, run:

```text
Use $researchstack-lab-intake with existing project memory to refresh the paper brief without reopening settled decisions.
```

Expected behavior:

- preserve the remembered thesis unless new evidence breaks it
- reuse venue context
- call out if the team is drifting away from earlier scope decisions

What should carry over:

- "This paper is about tail latency control, not general throughput maximization."
- "NSDI fit is stronger than SIGCOMM because deployment realism matters more than protocol novelty here."

## Step 3: Use memory during experiment planning

Run:

```text
Use $researchstack-experiment-design with project memory and current results to update the experiment matrix.
```

Expected behavior:

- reuse known mandatory baselines
- preserve previously learned fairness rules
- avoid repeating invalidated experiment branches

Useful remembered rules:

- baseline tuning budget must be disclosed
- report p99 and worst-case behavior, not only average latency
- synthetic traffic alone is not enough for deployment claims

## Step 4: Use memory during writing

Run:

```text
Use $researchstack-paper-write with project memory to draft the introduction and evaluation framing.
```

Expected behavior:

- preserve the right claim posture
- avoid overclaiming language that prior reviews already rejected
- keep venue-specific objections visible while drafting

Example writing memory:

- avoid "state of the art" unless the strongest baseline is both tuned and disclosed
- lead with mechanism and evidence before sales language
- do not claim production readiness unless a realistic deployment section exists

## Step 5: Use memory during peer review

Run:

```text
Use $researchstack-peer-review with project memory to simulate a strict NSDI review.
```

Expected behavior:

- re-check known reviewer risks
- separate old known weaknesses from new weaknesses
- update memory if a rejection pattern keeps repeating

Good new memory candidates after review:

- "Reviewers keep challenging workload realism unless at least one production-like trace appears in the main paper."
- "Tail-latency claim is not believable without queue occupancy or congestion-window evidence."

## Step 6: Update memory when the story changes

Run:

```text
Use $researchstack-learn to update project memory after we changed the venue target from NSDI to SIGCOMM and narrowed the thesis.
```

Expected behavior:

- append new entries instead of rewriting old ones,
- mark what prior memory is being superseded,
- summarize conflicts using the newest high-confidence entry,
- call out any stale assumptions that still need pruning.

Example update entries:

```json
{"ts":"2026-04-02T10:05:00Z","type":"venue_fit","title":"Update: SIGCOMM over NSDI","detail":"Supersedes: NSDI over SIGCOMM. The paper now hinges more on transport mechanism novelty than deployment-depth evidence.","confidence":"high","source":"observed","tags":["venue"]}
{"ts":"2026-04-02T10:09:00Z","type":"thesis","title":"Update: thesis narrowed to burst control","detail":"Supersedes: Tail-latency thesis boundary. The paper now claims burst-control benefits under tenant interference, not a broad scheduler win across all traffic regimes.","confidence":"high","source":"user","tags":["scope","thesis"]}
```

## Example durable entries

These are the kinds of facts worth preserving:

```json
{"ts":"2026-03-31T15:20:00Z","type":"thesis","title":"Tail-latency thesis boundary","detail":"The paper claims improved p99 latency under bursty multi-tenant traffic, not universal throughput gains.","confidence":"high","source":"user","tags":["nsdi","scope"]}
{"ts":"2026-03-31T15:28:00Z","type":"venue_fit","title":"NSDI over SIGCOMM","detail":"Deployment realism and operational evidence are more central than protocol novelty for this project.","confidence":"high","source":"observed","tags":["venue"]}
{"ts":"2026-03-31T15:41:00Z","type":"failure_mode","title":"Synthetic-only traces are insufficient","detail":"Prior internal reviews rejected deployment claims when experiments used only synthetic burst models.","confidence":"high","source":"observed","tags":["evaluation","reviewer-risk"]}
```

## What this memory layer is for

Use it for durable research judgment:

- project thesis boundaries
- venue fit
- baseline rules
- reviewer sensitivities
- failed directions worth not repeating
- writing preferences that matter over many sessions

Do not use it for:

- raw meeting notes
- temporary brainstorm branches
- low-confidence speculation
- per-session scratch state

## Why this matters

Without memory, the pack behaves like a smart but forgetful collaborator.

With memory, the pack starts behaving more like a real paper team:

- it remembers what was already decided,
- it warns when the project drifts,
- it reuses reviewer pain points,
- it carries writing and evaluation discipline across sessions,
- it updates old decisions without erasing why they changed.
