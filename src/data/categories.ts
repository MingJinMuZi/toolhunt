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
    id: "agents",
    label: "AI助手",
    labelEn: "AI Agents",
    icon: "🤖",
    description: "智能AI助手、聊天机器人、AI代理平台",
    keywords: ["AI助手", "聊天机器人", "ChatGPT", "Claude", "AI代理"]
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
    id: "content",
    label: "内容创作",
    labelEn: "Content",
    icon: "✍️",
    description: "AI写作、营销文案、内容生成工具",
    keywords: ["AI写作", "文案生成", "营销内容", "SEO写作"]
  },
  {
    id: "creative",
    label: "创意设计",
    labelEn: "Creative",
    icon: "🎨",
    description: "AI图片、视频、音频、设计工具",
    keywords: ["AI绘画", "视频生成", "音乐创作", "AI设计"]
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
    id: "automation",
    label: "自动化",
    labelEn: "Automation",
    icon: "🔄",
    description: "工作流自动化、API集成、无代码工具",
    keywords: ["自动化", "工作流", "Zapier", "无代码"]
  },
  {
    id: "business",
    label: "商业工具",
    labelEn: "Business",
    icon: "💼",
    description: "销售、客服、营销自动化工具",
    keywords: ["销售工具", "客服AI", "CRM", "营销自动化"]
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
    id: "developer-tools",
    label: "开发者工具",
    labelEn: "Developer Tools",
    icon: "🛠️",
    description: "API、SDK、向量数据库、LLM基础设施",
    keywords: ["API", "SDK", "向量数据库", "LLM", "开发者"]
  },
  {
    id: "lifestyle",
    label: "生活娱乐",
    labelEn: "Lifestyle",
    icon: "📱",
    description: "个人助理、娱乐、生活方式AI工具",
    keywords: ["AI助理", "娱乐AI", "生活工具", "个人助理"]
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