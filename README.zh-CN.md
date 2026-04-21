# researchstack

[English](README.md) | 简体中文

`researchstack` 是一套面向计算机系统、网络和人工智能论文的 workflow-first research skill pack。

它服务的不是“帮你写几段文案”这种零散任务，而是整条科研工作流：从方向形成、论文选题、相关工作定位、实验设计与实验过程管理，到代码和 artifact 审查、论文撰写、排版、投稿把关、模拟审稿和 rebuttal。

代表性会议包括：

- ICLR
- ASPLOS
- SC
- NSDI
- SIGCOMM

## 这套包解决什么问题

很多研究助手单点能力不错，但 workflow 很弱。常见问题是：

- 题目还没站稳，就开始写论文
- 方向还没过 novelty 审查，就开始做实验
- 实验和 claim 没对齐，最后写作很痛苦
- 一篇论文的 scope 越做越大，最后像三篇混在一起
- 多轮会话之后，系统忘了你之前已经明确过的 venue、reviewer 风险和实验约束

`researchstack` 的目标正好相反。它希望把研究工作推到更严格的路径上：

`idea -> review -> literature -> experiment -> artifact -> writing -> submission -> rebuttal`

## 你会得到什么

- 一个总路由 skill：`researchstack`
- 18 个带 `researchstack-*` 前缀的研究 skills，便于搜索
- 适合 Claude Code 风格安装的源码 skills
- 适合 Codex-compatible 宿主的 `.agents/skills/` 生成产物
- 一层本地 memory，用于长期项目
- 一组 runtime 辅助命令，用来做 host 探测、项目 slug、doctor 检查和 routing 安装
- 面向实验流程、复现、排版、画图和投稿 gate 的模板资源
- 示例 workflow 和 example project

宿主 UI 里会把这些 skill 显示为 `Researchstack: ...`，在长列表里更容易找到。

## Runtime 与维护命令

`researchstack` 现在带了一层轻量 runtime，根 router 在选择 workflow 之前可以先感知当前 host、项目 slug 和 memory 状态。

常用命令：

```bash
bun run project:slug -- --root .
bun run memory:status -- --root .
bun run doctor
bun run cleanup:installs
bun run routing:install -- --host claude
bun run upgrade -- auto
```

`doctor` 会检查安装状态、routing 状态、managed 标记以及重复的备份 skill 目录。`cleanup:installs` 会清理历史遗留的 `researchstack*.bak.*` 安装目录。routing 安装器会把 `Researchstack Skill Routing` 区块追加到 `CLAUDE.md` 或 `AGENTS.md`。

## Skill 总览

### 路由与记忆

- `researchstack`
  总路由器。适合“帮我推进这篇论文”这种跨多阶段请求。
- `researchstack-next-step`
  中途决策层。适合“我现在不知道下一步该干什么、该用哪个 skill”的状态。
- `researchstack-learn`
  项目记忆与研究者偏好管理。适合记录 thesis 边界、venue 决策、reviewer 风险和实验规则。

### 选题与方向形成

- `researchstack-idea-finder`
  当你只有大致兴趣方向，还没有“一篇论文大小”的题目时使用。
- `researchstack-lab-intake`
  把粗糙方向压成 paper brief。适合 venue 选择、thesis 收敛、假设与风险梳理。
- `researchstack-idea-review`
  严格审查一个研究 idea 的 novelty、重要性、scope、证据负担和 reviewer 风险。
- `researchstack-idea-refine`
  给“有潜力但还不够好”的 idea 做引导式收敛和修复。
- `researchstack-literature-map`
  做相关工作地图，确定 novelty 边界、最接近的 baseline 和比较对象。

### 论文复现

- `researchstack-paper-reproduction`
  从论文 PDF、附录或代码仓库出发，重构方法、实验和 claim，给出 reproduction plan 与 verdict。

### 实验与证据

- `researchstack-experiment-design`
  设计实验矩阵：baseline、指标、workload、ablation、scaling、failure test。
- `researchstack-experiment-ops`
  管理实验过程：runbook、日志、seed、checkpoint、triage、result promotion。
- `researchstack-artifact-audit`
  追溯 figure 和 claim 的证据来源，检查 scripts、configs、seeds、hardware assumptions 和 outputs。
- `researchstack-code-review`
  审查研究代码是否正确，是否有隐藏偏差，是否会支撑不住论文 claim。

### 写作与表达

- `researchstack-paper-write`
  按 claim-evidence discipline 起草或修订论文各章节。
- `researchstack-figure-studio`
  规划 figures 和 tables，让图表承担证据表达，而不是只做装饰。
- `researchstack-paper-layout`
  改善 LaTeX 结构、符号、caption、table、appendix 和 camera-ready 细节。

### 投稿与评审

- `researchstack-submission-gate`
  最终投稿把关。判断现在该不该投、要不要延后、是否需要改投 venue。
- `researchstack-peer-review`
  模拟严格会议审稿，给出最可能的拒稿理由。
- `researchstack-rebuttal-coach`
  把 reviewer comments 变成结构化 rebuttal plan 和逐点回应策略。

## 常见使用路径

### 0. 你卡住了，不知道下一步该做什么

推荐顺序：

1. `researchstack-next-step`
2. 它推荐的 1 到 2 个后续 skills
3. 如果产生了长期决策，再用 `researchstack-learn`

产出：

- 当前研究阶段
- 当前阻塞点
- 一个明确的下一步 skill
- 暂时不要做什么
- 简短后续链路

### 1. 你只有一个大方向，没有具体题目

推荐顺序：

1. `researchstack-idea-finder`
2. `researchstack-lab-intake`
3. `researchstack-idea-review`
4. `researchstack-literature-map`

产出：

- 少量经过审查的 topic cards
- 被淘汰方向及原因
- 一篇论文大小的 thesis candidates
- 后续 paper planning 的清晰入口

### 2. 你已经有一个粗糙论文想法

推荐顺序：

1. `researchstack-lab-intake`
2. `researchstack-idea-review`
3. 如有必要，`researchstack-idea-refine`
4. `researchstack-literature-map`

产出：

- venue 选择
- 一句话 thesis
- novelty 边界
- 最高风险未知项

### 3. 你已经有代码和一些结果

推荐顺序：

1. `researchstack-experiment-design`
2. `researchstack-experiment-ops`
3. `researchstack-artifact-audit`
4. `researchstack-code-review`

产出：

- claim-to-evidence matrix
- 更可控的实验流程
- reproducibility gaps
- 可能拖垮论文的实现问题

### 4. 你要复现一篇已有论文

推荐顺序：

1. `researchstack-paper-reproduction`
2. `researchstack-experiment-design`
3. `researchstack-experiment-ops`
4. `researchstack-artifact-audit`
5. `researchstack-peer-review`

产出：

- reproduction brief
- ambiguity log
- reconstruction matrix
- reviewer 风格的 reproducibility critique

### 5. 你在写作或打磨投稿

推荐顺序：

1. `researchstack-paper-write`
2. `researchstack-figure-studio`
3. `researchstack-paper-layout`
4. `researchstack-submission-gate`
5. `researchstack-peer-review`
6. `researchstack-rebuttal-coach`

产出：

- 更紧的章节结构
- 更强的 figures 和 captions
- 更干净的排版
- 更清晰的 submit-or-delay 判断

## Memory 层

`researchstack` 自带一层轻量本地 memory，长期项目不需要每次从零开始。

- 项目 memory：`~/.researchstack/projects/<slug>/memory.jsonl`
- 研究者偏好：`~/.researchstack/profile/preferences.json`

适合记录：

- thesis 边界
- venue 决策
- baseline 和 evaluation 规则
- hardware 或 dataset 约束
- 常见 reviewer 风险
- 反复出现的写作弱点

初始化稳定 slug 和 memory 布局：

```bash
bun run memory:init -- --root <repo-root>
```
