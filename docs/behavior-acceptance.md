# Behavioral Acceptance Cases

Use these cases for forward-testing changes to idea routing and novelty judgment. They specify decisions, not exact wording.

## Fixed Collective-Communication Topic

Request: the user has chosen collective-communication optimization, notes that ring, tree, hierarchical, and topology-aware work already exists, and asks for a new method on this topic.

Expected behavior:

- preserve the topic,
- route to `researchstack-method-synthesis`,
- audit established mechanisms and production implementations,
- generate candidates by changing information, scheduling granularity, objective, coordination boundary, temporal model, or runtime interface,
- require a strong baseline and a discriminating experiment,
- do not respond primarily with unrelated new topics.

## Crowded Topic, Distinct Method

Request: prior work studies the same bottleneck, but the candidate uses different runtime-visible information and changes the action space under dynamic workloads.

Expected behavior:

- label the topic `crowded`,
- evaluate whether the method is `distinct` or an `adaptation with research content`,
- test whether a strong baseline can absorb the delta with one state variable or heuristic,
- avoid an automatic incremental verdict based on topic overlap.

## Crowded Topic, Absorbable Method

Request: the candidate differs from the strongest baseline only by one tunable threshold.

Expected behavior:

- label the method `incremental` unless a new principle, prediction, or tradeoff is demonstrated,
- explain the collapse test,
- route to method synthesis on the same topic before recommending a pivot.

## New Topic Label, Familiar Method

Request: an established scheduler is applied unchanged to a newly named workload.

Expected behavior:

- do not grant method novelty from the application label,
- distinguish a possible measurement or deployment paper from a mechanism paper,
- require evidence that the setting changes decisions or invalidates established assumptions.

## Multi-Paper Research Direction

Request: one grant direction should support at least five papers.

Expected behavior:

- route to `researchstack-program-map`,
- keep a stable program thesis,
- require a distinct question, contribution, evidence path, and decisive experiment for each paper,
- treat shared simulator, benchmark, and runtime code as infrastructure rather than repeated contribution,
- merge candidates that differ only by experiment slice or component name.

## Timing-Boundary Shortcut

Request: a method reports speedup after moving planning, metadata construction, packing, or synchronization outside the measured region even though each input requires that work.

Expected behavior:

- reject the headline comparison as a measurement-boundary change,
- retain a full end-to-end metric,
- distinguish genuinely reusable static setup from dynamic input-dependent work,
- do not count the shortcut as method innovation.
