---
title: "Agent时代，程序员该关注的四件事"
description: "当 AI 不断突破能力边界，程序员的精力该投向哪里？四件事：把 AI 用起来、探索边界、优化推理、选对目的地。"
publishDate: "09 Jul 2026"
updatedDate: "11 Jul 2026"
tags: ["agent", "career"]
pinned: true
---

_船可以越造越好，但目的地永远要人来选。_

---

随着 LLM 性能不断强化、Agent 框架不断迭代，AI 的能力在持续增强，一直在突破自己的边界，完成之前完成不了的事情。这给包括我在内的计算机行业从业者带来了很多冲击和迷茫：当 AI 能够解决过去由我们来解决的问题时，程序员还能做什么？

我目前的答案是，人的价值会越来越集中在两件事上。一是**嗅觉**——技术永远是用来解决问题、创造利润的，而"哪个问题值得解决"没有标准答案，无法事先打分，只能有人做出选择，并为选择的结果负责。二是**判断**——AI 的产出是好是坏、能不能采纳，最终要有人拍板。Addy Osmani 对这条边界有个很好的说法：AI 会擅长一切有"答案钥匙"（answer key）的事情，留给人的，是没有答案钥匙的部分。注意这条边界划的不是能力——提问题、给方向 AI 都做得到，它可以给你一百个——而是可评分性和问责：没有人能替你为选中的那一个负责。

当然，这个目标很远大，需要持续的学习和进步才能靠近。我把路径拆成四件事：

1. **把 AI 用起来**：多用、多学开源框架，把自动化程度当作一个按任务调节的旋钮；
2. **探索 AI 能力的边界**：减少幻觉，构建好的流程，让中等模型在垂直领域逼近甚至超过顶级模型；
3. **优化推理框架**：缩短响应时间，减少 token 用量，降低 GPU 的空转；
4. **明确要用 AI 完成什么**：并且分得清，失败到底是 AI 能力不足，还是我们使用 AI 的方法不对。

## 一、把 AI 用起来

基模的好坏是清晰的：用不同的数据集跑分，就能明显分辨出模型在基础能力上的差异。Agent 则相当于基模的增幅器和行为矫正仪，它的好坏在很大程度上决定了用户体验，也决定了同一个基模在特定问题上的表现。SWE-agent 的论文验证过这一点：同代的基模，配一个简单的 RAG 检索脚手架，在 SWE-bench 上只能解决不到 2% 的问题；换上一套精心设计的 ACI（Agent-Computer Interface）之后是 12.5%（[SWE-agent 论文](https://arxiv.org/abs/2405.15793)）——接近一个数量级的差距，来自 harness 而不是基模。目前优秀的开源框架如 Opencode、OpenClaw 都是很好的学习材料，基于它们做调整，能更好地解决实际生产中遇到的问题。只有熟悉了现有的开源框架，才会对整个 Agent harness 的流程了然于胸，知道高质量的 agent 系统应该怎么搭。

至于怎么用，我原来的说法是"尽可能端到端自动化，尽可能减少 human in the loop"。现在我把它修正为：**自动化程度是一个按任务调节的设置，不是一个越高越好的勋章**。调节的依据是三个问题：这个任务如果做错了，我们多快能发现？发现之后，能多干净地撤销？以及，拿什么证据证明它做对了？风险低、可回滚、容易验证的任务，尽管把自治开到最大，端到端去跑；反过来，就把人留在关键节点上。Addy Osmani 把这叫[「校准的自治」（calibrated autonomy）](https://addyosmani.com/blog/agentic-autonomy-levels/)。人的位置也随之变化：从亲手做每一步（in the loop），退到定方向、验收结果（on the loop）——退出执行，但不退出判断。

## 二、探索 AI 能力的边界

作为一个传统的程序员，调用 AI 的体验对我来说是很割裂的。一方面，比起过去手搓代码，效率大大提升；另一方面，比起过去亲手解决问题，成就感大大降低，反而把审批代码的活留给了自己。总感觉活没少干，成就感却没挣到多少。长期来看，无论对职业发展还是对工作积极性，这都不是好事。

我原来设想的解法是：搭建完整的工作流，AI 能完全胜任的环节全部自动化，人只出现在 AI 搞不定的地方。现在我意识到这个设计有一个漏洞：**嗅觉和判断力本质上是模式匹配，而模式是靠亲手干活喂出来的**。如果我永远只在最难的边界上出场，判断力反而会失去训练来源，慢慢萎缩（taste atrophy）。所以修正后的做法分成两半。

对流程，**降低判断的成本，而不是移除判断**。把 review 从逐行看 diff，变成验收一份"证据包"（evidence packet）：测试结果、运行日志、截图、风险清单。不要拿 agent 的自我总结代替真实审查——这种偷懒有个名字，叫 Summary Substitution；也要警惕审批疲劳导致的权限越放越宽（Permission Laundering）：当你发现自己在无脑点"同意"的时候，恰恰是该收紧权限的时候。

对自己，**刻意保留一部分手感**：定期不借助 agent 裸写代码；像 review 人类同事一样 review agent 的 diff；给 agent 犯过的错记一本错题本。这些活看起来"低效"，但它们喂养的正是那个最终没法自动化的东西。这也比"把人彻底解放出去"更接近效率和成就感之间可持续的平衡。

自动化本身，依然需要强健的评估和兜底机制。对准确度不敏感的问题，减少迭代和人为介入的次数；对准确度敏感的问题，建立完善的兜底和筛查机制——宁愿 agent 没有输出，也不允许它输出错误的信息。这些机制的效果都应该被度量：返工率、缺陷逃逸率、平均多久需要人干预一次、每一次通过验收消耗的 token 成本。一个环节的自治等级能不能再往上调一档，让数据说话，而不是凭感觉。

## 三、优化推理框架

降本增效永远是技术发展的驱动力。当我们对 Agent harness 熟练之后，不可避免地会在同一时间调用大量 agent：成本怎么可控、多 agent 怎么编排，是接下来要解决的问题。GPU 在大多数时间其实处于等待状态，处理单个请求时利用率可能只有 20%；把利用率提上去，就能大幅摊薄每个 token 的成本。编排层面，一个好的 UI 也很有必要：怎么基于大量功能单一的 agent，快速搭出一个逻辑闭环的复杂 agent loop，同时避免"一堆 agent 在跑、每个依赖都靠人肉接线"的假并行（Fleet Cosplay），也是需要解决的问题。

另一个方向是加强中等模型的能力。强弱模型之间的价格可以差很多倍，如果能把弱模型在特定问题上优化到接近强模型，就能省下大量成本。而模型强弱最重要的指标是**稳定**：两者的差距，主要体现在处理复杂问题时，强模型的输出质量是稳定的高。这一点对 agent 尤其致命，因为长链条任务的可靠性是按乘法复利的——单步成功率 99% 的模型连跑 30 步，整体成功率还剩约 74%；单步 95% 的只剩约 21%。所以在垂直领域优化中等模型，与其说是在提升它的峰值能力，不如说是在收窄它的方差。

## 四、明确要用 AI 完成什么

在 AI 大发展的今天，职位之间、专业知识之间的边界感在不断减弱，商业模式和商业嗅觉越来越重要。AI 也许能带来 x100 的 productivity，但怎么把它变成 x100 的 revenue，永远是人要解决的问题；在有限的时间里，让 AI 去做最有价值的事，也永远是人要解决的问题。

如果把 AI 比作一艘船，人永远是它的舵手。我们可以把船造得很好，适应各种恶劣的气候和环境，但起航的时候，我们总需要一个目的地。目的地之所以归人，不是因为 AI 画不出航线——它可以给你一百条——而是因为航线无法事先打分，而且必须有人为选定的那一条负责："是 AI 选的"，在任何一次搁浅之后都不构成辩护。也只有当目的地足够远、要跨越足够多的艰难险阻时，我们花这么大力气把船造好，才是有意义的。

---

> The world isn't short on opportunity; it's short on people who can find the right problem, tell whether the machine solved it, and finish past where the machine stopped. … In the world of agents, the last few feet are infinite (agents scale output infinitely; you don't). Your attention is your most precious asset, and it doesn't refill. … Anything which is gradeable by someone else is getting automated. The career is the ungradeable part: choosing what matters, judging honestly when you've got it, and answering for it.
>
> —— Addy Osmani, [Career advice in the age of agents](https://addyosmani.com/blog/career-advice-age-of-agents/)

文中借用的一组词汇——calibrated autonomy、evidence packet、Summary Substitution、Permission Laundering、Fleet Cosplay——出自他的另一篇 [Agentic autonomy levels](https://addyosmani.com/blog/agentic-autonomy-levels/)。
