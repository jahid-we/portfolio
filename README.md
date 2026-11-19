# Jahid Hasan — Web Developer & WordPress Specialist Portfolio

[![GitHub Pages Deployment](https://img.shields.io/badge/Hosted_on-GitHub_Pages-222222?style=flat&logo=github)](https://jahid-we.github.io/portfolio/)
[![Lighthouse Performance](https://img.shields.io/badge/Lighthouse-99%2B-success?style=flat&logo=googlechrome)](https://jahid-we.github.io/portfolio/)
[![Tech Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-FF4F00?style=flat)](https://jahid-we.github.io/portfolio/)

Handcrafted, multi-page, lightning-fast personal developer portfolio website for **Jahid Hasan**, Web Developer & WordPress specialist based in **Brahmanbaria, Bangladesh**.

**Live URL:** [https://jahid-we.github.io/portfolio/](https://jahid-we.github.io/portfolio/)

---

## 🚀 Technical Stack & Architecture (Strictly Enforced)

This project is built from scratch without bulky frontend libraries or CMS dependencies:

- **HTML5:** Semantic, accessible, and SEO-optimized markup.
- **CSS3:** Custom responsive design system with CSS custom properties (variables), modern flexbox/grid, and fluid typography.
- **Vanilla JavaScript:** Zero dependencies. Handles navigation drawer, scroll progress bar, smooth animations, project filtering, and FAQ accordions.
- **SVG & FontAwesome 6:** Lightweight vector icons.

### 🚫 Strict Architectural Constraints

- **NO** WordPress or Elementor runtimes on the frontend.
- **NO** PHP or server-side rendering required for hosting.
- **NO** Vue.js, React, or heavy Single Page Application runtimes.
- **NO** Bootstrap or Tailwind runtime bundles.
- **NO** Server rewrite rules or server-side routing engines required.

---

## 📁 Repository Directory Structure

```text
portfolio/
│
├── index.html                           # Main Homepage
├── about.html                           # Comprehensive About & Career Journey
│
├── services/
│   ├── index.html                       # Services Overview Hub
│   ├── wordpress-development.html       # Custom WordPress Themes & Speed
│   ├── wordpress-security.html          # Hardening, Malware Removal & Backups
│   ├── woocommerce-development.html     # BD Payment Gateways & eCommerce
│   ├── laravel-development.html         # Custom Web Apps & REST APIs
│   ├── vue-js-development.html          # Vue 3 & Inertia.js Dynamic Frontends
│   ├── inventory-pos-development.html   # POS & Inventory Software
│   └── custom-portfolio-development.html# Handcrafted Static Portfolios
│
├── projects/
│   └── index.html                       # Filterable Project Showcase
│
├── contact.html                         # Direct Contact & Inquiry Form
│
├── assets/
│   ├── css/
│   │   ├── style.css                    # Design tokens & core styles
│   │   ├── responsive.css               # Media queries (desktop to 480px)
│   │   └── animations.css               # Scroll animations & reduced motion
│   ├── js/
│   │   ├── main.js                      # Navigation, scroll progress, header
│   │   └── components.js                # Category filter, FAQ accordion, form
│   ├── images/
│   │   └── profile_portrait.jpg         # Professional developer portrait
│   └── icons/
│
├── robots.txt                           # Search engine crawling rules
├── sitemap.xml                          # XML Sitemap with all 12 published pages
└── README.md                            # Project documentation
```

---

## 🎨 Design Tokens & Typography

| Token | Value | Purpose |
|---|---|---|
| `--primary` | `#FF4F00` | Signature Vibrant Brand Accent |
| `--heading` | `#2B1A14` | Deep Warm Espresso Heading Color |
| `--accent` | `#FF9A62` | Warm Coral Border & Hover Tint |
| `--bg-main` | `#FFFAF7` | Clean Warm Canvas Background |
| `--bg-soft` | `#FFF0E8` | Soft Card Tint & Tag Background |
| `--muted` | `#625149` | Readable High-Contrast Body Copy |
| `--border` | `#EBD8D0` | Subtle Border Divider |

### Typography Pairings

- **Headings & Badges:** `Space Grotesk` (Weights: 500, 600, 700)
- **Body & Navigation:** `Inter` (Weights: 400, 500, 600)

---

## 🌐 GitHub Pages Deployment & Subfolder Routing

Because this portfolio is deployed under `https://jahid-we.github.io/portfolio/`:

1. **Root Pages (`index.html`, `about.html`, `contact.html`):**
   - Assets: `assets/css/...`, `assets/js/...`, `assets/images/...`
   - Services link: `services/`
   - Projects link: `projects/`
2. **Nested Pages (`services/*.html`, `projects/index.html`):**
   - Assets: `../assets/css/...`, `../assets/js/...`, `../assets/images/...`
   - Home link: `../index.html`
   - Root services link: `index.html` (or `../services/`)
   - Root projects link: `../projects/`
   - Contact link: `../contact.html`

---

## 🔍 Local SEO & Structured Data

- **Primary Target Keywords:**
  - Web Developer Brahmanbaria
  - WordPress Developer Bangladesh
  - Laravel Developer Brahmanbaria
  - WooCommerce Developer BD (bKash / Nagad)
  - Point of Sale & Inventory Software Brahmanbaria
- **Structured Data:** Schema.org JSON-LD configured across all pages:
  - `Person` and `ProfessionalService` Schema on homepage and about page.
  - `Service` and `BreadcrumbList` Schema on all service pages.
  - `CollectionPage` Schema on the projects page.
  - `ContactPage` Schema on the contact page.

---

## 📞 Contact & Inquiries

- **Developer:** Jahid Hasan
- **Location:** Brahmanbaria, Bangladesh (Available Worldwide)
- **WhatsApp:** [+880 1701-367333](https://wa.me/8801701367333)
- **Email:** [jahidhasan370919@gmail.com](mailto:jahidhasan370919@gmail.com)
- **LinkedIn:** [linkedin.com/in/jahid-hasan-6891123a8](https://www.linkedin.com/in/jahid-hasan-6891123a8)
- **WordPress.org:** [profiles.wordpress.org/jahidzendforce](https://profiles.wordpress.org/jahidzendforce/)
- **GitHub:** [github.com/jahid-we](https://github.com/jahid-we)
