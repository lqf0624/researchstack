# Contributing to researchstack

Thanks for contributing. This repo is meant to stay easy to author, easy to generate, and easy to install across Markdown-based skill hosts.

## What Lives Where

- Source skills are the canonical authoring format.
- Generated distribution lives under `.agents/skills/`.
- Shared references live in `references/`.
- Skill-local templates and checklists live in each skill's `assets/`.
- UI metadata lives in each skill's `agents/openai.yaml`.
- Install logic lives in [setup](C:\Users\lqf-0624\researchstack\setup).
- Distribution generation lives in [scripts/gen-skill-docs.js](C:\Users\lqf-0624\researchstack\scripts\gen-skill-docs.js).
- Memory bootstrap logic lives in [scripts/init-memory.js](C:\Users\lqf-0624\researchstack\scripts\init-memory.js).

## Local Setup

Requirements:

- Git
- Bun
- Git Bash on Windows for running `./setup`

Useful commands:

```bash
bun install
bun run gen:skill-docs --host codex
bun run memory:init -- --root /path/to/repo
./setup --host auto
```

If you are testing repo-local Codex installs, use a vendored checkout at `.agents/skills/researchstack` and rerun:

```bash
./setup --host codex
```

If you are testing Claude installs, run:

```bash
./setup --host claude
```

## How to Change a Skill

1. Edit the source skill, not the generated copy.
2. Keep shared policy in `references/` when multiple skills need it.
3. Keep reusable checklists and templates in the skill's `assets/` directory.
4. Keep the skill `name:` and host-facing prompt names aligned with the `researchstack-*` convention.
5. If the skill should surface differently in host UIs, update its `agents/openai.yaml`, but preserve the `Researchstack: ...` display-name grouping unless there is a strong reason not to.
6. Regenerate distribution output after source changes:

```bash
bun run gen:skill-docs --host codex
```

7. If install behavior changed, rerun `./setup` and smoke test both Claude-style and Codex-style flows.

## Contribution Standards

- Prefer small, factual edits over giant rewrites.
- Keep source and generated outputs aligned.
- Do not hand-edit generated files in `.agents/skills/` unless you are debugging the generator itself.
- Keep host support claims true. If README says something works, the setup flow should actually work.
- Preserve the workflow-first shape of the pack. New skills should plug into a real research path, not just add another prompt.
- When changing memory behavior, update both the normative spec in [references/memory.md](C:\Users\lqf-0624\researchstack\references\memory.md) and any demo docs that explain it.

## Before Opening a PR

Run through this short checklist:

1. Regenerate `.agents/skills/`.
2. Verify `README.md` still matches the repo's real install and usage story.
3. Verify new docs are discoverable from `README.md`.
4. Recheck any `agents/openai.yaml` prompts and display names if skill names changed.
5. If you changed memory behavior, rerun:

```bash
bun run memory:init -- --root /path/to/repo --no-create --print-json
```

6. If you changed install behavior, test at least one of:
- local machine install
- repo-local `.agents/skills/researchstack` install
- explicit `--target` install

## Scope Guidance

Good contributions:

- tightening install and generation correctness
- adding reusable research templates
- improving review rigor for target venues
- making demos more realistic
- strengthening memory stability and explainability

Things to treat carefully:

- changing host support promises
- changing routing names
- changing memory path or slug rules
- changing generated distribution structure

## Questions

If a change affects packaging, memory semantics, or the top-level workflow, document the reason in the PR description so reviewers can check repo behavior, not just file diffs.
