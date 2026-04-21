---
name: researchstack
description: |
  Workflow-first research skill pack for computer systems, networking, and AI papers. Use when Codex needs
  to act like a rigorous paper team rather than a generic assistant: scoping a paper, stress-testing an
  idea, refining a thesis, mapping related work, reproducing prior papers, designing experiments, auditing
  code and artifacts, writing sections, improving LaTeX layout, designing figures, simulating reviewer
  feedback, or preparing rebuttals for venues such as ICLR, ASPLOS, SC, NSDI, and SIGCOMM.
---

# Researchstack

Use this root skill as the routing layer for the rest of the pack.

## Runtime Bootstrap

Run this first when the host supports shell preambles:

```bash
_ROOT=$(git rev-parse --show-toplevel 2>/dev/null || pwd)
RESEARCHSTACK_ROOT="$HOME/.codex/skills/researchstack"
[ -d "$_ROOT/.agents/skills/researchstack" ] && RESEARCHSTACK_ROOT="$_ROOT/.agents/skills/researchstack"
[ -d "$_ROOT/bin" ] && RESEARCHSTACK_ROOT="$_ROOT"
RSTACK_BIN="$RESEARCHSTACK_ROOT/bin"
RSTACK_HOST=$("$RSTACK_BIN/researchstack-host-detect" 2>/dev/null || echo "unknown")
RSTACK_PROJECT=$("$RSTACK_BIN/researchstack-project-slug" --root "$_ROOT" --print-json 2>/dev/null || echo "{}")
RSTACK_MEMORY=$("$RSTACK_BIN/researchstack-memory-status" --root "$_ROOT" --print-json 2>/dev/null || echo "{}")
RSTACK_CONFIG=$("$RSTACK_BIN/researchstack-config" show 2>/dev/null || echo "{}")
echo "HOST: $RSTACK_HOST"
echo "PROJECT: $RSTACK_PROJECT"
echo "MEMORY: $RSTACK_MEMORY"
echo "CONFIG: $RSTACK_CONFIG"
```

Interpret the bootstrap like this:

- If memory exists and the user is unsure what to do, route to `researchstack-next-step`.
- If memory is empty and the user only has a broad area, route to `researchstack-idea-finder`.
- If memory is empty and the user already has a thesis candidate, route to `researchstack-lab-intake`.
- If routing files are missing in the repo, recommend `bin/researchstack-install-routing`.
- If installs look stale or duplicated, recommend `bin/researchstack-doctor`.

Read [references/workflow.md](references/workflow.md) first when the request spans multiple stages of a paper.
Read [references/memory.md](references/memory.md) when the project is ongoing and prior decisions should carry across sessions.

Default behavior when the user says "help me push this paper" or asks for a broad research assist:

1. Start with `researchstack-next-step` if the user is mid-project and asks what to do next.
2. Start with `researchstack-idea-finder` if the user only has a broad area, not a paper-sized thesis.
3. Otherwise start with `researchstack-lab-intake` unless the thesis is already crisp.
4. Run `researchstack-idea-review` before investing in polishing.
5. If the idea is salvageable but weak, switch to `researchstack-idea-refine`.
6. Build the related-work boundary with `researchstack-literature-map`.
7. Lock evaluation with `researchstack-experiment-design`.
8. Move immediately into `researchstack-experiment-ops` so runs, seeds, and result promotion are controlled.
9. Use `researchstack-artifact-audit` and `researchstack-code-review` before trusting any figure or claim.
10. Only then move to `researchstack-paper-write`, `researchstack-figure-studio`, and `researchstack-paper-layout`.
11. Use `researchstack-submission-gate` before any external submission.
12. Finish with `researchstack-peer-review` and, if needed, `researchstack-rebuttal-coach`.

Do not jump straight to writing or figure polish when the thesis, evidence, or process are still unstable.

Route to the most specific skill:

- Use `researchstack-lab-intake` for raw project framing, venue targeting, and turning a vague direction into a paper plan.
- Use `researchstack-next-step` when the user is mid-project, stuck, or unsure which research skill to use next.
- Use `researchstack-idea-finder` when the user has an area of interest, venue intuition, or resource constraint but not yet a one-paper thesis.
- Use `researchstack-idea-review` for skeptical novelty and risk review.
- Use `researchstack-idea-refine` for guided improvement after the idea is weak but still promising.
- Use `researchstack-literature-map` for related-work positioning and gap analysis.
- Use `researchstack-learn` for project memory, venue memory, experiment policies, and long-term researcher preferences.
- Use `researchstack-paper-reproduction` when the user provides a paper PDF and wants to reconstruct or reproduce it.
- Use `researchstack-experiment-design` for evaluation planning before implementation or before paper lock.
- Use `researchstack-experiment-ops` for runbooks, logging discipline, result triage, and experimental process management.
- Use `researchstack-artifact-audit` for reproducibility and evidence tracing.
- Use `researchstack-code-review` for research-code correctness and claim alignment.
- Use `researchstack-paper-write` for outline and section drafting.
- Use `researchstack-paper-layout` for LaTeX structure, notation, tables, captions, and visual consistency.
- Use `researchstack-figure-studio` for figure and table planning.
- Use `researchstack-submission-gate` for final readiness and venue-fit decisions.
- Use `researchstack-peer-review` for harsh conference-style reviews.
- Use `researchstack-rebuttal-coach` for point-by-point response strategy.

If the user says "what do we already know about this project?" or wants the pack to remember durable decisions, route to `researchstack-learn` first.

When the user asks for an end-to-end research push, follow this sequence:

1. Next-step triage if the project is already in flight and the right next move is unclear.
2. Idea finding if the project starts from a broad area rather than a thesis.
3. Intake and venue target.
4. Skeptical idea review.
5. Guided idea refinement if salvageable.
6. Literature positioning.
7. Experiment plan.
8. Experiment operations and result promotion.
9. Artifact and code audit.
10. Writing and layout.
11. Submission gate.
12. Simulated peer review.
13. Rebuttal coaching if needed.

Use this next-step branch whenever the user is unsure what to do next:

1. `researchstack-next-step`
2. the one or two recommended follow-up skills
3. `researchstack-learn` after the step if a durable decision was made

Use this idea-finding branch when the user starts with a topic area, not a paper-sized idea:

1. `researchstack-idea-finder`
2. `researchstack-lab-intake`
3. `researchstack-idea-review`
4. `researchstack-idea-refine` if needed
5. `researchstack-literature-map`

Use this reproduction branch when the task starts from an existing paper rather than a new internal project:

1. `researchstack-paper-reproduction`
2. `researchstack-experiment-design`
3. `researchstack-experiment-ops`
4. `researchstack-artifact-audit`
5. `researchstack-peer-review`

The reproduction branch is about reconstructing what the paper actually did, identifying ambiguity, and making a clean verdict about reproducibility. It is not only about whether one number matched.

Keep the team behavior strict:

- Challenge novelty claims early.
- Prefer falsifiable hypotheses over inspirational framing.
- Keep claims narrower than the current evidence, not broader.
- Call out missing baselines, ablations, and deployment realism.
- Distinguish systems evidence, networking evidence, and ML evidence instead of mixing standards loosely.
