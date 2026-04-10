import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    text: "【深夜的公共休息室】 凌晨三点，你独自坐在公共休息室的壁炉前，终于定位到一个可疑的魔法接口（API）。烛光摇曳，你的真实感受是：",
    options: [
      { text: "困，但手停不下来，必须搞清楚这个咒语的工作原理", scores: [{ dimension: 'wisdom', value: 3 }, { dimension: 'technique', value: 1 }] },
      { text: "肾上腺素飙升，像魁地奇决赛前的紧张", scores: [{ dimension: 'ambition', value: 3 }, { dimension: 'exploration', value: 1 }] },
      { text: "计算着如果这是有效漏洞，奖金能买多少黄油啤酒", scores: [{ dimension: 'ambition', value: 3 }, { dimension: 'stage', value: 1 }] },
      { text: "截图标记，明天有精神再深入，身体重要", scores: [{ dimension: 'diligence', value: 3 }, { dimension: 'wisdom', value: 1 }] }
    ]
  },
  {
    id: 2,
    text: "【学徒的求助】 一个魔法学徒怯生生地问你：\"学长，怎么入门漏洞赏金？\"你下意识的反应：",
    options: [
      { text: "递给他几本自己整理的禁书区笔记（漏洞分析）", scores: [{ dimension: 'diligence', value: 3 }, { dimension: 'stage', value: 2 }] },
      { text: "反问：你想靠这个吃饭，还是纯粹兴趣？", scores: [{ dimension: 'diligence', value: 2 }, { dimension: 'stage', value: 2 }] },
      { text: "推荐先去有求必应屋练手（靶场），别急着上真站", scores: [{ dimension: 'diligence', value: 2 }, { dimension: 'wisdom', value: 1 }] },
      { text: "觉得麻烦，但还是会简单说几句", scores: [{ dimension: 'stage', value: 2 }, { dimension: 'ambition', value: 1 }] }
    ]
  },
  {
    id: 3,
    text: "【你的魔法书包】 你的魔法书包（浏览器收藏夹）里，有一个隔层专门存放：",
    options: [
      { text: "各种绕过技巧和奇技淫巧的合集", scores: [{ dimension: 'ambition', value: 3 }, { dimension: 'technique', value: 1 }] },
      { text: "还没读完的古代魔文书籍（技术文档）", scores: [{ dimension: 'wisdom', value: 3 }, { dimension: 'diligence', value: 1 }] },
      { text: "常去的几个悬赏任务列表", scores: [{ dimension: 'ambition', value: 3 }, { dimension: 'stage', value: 1 }] },
      { text: "邓布利多军的活动记录（社区讨论）", scores: [{ dimension: 'diligence', value: 3 }, { dimension: 'stage', value: 2 }] }
    ]
  },
  {
    id: 4,
    text: "【棘手的诅咒】 你发现了一个诅咒（漏洞），但解除它需要受害者连续完成三个不太可能的动作。你会如何向魔法部报告：",
    options: [
      { text: "如实写，让傲罗们判断，这是他们的工作", scores: [{ dimension: 'diligence', value: 3 }, { dimension: 'wisdom', value: 1 }] },
      { text: "尝试构造更简单的解除方式，哪怕降低危害等级", scores: [{ dimension: 'wisdom', value: 3 }, { dimension: 'ambition', value: 1 }] },
      { text: "重点强调\"虽然条件苛刻，但一旦发生后果严重\"", scores: [{ dimension: 'stage', value: 3 }, { dimension: 'ambition', value: 2 }] },
      { text: "犹豫要不要报告，担心被说\"过于牵强\"", scores: [{ dimension: 'diligence', value: 3 }, { dimension: 'stage', value: 1 }] }
    ]
  },
  {
    id: 5,
    text: "【新的魔法体系】 面对一种全新的魔法体系（如区块链智能合约），你的学习路径：",
    options: [
      { text: "先找有没有现成的破解案例，逆向学习", scores: [{ dimension: 'ambition', value: 3 }, { dimension: 'technique', value: 1 }] },
      { text: "从官方魔法史（文档）和基础原理开始", scores: [{ dimension: 'wisdom', value: 3 }, { dimension: 'diligence', value: 1 }] },
      { text: "直接上手试，咒语反噬是最好的老师", scores: [{ dimension: 'exploration', value: 3 }, { dimension: 'technique', value: 1 }] },
      { text: "等邓布利多军有人分享经验，跟着走省时间", scores: [{ dimension: 'diligence', value: 3 }, { dimension: 'stage', value: 2 }] }
    ]
  },
  {
    id: 6,
    text: "【最痛的失败】 以下哪种\"浪费\"让你最难以接受：",
    options: [
      { text: "花了三天分析一个黑魔法防御系统，最后发现是预期行为", scores: [{ dimension: 'wisdom', value: 3 }, { dimension: 'diligence', value: 1 }] },
      { text: "提交的报告因为格式问题被傲罗打了折扣", scores: [{ dimension: 'diligence', value: 3 }, { dimension: 'stage', value: 2 }] },
      { text: "被人抢先一天提交了类似的诅咒破解", scores: [{ dimension: 'ambition', value: 3 }, { dimension: 'stage', value: 1 }] },
      { text: "教会了别人，但对方没任何表示", scores: [{ dimension: 'diligence', value: 3 }, { dimension: 'stage', value: 2 }] }
    ]
  },
  {
    id: 7,
    text: "【你的记忆柜】 你的记忆柜（笔记系统）最像：",
    options: [
      { text: "按诅咒类型分类的模板库，井井有条", scores: [{ dimension: 'wisdom', value: 3 }, { dimension: 'diligence', value: 2 }] },
      { text: "按目标分类的文件夹，每个黑巫师一份完整档案", scores: [{ dimension: 'diligence', value: 3 }, { dimension: 'wisdom', value: 1 }] },
      { text: "零散的思维导图和羊皮纸条，主要靠记忆", scores: [{ dimension: 'wisdom', value: 3 }, { dimension: 'exploration', value: 1 }] },
      { text: "公开的《黑魔法防御指南》，边学边写给别人看", scores: [{ dimension: 'diligence', value: 3 }, { dimension: 'stage', value: 2 }] }
    ]
  },
  {
    id: 8,
    text: "【如果魔法部关闭】 如果霍格沃茨的悬赏任务（漏洞赏金平台）明天全部关闭，你会：",
    options: [
      { text: "转向魔法企业（企业SRC）或傲罗办公室（红队）", scores: [{ dimension: 'diligence', value: 3 }, { dimension: 'technique', value: 2 }] },
      { text: "自己建立地下交易网络，做诅咒中介", scores: [{ dimension: 'ambition', value: 3 }, { dimension: 'unethical', value: 3 }] },
      { text: "失落，但会把技能用在其他魔法领域", scores: [{ dimension: 'wisdom', value: 3 }, { dimension: 'technique', value: 1 }] },
      { text: "庆幸，终于可以专注于纯粹的魔法研究", scores: [{ dimension: 'wisdom', value: 3 }, { dimension: 'stage', value: 2 }] }
    ]
  },
  {
    id: 9,
    text: "【新任务的第一眼】 傲罗办公室刚发布新任务，目标是 `api.darkarts.com`。你会首先：",
    options: [
      { text: "查看该域名的历史魔法痕迹（解析记录）", scores: [{ dimension: 'exploration', value: 3 }, { dimension: 'wisdom', value: 1 }] },
      { text: "尝试直接访问常见的秘密通道（接口路径）", scores: [{ dimension: 'ambition', value: 3 }, { dimension: 'technique', value: 1 }] },
      { text: "搜索该域名在预言家日报（GitHub）等处的泄露", scores: [{ dimension: 'technique', value: 3 }, { dimension: 'ambition', value: 1 }] },
      { text: "先阅读任务的赏金规则和测试范围", scores: [{ dimension: 'diligence', value: 3 }, { dimension: 'stage', value: 1 }] }
    ]
  },
  {
    id: 10,
    text: "【深夜的疑似诅咒】 凌晨2点，你发现了一个疑似夺魂咒（注入点），但魔法反馈很慢。此时：",
    options: [
      { text: "写个自动化咒语（脚本）测试所有参数，然后睡觉", scores: [{ dimension: 'technique', value: 3 }, { dimension: 'ambition', value: 1 }] },
      { text: "手动构造几个解除咒（payload）确认，记录细节明天深入", scores: [{ dimension: 'wisdom', value: 3 }, { dimension: 'diligence', value: 2 }] },
      { text: "羊皮纸传信（截图发群），问问有没有人遇到过", scores: [{ dimension: 'stage', value: 3 }, { dimension: 'diligence', value: 2 }] },
      { text: "继续熬到拿到明确的诅咒证明为止", scores: [{ dimension: 'ambition', value: 3 }, { dimension: 'wisdom', value: 1 }] }
    ]
  },
  {
    id: 11,
    text: "【傲罗的质疑】 傲罗办公室回复你的报告：\"这个诅咒我们已经内部发现了。\"你的反应：",
    options: [
      { text: "要求提供发现时间证明，争取认定", scores: [{ dimension: 'ambition', value: 3 }, { dimension: 'stage', value: 1 }] },
      { text: "接受，但询问是否可以作为\"协同发现\"记录", scores: [{ dimension: 'stage', value: 3 }, { dimension: 'diligence', value: 2 }] },
      { text: "算了，至少确认了判断正确", scores: [{ dimension: 'diligence', value: 3 }, { dimension: 'stage', value: 1 }] },
      { text: "怀疑对方搪塞，考虑是否要追问", scores: [{ dimension: 'ambition', value: 3 }, { dimension: 'wisdom', value: 1 }] }
    ]
  },
  {
    id: 12,
    text: "【两周的沉寂】 你在一个黑巫师（目标）上连续两周没有收获：",
    options: [
      { text: "换目标，避免沉没成本", scores: [{ dimension: 'ambition', value: 3 }, { dimension: 'diligence', value: 1 }] },
      { text: "扩大范围，尝试之前忽略的密室（功能点）", scores: [{ dimension: 'exploration', value: 3 }, { dimension: 'wisdom', value: 1 }] },
      { text: "回顾已有信息，看是否遗漏关键线索", scores: [{ dimension: 'wisdom', value: 3 }, { dimension: 'diligence', value: 2 }] },
      { text: "休息几天，用 fresh eyes 再看", scores: [{ dimension: 'diligence', value: 3 }, { dimension: 'wisdom', value: 1 }] }
    ]
  },
  {
    id: 13,
    text: "【学徒的基础问题】 邓布利多军群里有人问基础咒语问题，你：",
    options: [
      { text: "直接发一个能用的解除咒（payload）", scores: [{ dimension: 'ambition', value: 3 }, { dimension: 'stage', value: 1 }] },
      { text: "分析可能的防御机制，教他自己调试", scores: [{ dimension: 'wisdom', value: 3 }, { dimension: 'diligence', value: 2 }] },
      { text: "羊皮纸传信（私聊）他，诱导他去攻击特定目标", scores: [{ dimension: 'ambition', value: 3 }, { dimension: 'unethical', value: 2 }] },
      { text: "忽略，这类基础问题回答过太多次", scores: [{ dimension: 'stage', value: 3 }, { dimension: 'diligence', value: 1 }] }
    ]
  },
  {
    id: 14,
    text: "【通用诅咒模式】 你发现了一个通用诅咒模式，可能影响数十个黑巫师：",
    options: [
      { text: "立即批量测试所有相关目标", scores: [{ dimension: 'ambition', value: 3 }, { dimension: 'technique', value: 2 }] },
      { text: "选择几个最有价值的深入", scores: [{ dimension: 'ambition', value: 3 }, { dimension: 'wisdom', value: 1 }] },
      { text: "先写一个检测咒语（脚本），验证思路", scores: [{ dimension: 'technique', value: 3 }, { dimension: 'wisdom', value: 2 }] },
      { text: "写一篇《黑魔法防御术论文》，分享这个模式", scores: [{ dimension: 'diligence', value: 3 }, { dimension: 'stage', value: 2 }] }
    ]
  },
  {
    id: 15,
    text: "【防御升级】 黑巫师突然加强了防御（如增加了反咒屏障WAF）：",
    options: [
      { text: "立即研究屏障规则，寻找绕过", scores: [{ dimension: 'ambition', value: 3 }, { dimension: 'wisdom', value: 1 }] },
      { text: "调整策略，避开敏感检测点", scores: [{ dimension: 'wisdom', value: 3 }, { dimension: 'diligence', value: 2 }] },
      { text: "联系傲罗办公室，说明测试意图请求解封", scores: [{ dimension: 'diligence', value: 3 }, { dimension: 'stage', value: 2 }] },
      { text: "换目标，不值得在一个点上消耗", scores: [{ dimension: 'ambition', value: 3 }, { dimension: 'stage', value: 1 }] }
    ]
  },
  {
    id: 16,
    text: "【最艰难的放弃】 如果必须放弃一种魔法能力：",
    options: [
      { text: "永远不能再发现新的诅咒类型", scores: [{ dimension: 'wisdom', value: 3 }, { dimension: 'technique', value: 1 }] },
      { text: "永远不能再教会别人任何咒语", scores: [{ dimension: 'diligence', value: 3 }, { dimension: 'stage', value: 2 }] }
    ]
  },
  {
    id: 17,
    text: "【真正的成就感】 以下两种场景，哪个让你更有成就感：",
    options: [
      { text: "独自发现一个影响百万巫师的未知诅咒（0day），只有你和傲罗办公室知道", scores: [{ dimension: 'wisdom', value: 3 }, { dimension: 'stage', value: 1 }] },
      { text: "公开分享一个技巧，帮助100个新手找到第一个诅咒", scores: [{ dimension: 'diligence', value: 3 }, { dimension: 'stage', value: 2 }] }
    ]
  },
  {
    id: 18,
    text: "【理想的工作环境】 如果只能选择一个黑巫师（目标）工作一年：",
    options: [
      { text: "赏金丰厚但竞争激烈的大型黑魔法组织", scores: [{ dimension: 'ambition', value: 3 }, { dimension: 'stage', value: 1 }] },
      { text: "冷门但魔法挑战独特的古老遗迹", scores: [{ dimension: 'exploration', value: 3 }, { dimension: 'wisdom', value: 2 }] }
    ]
  },
  {
    id: 19,
    text: "【稳定与冒险】 以下两种状态，哪个更接近你的理想：",
    options: [
      { text: "魔法实力顶尖，但收入不稳定", scores: [{ dimension: 'wisdom', value: 3 }, { dimension: 'technique', value: 2 }] },
      { text: "收入稳定可观，但魔法成长缓慢", scores: [{ dimension: 'ambition', value: 3 }, { dimension: 'diligence', value: 2 }] }
    ]
  },
  {
    id: 20,
    text: "【名声的选择】 如果必须选择一种\"名声\"：",
    options: [
      { text: "圈内巫师知道你厉害，但普通巫师不知", scores: [{ dimension: 'stage', value: 3 }, { dimension: 'wisdom', value: 1 }] },
      { text: "普通巫师知道你，但圈内人认为你技术一般", scores: [{ dimension: 'stage', value: 3 }, { dimension: 'diligence', value: 2 }] }
    ]
  },
  {
    id: 21,
    text: "【工作方式的偏好】 以下两种工作方式，哪个让你更舒服：",
    options: [
      { text: "独自深度研究一个黑巫师，数月后一鸣惊人", scores: [{ dimension: 'wisdom', value: 3 }, { dimension: 'stage', value: 1 }] },
      { text: "与邓布利多军团队协作，每周都有稳定产出", scores: [{ dimension: 'stage', value: 3 }, { dimension: 'diligence', value: 2 }] }
    ]
  },
  {
    id: 22,
    text: "【不完美的选择】 如果必须选择一种\"不完美\"：",
    options: [
      { text: "魔法判断偶尔失误，但总体发现率高", scores: [{ dimension: 'ambition', value: 3 }, { dimension: 'technique', value: 1 }] },
      { text: "过于谨慎导致错失机会，但从不误判", scores: [{ dimension: 'diligence', value: 3 }, { dimension: 'wisdom', value: 2 }] }
    ]
  },
  {
    id: 23,
    text: "【持久的影响】 以下两种\"影响\"，哪个更持久：",
    options: [
      { text: "你发现的诅咒模式被写入《黑魔法防御术教材》", scores: [{ dimension: 'wisdom', value: 3 }, { dimension: 'diligence', value: 1 }] },
      { text: "你培养的学生成为顶尖傲罗", scores: [{ dimension: 'diligence', value: 3 }, { dimension: 'stage', value: 2 }] }
    ]
  },
  {
    id: 24,
    text: "【最后的标签】 分院帽要喊出你的名字了，你希望是？",
    options: [
      { text: "\"那个发现过超级诅咒的技术天才\"", scores: [{ dimension: 'ambition', value: 3 }, { dimension: 'wisdom', value: 1 }] },
      { text: "\"那个带出了很多优秀猎人的导师\"", scores: [{ dimension: 'diligence', value: 3 }, { dimension: 'stage', value: 2 }] }
    ]
  }
];
