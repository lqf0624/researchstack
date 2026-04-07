# researchstack

[English](README.md) | 简体中文

`researchstack` 是一套面向计算机系统、网络和人工智能论文的 workflow-first 研究 skills 包。

它服务的不是“帮你写几段文案”这种零散任务，而是整条科研工作流：从方向形成、论文选题、相关工作定位、实验设计与实验过程管理，到代码和 artifact 审查、论文撰写、排版、投稿把关、模拟审稿和 rebuttal。

适用的代表性会议包括：

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
- 17 个带 `researchstack-*` 前缀的研究 skills，便于搜索
- Claude Code 直接使用的源码 skills
- Codex-compatible 宿主使用的 `.agents/skills/` 生成产物
- 本地项目记忆层
- 面向复现、实验、排版、画图、投稿检查的模板资源
- 示例 workflow 和一个真实感较强的 example project

宿主 UI 里还会按 `Researchstack: ...` 这样的显示名分组，长列表里更容易找到。

## Skill 总览

### 路由与记忆

- `researchstack`
  总路由器。适合“帮我推进这篇论文”这种跨多阶段请求。
- `researchstack-learn`
  项目记忆与研究者偏好管理。适合记录 thesis、venue 决策、reviewer 风险、实验规则等可复用信息。

### 选题与方向形成

- `researchstack-idea-finder`
  当你只有大致兴趣方向，还没有“一篇论文大小”的题目时使用。它会先看近期论文，再生成候选 topic，然后强制经过 review，只把过筛后的题目给你。
- `researchstack-lab-intake`
  把粗糙方向压成 paper brief。适合 venue 选择、thesis 收敛、假设与风险梳理。
- `researchstack-idea-review`
  严格审查一个研究 idea 的 novelty、重要性、scope、证据负担和 reviewer 风险。
- `researchstack-idea-refine`
  给“有潜力但还不够好”的 idea 做引导式收敛和修复。
- `researchstack-literature-map`
  做相关工作地图，确定 novelty 边界、最接近的 baseline 和会被拿来比较的论文集合。

### 论文复现

- `researchstack-paper-reproduction`
  从论文 PDF、附录或代码仓库出发，重构方法、实验和 claim，给出 reproduction plan 与 reproducibility verdict。

### 实验与证据

- `researchstack-experiment-design`
  设计实验矩阵：baseline、指标、workload、ablation、scaling、failure test 等。
- `researchstack-experiment-ops`
  管理实验过程：runbook、日志、seed、checkpoint、triage、result promotion。
- `researchstack-artifact-audit`
  追溯 figure 和 claim 的证据来源，检查 scripts、configs、seeds、hardware assumptions 和 outputs。
- `researchstack-code-review`
  审查研究代码是否正确、是否暗含偏差、是否会得出站不住脚的结论。

### 写作与表达

- `researchstack-paper-write`
  按 claim-evidence discipline 起草或修订论文各章节。
- `researchstack-figure-studio`
  规划 figures 和 tables，让图表承担证据表达，而不是只是“看起来完整”。
- `researchstack-paper-layout`
  改善 LaTeX 结构、标题层次、符号、caption、table、appendix 和 camera-ready 细节。

### 投稿与评审

- `researchstack-submission-gate`
  最终投稿把关。判断该不该投、该不该延后、是否需要改投其他 venue。
- `researchstack-peer-review`
  模拟严格会议审稿，给出最可能的拒稿理由。
- `researchstack-rebuttal-coach`
  把 reviewer comments 变成结构化 rebuttal plan 和逐点回应策略。

## 常见使用路径

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
- 最危险的 reviewer 风险

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
- 可能导致论文站不住的实现问题

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
- reproducibility verdict

### 5. 你已经进入写作与投稿阶段

推荐顺序：

1. `researchstack-paper-write`
2. `researchstack-figure-studio`
3. `researchstack-paper-layout`
4. `researchstack-submission-gate`
5. `researchstack-peer-review`
6. `researchstack-rebuttal-coach`

产出：

- 更紧的章节结构
- 更有证据表达力的图表
- 更干净的排版
- 更清晰的 submit / delay 判断

## 记忆层

`researchstack` 带了一个轻量本地 memory layer，适合长期项目，不必每次会话都从头开始。

- 项目记忆：`~/.researchstack/projects/<slug>/memory.jsonl`
- 研究者偏好：`~/.researchstack/profile/preferences.json`

适合记录：

- thesis 边界
- venue 决策
- baseline 和 evaluation 规则
- 硬件或数据约束
- reviewer 风险
- 重复出现的写作问题

初始化 helper：

```bash
bun run memory:init -- --root <repo-root>
```

slug 规则：

- `<repo-name>-<sha256(normalized-remote-or-root-path)[:6]>`

## 安装

要求：

- Git
- Bun
- Windows 上建议用 Git Bash 运行 `./setup`
- WSL 只有在宿主会扫描 WSL 侧 skills 目录，或者你显式用 `--target` 指向 Windows 可见路径时才合适

仓库地址：

- GitHub: [lqf0624/researchstack](https://github.com/lqf0624/researchstack)

### Claude Code

全局安装：

```bash
git clone https://github.com/lqf0624/researchstack.git ~/.claude/skills/researchstack
cd ~/.claude/skills/researchstack
./setup --host claude
```

安装到单个项目：

```bash
cp -Rf ~/.claude/skills/researchstack .claude/skills/researchstack
rm -rf .claude/skills/researchstack/.git
cd .claude/skills/researchstack
./setup --host claude
```

### Codex-Compatible 宿主

全局安装：

```bash
git clone https://github.com/lqf0624/researchstack.git ~/researchstack
cd ~/researchstack
./setup --host codex
```

安装到单个项目：

```bash
git clone https://github.com/lqf0624/researchstack.git .agents/skills/researchstack
rm -rf .agents/skills/researchstack/.git
cd .agents/skills/researchstack
./setup --host codex
```

如果从 `.agents/skills/researchstack` 运行 setup，它会保留 vendored 根 skill 作为 `researchstack` 路由入口，同时在旁边生成 `researchstack-*` sibling skills，不会写入 `~/.codex/skills`。

显式目标目录安装：

```bash
cd ~/researchstack
./setup --host codex --target /path/to/project/.agents/skills
```

自动探测宿主：

```bash
./setup --host auto
```

## 仓库结构

- [SKILL.md](SKILL.md)
  根路由和总 workflow 入口
- `artifact-audit/`、`idea-review/`、`paper-write/` 等目录
  source skills
- [references](references)
  共享规则和参考材料
- 每个 skill 的 `assets/`
  模板和 checklist
- 每个 skill 的 `agents/openai.yaml`
  宿主 UI 元数据
- [scripts/gen-skill-docs.js](scripts/gen-skill-docs.js)
  分发产物生成器
- [scripts/init-memory.js](scripts/init-memory.js)
  memory slug / 初始化 helper
- [setup](setup)
  Claude / Codex 安装脚本
- [.agents/skills](.agents/skills)
  生成后的分发目录

## 示例与演示

- [docs/demo-workflow-gpu-simulator-paper.md](docs/demo-workflow-gpu-simulator-paper.md)
  端到端 GPU simulator paper 示例
- [docs/demo-workflow-paper-reproduction.md](docs/demo-workflow-paper-reproduction.md)
  论文复现分支示例
- [docs/demo-memory-flow.md](docs/demo-memory-flow.md)
  memory flow 示例
- [examples/nsdi-tail-latency-paper/README.md](examples/nsdi-tail-latency-paper/README.md)
  更真实的 example project artifacts

## 参与贡献

参见：

- [CONTRIBUTING.md](CONTRIBUTING.md)
- [LICENSE](LICENSE)

## 常见问题

- 安装后看不到 skills：重新运行 `./setup`，然后重启宿主让它重新扫描 skills 目录。
- repo-local 安装跑到了 home 目录：使用 README 里写的 gstack-style 路径，或者改用 `--target`。
- Windows + WSL 安装成功但桌面端看不到：改用 Git Bash，或者用 `./setup --target <Windows-visible-skills-dir>`。
- 你只想生成分发产物，不想全局安装：运行 `bun run gen:skill-docs --host codex`，直接使用 `.agents/skills/`。
