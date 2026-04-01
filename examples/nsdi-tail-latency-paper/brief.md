# Paper Brief

- Working title: TailGuard
- Domain: datacenter transport / scheduling
- Target venue: NSDI
- One-sentence thesis: TailGuard reduces p99 latency under bursty multi-tenant traffic by shaping burst admission with queue-aware control rather than average-throughput heuristics.
- Core bet: queue-aware burst control can produce reviewer-believable tail wins without collapsing throughput in realistic traffic mixes.
- Main risks:
  - synthetic-only workloads will not support deployment claims
  - strongest baseline may erase average-case gains
  - mechanism is not believable unless queue occupancy evidence is shown
