## Research Memory

`researchstack` can build lightweight long-term memory in local files.

Use two layers:

1. Project memory
   Path: `~/.researchstack/projects/<slug>/memory.jsonl`
   Purpose: thesis boundaries, venue fit, baseline policy, experiment constraints, known reviewer risks, failure modes, and durable decisions for one project.

2. Researcher preferences
   Path: `~/.researchstack/profile/preferences.json`
   Purpose: writing style, claim posture, venue preferences, evidence standards, and recurring workflow preferences across projects.

Choose `<slug>` like this:

- If the user is in a git repo, do not use only the repo directory name.
- Prefer `<repo-name>-<short-stable-id>`, where the stable id is the first 6 lowercase hex characters of a SHA-256 hash.
- Hash input:
  - use the normalized repo remote URL if one exists,
  - otherwise use the normalized absolute repo root path.
- Good examples:
  - `switchboard-a1b2c3`
  - `nsdi-cachelab-9f8e7d`
- Otherwise, use a short manual slug and say that the memory is not repo-bound.

Read memory before giving final recommendations when the task is part of an ongoing project.

When choosing a stable id:

- If the repo has a remote URL, normalize it first, then hash that canonical location.
- If there is no remote, normalize the absolute repo root path, then hash that.
- Keep the final slug short, stable, and filesystem-safe.
- The goal is collision resistance, not human beauty.

Recommended normalization:

- lowercase the source string,
- trim trailing slashes,
- for git remotes, drop a trailing `.git`,
- keep only enough transformation to make equivalent references hash the same.

Example algorithm:

```text
slug = "<repo-name>-<sha256(normalized-source)[:6]>"
```

Helper:

```text
bun run memory:init -- --root <repo-root>
```

This prints the slug and creates the default local layout under `~/.researchstack/`.

Write memory only when the information is durable enough to help future sessions. Good memory candidates:

- the paper's real thesis after refinement,
- a venue decision and why,
- mandatory baselines or evaluation rules,
- a reviewer risk that keeps recurring,
- a failed experiment direction worth not repeating,
- a writing weakness the user repeatedly wants corrected,
- a project constraint such as hardware budget or dataset access.

Do not write ephemeral chatter, one-off brainstorm branches, or low-confidence guesses.

## Project Memory Entry Format

Append one JSON object per line to `memory.jsonl`.

Required fields:

- `ts`: ISO 8601 timestamp
- `type`: one of `thesis`, `venue_fit`, `baseline_policy`, `evaluation_rule`, `reviewer_risk`, `failure_mode`, `artifact_rule`, `writing_risk`, `project_constraint`
- `title`: short human-readable label
- `detail`: the durable fact or rule
- `confidence`: `high`, `medium`, or `low`
- `source`: `user`, `observed`, or `inferred`

Optional fields:

- `files`: list of relevant paths
- `tags`: short tags such as `iclr`, `tail-latency`, `fairness`, `artifact`

Example:

```json
{"ts":"2026-03-31T15:20:00Z","type":"reviewer_risk","title":"Workload realism risk","detail":"Do not claim deployment relevance unless at least one production-like workload is included; past drafts overfit to synthetic traces.","confidence":"high","source":"observed","tags":["nsdi","evaluation"]}
```

## Updating Existing Memory

Project memory is append-only, but not "write and forget."

When a durable fact changes:

- append a new entry instead of rewriting old history,
- reference the old title in the new title or detail,
- make the new entry explicit about what changed,
- prefer `confidence: high` only when the update is actually settled.

Good update patterns:

- venue changed,
- thesis narrowed,
- a prior reviewer risk is now mitigated,
- a previous failure mode is no longer relevant because the experiment design changed.

Recommended conventions:

- For updates, prefix the title with `Update:` when helpful.
- For retired assumptions, say `Supersedes: <old title>` in `detail`.
- When a prior memory is now wrong, say so plainly instead of silently contradicting it.

Example update:

```json
{"ts":"2026-04-02T10:05:00Z","type":"venue_fit","title":"Update: SIGCOMM over NSDI","detail":"Supersedes: NSDI over SIGCOMM. The story now depends more on transport mechanism novelty than deployment evaluation depth.","confidence":"high","source":"observed","tags":["venue"]}
```

## Reading Existing Memory

When reading a memory file:

- prefer the newest high-confidence entry when two entries conflict,
- do not silently ignore contradictions,
- explicitly call out when memory appears split or stale,
- recommend pruning only after the newer direction is clearly established.

## Preferences Format

Keep `preferences.json` small and editable by hand.

Recommended shape:

```json
{
  "claim_posture": "conservative",
  "writing_preferences": [
    "Lead with mechanism and evidence, not slogans."
  ],
  "evaluation_preferences": [
    "Always disclose baseline tuning budget."
  ],
  "venue_preferences": {
    "primary": ["ASPLOS", "NSDI"],
    "avoid_overclaiming_for": ["ICLR"]
  }
}
```

When updating preferences, merge rather than overwrite. Preserve existing keys unless the user clearly changes their mind.
