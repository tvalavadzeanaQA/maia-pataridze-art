'use client'

import { useState, useEffect } from 'react'

interface Props {
  title: string
}

export default function ShareButtons({ title }: Props) {
  const [url, setUrl] = useState('')

  useEffect(() => {
    setUrl(window.location.href)
  }, [])

  if (!url) return null

  const enc = encodeURIComponent(url)
  const encTitle = encodeURIComponent(title)

  return (
    <div className="flex items-center gap-5 flex-wrap">
      <span className="text-[10px] tracking-widest uppercase text-warm-gray">Share</span>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${enc}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-warm-gray hover:text-gold transition-colors text-xs tracking-wide"
      >
        Facebook
      </a>
      <a
        href={`https://pinterest.com/pin/create/button/?url=${enc}&description=${encTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-warm-gray hover:text-gold transition-colors text-xs tracking-wide"
      >
        Pinterest
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-warm-gray hover:text-gold transition-colors text-xs tracking-wide"
      >
        Instagram
      </a>
    </div>
  )
}
