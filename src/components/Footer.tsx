import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-sand-light border-t border-sand">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <p className="font-display text-3xl font-light text-charcoal leading-snug">
              Maia Pataridze
            </p>
            <p className="font-display text-xl font-light italic text-charcoal mb-4">Art</p>
            <p className="text-warm-gray text-sm font-display italic">
              Textile Stories with a Magpie
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs tracking-widest uppercase text-warm-gray mb-5">Explore</p>
            <nav className="flex flex-col gap-3">
              {[
                { href: '/gallery', label: 'Gallery' },
                { href: '/about', label: 'About the Artist' },
                { href: '/favorites', label: 'My Favourites' },
                { href: '/contact', label: 'Contact' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-charcoal text-sm hover:text-gold transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-widest uppercase text-warm-gray mb-5">Connect</p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:maia.pataridze@iliauni.edu.ge"
                className="text-charcoal text-sm hover:text-gold transition-colors duration-200"
              >
                maia.pataridze@iliauni.edu.ge
              </a>
              <a
                href="tel:+995555000000"
                className="text-charcoal text-sm hover:text-gold transition-colors duration-200"
              >
                +995 599 37 91 00
              </a>
              <div className="flex gap-5 mt-2">
                <a
                  href="https://www.instagram.com/maia.pataridze.art?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-widest uppercase text-warm-gray hover:text-gold transition-colors duration-200"
                >
                  Instagram
                </a>
                <a
                  href="https://www.instagram.com/maia.pataridze.art?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-widest uppercase text-warm-gray hover:text-gold transition-colors duration-200"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-sand mt-12 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="text-warm-gray text-xs">
            © {year} Maia Pataridze Art. All rights reserved.
          </p>
          <p className="text-warm-gray text-xs">Handcrafted with love in Georgia ✦</p>
        </div>
      </div>
    </footer>
  )
}
