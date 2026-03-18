# SoloAI Tools - MVP 需求文档 v2.0

**项目名称**：SoloAI Tools  
**定位**：AI 工具导航站，专注 Indie Hackers / Solopreneurs  
**版本**：MVP v2.0  
**更新日期**：2026年3月18日  
**目标上线**：2周内完成开发并部署

---

## 📋 目录

1. [项目概述](#1-项目概述)
2. [目标用户](#2-目标用户)
3. [竞品分析](#3-竞品分析)
4. [功能需求](#4-功能需求)
5. [页面设计](#5-页面设计)
6. [数据模型](#6-数据模型)
7. [API 设计](#7-api-设计)
8. [技术架构](#8-技术架构)
9. [部署方案](#9-部署方案)
10. [SEO 策略](#10-seo-策略)
11. [变现模式](#11-变现模式)
12. [开发计划](#12-开发计划)
13. [测试验收](#13-测试验收)
14. [风险与应对](#14-风险与应对)

---

## 1. 项目概述

### 1.1 产品定位

一个**垂直细分**的 AI 工具导航网站，专门服务于：

- **Indie Hackers** - 独立开发者、创业者
- **Solopreneurs** - 个人创业者、自由职业者
- **AI Agents 探索者** - 寻找 AI 自动化工具的用户

### 1.2 核心差异化

| 特点 | 说明 |
|------|------|
| ✅ 精选导向 | 只收录 indie-friendly、低成本（≤$100/mo）的工具 |
| ✅ 真实验证 | Verified 徽章表示经过真实使用验证 |
| ✅ 价格透明 | 明确显示免费/付费/试用信息 |
| ✅ 快速搜索 | 秒级响应，精准过滤 |
| ✅ 本土友好 | 优先收录国内可用工具 |

### 1.3 MVP 范围

**包含 ✅**
- 工具展示与搜索
- 分类过滤
- 工具详情页
- 用户提交入口
- Featured 推广位

**不包含 ❌**
- 用户登录/注册
- 付费订阅功能
- 聊天推荐功能
- 多语言支持
- Newsletter 自动化

### 1.4 成功指标

| 指标 | MVP 目标 | 3个月目标 |
|------|----------|-----------|
| 收录工具 | 50-100 | 200+ |
| 月访客 (UV) | 1,000 | 5,000+ |
| 页面加载时间 | < 1.5s | < 1s |
| Featured 收入 | $0 | $100-300/月 |
| Affiliate 收入 | $0 | $50-200/月 |

---

## 2. 目标用户

### 2.1 用户画像

**画像 A：独立开发者 Alex**
- 年龄：25-35岁
- 职业：全栈开发 / 独立创业者
- 需求：快速找到开发效率工具，预算 $0-50/月
- 痛点：工具太多，不知道哪个好用

**画像 B：内容创作者 Sarah**
- 年龄：28-40岁
- 职业：自媒体 / 内容创作者
- 需求：AI 写作、设计、视频工具
- 痛点：想找免费/低成本的替代方案

**画像 C：电商卖家 Mike**
- 年龄：30-45岁
- 职业：跨境电商卖家
- 需求：营销自动化、客服 AI
- 痛点：需要性价比高的工具，避免踩坑

### 2.2 用户需求

| 需求类型 | 具体需求 | 优先级 |
|----------|----------|--------|
| 发现 | 找到适合我的 AI 工具 | P0 |
| 对比 | 比较不同工具的价格和功能 | P0 |
| 验证 | 确认工具真实可用、不是坑 | P0 |
| 提交 | 推荐好用的工具给其他人 | P1 |
| 收藏 | 保存感兴趣的工具 | P2 |

---

## 3. 竞品分析

### 3.1 主要竞品

| 网站 | 优势 | 劣势 | 差异化机会 |
|------|------|------|-----------|
| **There's An AI For That** | 工具最全、SEO强 | 太泛、无筛选 | 垂直细分、精选 |
| **Futurepedia** | 设计精美、社区活跃 | 功能复杂 | 简洁专注 |
| **Product Hunt AI** | 社区驱动、热度排序 | 非专属分类 | 价格透明 |
| **Toolify.ai** | 变现成熟 | 广告多、体验差 | 更清爽体验 |
| **TopAI.tools** | SEO优化好 | 内容浅 | 更深入评测 |

### 3.2 我们的差异化策略

1. **垂直细分** - 只做 indie-friendly 工具
2. **价格透明** - 明确显示成本信息
3. **本土友好** - 标注国内可用性
4. **简洁体验** - 无广告打扰，快速找到工具
5. **真实验证** - Verified 徽章增加信任

---

## 4. 功能需求

### 4.1 功能列表

| 功能模块 | 功能点 | 优先级 | 状态 |
|----------|--------|--------|------|
| **首页** | Hero + 搜索 | P0 | 🚧 开发中 |
| | 分类 Tab | P0 | 🚧 开发中 |
| | Featured 展示 | P1 | 📝 待开发 |
| | 工具卡片网格 | P0 | 🚧 开发中 |
| **工具列表** | 搜索功能 | P0 | 📝 待开发 |
| | 分类过滤 | P0 | 🚧 开发中 |
| | 价格过滤 | P1 | 📝 待开发 |
| | 分页 | P1 | 📝 待开发 |
| **工具详情** | 基本信息展示 | P0 | 🚧 开发中 |
| | 相关推荐 | P2 | 📝 待开发 |
| | Affiliate 跳转 | P0 | 📝 待开发 |
| **提交** | 提交表单 | P1 | 🚧 开发中 |
| | 表单验证 | P1 | 📝 待开发 |
| **管理** | 工具录入后台 | P1 | 📝 待开发 |
| | 提交审核 | P2 | 📝 待开发 |

### 4.2 用户故事

```
作为一名 独立开发者，
我想要 快速找到适合我预算的 AI 编程工具，
以便于 提高开发效率。

验收标准：
- 可以按分类过滤工具
- 可以看到每个工具的价格
- 搜索结果在 1 秒内返回
```

```
作为一名 内容创作者，
我想要 看到其他用户验证过的工具，
以便于 避免浪费时间试用差工具。

验收标准：
- Verified 徽章清晰可见
- 工具详情页显示验证信息
```

```
作为一名 工具开发者，
我想要 提交我的工具到导航站，
以便于 获得更多曝光。

验收标准：
- 提交表单简单易用
- 提交后有确认反馈
- 可以填写基本信息和联系方式
```

---

## 5. 页面设计

### 5.1 信息架构

```
首页 /
├── 全部工具 /tools
│   └── 工具详情 /tools/[slug]
├── 提交工具 /submit
├── 关于我们 /about
└── (后期) 分类页 /category/[slug]
```

### 5.2 页面布局

#### 首页 `/`

```
┌─────────────────────────────────────────────────────────┐
│  Header: Logo | 工具 | 提交 | 关于                      │
├─────────────────────────────────────────────────────────┤
│                                                         │
│   🎯 AI Tools for Indie Hackers                        │
│   为独立创业者精选的 AI 工具导航                          │
│                                                         │
│   ┌─────────────────────────────────────────────────┐  │
│   │ 🔍 搜索工具...                                    │  │
│   └─────────────────────────────────────────────────┘  │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  ⭐ Featured Tools (推广位)                             │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐      │
│  │     │ │     │ │     │ │     │ │     │ │     │      │
│  └─────┘ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘      │
├─────────────────────────────────────────────────────────┤
│  分类: All | Agents | Coding | Marketing | Design ... │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  🛠️ All Tools                                          │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐      │
│  │     │ │     │ │     │ │     │ │     │ │     │      │
│  └─────┘ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘      │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐      │
│  │     │ │     │ │     │ │     │ │     │ │     │      │
│  └─────┘ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘      │
│                                                         │
│  [加载更多]                                             │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  Footer: © 2026 SoloAI Tools | 提交工具 | 关于          │
└─────────────────────────────────────────────────────────┘
```

#### 工具详情页 `/tools/[slug]`

```
┌─────────────────────────────────────────────────────────┐
│  Header                                                 │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌────┐  Tool Name                           ✅ Verified│
│  │Logo│  简短描述                                        │
│  └────┘                                                 │
│                                                         │
│  💰 Free - $20/月    🏷️ coding, ide, ai               │
│                                                         │
│  ─────────────────────────────────────────────────────  │
│                                                         │
│  📝 详细描述                                             │
│                                                         │
│  这里是工具的详细介绍，包括主要功能、使用场景、           │
│  优缺点分析等...                                         │
│                                                         │
│  ─────────────────────────────────────────────────────  │
│                                                         │
│  🔗 访问工具 →                                          │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  相关工具推荐                                           │
│  ┌─────┐ ┌─────┐ ┌─────┐                               │
│  │     │ │     │ │     │                               │
│  └─────┘ └─────┘ └─────┘                               │
├─────────────────────────────────────────────────────────┤
│  Footer                                                 │
└─────────────────────────────────────────────────────────┘
```

#### 提交页 `/submit`

```
┌─────────────────────────────────────────────────────────┐
│  Header                                                 │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  📤 提交工具                                            │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │ 工具名称 *                                       │   │
│  └─────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────┐   │
│  │ 工具网址 *                                       │   │
│  └─────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────┐   │
│  │ 简短描述                                         │   │
│  └─────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────┐   │
│  │ 您的邮箱 (可选)                                  │   │
│  └─────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────┐   │
│  │ 补充说明                                         │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  [提交]                                                 │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  Footer                                                 │
└─────────────────────────────────────────────────────────┘
```

### 5.3 UI 组件规范

**配色方案（深色模式默认）**

```css
:root {
  --background: 0 0% 4%;        /* #0a0a0a */
  --foreground: 0 0% 98%;       /* #fafafa */
  --card: 0 0% 8%;              /* #141414 */
  --card-hover: 0 0% 10%;       /* #1a1a1a */
  --border: 0 0% 15%;           /* #262626 */
  --primary: 239 84% 67%;       /* #6366f1 indigo */
  --primary-foreground: 0 0% 98%;
  --accent: 142 76% 36%;        /* #22c55e green */
  --featured: 38 92% 50%;       /* #f59e0b amber */
  --muted: 0 0% 40%;
  --muted-foreground: 0 0% 60%;
}

/* 浅色模式 */
.light {
  --background: 0 0% 100%;
  --foreground: 0 0% 4%;
  --card: 0 0% 98%;
  --card-hover: 0 0% 95%;
  --border: 0 0% 90%;
}
```

**字体**

```css
/* 主字体 */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

/* 代码 */
font-family: 'JetBrains Mono', 'Fira Code', monospace;
```

**组件样式**

```tsx
// 工具卡片
<div className="group relative bg-card hover:bg-card-hover border border-border 
                rounded-xl p-4 transition-all duration-200 hover:shadow-lg">

// Verified 徽章
<span className="inline-flex items-center gap-1 text-xs text-accent">
  <CheckCircle className="w-3 h-3" />
  Verified
</span>

// Featured 徽章
<span className="inline-flex items-center gap-1 text-xs text-featured">
  <Star className="w-3 h-3" />
  Featured
</span>

// 价格标签
<span className="text-sm text-muted-foreground">
  {pricing === 'free' ? '🆓 Free' : 
   pricing === 'freemium' ? `💰 Free - $${maxPrice}/mo` : 
   `💰 $${minPrice}-${maxPrice}/mo`}
</span>
```

---

## 6. 数据模型

### 6.1 数据库选型

**Cloudflare D1**（SQLite 兼容）

- ✅ 免费额度：5GB 存储，500万行读/天
- ✅ 边缘部署：全球低延迟
- ✅ 与 Drizzle ORM 完美兼容
- ✅ 无服务器架构，零运维

### 6.2 表结构设计

#### tools 表

```sql
CREATE TABLE tools (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  
  -- 基本信息
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  url TEXT NOT NULL,
  description TEXT,
  short_desc TEXT,
  
  -- 分类与标签
  category TEXT NOT NULL,  -- 'agents', 'coding', 'marketing', 'design', 'productivity', 'automation', 'video', 'audio', 'writing', 'other'
  tags TEXT,               -- JSON array: ["ai", "code-editor", "productivity"]
  
  -- 定价信息
  pricing_model TEXT NOT NULL,  -- 'free', 'freemium', 'paid', 'trial'
  monthly_cost_min REAL DEFAULT 0,
  monthly_cost_max REAL DEFAULT 0,
  
  -- 状态标识
  is_verified INTEGER DEFAULT 0,
  is_featured INTEGER DEFAULT 0,
  is_indie INTEGER DEFAULT 0,
  is_active INTEGER DEFAULT 1,
  
  -- 媒体资源
  logo_url TEXT,
  screenshot_url TEXT,
  
  -- 变现相关
  affiliate_url TEXT,      -- 联盟链接
  affiliate_param TEXT,    -- 联盟参数名
  
  -- 元数据
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
  view_count INTEGER DEFAULT 0,
  click_count INTEGER DEFAULT 0
);

CREATE INDEX idx_tools_category ON tools(category);
CREATE INDEX idx_tools_pricing ON tools(pricing_model);
CREATE INDEX idx_tools_featured ON tools(is_featured);
CREATE INDEX idx_tools_active ON tools(is_active);
```

#### categories 表

```sql
CREATE TABLE categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  icon TEXT,               -- emoji 或 icon name
  description TEXT,
  sort_order INTEGER DEFAULT 0,
  tool_count INTEGER DEFAULT 0,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

-- 初始分类数据
INSERT INTO categories (name, slug, icon, sort_order) VALUES
('AI Agents', 'agents', '🤖', 1),
('Coding', 'coding', '💻', 2),
('Marketing', 'marketing', '📢', 3),
('Design', 'design', '🎨', 4),
('Productivity', 'productivity', '⚡', 5),
('Automation', 'automation', '🔄', 6),
('Video', 'video', '🎬', 7),
('Audio', 'audio', '🎵', 8),
('Writing', 'writing', '✍️', 9),
('Other', 'other', '📦', 10);
```

#### submissions 表

```sql
CREATE TABLE submissions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  
  -- 工具信息
  tool_name TEXT NOT NULL,
  tool_url TEXT NOT NULL,
  description TEXT,
  suggested_category TEXT,
  suggested_tags TEXT,      -- JSON array
  
  -- 提交者信息
  submitter_name TEXT,
  submitter_email TEXT,
  submitter_note TEXT,
  
  -- 审核状态
  status TEXT DEFAULT 'pending',  -- 'pending', 'approved', 'rejected'
  reviewed_at TEXT,
  reviewer_note TEXT,
  
  -- 元数据
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_submissions_status ON submissions(status);
```

### 6.3 Drizzle Schema

```typescript
// drizzle/schema.ts
import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

export const tools = sqliteTable("tools", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  slug: text("slug").unique().notNull(),
  url: text("url").notNull(),
  description: text("description"),
  shortDesc: text("short_desc"),
  category: text("category").notNull(),
  tags: text("tags"),
  pricingModel: text("pricing_model").notNull(),
  monthlyCostMin: real("monthly_cost_min").default(0),
  monthlyCostMax: real("monthly_cost_max").default(0),
  isVerified: integer("is_verified", { mode: "boolean" }).default(false),
  isFeatured: integer("is_featured", { mode: "boolean" }).default(false),
  isIndie: integer("is_indie", { mode: "boolean" }).default(false),
  isActive: integer("is_active", { mode: "boolean" }).default(true),
  logoUrl: text("logo_url"),
  screenshotUrl: text("screenshot_url"),
  affiliateUrl: text("affiliate_url"),
  affiliateParam: text("affiliate_param"),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP"),
  viewCount: integer("view_count").default(0),
  clickCount: integer("click_count").default(0),
});

export const categories = sqliteTable("categories", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  slug: text("slug").unique().notNull(),
  icon: text("icon"),
  description: text("description"),
  sortOrder: integer("sort_order").default(0),
  toolCount: integer("tool_count").default(0),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
});

export const submissions = sqliteTable("submissions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  toolName: text("tool_name").notNull(),
  toolUrl: text("tool_url").notNull(),
  description: text("description"),
  suggestedCategory: text("suggested_category"),
  suggestedTags: text("suggested_tags"),
  submitterName: text("submitter_name"),
  submitterEmail: text("submitter_email"),
  submitterNote: text("submitter_note"),
  status: text("status").default("pending"),
  reviewedAt: text("reviewed_at"),
  reviewerNote: text("reviewer_note"),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
});
```

---

## 7. API 设计

### 7.1 公开 API

#### 获取工具列表

```
GET /api/tools

Query Parameters:
- category: string (optional)
- pricing: string (optional) - 'free' | 'freemium' | 'paid'
- search: string (optional)
- page: number (default: 1)
- limit: number (default: 20)
- featured: boolean (optional)

Response:
{
  "tools": [
    {
      "id": 1,
      "name": "Cursor",
      "slug": "cursor",
      "shortDesc": "AI code editor for developers",
      "category": "coding",
      "pricingModel": "freemium",
      "monthlyCostMin": 0,
      "monthlyCostMax": 20,
      "isVerified": true,
      "isFeatured": false,
      "logoUrl": "/logos/cursor.png"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "totalPages": 5
  }
}
```

#### 获取工具详情

```
GET /api/tools/[slug]

Response:
{
  "id": 1,
  "name": "Cursor",
  "slug": "cursor",
  "url": "https://cursor.sh",
  "description": "...",
  "category": "coding",
  "tags": ["code-editor", "ai", "ide"],
  "pricingModel": "freemium",
  "monthlyCostMin": 0,
  "monthlyCostMax": 20,
  "isVerified": true,
  "logoUrl": "/logos/cursor.png",
  "relatedTools": [...]
}
```

#### 提交工具

```
POST /api/submit

Body:
{
  "toolName": "My Tool",
  "toolUrl": "https://mytool.com",
  "description": "A great AI tool",
  "suggestedCategory": "coding",
  "submitterEmail": "user@example.com",
  "submitterNote": "..."
}

Response:
{
  "success": true,
  "message": "提交成功，我们会尽快审核"
}
```

#### 获取分类列表

```
GET /api/categories

Response:
{
  "categories": [
    {
      "id": 1,
      "name": "AI Agents",
      "slug": "agents",
      "icon": "🤖",
      "toolCount": 15
    }
  ]
}
```

### 7.2 管理 API（后台使用）

```
POST   /api/admin/tools         # 创建工具
PUT    /api/admin/tools/[id]    # 更新工具
DELETE /api/admin/tools/[id]    # 删除工具
GET    /api/admin/submissions   # 获取提交列表
PUT    /api/admin/submissions/[id] # 审核提交
```

---

## 8. 技术架构

### 8.1 技术栈

| 层级 | 技术 | 版本 | 说明 |
|------|------|------|------|
| 框架 | Next.js | 15.x | App Router + RSC |
| 语言 | TypeScript | 5.x | 类型安全 |
| 样式 | Tailwind CSS | 3.4 | 原子化 CSS |
| 组件 | shadcn/ui | latest | 无头组件库 |
| 数据库 | Cloudflare D1 | - | SQLite 边缘数据库 |
| ORM | Drizzle ORM | 0.40+ | 类型安全查询 |
| 部署 | Cloudflare Pages | - | 边缘部署 |
| 图标 | Lucide React | latest | 开源图标库 |

### 8.2 项目结构

```
soloai-tools/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx                 # 首页
│   │   ├── globals.css
│   │   ├── tools/
│   │   │   ├── page.tsx             # 工具列表
│   │   │   └── [slug]/
│   │   │       └── page.tsx         # 工具详情
│   │   ├── submit/
│   │   │   └── page.tsx             # 提交页面
│   │   ├── about/
│   │   │   └── page.tsx             # 关于页面
│   │   └── api/
│   │       ├── tools/
│   │       │   ├── route.ts         # 工具列表 API
│   │       │   └── [slug]/route.ts  # 工具详情 API
│   │       ├── categories/
│   │       │   └── route.ts         # 分类 API
│   │       └── submit/
│   │           └── route.ts         # 提交 API
│   ├── components/
│   │   ├── ui/                      # shadcn 组件
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── ...
│   │   ├── layout/
│   │   │   ├── header.tsx
│   │   │   └── footer.tsx
│   │   ├── tools/
│   │   │   ├── tool-card.tsx
│   │   │   ├── tool-grid.tsx
│   │   │   ├── featured-section.tsx
│   │   │   └── search-bar.tsx
│   │   └── filters/
│   │       ├── category-tabs.tsx
│   │       └── price-filter.tsx
│   ├── lib/
│   │   ├── db.ts                    # 数据库连接
│   │   ├── utils.ts                 # 工具函数
│   │   └── constants.ts             # 常量定义
│   ├── types/
│   │   └── index.ts                 # 类型定义
│   └── data/
│       └── seed-tools.ts            # 初始数据
├── drizzle/
│   ├── schema.ts                    # Schema 定义
│   └── migrations/                  # 迁移文件
├── public/
│   ├── logos/                       # 工具 Logo
│   └── og-image.png                 # OG 图片
├── wrangler.toml                    # Cloudflare 配置
├── drizzle.config.ts                # Drizzle 配置
├── next.config.ts                   # Next.js 配置
├── tailwind.config.ts               # Tailwind 配置
└── package.json
```

### 8.3 核心依赖

```json
{
  "dependencies": {
    "next": "^15.2.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "drizzle-orm": "^0.40.0",
    "@libsql/client": "^0.14.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0",
    "class-variance-authority": "^0.7.0",
    "lucide-react": "^0.460.0"
  },
  "devDependencies": {
    "@cloudflare/next-on-pages": "^1.13.0",
    "wrangler": "^4.0.0",
    "drizzle-kit": "^0.30.0",
    "typescript": "^5",
    "tailwindcss": "^3.4.0",
    "postcss": "^8",
    "autoprefixer": "^10"
  }
}
```

---

## 9. 部署方案

### 9.1 Cloudflare Pages 配置

**wrangler.toml**

```toml
name = "soloai-tools"
compatibility_date = "2024-01-01"
compatibility_flags = ["nodejs_compat"]

[[d1_databases]]
binding = "DB"
database_name = "soloai-tools-db"
database_id = "xxx"  # 部署时生成

[build]
command = "npm run build"

[build.upload]
format = "service-worker"

[[kv_namespaces]]
binding = "CACHE"
id = "xxx"  # 可选，用于缓存
```

### 9.2 部署步骤

```bash
# 1. 安装依赖
npm install

# 2. 配置 Cloudflare
npx wrangler login

# 3. 创建 D1 数据库
npx wrangler d1 create soloai-tools-db

# 4. 更新 wrangler.toml 中的 database_id

# 5. 运行迁移
npm run db:migrate

# 6. 填充初始数据
npm run db:seed

# 7. 构建
npm run build

# 8. 部署
npx wrangler pages deploy .next
```

### 9.3 CI/CD 配置

**GitHub Actions**

```yaml
# .github/workflows/deploy.yml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - run: npm ci
      
      - run: npm run build
      
      - uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          command: pages deploy .next --project-name=soloai-tools
```

### 9.4 环境变量

```bash
# .env.local (本地开发)
DATABASE_URL="http://localhost:8787"

# Cloudflare D1 (生产环境)
# 在 Cloudflare Dashboard 配置
```

---

## 10. SEO 策略

### 10.1 技术 SEO

```tsx
// app/layout.tsx
export const metadata: Metadata = {
  title: {
    default: 'SoloAI Tools - AI Tools for Indie Hackers',
    template: '%s | SoloAI Tools'
  },
  description: 'Curated AI tools for indie developers, solopreneurs, and makers. Find the best AI tools for coding, marketing, design, and productivity.',
  keywords: ['AI tools', 'AI agents', 'indie hackers', 'solopreneurs', 'productivity'],
  openGraph: {
    title: 'SoloAI Tools',
    description: 'Curated AI tools for indie developers',
    url: 'https://soloai.tools',
    siteName: 'SoloAI Tools',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SoloAI Tools',
    description: 'Curated AI tools for indie developers',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}
```

### 10.2 动态 Meta 标签

```tsx
// app/tools/[slug]/page.tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const tool = await getToolBySlug(params.slug)
  
  return {
    title: `${tool.name} - AI Tool for ${tool.category}`,
    description: tool.description,
    openGraph: {
      title: tool.name,
      description: tool.shortDesc,
      images: [tool.logoUrl],
    },
  }
}
```

### 10.3 Sitemap

```tsx
// app/sitemap.ts
import { MetadataRoute } from 'next'
import { getAllTools } from '@/lib/db'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const tools = await getAllTools()
  
  const toolUrls = tools.map(tool => ({
    url: `https://soloai.tools/tools/${tool.slug}`,
    lastModified: new Date(tool.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))
  
  return [
    { url: 'https://soloai.tools', lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: 'https://soloai.tools/tools', lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: 'https://soloai.tools/submit', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: 'https://soloai.tools/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    ...toolUrls,
  ]
}
```

### 10.4 结构化数据

```tsx
// 工具详情页添加 JSON-LD
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Cursor",
  "description": "AI code editor for developers",
  "url": "https://cursor.sh",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "MacOS, Windows, Linux",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}
</script>
```

---

## 11. 变现模式

### 11.1 Affiliate 收入

**高佣金工具推荐**

| 工具 | 佣金率 | 客单价 | 月转化预估 | 潜在收益/月 |
|------|--------|--------|------------|-------------|
| Jasper | 25% | $49/mo | 5单 | $61 |
| Copy.ai | 30% | $36/mo | 5单 | $54 |
| Notion AI | - | $10/mo | 10单 | 低 |
| Zapier | 15% | $20/mo | 10单 | $30 |
| Make | 20% | $9/mo | 10单 | $18 |
| **预估合计** | - | - | - | **$100-200/月** |

### 11.2 Featured 推广位

**定价策略**

| 位置 | 价格/月 | 展示方式 |
|------|---------|----------|
| 首页 Hero | $200 | 大卡片展示 |
| 分类页顶部 | $100 | 置顶展示 |
| 普通列表 | $50 | Featured 徽章 |
| 详情页推荐 | $30 | 相关工具位 |

### 11.3 实现方式

```typescript
// Affiliate 链接处理
function getAffiliateUrl(tool: Tool): string {
  if (tool.affiliateUrl) return tool.affiliateUrl
  
  const base = new URL(tool.url)
  
  // 根据平台添加 affiliate 参数
  const affiliateParams: Record<string, string> = {
    'jasper.ai': 'via=soloai',
    'copy.ai': 'ref=soloai',
    'zapier.com': 'via=soloai',
  }
  
  const param = affiliateParams[base.hostname]
  if (param) {
    base.searchParams.set(param.split('=')[0], param.split('=')[1])
  }
  
  return base.toString()
}

// 点击统计
async function trackClick(toolId: number) {
  await db.update(tools)
    .set({ clickCount: sql`click_count + 1` })
    .where(eq(tools.id, toolId))
}
```

---

## 12. 开发计划

### 12.1 里程碑

```
Week 1 (Day 1-7): 核心功能
├── Day 1: 项目搭建 + 数据库配置
├── Day 2: UI 组件库 + 布局
├── Day 3: 首页 + 搜索组件
├── Day 4: 工具列表页 + 过滤
├── Day 5: 工具详情页
├── Day 6: 提交页面 + API
└── Day 7: 数据录入 50 个工具

Week 2 (Day 8-14): 完善 + 部署
├── Day 8: SEO 优化
├── Day 9: Cloudflare 配置 + 部署
├── Day 10: 测试 + Bug 修复
├── Day 11: 性能优化
├── Day 12-13: 更多工具录入 (至 100 个)
└── Day 14: 上线 + 提交搜索引擎
```

### 12.2 任务分解

#### Phase 1: 基础搭建 (Day 1-2)

- [ ] 初始化 Next.js 项目
- [ ] 配置 TypeScript + ESLint
- [ ] 配置 Tailwind CSS + shadcn/ui
- [ ] 设置 Drizzle ORM
- [ ] 创建数据库 Schema
- [ ] 运行迁移，创建表结构

#### Phase 2: 核心页面 (Day 3-5)

- [ ] Header + Footer 组件
- [ ] 首页 Hero + 搜索框
- [ ] 分类 Tab 组件
- [ ] 工具卡片组件
- [ ] 工具列表页 + 分页
- [ ] 工具详情页
- [ ] 相关推荐组件

#### Phase 3: 功能实现 (Day 6-7)

- [ ] 搜索功能 (前端)
- [ ] 分类过滤
- [ ] 价格过滤
- [ ] 提交表单
- [ ] 提交 API
- [ ] 点击统计

#### Phase 4: 数据填充 (Day 7-13)

- [ ] 准备工具数据模板
- [ ] 录入 50 个核心工具
- [ ] 准备 Logo 图片
- [ ] 录入至 100 个工具

#### Phase 5: SEO + 部署 (Day 8-14)

- [ ] Meta 标签优化
- [ ] Sitemap 生成
- [ ] 结构化数据
- [ ] Cloudflare Pages 配置
- [ ] D1 数据库设置
- [ ] 部署上线
- [ ] 提交 Google Search Console

---

## 13. 测试验收

### 13.1 功能测试

| 测试项 | 测试步骤 | 预期结果 | 状态 |
|--------|----------|----------|------|
| 首页加载 | 访问首页 | < 1.5s 加载完成 | ⬜ |
| 搜索功能 | 输入关键词搜索 | 显示匹配结果 | ⬜ |
| 分类过滤 | 点击分类 Tab | 显示对应分类工具 | ⬜ |
| 价格过滤 | 选择价格范围 | 正确过滤 | ⬜ |
| 工具详情 | 点击工具卡片 | 跳转到详情页 | ⬜ |
| 提交表单 | 填写并提交 | 显示成功消息 | ⬜ |
| Affiliate 链接 | 点击访问链接 | 正确跳转 + 统计 | ⬜ |
| 响应式 | 手机/平板访问 | 正确显示 | ⬜ |

### 13.2 性能测试

| 指标 | 目标 | 工具 |
|------|------|------|
| LCP | < 1.5s | Lighthouse |
| FID | < 100ms | Lighthouse |
| CLS | < 0.1 | Lighthouse |
| TTFB | < 500ms | WebPageTest |

### 13.3 兼容性测试

- [ ] Chrome (Desktop/Mobile)
- [ ] Safari (Desktop/Mobile)
- [ ] Firefox (Desktop)
- [ ] Edge (Desktop)

---

## 14. 风险与应对

### 14.1 技术风险

| 风险 | 影响 | 概率 | 应对措施 |
|------|------|------|----------|
| Cloudflare D1 限制 | 高 | 低 | 监控使用量，准备迁移方案 |
| Next.js 兼容问题 | 中 | 低 | 使用稳定版本，测试充分 |
| SEO 收录慢 | 中 | 高 | 主动提交，社交媒体推广 |

### 14.2 业务风险

| 风险 | 影响 | 概率 | 应对措施 |
|------|------|------|----------|
| 工具数据不足 | 高 | 中 | 提前准备 100+ 工具数据 |
| 流量不足 | 中 | 高 | SEO + 社交媒体 + Product Hunt |
| 变现困难 | 中 | 中 | 多元化收入来源 |

### 14.3 应对计划

1. **数据不足** - 提前 1 周准备工具数据，确保上线时有 100+ 工具
2. **流量不足** - 制定推广计划：Twitter、Product Hunt、Indie Hackers、Reddit
3. **技术问题** - 准备备用方案（Vercel 部署）

---

## 附录

### A. 初始工具数据

参考 `/docs/seed-tools.md`（待创建）

### B. 设计资源

- Logo: 待设计
- Favicon: 待设计
- OG Image: 待设计

### C. 第三方服务

| 服务 | 用途 | 费用 |
|------|------|------|
| Cloudflare | 托管 + 数据库 | 免费 |
| Namecheap | 域名 | $2/年 |
| Google Analytics | 数据分析 | 免费 |
| Google Search Console | SEO | 免费 |

---

**文档版本**: v2.0  
**最后更新**: 2026-03-18  
**状态**: 🚧 开发中

---

## 🚀 下一步行动

1. ✅ 需求文档已完成
2. ⬜ 配置 Cloudflare 部署环境
3. ⬜ 开始 Phase 1 开发
4. ⬜ 准备工具数据

**准备好开始了吗？**