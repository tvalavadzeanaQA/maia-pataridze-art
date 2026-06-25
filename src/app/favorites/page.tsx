'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import artworksData from '@/data/artworks.json'
import type { Artwork } from '@/types/artwork'
import { getFavorites, EVENT_NAME } from '@/lib/favorites'
import ArtworkCard from '@/components/ArtworkCard'

const artworks = artworksData as Artwork[]

export default function FavoritesPage() {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setFavoriteIds(getFavorites())

    // Re-sync whenever a FavoriteButton toggles
    const refresh = () => setFavoriteIds(getFavorites())
    window.addEventListener(EVENT_NAME, refresh)
    return () => window.removeEventListener(EVENT_NAME, refresh)
  }, [])

  const favoriteArtworks = artworks.filter((a) => favoriteIds.includes(a.id))

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-widest uppercase text-gold mb-5">Your Selection</p>
          <h1 className="font-display text-5xl lg:text-6xl font-light text-charcoal">
            Favourites
          </h1>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-14 h-px bg-sand" />
            <span className="text-gold text-sm">♡</span>
            <div className="w-14 h-px bg-sand" />
          </div>
        </div>

        {/* Content */}
        {!mounted ? (
          /* Loading spinner */
          <div className="flex justify-center py-24">
            <div className="w-8 h-8 border border-sand border-t-gold rounded-full animate-spin" />
          </div>
        ) : favoriteArtworks.length === 0 ? (
          /* Empty state */
          <div className="text-center py-24">
            <p className="text-5xl mb-8 opacity-20 select-none">♡</p>
            <p className="font-display text-3xl font-light text-warm-gray mb-4">
              No favourites yet
            </p>
            <p className="text-warm-gray text-sm mb-10 max-w-xs mx-auto leading-relaxed">
              Tap the heart icon on any artwork in the gallery to save it here.
            </p>
            <Link
              href="/gallery"
              className="inline-block text-[10px] tracking-widest uppercase border border-charcoal text-charcoal px-8 py-3 hover:bg-charcoal hover:text-cream transition-all duration-300"
            >
              Browse the Gallery
            </Link>
          </div>
        ) : (
          <>
            <p className="text-warm-gray text-xs mb-10 text-center">
              {favoriteArtworks.length}{' '}
              {favoriteArtworks.length === 1 ? 'work saved' : 'works saved'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {favoriteArtworks.map((artwork) => (
                <ArtworkCard key={artwork.id} artwork={artwork} />
              ))}
            </div>
            <div className="text-center mt-14">
              <Link
                href="/gallery"
                className="text-[10px] tracking-widest uppercase text-warm-gray hover:text-gold transition-colors"
              >
                ← Continue Browsing
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
