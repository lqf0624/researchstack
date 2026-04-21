# researchstack

English | [Chinese (Simplified)](README.zh-CN.md)

`researchstack` is a workflow-first research skill pack for computer systems, networking, and AI papers.

It is built for Markdown-based skill hosts such as Codex-compatible tools and Claude Code. The goal is not to give you a bag of prompts. The goal is to act like a serious paper team that can help you:

- turn a vague area into a paper-sized thesis
- stress-test novelty before you waste weeks
- map related work against the papers that will actually be compared
- design experiments that match the claim
- keep runs, evidence, and artifacts disciplined
- write, review, and rebut papers for venues such as ICLR, ASPLOS, SC, NSDI, and SIGCOMM

## Why This Exists

Most research assistants are good at isolated tasks. They can draft an abstract, summarize a paper, or brainstorm ideas.

What they usually do badly is workflow:

- they help write before the thesis is real
- they suggest ideas without killing weak ones
- they let experiment scope sprawl beyond one paper
- they forget venue fit, reviewer risks, and prior decisions

`researchstack` is built to push in the opposite direction. It routes work through a stricter path:

`idea -> review -> literature -> experiment -> artifact -> writing -> submission -> rebuttal`

## What You Get

- A root router skill: `researchstack`
- 18 focused research skills with `researchstack-*` names for easier search
- Source skills for Claude Code style installs
- Generated `.agents/skills/` distribution for Codex-compatible installs
- A local memory layer for long-running projects
- Runtime helpers for host detection, project slugging, doctor checks, and routing install
- Templates for experiment ops, reproduction, paper layout, figures, and submission gating
- Example workflows and a realistic example project

Host UIs group the skills under `Researchstack: ...` display names so they are easier to find in long skill lists.

## Runtime and Maintenance

`researchstack` now includes a small runtime layer so the root router can detect host, project slug, and memory status before choosing a workflow.

Useful commands:

```bash
bun run project:slug -- --root .
bun run memory:status -- --root .
bun run doctor
bun run routing:install -- --host claude
bun run upgrade -- auto
```

The `doctor` command checks install state, routing state, managed markers, and duplicate backup skill directories. The routing installer appends a `Researchstack Skill Routing` block to `CLAUDE.md` or `AGENTS.md`.

## Skill Catalog

### Routing and Memory

- `researchstack`
  Root router. Use when the request spans multiple stages and you want the pack to choose the right research workflow.
- `researchstack-next-step`
  Mid-project decision layer. Use when you are stuck and need one clear recommendation for what to do next, which skill to run, and what not to do yet.
- `researchstack-learn`
  Project memory and researcher preference management. Use to store durable decisions such as thesis boundaries, venue choices, reviewer risks, and evaluation rules.

### Idea Formation

- `researchstack-idea-finder`
  Start here when you only have a broad area or interest, not a paper-sized idea. It scans recent papers, proposes candidate topics, runs them through mandatory review, and only returns surviving one-paper thesis candidates.
- `researchstack-lab-intake`
  Turn a rough direction into a paper brief. Good for venue targeting, thesis framing, assumptions, threat model, and immediate next steps.
- `researchstack-idea-review`
  Skeptical research-idea review. Use to judge novelty, importance, scope, evidence burden, and likely reviewer objections.
- `researchstack-idea-refine`
  Guided repair loop for ideas that are interesting but not yet publishable.
- `researchstack-literature-map`
  Related-work and positioning skill. Use to find the closest comparison set, novelty boundary, and competing narratives.

### Existing Paper Reproduction

- `researchstack-paper-reproduction`
  Start from a paper PDF, appendix, or repo. Reconstruct the method, extract claims and experiments, identify ambiguity, and produce a reproduction verdict.

### Evidence and Implementation

- `researchstack-experiment-design`
  Build the evaluation matrix: baselines, metrics, workloads, ablations, scaling checks, and failure tests.
- `researchstack-experiment-ops`
  Keep runs disciplined: runbooks, logging, seed control, checkpointing, result triage, and evidence promotion.
- `researchstack-artifact-audit`
  Trace every figure and claim back to scripts, configs, seeds, hardware assumptions, and outputs.
- `researchstack-code-review`
  Review research code for correctness, hidden bias, invalid conclusions, and claim-implementation mismatch.

### Writing and Presentation

- `researchstack-paper-write`
  Draft or revise sections with claim-evidence discipline.
- `researchstack-figure-studio`
  Plan figures and tables that carry evidentiary weight instead of decorative value.
- `researchstack-paper-layout`
  Improve LaTeX structure, captions, notation, tables, appendix flow, and camera-ready hygiene.

### Submission and Review

- `researchstack-submission-gate`
  Final go/no-go check. Use to decide whether to submit now, delay, or retarget.
- `researchstack-peer-review`
  Simulate strict conference reviewers and likely rejection paths.
- `researchstack-rebuttal-coach`
  Turn reviews into a disciplined rebuttal plan and point-by-point response strategy.

## Typical Workflows

### 0. You are stuck and do not know what to do next

Use:

1. `researchstack-next-step`
2. the one or two follow-up skills it recommends
3. `researchstack-learn` if the step creates a durable decision

Outcome:

- current research stage
- blocking mismatch
- one clear next skill
- what not to do yet
- short follow-up chain

### 1. You only have a broad area

Use:

1. `researchstack-idea-finder`
2. `researchstack-lab-intake`
3. `researchstack-idea-review`
4. `researchstack-literature-map`

Outcome:

- a few reviewed topic cards
- rejected directions with reasons
- one-paper thesis candidates
- a clean handoff into real paper planning

### 2. You have a rough paper idea already

Use:

1. `researchstack-lab-intake`
2. `researchstack-idea-review`
3. `researchstack-idea-refine` if needed
4. `researchstack-literature-map`

Outcome:

- venue target
- one-sentence thesis
- novelty boundary
- highest-risk unknowns

### 3. You already have code and results

Use:

1. `researchstack-experiment-design`
2. `researchstack-experiment-ops`
3. `researchstack-artifact-audit`
4. `researchstack-code-review`

Outcome:

- claim-to-evidence matrix
- controlled run process
- reproducibility gaps
- implementation risks that could sink the paper

### 4. You want to reproduce an existing paper

Use:

1. `researchstack-paper-reproduction`
2. `researchstack-experiment-design`
3. `researchstack-experiment-ops`
4. `researchstack-artifact-audit`
5. `researchstack-peer-review`

Outcome:

- reproduction brief
- ambiguity log
- reconstruction matrix
- reviewer-style critique of reproducibility

### 5. You are writing or polishing a submission

Use:

1. `researchstack-paper-write`
2. `researchstack-figure-studio`
3. `researchstack-paper-layout`
4. `researchstack-submission-gate`
5. `researchstack-peer-review`
6. `researchstack-rebuttal-coach`

Outcome:

- tighter sections
- stronger figures and captions
- cleaner layout
- a clearer submit-or-delay decision

## Memory Layer

`researchstack` includes a lightweight local memory layer so long-running projects do not restart from zero every session.

- Project memory: `~/.researchstack/projects/<slug>/memory.jsonl`
- Researcher preferences: `~/.researchstack/profile/preferences.json`

Use it for:

- thesis boundaries
- venue decisions
- baseline and evaluation rules
- hardware or dataset constraints
- recurring reviewer risks
- repeated writing weaknesses

Use this helper to initialize a stable slug and memory layout:

```bash
bun run memory:init -- --root <repo-root>
```

Slug rule:

- `<repo-name>-<sha256(normalized-remote-or-root-path)[:6]>`

## Install

Requirements:

- Git
- Bun
- Git Bash is recommended on Windows for running `./setup`
- WSL only works if your host also scans the WSL-side skills directory, or if you use `--target` to point at a Windows-visible skills path

Repository:

- GitHub: [lqf0624/researchstack](https://github.com/lqf0624/researchstack)

### Claude Code

Install globally:

```bash
git clone https://github.com/lqf0624/researchstack.git ~/.claude/skills/researchstack
cd ~/.claude/skills/researchstack
./setup --host claude
```

Install into one repo:

```bash
cp -Rf ~/.claude/skills/researchstack .claude/skills/researchstack
rm -rf .claude/skills/researchstack/.git
cd .claude/skills/researchstack
./setup --host claude
```

### Codex-Compatible Hosts

Install globally:

```bash
git clone https://github.com/lqf0624/researchstack.git ~/researchstack
cd ~/researchstack
./setup --host codex
```

Install into one repo:

```bash
git clone https://github.com/lqf0624/researchstack.git .agents/skills/researchstack
rm -rf .agents/skills/researchstack/.git
cd .agents/skills/researchstack
./setup --host codex
```

When setup runs from `.agents/skills/researchstack`, it keeps the vendored checkout as the root `researchstack` skill, installs generated `researchstack-*` sibling skills next to it, and does not write to `~/.codex/skills`.

Explicit target path:

```bash
cd ~/researchstack
./setup --host codex --target /path/to/project/.agents/skills
```

Auto-detect host from a shared checkout:

```bash
./setup --host auto
```

## Repository Layout

- [SKILL.md](SKILL.md)
  Root router and workflow entrypoint.
- `artifact-audit/`, `idea-review/`, `paper-write/`, and similar folders
  Source skills.
- [references](references)
  Shared policy and review references.
- per-skill `assets/`
  Templates and reusable checklists.
- per-skill `agents/openai.yaml`
  Host-facing UI metadata.
- [scripts/gen-skill-docs.js](scripts/gen-skill-docs.js)
  Generated distribution builder.
- [scripts/init-memory.js](scripts/init-memory.js)
  Memory slug/bootstrap helper.
- [setup](setup)
  Installer for Claude and Codex-compatible hosts.
- [.agents/skills](.agents/skills)
  Generated distribution output.

## Demos and Examples

- [docs/demo-workflow-gpu-simulator-paper.md](docs/demo-workflow-gpu-simulator-paper.md)
  End-to-end example around a GPU simulator paper.
- [docs/demo-workflow-paper-reproduction.md](docs/demo-workflow-paper-reproduction.md)
  Reproduction branch demo from a published paper.
- [docs/demo-memory-flow.md](docs/demo-memory-flow.md)
  Memory flow demo across repeated sessions.
- [examples/nsdi-tail-latency-paper/README.md](examples/nsdi-tail-latency-paper/README.md)
  Realistic example project artifacts.

## Contributing

See:

- [CONTRIBUTING.md](CONTRIBUTING.md)
- [LICENSE](LICENSE)

## Troubleshooting

- Skills not showing up after install: rerun `./setup` and restart the host app so it rescans the skills directory.
- Repo-local install ended up in your home directory: use the documented gstack-style paths, or rerun with `--target` if your host uses a custom skills directory.
- Windows + WSL install succeeded but the desktop app shows nothing: rerun from Git Bash, or use `./setup --target <Windows-visible-skills-dir>` so the files land where the app actually scans.
- You want generated distribution output without a global install: run `bun run gen:skill-docs --host codex` and use `.agents/skills/` directly.
