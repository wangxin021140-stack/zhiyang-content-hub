const $ = s => document.querySelector(s);
const facts = {
  shuling:{name:'舒零', subtitle:'昆布柠檬酸泡腾片', facts:'产品资料载明：2×12片/盒；含昆布相关原料、柠檬酸盐等。产品事实、售价与食用方式必须以最终包装和审核资料为准。', scenes:['应酬饮酒多','含糖饮料频繁','饮食与作息不规律','想建立日常记录习惯'], angles:['反常识误区','场景共鸣','7天挑战','清单方法','本草文化']},
  mengben:{name:'梦犇健', subtitle:'人参牡蛎肽压片糖果', facts:'产品资料载明：压片糖果，6粒/盒，每日1粒；含人参粉、牡蛎肽粉等。包装列有不适宜人群，所有适用与食用信息以最终包装为准。', scenes:['高强度工作与作息紊乱','男性自我管理','送礼与品质关注','日常状态管理'], angles:['场景共鸣','成分故事','礼赠表达','本草文化','生活方式提醒']}
};
const style = {
  video:{label:'视频号', format:'45-60秒真人口播脚本', hook:'前3秒要直接抛出反差问题；镜头感强、口语化、每句短。', cta:'评论或私信回复“自查”，领取 7 天生活方式自查表。'},
  xhs:{label:'小红书', format:'6页图文 / 350-500字笔记', hook:'标题必须有场景、冲突或结果；正文用短段落和清单，拒绝硬广。', cta:'想要自查表，评论区回复“自查”。'},
  wechat:{label:'公众号', format:'900-1200字深度文章框架', hook:'标题解决一个具体问题；导语先共情，再给方法，文末留资料入口。', cta:'回复“自查”，领取 7 天生活方式自查表。'},
  zhihu:{label:'知乎', format:'800-1200字问题回答', hook:'先直接回答，再说明边界和可执行步骤；克制、实用、避免营销腔。', cta:'如需一份可执行的 7 天记录模板，可回复“自查”。'},
  weibo:{label:'微博', format:'120-180字短观点', hook:'一句观点 + 3个短点 + 互动问题；轻、快、有讨论感。', cta:'回复“自查”领表。'}
};
const audience = {
  social:'35-55岁：应酬多、饮酒或甜饮频繁的职场人', young:'25-35岁：熬夜、外卖、久坐较多的年轻上班族', family:'40岁以上：关注家庭饮食与日常管理的人群', male:'30-55岁：关注精力、作息和自我状态管理的男性', gift:'关注品质与礼赠场景的成年消费者'
};
const purposes = {lead:'获取私信/评论“自查”线索',follow:'提升关注、收藏和完播',trust:'建立专业与品牌信任',community:'引导进入企微后的互动与打卡'};
const angles = {mistake:'反常识误区',scene:'具体场景共鸣',checklist:'清单方法',challenge:'7天挑战',herbal:'本草文化',ingredient:'成分与品质故事'};
const stages = {cold:'冷启动期｜第1-7天：先抓停留与关注，不急着讲产品',warm:'预热期｜第8-21天：以资料、挑战和场景建立信任',convert:'转化期｜第22-30天：承接咨询，解释产品事实与服务流程',retain:'留存期｜已加企微/已购后：打卡、复盘、低频触达'};
const lengths = {short:'短｜视频30-45秒；图文300-500字；适合测钩子',medium:'中｜视频60-90秒；图文800-1200字；适合建立信任',long:'长｜视频2-3分钟；图文1800-2500字；适合深度沉淀'};
const compliance = '内容仅供健康科普及传统文化阅读参考，不构成诊疗建议；产品信息以最终包装及审核资料为准。';
const herb = '本草文化卡：〔明〕李时珍《本草纲目·草部·昆布》收录昆布。古籍记述只用于传统文化介绍，不作为现代产品功效依据。';
const factBank = [
  {id:'water', text:'国家卫生健康委 2024 食养指南提出，在心、肾功能正常情况下，应足量、规律性饮水，建议每天 2000–3000mL。', use:'饮水、夏季、熬夜、应酬后恢复'},
  {id:'sugar', text:'指南建议限制果糖含量较高的加工食品，并限制饮酒；内容中可把“甜饮、果汁饮料、夜间饮酒”写成值得记录的高频场景。', use:'甜饮、聚餐、办公室下午茶'},
  {id:'balance', text:'指南强调食物多样、均衡营养，而不是把所有食物一刀切；可用“每天不少于12种、每周不少于25种”作为饮食记录的灵感。', use:'饮食清单、反极端忌口'},
  {id:'routine', text:'指南同时强调健康体重、规律作息、劳逸结合和适量运动；适合用于“别只盯一顿饭”的内容主张。', use:'熬夜、久坐、长期习惯'}
];
const hooks = {
  video:['你以为问题在这一顿饭，其实很多人输在下班后的30分钟。','别再一上来就忌口了，真正拖后腿的，可能是你每天都重复的一件小事。','如果你总是“明天开始”，先别骂自己，你可能只是没看懂自己的触发场景。','很多人把注意力放在吃什么，却忘了看自己什么时候最容易放弃。'],
  xhs:['不是吃得多才麻烦，很多人输在这一个“每天都做”的习惯','35+应酬党别再硬扛：先把这张习惯账单算明白','别急着戒！先看懂你下班后最容易失控的30分钟','被催更的7天自查：不为难自己，但能看清问题在哪'],
  wechat:['为什么越想一次管好，越容易第三天放弃？','别把健康管理做成苦行：先给生活留一个出口','从一杯甜饮到一顿夜宵：习惯为什么总在疲惫时反扑？'],
  zhihu:['为什么很多人一做饮食管理就走向极端？','高尿酸人群的生活方式调整，为什么不能只靠“忌口”？','如何建立一个不会第三天放弃的饮食与作息记录法？'],
  weibo:['别再把健康管理做成“今天立誓，明天放弃”。','最容易拖后腿的，常常不是一顿饭，而是下班后的那个默认选择。','你以为是自律差，其实很多时候只是没有为场景准备替代方案。']
};
const narratives = [
  '晚上十点，手机弹出聚餐消息。你明明已经很累，还是会顺手点开外卖软件。很多选择不是经过深思熟虑，而是在疲惫时自动发生。',
  '有人把水杯放在工位上，一整天却只喝了两口；有人白天忙到忘记吃饭，晚上又把“补偿自己”变成一顿重口味夜宵。生活节奏，常常比意志力更先决定选择。',
  '真正让人焦虑的，不是偶尔一次放纵，而是每次都不知道自己为什么又回到了原来的模式。把原因写下来，往往比继续自责更有用。',
  '很多人的计划失败，不是因为目标不够好，而是目标没有落在真实生活里。你需要管理的不是一个完美的自己，而是那个最忙、最累、最想放弃的自己。'
];
const actions = [
  '今晚开始，只记一件事：你最容易说“算了”的时刻是什么。',
  '下次聚餐前，提前决定一件你愿意坚持的事，比如先喝水、少一杯甜饮，或给自己定一个离场时间。',
  '把水杯放到伸手就能拿到的位置，把“喝水”从提醒变成环境的一部分。',
  '别同时改十件事。选一个最重复的场景，连续观察7天。'
];
function pick(arr){return arr[Math.floor(Math.random()*arr.length)]}
function escapeHtml(value){return String(value).replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));}
function cleanInput(value){return String(value || '').replace(/[<>]/g, '').replace(/\s+/g, ' ').trim().slice(0, 240);}
function findRisks(text){
  const banned=['治疗','治愈','降尿酸','溶晶','止痛','预防发作','替代药物','保证见效','无效退款','药到病除'];
  return banned.filter(word => text.includes(word));
}
function fingerprint(text){let hash=2166136261;for(let i=0;i<text.length;i++){hash^=text.charCodeAt(i);hash=Math.imul(hash,16777619)}return (hash>>>0).toString(36)}
function auditEvent(event){
  fetch('/api/audit', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(event)})
    .catch(() => { /* 审计写入失败不影响本地内容生成，但不应在生产环境忽略。 */ });
}
function seed(){
  $('#product').innerHTML=Object.entries(facts).map(([id,x])=>`<option value="${id}">${x.name}｜${x.subtitle}</option>`).join('');
  $('#platform').innerHTML=Object.entries(style).map(([id,x])=>`<option value="${id}">${x.label}</option>`).join('');
  $('#audience').innerHTML=Object.entries(audience).map(([id,x])=>`<option value="${id}">${x}</option>`).join('');
  $('#purpose').innerHTML=Object.entries(purposes).map(([id,x])=>`<option value="${id}">${x}</option>`).join('');
  $('#angle').innerHTML=Object.entries(angles).map(([id,x])=>`<option value="${id}">${x}</option>`).join('');
  $('#stage').innerHTML=Object.entries(stages).map(([id,x])=>`<option value="${id}">${x}</option>`).join('');
  $('#length').innerHTML=Object.entries(lengths).map(([id,x])=>`<option value="${id}">${x}</option>`).join('');
}
function copyButton(text){return `<button class="copy" data-copy="${encodeURIComponent(text)}">复制</button>`}
function build(){
  const p=facts[$('#product').value], s=style[$('#platform').value], a=audience[$('#audience').value], goal=purposes[$('#purpose').value], angle=$('#angle').value, stage=$('#stage').value, length=$('#length').value, extra=cleanInput($('#brief').value);
  const scene = pick(p.scenes);
  const evidence = pick(factBank);
  const narrative = pick(narratives);
  const action = pick(actions);
  const chosenHook = pick(hooks[$('#platform').value]);
  let opening, body, title;
  if(angle==='mistake'){title=`${a.split('：')[0]}最容易忽略的一个日常习惯`; opening='你以为问题只在“吃了什么”？很多人真正忽略的，是反复出现的日常选择。'; body=`别急着给自己贴标签，先做一件更有用的事：连续7天记录 ${scene}、饮水、作息和饮食。看见习惯，才有机会调整习惯。`}
  else if(angle==='scene'){title=`${scene}之后，先别做这件事`; opening=`下班后的那一刻，很多人会把“放松”交给固定的习惯。真正难的不是拒绝，而是找到一个更容易坚持的替代动作。`; body=`先从一件小事开始：下一次出现这个场景时，提前准备一个替代选择，并记录这次决定。`}
  else if(angle==='checklist'){title=`一张清单，把${scene}管起来`; opening='不靠意志力硬扛，靠一张看得见的清单。'; body='①今天的饮水和作息；②聚餐/外卖/甜饮频率；③明天最容易做到的一项调整。连续做7天，比一天做满分更有意义。'}
  else if(angle==='challenge'){title='给自己一个不为难人的7天挑战'; opening='不是断食，不是极端忌口，只是把日常习惯记录下来。'; body='第1天记录；第2天少一次冲动选择；第3天提前安排一餐；第4天调整晚间节奏；第5-7天复盘。你会发现改变从来不是一下完成的。'}
  else if(angle==='herbal'){title='本草小读：从昆布看古人如何记录自然'; opening='一味食材，在古籍里留下名字，并不等于今天可以把古书当作功效证明。'; body='读本草，读的是古人对自然与食材的观察；做管理，靠的是今天真实、可执行的饮食和生活方式选择。'}
  else {title=`从产品资料出发，先讲清楚${p.name}是什么`; opening=`不是神秘配方，也不应该靠夸张承诺。先把产品名称、类别、规格、包装信息讲清楚，才是对用户负责。`; body=`${p.facts} 选择食品时，先看标签、成分、食用方法和不适宜人群，再决定是否适合自己。`}
  if(extra) body += `\n\n补充场景：${extra}`;
  const cta=s.cta;
  const viralHook=angle==='mistake'?'很多人把注意力都放错了地方。':angle==='scene'?'这件小事，可能就是你每天反复踩的坑。':angle==='herbal'?'古书不是产品疗效说明书，但它的故事值得被重新讲一遍。':'别把健康管理做成一场三天就放弃的苦行。';
  let platformBody='';
  if($('#platform').value==='video') platformBody=`【封面大字】${title}\n【0-3秒｜冲突钩子】“${viralHook} 你是不是也这样？”\n【4-10秒｜场景镜头】下班、聚餐、深夜外卖/饮料的近景；字幕：${scene}，不是一次的问题，是反复发生的习惯。\n【11-28秒｜反转观点】${opening}\n【29-45秒｜给方法】${body}\n【46-55秒｜行动指令】别收藏就结束。今天只做一件事：把你的一个习惯记下来。${cta}\n【评论区置顶】你最难改的是酒、甜饮、夜宵还是熬夜？打一个词，我把自查表发你。`;
  else if($('#platform').value==='xhs') platformBody=`【备选标题】\n1. ${title}\n2. 别再硬扛了：${scene}的人，先做这份7天自查\n3. 我把复杂的健康管理，缩成了一张清单\n\n【封面文案】不是忌口，是先看清你的习惯\n\n【正文】\n${opening}\n\n很多人一上来就想“彻底改变”，结果第三天就放弃。更有用的路径是：\n${body}\n\n✅ 今天先做：记录一次真实选择\n✅ 明天再做：替换一个最容易发生的习惯\n✅ 连续7天后：看自己的规律，而不是自责\n\n${cta}\n\n【标签】#生活方式管理 #饮食习惯 #7天自查 #日常健康管理`;
  else if($('#platform').value==='wechat') platformBody=`【标题】${title}\n【副标题】不靠极端，坚持才是更难也更重要的事\n\n【导语】${opening}\n\n一、为什么越想“一次做到位”，越容易半途而废？\n${body}\n\n二、把复杂问题拆成一张每天都能完成的表\n• 记录今天的饮水与作息\n• 记录一次最典型的饮食/聚餐选择\n• 只挑一个可调整动作，明天再做\n\n三、别把“自查”变成焦虑\n它不是给自己下结论，而是为下一步更稳妥的生活方式调整提供依据。\n\n【文末行动】${cta}`;
  else if($('#platform').value==='zhihu') platformBody=`【问题】${title}，到底要不要把所有饮食都严格限制？\n\n【先说结论】不建议用“全禁”或“硬扛”作为长期策略。对多数人而言，识别高频场景、做小幅且可持续的生活方式调整更实际。\n\n【为什么】${opening}\n\n【怎么做】${body}\n\n【一个可执行版本】连续7天记录饮水、作息、聚餐/甜饮/夜宵等场景；第8天只选择一个最容易改变的动作继续执行。\n\n${cta}`;
  else platformBody=`【微博文案】\n${viralHook}\n\n${body}\n\n别一上来就逼自己“全部做到”。先用7天，把最常发生的场景记下来。\n\n${cta}\n\n【互动】你最难改的是：A酒 B甜饮 C夜宵 D熬夜？\n#生活方式管理 #7天自查`;
  // 小红书采用“强钩子但不虚构”的收藏型笔记结构：标题先拉停留，正文必须兑现标题。
  if($('#platform').value==='xhs') platformBody=`【强钩子标题｜选择其中一条，标题必须与正文一致】
1. 别再乱忌口了：真正该先管的，可能是你每天这一个习惯
2. 35+应酬党自查：不是吃得多，是这个时刻最容易失控
3. 被朋友催更的7天习惯账单：不为难自己，但能看清问题
4. 原来不是自律差：很多人输在“下班后的这30分钟”

【封面首屏】
你以为在管饮食，其实在重复同一个习惯
小字：7天看清，不用一上来逼自己

【7页图文分镜】
P1：大标题 + 强代入场景
P2：${scene}，为什么会变成反复发生的“默认选项”
P3：${opening}
P4：别全改，先记录：饮水 / 作息 / 一次典型选择
P5：${body}
P6：7天后你要看的不是“我做得够不够好”，而是“哪个场景一直重复”
P7：评论回复“自查”领取记录模板 + 免责声明

【笔记正文｜高代入、可收藏】
说个很多人不爱听的事实：你不是不知道要注意，你只是每次都从最难的地方开始。

${opening}

以前我也以为，健康管理就是“从明天开始全都不碰”。结果通常是：白天忍住，晚上累了，又回到原来的选择。

后来才发现，真正该先做的不是给自己立狠话，而是记一笔“习惯账”。

✔ 今天：不批评自己，只记一次真实选择
✔ 明天：给${scene}准备一个更容易做到的替代动作
✔ 连续7天：找出你最容易说“算了”的那个时刻

${body}

别急着追求满分。你先看清自己，再谈改变，反而更容易坚持。

${cta}

【互动引导】你最难改的是：酒 / 甜饮 / 夜宵 / 熬夜？评论留一个词，我发你对应的自查记录模板。
【标签】#上班族自救 #生活方式管理 #饮食习惯 #7天打卡 #健康管理
【红线】标题可强冲突，正文必须兑现；不伪造亲测、案例、指标或焦虑式恐吓。`;
  if($('#platform').value==='video') platformBody=`【封面大字】别再只盯着“吃什么”
【0-3秒｜直视镜头 + 停顿】“${viralHook} 不是你不自律，是你把重点放错了。”
【4-8秒｜快切镜头】酒杯 / 甜饮 / 外卖 / 深夜手机。字幕：${scene}，不是一次，是反复。
【9-16秒｜反转】“很多人一上来就极端忌口，撑到第3天就放弃。真正能坚持的，不是狠，是看得见。”
【17-38秒｜方法】${body}
【39-50秒｜情绪落点】“别把自己逼成一个随时失败的人。先做到7天后，你会更知道该改什么。”
【51-65秒｜强行动】${cta}
【评论区置顶】别只收藏。你最难改的是酒、甜饮、夜宵还是熬夜？留一个词，我把自查表发你。
【拍摄提示】每2-3秒换镜头；关键词放大：不是狠 / 是看得见 / 先做7天。`;
  const expansion = length==='short'
    ? '【篇幅控制】短版：保留钩子、一个核心观点、一个动作；图文控制在 300-500 字，视频控制在 30-45 秒。'
    : length==='medium'
      ? `【扩展段落｜中篇】\n\n很多人卡住的原因，不是缺少信息，而是每天面对场景时没有提前准备。比如忙了一天后，最容易发生的不是“做出最优选择”，而是沿用昨天的选择。\n\n可以试着把场景提前写下来：什么时候最容易出现？当时通常和谁在一起？你最想用什么方式放松？然后只为这个场景准备一个不费劲的替代动作。它不需要完美，只要比昨天多一点主动。\n\n一周后回看，你会得到比“我到底自不自律”更有价值的信息：什么情绪、时间和环境最容易把你推回旧习惯。这也是后续调整真正能落地的起点。\n\n【篇幅控制】中版：视频约 60-90 秒；图文正文目标 800-1200 字。`
      : `【深度展开｜长篇正文模块】\n\n### 一、先别急着问“我该不该完全戒掉”\n很多人做生活方式管理，第一反应是把所有选择分成“绝对不能”和“绝对可以”。这种方法短期看起来很有力量，长期却很容易反弹。因为生活并不发生在一张清单里，它发生在加班后的疲惫、朋友聚餐的气氛、深夜回家的空虚和“今天就算了吧”的瞬间。\n\n### 二、为什么同一个习惯会反复出现\n一个选择重复出现，往往不是因为你不懂道理，而是它同时满足了方便、即时安慰和社交惯性。想靠一次决心消灭它，通常很难。真正值得做的是：把它从“无意识发生”变成“我知道它什么时候会发生”。\n\n### 三、7天记录，不是打分，是找规律\n第1-2天只记录，不评价；第3-4天找出最频繁的场景；第5天为这个场景准备一个替代方案；第6天尝试一次；第7天复盘。你不需要把所有事情都改掉，只需要找到最值得先改的一件。\n\n### 四、如何让改变不靠意志力\n把替代动作放在你最容易看见的地方：提前准备饮品、设置睡前提醒、在聚餐前决定结束时间，或把“今天先记录”写进备忘录。改变不是靠更严厉地要求自己，而是让正确选择更容易发生。\n\n### 五、什么时候需要寻求专业帮助\n如果涉及症状、用药、检查报告或持续不适，不要把内容科普当作个人诊疗建议，应及时咨询医生。\n\n【篇幅控制】长版：图文正文目标 1800-2500 字；视频可拆成 2-3 分钟讲述或拆为 3 集系列内容。`;
  // 结果页交付的是可直接发布的成稿，不是创作框架；拍摄建议单独置于成稿后。
  const directLong = `${narrative}\n\n很多人做生活方式管理，第一反应是把所有选择分成“绝对不能”和“绝对可以”。这听起来很有决心，但生活不是发生在一张清单里。它发生在加班后的疲惫、朋友聚餐的气氛、深夜回家的空虚，还有那句“今天就算了吧”。\n\n真正让一个习惯反复出现的，往往不是你不懂道理，而是它同时满足了方便、即时安慰和社交惯性。想靠一次决心消灭它，通常很难。更值得做的是，把它从“无意识发生”变成“我知道它什么时候会发生”。\n\n${evidence.text}\n\n给自己7天就够了。前两天只记录，不评价；第三、四天找出最频繁的场景；第五天为那个场景准备一个不费劲的替代方案；第六天尝试一次；第七天复盘。${action}\n\n把替代动作放在你最容易看见的地方：提前准备饮品、设置睡前提醒、在聚餐前决定结束时间，或把“今天先记录”写进备忘录。改变不是靠更严厉地要求自己，而是让更好的选择更容易发生。\n\n如果涉及症状、用药、检查报告或持续不适，请不要把内容科普当作个人诊疗建议，应及时咨询医生。`;
  const directMedium = `${narrative}\n\n很多人卡住的原因，不是缺少信息，而是每天面对场景时没有提前准备。忙了一天后，最容易发生的不是做出最优选择，而是沿用昨天的选择。\n\n${evidence.text}\n\n你可以把最常发生的场景写下来：它通常出现在什么时候？当时和谁在一起？你想用什么方式放松？然后只为这个场景准备一个不费劲的替代动作。${action}\n\n一周后回看，你会得到比“我到底自不自律”更有价值的信息：什么情绪、时间和环境最容易把你推回旧习惯。这才是下一步调整真正能落地的起点。`;
  const depth = length==='long' ? directLong : length==='medium' ? directMedium : '';
  let publishText='';
  if($('#platform').value==='video') publishText=`${title}\n\n你是不是也有这种时候：明明知道该注意一点，可一到${scene}，就会对自己说“今天算了，明天再开始”。\n\n我想提醒你，别再只盯着“吃了什么”。很多反复发生的选择，不是一次的问题，而是一个没有被看见的生活习惯。\n\n${opening}\n\n${body}\n\n${depth}\n\n别把自己逼成一个随时失败的人。今天先做一件小事：把那个最容易发生的场景记下来。连续7天，你会比现在更知道该改什么。\n\n${cta}`;
  else if($('#platform').value==='xhs') publishText=`${chosenHook}\n\n说个很多人不爱听的事实：你不是不知道要注意，你只是每次都从最难的地方开始。\n\n${narrative}\n\n${opening}\n\n以前我也以为，健康管理就是“从明天开始全都不碰”。结果通常是白天忍住，晚上累了，又回到原来的选择。后来才发现，真正该先做的不是给自己立狠话，而是记一笔“习惯账”。\n\n今天，不批评自己，只记一次真实选择；明天，给${scene}准备一个更容易做到的替代动作；连续7天，不追求完美，只找出你最容易说“算了”的那个时刻。\n\n${body}\n\n${evidence.text}\n\n${depth}\n\n${action}\n\n别急着追求满分。你先看清自己，再谈改变，反而更容易坚持。\n\n${cta}\n\n你最难改的是酒、甜饮、夜宵还是熬夜？评论留一个词，我发你对应的自查记录模板。\n\n#上班族自救 #生活方式管理 #饮食习惯 #7天打卡 #健康管理`;
  else if($('#platform').value==='wechat') publishText=`${title}\n\n晚上十点，群里又约宵夜。你明知道该克制，却很难说不。问题往往不在于你懂不懂，而在于日常没有一个能替代旧习惯的小方案。\n\n${opening}\n\n${body}\n\n${depth}\n\n把自查表当成一个起点，而不是压力。它不是给自己下结论，而是帮助你看见生活节奏：什么时候最容易失控，什么动作最容易坚持。\n\n${cta}`;
  else if($('#platform').value==='zhihu') publishText=`不建议用“全禁”或“硬扛”作为长期策略。对多数人而言，识别高频场景、做小幅且可持续的生活方式调整更实际。\n\n${opening}\n\n${body}\n\n${depth}\n\n一个可执行的版本是：连续7天记录饮水、作息、聚餐、甜饮、夜宵等场景；第8天只选择一个最容易改变的动作继续执行。\n\n生活方式调整不替代规范诊疗；有症状、用药或检查报告相关问题，应向医生咨询。\n\n${cta}`;
  else publishText=`${viralHook}\n\n真正让人反复踩坑的，常常不是一顿饭，而是${scene}。\n\n${body}\n\n${depth}\n\n别一上来就逼自己“全部做到”。先用7天，把最常发生的场景记下来。看见了，才改得动。\n\n${cta}\n\n你最难改的是：A酒 B甜饮 C夜宵 D熬夜？\n#上班族自救 #生活方式管理 #7天自查`;
  const script = `${publishText}\n\n${compliance}${angle==='herbal'?'\n'+herb:''}${$('#platform').value==='video'?'\n\n拍摄提示：开头直视镜头；中段用酒杯、甜饮、外卖、深夜手机等生活镜头快切；每2-3秒换景，重点字幕放大“先看见”“先做7天”。':''}`;
  const risks = findRisks(script);
  const generated = JSON.parse(localStorage.getItem('contentHubGenerated') || '[]');
  const id = fingerprint(script);
  const duplicate = generated.some(item => item.id === id);
  if (!duplicate) {
    generated.unshift({id, platform:s.label, product:p.name, createdAt:new Date().toISOString(), title:script.split('\n')[0]});
    localStorage.setItem('contentHubGenerated', JSON.stringify(generated.slice(0, 100)));
  }
  auditEvent({action: duplicate ? 'duplicate_detected' : 'generated', platform:s.label, product:p.name, fingerprint:id});
  const plan = `产品：${p.name}｜平台：${s.label}\n内容阶段：${stages[stage]}\n目标人群：${a}\n营销目的：${goal}\n目标篇幅：${lengths[length]}\n内容角度：${angles[angle]}\n本次素材组合：${evidence.id} / ${scene}\n\n平台风格要求：${s.hook}\n\n本次内容只服务一个动作：${cta}`;
  const logic = `【这条内容为什么要这样写】\n\n1. 目的：${goal}。${stage==='cold'?'冷启动期先让陌生用户愿意停留和互动，不急着出现产品。':stage==='warm'?'预热期用具体场景和资料价值建立“这个账号懂我”的信任。':stage==='convert'?'转化期才允许在审核后说明产品事实，承接已经产生的咨询。':'留存期用小任务和复盘维持服务感，减少单纯促销。'}\n\n2. 抓人方法：先用“${opening.slice(0,28)}…”制造代入感，再把大问题缩小为一个7天可执行动作，降低心理门槛。\n\n3. 平台方法：${s.label}需要${s.hook}\n\n4. 转化逻辑：内容不直接强卖，先用“自查表”换取互动；用户进入企微后，再根据真实需求给资料、打卡和人工承接。\n\n5. 本条边界：${angle==='herbal'?'古籍仅承担文化质感和内容记忆点，不承担产品功效证明。':'产品不作疾病治疗或指标改善承诺。'} `;
  const status = risks.length ? `发现禁用表达：${risks.join('、')}，不得发布。` : duplicate ? '发现与历史生成完全相同的文案，请重新生成或人工改写。' : '未发现内置禁用表达；仍为“待人工审核”，不可视为合规通过。';
  $('#result').innerHTML=`<section class="draft-card"><div class="draft-title"><div><span class="badge">内容策略</span><h3>${escapeHtml(p.name)} · ${escapeHtml(s.label)}</h3></div>${copyButton(plan)}</div><pre>${escapeHtml(plan)}</pre></section><section class="draft-card"><div class="draft-title"><div><span class="badge gold">待人工审核成稿</span><h3>${escapeHtml(s.label)} ${escapeHtml(s.format)}</h3></div>${copyButton(script)}</div><pre>${escapeHtml(script)}</pre></section><section class="draft-card"><div class="draft-title"><div><span class="badge">目的与方法逻辑</span><h3>为什么这条内容能服务当前阶段</h3></div>${copyButton(logic)}</div><pre>${escapeHtml(logic)}</pre></section><section class="audit"><b>内容风险检查：待人工审核</b><span>${escapeHtml(status)}</span><span>来源提醒：本次使用 ${escapeHtml(evidence.id)} 素材；产品事实仍须对照最终审核资料。</span><span>发布前必须人工核对产品包装、价格、食用方式、古籍引用与平台规则。</span></section>`;
  document.querySelectorAll('[data-copy]').forEach(b=>b.onclick=()=>{navigator.clipboard.writeText(decodeURIComponent(b.dataset.copy));b.textContent='已复制';setTimeout(()=>b.textContent='复制',900)});
}
const library=[
 ['产品事实','舒零','昆布柠檬酸泡腾片；2×12片/盒。仅可引用最终审核的包装、成分、食用方式与销售规则。'],
 ['产品事实','梦犇健','人参牡蛎肽压片糖果；6粒/盒，每日1粒。包装所列不适宜人群必须同步展示。'],
 ['权威食养','2024 食养指南','国家卫生健康委发布《成人高尿酸血症与痛风食养指南（2024年版）》，适合用于饮食、体重、规律生活等科普选题的来源核验。'],
 ['权威科普','中华医学会','中华医学会科普提示，饮食管理不能替代规范诊疗；科普内容应避免鼓励自行停药。'],
 ['本草文化','《本草纲目·昆布》','可写“古籍收录昆布、反映传统本草文化”；不可将古籍用途改写为现代产品的疾病功效承诺。'],
 ['古籍生活方式','《黄帝内经·素问·上古天真论》','可用主题：“食饮有节，起居有常”。用于作息、饮食和自我管理内容的开头或收束；不得据此替代现代诊疗。'],
 ['古籍生活方式','《备急千金要方·养性》','可用主题：“善养性者则治未病之病”。只用于“长期习惯管理”的文化表达，不作疾病预防功效承诺。'],
 ['古籍食养','《备急千金要方·食治》','可用主题：古代医书已设“食治”篇，强调饮食在养生叙事中的位置。只讲文化脉络和日常饮食意识。'],
 ['古籍医学史','《金匮要略》','可用主题：张仲景杂病著作的医学史价值。适合“为什么健康问题别靠一句话下判断”的内容，避免借书名包装疗效。'],
 ['现代权威','《高尿酸血症营养和运动指导原则》','中国疾控中心发布附件；可用作饮水、饮酒、运动、体重等内容的事实核验方向，发布时以原文和专业审核为准。'],
 ['平台规则','全平台','短视频重前三秒钩子；小红书重场景与清单；知乎重直接回答；公众号重结构；微博重观点互动。']
];
function renderLibrary(){ $('#knowledge').innerHTML=library.map(x=>`<article class="knowledge"><span>${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join(''); }
async function loadAudit(){
  const box=$('#audit-log'); if(!box) return;
  try { const entries=await fetch('/api/audit',{cache:'no-store'}).then(r=>r.json()); box.textContent=entries.length?entries.slice(0,20).map(x=>`${x.timestamp}｜${x.action}｜${x.product}｜${x.platform}｜${x.fingerprint}`).join('\n'):'暂无审计记录。'; }
  catch { box.textContent='审计记录暂不可读取。'; }
}
function setPage(id){document.querySelectorAll('.page,.nav').forEach(e=>e.classList.remove('active'));$('#'+id).classList.add('active');document.querySelector(`[data-page="${id}"]`).classList.add('active');$('#page-title').textContent={studio:'AI 文案设计台',library:'补充知识库',workflow:'发布工作流',security:'安全状态'}[id];if(id==='security')loadAudit()}
seed(); renderLibrary(); build();
$('#generate').onclick=build;
document.querySelectorAll('.nav').forEach(x=>x.onclick=()=>setPage(x.dataset.page));
