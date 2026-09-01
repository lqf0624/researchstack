# Research Workflow

Use a branch that matches the user's actual research state. Do not force every project through topic discovery.

## Entry Branches

### Open-topic branch

Use when the user has an area but is willing to choose among problems:

1. `researchstack-idea-finder`
2. `researchstack-lab-intake`
3. `researchstack-idea-review`
4. `researchstack-literature-map`

### Fixed-topic method branch

Use when the topic is important or already chosen, including when similar work exists:

1. `researchstack-literature-map` for established mechanisms and closest method competitors
2. `researchstack-method-synthesis` for alternative mechanisms on the same topic
3. `researchstack-idea-review` for topic-method separated review
4. `researchstack-experiment-design` for discriminating tests

Do not route back to topic discovery merely because the topic is crowded.

### Research-program branch

Use when a grant direction or durable topic should support several papers:

1. `researchstack-program-map`
2. select one paper candidate
3. `researchstack-lab-intake`
4. `researchstack-method-synthesis`
5. `researchstack-idea-review`

Apply the one-paper envelope to each candidate, not to the entire research program.

### Existing-paper reproduction branch

Use when work starts from a paper, appendix, or repository:

1. `researchstack-paper-reproduction`
2. `researchstack-experiment-design`
3. `researchstack-experiment-ops`
4. `researchstack-artifact-audit`
5. `researchstack-peer-review`

## Evidence-Building And Submission Flow

After a thesis and method survive review:

1. Design evaluation backward from claims, method predictions, and rival explanations.
2. Run the smallest direct test of established mechanisms and the proposed method before building a larger architecture.
3. Use experiment operations to separate exploratory, mechanism, controlled, robust, and paper-ready results.
4. Audit artifacts and code before trusting any figure or headline claim.
5. Draft around claim, mechanism, evidence, and limitation.
6. Render and inspect figures and layout before delivery.
7. Run submission gate and independent reviewer lenses.
8. Prepare rebuttal only from evidence available or explicitly obtainable during the response period.

## Evidence Ladder

- Level 1: observation, intuition, anecdote, or smoke result
- Level 2: repeatable qualitative pattern or diagnostic evidence
- Level 3: controlled quantitative result with fair baselines and complete measurement boundary
- Level 4: mechanism evidence, causal ablation, sensitivity, adverse cases, and uncertainty checks
- Level 5: paper-ready claim with reproducible provenance and external-validity discussion

Use the source and claim states in [evidence-contracts.md](evidence-contracts.md). Do not promote a result because it looks promising or because the prose is already written.
