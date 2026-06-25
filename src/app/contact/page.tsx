'use client'

import { useState, useEffect } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  // Pre-fill artwork name if coming from enquiry link
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const artwork = params.get('artwork')
    if (artwork) {
      setForm((f) => ({
        ...f,
        message: `Hello Maia,\n\nI am interested in the artwork "${artwork}". Could you please provide more information?\n\nThank you.`,
      }))
    }
  }, [])

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    // Simulate network delay; replace with your form service (Formspree, EmailJS, etc.)
    await new Promise((res) => setTimeout(res, 900))
    setSending(false)
    setSubmitted(true)
  }

  const isValid = form.name.trim() && form.email.trim() && form.message.trim()

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          {/* ── Left: contact info ── */}
          <div>
            <p className="text-[10px] tracking-widest uppercase text-gold mb-5">Get in Touch</p>
            <h1 className="font-display text-5xl lg:text-6xl font-light text-charcoal mb-4">
              Contact
            </h1>
            <div className="w-10 h-px bg-gold mb-10" />

            <p className="text-warm-gray text-sm leading-relaxed mb-12 max-w-sm">
              Interested in a specific work, a commission, or simply want to say hello? Maia reads every message and responds personally.
            </p>

            <div className="space-y-7">
              <div>
                <p className="text-[10px] tracking-widest uppercase text-warm-gray mb-2">
                  Email
                </p>
                <a
                  href="mailto:maia.pataridze@iliauni.edu.ge"
                  className="text-charcoal text-sm hover:text-gold transition-colors"
                >
                  maia.pataridze@iliauni.edu.ge
                </a>
              </div>
              <div>
                <p className="text-[10px] tracking-widest uppercase text-warm-gray mb-2">
                  Phone
                </p>
                <a
                  href="tel:+995555000000"
                  className="text-charcoal text-sm hover:text-gold transition-colors"
                >
                  +995 599 37 91 00
                </a>
              </div>
              <div>
                <p className="text-[10px] tracking-widest uppercase text-warm-gray mb-2">
                  Social
                </p>
                <div className="flex gap-6">
                  <a
                    href="https://www.instagram.com/maia.pataridze.art?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-charcoal text-sm hover:text-gold transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.instagram.com/maia.pataridze.art?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-charcoal text-sm hover:text-gold transition-colors"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: form / success ── */}
          <div>
            {submitted ? (
              <div className="flex flex-col justify-center min-h-[400px]">
                <div className="w-10 h-px bg-gold mb-8" />
                <h2 className="font-display text-4xl font-light text-charcoal mb-4">
                  Thank you
                </h2>
                <p className="text-warm-gray text-sm leading-relaxed mb-8 max-w-xs">
                  Your message has been sent. Maia will be in touch with you soon.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setForm({ name: '', email: '', message: '' })
                  }}
                  className="text-[10px] tracking-widest uppercase text-gold border-b border-gold pb-0.5 hover:text-gold-dark hover:border-gold-dark transition-colors w-fit"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name */}
                <div>
                  <label className="block text-[10px] tracking-widest uppercase text-warm-gray mb-3">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    required
                    placeholder="Name Surname"
                    className="w-full border-b border-sand bg-transparent py-3 text-charcoal placeholder-sand/80 focus:outline-none focus:border-gold transition-colors duration-200 text-sm"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[10px] tracking-widest uppercase text-warm-gray mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    required
                    placeholder="email@example.com"
                    className="w-full border-b border-sand bg-transparent py-3 text-charcoal placeholder-sand/80 focus:outline-none focus:border-gold transition-colors duration-200 text-sm"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[10px] tracking-widest uppercase text-warm-gray mb-3">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    required
                    rows={6}
                    placeholder="Tell Maia about your interest…"
                    className="w-full border-b border-sand bg-transparent py-3 text-charcoal placeholder-sand/80 focus:outline-none focus:border-gold transition-colors duration-200 resize-none text-sm"
                  />
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={sending || !isValid}
                    className="w-full text-[10px] tracking-widest uppercase bg-charcoal text-cream py-4 hover:bg-warm-gray transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {sending ? 'Sending…' : 'Send Message'}
                  </button>
                </div>

                <p className="text-warm-gray text-xs">
                  Or email directly:{' '}
                  <a
                    href="mailto:maia.pataridze@iliauni.edu.ge"
                    className="text-gold hover:underline"
                  >
                    maia.pataridze@iliauni.edu.ge
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
