# Top Systems Conference Story Patterns

Use this reference when judging or shaping paper ideas for ASPLOS, SC, EuroSys, OSDI, NSDI, and adjacent systems venues. The goal is to avoid defaulting every idea to "we introduce a new abstraction." Classify the paper type first, then decide whether an abstraction is actually earned.

This is a synthesized practical taxonomy, not an official venue rule or a direct quote from any single source. It is grounded in classic systems-paper advice, public CFP expectations, artifact-evaluation norms, and recurring patterns in accepted systems papers. For named sources, read `expert-advice.md`.

## First Classify The Paper Type

Before proposing a contribution, choose the strongest truthful type:

- **Measurement paper**: reveals a real phenomenon, quantifies it carefully, and changes how systems should be designed or evaluated.
- **Mechanism paper**: introduces a concrete scheduling, caching, placement, routing, control, protocol, compiler, runtime, or resource-management mechanism.
- **System paper**: builds a working system whose design resolves a practical tension, with implementation details and end-to-end evidence.
- **Algorithm/control paper**: gives a decision procedure with a clear model, optimality/robustness argument, and empirical wins.
- **Architecture/co-design paper**: changes the contract between hardware, runtime, compiler, OS, or application layers.
- **Artifact/evaluation paper**: provides a benchmark, simulator, testbed, or methodology that exposes wrong conclusions in prior work.
- **Abstraction paper**: valid only when the new abstraction is operational, changes decisions, predicts failures of prior approaches, and cannot be captured by a strong baseline.

If the answer is "abstraction paper" only because the mechanism is weak, mark the idea under-specified.

## Venue Lenses

### ASPLOS

Typical story:

- A cross-layer mismatch blocks performance, efficiency, or scalability.
- The paper identifies the bottleneck with measurements.
- It introduces a hardware-software, compiler-runtime, memory-system, or architecture-runtime mechanism.
- The evaluation shows where the design wins, where it does not, and why the tradeoff is principled.

Strong idea shapes:

- "Existing layer boundary hides the real bottleneck."
- "A small hardware/runtime/compiler interface enables a qualitatively better schedule."
- "The workload has changed enough that old architecture assumptions fail."

Reviewer pressure:

- Do not rely on simulator-only claims without calibration.
- Do not present a runtime tweak as architecture co-design unless the interface or contract changes.
- Show sensitivity, scaling, and cost/complexity.

### SC

Typical story:

- A large-scale scientific/AI/HPC workflow is bottlenecked by communication, memory, scheduling, I/O, or orchestration.
- The method improves scalability, utilization, time-to-solution, energy, or reproducibility.
- Evidence includes strong/weak scaling, system size, workload realism, and reproducibility.

Strong idea shapes:

- "At scale, the dominant bottleneck changes."
- "The scheduler/runtime must be topology-, data-, or workflow-aware."
- "The method preserves performance portability across machines or models."

Reviewer pressure:

- Microbenchmarks are not enough.
- Cluster assumptions must be explicit.
- Scaling methodology and artifact provenance matter.

### EuroSys

Typical story:

- A production-relevant systems problem is mis-modeled or poorly handled by existing abstractions.
- The paper builds a deployable system or control plane that resolves the mismatch.
- Evidence combines real traces, prototype implementation, calibrated simulation when needed, and strong baselines.

Strong idea shapes:

- "The operational control variable is wrong."
- "A deployment reality such as delay, churn, heterogeneity, failures, or statefulness changes the correct decision."
- "A system design turns that observation into better SLO/cost/reliability."

Reviewer pressure:

- A named abstraction alone is weak.
- The artifact must look deployable or at least faithfully emulate deployment constraints.
- Related work and baselines must include production-like alternatives.

### OSDI

Typical story:

- A real systems problem requires a clean design, not just tuning.
- The paper presents a complete system with a crisp interface, implementation, and lessons.
- The design is general enough to matter beyond one benchmark.

Strong idea shapes:

- "A clean system boundary enables simpler and more robust operation."
- "The system turns a messy operational problem into a manageable primitive."
- "Real deployment or near-real deployment exposes constraints prior work missed."

Reviewer pressure:

- Implementation must be serious.
- Tell the system story through design principles and tradeoffs, not only metrics.
- Be precise about compatibility, failure modes, and operational complexity.

### NSDI

Typical story:

- A networked or distributed system faces latency, reliability, scalability, coordination, routing, or congestion problems.
- The paper introduces a mechanism/protocol/control loop and evaluates under realistic dynamics.
- Operational robustness, failure handling, and deployment path matter.

Strong idea shapes:

- "Coordination across distributed components is the bottleneck."
- "Local heuristics are unstable or suboptimal under dynamic workload/failure."
- "A new control signal, routing primitive, or protocol changes tail behavior."

Reviewer pressure:

- Show adverse cases, failure handling, and dynamic workloads.
- Avoid toy topologies or single happy-path traces.
- Distinguish protocol/mechanism novelty from engineering packaging.

## Good Story Templates

- **Wrong metric**: Existing systems optimize a proxy; the paper shows the proxy misranks decisions and provides a better measurable signal.
- **Wrong boundary**: Existing layer boundaries hide the information needed for good decisions; the paper changes the interface.
- **Wrong timing model**: Existing control assumes instant effects; the paper models delay, state, and transition dynamics.
- **Wrong workload assumption**: A new workload regime breaks old schedulers or architectures; the paper characterizes and exploits the difference.
- **Wrong resource model**: A resource is treated as fungible but is actually typed, stateful, heterogeneous, or topology-dependent.
- **Mechanism unlock**: A concrete mechanism makes a previously impractical policy feasible.
- **Calibration bridge**: A simulator or model becomes credible because real measurements bound its error.

## Anti-Patterns

- "We define a new abstraction" but it does not change any concrete decision.
- "We build a controller" but the controller is an obvious MPC/bandit around hand-picked variables.
- "We improve P99" but only against weak or stale baselines.
- "We use real traces" but not real system calibration.
- "We are the first to consider X" but related work has the same practical insight under different terminology.
- "The simulator is detailed" but no experiment shows simulator error against a real system.

## Abstraction Gate

Only call the contribution an abstraction if all are true:

1. **Operational definition**: it can be computed from observable or measurable state.
2. **Decision relevance**: it changes action ranking or system behavior.
3. **Failure prediction**: it predicts when prior approaches fail.
4. **Causal isolation**: an ablation can remove the abstraction and show degradation.
5. **Baseline resistance**: a strong heuristic with the same raw inputs still cannot fully capture it.

If any item is missing, frame the contribution as a measurement, mechanism, system design, or evaluation methodology instead.
