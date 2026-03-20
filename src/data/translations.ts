// 工具翻译数据 - 完整版
import { Locale } from "@/lib/i18n";

export interface ToolTranslation {
  name?: string;
  shortDesc?: string;
  description?: string;
  features?: string[];
  pros?: string[];
  cons?: string[];
}

// 完整工具翻译映射
export const toolTranslations: Record<string, Record<Locale, ToolTranslation>> = {
  // ==================== AI Agents ====================
  "autogpt": { zh: { shortDesc: "自主GPT-4智能体", description: "开源实验性项目，让GPT-4完全自主运行，串联LLM思考实现目标。" }, en: {} },
  "crewai": { zh: { shortDesc: "多智能体AI平台", description: "领先的多智能体平台，构建部署和管理AI智能体团队。" }, en: {} },
  "agentgpt": { zh: { shortDesc: "浏览器AI智能体", description: "在浏览器中部署自主AI智能体，给它目标自动完成任务。" }, en: {} },
  "chatgpt": { zh: { shortDesc: "OpenAI AI助手", description: "OpenAI对话式AI助手，免费使用GPT-4o，支持图像理解和代码执行。" }, en: {} },
  "claude": { zh: { shortDesc: "Anthropic AI助手", description: "Anthropic的AI助手，200K上下文，Artifact生成，细致有帮助的回答。" }, en: {} },
  "poe": { zh: { shortDesc: "多模型AI平台", description: "一站式访问ChatGPT、Claude、Gemini和众多自定义机器人。" }, en: {} },
  "microsoft-copilot": { zh: { shortDesc: "Microsoft 365 AI", description: "集成Microsoft 365的AI助手，提升Word、Excel等办公效率。" }, en: {} },
  "gemini": { zh: { shortDesc: "Google AI助手", description: "Google多模态AI助手，实时搜索集成、图像理解、长上下文支持。" }, en: {} },
  "grok": { zh: { shortDesc: "X平台AI助手", description: "实时访问X平台数据的AI助手，马斯克旗下xAI出品。" }, en: {} },
  "langchain": { zh: { shortDesc: "AI应用开发框架", description: "构建LLM应用的框架，简化AI应用开发流程。" }, en: {} },
  "gpt-engineer": { zh: { shortDesc: "AI代码生成器", description: "用自然语言描述需求，AI自动生成完整代码库。" }, en: {} },
  "devin": { zh: { shortDesc: "AI软件工程师", description: "首个AI软件工程师，可以独立完成复杂软件开发任务。" }, en: {} },
  "babyagi": { zh: { shortDesc: "任务驱动AI智能体", description: "任务驱动的自主AI智能体，自动分解和执行任务。" }, en: {} },
  "superagi": { zh: { shortDesc: "开源AI智能体框架", description: "开源自主AI智能体框架，快速构建AI智能体。" }, en: {} },
  "agentverse": { zh: { shortDesc: "无代码AI智能体", description: "无代码平台创建和部署AI智能体，简单易用。" }, en: {} },

  // ==================== Coding ====================
  "cursor": { zh: { shortDesc: "AI代码编辑器", description: "专为AI编程设计的编辑器，内置AI助手，智能补全和重构。" }, en: {} },
  "github-copilot": { zh: { shortDesc: "AI编程助手", description: "GitHub AI编程助手，智能代码建议，支持多种IDE和语言。" }, en: {} },
  "tabnine": { zh: { shortDesc: "AI代码补全", description: "AI代码补全工具，支持所有编程语言，本地运行保护隐私。" }, en: {} },
  "replit": { zh: { shortDesc: "AI在线IDE", description: "AI驱动的在线开发环境，支持多种语言，AI辅助编程。" }, en: {} },
  "v0-dev": { zh: { shortDesc: "Vercel AI前端生成", description: "Vercel出品，用自然语言生成React组件和前端应用。" }, en: {} },
  "supabase": { zh: { shortDesc: "开源后端平台", description: "开源Firebase替代方案，PostgreSQL数据库，实时订阅，身份认证。" }, en: {} },
  "vercel-ai-sdk": { zh: { shortDesc: "Vercel AI SDK", description: "构建AI应用的SDK，支持多种LLM提供商，边缘运行。" }, en: {} },
  "codeium": { zh: { shortDesc: "免费AI编程助手", description: "免费AI代码补全和聊天助手，支持70+语言，主流IDE插件。" }, en: {} },
  "sourcegraph-cody": { zh: { shortDesc: "懂代码的AI助手", description: "AI编程助手，理解你的代码库，智能问答和代码生成。" }, en: {} },
  "aider": { zh: { shortDesc: "终端AI编程", description: "终端中的AI配对编程助手，支持Git集成。" }, en: {} },
  "bolt-new": { zh: { shortDesc: "AI全栈开发", description: "AI全栈开发平台，描述需求自动生成完整应用。" }, en: {} },
  "windsurf": { zh: { shortDesc: "Codeium AI IDE", description: "Codeium出品的AI优先IDE，深度AI集成。" }, en: {} },
  "phind": { zh: { shortDesc: "开发者AI搜索", description: "面向开发者的AI搜索引擎，代码示例和技术文档搜索。" }, en: {} },
  "huggingface": { zh: { shortDesc: "开源AI社区", description: "开源AI模型和数据集社区，ML模型托管和分享。" }, en: {} },
  "replicate": { zh: { shortDesc: "云AI模型API", description: "云端运行开源AI模型，一键部署，按量付费。" }, en: {} },
  "together-ai": { zh: { shortDesc: "开源LLM API", description: "开源大模型API平台，快速推理，成本低廉。" }, en: {} },
  "openai-api": { zh: { shortDesc: "OpenAI API平台", description: "OpenAI官方API，访问GPT-4、DALL-E、Whisper等模型。" }, en: {} },
  "anthropic-api": { zh: { shortDesc: "Claude API", description: "Anthropic Claude API，安全可靠的AI模型访问。" }, en: {} },
  "cohere": { zh: { shortDesc: "企业AI API", description: "企业级AI API平台，文本生成、嵌入、重排序。" }, en: {} },
  "pinecone": { zh: { shortDesc: "向量数据库", description: "云原生向量数据库，为AI应用提供高效相似性搜索。" }, en: {} },
  "weaviate": { zh: { shortDesc: "开源向量数据库", description: "开源向量搜索引擎，支持多种AI嵌入模型。" }, en: {} },
  "qdrant": { zh: { shortDesc: "向量搜索引擎", description: "高性能向量数据库，为AI应用提供相似性搜索。" }, en: {} },
  "langsmith": { zh: { shortDesc: "LLM可观测性工具", description: "LangChain出品的LLM应用监控和调试平台。" }, en: {} },
  "helicone": { zh: { shortDesc: "LLM日志平台", description: "开源LLM日志和监控工具，追踪API调用和成本。" }, en: {} },
  "llamaindex": { zh: { shortDesc: "LLM数据框架", description: "LLM数据框架，连接私有数据和LLM。" }, en: {} },
  "dify": { zh: { shortDesc: "LLM应用开发平台", description: "可视化LLM应用构建平台，无代码创建AI应用。" }, en: {} },
  "flowise": { zh: { shortDesc: "无代码LLM构建器", description: "拖拽式LLM应用构建器，可视化创建AI工作流。" }, en: {} },
  "continue": { zh: { shortDesc: "开源AI编程助手", description: "开源AI编程助手，支持多种LLM，VSCode和JetBrains插件。" }, en: {} },
  "blackbox-ai": { zh: { shortDesc: "AI代码搜索", description: "AI驱动的代码搜索引擎，快速找到代码示例。" }, en: {} },
  "pieces": { zh: { shortDesc: "AI代码片段管理", description: "AI代码片段管理工具，保存、搜索和重用代码。" }, en: {} },

  // ==================== Content/Writing ====================
  "jasper": { zh: { shortDesc: "AI营销写作平台", description: "企业级AI营销文案工具，博客、广告、社媒内容一键生成。" }, en: {} },
  "copy-ai": { zh: { shortDesc: "AI文案生成器", description: "AI营销文案生成器，快速创作广告、邮件、社媒文案。" }, en: {} },
  "writesonic": { zh: { shortDesc: "AI写作平台", description: "AI写作平台，博客、广告、产品描述等营销内容生成。" }, en: {} },
  "rytr": { zh: { shortDesc: "AI写作助手", description: "AI写作助手，多种内容类型模板，价格实惠。" }, en: {} },
  "sudowrite": { zh: { shortDesc: "AI小说写作", description: "AI小说创作工具，故事生成、角色开发、情节建议。" }, en: {} },
  "novelai": { zh: { shortDesc: "AI故事生成", description: "AI故事和图像生成平台，创意写作和角色扮演。" }, en: {} },
  "grammarly": { zh: { shortDesc: "AI语法检查", description: "AI写作助手，语法检查、风格建议、抄袭检测。" }, en: {} },
  "wordtune": { zh: { shortDesc: "AI改写工具", description: "AI文本改写和优化工具，改善写作表达。" }, en: {} },
  "quillbot": { zh: { shortDesc: "AI改写工具", description: "AI改写和总结工具，学术写作辅助。" }, en: {} },
  "anyword": { zh: { shortDesc: "AI营销文案", description: "AI营销文案平台，预测文案效果，优化转化率。" }, en: {} },
  "simplified": { zh: { shortDesc: "AI设计写作平台", description: "一体化AI平台，设计、写作、视频编辑。" }, en: {} },
  "notion-ai": { zh: { shortDesc: "Notion AI写作", description: "Notion内置AI写作助手，智能生成和编辑内容。" }, en: {} },
  "mem": { zh: { shortDesc: "AI笔记工具", description: "AI自动组织的笔记工具，智能关联笔记内容。" }, en: {} },

  // ==================== Creative ====================
  "midjourney": { zh: { shortDesc: "AI图像生成", description: "顶级AI图像生成工具，自然语言创作高质量艺术作品。" }, en: {} },
  "dalle-3": { zh: { shortDesc: "OpenAI图像生成", description: "OpenAI图像生成模型，ChatGPT集成，轻松创作精美图像。" }, en: {} },
  "stable-diffusion": { zh: { shortDesc: "开源图像生成", description: "开源AI图像生成模型，本地部署，社区资源丰富。" }, en: {} },
  "leonardo-ai": { zh: { shortDesc: "AI创意平台", description: "AI创意图像生成平台，游戏素材、艺术创作、产品图片。" }, en: {} },
  "ideogram": { zh: { shortDesc: "AI文字图像", description: "擅长文字渲染的AI图像生成器，Logo、海报创作利器。" }, en: {} },
  "adobe-firefly": { zh: { shortDesc: "Adobe AI图像", description: "Adobe AI图像生成工具，集成Creative Cloud工作流。" }, en: {} },
  "canva": { zh: { shortDesc: "AI设计平台", description: "在线设计平台，AI辅助设计，模板丰富，上手简单。" }, en: {} },
  "figma": { zh: { shortDesc: "UI设计工具", description: "专业UI设计协作平台，AI辅助设计，团队实时协作。" }, en: {} },
  "looka": { zh: { shortDesc: "AI Logo设计", description: "AI Logo生成器，输入品牌信息，自动生成专业Logo。" }, en: {} },
  "flair-ai": { zh: { shortDesc: "AI产品图", description: "AI产品图片生成工具，电商产品图一键生成。" }, en: {} },
  "pebblely": { zh: { shortDesc: "AI产品摄影", description: "AI产品摄影工具，生成专业产品展示图。" }, en: {} },
  "remove-bg": { zh: { shortDesc: "AI抠图工具", description: "AI背景移除工具，一键抠图，批量处理。" }, en: {} },
  "photoroom": { zh: { shortDesc: "AI照片编辑", description: "AI照片编辑工具，背景移除、产品图制作。" }, en: {} },

  // ==================== Video ====================
  "runway": { zh: { shortDesc: "AI视频生成", description: "领先AI视频生成平台，文本生成视频、视频编辑、特效制作。" }, en: {} },
  "pika": { zh: { shortDesc: "AI视频创作", description: "AI视频生成工具，简单易用，快速创作创意视频内容。" }, en: {} },
  "sora": { zh: { shortDesc: "OpenAI视频生成", description: "OpenAI文本生成视频模型，高质量长视频生成，电影级画质。" }, en: {} },
  "heygen": { zh: { shortDesc: "AI数字人视频", description: "AI数字人视频生成，虚拟主播、培训视频、营销内容制作。" }, en: {} },
  "synthesia": { zh: { shortDesc: "AI视频制作", description: "AI虚拟人视频平台，无需拍摄，创建专业视频内容。" }, en: {} },
  "d-id": { zh: { shortDesc: "AI数字人生成", description: "AI数字人生成平台，照片转视频，虚拟主播制作。" }, en: {} },
  "pictory": { zh: { shortDesc: "AI视频剪辑", description: "AI视频剪辑工具，长视频转短视频，自动字幕生成。" }, en: {} },
  "descript": { zh: { shortDesc: "AI视频编辑", description: "AI驱动的视频编辑工具，像编辑文档一样编辑视频。" }, en: {} },
  "luma-ai": { zh: { shortDesc: "AI 3D视频", description: "AI 3D视频生成平台，创建沉浸式3D内容。" }, en: {} },
  "invideo": { zh: { shortDesc: "AI视频制作", description: "在线AI视频制作平台，模板丰富，一键生成视频。" }, en: {} },

  // ==================== Audio ====================
  "elevenlabs": { zh: { shortDesc: "AI语音合成", description: "顶级AI语音合成平台，自然流畅的语音克隆和生成。" }, en: {} },
  "suno": { zh: { shortDesc: "AI音乐生成", description: "AI歌曲生成工具，输入文字描述，生成完整歌曲。" }, en: {} },
  "udio": { zh: { shortDesc: "AI音乐创作", description: "AI音乐生成平台，创作专业品质的音乐作品。" }, en: {} },
  "murf": { zh: { shortDesc: "AI配音工具", description: "AI配音生成平台，多种语言和声音风格。" }, en: {} },
  "resemble-ai": { zh: { shortDesc: "AI语音克隆", description: "AI语音克隆平台，快速创建自定义AI语音。" }, en: {} },
  "playht": { zh: { shortDesc: "AI文本转语音", description: "AI文本转语音平台，高质量多语言语音生成。" }, en: {} },
  "aiva": { zh: { shortDesc: "AI作曲", description: "AI作曲平台，生成背景音乐和电影配乐。" }, en: {} },
  "speechify": { zh: { shortDesc: "AI朗读工具", description: "AI文本朗读工具，将文章转为自然语音。" }, en: {} },

  // ==================== Productivity ====================
  "notion": { zh: { shortDesc: "AI知识管理", description: "AI驱动的知识管理平台，笔记、文档、数据库一体化。" }, en: {} },
  "otter-ai": { zh: { shortDesc: "AI会议记录", description: "AI会议转录助手，自动记录会议内容，生成摘要。" }, en: {} },
  "fireflies-ai": { zh: { shortDesc: "会议AI助手", description: "AI会议助手，自动转录、摘要和分析会议内容。" }, en: {} },
  "tldv": { zh: { shortDesc: "会议AI总结", description: "AI会议记录和总结工具，自动生成会议亮点。" }, en: {} },
  "fathom": { zh: { shortDesc: "AI会议助手", description: "免费AI会议助手，自动记录和总结会议。" }, en: {} },
  "reclaim": { zh: { shortDesc: "AI日程管理", description: "AI日程安排工具，智能安排会议和任务时间。" }, en: {} },
  "motion": { zh: { shortDesc: "AI任务管理", description: "AI任务和日程管理平台，自动优化工作计划。" }, en: {} },
  "todoist-ai": { zh: { shortDesc: "AI任务助手", description: "AI任务管理工具，智能任务分解和提醒。" }, en: {} },

  // ==================== Automation ====================
  "zapier": { zh: { shortDesc: "自动化平台", description: "无代码自动化平台，连接5000+应用，自动化工作流程。" }, en: {} },
  "make": { zh: { shortDesc: "可视化自动化", description: "可视化自动化平台，拖拽式工作流设计。" }, en: {} },
  "n8n": { zh: { shortDesc: "开源自动化", description: "开源工作流自动化工具，自托管，完全控制。" }, en: {} },
  "bardeen": { zh: { shortDesc: "浏览器自动化", description: "浏览器自动化工具，一键执行重复任务。" }, en: {} },
  "magical": { zh: { shortDesc: "AI文本自动化", description: "AI文本扩展和自动化工具，快速输入常用内容。" }, en: {} },

  // ==================== Research ====================
  "perplexity": { zh: { shortDesc: "AI搜索引擎", description: "AI智能搜索引擎，实时联网搜索，引用来源清晰。" }, en: {} },
  "consensus-ai": { zh: { shortDesc: "AI学术搜索", description: "AI学术文献搜索，在科学文献中快速找到答案。" }, en: {} },
  "semantic-scholar": { zh: { shortDesc: "AI研究工具", description: "AI研究工具，发现和理解学术论文。" }, en: {} },
  "research-rabbit": { zh: { shortDesc: "AI论文发现", description: "AI论文发现工具，可视化组织和发现论文。" }, en: {} },
  "scite-ai": { zh: { shortDesc: "智能引用", description: "智能引用分析，查看论文如何被引用。" }, en: {} },
  "elysium": { zh: { shortDesc: "AI研究助手", description: "AI研究助手，帮助阅读和理解论文。" }, en: {} },

  // ==================== Marketing ====================
  "hubspot-ai": { zh: { shortDesc: "AI营销平台", description: "HubSpot AI营销工具，内容生成、客户洞察。" }, en: {} },
  "surfer-seo": { zh: { shortDesc: "AI SEO工具", description: "AI SEO优化工具，内容优化和关键词分析。" }, en: {} },
  "marketmuse": { zh: { shortDesc: "AI内容策略", description: "AI内容策略平台，内容规划和优化建议。" }, en: {} },
  "clearscope": { zh: { shortDesc: "AI内容优化", description: "AI内容优化工具，SEO内容评分和优化建议。" }, en: {} },
  "frase": { zh: { shortDesc: "AI SEO写作", description: "AI SEO写作工具，研究、编写和优化内容。" }, en: {} },
  "adcreative-ai": { zh: { shortDesc: "AI广告创意", description: "AI广告创意生成，快速创建高转化率广告。" }, en: {} },

  // ==================== Business ====================
  "tableau": { zh: { shortDesc: "AI数据分析", description: "AI数据可视化平台，商业智能和数据分析。" }, en: {} },
  "thoughtspot": { zh: { shortDesc: "AI搜索分析", description: "AI驱动的数据分析，自然语言查询数据。" }, en: {} },
  "monkeylearn": { zh: { shortDesc: "AI文本分析", description: "AI文本分析平台，自动分类和提取数据。" }, en: {} },

  // ==================== Support ====================
  "intercom-fin": { zh: { shortDesc: "AI客服机器人", description: "Intercom AI客服，自动回答客户问题。" }, en: {} },
  "zendesk-ai": { zh: { shortDesc: "AI客服平台", description: "Zendesk AI客服解决方案，智能工单处理。" }, en: {} },
  "freshdesk-ai": { zh: { shortDesc: "AI客服支持", description: "Freshdesk AI客服，智能回复和工单管理。" }, en: {} },
  "drift": { zh: { shortDesc: "AI对话营销", description: "AI对话营销平台，实时聊天和线索生成。" }, en: {} },
  "tawk-to": { zh: { shortDesc: "免费在线客服", description: "免费在线聊天工具，AI辅助客服。" }, en: {} },
  "tidio": { zh: { shortDesc: "AI聊天平台", description: "AI聊天平台，实时聊天和聊天机器人。" }, en: {} },
  "crisp": { zh: { shortDesc: "AI多渠道客服", description: "AI多渠道客服平台，统一消息管理。" }, en: {} },

  // ==================== Sales ====================
  "gong": { zh: { shortDesc: "AI销售分析", description: "AI销售对话分析，洞察销售机会和风险。" }, en: {} },
  "apollo": { zh: { shortDesc: "AI销售平台", description: "AI销售智能平台，线索发现和邮件自动化。" }, en: {} },
  "outreach": { zh: { shortDesc: "AI销售自动化", description: "AI销售自动化平台，序列和跟进自动化。" }, en: {} },
  "salesloft": { zh: { shortDesc: "销售AI平台", description: "销售AI平台，销售流程自动化和优化。" }, en: {} },
  "clay": { zh: { shortDesc: "AI数据丰富", description: "AI数据丰富平台，自动收集和丰富客户数据。" }, en: {} },

  // ==================== Education ====================
  "khan-academy-ai": { zh: { shortDesc: "AI教育平台", description: "Khan Academy AI导师，个性化学习体验。" }, en: {} },
  "coursera-ai": { zh: { shortDesc: "AI在线课程", description: "Coursera AI课程，学习AI和机器学习。" }, en: {} },
  "duolingo": { zh: { shortDesc: "AI语言学习", description: "AI语言学习应用，个性化学习路径。" }, en: {} },
  "quizlet-ai": { zh: { shortDesc: "AI学习工具", description: "AI学习工具，智能闪卡和测试。" }, en: {} },
  "gradescope": { zh: { shortDesc: "AI评分工具", description: "AI评分平台，自动评分和反馈。" }, en: {} },
};

// 获取工具翻译
export function getToolTranslation(slug: string, locale: Locale): ToolTranslation {
  const translation = toolTranslations[slug];
  if (!translation) return {};
  return translation[locale] || translation["en"] || {};
}