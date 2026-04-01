# Project Memory Entry Template

Use one JSON object per line in `~/.researchstack/projects/<slug>/memory.jsonl`.

```json
{
  "ts": "2026-03-31T15:20:00Z",
  "type": "evaluation_rule",
  "title": "Baseline tuning budget must be disclosed",
  "detail": "Do not compare against prior work unless the tuning budget and hardware budget are described alongside the main result.",
  "confidence": "high",
  "source": "observed",
  "files": ["results/ablation_notes.md"],
  "tags": ["fairness", "asplos"]
}
```
