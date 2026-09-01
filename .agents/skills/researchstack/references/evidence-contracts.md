# Evidence And Source Contracts

Use these contracts when literature, experiments, writing, or review need traceable support. They are lightweight states, not bureaucracy.

## Source Read State

Label every source used for a consequential claim:

- `discovered`: metadata or search result only.
- `abstract-read`: title and abstract inspected; useful for triage, not detailed method claims.
- `full-text-read`: relevant full text inspected.
- `method-verified`: the method, assumptions, and evaluation details were checked in the paper, appendix, documentation, or code.
- `citation-verified`: bibliographic identity and the exact support for the cited statement were checked.

Never imply full-paper coverage from an abstract or secondary summary. Record access or coverage limits.

## Research Object State

Keep these objects distinct:

- observation,
- research question,
- hypothesis,
- candidate mechanism,
- prediction,
- rival explanation,
- experiment result,
- supported claim,
- paper-ready claim.

A plausible mechanism is not evidence. A positive result is not automatically causal evidence. A paper-ready claim requires provenance, appropriate baselines, and resolved validity risks.

## Claim Promotion

Promote a claim only when the required state is met:

1. `candidate`: idea or hypothesis with stated assumptions.
2. `mechanism-evidence`: at least one discriminating test supports the mechanism over a named rival.
3. `controlled-result`: baseline, configuration, code version, workload, and measurement boundary are recorded.
4. `robust-result`: relevant reruns, sensitivity, adverse cases, or uncertainty checks are complete.
5. `paper-ready`: the result is traceable to artifacts and the wording does not exceed the evidence.

Keep negative, contradictory, and indeterminate results in the ledger. Do not silently discard them.

## Minimal Source Passport

For each paper or external source that affects novelty or a major claim, capture:

- stable identifier or URL,
- source type and version/date,
- read state,
- relevant pages, sections, code paths, or documentation pages,
- supported claim or comparison,
- unresolved ambiguity,
- verification date.

Use a local bibliography or curated corpus before broad search when one exists, then search to fill explicit gaps. Do not upload unpublished or confidential materials to external services without authorization.
