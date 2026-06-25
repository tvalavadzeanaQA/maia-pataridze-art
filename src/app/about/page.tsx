import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'About | Maia Pataridze Art',
  description:
    'Maia Pataridze — textile artist, historian, archaeologist and keeper of the magpie world.',
}

export default function AboutPage() {
  return (
    <div className="pt-20">

      {/* ── COVER: artwork as hero ── */}
      <div className="relative h-[60vh] lg:h-[80vh] overflow-hidden">
        <Image
          src="/images/image1.jpeg"
          alt="Maia Pataridze Art — Cover"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-6 lg:px-12 pb-12">
          <p className="text-[10px] tracking-widest uppercase text-gold/90 mb-3">The Artist</p>
          <h1 className="font-display text-5xl lg:text-7xl font-light text-cream leading-none">
            Maia Pataridze
          </h1>
          <p className="font-display text-3xl lg:text-4xl font-light text-cream/80 italic mt-1">Art</p>
        </div>
      </div>

      {/* ── PULL QUOTE ── */}
      <div className="bg-sand-light py-14">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-sand" />
            <span className="text-gold text-xs">✦</span>
            <div className="w-12 h-px bg-sand" />
          </div>
          <blockquote className="font-display text-2xl lg:text-3xl font-light text-charcoal leading-relaxed italic">
            &ldquo;წარსულის კვლევით შთაგონებული ტექსტილის ხელოვნება.&rdquo;
          </blockquote>
          <p className="text-warm-gray text-sm mt-6 font-display">— მაია პატარიძე</p>
        </div>
      </div>

      {/* ── MAIN BIO: Maia photo left, text right ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Left: Maia portrait — sticky */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 space-y-5">
              {/* 
                ⬇️ შეცვალე /images/image2.jpeg შენი ფოტოთი!
                მაგ: public/images/maia-photo.jpeg → src="/images/maia-photo.jpeg"
              */}
              <div className="relative overflow-hidden aspect-[3/4] bg-sand-light">
                <Image
                  src="/images/maiasphoto.jpg"
                  alt="Maia Pataridze"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-display text-lg text-charcoal">Maia Pataridze</p>
                <p className="text-warm-gray text-xs tracking-wide mt-1">
                   Textile Artist · Historian · Archaeologist 
                </p>
              </div>
            </div>
          </div>

          {/* Right: bilingual bio */}
          <div className="lg:col-span-7 lg:col-start-6">

            {/* Georgian */}
            <div className="mb-14">
              <div className="w-8 h-px bg-gold mb-6" />
              <p className="text-[10px] tracking-widest uppercase text-gold mb-5">ქართულად</p>
              <h2 className="font-display text-3xl font-light text-charcoal mb-6">
                მაია პატარიძე — ტექსტილის ხელოვანი, ნუმიზმატი
              </h2>
              <div className="space-y-4 text-warm-gray text-sm leading-relaxed">
                <p>
                  მაია პატარიძე ისტორიკოსი, არქეოლოგი და ნუმიზმატიკის დოქტორია,
                  რომლის მრავალწლიანი აკადემიური მოღვაწეობა საქართველოს ეროვნულ
                  მუზეუმს, ილიას სახელმწიფო უნივერსიტეტსა და კავკასიის
                  სამეცნიერო-კვლევით ინსტიტუტს უკავშირდება.
                </p>
                <p>
                  იგი არის მრავალი წიგნის, გამოფენისა და საერთაშორისო პროექტის
                  — მათ შორის ბერლინის ბოდეს მუზეუმის — კურატორი და მკვლევარი.
                </p>
                <p>
                  წარსულის კვლევით შთაგონებულმა მაიამ ბოლო წლებში აქტიურად
                  დაიწყო მუშაობა ტექსტილზე. მის ნამუშევრებში მეცნიერული სიზუსტე,
                  არქეოლოგიური შრეები და მითოლოგიური თხრობა ერთმანეთს ერწყმის,
                  რითაც ქმნის უნიკალურ, ზღაპრულ სამყაროს — მოთხრობილს ფერადი
                  ძაფებითა და ქსოვილებით.
                </p>
              </div>
            </div>

            {/* Language divider */}
            <div className="flex items-center gap-4 mb-14">
              <div className="flex-1 h-px bg-sand" />
              <span className="text-gold text-xs">✦</span>
              <div className="flex-1 h-px bg-sand" />
            </div>

            {/* English */}
            <div>
              <div className="w-8 h-px bg-gold mb-6" />
              <p className="text-[10px] tracking-widest uppercase text-gold mb-5">In English</p>
              <h2 className="font-display text-3xl font-light text-charcoal mb-6">
                Textile Artist, Storyteller &amp; Keeper of the Magpie World
              </h2>
              <div className="space-y-4 text-warm-gray text-sm leading-relaxed">
                <p>
                  Maia Pataridze is a historian, archaeologist, and PhD in
                  Numismatics, whose distinguished academic career spans years of
                  work with the Georgian National Museum, Ilia State University,
                  and the Caucasus Research Institute.
                </p>
                <p>
                  She is a recognized researcher, author, and curator of numerous
                  exhibitions, including international fellowships at Berlin&apos;s
                  Bode Museum.
                </p>
                <p>
                  In recent years, inspired by her deep connection to the past,
                  Maia has actively channeled her vision into textile art. Her
                  works beautifully intertwine scientific depth, archaeological
                  layers, and mythical storytelling — creating a unique,
                  fairytale-like world woven through threads and fabrics.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── ARTWORK STRIP ── */}
      <div className="bg-sand-light py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-[10px] tracking-widest uppercase text-gold mb-8 text-center">
            Selected Works
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {['/images/image3.jpeg', '/images/image4.jpeg', '/images/image5.jpeg', '/images/image6.jpeg'].map(
              (src, i) => (
                <Link key={i} href="/gallery">
                  <div className="relative aspect-square overflow-hidden bg-sand">
                    <Image
                      src={src}
                      alt={`Artwork preview ${i + 3}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <section className="bg-charcoal py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <p className="font-display text-4xl font-light text-cream mb-6 leading-tight">
            Discover the<br /><em>Collection</em>
          </p>
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="w-12 h-px bg-white/20" />
            <span className="text-gold text-xs">✦</span>
            <div className="w-12 h-px bg-white/20" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/gallery"
              className="inline-block text-[10px] tracking-widest uppercase border border-cream/40 text-cream px-10 py-3 hover:bg-cream hover:text-charcoal transition-all duration-300"
            >
              View Gallery
            </Link>
            <Link
              href="/contact"
              className="inline-block text-[10px] tracking-widest uppercase border border-gold text-gold px-10 py-3 hover:bg-gold hover:text-cream transition-all duration-300"
            >
              Contact Maia
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
