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