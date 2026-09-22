# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

- Astro with static site generation
- TypeScript in strict mode
- Tailwind CSS with CSS custom properties for design tokens
- Astro components and small vanilla TypeScript modules; no client UI framework
- pnpm with a committed lockfile and current Node.js LTS pinned in `.nvmrc`
- GitHub source control and Pages deployment, with Cloudflare DNS
- Content collections backed by Markdown or YAML; no CMS at launch

## Users

The primary customers are residential property owners in Peterson Excavating & Landscaping's northeastern Minnesota service area who need dependable excavation, site preparation, septic, utility, driveway, clearing, retaining-wall, or aggregate services. Contractors and light-commercial customers are secondary audiences.

Customers need to understand whether Peterson Excavating & Landscaping handles their type of work and location, assess the quality of past work, and quickly call, text, or submit enough project information to arrange an estimate. Aggregate customers also need clear pickup, delivery, material, quantity, and ordering information.

## Product Purpose

The website explains Peterson Excavating & Landscaping's capabilities, demonstrates workmanship through authentic project evidence, helps customers determine fit, and turns qualified interest into phone calls, text messages, excavation estimate requests, or material-order requests.

Success means that qualified customers can confidently identify the right service, see credible evidence of relevant work, understand the next step, and contact the company with useful project details. Most excavation estimates require a site visit.

## Positioning

Peterson Excavating & Landscaping is positioned first around complete, high-quality residential site work: one locally experienced excavation partner can take a new-construction site from clearing and stumping through driveway, foundation or slab preparation, septic, utilities, and finish preparation. Its offer also includes large natural-rock and boulder retaining walls and aggregate pickup or delivery.

Quality workmanship, local roots, lifelong industry experience, and authentic proof of completed work are the principal trust signals. Contractors and light-commercial customers remain supported without displacing the residential focus.

## Operating Context

- Calling and texting Trish are the primary contact paths, especially on mobile.
- Excavation estimate requests go to Trish's regular email and may include photos, plans, septic designs, and other relevant files.
- Material ordering uses a dedicated flow rather than the excavation estimate form. A future real-time result is a nonbinding quote; submitting the request neither confirms the order nor collects payment.
- Peterson Excavating & Landscaping reviews material availability, delivery access, delivery conditions, and final pricing before accepting an order.
- The same approximate coverage area applies to excavation and material delivery. Current working limits are Two Harbors, Cloquet, and Cotton; Superior must not be listed. Final wording remains unapproved.
- Website content is maintained in version control and published through the normal deployment workflow.

## Capabilities and Constraints

### Services to represent

- Complete excavation and site preparation
- Foundation and basement excavation
- Slab preparation
- Driveways
- Septic system installation and replacement
- Water and sewer service lines
- Underground infrastructure
- Tree clearing, stumping, and tree removal
- Large natural-rock and boulder retaining walls
- Topsoil placement and site finishing
- Aggregate pickup and delivery

Preliminary aggregate products are pit-run gravel, Class 5, crushed rock, trap rock, riprap, and boulders. The final product list and sizes are open decisions.

### Boundaries

- Do not promote general or detailed landscaping, patios, sidewalks, pavers, concrete work, planting, shrubbery, block retaining walls, or septic system design.
- Do not publish equipment hourly rates. Trucking may sometimes be billed hourly, but no public rate is approved.
- Do not implement or publish material-pricing logic until prices, delivery zones, minimum quantities, fuel assumptions, taxes, update ownership, and disclaimer language are approved.
- Do not imply rigid service-area limits until final boundaries are confirmed.
- Do not use embedded Google Maps, a CMS, a database, an application server, or server-side rendering at launch.
- Do not autoplay video with sound. Hero video must be muted, inline, looping, deferred behind primary content, and replaced by a poster for reduced-motion and data-saving preferences. Do not show playback controls.

### Open decisions and missing inputs

- Final aggregate materials, sizes, delivery terms, and whether prices will be published
- Complete equipment list
- Credentials, insurance details, NPCA information, septic license details, and approved license numbers
- Company founding year and final history details
- Final service-area wording
- Approved project photos, videos, and featured projects
- Final email address, business hours, and backup form recipient
- Current domain access and transfer information
- Approved Google reviews and review link
- File-upload count and size limits
- Final quote rules and nonbinding-quote disclaimer language

## Brand Commitments

- The business name is Peterson Excavating & Landscaping.
- The client-supplied logo is the authoritative mark. Its approved website treatment uses Peterson burgundy infill with a crisp white stroke, while Peterson burgundy remains the defining brand color.
- The logo artwork includes “Excavating & Landscaping,” but website copy must not promote landscaping services outside the approved excavation scope.
- The home-page hero title is **Local Experience. Lasting Results.**
- The voice should be direct, credible, locally grounded, and specific about the work without exaggeration.
- Authentic project photography and video are required. Unsafe, questionable, or professionally inappropriate images must be excluded rather than altered with AI.
- Company history should accurately cover Jason Peterson's local roots, lifelong industry experience, and family background in trucking and excavation once the facts are approved.

## Evidence on Hand

- The repository contains the product interview brief, information architecture, and technical plan in `INTERVIEW_BRIEF.md`, `STRUCTURE.md`, and `TECHNICAL.md`.
- The approved phone number is 218-355-0992. Real project photography, featured-project details, equipment data, credentials, approved customer reviews, and the remaining contact details have not yet been supplied. Future work must not fabricate them.
- Approved credentials and insurance information may become evidence once supplied and verified.

## Product Principles

1. Lead with residential site-work needs while keeping contractor and light-commercial paths clear.
2. Prove workmanship with authentic projects, reviews, credentials, and concrete capability details rather than unsupported claims.
3. Make calling, texting, and sending useful project information effortless, particularly on mobile.
4. Keep excavation estimates and aggregate-order requests distinct because they require different information and confirmation steps.
5. State service limits, prices, and capabilities precisely; unresolved business rules remain visibly undecided until approved.

## Accessibility & Inclusion

The site must use semantic HTML, keyboard-accessible interactions, visible focus states, reduced-motion support, mobile-first responsive behavior, accessible form feedback, and accessible gallery or lightbox behavior. Hero video requires a static alternative for reduced-motion and data-saving preferences and must not show playback controls. Critical browser flows should receive automated axe checks and desktop and mobile verification before launch.
