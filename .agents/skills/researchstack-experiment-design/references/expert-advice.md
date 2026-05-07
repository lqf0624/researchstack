# Expert Advice Sources For Systems Papers

This file records grounded advice sources. Use it to keep `conference-story-patterns.md` honest: the venue story patterns are synthesized heuristics, not official rules or direct quotes from any one expert.

## Core Systems Paper Advice

### Levin and Redell: How and How Not to Write a Good Systems Paper

Source: Roy Levin and David D. Redell, SOSP 1983 PC co-chairs.

Use for:

- checking whether the paper has at least one real new idea,
- asking whether the system is implemented or hypothetical,
- forcing authors to state lessons clearly,
- avoiding irrelevant system description,
- keeping the paper focused on novel technical content.

Codex rule:

- If the paper cannot state the new idea in a paragraph, or cannot say what the reader learns, mark the idea under-specified.
- If a system paper hides that the system is unimplemented, treat that as a major honesty and readiness problem.

### The Many Faces of Systems Research

Source: HotOS 2005 essay on evaluating different forms of systems research.

Use for:

- avoiding one-size-fits-all review,
- distinguishing scientific, engineering, empirical, and design contributions,
- accepting that systems papers may be valuable in different ways, while still requiring evidence.

Codex rule:

- Classify the paper type before judging it. Do not force a measurement paper, mechanism paper, system paper, and abstraction paper through the same novelty template.

### Irene Zhang: Hints on how to write an SOSP paper

Source: Irene Zhang, systems researcher, SOSP/OSDI author and reviewer.

Use for:

- structuring systems papers around "why, how, results",
- explicitly stating target application Y and environment Z,
- making every design choice discuss alternatives and tradeoffs,
- ensuring every experiment has a point tied to the thesis,
- decomposing evaluation into end-to-end comparison plus design-decision ablations.

Codex rule:

- For any proposed systems paper, ask: "X is better for which applications Y in which environment Z?"
- Reject vague claims that do not pin down Y and Z.
- For every design decision, require an alternative and a reason the chosen tradeoff is right.

### Kayvon Fatahalian: What Makes a Systems Paper Beautiful

Source: Kayvon Fatahalian, Stanford; graphics systems but broadly useful for systems work.

Use for:

- articulating system goals, non-goals, and constraints,
- identifying central organizing principles,
- explaining why design decisions, not feature lists, are the intellectual contribution,
- evaluating whether design decisions caused the observed success.

Codex rule:

- A systems paper must define goals, non-goals, and constraints before proposing a design.
- A system description is not enough. The paper must teach generalizable design wisdom.

## Writing And Framing Advice

### Jennifer Widom: Tips for Writing Technical Papers

Source: Jennifer Widom, Stanford.

Use for:

- making abstracts and introductions concrete,
- avoiding generic motivation,
- writing with clear logical flow,
- keeping claims and evidence aligned.

Codex rule:

- Before drafting, summarize the paper in problem, approach, result, and implication.
- If the introduction cannot say exactly what problem is solved and why prior work fails, revise the framing before polishing prose.

### Simon Peyton Jones: How to Write a Great Research Paper

Source: Simon Peyton Jones.

Use for:

- treating a paper as the carrier of one idea,
- writing the introduction as an argument,
- making the contribution explicit early,
- not burying the main idea under implementation chronology.

Codex rule:

- If the paper has too many ideas, pick the one that survives skeptical review and demote the rest to support or future work.

### Phil Koopman: How to Write an Abstract

Source: Phil Koopman, CMU; commonly used for computer architecture and systems abstracts.

Use for:

- abstract checklist: motivation, problem statement, approach, results, conclusions,
- forcing results to be numeric when possible,
- making scope and limitations visible.

Codex rule:

- A draft abstract that lacks one of motivation/problem/approach/result/implication is incomplete.

### Armando Fox: Writing Good Papers

Source: Armando Fox, Berkeley.

Use for:

- remembering that systems paper statements are supported by citation, experiment, or clearly marked opinion,
- checking whether building the system validated the research hypothesis,
- avoiding "a lot of engineering" as a substitute for evidence.

Codex rule:

- When reviewing a claim, label its support: citation, experiment, or opinion. Unsupported factual claims are reviewer bait.

### John Ousterhout: Hints for Reviewing Papers

Source: John Ousterhout's review guidance, often circulated through systems courses.

Use for:

- quickly identifying whether the paper is a vision, measurement, or implementation paper,
- checking whether the main contribution can be summarized in one or two sentences,
- judging whether the paper will generate useful discussion.

Codex rule:

- If the reviewer cannot summarize the contribution quickly, the paper needs framing work even if the technical content is good.

## Systems Design And Evaluation Advice

### Butler Lampson: Hints for Computer System Design

Source: Butler W. Lampson, SOSP 1983 / classic systems design essay.

Use for:

- system design tradeoffs,
- simple interfaces and clear responsibility boundaries,
- avoiding over-precision where system requirements are inherently messy,
- thinking in goals, constraints, interfaces, and failure modes.

Codex rule:

- For systems design sections, ask whether interfaces and responsibilities are simple enough to explain and whether the design avoids terrible choices, not whether it claims a universal optimum.

### Gernot Heiser: Systems Benchmarking Crimes

Source: Gernot Heiser.

Use for:

- benchmarking rigor,
- fair baselines,
- avoiding throughput-only claims,
- reporting significance and sub-benchmark detail,
- avoiding selective workloads and misleading averages.

Codex rule:

- If the evaluation has selective benchmarks, weak baselines, throughput-only metrics, no variability/significance, or no platform detail, flag it as a paper-killing risk.

### David Patterson: Bad Career / Research Advice

Source: David Patterson's widely circulated "How to Have a Bad Career" talk.

Use for:

- avoiding complexity-as-contribution,
- choosing problems that matter,
- communicating clearly,
- valuing simple, high-impact ideas.

Codex rule:

- Treat unnecessary complexity as a liability. If the idea only sounds deep because it is hard to explain, simplify or reject the framing.

## How To Use These Sources

- Use the named sources for principles, not for appeals to authority.
- Do not quote them unless the user asks for citations.
- When adding a heuristic to a skill, mark whether it is grounded in a source or synthesized from paper-reading experience.
- Prefer this chain when shaping a paper:
  1. classify the paper type,
  2. identify Y and Z if it is a systems paper,
  3. state the one idea,
  4. define goals, non-goals, and constraints,
  5. require design alternatives and ablations,
  6. check benchmarking crimes,
  7. only then polish the story.
