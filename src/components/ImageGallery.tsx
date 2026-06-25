// 'use client'

// import { useState } from 'react'
// import Image from 'next/image'

// interface Props {
//   images: string[]
//   title: string
// }

// export default function ImageGallery({ images, title }: Props) {
//   const [activeIndex, setActiveIndex] = useState(0)

//   return (
//     <div>
//       {/* Main image */}
//       <div className="relative overflow-hidden bg-sand-light aspect-[4/5]">
//         <Image
//           key={activeIndex}
//           src={images[activeIndex]}
//           alt={`${title} — image ${activeIndex + 1}`}
//           fill
//           className="object-cover transition-opacity duration-300"
//           sizes="(max-width: 768px) 100vw, 50vw"
//           priority={activeIndex === 0}
//         />
//       </div>

//       {/* Thumbnails */}
//       {images.length > 1 && (
//         <div className="flex gap-2 mt-3">
//           {images.map((img, idx) => (
//             <button
//               key={idx}
//               onClick={() => setActiveIndex(idx)}
//               aria-label={`View image ${idx + 1}`}
//               className={`relative overflow-hidden w-16 h-20 flex-shrink-0 transition-all duration-200 ${
//                 activeIndex === idx
//                   ? 'ring-1 ring-gold ring-offset-2 ring-offset-cream opacity-100'
//                   : 'opacity-50 hover:opacity-75'
//               }`}
//             >
//               <Image
//                 src={img}
//                 alt={`${title} thumbnail ${idx + 1}`}
//                 fill
//                 className="object-cover"
//                 sizes="64px"
//               />
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }

'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Props {
  images: string[]
  title: string
}

export default function ImageGallery({ images, title }: Props) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div>
      {/* Main image container — NO BACKGROUND, dynamic width */}
      <div className="flex items-center justify-center w-full max-h-[70vh]">
        <img
          key={activeIndex}
          src={images[activeIndex]}
          alt={`${title} — image ${activeIndex + 1}`}
          className="w-auto h-auto max-w-full max-h-[70vh] object-contain shadow-sm transition-opacity duration-300"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 mt-4 justify-center lg:justify-start">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`View image ${idx + 1}`}
              className={`relative overflow-hidden w-16 h-20 flex-shrink-0 transition-all duration-200 ${
                activeIndex === idx
                  ? 'ring-1 ring-gold ring-offset-2 ring-offset-cream opacity-100'
                  : 'opacity-50 hover:opacity-75'
              }`}
            >
              <Image
                src={img}
                alt={`${title} thumbnail ${idx + 1}`}
                fill
                className="object-cover"
                sizes="64px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}