## Researchstack Skill Routing

When a request clearly matches a `researchstack` workflow, invoke the matching skill first instead of answering ad hoc.

Recommended routing:

- If the user is mid-project and asks what to do next, invoke `researchstack-next-step`.
- If the user only has a broad area, invoke `researchstack-idea-finder`.
- If the user has a rough paper direction, invoke `researchstack-lab-intake`.
- If the user wants novelty or risk review, invoke `researchstack-idea-review`.
- If the user needs guided idea repair, invoke `researchstack-idea-refine`.
- If the user needs related-work positioning, invoke `researchstack-literature-map`.
- If the user provides a paper PDF for reconstruction or replication, invoke `researchstack-paper-reproduction`.
- If the user needs evaluation planning, invoke `researchstack-experiment-design`.
- If the user needs experiment process discipline, invoke `researchstack-experiment-ops`.
- If the user needs evidence tracing or reproducibility audit, invoke `researchstack-artifact-audit`.
- If the user needs research-code review, invoke `researchstack-code-review`.
- If the user is drafting or revising the paper, invoke `researchstack-paper-write`.
- If the user is polishing figures or tables, invoke `researchstack-figure-studio`.
- If the user is cleaning LaTeX layout or presentation structure, invoke `researchstack-paper-layout`.
- If the user asks whether the paper is ready to submit, invoke `researchstack-submission-gate`.
- If the user wants a strict reviewer simulation, invoke `researchstack-peer-review`.
- If the user needs a response plan for reviews, invoke `researchstack-rebuttal-coach`.
- If the user wants to read or update durable project memory, invoke `researchstack-learn`.
