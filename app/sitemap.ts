import type { MetadataRoute } from 'next'
import { ALL_PROJECTS } from '@/lib/data/projects'
import { BLOG_POSTS } from '@/lib/data/blog'
import { SITE_URL } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL

  // Standard routes
  // Money pages (home, services, contact) get the highest priority
  const priorities: Record<string, number> = { '': 1, '/services': 0.9, '/contact': 0.9, '/projects': 0.8, '/about': 0.7, '/blog': 0.6 }
  const routes = Object.entries(priorities).map(([route, priority]) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority,
  }))

  // Dynamic project routes
  const projectRoutes = ALL_PROJECTS.map((project) => ({
    url: `${baseUrl}/projects/${project._id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  return [...routes, ...projectRoutes, ...blogRoutes]
}
