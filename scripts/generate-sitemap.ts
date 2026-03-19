// sitemap.xml 生成脚本
// 运行: npx ts-node scripts/generate-sitemap.ts

import { tools } from '../src/data/tools';
import { categories } from '../src/data/categories';

const SITE_URL = 'https://toolhunt.ai';

interface SitemapUrl {
  loc: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  lastmod?: string;
}

function generateSitemap(): string {
  const urls: SitemapUrl[] = [];

  // 首页
  urls.push({
    loc: SITE_URL,
    changefreq: 'daily',
    priority: 1.0
  });

  // 分类页
  categories.forEach(category => {
    urls.push({
      loc: `${SITE_URL}/categories/${category.id}`,
      changefreq: 'weekly',
      priority: 0.9
    });
  });

  // 定价筛选页
  const pricingPages = ['free', 'freemium', 'paid', 'open-source'];
  pricingPages.forEach(pricing => {
    urls.push({
      loc: `${SITE_URL}/pricing/${pricing}`,
      changefreq: 'weekly',
      priority: 0.8
    });
  });

  // 特色页
  urls.push({
    loc: `${SITE_URL}/featured`,
    changefreq: 'weekly',
    priority: 0.8
  });

  urls.push({
    loc: `${SITE_URL}/indie`,
    changefreq: 'weekly',
    priority: 0.8
  });

  // 工具详情页
  tools.forEach(tool => {
    urls.push({
      loc: `${SITE_URL}/tools/${tool.slug}`,
      changefreq: 'monthly',
      priority: 0.7
    });
  });

  // 静态页面
  urls.push({
    loc: `${SITE_URL}/about`,
    changefreq: 'monthly',
    priority: 0.5
  });

  urls.push({
    loc: `${SITE_URL}/submit`,
    changefreq: 'monthly',
    priority: 0.5
  });

  // 生成XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority.toFixed(1)}</priority>
  </url>`).join('\n')}
</urlset>`;

  return xml;
}

// 导出函数供其他模块使用
export { generateSitemap };

// 如果直接运行此脚本
if (require.main === module) {
  const sitemap = generateSitemap();
  console.log(sitemap);
}