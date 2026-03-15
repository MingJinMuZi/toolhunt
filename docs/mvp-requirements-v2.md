# MVP 需求文档（修订版）
**项目名称**：SoloAI Tools（Solopreneurs & Indie Makers AI 导航站）
**版本**：MVP v1.0
**文档日期**：2026年3月15日
**目标上线时间**：3-4 周（一人开发）

---

## 1. 项目概述
一个**垂直细分**的 AI 工具导航网站，专注 **Solopreneurs / Indie Makers + AI Agents**。

### 核心差异化
- 只收录 indie-friendly、低成本（≤$100/mo）工具
- 真实用户验证标签 + 简洁的信息展示
- 快速搜索 + 分类过滤
- 每周新工具精选
- 类似 Toolify.ai 的变现模式

### MVP 目标
- 收录 50-100 个高质量工具（后期由 AI 助手录入）
- 支持搜索 + 分类过滤 + 提交
- 部署到 Cloudflare（零服务器成本）
- 首月访客 1k+，可直接变现

### 不在 MVP 范围
- ❌ 用户登录/注册
- ❌ 付费订阅
- ❌ 聊天推荐功能
- ❌ 复杂 workflow 演示视频
- ❌ Newsletter 自动化发送
- ❌ 多语言

---

## 2. 目标用户
- Indie Hackers / Solopreneurs
- 预算敏感的独立开发者、内容创作者、电商卖家
- 每天想找"真正好用、不坑钱"的 AI Agents & 工具

---

## 3. 技术栈

| 层级 | 技术选型 | 备注 |
|------|---------|------|
| 框架 | Next.js 15 + TypeScript | App Router + RSC |
| 样式 | Tailwind CSS v3.4 + shadcn/ui | 深色模式优先 |
| 数据库 | Cloudflare D1 + Drizzle ORM | 免费，边缘部署 |
| 部署 | Cloudflare Pages | 零成本，全球CDN |
| AI | Groq API（可选，用于后续功能） | |

---

## 4. 系统架构
```
Next.js (App Router)
├── Server Components (静态生成)
├── API Routes (工具搜索、提交)
├── Drizzle ORM → D1 Database
└── Cloudflare Pages (部署)
```

---

## 5. 数据模型

### 5.1 tools 表（核心）
```sql
CREATE TABLE tools (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  url TEXT NOT NULL,
  description TEXT,
  short_desc TEXT,
  category TEXT,          -- 'agents', 'coding', 'marketing', 'ops', 'productivity'
  pricing_model TEXT,     -- 'free', 'freemium', 'paid'
  monthly_cost_min REAL,  -- 最低月费
  monthly_cost_max REAL,  -- 最高月费
  is_verified BOOLEAN DEFAULT false,
  is_featured BOOLEAN DEFAULT false,  -- 付费推广
  indie_made BOOLEAN DEFAULT false,
  tags TEXT,              -- JSON array
  logo_url TEXT,
  affiliate_url TEXT,     -- 联盟链接
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);
```

### 5.2 submissions 表
```sql
CREATE TABLE submissions (
  id INTEGER PRIMARY KEY,
  tool_name TEXT,
  url TEXT,
  description TEXT,
  submitter_email TEXT,
  submitter_note TEXT,
  status TEXT DEFAULT 'pending',  -- 'pending', 'approved', 'rejected'
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
```

### 5.3 categories 表（可选，用于管理分类）
```sql
CREATE TABLE categories (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  icon TEXT,
  sort_order INTEGER DEFAULT 0
);
```

---

## 6. 页面与路由

### 6.1 首页 `/`
- Hero 区域 + 搜索框
- 分类 Tab（Agents | Coding | Marketing | Ops | Productivity | Free）
- Featured 工具（付费推广位）
- Weekly New Tools
- 工具卡片网格

### 6.2 工具列表 `/tools`
- 搜索框
- 过滤器（分类、价格、验证状态）
- 工具卡片列表
- 分页

### 6.3 工具详情 `/tools/[slug]`
- 工具名称、Logo、描述
- 价格信息
- 标签
- 外部链接（带 affiliate 参数）
- 相关工具推荐

### 6.4 提交工具 `/submit`
- 简单表单
- 无需登录

### 6.5 关于页面 `/about`
- 项目介绍
- 联系方式

---

## 7. 核心功能

### 7.1 搜索功能
- 按名称搜索（模糊匹配）
- 按分类过滤
- 按价格范围过滤
- 按标签过滤

### 7.2 工具展示
- 卡片式布局
- 显示：名称、简短描述、价格、标签
- Verified 和 Indie Made 徽章

### 7.3 工具提交
- 表单提交
- 后台审核（MVP阶段手动）

### 7.4 UI 设计
- 深色模式默认
- 响应式设计
- 字体：Inter
- 简洁现代风格

---

## 8. 变现模式（参考 Toolify.ai）

### 8.1 MVP 阶段
- **Affiliate 链接**：工具链接带 affiliate 参数
- **Featured 位**：首页/分类页顶部推广位（$50-200/月）

### 8.2 后期扩展
- **Featured 标签**：付费获得 "Featured" 徽章
- **Sponsored 文章**：工具深度评测（付费）
- **Newsletter 赞助**：周报广告位

---

## 9. 非功能需求

| 指标 | 目标 |
|------|------|
| 加载速度 | LCP < 1.5s |
| 月成本 | < $5 |
| SEO | 基础 Meta + Sitemap |
| 可维护性 | TypeScript 全覆盖 |

---

## 10. 开发计划

| 周次 | 任务 |
|------|------|
| Week 1 | 项目搭建 + 数据模型 + UI 组件 |
| Week 2 | 首页 + 列表页 + 详情页 + 搜索 |
| Week 3 | 提交功能 + 50-100 工具录入 |
| Week 4 | 部署 + SEO + 优化 |