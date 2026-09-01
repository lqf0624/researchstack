---
name: researchstack-paper-write
description: |
  Paper-writing skill for CS, networking, and AI venues. Use when Codex needs to draft or revise titles, abstracts,
  introductions, method sections, evaluation sections, related work, limitations, or conclusions while keeping claims
  aligned with evidence and tuned to conference expectations.
---

# Paper Write

Read [../references/memory.md](../references/memory.md), [../references/conference-story-patterns.md](../references/conference-story-patterns.md), [../references/expert-advice.md](../references/expert-advice.md), and [../references/evidence-contracts.md](../references/evidence-contracts.md) before drafting for an ongoing project.

Use remembered context when available:

- claim posture the user prefers,
- venue-specific objections seen in prior reviews,
- project phrases or claims that previously overreached,
- recurring writing weaknesses worth correcting.

Write around contribution and evidence, not around the order the work happened.

Before drafting, classify the paper type from `conference-story-patterns.md`. For systems papers, apply Irene Zhang's Y/Z check from `expert-advice.md`: state which solution X is better for which application Y in which environment Z.

For every section, maintain this contract:

- claim,
- mechanism or argument,
- evidence,
- limitation.

Use a four-pass workflow when substantial drafting is needed:

1. **Argument plan**: section objective, claim sequence, evidence placement, and reviewer questions.
2. **Draft**: write the complete argument before optimizing length.
3. **Evidence and logic audit**: bind consequential statements to verified sources or promoted results; fix missing warrants, term drift, and unsupported causal language.
4. **Compression**: remove repetition and throat-clearing while preserving assumptions, limitations, and necessary design rationale.

Use section-specific rhetorical moves:

- introduction: problem consequence, why established approaches fail, method insight, evidence-backed contributions;
- design: goal and non-goal, constraints, alternatives considered, choice, and immediate rationale;
- evaluation: question, setup, result, interpretation, and takeaway;
- related work: mechanism-based grouping, limitation, and explicit method-positioning sentence.

Prefer headings and paragraph openings that communicate conclusions rather than generic topics. Name mechanisms, baselines, metrics, and conditions precisely. Interpret figures instead of merely pointing to them.

Use venue-aware emphasis:

- ICLR: motivation, method novelty, baseline fairness, and broader limits.
- ASPLOS/SC/EuroSys/OSDI/NSDI/SIGCOMM: system model, design rationale, implementation realism, and evaluation discipline.

Prefer concrete prose:

- replace "significantly improves" with metrics and context,
- replace "state-of-the-art" unless carefully substantiated,
- replace vague novelty claims with explicit delta over prior work.

When drafting, supply:

- section objective,
- paragraph plan,
- reviewer questions the section should answer,
- phrases that should be avoided because they overclaim.

Do not cite a discovered or abstract-only source for detailed method claims. Mark missing verification instead of drafting certainty around it.

If the session reveals a repeated writing risk or a stable preference about tone, framing, or claim strength, propose an update to researcher preferences or project memory.
