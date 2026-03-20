// 国际化配置
export const locales = ['zh', 'en'] as const;
export type Locale = typeof locales[number];

export const defaultLocale: Locale = 'zh';

// 翻译文本
export const translations: Record<Locale, Record<string, string>> = {
  zh: {
    // 导航
    'nav.allTools': '所有工具',
    'nav.favorites': '我的收藏',
    'nav.submit': '提交工具',
    'nav.about': '关于我们',
    
    // 首页
    'home.hero.title1': '发现最佳',
    'home.hero.title2': 'AI工具',
    'home.hero.title3': '助力你的项目',
    'home.hero.subtitle': '精心策划的AI工具合集，专为独立开发者、创业者和创作者打造',
    'home.hero.search': '搜索 {count} 个AI工具...',
    'home.hero.verified': '已验证',
    'home.hero.indieMade': '独立开发',
    'home.hero.featured': '精选推荐',
    'home.hero.free': '完全免费',
    'home.editorPicks': '编辑精选',
    
    // 分类
    'categories.title': '按分类浏览',
    'categories.subtitle': '选择你感兴趣的领域',
    'categories.tools': '工具',
    
    // 工具卡片
    'tool.verified': '已验证',
    'tool.indie': '独立',
    'tool.featured': '精选',
    'tool.free': '免费',
    'tool.perMonth': '/月',
    
    // 工具详情页
    'toolDetail.backToList': '返回工具列表',
    'toolDetail.features': '核心功能',
    'toolDetail.pros': '优点',
    'toolDetail.cons': '缺点',
    'toolDetail.rating': '用户评价',
    'toolDetail.pricing': '定价',
    'toolDetail.basicInfo': '基本信息',
    'toolDetail.category': '分类',
    'toolDetail.pricingModel': '定价',
    'toolDetail.verifiedStatus': '验证状态',
    'toolDetail.indieStatus': '独立开发',
    'toolDetail.visitSite': '访问官网',
    'toolDetail.favorite': '收藏',
    'toolDetail.favorited': '已收藏',
    'toolDetail.relatedTools': '相关工具',
    'toolDetail.alternatives': '替代方案',
    
    // 定价
    'pricing.free': '免费',
    'pricing.freemium': '免费增值',
    'pricing.paid': '付费',
    'pricing.freeDesc': '完全免费使用',
    'pricing.freemiumDesc': '提供免费版本',
    'pricing.paidDesc': '需要付费订阅',
    
    // 筛选
    'filter.sort': '排序',
    'filter.sortFeatured': '推荐排序',
    'filter.sortName': '名称 A-Z',
    'filter.sortPriceAsc': '价格低到高',
    'filter.sortPriceDesc': '价格高到低',
    'filter.found': '找到 {count} 个工具',
    'filter.clear': '清除筛选条件',
    'filter.noResults': '没有找到匹配的工具',
    
    // 分页
    'pagination.prev': '上一页',
    'pagination.next': '下一页',
    'pagination.page': '第 {current} 页，共 {total} 页',
    
    // CTA
    'cta.title': '有好用的AI工具？',
    'cta.subtitle': '提交你的工具，让数以万计的独立开发者发现你的产品',
    'cta.button': '提交工具',
    
    // Footer
    'footer.quickLinks': '快速链接',
    'footer.popularCategories': '热门分类',
    'footer.copyright': '© 2026 ToolHunt. Made with ❤️ for indie hackers.',
    'footer.sitemap': '网站地图',
    
    // 收藏页
    'favorites.title': '我的收藏',
    'favorites.subtitle': '你收藏的AI工具，数据保存在本地浏览器',
    'favorites.empty': '暂无收藏',
    'favorites.emptyHint': '点击工具卡片上的收藏按钮添加',
    'favorites.tip': '💡 提示：收藏数据保存在浏览器本地，清除浏览器数据后会丢失。',
    
    // 404
    'notFound.title': '页面未找到',
    'notFound.subtitle': '抱歉，您访问的页面不存在或已被移除',
    'notFound.home': '返回首页',
    'notFound.browse': '浏览所有工具',
    
    // 错误页
    'error.title': '出错了',
    'error.subtitle': '页面加载时发生错误，请稍后重试',
    'error.retry': '重试',
    'error.home': '返回首页',
    
    // 导航
    'nav.home': '首页',
    
    // 基础
    'notVerified': '未验证',
    'no': '否',
    
    // 功能翻译
    'feature.codeGen': '代码生成',
    'feature.syntax': '语法高亮',
    'feature.errorDetect': '错误检测',
    'feature.multiLang': '多语言支持',
    'feature.taskManage': '任务管理',
    'feature.collab': '团队协作',
    'feature.tracking': '进度追踪',
    'feature.sync': '数据同步',
    'feature.aiGen': 'AI生成',
    'feature.templates': '模板库',
    'feature.preview': '实时预览',
    'feature.export': '导出高清',
    'feature.chat': '智能对话',
    'feature.taskExec': '任务执行',
    'feature.qa': '知识问答',
    'feature.autoFlow': '自动化流程',
    'feature.contentGen': '内容生成',
    'feature.seo': 'SEO优化',
    'feature.i18n': '多语言',
    'feature.tpl': '模板支持',
    'feature.workflow': '工作流自动化',
    'feature.api': 'API集成',
    'feature.trigger': '触发器',
    'feature.analytics': '数据分析',
    'feature.videoGen': '视频生成',
    'feature.editing': '剪辑编辑',
    'feature.subtitle': '字幕生成',
    'feature.effects': '特效模板',
    'feature.tts': '语音合成',
    'feature.audioEdit': '音频编辑',
    'feature.noise': '降噪处理',
    'feature.format': '格式转换',
    'feature.autoMarket': '营销自动化',
    'feature.dataAnalytics': '数据分析',
    'feature.abTest': 'A/B测试',
    'feature.channel': '渠道集成',
    'feature.aiDesign': 'AI设计',
    'feature.designTpl': '模板库',
    'feature.collabDesign': '协作功能',
    'feature.exportDesign': '导出多格式',
    'feature.aiWriting': 'AI写作',
    'feature.grammar': '语法检查',
    'feature.style': '风格调整',
    'feature.writeTpl': '模板支持',
    'feature.litSearch': '文献检索',
    'feature.dataAnalysis': '数据分析',
    'feature.citation': '引用管理',
    'feature.researchCollab': '协作研究',
    'feature.bizAnalytics': '数据分析',
    'feature.reports': '报表生成',
    'feature.teamManage': '团队管理',
    'feature.permissions': '权限控制',
    'feature.smartSupport': '智能客服',
    'feature.tickets': '工单系统',
    'feature.knowledgeBase': '知识库',
    'feature.multiChannel': '多渠道支持',
    'feature.courseCreate': '课程创建',
    'feature.learningTrack': '学习追踪',
    'feature.quiz': '互动测验',
    'feature.cert': '证书生成',
    'feature.leads': '线索管理',
    'feature.forecast': '销售预测',
    'feature.crm': 'CRM集成',
    'feature.autoFollow': '自动化跟进',
    'feature.ai': 'AI驱动',
    'feature.easyUI': '易用界面',
    'feature.security': '数据安全',
    'feature.updates': '持续更新',
    
    // 优点
    'pro.free': '完全免费',
    'pro.noCard': '无需信用卡',
    'pro.freeTier': '提供免费版本',
    'pro.payAsGo': '功能按需付费',
    'pro.openSource': '开源可自托管',
    'pro.community': '社区支持活跃',
    'pro.apiAccess': '提供API接口',
    'pro.easyIntegrate': '易于集成',
    'pro.noCode': '无需编程知识',
    'pro.quickStart': '上手快速',
    'pro.friendly': '界面友好',
    'pro.frequentUpdate': '更新频繁',
    
    // 缺点
    'con.subscription': '需要付费订阅',
    'con.noApi': '无API接口',
    'con.limits': '部分功能限制',
    'con.learningCurve': '学习曲线',
  },
  en: {
    // Navigation
    'nav.allTools': 'All Tools',
    'nav.favorites': 'Favorites',
    'nav.submit': 'Submit Tool',
    'nav.about': 'About',
    
    // Home
    'home.hero.title1': 'Discover the Best',
    'home.hero.title2': 'AI Tools',
    'home.hero.title3': 'for Your Projects',
    'home.hero.subtitle': 'Curated AI tools for indie developers, solopreneurs, and creators',
    'home.hero.search': 'Search {count} AI tools...',
    'home.hero.verified': 'Verified',
    'home.hero.indieMade': 'Indie Made',
    'home.hero.featured': 'Featured',
    'home.hero.free': 'Free',
    
    // Categories
    'categories.title': 'Browse by Category',
    'categories.subtitle': 'Choose your area of interest',
    'categories.tools': 'tools',
    
    // Tool Card
    'tool.verified': 'Verified',
    'tool.indie': 'Indie',
    'tool.featured': 'Featured',
    'tool.free': 'Free',
    'tool.perMonth': '/mo',
    
    // Tool Detail
    'toolDetail.backToList': 'Back to tools',
    'toolDetail.features': 'Core Features',
    'toolDetail.pros': 'Pros',
    'toolDetail.cons': 'Cons',
    'toolDetail.rating': 'User Rating',
    'toolDetail.pricing': 'Pricing',
    'toolDetail.basicInfo': 'Basic Info',
    'toolDetail.category': 'Category',
    'toolDetail.pricingModel': 'Pricing',
    'toolDetail.verifiedStatus': 'Verified',
    'toolDetail.indieStatus': 'Indie Made',
    'toolDetail.visitSite': 'Visit Site',
    'toolDetail.favorite': 'Favorite',
    'toolDetail.favorited': 'Favorited',
    'toolDetail.relatedTools': 'Related Tools',
    'toolDetail.alternatives': 'Alternatives',
    
    // Pricing
    'pricing.free': 'Free',
    'pricing.freemium': 'Freemium',
    'pricing.paid': 'Paid',
    'pricing.freeDesc': 'Completely free to use',
    'pricing.freemiumDesc': 'Free version available',
    'pricing.paidDesc': 'Paid subscription required',
    
    // Filter
    'filter.sort': 'Sort',
    'filter.sortFeatured': 'Featured',
    'filter.sortName': 'Name A-Z',
    'filter.sortPriceAsc': 'Price: Low to High',
    'filter.sortPriceDesc': 'Price: High to Low',
    'filter.found': '{count} tools found',
    'filter.clear': 'Clear filters',
    'filter.noResults': 'No tools found',
    
    // Pagination
    'pagination.prev': 'Previous',
    'pagination.next': 'Next',
    'pagination.page': 'Page {current} of {total}',
    
    // CTA
    'cta.title': 'Have a Tool to Share?',
    'cta.subtitle': 'Submit your AI tool and reach thousands of indie makers',
    'cta.button': 'Submit Tool',
    
    // Footer
    'footer.quickLinks': 'Quick Links',
    'footer.popularCategories': 'Popular Categories',
    'footer.copyright': '© 2026 ToolHunt. Made with ❤️ for indie hackers.',
    'footer.sitemap': 'Sitemap',
    
    // Favorites
    'favorites.title': 'My Favorites',
    'favorites.subtitle': 'Your favorite AI tools, saved locally',
    'favorites.empty': 'No favorites yet',
    'favorites.emptyHint': 'Click the favorite button on tool cards to add',
    'favorites.tip': '💡 Tip: Favorites are saved in your browser. Clearing browser data will remove them.',
    
    // 404
    'notFound.title': 'Page Not Found',
    'notFound.subtitle': 'Sorry, the page you are looking for does not exist',
    'notFound.home': 'Go Home',
    'notFound.browse': 'Browse Tools',
    
    // Error
    'error.title': 'Something went wrong',
    'error.subtitle': 'An error occurred while loading the page',
    'error.retry': 'Retry',
    'error.home': 'Go Home',
    
    // Navigation
    'nav.home': 'Home',
    
    // Basic
    'notVerified': 'Not Verified',
    'no': 'No',
    
    // Features
    'feature.codeGen': 'Code Generation',
    'feature.syntax': 'Syntax Highlighting',
    'feature.errorDetect': 'Error Detection',
    'feature.multiLang': 'Multi-language',
    'feature.taskManage': 'Task Management',
    'feature.collab': 'Collaboration',
    'feature.tracking': 'Progress Tracking',
    'feature.sync': 'Data Sync',
    'feature.aiGen': 'AI Generation',
    'feature.templates': 'Templates',
    'feature.preview': 'Live Preview',
    'feature.export': 'HD Export',
    'feature.chat': 'Smart Chat',
    'feature.taskExec': 'Task Execution',
    'feature.qa': 'Q&A',
    'feature.autoFlow': 'Auto Workflows',
    'feature.contentGen': 'Content Generation',
    'feature.seo': 'SEO Optimization',
    'feature.i18n': 'Multi-language',
    'feature.tpl': 'Templates',
    'feature.workflow': 'Workflow Automation',
    'feature.api': 'API Integration',
    'feature.trigger': 'Triggers',
    'feature.analytics': 'Analytics',
    'feature.videoGen': 'Video Generation',
    'feature.editing': 'Editing',
    'feature.subtitle': 'Subtitles',
    'feature.effects': 'Effects',
    'feature.tts': 'Text to Speech',
    'feature.audioEdit': 'Audio Editing',
    'feature.noise': 'Noise Reduction',
    'feature.format': 'Format Convert',
    'feature.autoMarket': 'Marketing Auto',
    'feature.dataAnalytics': 'Data Analytics',
    'feature.abTest': 'A/B Testing',
    'feature.channel': 'Multi-channel',
    'feature.aiDesign': 'AI Design',
    'feature.designTpl': 'Templates',
    'feature.collabDesign': 'Collaboration',
    'feature.exportDesign': 'Multi-format Export',
    'feature.aiWriting': 'AI Writing',
    'feature.grammar': 'Grammar Check',
    'feature.style': 'Style Adjust',
    'feature.writeTpl': 'Templates',
    'feature.litSearch': 'Literature Search',
    'feature.dataAnalysis': 'Data Analysis',
    'feature.citation': 'Citations',
    'feature.researchCollab': 'Collaboration',
    'feature.bizAnalytics': 'Analytics',
    'feature.reports': 'Reports',
    'feature.teamManage': 'Team Management',
    'feature.permissions': 'Permissions',
    'feature.smartSupport': 'Smart Support',
    'feature.tickets': 'Ticket System',
    'feature.knowledgeBase': 'Knowledge Base',
    'feature.multiChannel': 'Multi-channel',
    'feature.courseCreate': 'Course Creation',
    'feature.learningTrack': 'Learning Track',
    'feature.quiz': 'Quizzes',
    'feature.cert': 'Certificates',
    'feature.leads': 'Lead Management',
    'feature.forecast': 'Sales Forecast',
    'feature.crm': 'CRM Integration',
    'feature.autoFollow': 'Auto Follow-up',
    'feature.ai': 'AI Powered',
    'feature.easyUI': 'Easy Interface',
    'feature.security': 'Data Security',
    'feature.updates': 'Regular Updates',
    
    // Pros
    'pro.free': 'Completely Free',
    'pro.noCard': 'No Credit Card',
    'pro.freeTier': 'Free Tier',
    'pro.payAsGo': 'Pay As You Go',
    'pro.openSource': 'Open Source',
    'pro.community': 'Active Community',
    'pro.apiAccess': 'API Access',
    'pro.easyIntegrate': 'Easy Integration',
    'pro.noCode': 'No Code Required',
    'pro.quickStart': 'Quick Start',
    'pro.friendly': 'User Friendly',
    'pro.frequentUpdate': 'Frequent Updates',
    
    // Cons
    'con.subscription': 'Subscription Required',
    'con.noApi': 'No API',
    'con.limits': 'Feature Limits',
    'con.learningCurve': 'Learning Curve',
  }
};

// 获取翻译
export function t(key: string, locale: Locale = defaultLocale, params?: Record<string, string | number>): string {
  let text = translations[locale]?.[key] || translations[defaultLocale]?.[key] || key;
  
  if (params) {
    Object.entries(params).forEach(([k, v]) => {
      text = text.replace(`{${k}}`, String(v));
    });
  }
  
  return text;
}

// 分类名称翻译映射
export const categoryNames: Record<string, Record<Locale, string>> = {
  "all": { zh: "全部", en: "All" },
  "coding": { zh: "编程开发", en: "Coding" },
  "productivity": { zh: "效率工具", en: "Productivity" },
  "creative": { zh: "创意设计", en: "Creative" },
  "agents": { zh: "AI助手", en: "AI Agents" },
  "content": { zh: "内容创作", en: "Content" },
  "automation": { zh: "自动化", en: "Automation" },
  "video": { zh: "视频工具", en: "Video" },
  "audio": { zh: "音频工具", en: "Audio" },
  "marketing": { zh: "营销工具", en: "Marketing" },
  "design": { zh: "设计工具", en: "Design" },
  "writing": { zh: "写作工具", en: "Writing" },
  "research": { zh: "研究学习", en: "Research" },
  "business": { zh: "商业工具", en: "Business" },
  "support": { zh: "客服支持", en: "Support" },
  "education": { zh: "教育学习", en: "Education" },
  "sales": { zh: "销售工具", en: "Sales" }
};

// 获取分类名称
export function getCategoryName(categoryId: string, locale: Locale = defaultLocale): string {
  return categoryNames[categoryId]?.[locale] || categoryId;
}

// 标签名称翻译映射
export const tagNames: Record<string, Record<Locale, string>> = {
  "free": { zh: "免费", en: "Free" },
  "open-source": { zh: "开源", en: "Open Source" },
  "no-code": { zh: "无代码", en: "No-Code" },
  "api": { zh: "API", en: "API" },
  "chrome-extension": { zh: "Chrome扩展", en: "Chrome Extension" },
  "mobile": { zh: "移动端", en: "Mobile" },
  "self-hosted": { zh: "自托管", en: "Self-Hosted" },
  "enterprise": { zh: "企业版", en: "Enterprise" }
};

// 获取标签名称
export function getTagName(tagId: string, locale: Locale = defaultLocale): string {
  return tagNames[tagId]?.[locale] || tagId;
}

// 定价模式翻译
export const pricingLabels: Record<string, Record<Locale, { label: string; desc: string }>> = {
  "free": { zh: { label: "完全免费", desc: "无需付费即可使用" }, en: { label: "Free", desc: "No payment required" } },
  "freemium": { zh: { label: "免费增值", desc: "免费版可用，付费解锁更多" }, en: { label: "Freemium", desc: "Free tier with paid upgrades" } },
  "paid": { zh: { label: "付费工具", desc: "需要付费订阅" }, en: { label: "Paid", desc: "Subscription required" } }
};

// 获取定价标签
export function getPricingLabel(pricing: string, locale: Locale = defaultLocale): { label: string; desc: string } {
  return pricingLabels[pricing]?.[locale] || { label: pricing, desc: "" };
}