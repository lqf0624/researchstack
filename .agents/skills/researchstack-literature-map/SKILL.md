---
name: researchstack-literature-map
description: |
  Related-work and positioning skill for CS, networking, and AI papers. Use when Codex needs to map prior work,
  identify the closest baselines and competing narratives, clarify novelty boundaries, or build a literature
  matrix that can support idea review, experiment design, or paper writing.
---

<!-- AUTO-GENERATED for codex. Edit source SKILL.md files, then rerun bun run gen:skill-docs. -->

# Literature Map

Read [../researchstack/references/novelty-boundary.md](../researchstack/references/novelty-boundary.md).

Build a compact literature matrix, not a generic survey.

For each relevant prior work, capture:

- problem setting,
- method or mechanism,
- assumptions,
- evaluation setting,
- strongest result,
- limitation most relevant to the current paper.

Group papers by competing explanation, not by publication year alone.

Always identify:

1. The two or three papers reviewers will treat as the closest comparison.
2. The line of work that makes the new idea look incremental.
3. The line of work that the paper can honestly claim to extend or unify.
4. The strongest industrial/open-source baseline reviewers will expect.
5. The foundational predecessor that introduced the core architecture, metric, or mechanism.

When writing positioning guidance, produce:

- a novelty boundary statement,
- a novelty-boundary label: `clear gap`, `crowded but viable`, `incremental`, `already done`, or `unknown`,
- a closest-work matrix,
- a baseline shortlist,
- likely reviewer objections rooted in prior work,
- story candidate: likely venue story pattern, X/Y/Z statement if systems, closest-work contrast sentence, and first decisive figure or experiment,
- related-work paragraph structure.

If evidence is insufficient to claim novelty, say so directly.

If current literature is fast-moving or the user asks whether an idea has been done, browse/search. Do not rely only on memory for novelty claims.
