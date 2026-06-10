# Visagam Building Materials — Business Website

Official website for **Visagam Building Materials**, a trusted construction materials supplier and heavy machinery rental service based in Ramanathapuram District, Tamil Nadu. Established in 2018, MSME registered and Government e-Marketplace (GeM) certified.

**Live Site → [visagambuildingmaterials.netlify.app](https://visagambuildingmaterials.netlify.app)**

---

## About the Business

Visagam Building Materials has been serving the construction industry for over 8 years. They supply premium quality building materials and provide heavy machinery rental services with skilled operators across Ramanathapuram District.

---

## Website Sections

- **Hero** — Brand introduction with direct WhatsApp contact button
- **Products** — Full range of construction materials with details
- **Services** — Heavy machinery rental with operator support
- **Why Choose Us** — MSME registration, GeM certification, 8+ years experience
- **Testimonials** — Customer reviews and feedback
- **Contact** — Inquiry form and business location

---

## Products Showcased

| Product | Brands / Details |
|---|---|
| Cement | Ultratech, Dalmia |
| TMT Steel Bars | All grades |
| Bricks | Red bricks, Hollow blocks, AAC blocks |
| Sand | M-Sand, River sand |
| Gravel | All sizes |
| Waterproofing | Chemicals and solutions |

## Services

- Tractor rental with operator
- JCB rental with operator
- Bharat Benz lorry rental with driver

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (semantic) |
| Styling | CSS3 (custom properties, responsive) |
| Interactivity | Vanilla JavaScript |
| App Shell | PWA — service worker + web manifest |
| SEO | JSON-LD structured data, Open Graph, sitemap |
| Deployment | Netlify (with `_headers` security/caching) |
| Contact | WhatsApp deep links |

---

## Project Structure

```
├── index.html          # Main page
├── 404.html            # Branded not-found page
├── offline.html        # PWA offline fallback
├── css/
│   └── style.css       # All styles, responsive layout
├── js/
│   └── script.js       # Interactions, form handling, PWA registration
├── assets/             # Optimized product/service images + app icons
├── sw.js               # Service worker (offline + caching)
├── site.webmanifest    # PWA manifest (installable app)
├── robots.txt          # Crawler directives
├── sitemap.xml         # Sitemap for search engines
└── _headers            # Netlify security & cache headers
```

---

## Features

- **Fully Responsive** — Works on mobile, tablet, and desktop, with a mobile sticky call/WhatsApp/quote bar
- **WhatsApp Integration** — Inquiry form opens WhatsApp with a pre-filled, formatted message; product buttons pre-fill the form
- **Installable PWA** — Service worker provides offline support and faster repeat visits; add-to-home-screen ready
- **Performance** — Images optimized & resized (≈60% smaller), explicit dimensions to prevent layout shift, hero preload for LCP
- **SEO Ready** — Semantic HTML, canonical URL, Open Graph + Twitter cards, LocalBusiness & FAQ structured data (JSON-LD), sitemap & robots
- **Accessibility** — Skip link, `:focus-visible` rings, `prefers-reduced-motion` support, ARIA states, keyboard-friendly menu & accordion
- **Security** — Content-Security-Policy and hardening headers via Netlify `_headers`
- **Engaging UX** — Scroll-progress bar, reveal-on-scroll animations, animated counters, FAQ accordion, "How We Work" process, location map

---

## Local Development

No build tools required. Just open the file directly:

```bash
git clone https://github.com/Guru-1110/Visagam-Building-Material-Website.git
cd Visagam-Building-Material-Website

# Open in browser
open index.html
```

Or use VS Code Live Server extension for hot reload.

---

## Deployment

Deployed on **Netlify** via drag and drop or GitHub integration.
Any push to the main branch auto-deploys to the live site.

---

## Client

**Visagam Building Materials**
Ramanathapuram District, Tamil Nadu, India


---

## License

MIT
