import Image from 'next/image'
import Link from 'next/link'
import artworksData from '@/data/artworks.json'
import type { Artwork } from '@/types/artwork'
import ArtworkCard from '@/components/ArtworkCard'

const artworks = artworksData as Artwork[]
const featured = artworks.slice(0, 4)

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="pt-20">
        <div className="flex flex-col md:flex-row" style={{ minHeight: 'calc(100vh - 5rem)' }}>
          {/* Left: artwork image */}
          <div className="relative h-[55vh] md:h-auto md:flex-1">
            <Image
              src="/images/image3.jpeg"
              alt="Maia Pataridze — Textile Art"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right: text */}
          <div className="md:w-[42%] flex items-center justify-center px-8 lg:px-20 py-16 bg-cream">
            <div className="max-w-xs">
              <p className="text-[10px] tracking-widest uppercase text-gold mb-8">
                Textile Art · Georgia
              </p>
              <h1 className="font-display text-5xl lg:text-6xl font-light text-charcoal leading-none mb-3">
                Maia<br />Pataridze
              </h1>
              <p className="font-display text-5xl lg:text-6xl font-light text-charcoal leading-none italic mb-8">
                Art
              </p>
              <div className="w-10 h-px bg-gold mb-8" />
              <p className="font-display text-lg font-light text-warm-gray italic mb-6 leading-snug">
                Textile Stories<br />with a Magpie
              </p>
              <p className="text-warm-gray text-sm leading-relaxed mb-10">
                Handcrafted textile artworks that tell small stories from the magical world of a magpie — nature, memory, and folklore stitched into being.
              </p>
              <Link
                href="/gallery"
                className="inline-block text-[10px] tracking-widest uppercase border border-charcoal text-charcoal px-8 py-3 hover:bg-charcoal hover:text-cream transition-all duration-300"
              >
                Explore the Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURED WORKS ─── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-widest uppercase text-gold mb-5">Selected Works</p>
          <h2 className="font-display text-4xl lg:text-5xl font-light text-charcoal">
            Featured Collection
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-14 h-px bg-sand" />
            <span className="text-gold text-xs">✦</span>
            <div className="w-14 h-px bg-sand" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            href="/gallery"
            className="inline-block text-[10px] tracking-widest uppercase border border-charcoal text-charcoal px-10 py-3 hover:bg-charcoal hover:text-cream transition-all duration-300"
          >
            View All Works
          </Link>
        </div>
      </section>

      {/* ─── ABOUT SNIPPET ─── */}
      <section className="bg-sand-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/images/image2.jpeg"
                alt="Maia Pataridze at work in her studio"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-[10px] tracking-widest uppercase text-gold mb-5">The Artist</p>
              <h2 className="font-display text-4xl lg:text-5xl font-light text-charcoal leading-tight mb-4">
                Stories Stitched<br /><em>Into Being</em>
              </h2>
              <div className="w-10 h-px bg-gold my-8" />
              <p className="text-warm-gray leading-relaxed mb-5 text-sm">
                Maia Pataridze creates handcrafted textile artworks that tell small stories from the magical world of a magpie. Each piece combines embroidery, fabric, texture, and imagination to create unique visual narratives inspired by nature, memory, and folklore.
              </p>
              <p className="text-warm-gray leading-relaxed mb-10 text-sm">
                Working from her studio in Georgia, Maia approaches each artwork as a quiet meditation — a conversation between thread and linen, between the seen and the imagined.
              </p>
              <Link
                href="/about"
                className="inline-block text-[10px] tracking-widest uppercase text-gold border-b border-gold pb-0.5 hover:text-gold-dark hover:border-gold-dark transition-colors"
              >
                Read More About Maia →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INSTAGRAM ─── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 text-center">
        <p className="text-[10px] tracking-widest uppercase text-gold mb-5">Follow the Journey</p>
        <h2 className="font-display text-4xl lg:text-5xl font-light text-charcoal mb-6">
          On Instagram
        </h2>
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-14 h-px bg-sand" />
          <span className="text-gold text-xs">✦</span>
          <div className="w-14 h-px bg-sand" />
        </div>
        <p className="text-warm-gray text-sm max-w-sm mx-auto mb-10 leading-relaxed">
          Follow Maia&apos;s creative process, studio glimpses, and new works as they come to life — stitch by stitch.
        </p>
        <a
          href="https://www.instagram.com/maia.pataridze.art?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-[10px] tracking-widest uppercase bg-charcoal text-cream px-10 py-3 hover:bg-warm-gray transition-colors duration-300"
        >
          @maiapataridze
        </a>
      </section>

      {/* ─── ENQUIRY CTA ─── */}
      <section className="bg-charcoal py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <p className="text-[10px] tracking-widest uppercase text-gold/80 mb-5">Enquiries</p>
          <h2 className="font-display text-4xl lg:text-5xl font-light text-cream mb-6 leading-tight">
            Interested in<br /><em>a Work?</em>
          </h2>
          <p className="text-cream/60 text-sm mb-10 leading-relaxed">
            Each piece is unique and handcrafted. Contact Maia directly to enquire about available works, commissions, or exhibitions.
          </p>
          <Link
            href="/contact"
            className="inline-block text-[10px] tracking-widest uppercase border border-cream/40 text-cream px-10 py-3 hover:bg-cream hover:text-charcoal transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
