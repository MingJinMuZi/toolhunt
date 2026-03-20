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

  // ==================== 更多创意工具 ====================
  "dall-e-3": { zh: { shortDesc: "OpenAI图像生成", description: "OpenAI最新图像生成模型，ChatGPT集成，精准文字渲染。" }, en: {} },
  "canva-ai": { zh: { shortDesc: "Canva AI设计", description: "Canva内置AI设计工具，智能生成设计和图像。" }, en: {} },
  "flux": { zh: { shortDesc: "AI图像生成", description: "开源AI图像生成模型，高质量图像生成。" }, en: {} },
  "topaz-labs": { zh: { shortDesc: "AI图像增强", description: "AI图像增强工具，放大、降噪、锐化。" }, en: {} },
  "magnific-ai": { zh: { shortDesc: "AI图像放大", description: "AI图像放大工具，提升图像分辨率和细节。" }, en: {} },
  "photoai": { zh: { shortDesc: "AI照片生成", description: "AI照片生成平台，创建专业人像和产品图。" }, en: {} },
  "clipdrop": { zh: { shortDesc: "AI图像工具", description: "AI图像处理工具套件，抠图、移除、增强。" }, en: {} },
  "krea-ai": { zh: { shortDesc: "AI图像生成", description: "AI图像生成工具，实时生成和编辑。" }, en: {} },
  "khroma": { zh: { shortDesc: "AI配色工具", description: "AI配色方案生成器，发现个性化配色。" }, en: {} },

  // ==================== 更多写作工具 ====================
  "jenni-ai": { zh: { shortDesc: "AI学术写作", description: "AI学术写作助手，论文写作和研究辅助。" }, en: {} },
  "lex": { zh: { shortDesc: "AI写作工具", description: "AI写作编辑器，专注模式下的智能写作。" }, en: {} },
  "novelcrafter": { zh: { shortDesc: "AI小说写作", description: "AI小说创作平台，长篇故事创作工具。" }, en: {} },
  "hemingway-editor": { zh: { shortDesc: "写作风格编辑", description: "写作风格优化工具，提升文章可读性。" }, en: {} },
  "prowritingaid": { zh: { shortDesc: "AI写作助手", description: "AI写作分析和改进工具，提升写作质量。" }, en: {} },
  "copysmith": { zh: { shortDesc: "AI营销文案", description: "AI营销文案生成器，电商和企业内容。" }, en: {} },
  "writer-com": { zh: { shortDesc: "企业AI写作", description: "企业AI写作平台，品牌一致的内容生成。" }, en: {} },
  "lavender": { zh: { shortDesc: "AI邮件助手", description: "AI邮件写作助手，优化邮件提高回复率。" }, en: {} },
  "compose-ai": { zh: { shortDesc: "AI文本补全", description: "AI文本补全工具，加速写作速度。" }, en: {} },

  // ==================== 更多视频工具 ====================
  "capcut": { zh: { shortDesc: "AI视频编辑", description: "字节跳动视频编辑工具，AI特效和剪辑。" }, en: {} },
  "opus-clip": { zh: { shortDesc: "AI短视频生成", description: "AI长视频转短视频，自动识别精彩片段。" }, en: {} },
  "veed-io": { zh: { shortDesc: "在线视频编辑", description: "在线视频编辑平台，AI字幕和特效。" }, en: {} },
  "invideo-ai": { zh: { shortDesc: "AI视频生成", description: "AI视频生成平台，文字转视频。" }, en: {} },
  "kapwing": { zh: { shortDesc: "AI视频编辑", description: "在线视频编辑器，AI驱动的编辑工具。" }, en: {} },
  "synthesia-video": { zh: { shortDesc: "AI虚拟人视频", description: "AI虚拟人视频生成，多语言配音。" }, en: {} },
  "reface": { zh: { shortDesc: "AI换脸工具", description: "AI换脸应用，照片和视频换脸。" }, en: {} },
  "descript-video": { zh: { shortDesc: "AI视频编辑", description: "AI视频编辑器，像编辑文档一样编辑视频。" }, en: {} },
  "fliki": { zh: { shortDesc: "AI视频生成", description: "文字转视频工具，AI配音和图像生成。" }, en: {} },
  "steve-ai": { zh: { shortDesc: "AI动画视频", description: "AI动画视频生成器，快速创建动画内容。" }, en: {} },
  "wisecut": { zh: { shortDesc: "AI视频剪辑", description: "AI自动视频剪辑工具，智能剪切和字幕。" }, en: {} },
  "vizard-ai": { zh: { shortDesc: "AI视频剪辑", description: "AI视频剪辑平台，自动生成短视频。" }, en: {} },

  // ==================== 更多音频工具 ====================
  "murf-ai": { zh: { shortDesc: "AI配音工具", description: "AI配音生成平台，多种语言和声音风格。" }, en: {} },
  "suno-ai": { zh: { shortDesc: "AI音乐生成", description: "AI歌曲生成工具，文字描述生成完整歌曲。" }, en: {} },
  "soundraw": { zh: { shortDesc: "AI音乐生成", description: "AI背景音乐生成器，免版税音乐。" }, en: {} },
  "mubert": { zh: { shortDesc: "AI音乐流媒体", description: "AI音乐生成平台，流媒体和创作工具。" }, en: {} },
  "boomy": { zh: { shortDesc: "AI音乐创作", description: "AI音乐创作工具，快速生成原创音乐。" }, en: {} },
  "play-ht": { zh: { shortDesc: "AI文本转语音", description: "AI文本转语音平台，高质量多语言语音。" }, en: {} },
  "descript-audio": { zh: { shortDesc: "AI音频编辑", description: "AI音频转录和编辑工具，像编辑文档一样编辑音频。" }, en: {} },
  "cleanvoice-ai": { zh: { shortDesc: "AI音频清理", description: "AI音频清理工具，去除噪音和填充词。" }, en: {} },
  "adobe-podcast": { zh: { shortDesc: "AI播客工具", description: "Adobe AI播客增强工具，提升录音质量。" }, en: {} },
  "auphonic": { zh: { shortDesc: "AI音频处理", description: "AI音频后期处理，自动音量平衡和降噪。" }, en: {} },

  // ==================== 更多效率工具 ====================
  "linear": { zh: { shortDesc: "AI项目管理", description: "AI项目管理工具，软件开发团队协作。" }, en: {} },
  "raycast-ai": { zh: { shortDesc: "AI启动器", description: "Mac启动器AI扩展，快速访问AI功能。" }, en: {} },
  "readwise-reader": { zh: { shortDesc: "AI阅读工具", description: "AI阅读和知识管理，保存和高亮文章。" }, en: {} },
  "gamma": { zh: { shortDesc: "AI演示文稿", description: "AI演示文稿生成器，快速创建专业PPT。" }, en: {} },
  "tome": { zh: { shortDesc: "AI演示工具", description: "AI演示文稿平台，智能布局和内容生成。" }, en: {} },
  "beautiful-ai": { zh: { shortDesc: "AI PPT生成", description: "AI演示文稿工具，智能模板和设计。" }, en: {} },
  "tana": { zh: { shortDesc: "AI笔记工具", description: "AI笔记应用，大纲和知识管理。" }, en: {} },
  "reflect": { zh: { shortDesc: "AI笔记应用", description: "AI笔记工具，反向链接和知识图谱。" }, en: {} },
  "capacities": { zh: { shortDesc: "AI知识管理", description: "AI知识管理工具，对象化笔记系统。" }, en: {} },
  "reclaim-ai": { zh: { shortDesc: "AI日程安排", description: "AI日程管理工具，智能安排会议和任务。" }, en: {} },
  "clockwise": { zh: { shortDesc: "AI时间管理", description: "AI时间优化工具，保护专注时间。" }, en: {} },
  "skedpal": { zh: { shortDesc: "AI日程规划", description: "AI日程规划工具，自动安排任务时间。" }, en: {} },
  "krisp": { zh: { shortDesc: "AI降噪工具", description: "AI通话降噪工具，消除背景噪音。" }, en: {} },
  "fireflies": { zh: { shortDesc: "AI会议记录", description: "AI会议转录工具，自动记录和总结会议。" }, en: {} },

  // ==================== 更多自动化工具 ====================
  "retool": { zh: { shortDesc: "低代码平台", description: "低代码内部工具平台，快速构建管理后台。" }, en: {} },
  "pipedream": { zh: { shortDesc: "集成平台", description: "API集成平台，连接应用和工作流自动化。" }, en: {} },
  "relay-app": { zh: { shortDesc: "工作流自动化", description: "工作流自动化平台，人性化自动化流程。" }, en: {} },
  "tally": { zh: { shortDesc: "AI表单工具", description: "免费表单构建工具，无需代码创建表单。" }, en: {} },
  "instantly": { zh: { shortDesc: "AI邮件自动化", description: "冷邮件自动化平台，大规模邮件外联。" }, en: {} },
  "activepieces": { zh: { shortDesc: "开源自动化", description: "开源工作流自动化工具，易用的自动化平台。" }, en: {} },
  "trigger-dev": { zh: { shortDesc: "后台任务平台", description: "开发者后台任务平台，构建可靠后台作业。" }, en: {} },
  "lindy": { zh: { shortDesc: "AI助理自动化", description: "AI助理平台，自动化日常工作任务。" }, en: {} },
  "magic": { zh: { shortDesc: "AI自动化助手", description: "AI工作自动化工具，自动化重复任务。" }, en: {} },

  // ==================== 更多研究工具 ====================
  "elicit": { zh: { shortDesc: "AI研究助手", description: "AI研究助手，自动化文献综述。" }, en: {} },
  "consensus": { zh: { shortDesc: "AI学术搜索", description: "AI学术文献搜索引擎，快速找到研究答案。" }, en: {} },
  "scite": { zh: { shortDesc: "智能引用分析", description: "智能引用分析平台，查看论文引用上下文。" }, en: {} },
  "scholarcy": { zh: { shortDesc: "AI论文总结", description: "AI论文摘要工具，快速了解论文要点。" }, en: {} },
  "connected-papers": { zh: { shortDesc: "论文关联图", description: "论文关联可视化工具，发现相关研究。" }, en: {} },
  "explainpaper": { zh: { shortDesc: "AI论文解释", description: "AI论文解释工具，帮助理解复杂论文。" }, en: {} },

  // ==================== 更多教育工具 ====================
  "duolingo-max": { zh: { shortDesc: "AI语言学习", description: "Duolingo AI高级版，GPT-4驱动的学习体验。" }, en: {} },
  "khanmigo": { zh: { shortDesc: "Khan AI导师", description: "Khan Academy AI导师，个性化学习辅导。" }, en: {} },
  "quizlet-q-chat": { zh: { shortDesc: "AI学习聊天", description: "Quizlet AI学习助手，对话式学习体验。" }, en: {} },
  "turnitin": { zh: { shortDesc: "AI抄袭检测", description: "学术抄袭检测工具，AI写作检测。" }, en: {} },
  "curipod": { zh: { shortDesc: "AI课堂工具", description: "AI课堂互动工具，创建互动课程。" }, en: {} },
  "formative": { zh: { shortDesc: "AI形成性评价", description: "AI形成性评价平台，实时学生反馈。" }, en: {} },
  "magicschool-ai": { zh: { shortDesc: "教师AI助手", description: "教师AI工具平台，备课和评分辅助。" }, en: {} },

  // ==================== 更多销售工具 ====================
  "chorus-ai": { zh: { shortDesc: "AI销售对话分析", description: "AI销售对话智能平台，通话分析和辅导。" }, en: {} },
  "apollo-io": { zh: { shortDesc: "AI销售智能", description: "AI销售智能平台，线索发现和外联自动化。" }, en: {} },
  "salesforce-einstein": { zh: { shortDesc: "Salesforce AI", description: "Salesforce AI助手，智能CRM功能。" }, en: {} },
  "alyce": { zh: { shortDesc: "AI礼品营销", description: "AI企业礼品平台，个性化客户送礼。" }, en: {} },
  "amplitude-ai": { zh: { shortDesc: "AI产品分析", description: "AI产品分析平台，用户行为洞察。" }, en: {} },

  // ==================== 更多客服工具 ====================
  "dante-ai": { zh: { shortDesc: "AI客服机器人", description: "AI客服聊天机器人，自定义训练。" }, en: {} },
  "chatbase": { zh: { shortDesc: "AI聊天机器人", description: "AI聊天机器人平台，用数据训练定制机器人。" }, en: {} },
  "botsonic": { zh: { shortDesc: "AI聊天机器人", description: "Writesonic聊天机器人，AI客服解决方案。" }, en: {} },
  "customgpt": { zh: { shortDesc: "企业AI机器人", description: "企业定制AI聊天机器人，品牌专属。" }, en: {} },
  "voiceflow": { zh: { shortDesc: "AI对话设计", description: "AI对话设计平台，构建语音和聊天助手。" }, en: {} },
  "front": { zh: { shortDesc: "AI客服平台", description: "客户沟通平台，统一收件箱和AI辅助。" }, en: {} },

  // ==================== 更多设计工具 ====================
  "figma-ai": { zh: { shortDesc: "Figma AI设计", description: "Figma内置AI功能，智能设计建议。" }, en: {} },
  "framer-ai": { zh: { shortDesc: "AI网站构建", description: "AI网站构建平台，设计即代码。" }, en: {} },
  "uizard": { zh: { shortDesc: "AI UI设计", description: "AI UI设计工具，线框图转高保真设计。" }, en: {} },
  "designs-ai": { zh: { shortDesc: "AI设计套件", description: "AI设计工具套件，Logo、设计、视频。" }, en: {} },
  "brandmark": { zh: { shortDesc: "AI Logo设计", description: "AI Logo生成器，创建品牌标识。" }, en: {} },
  "namelix": { zh: { shortDesc: "AI品牌命名", description: "AI品牌命名工具，生成公司名称。" }, en: {} },

  // ==================== 更多营销工具 ====================
  "predis-ai": { zh: { shortDesc: "AI社媒营销", description: "AI社交媒体内容生成，图片和视频创作。" }, en: {} },
  "ocoya": { zh: { shortDesc: "AI社媒管理", description: "AI社交媒体管理平台，内容创作和排程。" }, en: {} },

  // ==================== 更多AI助手 ====================
  "deepseek": { zh: { shortDesc: "DeepSeek AI", description: "中国领先的大模型，代码和推理能力强。" }, en: {} },
  "perplexity-pro": { zh: { shortDesc: "AI搜索高级版", description: "Perplexity高级版，GPT-4和Claude支持。" }, en: {} },
  "mistral-ai": { zh: { shortDesc: "Mistral AI", description: "欧洲开源大模型，高效推理能力。" }, en: {} },
  "you-com": { zh: { shortDesc: "AI搜索引擎", description: "AI搜索平台，隐私友好的搜索体验。" }, en: {} },
  "character-ai": { zh: { shortDesc: "AI角色聊天", description: "AI角色扮演平台，与虚拟角色对话。" }, en: {} },
  "huggingchat": { zh: { shortDesc: "开源AI聊天", description: "Hugging Face开源聊天助手，多种模型。" }, en: {} },
  "inflection-pi": { zh: { shortDesc: "Pi AI助手", description: "Inflection AI个人助手，情感对话。" }, en: {} },
  "cohere-coral": { zh: { shortDesc: "Cohere企业AI", description: "Cohere企业级AI助手，安全可靠。" }, en: {} },
  "xai-grok": { zh: { shortDesc: "xAI Grok", description: "马斯克xAI的AI助手，实时信息访问。" }, en: {} },
  "ai21-labs": { zh: { shortDesc: "AI21大模型", description: "AI21 Labs大语言模型，文本生成。" }, en: {} },
  "reka-ai": { zh: { shortDesc: "Reka AI", description: "多模态AI模型，图像和文本理解。" }, en: {} },
  "moonshot-ai": { zh: { shortDesc: "Moonshot Kimi", description: "月之暗面Kimi，长文本处理能力强。" }, en: {} },
  "zhipu-ai": { zh: { shortDesc: "智谱AI", description: "智谱清言，中文理解和生成能力。" }, en: {} },
  "databricks-dolly": { zh: { shortDesc: "Dolly开源模型", description: "Databricks开源指令模型。" }, en: {} },
  "groq": { zh: { shortDesc: "Groq推理引擎", description: "超快推理引擎，极低延迟AI推理。" }, en: {} },
  "lepton-ai": { zh: { shortDesc: "AI推理平台", description: "AI模型部署平台，快速推理服务。" }, en: {} },
  "anyscale": { zh: { shortDesc: "AI计算平台", description: "Ray AI计算平台，分布式AI训练。" }, en: {} },
  "modal": { zh: { shortDesc: "云函数平台", description: "无服务器云平台，AI应用部署。" }, en: {} },

  // ==================== 更多编程工具 ====================
  "cursor-pro": { zh: { shortDesc: "Cursor专业版", description: "Cursor专业版，无限AI补全。" }, en: {} },
  "windsurf-ide": { zh: { shortDesc: "Windsurf IDE", description: "Codeium AI优先IDE，深度AI集成。" }, en: {} },
  "zed-editor": { zh: { shortDesc: "Zed编辑器", description: "高性能编辑器，团队协作和AI助手。" }, en: {} },
  "pearai": { zh: { shortDesc: "Pear AI编程", description: "AI编程助手，代码生成和审查。" }, en: {} },
  "pearcastle": { zh: { shortDesc: "Pearcastle", description: "AI代码审查平台，自动化代码检查。" }, en: {} },
  "codecraft": { zh: { shortDesc: "AI代码生成", description: "AI代码生成工具，快速原型开发。" }, en: {} },
  "pieces-dev": { zh: { shortDesc: "Pieces开发者", description: "开发者工具套件，代码片段管理。" }, en: {} },
  "mutable-ai": { zh: { shortDesc: "Mutable AI", description: "AI代码生成和重构工具。" }, en: {} },
  "tabnine-enterprise": { zh: { shortDesc: "Tabnine企业版", description: "Tabnine企业级AI编程助手。" }, en: {} },
  "amazon-codewhisperer": { zh: { shortDesc: "AWS AI编程", description: "亚马逊AI代码补全工具。" }, en: {} },
  "replit-ai": { zh: { shortDesc: "Replit AI", description: "Replit内置AI编程助手。" }, en: {} },
  "codegpt": { zh: { shortDesc: "CodeGPT", description: "VSCode AI编程扩展，多种模型支持。" }, en: {} },
  "askcodi": { zh: { shortDesc: "AskCodi", description: "AI编程问答助手，代码解释和生成。" }, en: {} },
  "bugasura": { zh: { shortDesc: "AI Bug追踪", description: "AI驱动的Bug追踪和管理工具。" }, en: {} },
  "what-the-diff": { zh: { shortDesc: "AI代码差异", description: "AI代码差异解释工具，理解变更。" }, en: {} },
  "greptile": { zh: { shortDesc: "AI代码搜索", description: "AI代码搜索引擎，代码库问答。" }, en: {} },
  "bloop-ai": { zh: { shortDesc: "Bloop AI", description: "AI代码搜索工具，自然语言查询代码。" }, en: {} },
  "smol-developer": { zh: { shortDesc: "Smol开发者", description: "轻量级AI编程智能体。" }, en: {} },

  // ==================== LLM开发工具 ====================
  "langflow": { zh: { shortDesc: "LangFlow可视化", description: "LangChain可视化构建器，拖拽创建AI应用。" }, en: {} },
  "haystack": { zh: { shortDesc: "Haystack框架", description: "LLM应用框架，NLP管道构建。" }, en: {} },
  "semantic-kernel": { zh: { shortDesc: "Semantic Kernel", description: "微软LLM集成框架，AI技能编排。" }, en: {} },
  "chroma": { zh: { shortDesc: "Chroma向量库", description: "开源向量数据库，AI嵌入存储。" }, en: {} },
  "milvus": { zh: { shortDesc: "Milvus向量库", description: "云原生向量数据库，大规模相似性搜索。" }, en: {} },

  // ==================== 代码生成模型 ====================
  "deepseek-coder": { zh: { shortDesc: "DeepSeek代码模型", description: "DeepSeek代码专用模型，编程能力出色。" }, en: {} },
  "starcoder": { zh: { shortDesc: "StarCoder", description: "Hugging Face代码生成模型，80+语言。" }, en: {} },
  "codellama": { zh: { shortDesc: "Code Llama", description: "Meta代码生成模型，基于Llama。" }, en: {} },
  "wizardcoder": { zh: { shortDesc: "WizardCoder", description: "高质量代码生成模型。" }, en: {} },
  "refact-ai": { zh: { shortDesc: "Refact AI", description: "开源代码补全模型。" }, en: {} },
  "fauxpilot": { zh: { shortDesc: "FauxPilot", description: "本地GitHub Copilot替代方案。" }, en: {} },
  "tabby": { zh: { shortDesc: "Tabby自托管", description: "自托管AI编程助手，保护隐私。" }, en: {} },

  // ==================== 本地AI工具 ====================
  "ollama": { zh: { shortDesc: "Ollama本地LLM", description: "本地运行大语言模型，简单易用。" }, en: {} },
  "localai": { zh: { shortDesc: "LocalAI", description: "OpenAI兼容的本地AI服务。" }, en: {} },
  "lm-studio": { zh: { shortDesc: "LM Studio", description: "桌面应用运行本地大模型。" }, en: {} },
  "jan": { zh: { shortDesc: "Jan本地AI", description: "开源本地AI助手，隐私优先。" }, en: {} },
  "gpt4all": { zh: { shortDesc: "GPT4All", description: "本地运行的开源聊天机器人。" }, en: {} },
  "privategpt": { zh: { shortDesc: "PrivateGPT", description: "私有GPT，本地文档问答。" }, en: {} },
  "quivr": { zh: { shortDesc: "Quivr", description: "AI第二大脑，本地知识库。" }, en: {} },

  // ==================== 更多营销工具 ====================
  "jasper-ai": { zh: { shortDesc: "Jasper AI营销", description: "企业级AI营销文案平台。" }, en: {} },
  "contentstudio": { zh: { shortDesc: "内容营销平台", description: "AI内容营销平台，多渠道发布。" }, en: {} },
  "narrato": { zh: { shortDesc: "AI内容平台", description: "AI内容创作和管理平台。" }, en: {} },
  "longshot-ai": { zh: { shortDesc: "AI长文写作", description: "AI长内容生成工具，SEO优化。" }, en: {} },
  "scalenut": { zh: { shortDesc: "AI SEO平台", description: "AI SEO内容创作平台。" }, en: {} },
  "neuronwriter": { zh: { shortDesc: "AI内容优化", description: "AI内容优化工具，SEO分析。" }, en: {} },
  "ink-editor": { zh: { shortDesc: "INK AI写作", description: "AI写作和SEO优化编辑器。" }, en: {} },
  "outranking": { zh: { shortDesc: "AI SEO策略", description: "AI SEO策略和内容规划工具。" }, en: {} },
  "growthbar": { zh: { shortDesc: "AI SEO工具", description: "AI SEO研究和内容生成。" }, en: {} },
  "blogseo-ai": { zh: { shortDesc: "博客SEO AI", description: "AI博客SEO优化工具。" }, en: {} },
  "article-forge": { zh: { shortDesc: "AI文章生成", description: "AI批量文章生成工具。" }, en: {} },
  "kafkai": { zh: { shortDesc: "AI内容生成", description: "AI文章生成器，SEO友好。" }, en: {} },
  "wordai": { zh: { shortDesc: "AI文章改写", description: "AI文章改写工具，避免重复。" }, en: {} },
  "spin-rewriter": { zh: { shortDesc: "文章旋转工具", description: "AI文章改写和旋转工具。" }, en: {} },

  // ==================== 更多创意工具 ====================
  "midjourney-v6": { zh: { shortDesc: "MJ V6版本", description: "Midjourney最新版本，照片级图像生成。" }, en: {} },
  "stable-diffusion-xl": { zh: { shortDesc: "SDXL模型", description: "Stable Diffusion XL，高质量图像生成。" }, en: {} },
  "flux-ai": { zh: { shortDesc: "Flux图像生成", description: "开源高质量图像生成模型。" }, en: {} },
  "nightcafe": { zh: { shortDesc: "NightCafe创作", description: "AI艺术生成社区，多种风格。" }, en: {} },
  "dreamstudio": { zh: { shortDesc: "DreamStudio", description: "Stability AI官方图像生成平台。" }, en: {} },
  "civitai": { zh: { shortDesc: "Civitai模型库", description: "AI图像模型分享社区。" }, en: {} },
  "fontjoy": { zh: { shortDesc: "AI字体配对", description: "AI字体组合推荐工具。" }, en: {} },

  // ==================== 更多视频工具 ====================
  "runway-gen-3": { zh: { shortDesc: "Runway Gen-3", description: "Runway最新视频生成模型，电影级效果。" }, en: {} },
  "pika-labs": { zh: { shortDesc: "Pika Labs", description: "AI视频生成平台，创意视频制作。" }, en: {} },
  "luma-dream-machine": { zh: { shortDesc: "Luma视频生成", description: "Luma AI视频生成工具。" }, en: {} },
  "kling-ai": { zh: { shortDesc: "可灵AI", description: "快手AI视频生成，中文友好。" }, en: {} },
  "haiper-ai": { zh: { shortDesc: "Haiper视频", description: "AI视频生成平台，高质量输出。" }, en: {} },
  "did": { zh: { shortDesc: "D-ID数字人", description: "AI数字人生成平台，照片转视频。" }, en: {} },
  "avatar-ai": { zh: { shortDesc: "AI虚拟形象", description: "AI虚拟人生成工具。" }, en: {} },

  // ==================== 更多效率工具 ====================
  "mem-ai": { zh: { shortDesc: "Mem AI笔记", description: "AI笔记应用，自动组织信息。" }, en: {} },
  "linear-ai": { zh: { shortDesc: "Linear AI", description: "项目管理工具AI功能。" }, en: {} },
  "vimcal": { zh: { shortDesc: "AI日历", description: "快速日历应用，AI排程。" }, en: {} },
  "fantastical-ai": { zh: { shortDesc: "Fantastical AI", description: "macOS日历AI功能。" }, en: {} },
  "superhuman-ai": { zh: { shortDesc: "Superhuman AI", description: "邮件客户端AI助手。" }, en: {} },
  "shortwave-ai": { zh: { shortDesc: "Shortwave AI邮件", description: "AI驱动的邮件客户端。" }, en: {} },
  "spark-ai": { zh: { shortDesc: "Spark AI邮件", description: "Spark邮件AI功能。" }, en: {} },
  "feedly-ai": { zh: { shortDesc: "Feedly AI", description: "RSS阅读器AI功能。" }, en: {} },
  "instapaper-ai": { zh: { shortDesc: "Instapaper AI", description: "稍后读应用AI摘要。" }, en: {} },
  "pocket-ai": { zh: { shortDesc: "Pocket AI", description: "收藏应用AI功能。" }, en: {} },

  // ==================== 更多自动化工具 ====================
  "zapier-ai": { zh: { shortDesc: "Zapier AI", description: "自动化平台AI功能。" }, en: {} },
  "bardeen-ai": { zh: { shortDesc: "Bardeen AI", description: "浏览器自动化AI助手。" }, en: {} },
  "lindy-ai": { zh: { shortDesc: "Lindy AI助理", description: "AI助理自动化平台。" }, en: {} },
  "retool-ai": { zh: { shortDesc: "Retool AI", description: "内部工具平台AI功能。" }, en: {} },
  "typeform-ai": { zh: { shortDesc: "Typeform AI", description: "表单工具AI功能。" }, en: {} },
  "instantly-ai": { zh: { shortDesc: "Instantly AI", description: "冷邮件自动化AI。" }, en: {} },
  "clay-ai": { zh: { shortDesc: "Clay AI数据", description: "AI数据丰富平台。" }, en: {} },
  "magic-dev": { zh: { shortDesc: "Magic开发工具", description: "AI开发者工具套件。" }, en: {} },

  // ==================== 更多销售工具 ====================
  "gong-ai": { zh: { shortDesc: "Gong AI销售", description: "销售对话AI分析平台。" }, en: {} },
  "apollo-io-ai": { zh: { shortDesc: "Apollo AI", description: "销售智能AI平台。" }, en: {} },
  "outreach-ai": { zh: { shortDesc: "Outreach AI", description: "销售自动化AI功能。" }, en: {} },

  // ==================== 更多研究工具 ====================
  "elicit-ai": { zh: { shortDesc: "Elicit AI研究", description: "AI研究助手，文献综述自动化。" }, en: {} },
};

// 获取工具翻译
export function getToolTranslation(slug: string, locale: Locale): ToolTranslation {
  const translation = toolTranslations[slug];
  if (!translation) return {};
  return translation[locale] || translation["en"] || {};
}