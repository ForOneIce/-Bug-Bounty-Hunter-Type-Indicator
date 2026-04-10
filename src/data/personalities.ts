import { Personality } from '../types';

export const personalities: Personality[] = [
  {
    id: 'cyber-sherlock',
    name: '赛博福尔摩斯',
    nameEn: 'Cyber Sherlock',
    house: 'Ravenclaw',
    match: '赫敏·格兰杰',
    quote: '“智慧不仅是知识，更是知道如何寻找知识。”',
    attributes: { curiosity: 95, depth: 90, systemic: 95, ambition: 40, exploration: 60, diligence: 80 },
    advantages: '深度分析能力、系统性思维、报告质量极高、能发现链式漏洞。',
    curses: '产出效率不稳定、容易分析瘫痪、过度追求完美而错失机会。',
    recommendedSpells: ['深度分析咒', '逻辑链构造术', '系统溯源咒'],
    bestTeammates: [
      { type: '脚本海王', synergy: '他帮你广撒网，你负责深度解谜' },
      { type: '搞钱优先侠', synergy: '把你的深度发现转化为稳定收益' }
    ],
    developmentStages: {
      initial: { name: '技术海绵', description: '沉迷于学习漏洞原理和工具使用，试图理解所有技术细节。' },
      growth: { name: '系统研究员', description: '开始专注于特定类型的漏洞或技术栈，进行深度、系统的分析。' },
      mature: { name: '领域专家/架构师', description: '能够洞悉系统架构的深层缺陷，发现新颖的链式漏洞或逻辑问题。' }
    }
  },
  {
    id: 'vulnerability-assassin',
    name: '漏洞刺客',
    nameEn: 'Vulnerability Assassin',
    house: 'Slytherin',
    match: '德拉科·马尔福',
    quote: '“排行榜就是我的血条，TOP1才是我的归宿。”',
    attributes: { curiosity: 70, depth: 85, systemic: 60, ambition: 95, exploration: 80, diligence: 70 },
    advantages: '创造性绕过、竞争意识强、目标锁定精准、高价值漏洞发现率。',
    curses: '容易倦怠(Burnout)、人际关系紧张、可能过度追求大招而忽视基础。',
    recommendedSpells: ['隐匿行踪咒', '致命一击术', '防御绕过咒'],
    bestTeammates: [
      { type: '数字哥伦布', synergy: '他帮你找到无人竞争的战场' },
      { type: '赏金判官', synergy: '帮你把技术发现包装成项目方无法拒绝的报告' }
    ],
    developmentStages: {
      initial: { name: '技巧追逐者', description: '热衷于学习和复现各种炫酷的利用技巧，追求一招制敌。' },
      growth: { name: '战术设计师', description: '发展出自己独特的测试方法 and 绕过策略，不再依赖公开脚本。' },
      mature: { name: '攻击策略大师', description: '能够为整个目标设计系统的攻击路径，并预判防御方的应对。' }
    }
  },
  {
    id: 'bounty-civil-servant',
    name: '赏金公务员',
    nameEn: 'Bounty Civil Servant',
    house: 'Hufflepuff',
    match: '珀西·韦斯莱',
    quote: '“流程就是我的魔杖。”',
    attributes: { curiosity: 50, depth: 60, systemic: 80, ambition: 60, exploration: 40, diligence: 95 },
    advantages: '标准化流程、报告质量稳定、沟通专业、长期声誉积累。',
    curses: '创造性不足、可能陷入重复劳动、对新兴攻击面反应较慢。',
    recommendedSpells: ['合规守护咒', '标准报告术', '持续产出咒'],
    bestTeammates: [
      { type: '云上遛鸟师', synergy: '带你进入高价值云安全领域' },
      { type: '赛博菩萨', synergy: '帮你建立个人品牌' }
    ],
    developmentStages: {
      initial: { name: '流程学习者', description: '系统学习标准测试方法论、报告撰写和沟通礼仪。' },
      growth: { name: '专业执行者', description: '建立个人标准化工作流程，并能稳定输出高质量报告。' },
      mature: { name: '安全顾问/管理者', description: '其经验可用于指导安全开发流程、设计赏金计划或培训团队。' }
    }
  },
  {
    id: 'digital-columbus',
    name: '数字哥伦布',
    nameEn: 'Digital Columbus',
    house: 'Gryffindor',
    match: '纽特·斯卡曼德',
    quote: '“地图边缘才是我的起点。”',
    attributes: { curiosity: 95, depth: 50, systemic: 70, ambition: 70, exploration: 95, diligence: 60 },
    advantages: '侦察能力顶尖、发现独家目标、定义新攻击面、方法论创新。',
    curses: '深度不足、可能发现即放弃、报告质量波动、收入不稳定。',
    recommendedSpells: ['全域搜索咒', '资产测绘术', '未知领域开拓咒'],
    bestTeammates: [
      { type: '赛博福尔摩斯', synergy: '把你的发现深度挖掘' },
      { type: '0day炼金师', synergy: '在无人之地寻找通用漏洞' }
    ],
    developmentStages: {
      initial: { name: '工具收集者', description: '热衷于尝试各种侦察和信息收集工具，广撒网。' },
      growth: { name: '攻击面测绘师', description: '能够将分散的信息关联起来，绘制出目标的完整、独特的数字资产地图。' },
      mature: { name: '新战场开辟者', description: '其探索方向往往能定义新的漏洞赏金细分领域或攻击面类别。' }
    }
  },
  {
    id: 'money-first-hero',
    name: '搞钱优先侠',
    nameEn: 'Money First Hero',
    house: 'Slytherin',
    match: '弗雷德与乔治·韦斯莱',
    quote: '“时间就是金钱，漏洞就是提款机。”',
    attributes: { curiosity: 60, depth: 50, systemic: 50, ambition: 98, exploration: 70, diligence: 70 },
    advantages: '投入产出比极高、目标选择精准、快速变现、适应性强。',
    curses: '技术深度有限、社区声誉一般、容易倦怠、长期竞争力下降。',
    recommendedSpells: ['财富倍增咒', '效率提速术', '精准打击咒'],
    bestTeammates: [
      { type: '赏金公务员', synergy: '把你的收益模式系统化' },
      { type: '一招鲜大师', synergy: '教你找到高回报细分领域' }
    ],
    developmentStages: {
      initial: { name: '奖金猎人', description: '直接瞄准奖金高、范围宽、竞争可能较少的甜点项目。' },
      growth: { name: '效率优化师', description: '深入研究各平台的奖励策略、漏洞定价模型，优化投入产出比。' },
      mature: { name: '风险投资者', description: '将漏洞赏金视为一种安全投资，其决策基于对目标业务、技术栈和安全成熟度的综合判断。' }
    }
  },
  {
    id: 'cyber-bodhisattva',
    name: '赛博菩萨',
    nameEn: 'Cyber Bodhisattva',
    house: 'Hufflepuff',
    match: '阿不思·邓布利多',
    quote: '“知识共享，功德无量。”',
    attributes: { curiosity: 80, depth: 70, systemic: 85, ambition: 30, exploration: 60, diligence: 90 },
    advantages: '影响力深远、人脉广泛、教学相长、社区声誉极高。',
    curses: '个人产出可能被分散、容易被人白嫖、可能忽视自身技术成长。',
    recommendedSpells: ['智慧启迪咒', '知识传播术', '社区守护咒'],
    bestTeammates: [
      { type: '漏洞刺客', synergy: '用他的实战案例教学' },
      { type: '赛博人机合一', synergy: '一起探索AI+教育的新模式' }
    ],
    developmentStages: {
      initial: { name: '积极参与者', description: '在论坛、Discord、Twitter上积极提问、回答和分享小技巧。' },
      growth: { name: '内容创造者', description: '通过博客、视频、工具脚本等形式，系统性地输出高质量的学习资源。' },
      mature: { name: '生态建设者/导师', description: '致力于建设平台、标准或培养下一代猎人。' }
    }
  },
  {
    id: '0day-alchemist',
    name: '0day炼金师',
    nameEn: '0day Alchemist',
    house: 'Ravenclaw',
    match: '西弗勒斯·斯内普',
    quote: '“禁忌知识，一击致命。”',
    attributes: { curiosity: 98, depth: 98, systemic: 90, ambition: 50, exploration: 70, diligence: 85 },
    advantages: '技术深度极致、通用漏洞发现、乘数效应极高、行业影响力深远。',
    curses: '入门门槛极高、周期极长、风险极大、可能长期无产出。',
    recommendedSpells: ['底层重构咒', '万能破解术', '零日爆发咒'],
    bestTeammates: [
      { type: '搞钱优先侠', synergy: '帮你把0day转化为最大收益' },
      { type: '漏洞黄牛', synergy: '处理复杂的披露和交易' }
    ],
    developmentStages: {
      initial: { name: '底层学徒', description: '沉迷于二进制分析、逆向工程、漏洞原理的深度学习。' },
      growth: { name: '漏洞研究员', description: '开始独立发现新的漏洞类型或通用绕过方法。' },
      mature: { name: '0day大师', description: '能够稳定产出影响广泛的零日漏洞，定义新的攻击类别。' }
    }
  },
  {
    id: 'master-of-one',
    name: '一招鲜大师',
    nameEn: 'Master of One',
    house: 'Ravenclaw',
    match: '纳威·隆巴顿',
    quote: '“专精一处，极致到底。”',
    attributes: { curiosity: 70, depth: 95, systemic: 80, ambition: 60, exploration: 40, diligence: 90 },
    advantages: '竞争壁垒极高、效率随经验指数增长、成为该领域默认选择。',
    curses: '领域风险（技术过时）、视野狭窄、转型困难。',
    recommendedSpells: ['领域精通咒', '垂直打击术', '专家直觉咒'],
    bestTeammates: [
      { type: '数字哥伦布', synergy: '帮你发现该领域的新应用场景' },
      { type: '规则法师', synergy: '帮你建立该领域的标准话语权' }
    ],
    developmentStages: {
      initial: { name: '领域选择者', description: '在众多技术领域中选择一个感兴趣且相对小众的方向。' },
      growth: { name: '领域专家', description: '在该细分领域建立知名度，成为项目方遇到相关问题时的首选。' },
      mature: { name: '领域权威', description: '定义该领域的安全标准，其研究成果成为行业参考。' }
    }
  },
  {
    id: 'script-king',
    name: '脚本海王',
    nameEn: 'Script King',
    house: 'Slytherin',
    match: '亚瑟·韦斯莱',
    quote: '“自动化就是生产力。”',
    attributes: { curiosity: 60, depth: 40, systemic: 70, ambition: 85, exploration: 90, diligence: 80 },
    advantages: '规模效应、覆盖广度、效率极高、工具开发能力。',
    curses: '重复率高、报告质量参差不齐、容易被标记为低质量。',
    recommendedSpells: ['万剑归宗咒', '自动巡航术', '规模扫描咒'],
    bestTeammates: [
      { type: '赛博福尔摩斯', synergy: '帮你从海量结果中筛选深度价值' },
      { type: '云上遛鸟师', synergy: '将自动化扩展到云环境' }
    ],
    developmentStages: {
      initial: { name: '脚本用户', description: '熟练使用各种开源扫描工具和自动化框架。' },
      growth: { name: '流程自动化者', description: '开始编写自己的脚本，整合多个工具链，建立自动化工作流。' },
      mature: { name: '工具链开发者', description: '开发出被广泛使用的自动化工具或平台。' }
    }
  },
  {
    id: 'binary-taoist',
    name: '二进制道士',
    nameEn: 'Binary Taoist',
    house: 'Ravenclaw',
    match: '青年伏地魔',
    quote: '“在0和1之间寻找真理。”',
    attributes: { curiosity: 95, depth: 98, systemic: 85, ambition: 60, exploration: 50, diligence: 90 },
    advantages: '技术壁垒极高、移动/硬件/IoT领域稀缺、漏洞价值极高。',
    curses: '学习曲线陡峭、工具链复杂、市场相对小众。',
    recommendedSpells: ['逆向溯源咒', '固件解构术', '内存掌控咒'],
    bestTeammates: [
      { type: '0day炼金师', synergy: '一起研究底层漏洞' },
      { type: '暗网商人', synergy: '处理硬件漏洞的特殊交易渠道' }
    ],
    developmentStages: {
      initial: { name: '逆向学徒', description: '学习汇编、C语言、调试器使用，分析简单二进制文件。' },
      growth: { name: '固件分析师', description: '开始分析真实设备的固件、移动应用、驱动程序。' },
      mature: { name: '二进制大师', description: '能够发现影响广泛的硬件或系统级漏洞。' }
    }
  },
  {
    id: 'cloud-bird-walker',
    name: '云上遛鸟师',
    nameEn: 'Cloud Bird Walker',
    house: 'Gryffindor',
    match: '卢娜·洛夫古德',
    quote: '“在云端闲庭信步，一眼看出配置问题。”',
    attributes: { curiosity: 90, depth: 60, systemic: 80, ambition: 60, exploration: 95, diligence: 70 },
    advantages: '新兴领域、供应链攻击视角、自动化友好、影响范围广。',
    curses: '技术栈变化快、需要持续学习、部分问题被低估。',
    recommendedSpells: ['云端巡视咒', '权限解构术', '架构洞察咒'],
    bestTeammates: [
      { type: '脚本海王', synergy: '将云侦察自动化' },
      { type: '赛博人机合一', synergy: '探索AI辅助云安全' }
    ],
    developmentStages: {
      initial: { name: '云服务用户', description: '熟悉主流云平台的基本服务和配置。' },
      growth: { name: '配置审计员', description: '能够系统地发现云环境中的配置错误和权限问题。' },
      mature: { name: '云安全架构师', description: '能够从供应链和架构层面发现云环境的系统性风险。' }
    }
  },
  {
    id: 'cyber-cyborg',
    name: '赛博人机合一',
    nameEn: 'Cyber Cyborg',
    house: 'Ravenclaw',
    match: '分院帽',
    quote: '“碳基与硅基的完美结合。”',
    attributes: { curiosity: 85, depth: 70, systemic: 90, ambition: 75, exploration: 80, diligence: 80 },
    advantages: '效率革命、信息处理量远超人类、快速适应新范式。',
    curses: '依赖外部工具、可能忽视AI幻觉、核心竞争力可能被平台化。',
    recommendedSpells: ['AI共鸣咒', '提示词增强术', '数据流掌控咒'],
    bestTeammates: [
      { type: '赛博福尔摩斯', synergy: 'AI负责广度，你负责深度判断' },
      { type: '赛博菩萨', synergy: '一起探索AI+教育的新边界' }
    ],
    developmentStages: {
      initial: { name: 'AI工具使用者', description: '使用ChatGPT、Claude等工具辅助分析漏洞、撰写报告。' },
      growth: { name: 'AI工作流整合者', description: '将AI深度整合到狩猎流程中，建立人机协作模式。' },
      mature: { name: 'AI增强安全专家', description: '能够利用AI发现传统方法难以发现的复杂漏洞。' }
    }
  },
  {
    id: 'blockchain-gold-digger',
    name: '链上掘金侠',
    nameEn: 'Blockchain Gold Digger',
    house: 'Slytherin',
    match: '古灵阁妖精',
    quote: '“代码即法律，漏洞即提款机。”',
    attributes: { curiosity: 75, depth: 85, systemic: 80, ambition: 98, exploration: 60, diligence: 85 },
    advantages: '单笔奖金极高、技术前沿、全球竞争但相对公平。',
    curses: '领域极度专业化、波动极大、法律风险、需要金融知识。',
    recommendedSpells: ['合约审计咒', '重入攻击术', '闪电贷解构咒'],
    bestTeammates: [
      { type: '搞钱优先侠', synergy: '一起研究DeFi经济模型' },
      { type: '规则法师', synergy: '处理复杂的跨境法律问题' }
    ],
    developmentStages: {
      initial: { name: 'Solidity学习者', description: '学习智能合约语言、区块链基础、DeFi协议。' },
      growth: { name: '合约审计员', description: '能够发现智能合约中的逻辑漏洞和经济模型缺陷。' },
      mature: { name: '链上安全专家', description: '能够发现影响整个协议或跨链系统的严重漏洞。' }
    }
  },
  {
    id: 'side-hustle-immortal',
    name: '打工人副业仙',
    nameEn: 'Side Hustle Immortal',
    house: 'Hufflepuff',
    match: '莫丽·韦斯莱',
    quote: '“主业之外，别有洞天。”',
    attributes: { curiosity: 70, depth: 60, systemic: 65, ambition: 70, exploration: 60, diligence: 85 },
    advantages: '风险低、压力小、可持续、主业技能反哺。',
    curses: '时间有限、难以深度、容易半途而废。',
    recommendedSpells: ['时间管理咒', '效率最大化术', '平衡守护咒'],
    bestTeammates: [
      { type: '赏金公务员', synergy: '帮你建立高效的周末工作流程' },
      { type: '一招鲜大师', synergy: '教你用有限时间最大化产出' }
    ],
    developmentStages: {
      initial: { name: '周末战士', description: '利用周末和业余时间进行漏洞挖掘，兴趣驱动。' },
      growth: { name: '稳定副业者', description: '建立稳定的副业收入，形成固定的工作节奏。' },
      mature: { name: '转型准备者', description: '积累足够经验和储蓄后，准备转为全职。' }
    }
  },
  {
    id: 'insider-ambition',
    name: '内鬼の野望',
    nameEn: 'Insider Ambition',
    house: 'Azkaban',
    match: '小矮星彼得',
    quote: '“最危险的敌人来自内部。”',
    attributes: { curiosity: 50, depth: 60, systemic: 70, ambition: 95, exploration: 40, diligence: 80 },
    advantages: '内部知识、权限、难以检测。',
    curses: '道德风险、法律风险、心理负担、最终必然暴露。',
    recommendedSpells: ['权限滥用咒', '痕迹抹除术', '内部渗透咒'],
    bestTeammates: [
      { type: '暗网商人', synergy: '处理窃取的数据' },
      { type: '被迫营业打工人', synergy: '胁迫他人成为内鬼' }
    ],
    developmentStages: {
      initial: { name: '不满积累者', description: '因个人恩怨、财务压力或意识形态开始寻找系统弱点。' },
      growth: { name: '主动攻击者', description: '明确了目标，并制定了行动计划。' },
      mature: { name: 'APT内部代理', description: '其行动可能与外部的攻击者联动，或精心策划以长期潜伏。' }
    }
  },
  {
    id: 'teammate-pig',
    name: '猪队友本尊',
    nameEn: 'Teammate Pig',
    house: 'Ministry',
    match: '康奈利·福吉',
    quote: '“我就点了一下链接，公司怎么就上新闻了？”',
    attributes: { curiosity: 30, depth: 20, systemic: 30, ambition: 40, exploration: 30, diligence: 50 },
    advantages: '无恶意，可教育。',
    curses: '无意识风险、习惯难改、可能成为社会工程突破口。',
    recommendedSpells: ['安全意识咒', '防呆设计术', '流程规范咒'],
    bestTeammates: [
      { type: '赛博菩萨', synergy: '需要你的安全教育' },
      { type: '赏金公务员', synergy: '帮你建立防呆流程' }
    ],
    developmentStages: {
      initial: { name: '安全意识薄弱者', description: '对安全策略和潜在风险缺乏基本认知。' },
      growth: { name: '习惯性违规者', description: '了解规则，但因便利性或以前没出事的心态，养成不安全的工作习惯。' },
      mature: { name: '流程破坏者', description: '其长期形成的习惯可能影响团队，甚至使不安全操作成为潜规则。' }
    }
  },
  {
    id: 'forced-worker',
    name: '被迫营业打工人',
    nameEn: 'Forced Worker',
    house: 'Ministry',
    match: '夺魂咒受害者',
    quote: '“身不由己，被迫作恶。”',
    attributes: { curiosity: 40, depth: 40, systemic: 50, ambition: 60, exploration: 40, diligence: 70 },
    advantages: '可识别、可解救、可转化为情报来源。',
    curses: '隐蔽性强、心理创伤、难以主动求助。',
    recommendedSpells: ['心理防线咒', '紧急呼救术', '风险隔离咒'],
    bestTeammates: [
      { type: '赏金判官', synergy: '平台需要识别这类异常行为' },
      { type: '规则法师', synergy: '建立保护机制' }
    ],
    developmentStages: {
      initial: { name: '被盯上的目标', description: '因某种原因被攻击者选中，开始受到威胁或勒索。' },
      growth: { name: '被迫的合作者', description: '在胁迫下开始提供内部信息或协助。' },
      mature: { name: '持续的威胁', description: '长期被迫协助攻击者，可能成为内部持续威胁。' }
    }
  },
  {
    id: 'burnout-security-officer',
    name: '摆烂安全官',
    nameEn: 'Burnout Security Officer',
    house: 'Ministry',
    match: '霍琦夫人',
    quote: '“安全流程？不存在的。”',
    attributes: { curiosity: 50, depth: 50, systemic: 60, ambition: 50, exploration: 50, diligence: 40 },
    advantages: '经验丰富、知道捷径、可转化为安全倡导者。',
    curses: '主动违规、形成负面文化、系统性风险。',
    recommendedSpells: ['职业重塑咒', '流程简化术', '安全责任咒'],
    bestTeammates: [
      { type: '赏金公务员', synergy: '用流程而非说教解决问题' },
      { type: '搞钱优先侠', synergy: '让他看到安全漏洞的成本' }
    ],
    developmentStages: {
      initial: { name: '疲惫的合规者', description: '因工作压力、重复性劳动或缺乏认可，对安全流程产生抵触。' },
      growth: { name: '主动的绕行者', description: '明知最佳实践，但故意走捷径或忽略安全步骤。' },
      mature: { name: '负面文化的传播者', description: '其态度可能影响整个团队，使不安全操作成为潜规则。' }
    }
  },
  {
    id: 'dark-web-merchant',
    name: '暗网商人',
    nameEn: 'Dark Web Merchant',
    house: 'Azkaban',
    match: '博金-博克老板',
    quote: '“漏洞？这里只谈生意，不谈道德。”',
    attributes: { curiosity: 60, depth: 70, systemic: 70, ambition: 98, exploration: 60, diligence: 80 },
    advantages: '高收益、信息优势、渠道控制力。',
    curses: '法律风险、道德风险、信任危机、最终反噬。',
    recommendedSpells: ['地下交易咒', '匿名传输术', '价值评估咒'],
    bestTeammates: [
      { type: '0day炼金师', synergy: '提供货源' },
      { type: '漏洞黄牛', synergy: '合法化交易渠道' }
    ],
    developmentStages: {
      initial: { name: '技术滥用者', description: '开始利用技术能力进行非道德或非法活动。' },
      growth: { name: '地下交易者', description: '建立稳定的地下交易渠道和客户网络。' },
      mature: { name: '高级威胁参与者', description: '成为有组织犯罪或国家级攻击的一部分。' }
    }
  },
  {
    id: 'vulnerability-scalper',
    name: '漏洞黄牛',
    nameEn: 'Vulnerability Scalper',
    house: 'Ministry',
    match: '奥利凡德',
    quote: '“我不生产漏洞，我只是漏洞的搬运工。”',
    attributes: { curiosity: 50, depth: 50, systemic: 70, ambition: 90, exploration: 60, diligence: 80 },
    advantages: '信息差套利、渠道网络、风险分散、合法合规。',
    curses: '信任依赖、法律灰色地带、价值评估争议。',
    recommendedSpells: ['信息撮合咒', '价值评估术', '渠道扩展咒'],
    bestTeammates: [
      { type: '0day炼金师', synergy: '稳定货源' },
      { type: '规则法师', synergy: '确保交易合法' }
    ],
    developmentStages: {
      initial: { name: '业余收购者', description: '开始尝试收购漏洞并转售，建立初步的买家网络。' },
      growth: { name: '专业经纪人', description: '建立稳定的收购和转售渠道，能够评估漏洞价值。' },
      mature: { name: '市场影响力者', description: '成为漏洞市场的重要参与者，可能影响市场价格和规则。' }
    }
  },
  {
    id: 'bounty-judge',
    name: '赏金判官',
    nameEn: 'Bounty Judge',
    house: 'Ministry',
    match: '神秘事务司职员',
    quote: '“我说有效就有效，我说重复就重复。”',
    attributes: { curiosity: 60, depth: 70, systemic: 90, ambition: 60, exploration: 50, diligence: 95 },
    advantages: '规则制定权、信息优势、生态控制力、职业稳定性。',
    curses: '公信力压力、判断争议、夹在猎人与项目方之间。',
    recommendedSpells: ['公正裁决咒', '真相揭示术', '规则维护咒'],
    bestTeammates: [
      { type: '赏金公务员', synergy: '理解专业报告' },
      { type: '赛博菩萨', synergy: '维护社区公平' }
    ],
    developmentStages: {
      initial: { name: '客服支持', description: '处理平台日常咨询和简单争议。' },
      growth: { name: '项目运营经理', description: '管理特定项目的漏洞接收和判定流程。' },
      mature: { name: '平台策略制定者', description: '参与制定平台规则、判定标准和行业最佳实践。' }
    }
  },
  {
    id: 'rule-mage',
    name: '规则法师',
    nameEn: 'Rule Mage',
    house: 'Ministry',
    match: '毕业后赫敏',
    quote: '“用法律定义安全的边界。”',
    attributes: { curiosity: 70, depth: 80, systemic: 95, ambition: 60, exploration: 50, diligence: 95 },
    advantages: '定义游戏规则、保护研究者、推动行业进步、话语权。',
    curses: '技术理解门槛、政策滞后、多方利益平衡困难。',
    recommendedSpells: ['法律护盾咒', '合规定义术', '政策引导咒'],
    bestTeammates: [
      { type: '漏洞刺客', synergy: '理解技术边界' },
      { type: '链上掘金侠', synergy: '处理Web3法律前沿' }
    ],
    developmentStages: {
      initial: { name: '法律学习者', description: '学习网络安全法律、计算机犯罪法规、知识产权法。' },
      growth: { name: '合规顾问', description: '为安全公司、平台或猎人提供专业的法律咨询服务。' },
      mature: { name: '政策倡导者/制定者', description: '参与国家或国际层面的网络安全法律和政策制定。' }
    }
  },
  {
    id: 'lock-picking-immortal',
    name: '开锁仙人',
    nameEn: 'Lock Picking Immortal',
    house: 'Ministry',
    match: '阿拉霍洞开咒专家',
    quote: '“没有门禁卡？问题不大。”',
    attributes: { curiosity: 80, depth: 70, systemic: 60, ambition: 85, exploration: 95, diligence: 70 },
    advantages: '独特技能集、难以防御、红队价值极高、戏剧性强。',
    curses: '法律风险极高、技能难以规模化、与数字安全脱节。',
    recommendedSpells: ['阿拉霍洞开', '物理渗透术', '环境伪装咒'],
    bestTeammates: [
      { type: '数字哥伦布', synergy: '他找数字入口，你找物理入口' },
      { type: '漏洞刺客', synergy: '组合数字+物理攻击链' }
    ],
    developmentStages: {
      initial: { name: '锁匠/社交爱好者', description: '学习锁具原理、社交工程技巧、物理安全基础。' },
      growth: { name: '物理测试员', description: '参与红队项目，执行物理渗透测试任务。' },
      mature: { name: '红队物理攻击领队', description: '设计和领导复杂的物理渗透测试项目。' }
    }
  }
];
