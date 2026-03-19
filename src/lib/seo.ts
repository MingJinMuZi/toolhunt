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