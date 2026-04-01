# Experiment Matrix

| Claim | Metric | Workload | Baseline | Ablation | Expected Outcome | Failure Interpretation |
|---|---|---|---|---|---|---|
| TailGuard improves burst tail latency | p99 FCT, worst-case queue delay | production-like burst trace | DCTCP, HPCC, strongest tuned scheduler | disable queue-aware admission | TailGuard lowers p99 without throughput collapse | If only average improves, the thesis is too weak |
| Mechanism matters, not just traffic luck | queue occupancy, drop rate | synthetic burst + replay trace | strongest baseline | replace queue-aware signal with static threshold | queue-aware signal explains the win | If occupancy evidence is flat, mechanism is unproven |
| Wins are robust to tenant interference | p99 FCT under mixed load | multi-tenant interference scenarios | strongest baseline | remove interference-aware shaping | TailGuard degrades more gracefully | If gains disappear under interference, scope must narrow |
