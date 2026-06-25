'use client'

import { useState, useEffect } from 'react'
import { toggleFavorite, isFavorite } from '@/lib/favorites'

interface Props {
  id: string
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: { btn: 'w-8 h-8', icon: 14 },
  md: { btn: 'w-10 h-10', icon: 16 },
  lg: { btn: 'w-12 h-12', icon: 20 },
}

export default function FavoriteButton({ id, size = 'md' }: Props) {
  const [fav, setFav] = useState(false)
  const { btn, icon } = sizes[size]

  useEffect(() => {
    setFav(isFavorite(id))
  }, [id])

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const added = toggleFavorite(id)
    setFav(added)
  }

  return (
    <button
      onClick={handleClick}
      aria-label={fav ? 'Remove from favourites' : 'Add to favourites'}
      className={`${btn} flex items-center justify-center rounded-full bg-cream/90 hover:bg-cream shadow-sm transition-all duration-200 hover:scale-110 active:scale-95`}
    >
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 24 24"
        fill={fav ? '#C4956A' : 'none'}
        stroke={fav ? '#C4956A' : '#6B6157'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-colors duration-200"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    </button>
  )
}
