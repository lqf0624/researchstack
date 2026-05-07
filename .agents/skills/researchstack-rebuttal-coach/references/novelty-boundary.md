# Novelty Boundary And Closest-Work Gate

Use this reference before approving or refining any research idea. The goal is to answer three questions early:

1. Has someone already done this?
2. If not, how close did prior work get?
3. What exact boundary makes the new paper more than an incremental variant?

## Closest-Work Gate

Before giving a positive idea verdict, identify at least:

- **Closest direct competitor**: same problem and similar mechanism or evaluation target.
- **Closest adjacent competitor**: different mechanism but same reviewer mental bucket.
- **Industrial or open-source baseline**: production system, deployed stack, benchmark, or common engineering practice that reviewers will expect.
- **Foundational predecessor**: older work that introduced the core architecture, metric, or scheduling idea.

For each closest work, write:

- what it already solves,
- what assumption it makes,
- what it does not model or cannot handle,
- whether that gap is essential or just an engineering omission,
- what experiment would prove the gap matters.

If this cannot be done from memory, browse or search current literature. Do not invent novelty boundaries.

## Novelty Boundary Statement

End related-work analysis with one sentence of this form:

> Prior work X solves A under assumptions B; this paper studies C, where B fails because D, and contributes E validated by F.

Reject boundaries of these weak forms:

- "Prior work did not consider our exact combination of knobs."
- "Prior work uses a different algorithm, but the same signal would probably work."
- "Prior work is not open source, so we reimplemented something similar."
- "Prior work targets a different benchmark, but the underlying setting is the same."
- "Prior work ignores this detail, but no experiment shows the detail changes decisions."

## Related-Work Table Columns

For crowded areas, require a compact matrix with columns such as:

- work,
- setting,
- control variable or mechanism,
- assumptions,
- deployment realism,
- whether it handles delays/failures/state/heterogeneity,
- evidence type,
- why it is not enough.

Customize columns to the domain. The important point is to expose the exact missing dimension, not to list many papers.

## Story Selection After Related Work

Choose the paper story from the gap:

- If prior work has the same mechanism but weak measurements: use a **measurement/correction** story.
- If prior work has the right observation but no deployable design: use a **system/mechanism** story.
- If prior work has a strong mechanism but wrong objective or signal: use a **wrong metric/control signal** story.
- If prior work solves steady state but not dynamic conditions: use a **wrong timing/failure model** story.
- If prior work is strong and only misses a minor detail: downgrade the idea or look for a sharper setting.

## Mandatory Review Questions

- Which paper would a reviewer cite in the first sentence of the weakness section?
- If that paper added one heuristic or one state variable, would it erase the novelty?
- Is the new claim about a phenomenon, a mechanism, an implementation, a metric, or only a framing?
- What is the strongest baseline that uses the same raw inputs but not the proposed method?
- What result would make the paper unnecessary?

## Outcome Labels

Use these labels in idea review:

- **Clear gap**: prior work misses an essential condition and the proposed paper has a plausible decisive experiment.
- **Crowded but viable**: prior work is close, but the new story can survive with strong baselines and careful scope.
- **Incremental**: the gap is a knob, metric, or implementation detail that a strong baseline could absorb.
- **Already done**: a prior paper has the same problem, mechanism, and evidence path.
- **Unknown**: the literature check is insufficient; do not give a strong positive verdict.
