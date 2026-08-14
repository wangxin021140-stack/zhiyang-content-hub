const $ = (selector) => document.querySelector(selector);

const SOURCES = {
  nhc: {
    title: '国家卫健委《成人高尿酸血症与痛风食养指南（2024年版）》',
    short: '国家卫健委2024食养指南',
    url: 'https://www.nhc.gov.cn/sps/c100088/202402/9ba512ba8e314a47a181db11d2fa188d.shtml'
  },
  diet: {
    title: '中国营养学会《中国居民膳食指南（2022）》核心推荐',
    short: '中国居民膳食指南（2022）',
    url: 'https://www.chinanutri.cn/yyjkzxpt/yyjkkpzx/jwjwx/202205/t20220505_259030.html'
  },
  adlaw: {
    title: '《中华人民共和国广告法》第十七条、第十八条',
    short: '中华人民共和国广告法',
    url: 'https://www.npc.gov.cn/WZWSREL3pncmR3L25wYy8veGlud2VuLzIwMTgtMTEvMDUvY29udGVudF8yMDY1NjYzLmh0bQ%3D%3D'
  },
  samrCandy: {
    title: '市场监管总局：固体饮料、压片糖果、代用茶等食品专项整治通知',
    short: '压片糖果等食品专项整治通知',
    url: 'https://www.samr.gov.cn/zw/zfxxgk/fdzdgknr/spscs/art/2023/art_977a28824fa84ad0a9688c06f2dba235.html'
  },
  samrAds: {
    title: '市场监管总局食品安全专题新闻发布会实录',
    short: '食品广告与宣传监管提示',
    url: 'https://www.samr.gov.cn/hd/zxft/art/2026/art_24e3b6f6710147aebd6cb490ef75bfb5.html'
  },
  classics: {
    title: '中国古籍保护网：中医药古籍的价值与保护利用',
    short: '中国古籍保护网',
    url: 'https://www.nlc.cn/pcab/zx/xw/20240527_2639819.shtml'
  },
  neijing: {
    title: '《黄帝内经素问校义·上古天真论》公开校本文本',
    short: '《黄帝内经·上古天真论》',
    url: 'https://zh.wikisource.org/zh-hans/%E9%BB%83%E5%B8%9D%E5%85%A7%E7%B6%93%E7%B4%A0%E5%95%8F%E6%A0%A1%E7%BE%A9'
  },
  xhs: {
    title: '小红书蒲公英帮助中心：功效宣传与商业内容提示',
    short: '小红书商业内容规则提示',
    url: 'https://pgy.xiaohongshu.com/help/detail?id=6495c527d1eedeeb48fb18b1f875650e&userType=4'
  },
  zhihu: {
    title: '知乎机构号使用规范（试行）',
    short: '知乎机构号使用规范',
    url: 'https://www.zhihu.com/org_use_norm'
  },
  weibo: {
    title: '微博社区公约',
    short: '微博社区公约',
    url: 'https://service.account.weibo.com/h5/roles/gongyue'
  }
};

const PRODUCTS = {
  shuling: {
    name: '舒零',
    category: '昆布柠檬酸泡腾片（以最终实物标签为准）',
    verified: '现有内部介绍资料列示：规格为2×12片，共24片/盒；资料列出鹅肌肽、益生菌、昆布多糖、柠檬酸钠、柠檬酸钾等成分。以上内容发布前仍需逐项对照最终实物标签、生产许可及检测资料。',
    publicFacts: '根据产品现有标签资料，舒零为昆布柠檬酸泡腾片，规格为2×12片，共24片/盒；资料列出的配料包括鹅肌肽、益生菌、昆布多糖、柠檬酸钠和柠檬酸钾等。选择这类食品时，建议把食品类别、配料、食用方法和不适宜人群一起看完整。',
    service: '可把产品放在“日常记录与生活方式管理”的服务场景中介绍，只讲标签事实、使用方式与适用边界。',
    forbidden: '不得使用“稳定降酸、治疗痛风、溶晶、替代或减少药物、服用多久见效”等表述；不得用用户检测值或个案证明普遍效果。',
    ingredientNames: ['昆布', '柠檬酸盐', '鹅肌肽', '益生菌'],
    scenes: ['周五晚聚餐前', '下午习惯性点甜饮时', '连续加班后的深夜', '准备开始一周生活记录时']
  },
  mengben: {
    name: '梦犇健',
    category: '人参牡蛎肽压片糖果（加强版）',
    verified: '现有包装图标示：净含量3.6g（6粒×0.6g），每日一粒、温开水口服；配料含人参粉（人工种植5年以下）、牡蛎肽粉、黄精粉、枸杞粉等。包装另列不适宜人群，发布前必须对照最终实物包装完整展示。',
    publicFacts: '根据产品现有包装信息，梦犇健人参牡蛎肽压片糖果净含量为3.6克（6粒×0.6克），标示食用方法为每日一粒、温开水口服；配料包括人参粉（人工种植5年以下）、牡蛎肽粉、黄精粉和枸杞粉等。购买或赠送前，应同时查看包装列明的不适宜人群。',
    service: '可从成分文化、成熟男性的日常作息、礼赠选择和食品标签阅读切入，不对身体功能作效果暗示。',
    forbidden: '不得使用“补肾、壮阳、持久、当天见效、提高性能力、延年益寿、无效退款”等承诺；不得利用羞耻、伴侣压力或领导送礼诱导购买。',
    ingredientNames: ['人参', '牡蛎肽', '黄精', '枸杞', '覆盆子', '肉苁蓉'],
    scenes: ['连续出差的一周', '父亲节前挑选礼物时', '晚上十点仍在处理工作时', '开始重新整理作息时']
  }
};

const PLATFORMS = {
  video: { label: '视频号', tone: '真人口播、短句、强画面、前3秒给冲突', deliverable: '分镜口播脚本', source: 'nhc' },
  xhs: { label: '小红书', tone: '搜索型标题、生活细节、短段落、可收藏清单', deliverable: '完整图文笔记', source: 'xhs' },
  wechat: { label: '公众号', tone: '标题解释明确、层层展开、来源完整、适合沉淀', deliverable: '深度文章', source: 'nhc' },
  zhihu: { label: '知乎', tone: '先给结论、再讲依据与边界、弱营销、可检验', deliverable: '完整问题回答', source: 'zhihu' },
  weibo: { label: '微博', tone: '一句观点、短段高密度、投票式互动、便于转发', deliverable: '微博正文 / 串文', source: 'weibo' }
};

const AUDIENCES = {
  social: { label: '35-55岁应酬较多的职场人', life: '饭局临时增加、白天喝水少、回家又晚', desire: '不想靠一次狠心，而是想找到能长期执行的方法' },
  young: { label: '25-35岁熬夜、外卖、甜饮较多的年轻人', life: '工位放着奶茶、晚上刷手机、周末再补觉', desire: '想用轻量记录看清习惯，不想被说教' },
  family: { label: '关心家庭饮食与日常管理的人', life: '一家人吃同一桌饭，却有不同的作息与需求', desire: '需要一份全家能看懂、不会制造焦虑的清单' },
  male: { label: '30-55岁关注状态与作息的成熟男性', life: '工作节奏紧、出差应酬多、不习惯主动谈自己的状态', desire: '更接受有分寸、讲事实、不冒犯的表达' },
  gift: { label: '重视品质与礼赠分寸的成年消费者', life: '想送得体，又担心把健康食品说得过头', desire: '需要看懂标签、适用边界和礼赠话术' }
};

const PURPOSES = {
  follow: { label: '涨关注 / 提升完播', cta: '关注账号，下一条继续拆一个高频生活场景。' },
  save: { label: '提升收藏 / 搜索沉淀', cta: '先收藏，下一次遇到同样场景时照着做。' },
  lead: { label: '领取7天自查表', cta: '需要空白版《7天生活方式自查表》，在评论区回复“自查”；由工作人员按平台规则承接。' },
  trust: { label: '建立专业与品牌信任', cta: '把这条发给需要的人；涉及症状、检查或用药，请直接咨询医生。' },
  consult: { label: '承接产品咨询', cta: '想了解产品标签、配料与不适宜人群，可通过账号内合规入口获取完整标签信息。' },
  community: { label: '企微打卡 / 老客陪伴', cta: '今天只完成一项记录，晚上在群内按“时间—场景—选择—感受”四格复盘。' }
};

const STAGES = {
  cold: { label: '前期冷启动（第1-7天）', rule: '不硬讲产品；以强场景、误区和可执行动作换停留与关注。' },
  warm: { label: '中期预热（第8-21天）', rule: '以指南、清单、古籍文化和连续栏目建立可信度，只弱露品牌。' },
  convert: { label: '后期转化（第22-30天）', rule: '可以介绍经核验的标签事实与服务流程，但不承诺功效。' },
  retain: { label: '私域留存（加企微/购买后）', rule: '用记录、问卷、复盘和人工答疑维持服务感，不以高频促销轰炸。' }
};

const LENGTHS = {
  short: { label: '短篇｜快速测试选题', targets: { video: '60-90秒', xhs: '600-800字', wechat: '800-1100字', zhihu: '900-1200字', weibo: '220-350字' }, minBlocks: 3 },
  medium: { label: '中篇｜建立信任', targets: { video: '2-3分钟', xhs: '1000-1400字', wechat: '1500-2000字', zhihu: '1500-2000字', weibo: '500-800字' }, minBlocks: 6 },
  long: { label: '长篇｜深度沉淀', targets: { video: '4-6分钟', xhs: '1600-2200字', wechat: '2300-3000字', zhihu: '2300-3000字', weibo: '900-1300字' }, minBlocks: 9 }
};

const TOPICS = {
  record: { label: '7天生活方式自查', source: 'nhc', keywords: ['记录', '场景', '饮水', '作息'] },
  dining: { label: '聚餐与饮酒场景', source: 'nhc', keywords: ['聚餐', '饮酒', '清淡', '节奏'] },
  sugar: { label: '甜饮与果糖误区', source: 'nhc', keywords: ['甜饮', '果糖', '白开水', '标签'] },
  water: { label: '饮水与日常节奏', source: 'nhc', keywords: ['饮水', '提醒', '替代', '记录'] },
  routine: { label: '熬夜、久坐与作息', source: 'diet', keywords: ['作息', '久坐', '睡眠', '运动'] },
  label: { label: '看懂食品标签', source: 'diet', keywords: ['标签', '配料', '类别', '边界'] },
  ingredient: { label: '产品成分文化故事', source: 'classics', keywords: ['成分', '古籍', '文化', '标签'] },
  gift: { label: '健康礼赠的分寸', source: 'adlaw', keywords: ['礼赠', '分寸', '标签', '适用边界'] }
};

const ANGLES = {
  myth: '反常识误区', scene: '具体场景共鸣', checklist: '可收藏清单', challenge: '7天行动挑战',
  ancient: '古今对照文化', ingredient: '成分与标签事实', story: '人物故事叙事', qna: '问答拆解'
};

const HOOKS = {
  record: [
    '真正让人反复失败的，往往不是那一顿饭，而是你从来没看见自己的触发场景。',
    '别急着忌口：先把这7天记明白，可能比立十条规矩更有用。',
    '如果每次都从“明天彻底改变”开始，第三天多半还是会回到原点。',
    '你以为自己缺的是自律，其实更可能缺一张能看见规律的记录表。'
  ],
  dining: [
    '饭局最容易踩的坑，不一定在桌上，而是在你进包间之前。',
    '同样一场聚餐，有人第二天毫无负担，有人却连自己喝了几杯都记不清。',
    '别等举杯以后才想“今天少一点”，真正好用的选择要提前做。',
    '应酬多的人最需要的，不是更狠地忍，而是一套不扫兴的替代动作。'
  ],
  sugar: [
    '戒了酒却每天喝果汁奶茶？很多人把“看起来健康”当成了答案。',
    '你下午那杯不算甜的饮料，可能正是最容易被忽略的一笔习惯账。',
    '饮料换了名字，不等于生活方式已经改变。',
    '不是所有“零负担”的包装词，都能替你读懂配料表。'
  ],
  water: [
    '水杯放在桌上却一整天没动：问题可能不是忘记，而是没有触发点。',
    '别再靠闹钟催自己喝水，真正能坚持的办法是把它绑在固定动作上。',
    '忙起来就不喝、下班后猛补，很多人的饮水节奏都是这样乱掉的。',
    '喝水这件小事，最能暴露一个人的日常节奏。'
  ],
  routine: [
    '白天坐满八小时，晚上再刷两小时手机：累和休息，可能同时发生。',
    '最消耗状态的不是偶尔熬一次，而是每天都晚一点、再晚一点。',
    '你不是没有时间休息，而是休息从来没有被写进日程。',
    '别把“年轻扛得住”当成作息计划。'
  ],
  label: [
    '买健康食品只看正面大字，往往会错过背面真正重要的信息。',
    '看懂一盒食品，不需要先懂所有成分；先找对包装上的五个位置。',
    '“古方”“天然”“高科技”都不是食品类别，标签才是。',
    '越像药的包装，越要先确认它到底是什么食品。'
  ],
  ingredient: [
    '古籍能给成分一个文化坐标，但不能替现代产品证明效果。',
    '把人参、昆布写进故事很容易；把古籍和产品边界讲清楚，才见真功夫。',
    '真正有分寸的本草内容，会同时告诉你“古人怎么记”和“今天不能怎么说”。',
    '引用《本草纲目》之前，先问一句：这是文化介绍，还是在暗示疗效？'
  ],
  gift: [
    '健康礼物最怕的不是不贵，而是送的时候把话说得太满。',
    '送食品，不要替对方下健康结论；把选择权和标签一起交给他。',
    '一份有分寸的健康礼物，应该让人觉得被关心，而不是被诊断。',
    '真正体面的礼赠话术，通常不提“你哪里不行”。'
  ]
};

const SCENES = [
  '晚上十点，群里突然又约了一场宵夜。你已经很累，脑子里第一句话不是“我需要什么”，而是“大家都去，我也去吧”。很多选择就是在这种没来得及思考的几秒里发生的。',
  '下午三点，工位旁边的人问要不要一起点喝的。你没有特别想喝，却还是顺手勾选了熟悉的那一杯。真正反复出现的习惯，常常不是强烈欲望，而是环境替你做了决定。',
  '周日晚上，你给自己列了十条新规矩：早睡、运动、清淡、喝水。到了周三加班，计划全散了，于是你把三天的偏离理解成“我就是坚持不住”。',
  '体检报告被放进抽屉以后，生活很快恢复原样。不是因为不重视，而是“以后注意”太抽象，没有变成今天几点、在哪个场景、先做哪一步。',
  '给父母挑礼物时，包装正面的大字很吸引人，但真正决定能不能送的，往往在背面的食品类别、配料、食用方式和不适宜人群里。'
];

const CONTENT_BLOCKS = {
  record: [
    '第一步不是评判，而是记录。连续7天，只写四项：发生时间、当时场景、真实选择、身体与情绪感受。不要写“今天表现差”，要写“22:40回家，太累，点了重口外卖”。事实越具体，越容易找到下一步。',
    '前两天只观察，不急着改。第三、四天圈出重复最多的触发点：是加班后的饥饿、饭局里的劝酒、下午的甜饮，还是睡前刷手机？一个反复出现的场景，比十个笼统目标更值得先处理。',
    '第五天只为最高频场景设计一个替代动作。它要小到不需要意志力：进包间前先决定饮品；开会结束顺手接一杯水；外卖下单前先看一眼记录；到家先洗漱再碰手机。',
    '第六天测试，不追求满分。第七天复盘三件事：哪个动作最容易做、哪次偏离最有规律、下周只保留哪一个动作。记录的价值不是证明自律，而是减少下一次临时决策。'
  ],
  dining: [
    '聚餐前先做选择，通常比坐下后临场克制容易。可以提前决定当天是否饮酒、用什么无糖饮品替代、准备几点离场。把决定从热闹的桌边移到安静的出发前，执行成本会低很多。',
    '聚餐中别把注意力全部放在“能不能吃”。更实用的做法是看节奏：先慢下来，减少连续夹取；不把含糖饮料当解酒工具；一旦涉及疾病、症状或用药，遵医嘱而不是照搬网络清单。',
    '聚餐后不要用极端节食补偿，也不要把一次选择变成整周放弃。第二天回到规律进餐、合理饮水和正常作息，并把最难处理的那个环节写进记录。长期管理看的是模式，不是一顿饭的输赢。',
    '如果朋友劝酒，准备一句不解释病情的话：“我今天有安排，先用无糖饮品陪大家。”边界清楚、语气自然，比临时编理由更不容易反复拉扯。'
  ],
  sugar: [
    '判断一杯饮料，先别被“鲜榨、果味、轻盈、能量”带走。看包装标签和配料，确认是否含添加糖或高糖配料；在外购买现制饮品时，尽量选择不另外加糖，并把频率记录下来。',
    '很多人不是每天都“特别想喝甜”，而是下午困、开会累、同事拼单时自动选择。真正需要替代的可能不是味道，而是那几分钟的休息感和参与感。',
    '替代方案不要只有白水一种。可以根据个人情况选择白开水、淡茶水或不额外加糖的饮品；涉及肾脏、心脏等疾病或医生限制饮水时，应按专业意见执行。',
    '做一个三天实验：不先要求自己戒掉，只记录时间、容量、甜度选择和触发场景。三天后挑频率最高的一杯，先把“大杯”换“小杯”或把“全糖”往下调一级。'
  ],
  water: [
    '“想起来就喝”通常不稳定。把饮水和已有动作绑定：到工位、开会结束、午餐前、下班前，各完成一次。触发点比单纯闹钟更接近日常流程。',
    '不要为了追数字在短时间内大量饮水。指南中的建议有适用条件，个人饮水量还会受季节、活动量、疾病和医嘱影响；存在心肾功能问题时，尤其不能照搬统一数字。',
    '最简单的记录不是精确到每一毫升，而是看颜色和次数：上午有没有喝、下午有没有连续几小时忘记、是否用甜饮或酒精替代了水。先看见节奏，再谈优化。',
    '环境设计很重要：用固定容量的杯子，把它放在视线和伸手范围内；出门前准备便携水杯。让更合适的选择更容易发生，而不是每天靠提醒惩罚自己。'
  ],
  routine: [
    '熬夜不是一个孤立动作。它常和晚餐推迟、深夜加餐、久坐、第二天用甜饮提神连在一起。只盯“几点睡”容易失败，应该把睡前两小时看成一段完整流程。',
    '先找一个可稳定的收尾信号：固定时间停止处理非紧急消息，调暗屏幕，把第二天要做的事写下来。大脑得到“今天结束了”的提示，比躺下以后强迫自己立刻睡着更实际。',
    '久坐也不需要从高强度运动开始。每完成一段工作就站起来活动几分钟，逐步建立节奏；具体运动方案需要结合个人健康状况，出现不适时应停止并咨询专业人员。',
    '复盘作息时，不问“我为什么这么懒”，而问“哪个环节把上床时间往后推了”。是临时工作、短视频、夜宵还是没有明确收尾？问题越具体，解决方案越不靠情绪。'
  ],
  label: [
    '第一看产品类别。普通食品、保健食品、药品不是同一个概念，包装风格再像也不能互换身份。压片糖果首先是食品类别，不能因为含有熟悉的植物原料就写成治疗方案。',
    '第二看配料表和净含量，第三看食用方法与贮藏条件，第四看不适宜人群或注意事项，第五看生产者、生产许可和可追溯信息。营销海报里的大字不能替代这些基础信息。',
    '看到“专利、传统配方、进口原料、科研团队”时，要继续问：专利号是什么、专利保护的是什么、原料含量和检测依据在哪里？有专利不自动等于有临床效果，成分研究也不自动等于成品效果。',
    '如果要公开介绍产品，优先复述已核验标签，不自行扩写适用人群和作用。用户问到症状、检查结果或用药时，停止销售式回答，转为建议咨询医生。'
  ],
  ingredient: [
    '讲古籍，先讲出处。《本草纲目》《神农本草经》《新修本草》《食疗本草》等代表不同历史时期的本草与食养文献。引用时至少写明书名与相关篇目；不能只写一句“古籍早有记载”就把现代结论塞回古文。',
    '讲成分，再讲身份。同名原料在古籍中的记载、现代食品原料的法规身份、成品标签中的实际配料，是三件不同的事。文化故事可以建立记忆点，但成品能说什么必须回到标签与审核资料。',
    '一个合规的古今对照可以这样写：古人重视“食饮有节，起居有常”，今天的食养指南同样把规律生活放在重要位置。两者是在生活观念上对照，不是证明某一款食品可以预防或治疗疾病。',
    '选用古籍时还要核版本。可以建立“已核原文、只核书目、待核篇目”三级状态。只有查到可靠版本和上下文的短句才能直接引用，其他内容只作选题线索，不进入公开成稿。'
  ],
  gift: [
    '送健康食品时，最不建议说“这个专门治你的问题”。这句话既越界，也让对方感到被评判。更合适的表达是：“我看过类别、配料和食用提示，觉得包装和信息比较完整，你先按标签看看是否适合。”',
    '礼赠前做四项检查：产品类别是否清楚；包装是否完整且在保质期内；不适宜人群是否与收礼人冲突；是否能提供正式购买与售后凭证。体面来自信息透明，不来自把作用说得神奇。',
    '如果收礼人正在服药、有慢性病、处于孕哺期或属于包装列明的不适宜人群，不替对方做决定。建议先向医生或药师咨询，必要时换成不涉及入口的礼物。',
    '礼赠文案也要避免羞耻和焦虑。尤其面向男性，不用“行不行、征服、尊严”等刺激性话术；关心可以落在作息、陪伴和选择权上。'
  ]
};

const EXTRA_BLOCKS = [
  '还有一个容易忽略的原则：不要同时改十件事。动作越多，越难判断到底哪一步有效。一次只测试一个动作，至少观察一周，再决定保留、调整还是放弃。',
  '内容中的数字必须带条件。年龄、季节、活动量、疾病状态和用药情况都可能影响个人方案，所以公开科普只能给一般原则，不能替用户做个体诊断。',
  '把“偶尔偏离”和“计划失败”分开。一次聚餐、一次晚睡只是数据，不是给自己下结论的证据。第二天回到原来的节奏，比用更激烈的补偿动作更重要。',
  '如果出现关节红肿热痛、持续不适、检查异常，或正处于诊疗和用药阶段，应尽快就医并按医嘱处理。公开内容、问卷和食品都不能代替诊断、治疗或药物。',
  '对品牌来说，可信不是“什么都敢说”，而是清楚区分：什么来自标签、什么来自指南、什么只是古籍文化、什么必须交给医生回答。长期看，这种边界本身就是信任资产。'
];

const LONGFORM_BLOCKS = [
  '先把三个概念分开：一般生活方式建议回答的是“多数人日常可以怎样做”；临床诊疗回答的是“这个人的症状、指标和用药怎样处理”；食品标签回答的是“这件商品依法是什么、含有什么、怎样食用”。三者可以出现在同一篇文章里，却不能互相替代。',
  '很多内容的问题不是知识错，而是条件被删掉了。比如指南中的饮水、运动和饮食建议往往有适用前提；当一个人存在心肾功能问题、正在用药或医生已有明确要求时，公开内容中的统一数字不能直接照搬。写作者应把条件和结论放在一起。',
  '判断一个方法是否可执行，可以问四个问题：它发生在什么时间？由什么场景触发？动作是否小到今天能做？一周后用什么记录复盘？如果这四个问题没有答案，“以后注意”“尽量少一点”就很容易停留在口号。',
  '对团队运营来说，每条内容还要留一张证据卡：事实原句是什么、来自哪一页或哪个链接、适用对象是谁、不能外推到哪里、由谁完成最后审核。这样编辑换人、平台改版或评论区追问时，不会只剩一句找不到出处的“网上都这么说”。',
  '产品出现时，最好使用“标签层—服务层—禁区层”三层结构。标签层只复述已核验名称、类别、配料、规格和食用提示；服务层说明能提供什么资料、记录和人工答疑；禁区层则明确不回答诊断、不指导停药、不承诺指标变化。',
  '古籍内容也需要同样的证据意识。书名不等于原文，原文不等于现代解释，现代解释更不等于某个成品的效果。可靠的写法是交代书名和篇目，用很短的原句建立文化记忆，再明确告诉读者：今天的食品信息仍以法规、标签和现代证据为准。',
  '最后看转化动作是否匹配阶段。冷启动内容优先换关注和收藏；预热内容可以引导领取中性资料；转化内容才承接标签咨询；进入私域后则以问卷、记录和人工回访为主。一步只要求一个动作，用户更容易理解，团队也更容易复盘。'
];

const CLASSIC_CARDS = [
  ['古籍文化', '《黄帝内经·素问·上古天真论》', '可核短句：“食饮有节，起居有常。”适合连接规律饮食与作息主题。', '只作文化对照，不作为任何产品功效证据。', 'neijing'],
  ['古籍文化', '《本草纲目》', '可用于介绍李时珍及本草分类、版本与相关原料的历史记载。直接引用前须核具体卷、部、条目。', '不得把古籍用途改写成现代成品治疗功能。', 'classics'],
  ['古籍文化', '《神农本草经》', '适合作为早期本草知识史选题；涉及人参等条目时先核可靠校本与上下文。', '当前仅核书目，不自动输出具体功效原文。', 'classics'],
  ['古籍文化', '《本草经集注》', '可讲陶弘景对本草知识整理与分类的历史意义。', '不将历史分类等同于今天的食品法规分类。', 'classics'],
  ['古籍文化', '《新修本草》', '可讲唐代官修本草及知识整理史，适合“古代如何做本草标准化”选题。', '不借“官修”二字为现代商品背书。', 'classics'],
  ['古籍文化', '《食疗本草》', '可讲传统食养文献的发展与食物记录方式。', '直接引用具体食物条目前必须核版本；不能形成疾病承诺。', 'classics'],
  ['古籍文化', '《备急千金要方·食治》', '可讲孙思邈设置“食治”篇的文化史意义，连接日常饮食管理。', '只讲历史脉络，不把古方搬成现代用户方案。', 'classics'],
  ['古籍文化', '《饮膳正要》', '可用于介绍元代饮膳与食养文化，适合节气、膳食史选题。', '未核具体篇目前不输出引号式原文。', 'classics'],
  ['古籍文化', '《养老奉亲书》', '可讲古代围绕老年饮食起居形成的专门著述。', '不得用于暗示某产品适合所有老年人。', 'classics'],
  ['古籍文化', '《遵生八笺》', '可作为明代生活文化、起居与饮馔史的内容线索。', '属于待核篇目素材，不直接生成健康结论。', 'classics'],
  ['古籍文化', '《摄生消息论》', '可从四时生活观切入节气栏目。', '节气内容不得扩写成个体诊疗建议。', 'classics'],
  ['古籍文化', '《随息居饮食谱》', '可作为清代食物本草与饮食文化选题线索。', '具体食物条目需要版本校核，不为商品背书。', 'classics']
];

const KNOWLEDGE = [
  { category: '产品事实', title: '舒零｜已核与待核分开', use: PRODUCTS.shuling.verified, limit: PRODUCTS.shuling.forbidden, source: null },
  { category: '产品事实', title: '梦犇健｜包装事实', use: PRODUCTS.mengben.verified, limit: PRODUCTS.mengben.forbidden, source: null },
  { category: '现代证据', title: '2024成人高尿酸血症与痛风食养指南', use: '可用于核验饮食、饮水、酒精、含糖饮料、体重与生活方式的一般科普方向，引用数字时保留适用条件。', limit: '指南不等于产品效果研究，不能用指南为某款食品背书。', source: 'nhc' },
  { category: '现代证据', title: '中国居民膳食指南（2022）', use: '可用于食物多样、合理搭配、规律进餐、足量饮水、适量运动等一般人群内容。', limit: '中国营养学会的图形图示有商业使用限制；本工具只做文字事实线索。', source: 'diet' },
  { category: '法规边界', title: '普通食品不得涉及疾病治疗功能', use: '审核所有标题、口播、正文、评论区和私信话术；疾病词与产品紧邻时重点复核。', limit: '不能用“科普”外壳变相发布治疗承诺，不能使用容易与药品、医疗器械混淆的用语。', source: 'adlaw' },
  { category: '法规边界', title: '压片糖果等食品专项整治提示', use: '审核压片糖果、固体饮料等产品的标签、说明书、会议营销、健康咨询和网络销售内容。', limit: '不得明示或暗示疾病预防、治疗及保健功能。', source: 'samrCandy' },
  { category: '法规边界', title: '食品宣传不“加戏”', use: '用于审核产地、成分、功能、适用人群、专家背书、用户案例等内容。', limit: '不得用白大褂、专家、科研机构或个案数据制造虚假权威。', source: 'samrAds' },
  { category: '平台方法', title: '视频号｜镜头不是论文', use: '前3秒抛场景冲突；每个镜头只传达一个信息；口播短句化；画面展示真实生活动作。', limit: '健康内容禁止夸大普通食品医疗功效；外部导流与商业行为按最新规则复核。', source: 'adlaw' },
  { category: '平台方法', title: '小红书｜标题要抓人，但不能造假', use: '标题用具体人群、场景、损失或反差吸引点击；正文给真实细节、清单和可收藏信息。', limit: '不用虚假经历、伪造结果、绝对化功效、医生形象营销或违规站外导流。', source: 'xhs' },
  { category: '平台方法', title: '公众号｜承担深度解释', use: '用摘要、分节、来源和明确结论沉淀信任；适合承接系列文章与资料领取。', limit: '不要把篇幅写成长广告；所有外部事实应能回到原始来源。', source: 'adlaw' },
  { category: '平台方法', title: '知乎｜先回答，再解释', use: '第一段直接给结论，交代适用边界，再以可验证资料和现实场景展开。', limit: '避免重复回答、低质导流、批量联系方式和伪装成经验的广告。', source: 'zhihu' },
  { category: '平台方法', title: '微博｜观点与互动', use: '首句就是可转发观点；短段、高信息密度；用选择题或经历问题激活评论。', limit: '营销信息、话题活动和外链按平台规定登记；不刷量、不重复骚扰。', source: 'weibo' },
  { category: '成分文化', title: '昆布｜先核条目，再讲文化', use: '可作为历代本草记录与海洋食材文化的选题入口；具体引文要核《本草纲目》等可靠版本的卷、部、条目。', limit: '古籍收录不等于舒零成品具有降尿酸、治疗痛风或其他疾病功能。', source: 'classics' },
  { category: '成分文化', title: '人参｜古籍原料与成品是两层', use: '可讲人参在本草史中的知名度、人工种植年限等标签事实，并提示消费者区分原料名与产品功能。', limit: '不得从人参古籍记载推导梦犇健具有补肾、壮阳、抗疲劳等未经核准功能。', source: 'classics' },
  { category: '成分文化', title: '牡蛎与牡蛎肽｜不要混为一谈', use: '可解释古籍中的“牡蛎”条目与现代食品配料“牡蛎肽粉”名称并不等同，帮助用户学会看标签。', limit: '不能把古籍中的牡蛎记载直接套在牡蛎肽或成品上。', source: 'classics' },
  { category: '成分文化', title: '黄精｜文化选题待核原文', use: '可作为《本草纲目》等本草书目的检索词，适合做版本核验、条目辨读类内容。', limit: '未核具体卷次与原文前不使用引号式功效句，更不能作为成品功效证据。', source: 'classics' },
  { category: '成分文化', title: '枸杞｜熟悉不等于可以随意外推', use: '可从大众熟悉度切入“同名原料、实际含量、食品标签、食用边界”的科普。', limit: '不把单一原料的传统说法扩写成成品对特定人群的效果。', source: 'classics' },
  { category: '成分文化', title: '覆盆子、肉苁蓉等｜敏感表达重点审', use: '可以客观复述经核验的配料名称，并做本草书目检索与文化介绍。', limit: '不得使用补肾、壮阳、性功能、持久等敏感功效话术，也不得用羞耻感营销。', source: 'samrCandy' },
  ...CLASSIC_CARDS.map(([category, title, use, limit, source]) => ({ category, title, use, limit, source }))
];

function createSeed() {
  const array = new Uint32Array(2);
  crypto.getRandomValues(array);
  return (array[0] ^ array[1] ^ Date.now()) >>> 0;
}

function rng(seed) {
  let value = seed >>> 0;
  return () => {
    value += 0x6D2B79F5;
    let t = value;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function pick(list, random) { return list[Math.floor(random() * list.length)]; }
function shuffled(list, random) { return [...list].sort(() => random() - 0.5); }
function clean(value) { return String(value || '').replace(/[<>]/g, '').replace(/\s+/g, ' ').trim().slice(0, 160); }
function escapeHtml(value) { return String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
function hash(text) { let h = 2166136261; for (const ch of text) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); } return (h >>> 0).toString(36).toUpperCase(); }
function charCount(text) { return text.replace(/\s/g, '').length; }
function copyButton(text) { return `<button class="copy" data-copy="${encodeURIComponent(text)}">复制</button>`; }

function seedControls() {
  const options = (object, labeler = (v) => v.label || v) => Object.entries(object).map(([key, value]) => `<option value="${key}">${escapeHtml(labeler(value))}</option>`).join('');
  $('#product').innerHTML = options(PRODUCTS, (v) => `${v.name}｜${v.category}`);
  $('#platform').innerHTML = options(PLATFORMS);
  $('#audience').innerHTML = options(AUDIENCES);
  $('#purpose').innerHTML = options(PURPOSES);
  $('#stage').innerHTML = options(STAGES);
  $('#length').innerHTML = options(LENGTHS);
  $('#topic').innerHTML = options(TOPICS);
  $('#angle').innerHTML = options(ANGLES, (v) => v);
  $('#length').value = 'medium';
  $('#purpose').value = 'save';
  $('#topic').value = 'record';
  $('#angle').value = 'scene';
  $('#knowledge-filter').innerHTML = `<option value="all">全部分类</option>${[...new Set(KNOWLEDGE.map((item) => item.category))].map((item) => `<option value="${item}">${item}</option>`).join('')}`;
}

function contextualProduct(ctx) {
  if (ctx.stageKey === 'cold') return '';
  if (ctx.stageKey === 'warm') return `\n\n知养更愿意先陪你看清真实生活，再谈产品选择。关于${ctx.product.name}，我们只依据包装和审核资料介绍食品类别、配料、食用方法与不适宜人群，不把一种食品说成解决所有问题的答案。`;
  if (ctx.stageKey === 'convert') return `\n\n如果你正在了解${ctx.product.name}，先看清这些基础信息：${ctx.product.publicFacts}\n\n它是一款食品，不能代替药物或诊疗。涉及症状、检查结果和用药，请咨询医生。`;
  return `\n\n已经加入知养企微服务的朋友，本周不用给自己增加复杂任务，只需按“时间—场景—选择—感受”记录一次真实经历。关于${ctx.product.name}，工作人员可以协助提供完整标签、食用方法、不适宜人群和售后信息；涉及症状、检测和用药，请咨询医生。`;
}

function classicInsert(ctx) {
  if (ctx.angleKey !== 'ancient' && ctx.topicKey !== 'ingredient') return '';
  const productLine = ctx.product.name === '梦犇健'
    ? `现有包装中的${pick(ctx.product.ingredientNames, ctx.random)}，可以作为查找历代本草条目的入口。`
    : `现有资料中的${pick(ctx.product.ingredientNames, ctx.random)}，可以作为本草与饮膳文化的选题入口。`;
  return `\n\n古籍里的生活观，也能给今天一些朴素提醒。《黄帝内经·素问·上古天真论》说：“食饮有节，起居有常。”它谈的是饮食与起居的节律。${productLine}不过，古籍记载、现代食品原料和一款成品的标签信息是三个不同层次，古籍不能替现代产品证明功效。`;
}

function titleSet(ctx) {
  const audienceShort = ctx.audience.label;
  const hook = pick(HOOKS[ctx.topicKey], ctx.random);
  const byAngle = {
    myth: [`很多人第一步就做反了：${ctx.topic.label}，别只靠“忍”`, `${ctx.topic.label}最常见的3个误区，第2个每天都在发生`, `别再把${ctx.topic.label}做成一场意志力考试`],
    scene: [`${audienceShort}请看：最容易失控的不是饭桌，是这10分钟`, `${hook}`, `一个真实场景，暴露了${ctx.topic.label}最容易忽略的地方`],
    checklist: [`建议收藏：${ctx.topic.label}的7条核对清单`, `不会做${ctx.topic.label}？先照着这张清单走`, `${ctx.topic.label}不用背知识，先检查这5件事`],
    challenge: [`别立狠目标，先做7天：${ctx.topic.label}记录法`, `7天不要求满分，我只改了${ctx.topic.label}的一件事`, `把${ctx.topic.label}拆成7天，终于不再第三天放弃`],
    ancient: [`《黄帝内经》这8个字，放到今天依然值得重新读`, `古人说“食饮有节”，今天我们到底该怎么理解`, `从《本草纲目》到食品标签：中间不能省掉哪一步`],
    ingredient: [`看成分之前，先看懂产品标签上的5个位置`, `${ctx.product.name}能公开说什么？一张表分清事实与营销`, `成分有故事，产品有边界：别把两件事混在一起`],
    story: [`他不是不重视，只是每次都从最难的一步开始`, `体检报告放进抽屉后，他用7天才看见真正的问题`, `一次普通的加班夜，为什么值得被认真记录`],
    qna: [`${ctx.topic.label}到底怎么做，才不会变成自我折磨？`, `为什么懂得很多，还是做不好“${ctx.topic.label}”？`, `${ctx.topic.label}需要一步到位吗？先说结论`]
  };
  return shuffled(byAngle[ctx.angleKey], ctx.random);
}

function assembleBody(ctx) {
  const requested = LENGTHS[ctx.lengthKey].minBlocks;
  const topicBlocks = [...CONTENT_BLOCKS[ctx.topicKey]];
  const extra = shuffled(EXTRA_BLOCKS, ctx.random);
  const scene = ctx.brief
    ? `以“${ctx.brief}”为例，真正值得记录的不是一句“今天没管住”，而是事情发生的时间、同行的人、当时的选择，以及下一次最容易提前准备的替代动作。`
    : pick(ctx.product.scenes || SCENES, ctx.random);
  const anglePrefixes = {
    myth: ['先拆误区：', '第二个误区：', '第三个误区：', '更稳妥的做法：'],
    scene: ['镜头拉回现场：', '当时最容易忽略的是：', '换一个动作会怎样：', '离开场景后这样复盘：'],
    checklist: ['清单第1项：', '清单第2项：', '清单第3项：', '清单第4项：'],
    challenge: ['第1—2天：', '第3—4天：', '第5—6天：', '第7天：'],
    ancient: ['先看古人的观察方式：', '再看今天的生活场景：', '古今不能直接画等号：', '能留下的是这一步：'],
    ingredient: ['先确认食品类别：', '再查看配料与规格：', '然后核对适用边界：', '最后识别宣传越界：'],
    story: ['故事从这个细节开始：', '转折发生在这里：', '他没有一次全部改变：', '一周后真正留下的是：'],
    qna: ['问题一：为什么总是反复？', '问题二：先改哪一步？', '问题三：怎样判断能否坚持？', '问题四：什么时候该咨询医生？']
  };
  const prefixes = anglePrefixes[ctx.angleKey] || anglePrefixes.scene;
  const framed = topicBlocks.map((block, index) => `${prefixes[index]}${block}`);
  const blocks = [scene, ...framed, ...extra];
  const selected = blocks.slice(0, Math.min(blocks.length, requested + 1));
  if (ctx.platformKey === 'wechat' || ctx.platformKey === 'zhihu') {
    selected.push(...shuffled(LONGFORM_BLOCKS, ctx.random).slice(0, ctx.lengthKey === 'long' ? 7 : ctx.lengthKey === 'medium' ? 3 : 0));
  }
  return selected;
}

function referencesFor(ctx) {
  const keys = new Set([TOPICS[ctx.topicKey].source, PLATFORMS[ctx.platformKey].source, 'adlaw']);
  if (ctx.angleKey === 'ancient' || ctx.topicKey === 'ingredient') { keys.add('neijing'); keys.add('classics'); }
  if (ctx.product.name === '梦犇健') keys.add('samrCandy');
  return [...keys].map((key) => SOURCES[key]).filter(Boolean);
}

function sourceText(sources) {
  return `参考资料：\n${sources.map((source, index) => `${index + 1}. ${source.title}\n${source.url}`).join('\n')}`;
}

function videoDraft(ctx, titles, blocks, sourceLine) {
  return `${titles[0]}\n\n很多人不是不知道该注意什么，而是每次到了加班、聚餐或疲惫的时刻，原来的计划就被惯性接管。真正值得先解决的，不是“够不够自律”，而是哪个场景最容易让选择失控。\n\n${blocks.join('\n\n')}${classicInsert(ctx)}${contextualProduct(ctx)}\n\n真正有用的改变，不是今天把目标喊得多狠，而是下一次遇到同样场景时，你已经知道先做哪一步。${ctx.purpose.cta}\n\n涉及症状、检查结果或用药，请咨询医生。食品不能代替药物或诊疗。\n\n#生活方式记录 #饮食习惯 #知养\n\n${sourceLine}`;
}

function pairedSections(blocks, headings) {
  const groups = [];
  for (let index = 0; index < blocks.length; index += 2) groups.push(blocks.slice(index, index + 2));
  return groups.map((group, index) => `${headings[index] || `补充说明：第${index + 1}步`}\n\n${group.join('\n\n')}`).join('\n\n');
}

function xhsDraft(ctx, titles, blocks, sourceLine) {
  const emojiHeads = ['📌 先说结论', '🧾 我怎么记录', '⚠️ 最容易踩的坑', '✅ 今天就能做', '🌿 古今对照', '🔍 标签事实'];
  const body = blocks.map((block, index) => `${emojiHeads[index % emojiHeads.length]}\n${block}`).join('\n\n');
  return `${titles[0]}\n\n先说一个可能不太讨喜的真相：懂得多，不等于到了真实场景就能做出来。${ctx.audience.life}，这时候最先接管选择的往往是惯性。\n\n${body}${classicInsert(ctx)}${contextualProduct(ctx)}\n\n最后留一个很具体的问题：你最容易偏离计划的时刻，是A下午犯困、B下班聚餐、C深夜外卖，还是D睡前刷手机？留言一个字母就好。\n\n${ctx.purpose.cta}\n\n本文用于一般生活方式与食品信息科普，不构成诊断或治疗建议。涉及症状、检查、用药或特殊疾病状态，请咨询医生。\n\n#生活方式管理 #食品标签 #饮食记录 #7天自查 #知养\n\n${sourceLine}`;
}

function wechatDraft(ctx, titles, blocks, sourceLine) {
  const headings = ['一、真正难改的，往往不是知识', '二、把问题落到一个真实场景', '三、从今天开始怎么做', '四、别忽略适用条件', '五、证据应该怎样留下', '六、品牌能说什么、不能说什么', '七、古籍引用的正确位置', '八、把一次改变变成一周记录', '九、什么时候必须找医生'];
  const body = pairedSections(blocks, headings);
  return `${titles[0]}\n\n很多人不是不知道该注意什么，而是不知道怎样把原则放进加班、聚餐、甜饮和熬夜这些真实场景。\n\n${pick(SCENES, ctx.random)}\n\n我们很容易把健康管理写成一张禁止清单。但对${ctx.audience.label}来说，真正的问题是：${ctx.audience.life}。如果方法不能进入这些细节，它就很难坚持。\n\n${body}${classicInsert(ctx)}${contextualProduct(ctx)}\n\n写在最后\n\n不要把一次偏离理解成失败，也不要因为一篇科普文章自行停药、换药或给自己下诊断。真正稳妥的顺序是：先记录真实生活，再依据可靠资料调整；遇到症状、检查异常和用药问题，及时咨询医生。\n\n${ctx.purpose.cta}\n\n本文为一般科普及传统文化阅读，不构成个体诊疗建议；产品信息以最终实物标签为准。\n\n${sourceLine}`;
}

function zhihuDraft(ctx, titles, blocks, sourceLine) {
  const headings = ['为什么只靠意志力通常不够？', '更可执行的方法是什么？', '怎样判断自己该先改哪一步？', '哪些适用条件不能省略？', '证据与出处应该怎样核？', '如果涉及产品，应该如何看信息？', '古籍引用能承担什么作用？', '怎么做一周复盘？', '什么时候不该继续看网络内容？'];
  const body = pairedSections(blocks, headings);
  return `${titles[0]}\n\n先说结论：${ctx.topic.label}不适合用“一次全部改掉”作为长期策略。更现实的做法是识别高频场景、记录一周，再选择一个成本最低的动作测试。公开科普只能提供一般原则；涉及症状、检查或用药，应该由医生判断。\n\n${body}${classicInsert(ctx)}${contextualProduct(ctx)}\n\n一个可以直接照做的7天版本\n\n第1-2天只记录，不评价；第3-4天找重复场景；第5天设计一个替代动作；第6天测试；第7天只回答三个问题：什么最容易做到、什么最容易反复、下周只保留什么。\n\n这套方法的重点不是让人“感觉自己很自律”，而是减少下一次在疲惫、聚餐或临时诱因下做决定的难度。复盘时建议保留一条具体证据，例如“周三22:40加班后点了外卖”，而不是写“这一周意志力差”。前者能帮助你提前准备替代动作，后者只会增加情绪压力。\n\n还需要补充的是，健康内容的可信度不来自语气多肯定，而来自边界是否完整：一般原则有没有适用条件，数字能不能追到原文，产品有没有回到最终标签，古籍有没有交代版本。只要其中一个环节说不清，就应该暂缓发布，而不是用更强烈的标题掩盖证据不足。\n\n${ctx.purpose.cta}\n\n本文不构成诊疗建议，也不使用古籍或指南为具体食品证明功效。\n\n${sourceLine}`;
}

function weiboDraft(ctx, titles, blocks, sourceLine) {
  const selected = ctx.lengthKey === 'short' ? blocks.slice(0, 2) : blocks;
  const body = selected.map((block, index) => ctx.lengthKey === 'short' ? block : `${index + 1}/${selected.length} ${block}`).join('\n\n');
  return `#${ctx.topic.label}#\n\n${pick(HOOKS[ctx.topicKey], ctx.random)}\n\n${body}${classicInsert(ctx)}${contextualProduct(ctx)}\n\n今天只做一件事：写下你最容易偏离计划的时间和场景。\n\n投票：你最难改的是？A甜饮 B聚餐 C宵夜 D熬夜\n\n${ctx.purpose.cta}\n\n提示：一般科普不替代诊疗，食品信息以最终标签为准。\n\n来源：${ctx.sources.map((source) => source.short).join('；')}。`;
}

function makeDraft(ctx) {
  const titles = titleSet(ctx);
  const blocks = assembleBody(ctx);
  const sources = referencesFor(ctx);
  ctx.sources = sources;
  const sourceLine = sourceText(sources);
  ctx.selectedTitle = titles[0];
  const generators = { video: videoDraft, xhs: xhsDraft, wechat: wechatDraft, zhihu: zhihuDraft, weibo: weiboDraft };
  return generators[ctx.platformKey](ctx, titles, blocks, sourceLine);
}

function buildContext(seed) {
  const platformKey = $('#platform').value;
  const productKey = $('#product').value;
  const audienceKey = $('#audience').value;
  const purposeKey = $('#purpose').value;
  const stageKey = $('#stage').value;
  const lengthKey = $('#length').value;
  const topicKey = $('#topic').value;
  const angleKey = $('#angle').value;
  return {
    seed, random: rng(seed), platformKey, productKey, audienceKey, purposeKey, stageKey, lengthKey, topicKey, angleKey,
    platform: PLATFORMS[platformKey], product: PRODUCTS[productKey], audience: AUDIENCES[audienceKey], purpose: PURPOSES[purposeKey],
    stage: STAGES[stageKey], length: LENGTHS[lengthKey], topic: TOPICS[topicKey], angle: ANGLES[angleKey], brief: clean($('#brief').value)
  };
}

const RISK_PATTERNS = [
  ['疾病治疗/指标功效', /(?:治疗|治愈|根治|稳定降酸|降低尿酸|溶晶|消除痛风石|预防复发)/g],
  ['药物替代/停药风险', /(?:替代药物|减少药量|停药|不用吃药|无须就医)/g],
  ['性功能暗示', /(?:壮阳|补肾|持久|性能力|征服女人)/g],
  ['绝对化承诺', /(?:当天见效|百分之百|100%有效|绝无副作用|适合所有人|无效退款)/g],
  ['恐吓或诊断', /(?:隐形杀手|一定会得|你已经是|再不.*就会)/g]
];

function riskAudit(text) {
  const found = [];
  const sentences = text.split(/[。！？；\n]/).filter(Boolean);
  for (const [label, pattern] of RISK_PATTERNS) {
    const unsafe = sentences.some((sentence) => {
      pattern.lastIndex = 0;
      if (!pattern.test(sentence)) return false;
      return !/(?:不得|不能|不可|不要|不应|不会|不自行|不构成|不作为|禁止|避免|不等于|不是|未发现|没有)/.test(sentence);
    });
    if (unsafe) found.push(label);
  }
  return found;
}

function strategyText(ctx) {
  const productMode = ctx.stageKey === 'cold' ? '本条不出现产品销售内容' : ctx.stageKey === 'warm' ? '只弱露品牌边界，不讲功效' : '可出现经核验标签事实，不讲疾病功效';
  return `产品：${ctx.product.name}｜${ctx.product.category}\n平台：${ctx.platform.label}｜交付物：${ctx.platform.deliverable}\n目标人群：${ctx.audience.label}\n营销目的：${ctx.purpose.label}\n发布阶段：${ctx.stage.label}\n目标篇幅：${ctx.length.targets[ctx.platformKey]}\n内容主题：${ctx.topic.label}\n内容角度：${ctx.angle}\n场景补充：${ctx.brief || '由系统随机匹配真实生活场景'}\n\n阶段规则：${ctx.stage.rule}\n产品露出：${productMode}\n平台写法：${ctx.platform.tone}\n唯一转化动作：${ctx.purpose.cta}`;
}

function logicText(ctx, draft) {
  return `【内容目的】\n用“${ctx.topic.label}”触达${ctx.audience.label}，当前主要目标是“${ctx.purpose.label}”，而不是在一条内容里同时完成科普、卖货、加微信和成交。\n\n【抓人逻辑】\n标题使用具体人群、生活场景或认知反差制造信息缺口；开头不先讲大道理，而是把用户拉回“${ctx.audience.life}”的瞬间。吸睛来自细节和冲突，不依赖虚假经历或夸大功效。\n\n【平台逻辑】\n${ctx.platform.label}采用“${ctx.platform.tone}”的表达。交付内容是${ctx.platform.deliverable}，已包含发布标题、完整正文/口播、互动动作、风险说明与来源。\n\n【阶段逻辑】\n${ctx.stage.rule} 本条的产品处理原则是：${ctx.stageKey === 'cold' ? '不露产品，让账号先获得内容可信度。' : ctx.stageKey === 'warm' ? '品牌只作为内容服务者出现。' : '只陈述最终标签能证明的事实，并保留人工审核。'}\n\n【证据逻辑】\n本条引用${ctx.sources.length}类来源。指南只支持一般食养与生活方式科普；古籍只支持文化叙事；两者都不能证明${ctx.product.name}的成品功效。\n\n【差异化机制】\n本版本号为 ${hash(draft)}。标题、开场、场景、段落顺序、行动建议和结尾互动均由本次随机种子重新组合，并与本地历史版本查重。`;
}

function renderResult(ctx, draft, duplicateRetries) {
  const strategy = strategyText(ctx);
  const logic = logicText(ctx, draft);
  const risks = riskAudit(draft);
  const count = charCount(draft);
  const version = hash(draft);
  const auditClass = risks.length ? 'audit danger' : 'audit';
  const auditText = risks.length
    ? `系统发现高风险词类：${risks.join('、')}。其中可能包含否定语境，但发布前仍须逐句人工核对。`
    : '未发现内置高风险词；这不等于已通过法律或平台审核，仍须人工复核事实、上下文和最新规则。';
  $('#result-status').textContent = `已生成 · 待人工审核 · ${new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })}`;
  $('#result').innerHTML = `
    <div class="metrics">
      <span class="metric">正文约 ${count} 字符</span>
      <span class="metric">目标 ${ctx.length.targets[ctx.platformKey]}</span>
      <span class="metric">来源 ${ctx.sources.length} 项</span>
      <span class="metric">版本 ${version}</span>
      <span class="metric">查重重试 ${duplicateRetries} 次</span>
    </div>
    <section class="draft-card publish-card">
      <div class="draft-title"><div><span class="badge gold">复制后即可使用</span><h3>${escapeHtml(ctx.platform.label)}可直接发布成稿｜${escapeHtml(ctx.length.targets[ctx.platformKey])}</h3></div>${copyButton(draft)}</div>
      <pre class="draft-body">${escapeHtml(draft)}</pre>
    </section>
    <details class="review-details">
      <summary>展开查看内部策划与审核信息（不属于发布正文）</summary>
      <section class="draft-card">
        <div class="draft-title"><div><span class="badge">内部内容策略</span><h3>${escapeHtml(ctx.product.name)} · ${escapeHtml(ctx.platform.label)} · ${escapeHtml(ctx.topic.label)}</h3></div>${copyButton(strategy)}</div>
        <pre class="draft-body">${escapeHtml(strategy)}</pre>
      </section>
      <section class="draft-card">
        <div class="draft-title"><div><span class="badge">内部方法复盘</span><h3>为什么这样写</h3></div>${copyButton(logic)}</div>
        <pre class="draft-body">${escapeHtml(logic)}</pre>
      </section>
      <section class="${auditClass}">
        <b>内容风险检查：待人工审核</b>
        <span>${escapeHtml(auditText)}</span>
        <span>产品资料中的“降酸、溶晶、补肾、壮阳、见效、替代或减少药物”等说法已从可用事实库隔离。</span>
        <span>发布时还要核对最终实物标签、价格、食用方式、不适宜人群、古籍卷次、指南原文和该平台最新规则。</span>
      </section>
    </details>`;
  document.querySelectorAll('[data-copy]').forEach((button) => {
    button.addEventListener('click', async () => {
      await navigator.clipboard.writeText(decodeURIComponent(button.dataset.copy));
      button.textContent = '已复制';
      setTimeout(() => { button.textContent = '复制'; }, 1000);
    });
  });
}

function generate() {
  const history = JSON.parse(localStorage.getItem('zhiyang-content-history') || '[]');
  let ctx;
  let draft;
  let tries = 0;
  do {
    ctx = buildContext(createSeed() + tries * 97);
    draft = makeDraft(ctx);
    tries += 1;
  } while (history.some((item) => item.hash === hash(draft)) && tries < 12);
  history.unshift({ hash: hash(draft), at: new Date().toISOString(), platform: ctx.platform.label, topic: ctx.topic.label, preview: draft.slice(0, 80) });
  localStorage.setItem('zhiyang-content-history', JSON.stringify(history.slice(0, 100)));
  renderResult(ctx, draft, tries - 1);
}

function renderLibrary() {
  const keyword = clean($('#knowledge-search').value).toLowerCase();
  const category = $('#knowledge-filter').value;
  const filtered = KNOWLEDGE.filter((item) => {
    const matchesCategory = category === 'all' || item.category === category;
    const haystack = `${item.category}${item.title}${item.use}${item.limit}`.toLowerCase();
    return matchesCategory && (!keyword || haystack.includes(keyword));
  });
  $('#knowledge-count').textContent = `${filtered.length} / ${KNOWLEDGE.length} 条`;
  $('#knowledge').innerHTML = filtered.map((item) => {
    const source = item.source ? SOURCES[item.source] : null;
    return `<article class="knowledge">
      <span>${escapeHtml(item.category)}</span>
      <h3>${escapeHtml(item.title)}</h3>
      <p class="do"><b>可用：</b>${escapeHtml(item.use)}</p>
      <p class="dont"><b>不可用：</b>${escapeHtml(item.limit)}</p>
      <small>${source ? `<a href="${source.url}" target="_blank" rel="noopener">查看来源 ↗</a>` : '来源：用户提供的产品资料，发布前对照最终实物标签'}</small>
    </article>`;
  }).join('') || '<div class="empty-state"><div><b>没有匹配卡片</b>换一个关键词或分类。</div></div>';
}

function setPage(id) {
  document.querySelectorAll('.page,.nav').forEach((element) => element.classList.remove('active'));
  $(`#${id}`).classList.add('active');
  document.querySelector(`[data-page="${id}"]`).classList.add('active');
  $('#page-title').textContent = { studio: 'AI 文案设计台', library: '证据知识库', workflow: '发布工作流' }[id];
}

const LENGTH_BOUNDS_V3 = {
  short: { video: [260, 440], xhs: [600, 800], wechat: [800, 1100], zhihu: [900, 1200], weibo: [220, 350] },
  medium: { video: [500, 760], xhs: [1000, 1400], wechat: [1500, 2000], zhihu: [1500, 2000], weibo: [500, 800] },
  long: { video: [900, 1350], xhs: [1600, 2200], wechat: [2300, 3000], zhihu: [2300, 3000], weibo: [900, 1300] }
};

const RISK_RULES_V3 = [
  ['疾病治疗或指标功效', /治疗|治愈|根治|稳定降酸|降低尿酸|尿酸降到|溶晶|消除痛风石|预防复发/],
  ['药物替代或停药暗示', /替代药物|减少药量|停药|不用吃药|无须就医/],
  ['性功能暗示', /壮阳|补肾|持久|提高性能力|征服女人/],
  ['绝对化效果承诺', /当天见效|百分之百|100%有效|绝无副作用|适合所有人|无效退款/],
  ['诊断或恐吓表达', /隐形杀手|一定会得|你已经是[^，。；]*患者|再不[^，。；]*就会/],
  ['效果见证或检测值对比', /(?:服用|吃了|用了)[^，。；]{0,12}(?:天|周|月)[^，。；]{0,12}(?:见效|有效|改善)|(?:尿酸|指标)[^，。；]{0,8}(?:从|由)\d+[^，。；]{0,8}(?:降到|变成)\d+/]
];

function riskAuditV3(text, ctx) {
  const scanned = text
    .replace(/不构成(?:个体)?诊疗建议/g, '')
    .replace(/不构成诊断或治疗建议/g, '')
    .replace(/不能代替药物或诊疗/g, '')
    .replace(/不能替代诊疗/g, '')
    .replace(/不用于诊断、治疗或预防疾病/g, '')
    .replace(/不能代替诊断、治疗或药物/g, '')
    .replace(/不指导停药/g, '')
    .replace(/不得使用[“”][^“”]+[“”]等表述/g, '')
    .replace(/不要因为[^。；]+自行停药、换药/g, '');
  const critical = RISK_RULES_V3.filter(([, pattern]) => pattern.test(scanned)).map(([label]) => label);
  const warnings = [];
  if (ctx && scanned.split(/\n{2,}/).some((paragraph) => paragraph.includes(ctx.product.name) && /痛风|高尿酸|疾病|症状|用药/.test(paragraph))) warnings.push('同段出现产品名与疾病/用药词，请确认没有建立功效关联');
  return { critical: [...new Set(critical)], warnings: [...new Set(warnings)] };
}

function fitLengthV3(body, ctx) {
  const [min, max] = LENGTH_BOUNDS_V3[ctx.lengthKey][ctx.platformKey];
  const additions = shuffled([
    ...LONGFORM_BLOCKS, ...EXTRA_BLOCKS,
    `对${ctx.audience.label}来说，重点不是把一天写成满分答案，而是找到最常重复的触发点。${ctx.audience.life}，所以记录必须足够简单：什么时候、在什么场景、做了什么选择、下一次准备换成什么。只要这四项能连续留下来，复盘就有了依据。`,
    '执行时可以把门槛设得低一些：不追求每次都做对，只追求每次都留下事实。事实越具体，下一步越容易设计；评价越抽象，越容易把问题误解成“我不够自律”。',
    '一般生活方式建议不等于个人诊疗方案。出现持续不适、急性症状、检查异常，或正在使用药物时，应把网络内容停在参考层面，及时咨询医生。',
    '如果内容里出现食品，核对顺序应当固定：先看食品类别，再看配料、规格、食用方法和不适宜人群，最后才看品牌怎样介绍。包装正面的故事可以帮助理解，但不能替代背面的标签事实。',
    `把这条内容真正落地时，可以在发布后的评论区只追问一个问题：“你最容易在哪个时间点遇到同样情况？”答案会帮助团队判断，下一条内容应该继续拆${ctx.topic.label}，还是转向更具体的场景。不要同时追问过多个人健康信息，也不要在公开评论区收集检查报告。`,
    '复盘一条内容时，不只看点赞。收藏说明用户想以后再用，评论说明场景引起了表达欲，完整阅读或完播说明开头与正文衔接有效。团队应记录标题、角度、篇幅和互动动作，下一轮只改一个变量，才能知道究竟是哪一步起作用。',
    '古籍、指南和产品标签承担的是三种不同任务：古籍提供文化背景，指南支持一般生活方式原则，标签证明产品客观信息。三者可以在同一篇文章中出现，但不能相互代替，更不能用文化故事跨过现代证据和食品宣传边界。'
  ], ctx.random);
  const paragraphs = body.split(/\n{2,}/).map((item) => item.trim()).filter(Boolean);
  let addIndex = 0;
  while (charCount(paragraphs.join('\n\n')) < min && addIndex < additions.length) {
    const candidate = additions[addIndex++];
    if (!paragraphs.includes(candidate)) paragraphs.splice(Math.max(2, paragraphs.length - 3), 0, candidate);
  }
  while (charCount(paragraphs.join('\n\n')) > max && paragraphs.length > 6) {
    const removable = paragraphs.map((value, index) => ({ value, index }))
      .filter(({ value, index }) => index > 1 && index < paragraphs.length - 3 && !/第1—2天|问题一|清单第1项|先拆误区/.test(value))
      .sort((a, b) => b.value.length - a.value.length)[0];
    if (!removable) break;
    paragraphs.splice(removable.index, 1);
  }
  let fitted = paragraphs.join('\n\n');
  if (charCount(fitted) > max) {
    const raw = fitted.replace(/\s+/g, '');
    const cutAt = Math.max(raw.lastIndexOf('。', max - 80), raw.lastIndexOf('！', max - 80), raw.lastIndexOf('？', max - 80));
    if (cutAt > min) fitted = `${raw.slice(0, cutAt + 1)}\n\n提示：本文为一般科普，不替代诊疗；食品信息以最终实物标签为准。`;
  }
  return fitted;
}

function splitDraftV3(ctx, draft) {
  const lines = draft.trim().split('\n');
  const title = lines.shift().trim();
  let body = lines.join('\n').trim().replace(/\n*参考资料：[\s\S]*$/m, '').replace(/\n*来源：[^\n]*。?\s*$/m, '').trim();
  body = fitLengthV3(body, ctx);
  return { title, body, full: `${title}\n\n${body}` };
}

function historyV3() { try { return JSON.parse(localStorage.getItem('zhiyang-content-history-v3') || '[]'); } catch { return []; } }
function setHistoryV3(items) { localStorage.setItem('zhiyang-content-history-v3', JSON.stringify(items.slice(0, 30))); renderHistoryV3(); }

function similarityV3(a, b) {
  const chunks = (value) => new Set((value || '').replace(/\s+/g, '').match(/.{1,12}/g) || []);
  const left = chunks(a); const right = chunks(b); if (!left.size || !right.size) return 0;
  let same = 0; left.forEach((item) => { if (right.has(item)) same += 1; }); return same / Math.min(left.size, right.size);
}

function editorValuesV3() {
  const title = $('#draft-title-editor')?.value.trim() || '';
  const body = $('#draft-body-editor')?.value.trim() || '';
  return { title, body, full: `${title}\n\n${body}` };
}

async function copyTextV3(value, button) {
  const original = button.textContent;
  try {
    if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(value);
    else {
      const helper = document.createElement('textarea'); helper.value = value; helper.style.position = 'fixed'; helper.style.opacity = '0';
      document.body.appendChild(helper); helper.select();
      if (!document.execCommand('copy')) throw new Error('copy failed'); helper.remove();
    }
    button.textContent = '已复制'; $('#copy-feedback').textContent = '已复制到剪贴板。正式发布前请完成三项审核。';
  } catch { $('#copy-feedback').textContent = '自动复制失败，请在编辑框内全选后手动复制。'; }
  setTimeout(() => { button.textContent = original; }, 1200);
}

function saveVersionV3(ctx) {
  const value = editorValuesV3(); if (!value.body) return;
  const item = {
    id: `${Date.now()}-${hash(value.full)}`, at: new Date().toISOString(), platform: ctx.platform.label, topic: ctx.topic.label,
    title: value.title, body: value.body,
    context: { product: ctx.productKey, platform: ctx.platformKey, audience: ctx.audienceKey, purpose: ctx.purposeKey, stage: ctx.stageKey, length: ctx.lengthKey, topic: ctx.topicKey, angle: ctx.angleKey }
  };
  setHistoryV3([item, ...historyV3().filter((old) => old.id !== item.id)]); return item;
}

function downloadV3(value, ctx) {
  const references = ctx.sources.map((source, index) => `${index + 1}. ${source.title}\n${source.url}`).join('\n');
  const content = `${value.full}\n\n——审核记录——\n操作者已勾选确认产品标签、引用和平台规则。\n导出时间：${new Date().toLocaleString('zh-CN')}\n\n引用来源：\n${references}`;
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' }); const url = URL.createObjectURL(blob);
  const link = document.createElement('a'); link.href = url; link.download = `知养-${ctx.platform.label}-${Date.now()}.txt`; link.click(); URL.revokeObjectURL(url);
}

function bindEditorV3(ctx) {
  const checks = [...document.querySelectorAll('[data-review]')];
  const update = () => {
    const value = editorValuesV3(); const [min, max] = LENGTH_BOUNDS_V3[ctx.lengthKey][ctx.platformKey]; const count = charCount(value.body); const audit = riskAuditV3(value.full, ctx);
    $('#live-count').textContent = `正文 ${count} 字；目标 ${min}—${max} 字。${audit.critical.length ? ` 阻断项：${audit.critical.join('、')}` : ''}`;
    $('#live-count').classList.toggle('length-warning', count < min || count > max || audit.critical.length > 0);
    document.querySelectorAll('[data-action="copy-body"],[data-action="copy-full"]').forEach((item) => { item.disabled = audit.critical.length > 0; });
    const approved = checks.every((item) => item.checked) && !audit.critical.length && count >= min && count <= max;
    document.querySelector('[data-action="download"]').disabled = !approved;
    $('#review-status').textContent = approved ? '审核项已确认' : '待审核'; $('#review-status').classList.toggle('ready', approved);
  };
  $('#draft-body-editor').addEventListener('input', update); $('#draft-title-editor').addEventListener('input', update); checks.forEach((item) => item.addEventListener('change', update));
  document.querySelectorAll('.editor-toolbar button').forEach((button) => button.addEventListener('click', () => {
    const value = editorValuesV3(); const action = button.dataset.action;
    if (action === 'copy-title') copyTextV3(value.title, button);
    if (action === 'copy-body') copyTextV3(value.body, button);
    if (action === 'copy-full') copyTextV3(value.full, button);
    if (action === 'save') { saveVersionV3(ctx); const label = button.textContent; button.textContent = '已保存'; setTimeout(() => { button.textContent = label; }, 1000); }
    if (action === 'download') downloadV3(value, ctx);
  })); update();
}

function renderResultV3(ctx, draft, retries) {
  const strategy = strategyText(ctx); const logic = logicText(ctx, draft.full); const audit = riskAuditV3(draft.full, ctx); const count = charCount(draft.body); const version = hash(draft.full);
  const [min, max] = LENGTH_BOUNDS_V3[ctx.lengthKey][ctx.platformKey]; const lengthOk = count >= min && count <= max;
  const auditClass = audit.critical.length ? 'audit danger' : audit.warnings.length ? 'audit warning' : 'audit';
  const auditText = audit.critical.length ? `发现阻断发布的高风险表达：${audit.critical.join('、')}。请修改后再复制正文或导出。` : audit.warnings.length ? audit.warnings.join('；') : '未发现内置规则可识别的高风险表达；这不等于通过法律审查，仍须人工复核。';
  $('#result-status').textContent = `已生成 · 待人工审核 · ${new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })}`;
  $('#result').innerHTML = `<div class="metrics"><span class="metric ${lengthOk ? '' : 'length-warning'}">正文 ${count} 字</span><span class="metric">目标 ${ctx.length.targets[ctx.platformKey]}</span><span class="metric">来源 ${ctx.sources.length} 项</span><span class="metric">版本 ${version}</span><span class="metric">查重重试 ${retries} 次</span></div>
  <section class="draft-card publish-card"><div class="draft-title"><div><span class="badge gold">可编辑完整成稿</span><span id="review-status" class="status-chip">待审核</span><h3>${escapeHtml(ctx.platform.label)}完整正文｜${escapeHtml(ctx.length.targets[ctx.platformKey])}</h3></div></div>
  <div class="publish-meta"><span>${escapeHtml(ctx.angle)}</span><span>${escapeHtml(ctx.stage.label)}</span><span>${ctx.stageKey === 'cold' ? '正文不露产品' : '仅使用标签事实'}</span></div>
  <textarea id="draft-title-editor" class="draft-editor draft-title-editor" aria-label="可编辑标题">${escapeHtml(draft.title)}</textarea><textarea id="draft-body-editor" class="draft-editor draft-body-editor" aria-label="可编辑正文">${escapeHtml(draft.body)}</textarea>
  <div id="live-count" class="copy-feedback">正文 ${count} 字；目标 ${min}—${max} 字。</div><div class="editor-toolbar"><button type="button" data-action="copy-title">复制标题</button><button type="button" data-action="copy-body" ${audit.critical.length ? 'disabled' : ''}>复制正文（待审）</button><button type="button" data-action="copy-full" ${audit.critical.length ? 'disabled' : ''}>复制标题+正文</button><button type="button" data-action="save">保存新版本</button><button type="button" data-action="download" disabled>导出审核发布版</button></div><div id="copy-feedback" class="copy-feedback"></div></section>
  <section class="review-gate"><b>发布审核 <span class="status-chip">三项全选后才可导出发布版</span></b><label><input type="checkbox" data-review="facts">我已对照最终实物标签，核对名称、类别、配料、规格、食用方法和不适宜人群。</label><label><input type="checkbox" data-review="sources">我已打开引用链接，核对数字、古籍原文和适用范围。</label><label><input type="checkbox" data-review="platform">我已按当前平台最新规则复核标题、商业标识和导流方式。</label></section>
  <section class="draft-card"><div class="draft-title"><div><span class="badge">引用核对区</span><h3>引用不混入正文，审核时逐条打开</h3></div></div><div class="reference-list">${ctx.sources.map((source, index) => `<a href="${source.url}" target="_blank" rel="noopener">${index + 1}. ${escapeHtml(source.title)} ↗</a>`).join('')}</div></section>
  <details class="review-details"><summary>展开内部策划与审核信息（不属于发布正文）</summary><section class="draft-card"><div class="draft-title"><div><span class="badge">内部内容策略</span><h3>${escapeHtml(ctx.product.name)} · ${escapeHtml(ctx.platform.label)} · ${escapeHtml(ctx.topic.label)}</h3></div></div><pre class="draft-body">${escapeHtml(strategy)}</pre></section><section class="draft-card"><div class="draft-title"><div><span class="badge">内部方法复盘</span><h3>目的、方法与逻辑</h3></div></div><pre class="draft-body">${escapeHtml(logic)}</pre></section><section class="${auditClass}"><b>内容风险检查</b><span>${escapeHtml(auditText)}</span><span>产品资料中的“降酸、溶晶、补肾、壮阳、见效、替代或减少药物”等说法已隔离；最终仍要核对实物标签和平台规则。</span></section></details>`;
  bindEditorV3(ctx);
}

function generateV3() {
  const history = historyV3(); let ctx; let draft; let tries = 0;
  do { ctx = buildContext(createSeed() + tries * 97); const generated = makeDraft(ctx); draft = splitDraftV3(ctx, generated); tries += 1; }
  while (history.some((item) => similarityV3(item.body, draft.body) > 0.9) && tries < 16);
  renderResultV3(ctx, draft, tries - 1); saveVersionV3(ctx);
}

function renderHistoryV3() {
  const history = historyV3();
  $('#history').innerHTML = history.length ? `<div class="history-list">${history.map((item, index) => `<article class="history-item"><div><b>${escapeHtml(item.title || '未命名草稿')}</b><small>${escapeHtml(item.platform || '')} · ${escapeHtml(item.topic || '')} · ${new Date(item.at).toLocaleString('zh-CN')}</small></div><div class="history-actions"><button type="button" data-restore="${index}">恢复</button><button type="button" data-delete="${index}">删除</button></div></article>`).join('')}</div>` : '<div class="empty-state"><div><b>还没有本机草稿</b>每次生成会自动保存，可随时恢复继续编辑。</div></div>';
  document.querySelectorAll('[data-restore]').forEach((button) => button.addEventListener('click', () => { const item = historyV3()[Number(button.dataset.restore)]; if (!item) return; Object.entries(item.context || {}).forEach(([id, value]) => { if ($(`#${id}`)) $(`#${id}`).value = value; }); const ctx = buildContext(createSeed()); ctx.sources = referencesFor(ctx); renderResultV3(ctx, { title: item.title, body: item.body, full: `${item.title}\n\n${item.body}` }, 0); updateStageNoteV3(); window.scrollTo({ top: 0, behavior: 'smooth' }); }));
  document.querySelectorAll('[data-delete]').forEach((button) => button.addEventListener('click', () => { const list = historyV3(); list.splice(Number(button.dataset.delete), 1); setHistoryV3(list); }));
}

function updateStageNoteV3() {
  const stageKey = $('#stage').value; const product = PRODUCTS[$('#product').value]; const notes = {
    cold: `冷启动阶段：已选“${product.name}”只用于决定选题方向，正文不露产品、不导购。`, warm: `预热阶段：可弱露“${product.name}”作为内容服务者，不写产品功效。`,
    convert: '转化阶段：只允许使用已对照实物标签的产品事实，生成后必须完成三项审核。', retain: '留存阶段：以记录、问卷和人工答疑为主，不用高频促销制造焦虑。'
  }; $('#stage-note').textContent = notes[stageKey];
}

function initialize() {
  seedControls();
  $('#result').innerHTML = '<div class="empty-state"><div><b>选择条件，生成可编辑的完整正文</b>生成后可直接修改标题与正文；完成标签、引用和平台规则审核后，才能导出发布版。</div></div>';
  renderLibrary();
  renderHistoryV3();
  updateStageNoteV3();
  $('#generate').addEventListener('click', generateV3);
  $('#stage').addEventListener('change', updateStageNoteV3);
  $('#product').addEventListener('change', updateStageNoteV3);
  $('#clear-history').addEventListener('click', () => { if (window.confirm('只清空当前浏览器中的草稿记录，确定继续吗？')) setHistoryV3([]); });
  $('#knowledge-search').addEventListener('input', renderLibrary);
  $('#knowledge-filter').addEventListener('change', renderLibrary);
  document.querySelectorAll('.nav').forEach((button) => button.addEventListener('click', () => setPage(button.dataset.page)));
}

initialize();
