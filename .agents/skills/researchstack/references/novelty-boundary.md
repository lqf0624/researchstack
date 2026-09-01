# Innovation Boundary And Closest-Work Gate

Use this reference before approving, rejecting, or refining an idea. Similarity of topic is evidence about the competitive field, not proof that the new idea is incremental.

Treat a research **idea** as the tuple `(topic, method, claim, evidence path)`. Do not use `idea` as a synonym for `topic`.

## Keep Four Objects Separate

- **Topic or problem**: the phenomenon, bottleneck, workload, or deployment problem being studied.
- **Method or mechanism**: the information, decisions, algorithm, protocol, interface, or system design used to address it.
- **Claim**: what the paper says the method or study establishes.
- **Evidence path**: the measurements, baselines, ablations, and artifacts needed to support the claim.

Two papers may study the same topic and still differ materially in method. Conversely, a new topic label does not make a familiar method novel.

## Established-Mechanism Audit

Before inventing a new mechanism:

1. State the exact problem, semantic constraints, performance target, and resource constraints.
2. Search relevant papers, official documentation, mature open-source systems, and production implementations.
3. Record which established mechanisms can be reused directly, which need adaptation, and which fail under the stated constraints.
4. Preserve the real semantic and measurement boundary. Moving required work outside the boundary, renaming it, or batching it away is not method innovation.
5. Identify the smallest direct experiment that could validate an established mechanism before proposing a larger custom architecture.

Treat a borrowed implementation technique as prior art or enabling engineering. The research contribution must be the new method, new causal insight, new system contract, or new evidence enabled by the adaptation.

## Closest-Work Gate

Identify at least:

- **Closest direct competitor**: same problem with the most similar mechanism or claim.
- **Closest method competitor**: the work with the most similar decision logic, information, or architecture even if its application differs.
- **Closest adjacent competitor**: a different mechanism in the same reviewer mental bucket.
- **Industrial or open-source baseline**: the production system, deployed stack, benchmark, or engineering practice reviewers will expect.
- **Foundational predecessor**: the work that introduced the core architecture, metric, or mechanism family.

For each work, compare:

- problem and semantic unit,
- available information and assumptions,
- action or control granularity,
- mechanism and optimization objective,
- coordination or layer boundary,
- timing, state, failure, and heterogeneity model,
- resource cost and deployment lifecycle,
- claim and evidence path.

Do not reduce this comparison to whether two titles or topics sound alike.

## Topic-Method Innovation Matrix

Judge topic saturation and method difference separately:

| Topic state | Method state | Interpretation |
| --- | --- | --- |
| new or under-measured | familiar | potentially valuable measurement, correction, or artifact paper; do not claim method novelty |
| crowded | materially different | potentially strong mechanism or system paper if the difference changes decisions or the tradeoff frontier |
| crowded | adapted established mechanism | viable only if the adaptation is necessary, non-obvious, and causally validated under the new constraints |
| crowded | parameter or packaging variation | incremental unless it exposes a new principle or capability |
| new label | same mechanism and evidence | not novel merely because the application or terminology changed |

A topic being crowded should trigger a method-design-space analysis, not an automatic topic change.

## Method-Delta Test

A proposed method has a potentially meaningful delta when it changes at least one consequential dimension and explains why that change is necessary:

- information or signal available to the decision,
- action space or scheduling granularity,
- objective, constraint, or fairness criterion,
- coordination scope or ownership boundary,
- temporal model, state, or feedback loop,
- hardware/runtime/compiler/network interface,
- failure, heterogeneity, or scaling model,
- achievable tradeoff frontier or capability.

Then run collapse tests:

- Could the closest baseline absorb the method with one parameter, heuristic, or state variable?
- Is the difference only implementation effort, framework choice, or repackaging?
- Does the method change a decision, prediction, guarantee, or reachable operating point?
- Is a required cost hidden outside the end-to-end lifecycle or timed region?
- Can a causal ablation isolate the proposed mechanism from tuning and engineering quality?

If the delta survives, the topic may remain fixed. If it collapses, route to method synthesis before recommending a new topic.

## Mechanism And Rival Predictions

For each serious method candidate, record:

1. the bottleneck or failure it targets,
2. the mechanism chain from intervention to outcome,
3. the observable prediction if the mechanism is correct,
4. at least one rival explanation,
5. an experiment where the method and rival predict different outcomes,
6. an outcome that would falsify or materially weaken the method claim.

Do not promote a plausible story to a method contribution without discriminating evidence.

## Innovation Boundary Statement

Use a statement that separates topic and method:

> Prior work X studies problem A using mechanism B under assumptions C. We keep problem A fixed but change D in the information, action, objective, or system boundary because C fails under condition E; the resulting mechanism F predicts G and is distinguished from B by experiment H.

For measurement or correction papers, use:

> Prior work studies A with method B, but its evidence assumes C. We show that C changes conclusion D under condition E and provide measurement or evaluation method F.

Reject weak boundaries such as:

- "No one tried this exact combination."
- "The topic is new, so the method is novel."
- "The algorithm name differs, but its information and decisions are equivalent."
- "The implementation is faster" when required work moved outside the measured lifecycle.
- "Prior work did not mention this detail" without evidence that the detail changes decisions or conclusions.

## Outcome Labels

Report two labels instead of one overloaded novelty verdict.

**Topic state**:

- `open`: important behavior or setting remains poorly understood.
- `crowded`: many works study the same problem.
- `mature`: problem and standard solution space are well covered.
- `unknown`: search coverage is insufficient.

**Method state**:

- `distinct`: consequential method delta with a plausible mechanism and decisive comparison.
- `adaptation with research content`: established technique requires a non-obvious adaptation that changes behavior under the target constraints.
- `incremental`: delta is likely absorbable by tuning, a minor heuristic, or ordinary engineering.
- `already done`: closest work matches the problem, method, assumptions, and claim closely enough that the proposed contribution collapses.
- `under-specified`: no concrete method or discriminating prediction yet.
- `unknown`: evidence about closest work is insufficient.

Use `already done` only when the method-level match is established. Topic overlap alone is never enough.

## Required Response To A Weak Method

When the topic matters but the current method is weak:

1. preserve the user's topic unless they ask to explore alternatives,
2. state exactly where the current method collapses into prior work,
3. route to `researchstack-method-synthesis`,
4. generate alternative mechanisms on the same topic,
5. recommend changing topic only when the relevant method design space is also exhausted under the user's constraints.
