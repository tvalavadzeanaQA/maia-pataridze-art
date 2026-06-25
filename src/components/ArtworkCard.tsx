import Link from 'next/link'
import Image from 'next/image'
import type { Artwork } from '@/types/artwork'
import FavoriteButton from './FavoriteButton'

interface Props {
  artwork: Artwork
}

export default function ArtworkCard({ artwork }: Props) {
  return (
    <Link href={`/artwork/${artwork.id}`} className="group block">
      {/* Image container */}
      <div className="relative overflow-hidden bg-sand-light aspect-[3/4]">
        <Image
          src={artwork.images[0]}
          alt={artwork.title}
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Status badge */}
        <div className="absolute top-3 left-3">
          {artwork.status === 'available' ? (
            <span className="inline-flex items-center gap-1.5 text-[10px] tracking-widest uppercase bg-cream/90 text-charcoal px-3 py-1.5 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
              Available
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-[10px] tracking-widest uppercase bg-charcoal/80 text-cream px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cream/60 inline-block" />
              Sold
            </span>
          )}
        </div>

        {/* Favourite button */}
        <div className="absolute top-3 right-3">
          <FavoriteButton id={artwork.id} size="sm" />
        </div>

        {/* Hover overlay — slides up from bottom */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/75 via-charcoal/30 to-transparent p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <p className="font-display text-cream text-xl font-light leading-tight">
            {artwork.title}
          </p>
          {artwork.technique && (
            <p className="text-cream/70 text-xs mt-1 tracking-wide">{artwork.technique}</p>
          )}
        </div>
      </div>

      {/* Card meta */}
      <div className="mt-4 px-0.5">
        <h3 className="font-display text-lg text-charcoal leading-snug group-hover:text-gold transition-colors duration-300">
          {artwork.title}
        </h3>
        <div className="flex items-center justify-between mt-1">
          {artwork.dimensions && (
            <p className="text-warm-gray text-xs">{artwork.dimensions}</p>
          )}
          {artwork.year && (
            <p className="text-warm-gray text-xs">{artwork.year}</p>
          )}
        </div>
      </div>
    </Link>
  )
}
