# researchstack

`researchstack` is a workflow-first research skill pack for computer systems, networking, and AI papers.

It is inspired by `gstack`, but aimed at research execution instead of product engineering: idea review, guided thesis refinement, literature positioning, project memory, paper reproduction, experiment design and operations, artifact audit, research code review, paper writing, LaTeX/layout polish, figure planning, submission gating, peer review, and rebuttal coaching.

Representative venues:

- ICLR
- ASPLOS
- SC
- NSDI
- SIGCOMM

## Host Support

`researchstack` is intended for Markdown-based skill systems, not only Codex.

- Claude Code: installs the source skills directly.
- Codex and repo-local `.agents/skills` style hosts: use generated `researchstack-*` skills, while repo-local installs keep the vendored `researchstack` root skill as the routing entrypoint.
- Generic hosts can also consume the generated distribution directly via `.agents/skills/` or `./setup --host codex --target <skills-dir>`.

The source tree is the canonical authoring format.
Generated skills live under `.agents/skills/` and are rebuilt by `bun run gen:skill-docs`.

## What It Remembers

`researchstack` now includes a lightweight local memory layer so repeated work on the same paper or codebase does not restart from zero every session.

- Project memory lives in `~/.researchstack/projects/<slug>/memory.jsonl`
- Researcher preferences live in `~/.researchstack/profile/preferences.json`
- `researchstack-learn` is the memory-management skill
- `researchstack-lab-intake`, `researchstack-experiment-design`, `researchstack-paper-write`, and `researchstack-peer-review` are memory-aware

This layer is meant for durable research facts, not chat transcripts:

- thesis boundaries
- venue choices and reviewer risks
- baseline and evaluation rules
- hardware or dataset constraints
- repeated writing weaknesses
- experiment branches worth not repeating

Slug guidance:

- use `<repo-name>-<sha256(normalized-remote-or-root-path)[:6]>`
- append updates instead of rewriting old memory
- when two memory entries conflict, prefer the newest high-confidence one and call out the conflict
- use `bun run memory:init -- --root <repo-root>` to create a stable slug and initialize the local memory layout

## Install

Requirements:

- Git
- Bun
- Git Bash is recommended on Windows for running `./setup`
- WSL only works if your host also scans the WSL-side skills directory, or if you use `--target` to point at a Windows-visible skills path

Current status:

- This repository is ready to use locally.
- A public remote has not been published yet, so the examples below start with local paths.

Local install on your machine for Claude Code:

```bash
cd /path/to/researchstack
./setup --host claude
```

Add to one repo so teammates in the same workspace get it:

```bash
cp -Rf /path/to/researchstack .claude/skills/researchstack
rm -rf .claude/skills/researchstack/.git
cd .claude/skills/researchstack
./setup --host claude
```

Local install on your machine for Codex-compatible hosts:

```bash
cd /path/to/researchstack
./setup --host codex
```

Install to one repo for a Codex-compatible host:

```bash
cp -Rf /path/to/researchstack .agents/skills/researchstack
rm -rf .agents/skills/researchstack/.git
cd .agents/skills/researchstack
./setup --host codex
```

When setup runs from `.agents/skills/researchstack`, it keeps the vendored checkout as the root `researchstack` skill, installs the generated `researchstack-*` sibling skills next to it, and does not write to `~/.codex/skills`.

Advanced: install to an explicit skills directory:

```bash
cd /path/to/researchstack
./setup --host codex --target /path/to/project/.agents/skills
```

Auto-detect installed hosts from a shared checkout:

```bash
./setup --host auto
```

Once a remote repository exists, the same flows can use `git clone` instead of `cp -Rf`.

Example future remote install for Claude Code:

```bash
git clone https://github.com/<your-org>/researchstack.git ~/.claude/skills/researchstack
cd ~/.claude/skills/researchstack
./setup --host claude
```

Example future remote install for Codex-compatible hosts:

```bash
git clone https://github.com/<your-org>/researchstack.git ~/researchstack
cd ~/researchstack
./setup --host codex
```

Behavior summary:

- `./setup --host claude` installs source skills into the Claude skills parent directory.
- `./setup --host codex` installs generated `researchstack-*` skills into the Codex skills parent directory.
- If the checkout already lives at `.claude/skills/researchstack` or `.agents/skills/researchstack`, setup keeps that checkout as the root `researchstack` skill instead of overwriting it.
- In repo-local Codex installs, the root skill comes from the vendored checkout and the sibling `researchstack-*` skills come from generated distribution output.
- `--target` is the escape hatch for generic `.agents/skills` hosts or custom layouts.

## Quick Start

Use the pack like a research pipeline, not like a bag of unrelated prompts.

### Case 1: You have a rough paper idea

1. Run `researchstack-lab-intake`
2. Run `researchstack-idea-review`
3. If the idea is still alive, run `researchstack-idea-refine`
4. Run `researchstack-literature-map`

Outcome:

- venue target
- thesis
- novelty boundary
- kill-shot risks
- first experiment plan

### Case 1b: You want the pack to remember the project

1. Run `researchstack-learn`
2. Record the real thesis, venue target, and evaluation constraints
3. Reuse that memory before later experiment design, writing, or review sessions

Outcome:

- project memory for the paper
- reusable venue and reviewer context
- stable writing and evaluation preferences

### Case 2: You already have code and need to make it paper-grade

1. Run `researchstack-experiment-design`
2. Run `researchstack-experiment-ops`
3. Run `researchstack-artifact-audit`
4. Run `researchstack-code-review`

Outcome:

- claim-to-evidence matrix
- controlled runbook
- reproducibility gaps
- implementation validity risks

### Case 2b: You have a paper PDF and need to reproduce it

1. Run `researchstack-paper-reproduction`
2. Run `researchstack-experiment-design`
3. Run `researchstack-experiment-ops`
4. Run `researchstack-artifact-audit`
5. Run `researchstack-peer-review`

Outcome:

- reproduction brief
- ambiguity log
- experiment reconstruction matrix
- reproduction verdict
- reviewer-style critique of reproducibility

### Case 3: You are drafting or polishing a submission

1. Run `researchstack-paper-write`
2. Run `researchstack-figure-studio`
3. Run `researchstack-paper-layout`
4. Run `researchstack-submission-gate`
5. Run `researchstack-peer-review`
6. Run `researchstack-rebuttal-coach` if reviews exist

Outcome:

- section plan
- figure storyboard
- layout fixes
- submit/delay recommendation
- strict reviewer simulation

## Architecture

- Source skills live at the repo root and subdirectories such as `idea-review/`, `experiment-design/`, and `peer-review/`.
- Shared references live in `references/`.
- Skill-local templates and checklists live in per-skill `assets/` directories.
- UI metadata lives in per-skill `agents/openai.yaml` files.
- Memory guidance lives in `references/memory.md`.
- Local project memory is designed to live under `~/.researchstack/projects/` and `~/.researchstack/profile/`.
- `scripts/init-memory.js` creates stable project slugs and initializes the local memory layout.
- `scripts/gen-skill-docs.js` generates self-contained `researchstack-*` skills into `.agents/skills/`.
- `setup` installs either source skills for Claude or generated skills for Codex-compatible hosts, including repo-local `.agents/skills` installs.

## Troubleshooting

- Skills not showing up after install: rerun `./setup` and restart the host app so it rescans the skills directory.
- Repo-local install ended up in your home directory: use the documented gstack-style paths, or rerun with `--target` if your host uses a custom skills directory.
- Windows + WSL install succeeded but the desktop app shows nothing: rerun from Git Bash, or use `./setup --target <Windows-visible-skills-dir>` so the files land where the app actually scans.
- You want the generated distribution without installing globally: run `bun run gen:skill-docs --host codex` and use `.agents/skills/` directly.

Source skills are the canonical authoring format.
Generated `.agents/skills/` directories are the distribution format for Codex-compatible hosts.

## Demo Workflow

See [docs/demo-workflow-gpu-simulator-paper.md](docs/demo-workflow-gpu-simulator-paper.md) for a full end-to-end example using a GPU simulator paper targeting venues such as ASPLOS or SC.

See [docs/demo-workflow-paper-reproduction.md](docs/demo-workflow-paper-reproduction.md) for the reproduction branch starting from a published paper PDF.

See [docs/demo-memory-flow.md](docs/demo-memory-flow.md) for a concrete example of using `researchstack-learn` to carry thesis, venue, experiment, and reviewer context across sessions.

See [examples/nsdi-tail-latency-paper/README.md](examples/nsdi-tail-latency-paper/README.md) for a realistic example project artifact set.

The memory layer is described in [references/memory.md](references/memory.md).

## Current Skill Set

- `researchstack`
- `researchstack-lab-intake`
- `researchstack-idea-review`
- `researchstack-idea-refine`
- `researchstack-literature-map`
- `researchstack-learn`
- `researchstack-paper-reproduction`
- `researchstack-experiment-design`
- `researchstack-experiment-ops`
- `researchstack-artifact-audit`
- `researchstack-code-review`
- `researchstack-paper-write`
- `researchstack-paper-layout`
- `researchstack-figure-studio`
- `researchstack-submission-gate`
- `researchstack-peer-review`
- `researchstack-rebuttal-coach`

## Project Docs

- [CONTRIBUTING.md](C:\Users\lqf-0624\researchstack\CONTRIBUTING.md)
- [LICENSE](C:\Users\lqf-0624\researchstack\LICENSE)
