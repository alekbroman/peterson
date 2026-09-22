# Peterson Excavating & Landscaping Website — Technical Stack

## Architecture

- **Framework:** Astro, using static site generation
- **Language:** TypeScript in strict mode
- **Styling:** Tailwind CSS v4 utilities for all page and component styling. Do not add scoped `<style>` blocks or bespoke component selectors. `src/styles/global.css` is limited to Tailwind imports, `@theme` design tokens, and named keyframes.
- **Interactivity:** Astro components and small vanilla TypeScript modules; no client UI framework
- **Package manager:** pnpm with a committed lockfile
- **Runtime:** Current Node.js LTS, pinned in `.nvmrc`

The site will ship primarily as static HTML and CSS. JavaScript will be added only for features such as navigation, gallery behavior, form feedback, and hero-video controls.

## Content

- Astro content collections using Markdown or YAML for services, projects, reviews, and aggregate materials
- No CMS
- Content changes are versioned in Git and published through the normal deployment workflow

## Hosting and Deployment

- **Source control:** GitHub
- **Hosting:** GitHub Pages with a custom domain
- **Deployment:** GitHub Actions builds and publishes the Astro `dist` output
- **DNS:** Cloudflare DNS

## Forms

- A custom, accessible Astro/Tailwind estimate-request form
- **Backend:** Basin Pro
- **Abuse protection:** Cloudflare Turnstile, Basin spam filtering, domain restriction, and server-side validation
- **Attachments:** PDF, JPG, PNG, and HEIC with explicit file-count and size limits
- Uploaded documents use Basin's virus scanning and secure attachment handling
- Trish receives submission notifications; a backup recipient should also be configured
- Customers receive a branded confirmation email
- Pipedream may be added later for secondary automation, but is not the system of record

## Images and Video

- **Images:** Local source files processed by Astro into responsive modern formats
- **Video:** Cloudinary for the landing-page hero video and future project videos
- Hero video will be muted, inline, autoplaying, and looping, with:
  - A lightweight poster image
  - Responsive mobile and desktop crops
  - No audio track
  - No visible playback controls
  - A static poster for reduced-motion and data-saving preferences
  - Deferred loading so text and calls to action render first

## Analytics and SEO

- **Analytics:** Plausible Analytics
- Track estimate submissions, phone clicks, text clicks, review-link clicks, and materials inquiries
- Astro Sitemap, canonical URLs, Open Graph metadata, `robots.txt`, and Schema.org JSON-LD
- Google Search Console configured at launch
- No advertising pixels or cookie-heavy analytics by default

## Frontend Standards

- Self-hosted WOFF2 fonts
- **Icons:** Lucide via `@lucide/astro`; use Lucide components for every interface icon rather than hand-authored SVG paths, icon fonts, Unicode glyphs, or emoji
- Accessible gallery/lightbox behavior using PhotoSwipe or an equivalent lightweight library
- Semantic HTML, keyboard navigation, visible focus states, and reduced-motion support
- Responsive behavior designed mobile-first

## Quality Assurance

- Astro Check for framework and TypeScript validation
- ESLint and Prettier with Astro and Tailwind support
- Playwright for critical browser flows
- axe accessibility checks
- Lighthouse checks for performance, accessibility, SEO, and best practices
- Desktop and mobile visual verification before launch

## Explicitly Excluded

- Server-side rendering at launch
- React or another client UI framework
- Database or application server
- Content management system
- Embedded Google Maps
- Autoplaying video with sound
- Public hourly-rate or material-pricing logic until the business rules are approved

The architecture can later add isolated server-rendered routes, a CMS, or a delivery-price service without replacing the static marketing site.
