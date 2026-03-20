// 优化后的分类配置 - SEO友好

export interface Category {
  id: string;
  label: string;
  labelEn: string;
  icon: string;
  description: string;
  keywords: string[];
}

export const categories: Category[] = [
  {
    id: "all",
    label: "全部",
    labelEn: "All",
    icon: "🌟",
    description: "所有AI工具",
    keywords: ["AI工具", "全部工具"]
  },
  {
    id: "coding",
    label: "编程开发",
    labelEn: "Coding",
    icon: "💻",
    description: "AI编程工具、代码生成、开发环境",
    keywords: ["AI编程", "代码生成", "Cursor", "GitHub Copilot", "AI开发"]
  },
  {
    id: "productivity",
    label: "效率工具",
    labelEn: "Productivity",
    icon: "⚡",
    description: "笔记、会议、日程、知识管理工具",
    keywords: ["AI笔记", "会议助手", "知识管理", "效率工具"]
  },
  {
    id: "creative",
    label: "创意设计",
    labelEn: "Creative",
    icon: "🎨",
    description: "AI图片生成、设计工具、创意平台",
    keywords: ["AI绘画", "AI设计", "图片生成", "创意工具"]
  },
  {
    id: "agents",
    label: "AI助手",
    labelEn: "AI Agents",
    icon: "🤖",
    description: "智能AI助手、聊天机器人、AI代理平台",
    keywords: ["AI助手", "聊天机器人", "ChatGPT", "Claude", "AI代理"]
  },
  {
    id: "content",
    label: "内容创作",
    labelEn: "Content",
    icon: "✍️",
    description: "AI写作、营销文案、内容生成工具",
    keywords: ["AI写作", "文案生成", "营销内容", "SEO写作"]
  },
  {
    id: "automation",
    label: "自动化",
    labelEn: "Automation",
    icon: "🔄",
    description: "工作流自动化、API集成、无代码工具",
    keywords: ["自动化", "工作流", "Zapier", "无代码"]
  },
  {
    id: "video",
    label: "视频工具",
    labelEn: "Video",
    icon: "🎬",
    description: "AI视频生成、编辑、剪辑工具",
    keywords: ["AI视频", "视频生成", "视频编辑", "AI剪辑"]
  },
  {
    id: "audio",
    label: "音频工具",
    labelEn: "Audio",
    icon: "🎵",
    description: "AI音乐生成、语音合成、音频处理",
    keywords: ["AI音乐", "语音合成", "TTS", "音频生成"]
  },
  {
    id: "marketing",
    label: "营销工具",
    labelEn: "Marketing",
    icon: "📢",
    description: "SEO优化、广告创意、社媒营销工具",
    keywords: ["AI营销", "SEO工具", "广告生成", "社媒营销"]
  },
  {
    id: "design",
    label: "设计工具",
    labelEn: "Design",
    icon: "🎯",
    description: "UI设计、Logo生成、品牌设计工具",
    keywords: ["AI设计", "Logo生成", "UI设计", "品牌设计"]
  },
  {
    id: "writing",
    label: "写作工具",
    labelEn: "Writing",
    icon: "📝",
    description: "AI写作助手、小说创作、内容优化",
    keywords: ["AI写作", "小说创作", "内容优化", "写作助手"]
  },
  {
    id: "research",
    label: "研究学习",
    labelEn: "Research",
    icon: "🔬",
    description: "学术研究、知识发现、教育学习工具",
    keywords: ["学术研究", "AI教育", "知识发现", "学习工具"]
  },
  {
    id: "business",
    label: "商业工具",
    labelEn: "Business",
    icon: "💼",
    description: "数据分析、项目管理、商业智能",
    keywords: ["商业分析", "项目管理", "数据洞察", "商业智能"]
  },
  {
    id: "support",
    label: "客服支持",
    labelEn: "Support",
    icon: "💬",
    description: "AI客服、聊天机器人、客户支持工具",
    keywords: ["AI客服", "聊天机器人", "客户支持", "智能客服"]
  },
  {
    id: "education",
    label: "教育学习",
    labelEn: "Education",
    icon: "📚",
    description: "AI教育、在线学习、知识培训工具",
    keywords: ["AI教育", "在线学习", "知识培训", "智能教学"]
  },
  {
    id: "sales",
    label: "销售工具",
    labelEn: "Sales",
    icon: "📈",
    description: "销售自动化、客户管理、CRM工具",
    keywords: ["销售AI", "CRM", "客户管理", "销售自动化"]
  }
];

// 标签系统
export const popularTags = [
  { id: "free", label: "免费", icon: "🆓" },
  { id: "open-source", label: "开源", icon: "📖" },
  { id: "no-code", label: "无代码", icon: "🎯" },
  { id: "api", label: "API", icon: "🔌" },
  { id: "chrome-extension", label: "Chrome扩展", icon: "🌐" },
  { id: "mobile", label: "移动端", icon: "📱" },
  { id: "self-hosted", label: "自托管", icon: "🏠" },
  { id: "enterprise", label: "企业版", icon: "🏢" }
];

// 用户角色标签
export const userRoles = [
  { id: "developer", label: "开发者", icon: "👨‍💻" },
  { id: "marketer", label: "营销人员", icon: "📈" },
  { id: "designer", label: "设计师", icon: "🎨" },
  { id: "writer", label: "写作者", icon: "✍️" },
  { id: "researcher", label: "研究者", icon: "🔬" },
  { id: "founder", label: "创业者", icon: "🚀" },
  { id: "student", label: "学生", icon: "📚" },
  { id: "enterprise", label: "企业用户", icon: "🏢" }
];

// 定价筛选
export const pricingOptions = [
  { id: "free", label: "完全免费", description: "无需付费即可使用全部功能" },
  { id: "freemium", label: "免费增值", description: "免费版可用，付费解锁更多功能" },
  { id: "paid", label: "付费工具", description: "需要付费订阅才能使用" },
  { id: "open-source", label: "开源免费", description: "开源项目，可自托管" }
];

// 获取分类的SEO信息
export function getCategorySEO(categoryId: string) {
  const category = categories.find(c => c.id === categoryId);
  if (!category) return null;
  
  return {
    title: `最佳${category.label}AI工具 - 2026精选 | ToolHunt`,
    description: `发现最佳${category.label}AI工具。${category.description}。比较功能、定价和用户评价。`,
    keywords: category.keywords.join(", ")
  };
}