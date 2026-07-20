# 🌿 Banashree Resort — Official Website

> A premium, luxury, fully-responsive resort website built with pure HTML5, CSS3, and Vanilla JavaScript/TypeScript.

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [File Structure](#file-structure)
3. [Features](#features)
4. [Tech Stack](#tech-stack)
5. [Local Development](#local-development)
6. [Production Build](#production-build)
7. [Deployment Options](#deployment-options)
   - [Option A: Static File Hosting (Recommended)](#option-a-static-file-hosting-recommended)
   - [Option B: Netlify](#option-b-netlify)
   - [Option C: Vercel](#option-c-vercel)
   - [Option D: cPanel / Shared Hosting](#option-d-cpanel--shared-hosting)
   - [Option E: GitHub Pages](#option-e-github-pages)
   - [Option F: VPS / Linux Server (Nginx)](#option-f-vps--linux-server-nginx)
8. [Customization Guide](#customization-guide)
9. [SEO Configuration](#seo-configuration)
10. [Performance Notes](#performance-notes)
11. [Business Information](#business-information)

---

## Project Overview

**Business:** Banashree Resort  
**Category:** Luxury Nature Resort  
**Location:** Joypur, West Bengal 722138, India  
**Phone:** +91 7001784207  
**Google Reviews:** 484 reviews  

This is a complete, production-ready website featuring 12 fully-designed sections, AI-generated resort imagery, premium animations, scroll reveals, a gallery lightbox, testimonials carousel, Google Map embed, contact form, WhatsApp and Call floating buttons, and full SEO markup.

---

## File Structure

```
banashree-resort-website/
│
├── README.md                    ← This file (documentation & deployment guide)
│
├── index.html                   ← Main website source (all 12 sections, SEO, Schema.org)
│
├── src/
│   ├── main.ts                  ← Entry point (imports CSS & JS)
│   ├── style.css                ← All custom CSS (BEM, CSS variables, animations)
│   └── script.ts                ← All interactive JS (sliders, lightbox, counters, etc.)
│
├── public/
│   ├── favicon.svg              ← Site favicon (green leaf)
│   ├── robots.txt               ← SEO crawler rules
│   └── images/                  ← All AI-generated resort images
│       ├── hero-1.jpg           ← Hero slider image 1 (forest entrance)
│       ├── hero-2.jpg           ← Hero slider image 2 (resort pool)
│       ├── hero-3.jpg           ← Hero slider image 3 (garden sunrise)
│       ├── about.jpg            ← About section (eco-luxury grounds)
│       ├── room-deluxe.jpg      ← Deluxe Room card image
│       ├── room-cottage.jpg     ← Premium Cottage card image
│       ├── room-family.jpg      ← Family Suite card image
│       ├── room-villa.jpg       ← Forest View Villa card image
│       ├── food-1.jpg           ← Bengali Traditional Thali
│       ├── food-2.jpg           ← Outdoor dining area
│       ├── food-3.jpg           ← Breakfast spread
│       ├── gallery-1.jpg        ← Bonfire night
│       ├── gallery-2.jpg        ← Swimming area
│       ├── gallery-3.jpg        ← Nature walk trail
│       ├── gallery-4.jpg        ← Garden close-up
│       ├── attraction-forest.jpg← Joypur Forest attraction
│       └── attraction-sunrise.jpg← Sunrise Point attraction
│
├── dist/                        ← ⭐ PRODUCTION BUILD — deploy this folder
│   ├── index.html               ← Optimised HTML
│   ├── assets/
│   │   ├── index-*.css          ← Minified, hashed CSS bundle
│   │   └── index-*.js           ← Minified, hashed JS bundle
│   ├── images/                  ← All images (copied from public/)
│   ├── favicon.svg
│   └── robots.txt
│
├── package.json                 ← Node.js project config (Vite build tool)
└── vite.config.ts               ← Vite build configuration
```

---

## Features

### 12 Website Sections
| # | Section | Description |
|---|---------|-------------|
| 1 | **Hero** | Full-screen slider (3 images), parallax, Book Now CTA |
| 2 | **About Resort** | Story, animated stat counters (500+ guests, 5 acres, etc.) |
| 3 | **Why Choose Us** | 9 premium feature cards with icons |
| 4 | **Rooms** | 4 room type cards with pricing and Book button |
| 5 | **Restaurant** | Food gallery — Bengali, Chinese, Snacks, Tea/Coffee |
| 6 | **Facilities** | 12 facility icons in a responsive grid |
| 7 | **Gallery** | Masonry gallery, filter tabs (All/Rooms/Nature/Food/Events), lightbox |
| 8 | **Customer Reviews** | Google 4.8★ badge, 484 reviews counter, auto-sliding carousel |
| 9 | **Nearby Attractions** | 4 cards: Joypur Forest, Sunrise Point, Village Walk, Nature Trail |
| 10 | **Location** | Google Maps embed, address, Call + Directions buttons |
| 11 | **Contact** | Contact form, Call Now + WhatsApp buttons |
| 12 | **Footer** | Links, contact info, copyright, Back to Top |

### Special Features
- ✅ Luxury loading screen with animated brand name
- ✅ Custom green/gold cursor with trailing ring effect
- ✅ Scroll progress bar (thin gold line at page top)
- ✅ Sticky navbar (transparent → solid on scroll)
- ✅ Full-screen mobile hamburger menu
- ✅ Floating WhatsApp button (wa.me link)
- ✅ Floating Call button (tel: link)
- ✅ Scroll-triggered animations (fade up, left, right)
- ✅ Animated number counters
- ✅ Hero image slider with auto-advance
- ✅ Testimonials auto-slider (pause on hover)
- ✅ Gallery lightbox with keyboard navigation (← → Esc)
- ✅ Card tilt/hover lift animations
- ✅ Button ripple effect on click
- ✅ Floating leaf particles in hero
- ✅ Parallax hero background
- ✅ Full SEO meta tags + Schema.org LocalBusiness JSON-LD
- ✅ Mobile-first responsive (320px → 1920px)
- ✅ Lazy-loaded images

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Structure | HTML5 (semantic) |
| Styling | CSS3 (custom properties, BEM, Grid, Flexbox) |
| Interactivity | Vanilla TypeScript / JavaScript |
| Fonts | Google Fonts: Playfair Display + Poppins |
| Build Tool | Vite 7 (for bundling/minification) |
| Images | AI-generated (17 custom resort images) |

**No frameworks. No Bootstrap. No jQuery. No React.**  
Pure, handcrafted, performance-optimised code.

---

## Local Development

### Prerequisites
- Node.js 18+ and npm (or pnpm)

### Setup

```bash
# 1. Install dependencies
npm install
# or
pnpm install

# 2. Start development server
PORT=3000 BASE_PATH=/ npm run dev
# Opens at http://localhost:3000
```

### Available Scripts

```bash
npm run dev      # Start dev server with hot reload
npm run build    # Build for production → dist/
npm run serve    # Preview the production build locally
```

---

## Production Build

The `dist/` folder in this ZIP is already built and ready to deploy. If you modify any source files and need to rebuild:

```bash
PORT=3000 BASE_PATH=/ npm run build
```

This generates the optimised output in `dist/public/`:
- HTML with proper asset hashes
- Minified CSS bundle
- Minified JS bundle
- All images and static files copied over

---

## Deployment Options

### Option A: Static File Hosting (Recommended)

**Best for:** Hostinger, Bluehost, DigitalOcean Spaces, AWS S3, Google Cloud Storage, Azure Static Web Apps.

Simply upload the **contents of the `dist/` folder** (not the folder itself) to your hosting root or `public_html` directory.

```
Upload these files to your hosting root:
  dist/index.html         → /index.html
  dist/assets/            → /assets/
  dist/images/            → /images/
  dist/favicon.svg        → /favicon.svg
  dist/robots.txt         → /robots.txt
```

---

### Option B: Netlify

**Easiest free hosting — recommended for beginners.**

**Method 1: Drag & Drop (No account setup required)**
1. Go to [netlify.com](https://netlify.com) → Sign up free
2. Drag and drop the **`dist/`** folder onto the Netlify dashboard
3. Your site is live in 30 seconds with a `*.netlify.app` URL

**Method 2: Git-connected (Auto-deploys on every push)**
1. Push this project to a GitHub repository
2. Go to Netlify → "Add new site" → "Import from Git"
3. Set Build command: `PORT=3000 BASE_PATH=/ npm run build`
4. Set Publish directory: `dist/public`
5. Click Deploy

**Custom Domain on Netlify:**
1. Go to Site settings → Domain management → Add custom domain
2. Add your domain (e.g., `banashreeresort.com`)
3. Update your domain's DNS nameservers to Netlify's provided values

---

### Option C: Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run inside the project folder:
   ```bash
   PORT=3000 BASE_PATH=/ npm run build
   vercel --prod dist/
   ```
3. Or connect your GitHub repo at [vercel.com](https://vercel.com) with:
   - Framework Preset: **Vite**
   - Build Command: `PORT=3000 BASE_PATH=/ npm run build`
   - Output Directory: `dist/public`

---

### Option D: cPanel / Shared Hosting

**Best for:** GoDaddy, Bluehost, Hostgator, HostPapa, Hostinger cPanel.

1. Log into your cPanel → Open **File Manager**
2. Navigate to `public_html/` (your website root)
3. Delete any existing `index.html` placeholder
4. Upload all files from the **`dist/`** folder:
   - `index.html`
   - `assets/` folder
   - `images/` folder
   - `favicon.svg`
   - `robots.txt`
5. Visit your domain — site is live!

**Via FTP (FileZilla):**
```
Host:     your-domain.com (or server IP)
Username: your-cpanel-username
Password: your-cpanel-password
Port:     21
Remote:   /public_html/
```
Upload all files from `dist/` to `/public_html/`.

---

### Option E: GitHub Pages

1. Create a GitHub repository and push this project
2. In the repository settings → Pages → Source: **GitHub Actions**
3. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: PORT=3000 BASE_PATH=/ npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist/public
```

4. Push to `main` branch — GitHub Actions auto-deploys.

**Note:** For GitHub Pages with a custom repo name, update `BASE_PATH=/your-repo-name/` in the build command.

---

### Option F: VPS / Linux Server (Nginx)

**Best for:** DigitalOcean Droplet, AWS EC2, Linode, Hetzner.

**1. Install Nginx**
```bash
sudo apt update && sudo apt install nginx -y
```

**2. Upload files**
```bash
# From your local machine
scp -r dist/* user@your-server-ip:/var/www/banashreeresort/
```

**3. Configure Nginx**
```bash
sudo nano /etc/nginx/sites-available/banashreeresort
```

Paste this config:
```nginx
server {
    listen 80;
    server_name banashreeresort.com www.banashreeresort.com;
    root /var/www/banashreeresort;
    index index.html;

    # Cache static assets for 1 year
    location ~* \.(css|js|jpg|jpeg|png|svg|ico|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/javascript image/svg+xml;
    gzip_min_length 1000;

    # SPA fallback
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

**4. Enable and start**
```bash
sudo ln -s /etc/nginx/sites-available/banashreeresort /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

**5. Enable HTTPS (Free SSL with Let's Encrypt)**
```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d banashreeresort.com -d www.banashreeresort.com
```

---

## Customization Guide

### Update Phone Number
Search for `+91 7001784207` in `src/script.ts` and `index.html` — replace with the new number.

### Update WhatsApp Link
In `index.html`, find `https://wa.me/917001784207` and update the number (country code + phone, no +).

### Update Google Map
In `index.html`, find the `<iframe src="https://www.google.com/maps/embed...` and replace with your actual Google Maps embed URL:
1. Go to [maps.google.com](https://maps.google.com)
2. Search for "Banashree Resort Joypur"
3. Click Share → Embed a map → Copy the iframe `src` attribute value

### Replace Images
Simply overwrite files in `public/images/` with your actual resort photos (keep the same filenames), then rebuild:
```bash
PORT=3000 BASE_PATH=/ npm run build
```

### Update Room Prices
In `index.html`, search for `Starting ₹` and update the price values.

### Update Review Content
In `index.html`, find the `testimonials` section and update review text, names, and dates.

### Change Colors
In `src/style.css`, update the CSS variables at the top:
```css
:root {
  --primary: #1B4332;      /* Dark forest green */
  --secondary: #2D6A4F;    /* Medium green */
  --accent: #D4AF37;       /* Luxury gold */
  --background: #F8F9F5;   /* Off-white */
  --dark: #081C15;         /* Near black green */
}
```

---

## SEO Configuration

The following SEO elements are already configured in `index.html`:

- ✅ `<title>` — keyword-rich page title
- ✅ `<meta name="description">` — 155-char description
- ✅ `<meta name="keywords">` — relevant resort keywords
- ✅ Open Graph tags (`og:title`, `og:description`, `og:type`)
- ✅ Twitter Card meta tags
- ✅ Schema.org `LocalBusiness` JSON-LD structured data
- ✅ Semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`)
- ✅ `robots.txt` (allows all crawlers)
- ✅ `alt` attributes on all images
- ✅ `aria-label` on interactive elements

**After deployment, also:**
1. Submit your sitemap to [Google Search Console](https://search.google.com/search-console)
2. Verify your business on [Google Business Profile](https://business.google.com)
3. Add your actual domain to the `og:url` and Schema.org `url` fields in `index.html`

---

## Performance Notes

| Metric | Value |
|--------|-------|
| Total JS (gzip) | ~2.86 KB |
| Total CSS (gzip) | ~4.60 KB |
| HTML (gzip) | ~6.54 KB |
| Images | Lazy-loaded, JPEG |
| Fonts | Preconnected (Google Fonts CDN) |

- All images use `loading="lazy"` for deferred loading
- CSS and JS are hashed for long-term cache efficiency
- No render-blocking scripts (all loaded at end of `<body>`)
- Google Fonts preconnect reduces font load time
- Animations use `transform` and `opacity` only — no layout thrashing

---

## Business Information

| Field | Value |
|-------|-------|
| Resort Name | Banashree Resort |
| Phone | +91 7001784207 |
| Address | 3C33+WVG, Joypur, Nutangram Radhamohanpur, West Bengal 722138 |
| Category | Luxury Nature Resort |
| Google Reviews | 484 reviews |
| Rating | 4.8 ★ |

---

## Support

For website modifications, additional features, or technical support, refer to this README or contact your developer.

---

*Built with ❤️ for Banashree Resort — Where Nature Embraces You*
