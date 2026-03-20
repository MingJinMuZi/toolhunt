// 工具翻译数据 - 主要工具的中文名称和简介
import { Locale } from "@/lib/i18n";

export interface ToolTranslation {
  name?: string;
  shortDesc?: string;
  description?: string;
  features?: string[];
  pros?: string[];
  cons?: string[];
}

// 精选工具翻译（按优先级翻译常用工具）
export const toolTranslations: Record<string, Record<Locale, ToolTranslation>> = {
  // AI Agents
  "autogpt": {
    zh: { shortDesc: "自主GPT-4智能体", description: "开源实验性项目，让GPT-4完全自主运行。可以串联LLM思考来实现目标。" },
    en: {}
  },
  "crewai": {
    zh: { shortDesc: "多智能体AI平台", description: "领先的多智能体平台。构建、部署和管理自主执行复杂任务的AI智能体团队。" },
    en: {}
  },
  "agentgpt": {
    zh: { shortDesc: "浏览器AI智能体", description: "在浏览器中部署自主AI智能体。给它一个目标，看着它完成任务。" },
    en: {}
  },
  "chatgpt": {
    zh: { shortDesc: "OpenAI AI助手", description: "OpenAI对话式AI助手。免费使用GPT-4o，支持图像理解、代码执行和DALL-E图像生成。" },
    en: {}
  },
  "claude": {
    zh: { shortDesc: "Anthropic AI助手", description: "Anthropic的AI助手，支持扩展思考。拥有200K上下文窗口、Artifact生成，提供细致有用的回答。" },
    en: {}
  },
  "gemini": {
    zh: { shortDesc: "Google AI助手", description: "Google多模态AI助手。实时Google搜索集成、图像理解、长上下文支持。" },
    en: {}
  },
  "poe": {
    zh: { shortDesc: "多模型AI平台", description: "一站式访问多种AI模型。ChatGPT、Claude、Gemini和众多自定义机器人。" },
    en: {}
  },
  
  // Coding
  "cursor": {
    zh: { shortDesc: "AI代码编辑器", description: "专为AI编程设计的编辑器。内置AI助手，智能代码补全和重构。" },
    en: {}
  },
  "github-copilot": {
    zh: { shortDesc: "AI编程助手", description: "GitHub AI编程助手。智能代码建议，支持多种IDE和编程语言。" },
    en: {}
  },
  "v0": {
    zh: { shortDesc: "AI前端生成", description: "Vercel的AI前端生成工具。用自然语言生成React组件和UI。" },
    en: {}
  },
  "replit": {
    zh: { shortDesc: "AI在线IDE", description: "AI驱动的在线开发环境。支持多种语言，AI辅助编程和部署。" },
    en: {}
  },
  "bolt-new": {
    zh: { shortDesc: "AI全栈开发", description: "AI全栈开发平台。自然语言描述需求，自动生成完整应用。" },
    en: {}
  },
  "windsurf": {
    zh: { shortDesc: "AI IDE编辑器", description: "Codeium出品的AI编辑器。深度AI集成，智能代码生成和重构。" },
    en: {}
  },
  
  // Productivity
  "notion": {
    zh: { shortDesc: "AI知识管理", description: "AI驱动的知识管理平台。笔记、文档、数据库一体化，AI辅助写作和整理。" },
    en: {}
  },
  "mem": {
    zh: { shortDesc: "AI笔记工具", description: "AI自动组织的笔记工具。智能关联，让笔记自动找到彼此。" },
    en: {}
  },
  "otter-ai": {
    zh: { shortDesc: "AI会议记录", description: "AI会议转录助手。自动记录会议内容，生成摘要和行动项。" },
    en: {}
  },
  "fireflies-ai": {
    zh: { shortDesc: "会议AI助手", description: "AI会议助手。自动转录、摘要和分析会议内容。" },
    en: {}
  },
  
  // Creative
  "midjourney": {
    zh: { shortDesc: "AI图像生成", description: "顶级AI图像生成工具。用自然语言创作高质量艺术作品。" },
    en: {}
  },
  "dalle-3": {
    zh: { shortDesc: "OpenAI图像生成", description: "OpenAI图像生成模型。ChatGPT集成，轻松创作精美图像。" },
    en: {}
  },
  "stable-diffusion": {
    zh: { shortDesc: "开源图像生成", description: "开源AI图像生成模型。本地部署，完全控制，社区资源丰富。" },
    en: {}
  },
  "leonardo-ai": {
    zh: { shortDesc: "AI创意平台", description: "AI创意图像生成平台。游戏素材、艺术创作、产品图片一站式解决。" },
    en: {}
  },
  "ideogram": {
    zh: { shortDesc: "AI文字图像", description: "擅长文字渲染的AI图像生成器。Logo、海报、标语创作利器。" },
    en: {}
  },
  
  // Video
  "runway": {
    zh: { shortDesc: "AI视频生成", description: "领先AI视频生成平台。文本生成视频、视频编辑、特效制作。" },
    en: {}
  },
  "pika": {
    zh: { shortDesc: "AI视频创作", description: "AI视频生成工具。简单易用，快速创作创意视频内容。" },
    en: {}
  },
  "sora": {
    zh: { shortDesc: "OpenAI视频生成", description: "OpenAI文本生成视频模型。高质量长视频生成，电影级画质。" },
    en: {}
  },
  "heygen": {
    zh: { shortDesc: "AI数字人视频", description: "AI数字人视频生成。虚拟主播、培训视频、营销内容制作。" },
    en: {}
  },
  "synthesia": {
    zh: { shortDesc: "AI视频制作", description: "AI虚拟人视频平台。无需拍摄，用AI创建专业视频内容。" },
    en: {}
  },
  
  // Audio
  "elevenlabs": {
    zh: { shortDesc: "AI语音合成", description: "顶级AI语音合成平台。自然流畅的语音克隆和生成。" },
    en: {}
  },
  "suno": {
    zh: { shortDesc: "AI音乐生成", description: "AI歌曲生成工具。输入文字描述，生成完整歌曲。" },
    en: {}
  },
  "udio": {
    zh: { shortDesc: "AI音乐创作", description: "AI音乐生成平台。创作专业品质的音乐作品。" },
    en: {}
  },
  
  // Writing
  "jasper": {
    zh: { shortDesc: "AI营销写作", description: "企业级AI营销文案工具。博客、广告、社媒内容一键生成。" },
    en: {}
  },
  "copy-ai": {
    zh: { shortDesc: "AI文案生成", description: "AI营销文案生成器。快速创作广告、邮件、社媒文案。" },
    en: {}
  },
  "writesonic": {
    zh: { shortDesc: "AI写作助手", description: "AI写作平台。博客、广告、产品描述等营销内容生成。" },
    en: {}
  },
  
  // Design
  "canva": {
    zh: { shortDesc: "AI设计平台", description: "在线设计平台。AI辅助设计，模板丰富，上手简单。" },
    en: {}
  },
  "figma": {
    zh: { shortDesc: "UI设计工具", description: "专业UI设计协作平台。AI辅助设计，团队实时协作。" },
    en: {}
  },
  "looka": {
    zh: { shortDesc: "AI Logo设计", description: "AI Logo生成器。输入品牌信息，自动生成专业Logo。" },
    en: {}
  },
  
  // Automation
  "zapier": {
    zh: { shortDesc: "自动化平台", description: "无代码自动化平台。连接5000+应用，自动化工作流程。" },
    en: {}
  },
  "make": {
    zh: { shortDesc: "可视化自动化", description: "可视化自动化平台。拖拽式工作流设计，复杂自动化场景。" },
    en: {}
  },
  "n8n": {
    zh: { shortDesc: "开源自动化", description: "开源工作流自动化工具。自托管，完全控制，社区活跃。" },
    en: {}
  },
  
  // Research
  "perplexity": {
    zh: { shortDesc: "AI搜索引擎", description: "AI智能搜索引擎。实时联网搜索，引用来源清晰。" },
    en: {}
  },
  "consensus-ai": {
    zh: { shortDesc: "AI学术搜索", description: "AI学术文献搜索。在科学文献中快速找到答案。" },
    en: {}
  }
};

// 获取工具翻译
export function getToolTranslation(slug: string, locale: Locale): ToolTranslation {
  const translation = toolTranslations[slug];
  if (!translation) return {};
  return translation[locale] || translation["en"] || {};
}