import type { MetadataRoute } from 'next'
import { ALL_PROJECTS } from '@/lib/data/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rahuljangir.zynetechs.com'

  // Standard routes
  const routes = ['', '/about', '/projects', '/services', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic project routes
  const projectRoutes = ALL_PROJECTS.map((project) => ({
    url: `${baseUrl}/projects/${project._id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...routes, ...projectRoutes]
}
