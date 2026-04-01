# Figure Storyboard

## Figure 1

- Purpose: show the problem
- Visual: bursty multi-tenant trace with queue buildup and tail spike
- Caption point: average latency hides the real failure mode

## Figure 2

- Purpose: show the main result
- Visual: p99 latency and throughput side-by-side for TailGuard vs tuned baselines
- Caption point: tail wins are real only when the throughput tax is visible

## Figure 3

- Purpose: show the mechanism
- Visual: queue occupancy and admission decisions over time
- Caption point: the scheduler is not lucky, it reacts differently under burst pressure
