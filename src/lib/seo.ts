// SEO配置

export const siteConfig = {
  name: "ToolHunt",
  description: "发现最佳AI工具 - AI工具导航站",
  url: "https://toolhunt.ai",
  ogImage: "https://toolhunt.ai/og.png",
  links: {
    twitter: "https://twitter.com/toolhunt",
    github: "https://github.com/MingJinMuZi/toolhunt"
  }
};

// 首页SEO
export const homeSEO = {
  title: "ToolHunt - 发现最佳AI工具 | AI工具导航站",
  description: "发现和比较200+最佳AI工具。涵盖AI助手、编程、写作、设计等领域。每日更新，精选推荐。帮你找到最适合的AI工具。",
  keywords: "AI工具, AI导航, ChatGPT替代, AI软件, 人工智能工具, AI工具推荐, AI工具大全"
};

// 分类页SEO模板
export const categorySEO = {
  titleTemplate: (category: string, count: number) => 
    `最佳${category}AI工具 - ${count}款精选 | ToolHunt`,
  descriptionTemplate: (category: string, description: string, count: number) =>
    `发现最佳${category}AI工具。${description}。比较${count}款工具的功能、定价和用户评价，帮你找到最适合的工具。`
};

// 工具详情页SEO模板
export const toolSEO = {
  titleTemplate: (name: string, shortDesc: string) =>
    `${name} - ${shortDesc} | ToolHunt`,
  descriptionTemplate: (name: string, category: string, description: string) =>
    `${name}是${category}领域的AI工具。${description}。查看定价、功能详情和替代方案。`
};

// 生成结构化数据
export function generateToolSchema(tool: {
  name: string;
  description: string;
  url: string;
  pricingModel: string;
  monthlyCostMin?: number;
  monthlyCostMax?: number;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": tool.name,
    "description": tool.description,
    "url": tool.url,
    "applicationCategory": getCategorySchema(tool.category),
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": tool.monthlyCostMin || 0,
      "priceCurrency": "USD",
      "priceValidUntil": new Date().getFullYear() + "-12-31"
    }
  };
}

function getCategorySchema(category: string): string {
  const mapping: Record<string, string> = {
    "agents": "CommunicationApplication",
    "coding": "DeveloperApplication",
    "content": "BusinessApplication",
    "creative": "DesignApplication",
    "productivity": "BusinessApplication",
    "automation": "BusinessApplication",
    "business": "BusinessApplication",
    "research": "EducationalApplication",
    "developer-tools": "DeveloperApplication",
    "lifestyle": "LifestyleApplication"
  };
  return mapping[category] || "SoftwareApplication";
}

// 生成面包屑结构化数据
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

// 生成网站结构化数据
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.name,
    "url": siteConfig.url,
    "description": siteConfig.description,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteConfig.url}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
}

// 生成FAQ结构化数据
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// 生成AggregateRating结构化数据
export function generateAggregateRatingSchema(params: {
  name: string;
  ratingValue: number;
  ratingCount: number;
  bestRating?: number;
  worstRating?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "itemReviewed": {
      "@type": "SoftwareApplication",
      "name": params.name
    },
    "ratingValue": params.ratingValue,
    "ratingCount": params.ratingCount,
    "bestRating": params.bestRating || 5,
    "worstRating": params.worstRating || 1
  };
}

// 生成Organization结构化数据
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.name,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/og.png`,
    "sameAs": [
      siteConfig.links.twitter,
      siteConfig.links.github
    ],
    "description": siteConfig.description
  };
}

// 默认FAQ数据
export const defaultFAQs = [
  {
    question: "ToolHunt是什么？",
    answer: "ToolHunt是一个精心策划的AI工具导航站，帮助独立开发者、创业者和创作者发现最佳AI工具。我们收录了400+工具，涵盖编程、设计、写作、营销等领域。"
  },
  {
    question: "工具是如何被收录的？",
    answer: "我们通过人工审核的方式收录工具。每个工具都会经过质量评估，包括功能完整性、用户体验、更新频率等维度。用户也可以提交工具申请收录。"
  },
  {
    question: "如何评价一个工具？",
    answer: "在工具详情页，你可以点击星星进行评分。评分数据存储在你的浏览器本地，帮助我们改进推荐算法。"
  },
  {
    question: "收藏功能是如何工作的？",
    answer: "收藏数据存储在你的浏览器localStorage中。这意味着数据不会同步到其他设备，清除浏览器数据会丢失收藏记录。未来我们会添加账户系统支持云同步。"
  },
  {
    question: "如何提交我的AI工具？",
    answer: "点击导航栏的「提交工具」按钮，填写工具名称、描述、URL等信息。我们会在1-3个工作日内审核并回复。"
  },
  {
    question: "ToolHunt支持多语言吗？",
    answer: "是的，目前支持中文和英文。点击导航栏的语言切换按钮即可切换。更多语言支持正在开发中。"
  }
];