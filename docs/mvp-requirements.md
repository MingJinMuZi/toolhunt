# MVP 需求文档
**项目名称**：SoloAI Tools（Solopreneurs & Indie Makers AI 导航站）
**版本**：MVP v1.0
**文档日期**：2026年3月
**目标上线时间**：4-6 周（一人开发）

### 1. 项目概述
一个**垂直细分**的 AI 工具导航网站，专注 **Solopreneurs / Indie Makers + AI Agents**。
核心差异化：
- 首页大聊天框（"Tell me your solo business & budget" → 实时推荐工具）
- 真实用户验证标签 + 成本计算器
- 只收录 indie-friendly、低成本（≤$100/mo）工具
- 每周新工具精选

**MVP 目标**：
- 收录 100 个高质量工具
- 支持智能推荐 + 搜索 + 提交
- 部署到 Cloudflare（零服务器成本）
- 首月访客 1k+，可直接接 affiliate 变现

**不在 MVP 范围**（v2 再做）：用户登录、付费订阅、复杂 workflow 演示视频、newsletter 自动化发送、多语言。

### 2. 目标用户
- Indie Hackers / Solopreneurs（Reddit r/indiehackers、Product Hunt 用户）
- 预算敏感的独立开发者、内容创作者、电商卖家
- 每天想找"真正好用、不坑钱"的 AI Agents & 工具

### 3. 技术栈（严格按你要求 + Cloudflare 原生优化）
- **框架**：Next.js 15（App Router + React Server Components + Server Actions）+ TypeScript
- **样式**：Tailwind CSS v4 + shadcn/ui（组件库，复制即用）
- **数据库**：Cloudflare D1（SQLite，全球边缘部署，免费额度足够）+ Drizzle ORM（类型安全查询）
- **AI 聊天**：Groq API（Llama-3.1-70B 或 Mixtral，超快超便宜）+ Vercel AI SDK（可选，流式输出）
- **部署**：Cloudflare Workers（使用 OpenNext adapter）或 Cloudflare Pages + @cloudflare/next-on-pages（均原生支持）
- **其他**：
  - Wrangler CLI（本地开发 + D1）
  - ESLint + Prettier + Husky
  - GitHub Actions（CI/CD 自动部署）
  - 环境变量：Cloudflare Secrets（GROQ_API_KEY、D1 绑定）

**为什么这个栈最优**（2026 年最新实践）：
- Cloudflare Workers + OpenNext 已完整支持 Next.js 15 全特性（SSR、Server Actions、Partial Prerendering）。
- D1 + Drizzle 是 Cloudflare 原生推荐，无需额外付费数据库。
- Groq 延迟 <300ms，完美做实时推荐。

### 4. 系统架构
```
Next.js (App Router)
├── Server Components / Server Actions
├── API Routes (app/api/)
├── Drizzle ORM → D1 Database (tools, submissions)
├── Groq API (chat recommendation)
└── Cloudflare Workers / Pages (部署)
```

### 5. 数据模型（D1 Schema）
```sql
-- tools 表（核心）
CREATE TABLE tools (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  url TEXT NOT NULL,
  description TEXT,
  short_desc TEXT,
  category TEXT, -- 'agents', 'coding', 'marketing', 'ops', 'free'
  monthly_cost TEXT, -- 'Free' / '$0-10' / '$10-50' 等
  is_verified BOOLEAN DEFAULT false,
  indie_made BOOLEAN DEFAULT false,
  tags TEXT, -- JSON array
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

-- submissions 表（用户提交审核）
CREATE TABLE submissions (
  id INTEGER PRIMARY KEY,
  tool_name TEXT,
  url TEXT,
  description TEXT,
  submitted_by TEXT, -- 简单 email 或 IP
  status TEXT DEFAULT 'pending'
);
```

### 6. 页面与路由（App Router）
- `/`（首页）
  - Hero + 大聊天框（聊天推荐）
  - Weekly Top 5 Agents
  - 分类 Tab（Agents | Coding | Marketing | Ops | Free Only）
  - 工具卡片网格（响应式）

- `/tools`（列表页）
  - 搜索 + 过滤（category、cost、verified）
  - 无限滚动 / 分页

- `/tools/[slug]`（详情页）
  - 工具信息 + 成本计算器（简单表单）
  - Verified 徽章 + "Indie Made"
  - 真实使用案例（MVP 用 Markdown 静态）

- `/submit`（提交工具页）
  - 表单（Server Action 直接插入 submissions 表）

- `/api/chat`（POST）
  - 接收用户 prompt → 调用 Groq → 返回 3 个工具推荐 + 理由

### 7. 核心功能需求（MVP）
1. **智能聊天推荐**（最亮点）
   - 输入："I'm building a SaaS newsletter, budget under $20/mo"
   - 输出：3 个工具 + 为什么适合 + 链接（流式输出）

2. **工具列表 & 搜索**
   - Drizzle 查询，支持模糊搜索 + 过滤
   - 卡片显示：名称、短描述、cost、verified 标签

3. **工具提交审核**
   - Server Action 插入数据库，管理员后台（MVP 用 D1 手动查或简单 /admin 页）

4. **UI 要求**（Tailwind + shadcn）
   - 深色模式优先（indie hacker 爱）
   - 响应式（手机优先）PC端
   - 组件：Button、Card、Input、Select、Badge、Dialog（聊天弹窗或嵌入）
   - 字体：Inter + JetBrains Mono（代码感）

5. **性能 & SEO**
   - Partial Prerendering（列表页静态 + 聊天动态）
   - Meta tags + Open Graph
   - sitemap.xml（Next.js 自动生成）

### 8. 非功能需求
- **加载速度**：LCP < 1.5s（Cloudflare 边缘缓存）
- **成本**：MVP 月费用 < $5（D1 + Groq 免费额度够用）
- **安全**：环境变量加密，D1 Row Level Security（后期）
- **可维护**：TypeScript 全覆盖，Drizzle 类型生成