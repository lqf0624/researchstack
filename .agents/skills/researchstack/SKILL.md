---
name: researchstack
description: |
  Workflow-first research skill pack for computer systems, networking, and AI papers. Use when Codex needs to scope a
  paper or multi-paper program, design methods within a fixed topic, test novelty, map literature, plan and audit
  experiments, write and visualize results, simulate review, or prepare a submission and rebuttal for systems and AI venues.
---

<!-- AUTO-GENERATED for codex from researchstack v0.3.0. Edit source SKILL.md files, then regenerate from the source checkout. -->

# Researchstack

Use this root skill only as the routing and cross-stage coordination layer. Route a stage-specific request to the narrowest skill.

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

Interpret the bootstrap:

- Existing project plus uncertainty about the next action: `researchstack-next-step`.
- Broad area and freedom to choose a problem: `researchstack-idea-finder`.
- Fixed topic that needs a new method: `researchstack-method-synthesis`.
- Durable direction intended to support several papers: `researchstack-program-map`.
- Rough one-paper thesis: `researchstack-lab-intake`.
- Missing or stale installs: run the doctor from the source checkout and compare managed-version markers before replacing anything.

Read [references/workflow.md](references/workflow.md) when a request spans multiple stages. Read [references/memory.md](references/memory.md) when prior project decisions matter.

## Routing

- `researchstack-next-step`: choose the next research action in an ongoing project.
- `researchstack-program-map`: design a multi-paper agenda around one durable topic or grant direction.
- `researchstack-idea-finder`: discover paper-sized problems when the topic is open.
- `researchstack-method-synthesis`: generate and stress-test mechanisms while keeping the topic fixed.
- `researchstack-lab-intake`: turn a rough direction into a paper brief.
- `researchstack-idea-review`: judge topic significance and method novelty separately.
- `researchstack-idea-refine`: repair a weak thesis or method without automatically changing topic.
- `researchstack-literature-map`: map competing mechanisms, claims, assumptions, and evidence.
- `researchstack-learn`: maintain durable project and researcher memory.
- `researchstack-paper-reproduction`: reconstruct an existing paper and its evidence path.
- `researchstack-experiment-design`: design baselines, rival predictions, ablations, workloads, and failure tests.
- `researchstack-experiment-ops`: manage runs and claim promotion.
- `researchstack-artifact-audit`: trace claims and figures to code, configs, data, and logs.
- `researchstack-code-review`: inspect research-code correctness and claim alignment.
- `researchstack-paper-write`: draft and revise evidence-aligned sections.
- `researchstack-figure-studio`: plan figures and tables; route rendering to specialized visual tools when available.
- `researchstack-paper-layout`: improve LaTeX structure and submission presentation.
- `researchstack-submission-gate`: make a final submit, delay, or retarget decision.
- `researchstack-peer-review`: simulate strict conference review.
- `researchstack-rebuttal-coach`: build a point-by-point evidence-backed response.

## Non-Negotiable Research Behavior

- Topic overlap does not imply method overlap. Judge topic state and method state separately.
- When a topic matters but the method is weak, route to `researchstack-method-synthesis` before recommending a new topic.
- Investigate established mechanisms before inventing new ones; state what is reused, adapted, and still missing.
- Preserve the real semantic unit and end-to-end lifecycle. Moving required work outside the measured boundary is not an optimization or contribution.
- Prefer falsifiable hypotheses and discriminating experiments over inspirational framing.
- Keep claims no broader than the current evidence and record source-read and claim-promotion states.
- Treat shared infrastructure as an enabling asset, not a repeated contribution across papers.
- Distinguish systems, networking, and ML evidence standards rather than mixing them loosely.
