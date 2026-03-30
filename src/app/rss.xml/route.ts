import { tools } from "@/data/tools";
import { categories } from "@/data/categories";

// 静态导出配置
export const dynamic = "force-static";

export async function GET() {
  const baseUrl = "https://toolhunt.ai";
  const now = new Date().toUTCString();

  // 获取最近30个工具
  const recentTools = tools.slice(-30).reverse();

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>ToolHunt - 最新AI工具</title>
    <link>${baseUrl}</link>
    <description>发现最新AI工具，专为独立开发者、创业者和创作者打造</description>
    <language>zh-CN</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    
    ${recentTools
      .map((tool) => {
        const category = categories.find((c) => c.id === tool.category);
        const pricing =
          tool.pricingModel === "free"
            ? "免费"
            : `$${tool.monthlyCostMin}/月`;

        return `
    <item>
      <title>${tool.name} - ${tool.shortDesc}</title>
      <link>${baseUrl}/tools/${tool.slug}</link>
      <guid isPermaLink="true">${baseUrl}/tools/${tool.slug}</guid>
      <description><![CDATA[${tool.description}]]></description>
      <category>${category?.label || tool.category}</category>
      <pubDate>${now}</pubDate>
      ${tool.tags.map((tag) => `<category>${tag}</category>`).join("\n      ")}
    </item>`;
      })
      .join("")}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}