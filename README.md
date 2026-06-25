# Maia Pataridze Art
**Textile Stories with a Magpie**

A minimalist gallery & e-commerce website for textile artist Maia Pataridze, built with Next.js 14, TypeScript, and Tailwind CSS.

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To build for production:
```bash
npm run build
npm start
```

---

## Pages

| Route | Page |
|-------|------|
| `/` | Home — hero, featured works, about snippet, Instagram & enquiry CTAs |
| `/gallery` | Full collection with Available / Sold filter |
| `/artwork/[id]` | Artwork detail — images, info, favourite, share, enquiry |
| `/favorites` | Saved artworks (localStorage, no login needed) |
| `/about` | Artist story & studio images |
| `/contact` | Contact form + social links |

---

## Adding / Editing Artworks

Edit **`src/data/artworks.json`**. Each artwork follows this schema:

```json
{
  "id": "009",
  "title": "My New Piece",
  "description": "A description of the work…",
  "status": "available",
  "images": ["/images/my-new-piece-1.jpg", "/images/my-new-piece-2.jpg"],
  "video": "",
  "dimensions": "30 × 40 cm",
  "year": "2025",
  "technique": "Hand embroidery on linen"
}
```

- `status` is either `"available"` or `"sold"`
- `images` — put your image files in `/public/images/` and reference them as `/images/filename.jpg`
- All other fields are optional but recommended

The site rebuilds automatically in dev mode when you save the JSON file.

---

## Adding Your Own Images

1. Place image files in `/public/images/`
2. Reference them in `artworks.json` as `/images/your-file.jpg`
3. For external images (e.g. a CDN), add the hostname to `next.config.js` → `images.remotePatterns`

The current placeholder images use [picsum.photos](https://picsum.photos) — replace these with Maia's actual artwork photos.

---

## Customise Contact Details

Search the project for placeholder values and replace:
- `maia.pataridze@iliauni.edu.ge` → real email address
- `+995 599 37 91 00` → real phone number
- Instagram / Facebook links in `Navigation.tsx`, `Footer.tsx`, `About`, `Contact` pages

---

## Setting Up the Contact Form

The form currently simulates a 1-second delay and shows a success screen. To make it actually send emails, wire it up to one of these free services:

- **[Formspree](https://formspree.io)** — replace the `handleSubmit` fetch target in `src/app/contact/page.tsx`
- **[EmailJS](https://emailjs.com)** — client-side email sending, no backend needed
- **[Resend](https://resend.com)** — create a Next.js API route (`/api/contact`) and call it from the form

---

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `cream` | `#FAF8F5` | Page background |
| `charcoal` | `#2C2C2C` | Primary text, buttons |
| `warm-gray` | `#6B6157` | Secondary text, labels |
| `sand` | `#E8DDD1` | Borders, dividers |
| `sand-light` | `#F2EDE6` | Alternate section backgrounds |
| `gold` | `#C4956A` | Accent colour, available badge, highlights |

Fonts: **Cormorant Garamond** (display/headings) + **DM Sans** (body)

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (nav + footer)
│   ├── page.tsx            # Home
│   ├── gallery/page.tsx
│   ├── artwork/[id]/page.tsx
│   ├── favorites/page.tsx
│   ├── about/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── ArtworkCard.tsx     # Gallery card with hover reveal
│   ├── FavoriteButton.tsx  # Heart toggle (localStorage)
│   ├── ImageGallery.tsx    # Main image + thumbnails
│   └── ShareButtons.tsx    # Facebook / Pinterest / Instagram
├── data/
│   └── artworks.json       # ← Edit this to manage artworks
├── lib/
│   └── favorites.ts        # localStorage helpers
└── types/
    └── artwork.ts          # TypeScript type definitions
```
