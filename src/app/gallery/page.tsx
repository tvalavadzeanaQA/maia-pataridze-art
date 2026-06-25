'use client'

import { useState } from 'react'
import artworksData from '@/data/artworks.json'
import type { Artwork } from '@/types/artwork'
import ArtworkCard from '@/components/ArtworkCard'

type Filter = 'all' | 'available' | 'sold'

const artworks = artworksData as Artwork[]

const filterOptions: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All Works' },
  { value: 'available', label: 'Available' },
  { value: 'sold', label: 'Sold' },
]

export default function GalleryPage() {
  const [filter, setFilter] = useState<Filter>('all')

  const filtered = artworks.filter((a) =>
    filter === 'all' ? true : a.status === filter
  )

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12 text-center">
        <p className="text-[10px] tracking-widest uppercase text-gold mb-5">The Collection</p>
        <h1 className="font-display text-5xl lg:text-6xl font-light text-charcoal">Gallery</h1>
        <div className="flex items-center justify-center gap-4 mt-6 mb-12">
          <div className="w-14 h-px bg-sand" />
          <span className="text-gold text-xs">✦</span>
          <div className="w-14 h-px bg-sand" />
        </div>

        <div className="inline-flex border border-sand">
          {filterOptions.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              className={`text-[10px] tracking-widest uppercase px-6 py-2.5 transition-all duration-200 ${
                filter === value
                  ? 'bg-charcoal text-cream'
                  : 'text-warm-gray hover:text-charcoal hover:bg-sand-light'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <p className="text-warm-gray text-xs mt-5">
          {filtered.length} {filtered.length === 1 ? 'work' : 'works'}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="font-display text-3xl text-warm-gray font-light">
              No works in this category
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {filtered.map((artwork) => (
              <ArtworkCard key={artwork.id} artwork={artwork} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
