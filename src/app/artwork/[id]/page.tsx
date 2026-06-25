import { notFound } from 'next/navigation'
import Link from 'next/link'
import artworksData from '@/data/artworks.json'
import type { Artwork } from '@/types/artwork'
import ImageGallery from '@/components/ImageGallery'
import FavoriteButton from '@/components/FavoriteButton'
import ShareButtons from '@/components/ShareButtons'
import ArtworkCard from '@/components/ArtworkCard'

const artworks = artworksData as Artwork[]

export function generateStaticParams() {
  return artworks.map(({ id }) => ({ id }))
}

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}) {
  const artwork = artworks.find((a) => a.id === params.id)
  if (!artwork) return {}
  return {
    title: `${artwork.title} | Maia Pataridze Art`,
    description: artwork.description,
  }
}

export default function ArtworkPage({ params }: { params: { id: string } }) {
  const artwork = artworks.find((a) => a.id === params.id)
  if (!artwork) notFound()

  // Related: other available artworks (excluding this one), max 3
  const related = artworks
    .filter((a) => a.id !== artwork.id && a.status === 'available')
    .slice(0, 3)

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-warm-gray mb-12">
          <Link href="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          <span>—</span>
          <Link href="/gallery" className="hover:text-gold transition-colors">
            Gallery
          </Link>
          <span>—</span>
          <span className="text-charcoal">{artwork.title}</span>
        </nav>

        {/* Main layout: image | info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: image gallery */}
          <ImageGallery images={artwork.images} title={artwork.title} />

          {/* Right: artwork info */}
          <div className="flex flex-col justify-center lg:py-8">
            {/* Availability */}
            <div className="mb-6">
              {artwork.status === 'available' ? (
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  <span className="text-[10px] tracking-widest uppercase text-gold">
                    Available
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-warm-gray" />
                  <span className="text-[10px] tracking-widest uppercase text-warm-gray">
                    Sold
                  </span>
                </div>
              )}
            </div>

            {/* Title */}
            <h1 className="font-display text-4xl lg:text-5xl font-light text-charcoal leading-tight mb-4">
              {artwork.title}
            </h1>

            <div className="w-10 h-px bg-gold mb-8" />

            {/* Description */}
            <p className="text-warm-gray text-sm leading-relaxed mb-10">
              {artwork.description}
            </p>

            {/* Details table */}
            <div className="border-t border-sand pt-6 mb-10 space-y-4">
              {artwork.technique && (
                <div className="flex justify-between items-baseline">
                  <span className="text-[10px] tracking-widest uppercase text-warm-gray">
                    Technique
                  </span>
                  <span className="text-sm text-charcoal text-right max-w-[60%]">
                    {artwork.technique}
                  </span>
                </div>
              )}
              {artwork.dimensions && (
                <div className="flex justify-between items-baseline">
                  <span className="text-[10px] tracking-widest uppercase text-warm-gray">
                    Dimensions
                  </span>
                  <span className="text-sm text-charcoal">{artwork.dimensions}</span>
                </div>
              )}
              {artwork.year && (
                <div className="flex justify-between items-baseline">
                  <span className="text-[10px] tracking-widest uppercase text-warm-gray">
                    Year
                  </span>
                  <span className="text-sm text-charcoal">{artwork.year}</span>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 mb-8">
              {artwork.status === 'available' ? (
                <Link
                  href={`/contact?artwork=${encodeURIComponent(artwork.title)}`}
                  className="flex-1 text-center text-[10px] tracking-widest uppercase bg-charcoal text-cream py-3.5 hover:bg-warm-gray transition-colors duration-300"
                >
                  Enquire About This Work
                </Link>
              ) : (
                <div className="flex-1 text-center text-[10px] tracking-widest uppercase bg-sand text-warm-gray py-3.5 cursor-default">
                  This Work Is Sold
                </div>
              )}
              <FavoriteButton id={artwork.id} size="lg" />
            </div>

            {/* Share */}
            <div className="border-t border-sand pt-6">
              <ShareButtons title={artwork.title} />
            </div>
          </div>
        </div>

        {/* Back to gallery */}
        <div className="mt-20 border-t border-sand pt-10 text-center">
          <Link
            href="/gallery"
            className="text-[10px] tracking-widest uppercase text-warm-gray hover:text-gold transition-colors"
          >
            ← Back to Gallery
          </Link>
        </div>
      </div>

      {/* Related works */}
      {related.length > 0 && (
        <section className="bg-sand-light mt-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
            <p className="text-[10px] tracking-widest uppercase text-gold mb-5 text-center">
              Also Available
            </p>
            <h2 className="font-display text-3xl font-light text-charcoal text-center mb-12">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((a) => (
                <ArtworkCard key={a.id} artwork={a} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
