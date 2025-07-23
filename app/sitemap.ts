import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://seezntv.uz',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
} 