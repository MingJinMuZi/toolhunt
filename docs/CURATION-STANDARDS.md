# ToolHunt - AI工具收录标准与SEO优化方案

> 制定筛选标准、优化分类、SEO友好网站结构

---

## 一、AI工具收录筛选标准

### 1.1 核心筛选原则

```
✅ 必须满足以下条件才能收录：

1. 真实存在：工具必须有可访问的官网/落地页
2. AI核心：AI是工具的核心功能，而非附加功能
3. 可用性：普通用户可以注册使用（非纯内部工具）
4. 内容合规：不涉及违法、欺诈、恶意内容
```

### 1.2 质量评分标准

| 维度 | 权重 | 评分标准 |
|------|------|----------|
| **创新性** | 25% | 是否有独特价值？是否只是套壳？ |
| **可用性** | 25% | 是否稳定运行？用户体验如何？ |
| **热度** | 20% | 社交媒体讨论、用户数量 |
| **更新频率** | 15% | 最近是否有更新？是否维护中？ |
| **性价比** | 15% | 定价是否合理？免费版是否够用？ |

### 1.3 收录优先级

```
P0 - 必须收录：
- 知名AI产品（ChatGPT, Claude, Midjourney等）
- 各领域头部产品
- Product Hunt获奖产品

P1 - 优先收录：
- 独立开发者产品（indieMade: true）
- 开源且有活跃维护的项目
- 有真实用户好评的产品

P2 - 正常收录：
- 功能完整的AI工具
- 有正规官网的产品
- 定价透明的工具

P3 - 观察中：
- 刚上线的新产品
- Beta/内测阶段的产品
- 功能单一的套壳产品

❌ 不收录：
- 无法访问的网站
- 纯营销页面无实际产品
- 涉及违法内容
- 明显的欺诈产品
```

### 1.4 信息完整性要求

```typescript
// 必填字段
{
  name: string;        // 工具名称
  slug: string;        // URL友好标识
  url: string;         // 官网链接
  description: string; // 详细描述（>50字）
  shortDesc: string;   // 简短描述（<30字）
  category: string;    // 主分类
  pricingModel: string;// 定价模式
}

// 推荐字段
{
  tags: string[];      // 标签（3-5个）
  logoUrl: string;     // Logo图片
  monthlyCostMin: number;
  monthlyCostMax: number;
}

// 标识字段
{
  isVerified: boolean; // 已验证可用
  isFeatured: boolean; // 精选推荐
  indieMade: boolean;  // 独立开发
}
```

---

## 二、分类优化方案

### 2.1 当前分类（14个）

| 分类 | 数量 | 问题 |
|------|------|------|
| agents | 15 | 合理 |
| coding | 30 | 可能过细，包含API/DB |
| marketing | 22 | 包含图片/视频，混淆 |
| productivity | 23 | 太宽泛 |
| automation | 14 | 合理 |
| writing | 15 | 与marketing有重叠 |
| audio | 15 | 合理 |
| video | 15 | 合理 |
| design | 17 | 与marketing有重叠 |
| support | 10 | 合理 |
| research | 8 | 合理 |
| education | 8 | 合理 |
| sales | 8 | 合理 |

### 2.2 优化后分类（10个）

```
核心分类（按用户场景）：

1. 🤖 AI Agents        - AI助手、智能体平台
2. 💻 Coding           - 开发工具、API、数据库
3. ✍️ Content          - 写作、营销内容、SEO
4. 🎨 Creative         - 图片、视频、音频、设计
5. ⚡ Productivity     - 效率工具、笔记、会议
6. 🔄 Automation       - 自动化、集成、工作流
7. 💼 Business         - 销售、客服、营销工具
8. 🔬 Research         - 研究、学习、教育
9. 🛠️ Developer Tools  - API、SDK、基础设施
10. 📱 Lifestyle       - 生活、娱乐、个人
```

### 2.3 分类合并方案

| 原分类 | 合并到 | 说明 |
|--------|--------|------|
| marketing | Content | 营销内容创作 |
| writing | Content | 写作工具 |
| audio | Creative | 音频创作 |
| video | Creative | 视频创作 |
| design | Creative | 设计工具 |
| support | Business | 客服支持 |
| sales | Business | 销售工具 |
| education | Research | 教育学习 |

### 2.4 标签系统（辅助分类）

```typescript
// 功能标签
const functionTags = [
  "chatbot", "code-generation", "image-gen", "video-gen",
  "audio-gen", "writing", "translation", "summarization",
  "automation", "analysis", "search", "research"
];

// 场景标签
const scenarioTags = [
  "developer", "marketer", "designer", "writer",
  "researcher", "student", "founder", "enterprise"
];

// 特性标签
const featureTags = [
  "free", "open-source", "no-code", "api",
  "chrome-extension", "mobile", "self-hosted"
];
```

---

## 三、SEO优化网站结构

### 3.1 URL结构设计

```
基础结构：
/
├── /                           # 首页
├── /tools                      # 所有工具
├── /tools/[slug]               # 工具详情页
├── /categories/[category]      # 分类页
├── /tags/[tag]                 # 标签页
├── /pricing/free               # 免费工具
├── /pricing/freemium           # 免费增值
├── /pricing/paid               # 付费工具
├── /featured                   # 精选推荐
├── /indie                      # 独立开发
├── /new                        # 新上线
├── /about                      # 关于我们
├── /submit                     # 提交工具
└── /blog                       # 博客（可选）
```

### 3.2 SEO关键页面

#### 首页 (/)
```
Title: ToolHunt - 发现最佳AI工具 | AI工具导航站
Description: 发现和比较200+最佳AI工具。涵盖AI助手、编程、写作、设计等领域。每日更新，精选推荐。
Keywords: AI工具, AI导航, ChatGPT替代, AI软件, 人工智能工具

H1: 发现最佳AI工具
H2: 热门分类
H2: 精选工具
H2: 最新上线
```

#### 分类页 (/categories/[category])
```
Title: 最佳[分类名]AI工具 - 2026精选 | ToolHunt
Description: 发现最佳[分类名]AI工具。比较[X]款工具的定价、功能和用户评价，帮你找到最适合的工具。
Example: 最佳编程AI工具 - 2026精选 | ToolHunt

H1: 最佳[分类名]AI工具
H2: 工具列表
H3: 每个工具卡片
```

#### 工具详情页 (/tools/[slug])
```
Title: [工具名] - [简短描述] | ToolHunt
Description: [工具名]是[分类]领域AI工具。[详细描述]。查看定价、功能和替代方案。
Example: Cursor - AI编程编辑器 | ToolHunt

H1: [工具名]
H2: 简介
H2: 主要功能
H2: 定价
H2: 用户评价
H2: 替代方案
```

### 3.3 结构化数据 (Schema.org)

```json
// 工具详情页结构化数据
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Cursor",
  "description": "AI编程编辑器",
  "url": "https://cursor.com",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Windows, macOS, Linux",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "1000"
  }
}
```

### 3.4 内链策略

```
首页 → 分类页 → 工具详情页
工具详情页 → 相关工具（同分类）
工具详情页 → 替代方案（竞品）
分类页 → 热门工具
标签页 → 相关工具
```

### 3.5 Sitemap结构

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- 首页 - 每日更新 -->
  <url>
    <loc>https://toolhunt.ai/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- 分类页 - 每周更新 -->
  <url>
    <loc>https://toolhunt.ai/categories/coding</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- 工具详情页 - 每月更新 -->
  <url>
    <loc>https://toolhunt.ai/tools/cursor</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

---

## 四、实施计划

### 4.1 第一阶段：数据优化

- [ ] 整理现有200个工具的分类
- [ ] 添加缺失的标签
- [ ] 优化描述文案（SEO友好）
- [ ] 添加结构化数据

### 4.2 第二阶段：页面优化

- [ ] 创建分类页 (/categories/[category])
- [ ] 创建标签页 (/tags/[tag])
- [ ] 创建定价筛选页 (/pricing/*)
- [ ] 优化工具详情页

### 4.3 第三阶段：SEO技术

- [ ] 生成sitemap.xml
- [ ] 添加robots.txt
- [ ] 配置meta标签
- [ ] 添加结构化数据
- [ ] 配置Open Graph

---

_创建时间: 2026-03-19_
_项目: ToolHunt_