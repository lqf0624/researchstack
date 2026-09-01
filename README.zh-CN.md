# researchstack

[English](README.md) | 简体中文

`researchstack` 是一套面向计算机系统、网络和 AI 论文的 workflow-first research skill pack。

它不是一组零散 prompt，而是一条更接近严肃论文团队的工作流：从方向形成、idea 审查、相关工作定位、实验设计、实验过程管理，到 artifact 审查、代码审查、写作、排版、投稿把关、模拟审稿和 rebuttal。

目标会议包括但不限于：

- ICLR
- ASPLOS
- SC
- EuroSys
- OSDI
- NSDI
- SIGCOMM

## 为什么需要它

很多研究助手能做好单点任务，比如总结论文、写摘要、头脑风暴。但是它们常见的问题是：

- thesis 还没站稳就开始写论文
- idea 还没过 novelty 审查就开始做实验
- related work 没查清楚就把方向包装成“新抽象”
- claim 和 experiment 没对齐，最后写作很痛苦
- scope 越做越大，一篇论文变成几篇论文混在一起
- 多轮对话后忘掉之前已经明确过的 venue、reviewer 风险和实验约束

`researchstack` 把研究推进压到更严格的路径上：

`idea -> review -> literature -> experiment -> artifact -> writing -> submission -> rebuttal`

## Idea 流程的新能力

这版重点加强了 idea review、related work 和讲故事能力：

- **先判断 paper type**：先把 idea 分成 measurement、mechanism、system、algorithm/control、architecture/co-design、artifact/evaluation 或 abstraction，再决定怎么讲贡献。
- **限制“新抽象”滥用**：只有当抽象可操作、能改变决策、能预测旧方法失败、可被 ablation 验证，并且强 baseline 仍无法覆盖时，才允许把贡献讲成 abstraction。
- **Closest-Work Gate**：给出正向 verdict 前，必须识别 closest direct competitor、closest adjacent competitor、industrial/open-source baseline 和 foundational predecessor。
- **Topic 与 method 分开判断**：topic 拥挤不再自动等于拒绝；分别报告 topic state 和 method state。
- **固定 topic 的方法生成**：先审计已有机制，再从信息、决策粒度、目标、协同边界、时序状态和接口等维度生成新方法。
- **Novelty Boundary**：必须说明已有假设为何失效，以及新贡献究竟改变了信息、决策、目标、边界、接口还是权衡曲线。
- **Story Candidate**：idea review 和 literature map 现在会强制输出 venue story pattern、systems paper 的 X/Y/Z statement、closest-work contrast sentence，以及第一张关键图或第一个决定性实验。
- **大牛经验来源**：系统论文讲故事和写作规则参考了 Levin and Redell、The Many Faces of Systems Research、Irene Zhang、Kayvon Fatahalian、Jennifer Widom、Simon Peyton Jones、Phil Koopman、Armando Fox、John Ousterhout、Butler Lampson、Gernot Heiser、David Patterson 等公开经验。

## 你会得到什么

- 一个总路由 skill：`researchstack`
- 20 个带 `researchstack-*` 前缀的细分研究 skills
- Claude Code 风格的 source skills
- Codex-compatible 的 `.agents/skills/` 生成产物
- 一层本地 memory，用于长期项目
- host 检测、project slug、doctor 检查、routing 安装等 runtime 辅助命令
- 面向实验流程、复现、排版、图表和 submission gate 的模板资源
- 示例 workflow 和 example project

## 常用命令

```bash
bun run project:slug -- --root .
bun run memory:status -- --root .
bun run doctor
bun run routing:install -- --host claude
bun run upgrade -- auto
```

`doctor` 现在是只读检查：核对安装数量、包版本、内容指纹、routing 状态和重复备份目录，不会为了检查而创建配置。`routing:install` 会把 `Researchstack Skill Routing` 区块追加到 `CLAUDE.md` 或 `AGENTS.md`。

## Skill 总览

### 路由与记忆

- `researchstack`：总路由器。适合跨多个阶段的“帮我推进这篇论文”请求。
- `researchstack-next-step`：中途决策层。适合卡住时判断下一步应该用哪个 skill。
- `researchstack-program-map`：多论文规划层。围绕一个稳定方向拆分相互独立的 thesis、证据路径、依赖和共享基础设施。
- `researchstack-learn`：项目记忆和研究者偏好管理，用来记录 thesis 边界、venue 决策、reviewer 风险和实验规则。

### 选题与方向形成

- `researchstack-idea-finder`：只在 topic 选择开放时使用。它扫描近期工作、生成候选问题，并通过 mandatory review 过滤。
- `researchstack-method-synthesis`：当 topic 已固定或已有相似工作时使用。在同一 topic 内审计已有机制并生成、淘汰和排序新方法。
- `researchstack-lab-intake`：把粗糙方向整理成 paper brief，包括 venue、thesis、assumptions、threat model 和下一步。
- `researchstack-idea-review`：严格审查 idea 的 novelty、重要性、scope、evidence burden、closest work、故事方式和 reviewer 风险。
- `researchstack-idea-refine`：对“有潜力但还不够好”的 idea 做 guided repair。
- `researchstack-literature-map`：做相关工作地图，找 closest comparison set、industrial/open-source baseline、novelty boundary、story candidate 和 competing narratives。

### 复现已有论文

- `researchstack-paper-reproduction`：从论文 PDF、appendix 或 repo 出发，重构方法、实验和 claim，并给出 reproduction verdict。

### 实验与证据

- `researchstack-experiment-design`：设计 evaluation matrix，包括 baselines、metrics、workloads、ablations、scaling checks 和 failure tests。
- `researchstack-experiment-ops`：管理实验过程，包括 runbook、logging、seed、checkpoint、triage 和 result promotion。
- `researchstack-artifact-audit`：追踪 figure 和 claim 的证据来源，检查 scripts、configs、seeds、hardware assumptions 和 outputs。
- `researchstack-code-review`：审查研究代码是否正确，是否存在隐藏偏差，是否支撑得住论文 claim。

### 写作与表达

- `researchstack-paper-write`：按 claim-evidence discipline 起草或修改论文。
- `researchstack-figure-studio`：规划 figures 和 tables，让图表承担证据表达，而不是只做装饰。
- `researchstack-paper-layout`：改善 LaTeX 结构、符号、caption、table、appendix 和 camera-ready 细节。

### 投稿与评审

- `researchstack-submission-gate`：最终投稿把关，判断现在该不该投、是否需要延期或改投。
- `researchstack-peer-review`：模拟严格会议审稿，给出最可能的拒稿路径。
- `researchstack-rebuttal-coach`：把 reviewer comments 转成结构化 rebuttal plan 和逐点回应策略。

## 常见 workflow

### 1. 只有一个大方向

推荐顺序：

1. `researchstack-idea-finder`
2. `researchstack-lab-intake`
3. `researchstack-idea-review`
4. `researchstack-literature-map`

产出：

- 少量经过审查的 topic cards
- 被淘汰方向及原因
- 一篇论文大小的 thesis candidates
- clean handoff 到真实 paper planning

### 2. Topic 已固定，但方法较弱或已有很多相似工作

推荐顺序：

1. `researchstack-literature-map`
2. `researchstack-method-synthesis`
3. `researchstack-idea-review`
4. `researchstack-experiment-design`

产出：

- 已有机制的 reuse / adapt / fail 审计
- 分开的 topic state 和 method state
- 同一 topic 下多个经过压力测试的方法候选
- 区分新方法、强 baseline 和竞争解释的决定性实验

### 3. 一个长期方向要支撑多篇论文

推荐顺序：

1. `researchstack-program-map`
2. 选择一个 paper candidate
3. `researchstack-lab-intake`
4. `researchstack-method-synthesis`
5. `researchstack-idea-review`

产出：

- 稳定的 program thesis
- 可复用基础设施地图
- 相互独立的多论文 portfolio
- 依赖、停止条件和防止 salami slicing 的重叠审计

### 4. 已经有粗糙论文 idea

推荐顺序：

1. `researchstack-lab-intake`
2. `researchstack-idea-review`
3. 必要时使用 `researchstack-idea-refine`
4. `researchstack-literature-map`

产出：

- venue target
- one-sentence thesis
- novelty boundary
- closest-work matrix
- story candidate
- highest-risk unknowns

### 5. 已经有代码和结果

推荐顺序：

1. `researchstack-experiment-design`
2. `researchstack-experiment-ops`
3. `researchstack-artifact-audit`
4. `researchstack-code-review`

产出：

- claim-to-evidence matrix
- controlled run process
- reproducibility gaps
- 可能拖垮论文的实现风险

### 6. 要复现已有论文

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

### 7. 正在写作或打磨投稿

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

`researchstack` 自带轻量本地 memory，长期项目不需要每次从零开始。

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

## 设计来源

v0.3 参考了 K-Dense scientific-agent-skills、Orchestra AI-Research-SKILLs、ARS-Codex 和 SNL-UCSB paper-writing-skill 中的部分工作流思想，并针对 systems 研究重新实现。具体吸收边界见 [docs/design-provenance.md](docs/design-provenance.md)；本仓库没有打包这些项目的代码、hooks、网络服务或外部 runtime。

## 安装

Windows 推荐使用不依赖 Bun 的跨平台安装器：

```bash
node scripts/install.js --host codex
```

要求：

- Git
- Bun
- Windows 上推荐使用 Git Bash 运行 `./setup`

GitHub 仓库：

- [lqf0624/researchstack](https://github.com/lqf0624/researchstack)

### Claude Code

全局安装：

```bash
git clone https://github.com/lqf0624/researchstack.git ~/.claude/skills/researchstack
cd ~/.claude/skills/researchstack
./setup --host claude
```

安装到单个 repo：

```bash
cp -Rf ~/.claude/skills/researchstack .claude/skills/researchstack
rm -rf .claude/skills/researchstack/.git
cd .claude/skills/researchstack
./setup --host claude
```

### Codex-Compatible Hosts

全局安装：

```bash
git clone https://github.com/lqf0624/researchstack.git ~/researchstack
cd ~/researchstack
./setup --host codex
```

安装到单个 repo：

```bash
git clone https://github.com/lqf0624/researchstack.git .agents/skills/researchstack
rm -rf .agents/skills/researchstack/.git
cd .agents/skills/researchstack
./setup --host codex
```

显式指定安装目标：

```bash
cd ~/researchstack
./setup --host codex --target /path/to/project/.agents/skills
```

## 仓库结构

- [SKILL.md](SKILL.md)：根路由和 workflow 入口
- `idea-review/`、`paper-write/`、`experiment-design/` 等目录：source skills
- [references](references)：共享 review、venue、story、novelty 和写作参考
- `.agents/skills/`：Codex-compatible 生成产物
- [scripts/gen-skill-docs.js](scripts/gen-skill-docs.js)：生成分发包
- [setup](setup)：Claude 和 Codex-compatible hosts 的安装器

## 贡献

见：

- [CONTRIBUTING.md](CONTRIBUTING.md)
- [LICENSE](LICENSE)
