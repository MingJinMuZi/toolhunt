import { MetadataRoute } from 'next'
import { tools } from '@/data/tools'
import { categories } from '@/data/categories'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://toolhunt.ai'
  
  // 工具页面
  const toolPages = tools.map(tool => ({
    url: `${baseUrl}/tools/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))
  
  // 分类页面
  const categoryPages = categories.map(cat => ({
    url: `${baseUrl}/categories/${cat.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))
  
  // 标签页面
  const allTags = [...new Set(tools.flatMap(t => t.tags))]
  const tagPages = allTags.map(tag => ({
    url: `${baseUrl}/tags/${tag}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))
  
  // 定价页面
  const pricingPages = [
    { url: `${baseUrl}/pricing/free`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/pricing/freemium`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/pricing/paid`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.7 },
  ]
  
  return [
    // 核心页面
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${baseUrl}/tools`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/submit`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/sitemap-page`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.4 },
    
    // 工具详情页
    ...toolPages,
    
    // 分类页
    ...categoryPages,
    
    // 标签页
    ...tagPages,
    
    // 定价页
    ...pricingPages,
  ]
}