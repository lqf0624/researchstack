export const sourceDirs = [
  ".",
  "next-step",
  "program-map",
  "lab-intake",
  "idea-finder",
  "method-synthesis",
  "idea-review",
  "idea-refine",
  "literature-map",
  "learn",
  "paper-reproduction",
  "experiment-design",
  "experiment-ops",
  "artifact-audit",
  "code-review",
  "paper-write",
  "paper-layout",
  "figure-studio",
  "submission-gate",
  "peer-review",
  "rebuttal-coach"
];

export function generatedSkillName(sourceDir) {
  return sourceDir === "." ? "researchstack" : `researchstack-${sourceDir}`;
}
