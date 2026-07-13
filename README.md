# Helmholt HomeBuyers Inc. — Website

A fast, modern, conversion-focused website for Helmholt HomeBuyers Inc.
Built as a static site (HTML/CSS/JS) — no build step, no dependencies. It works
anywhere: open the files directly, or host on any static host.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home — hero, situations we solve, how it works, why us, testimonials, service area, FAQ |
| `sell.html` | Sell Your House — the main "get a cash offer" lead-capture page |
| `how-it-works.html` | The 3-step process explained in detail |
| `properties.html` | Available & recently sold property listings |
| `investors.html` | Private Investors partnership page |
| `about.html` | Company story + Jason & Carrie Helmholt |
| `contact.html` | Contact info + message form |

Supporting files: `css/styles.css`, `js/main.js`, `assets/` (logo, favicon, artwork).

## How to preview locally

Just double-click **`index.html`** to open it in your browser. Everything is
linked with relative paths, so it works straight from this folder.

(Or run a local server: `python -m http.server 8000` in this folder, then visit
`http://localhost:8000`.)

## ⚠️ Before you go live — replace these placeholders

I used placeholders where I didn't have your real details. Search-and-replace
each across all `.html` files:

| Placeholder | Replace with |
| --- | --- |
| `(314) 555-0100` | Your real phone number |
| `+13145550100` | Same number, digits only, in the `tel:` links |
| `info@helmholthomebuyers.com` | Your real email address |
| Social links (`href="#"`) | Your Facebook / Instagram / LinkedIn URLs (in each footer) |
| Property listings in `properties.html` | Your real photos, prices, and addresses |
| Testimonials in `index.html` | Real reviews (with permission), or remove the section |
| Stats (`500+ homeowners helped`, etc.) | Confirm these numbers are accurate before publishing |

**Contact form:** The forms currently show a "thank you" message but do not yet
send anywhere. To receive submissions, connect them to a form service such as
[Formspree](https://formspree.io) or [Netlify Forms] — I can wire this up for you.

## Deploying (free options)

- **Netlify / Vercel / Cloudflare Pages** — drag this folder into their dashboard,
  or connect a repo. Free tier, instant HTTPS, custom domain support.
- **Your current host (Network Solutions)** — upload these files via the file
  manager / FTP to replace the old site.

Point your domain at whichever host you choose. I can walk you through it.

## Customizing

- **Colors** live at the top of `css/styles.css` under `:root` (brand navy &
  orange are pulled from your logo).
- **Logo** is `assets/logo.svg` (and `logo-white.svg` for dark backgrounds).
  Swap in a raster version anytime if you prefer.
