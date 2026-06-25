export interface Artwork {
  id: string
  title: string
  description: string
  status: 'available' | 'sold'
  images: string[]
  video?: string
  dimensions?: string
  year?: string
  technique?: string
}
