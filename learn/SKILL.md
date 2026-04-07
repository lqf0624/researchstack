---
name: researchstack-learn
description: |
  Research memory skill for long-lived projects and researcher preferences. Use when Codex should record, inspect,
  prune, or apply durable knowledge about a paper project, venue strategy, experiment policy, writing weaknesses,
  reviewer risks, or repeated user preferences so later sessions become more context-aware.
---

# Research Learn

Read [../references/memory.md](../references/memory.md) first.

This skill manages the durable memory layer for `researchstack`.

Use it to:

- inspect current project memory,
- inspect or update cross-project researcher preferences,
- record important decisions after a session,
- prune stale or low-confidence memories,
- summarize what the pack already knows before a new workstream.

Default workflow:

1. Determine the project slug.
   - Do not use only the repo directory name.
   - Prefer `<repo-name>-<short-stable-id>` so similarly named repos do not share memory by accident.
   - Use the first 6 lowercase hex characters of `sha256(normalized-remote-or-root-path)` as the stable id.
   - If the user wants a concrete initializer, suggest `bun run memory:init -- --root <repo-root>`.
2. Read `~/.researchstack/projects/<slug>/memory.jsonl` if it exists.
3. Read `~/.researchstack/profile/preferences.json` if it exists.
4. Group what is known into:
   - thesis and scope,
   - venue and reviewer risks,
   - experiment rules,
   - artifact or reproducibility rules,
   - writing and framing preferences.
5. If the user wants updates, append or merge only durable items.
6. If memory is stale or contradictory, call it out and recommend pruning.

When writing memory:

- prefer 1 to 3 high-signal entries over bulk dumping,
- keep titles short and searchable,
- store decisions, not meeting transcript noise,
- mark `source` honestly,
- use `confidence: low` for tentative inferences.

When updating existing project memory:

- append a new entry, do not rewrite old history,
- make the update explicit when it supersedes a prior decision,
- prefer the newest high-confidence entry when summarizing conflicts,
- point out contradictions instead of pretending they do not exist.

When reading memory into a later task, explicitly distinguish:

- remembered fact,
- current inference,
- new uncertainty that still needs verification.

If there is any doubt that two repos might collide, say so and pick a more specific slug before writing memory.
