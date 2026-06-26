import { MetadataRoute } from 'next'
import artworksData from '@/data/artworks.json'
import type { Artwork } from '@/types/artwork'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://maia-pataridze-art.vercel.app'
  const artworks = artworksData as Artwork[]

  // სტატიკური გვერდები
  const routes = ['', '/gallery', '/about', '/contact', '/favourites'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // დინამიური გვერდები თითოეული ნამუშევრისთვის
  const artworkRoutes = artworks.map((artwork) => ({
    url: `${baseUrl}/artwork/${artwork.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...routes, ...artworkRoutes]
}