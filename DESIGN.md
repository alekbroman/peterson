---
name: Peterson Excavating & Landscaping
description: Modern working ground for credible, locally rooted residential excavation.
colors:
  peterson-burgundy: "#591024"
  charcoal: "#151515"
  earth-charcoal: "#252321"
  ink: "#1f2326"
  cool-stone: "#ececea"
  mist: "#f6f6f3"
  white: "#ffffff"
  muted: "#62676a"
  structural-line: "#c9c9c4"
  warm-sand: "#d5c7ad"
  warm-sand-light: "#e4dccd"
typography:
  display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(4rem, 8.4vw, 7.5rem)"
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(3rem, 5.2vw, 5.25rem)"
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(1.8rem, 3vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Barlow, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "Barlow, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  control: "0.75rem"
  container: "1rem"
  circular: "50%"
spacing:
  compact: "0.75rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2rem"
  page-gutter: "clamp(1.25rem, 4vw, 4.75rem)"
  section: "clamp(5.5rem, 10vw, 10rem)"
components:
  button-primary:
    backgroundColor: "{colors.peterson-burgundy}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.95rem 1.35rem"
    height: "3.75rem"
  button-primary-hover:
    backgroundColor: "{colors.peterson-burgundy}"
    textColor: "{colors.white}"
  button-secondary:
    backgroundColor: "rgba(15, 15, 15, 0.42)"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.95rem 1.35rem"
    height: "3.75rem"
  navigation-cta:
    backgroundColor: "{colors.peterson-burgundy}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.85rem 1.25rem"
    height: "3.25rem"
  service-row-active:
    backgroundColor: "rgba(89, 16, 36, 0.96)"
    textColor: "{colors.white}"
    typography: "{typography.title}"
    rounded: "{rounded.container}"
    padding: "1.35rem 1.5rem"
---

# Design System: Peterson Excavating & Landscaping

## Overview

**Creative North Star: "Modern Working Ground"**

Peterson Excavating & Landscaping presents residential excavation with cinematic scale and the clarity of a well-run job site. The system is direct, credible, and locally grounded: category-standard forms are executed with exceptional hierarchy, spacing, photography, and restraint rather than novelty or contractor-template decoration.

Its visual world is modern and cutting edge without borrowing the gloss of a technology startup. Strong condensed type, broad tonal fields, crisp rules, authentic project media, and the Peterson burgundy create confidence; cool stone and mist keep the experience practical and legible. The result should feel built, not styled.

The supplied Peterson logo is authoritative. Its approved website treatment preserves the original lockup and letterforms while using Peterson burgundy infill with a crisp white stroke; supporting copy must never broaden the offer into landscaping.

**Key Characteristics:**

- Cinematic residential excavation grounded in authentic work.
- Condensed, forceful headings paired with plainspoken sans-serif text.
- Peterson burgundy used decisively against charcoal, warm sand, cool stone, mist, and white.
- Rounded, tactile controls with crisp rules and generous breathing room.
- Flat tonal composition with structural depth only where function requires it.

## Colors

The palette combines Peterson burgundy with cool, workmanlike neutrals; contrast is strong and color is purposeful rather than decorative.

### Primary

- **Peterson Burgundy** (`peterson-burgundy`, `#591024`): The single defining brand color for primary actions, selected states, progress lines, the logo infill, and decisive section accents.

### Neutral

- **Site Charcoal** (`charcoal`): The primary dark field for media framing, proof chapters, and calls to action.
- **Earth Charcoal** (`earth-charcoal`): A warmer dark neutral for trust-focused chapters, separating company proof from Site Charcoal service and closing chapters.
- **Hard Ink** (`ink`): Default text on light surfaces.
- **Cool Stone** (`cool-stone`): A grounded neutral surface and quiet separator context.
- **Ground Mist** (`mist`): The default light canvas and the full-width fixed-navigation surface after the hero.
- **Clean White** (`white`): High-contrast text and the approved stroke around the burgundy logo treatment.
- **Weathered Gray** (`muted`): Supporting copy and lower-emphasis metadata on light fields.
- **Survey Line** (`structural-line`): Crisp dividers, list rules, and structural boundaries.
- **Warm Sand** (`warm-sand`): Earth-toned metadata and compact labels on charcoal and burgundy fields, replacing dusty pink tints.
- **Pale Sand** (`warm-sand-light`): Higher-legibility supporting copy on deep burgundy fields.

### Named Rules

**The Burgundy Is the Brand Rule.** Peterson Burgundy (`#591024`) is the sole burgundy hue across navigation, actions, selection, rules, and text accents. Create state changes with opacity, neutral overlays, underlines, or motion—not alternate red shades.

**The Honest Neutral Rule.** Light sections remain cool and quiet, while dark sections stay charcoal rather than drifting into decorative gradients or blue-black tech styling. Earth Charcoal separates trust content from Site Charcoal service and closing chapters, while burgundy remains an accent instead of another full-section background.

## Typography

**Display Font:** Barlow Condensed (with sans-serif fallback)  
**Body Font:** Barlow (with sans-serif fallback)

**Character:** The pairing is industrial without being theatrical. Compressed, tightly led display type carries confident statements; the body face stays open, familiar, and readable for practical project information.

### Hierarchy

- **Display** (700, fluid display scale, 0.94 line-height): Short, high-impact statements and primary page titles; keep line lengths compact and let the condensed silhouette do the work.
- **Headline** (700, fluid headline scale, 0.94 line-height): Section openings and major chapter transitions.
- **Title** (700, fluid title scale, 0.94 line-height): Service names, proof-card titles, and supporting feature headings.
- **Body** (400, base reading scale, 1.55 line-height): Explanations and project details, generally capped near 72 characters per line.
- **Label** (600, compact scale, 0.08em tracking): Short metadata, status, and control labels; uppercase is reserved for small contextual labels rather than long copy.

### Named Rules

**The Short Condensed Line Rule.** Display type makes impact through short line breaks and scale; never set dense paragraphs in Barlow Condensed.

**The Plainspoken Body Rule.** Barlow body copy is direct and specific. Avoid inflated claims, ornamental italics, and vague marketing language.

## Layout

The system uses full-width tonal chapters with content inset by a fluid page gutter (`page-gutter`). The homepage follows a deliberate sequence: media-led hero, Ground Mist services, Earth Charcoal Why Peterson, Cool Stone testimonials, Site Charcoal materials, Ground Mist service area, and a continuous Site Charcoal contact-and-footer close. Major sections alternate light and dark until the final contact chapter intentionally joins the footer as one dark closing field. Major sections breathe at the larger responsive section interval (`section`), while internal groups use a compact rhythm of `compact`, `sm`, `md`, and `lg`. Desktop layouts favor asymmetric two-column grids: a decisive statement or work list is balanced by proof, detail, or action.

At the medium breakpoint (62rem), complex grids collapse to a single column and proof stages retain generous depth. At the compact breakpoint (48rem), actions become full width, the service selector becomes an inline single-open accordion, and connected horizontal information becomes vertical. Primary navigation drops its link row at 72rem and becomes a right-aligned icon menu at 48rem; contact actions remain in the page flow rather than a fixed bottom dock.

**The Chapter, Not Card Grid Rule.** Create hierarchy with broad fields, alignment, rules, and spacing. Do not break every idea into a floating card.

## Elevation & Depth

The system is flat and tonal by default. Depth comes from dark-versus-light chapters, media overlays, crisp borders, and scale—not stacks of shadows. The Ground Mist header and mobile menu use a one-pixel Survey Line bottom divider instead of elevation. A subtle hero title shadow may protect legibility over authentic media but must not become a glow.

### Shadow Vocabulary

- **Fixed Header:** A one-pixel Survey Line divider used after the persistent header gains its Ground Mist field; no shadow.
- **Mobile Menu:** The same one-pixel Survey Line divider separates the open Ground Mist panel from page content; no shadow.
- **Media Legibility:** A restrained text shadow used only when live imagery would otherwise compromise display-type contrast.

### Named Rules

**The Flat-by-Default Rule.** Resting sections, controls, and containers do not float. Use tonal contrast and rules first; shadow only fixed or overlaid navigation.

## Shapes

The form language is rounded, crisp, and workmanlike. Buttons and fields use the control radius (`control`), while grouped selectors, proof containers, navigation surfaces, and large content regions use the container radius (`container`). Thin borders and one-pixel rules preserve structure so the softer geometry never becomes bubbly.

**The Rounded, Not Bubbly Rule.** Rounded corners are the default across controls and containers. Use the two established radius steps consistently; reserve full pills for genuinely compact status controls and circles for icon-only controls.

## Components

### Buttons

Buttons are tactile, confident, and restrained.

- **Shape:** Rounded control corners with a solid minimum touch height; labels are compact and semibold.
- **Primary:** Peterson burgundy with white text and an optional lightweight arrow indicating forward action.
- **Hover / Focus:** Primary hover brightens to Working Burgundy. All interactive controls use a visible cool-light focus outline with generous offset.
- **Secondary:** White text over a translucent charcoal field with a high-contrast white border; hover deepens the charcoal without adding lift.
- **Disabled / Pending:** Preserve the component silhouette, lower opacity, and use explicit pending language rather than pretending an unavailable action works.

### Cards / Containers

Containers behave like project boards and work stages rather than soft cards.

- **Corner Style:** Rounded container corners, generally `1rem`, with overflow clipped when rows share one surface.
- **Background:** Charcoal or a nearby dark tonal step for proof content; mist remains the default light canvas.
- **Shadow Strategy:** None at rest; refer to the Flat-by-Default Rule.
- **Border:** Fine structural lines define edges and internal rows.
- **Internal Padding:** Spacious, responsive insets that contract from large desktop staging to the `lg` step on compact screens.

### Navigation

The supplied logo anchors navigation and must preserve its lockup and letterforms. Use the approved Peterson burgundy infill with a crisp white stroke across the site. Primary navigation uses the sequence Services, Why Peterson, Testimonials, Materials, Service Area, and Contact, with medium-weight Barlow and restrained underlines on hover and keyboard focus. The fixed header begins transparent over the hero. As the hero's bottom edge moves behind the header, a full-width 95%-opaque Ground Mist surface rises from the header's bottom edge in direct proportion to scroll, with no opacity animation, inset, rounded shell, or shadow. Once revealed, a one-pixel Survey Line bottom divider separates it from page content. Reversing the scroll lowers the surface behind the hero. At compact widths, a right-aligned, icon-only Lucide menu control switches between Menu and X. Opening it uses the same 95%-opaque Ground Mist surface and ink navigation as the revealed header; the logo and menu control remain above the disclosure panel. The panel closes on an outside press or Escape. Do not add a fixed bottom navigation dock.

### Service Rows

Service rows are full-width, rule-separated controls with balanced horizontal padding, a condensed title, practical supporting copy, and a slim directional arrow. The selected row uses the same 96%-opaque Deep Earth Burgundy field as the primary estimate actions, with white text; its content must retain the same inset as every resting row. Hover or selection shifts the arrow horizontally without lifting the row.

On compact screens, each row expands its own supporting copy directly beneath the title and rotates the arrow downward. Only one row remains open, and the detached desktop proof stage is removed so a service and its explanation never become spatially separated.

**The Icon Semantics Rule.** Use Lucide chevrons for disclosure, right arrows for forward navigation or a new task, and down arrows for in-page jumps to content below. Mobile service rows use a downward chevron that rotates upward while expanded; estimate links that jump to the page’s contact section use a down arrow rather than a right arrow.

### Material Rows

Material entries are border-separated rows clipped by one rounded group container on Deep Earth Burgundy. The condensed material name carries hierarchy while the small tracked availability label stays secondary.

### Motion

Motion follows a measured-ground thesis: content is uncovered through controlled clipping, and state changes preserve spatial relationships. The hero owns the authored focal entrance; later sections use quieter motion only where it explains selection, sequence, or feedback.

- Use the shared `motionTokens` timing scale and the confident `cubic-bezier(0.16, 1, 0.3, 1)` arrival curve.
- Keep content visible by default and layer Motion enhancements over the complete static composition.
- Apply `will-change` only while an animation is running, then remove it.
- Prefer transforms, opacity, and bounded clip paths. Avoid continuous parallax and raw per-frame scroll listeners.
- Reduced-motion visitors receive the complete static composition, no large spatial movement, and no autoplaying hero video.
- The hero entrance runs only when the hero is initially visible and does not replay after in-page navigation.
- The hero poster carries the media entrance immediately while the browser fetches the responsive video source. The poster and video begin at the same 0.2-second frame, and the decoded video crossfades over the poster only after its first frame has painted; the hidden video does not replay the poster's scale entrance.

## Do's and Don'ts

### Do:

- **Do** preserve the supplied Peterson logo lockup and letterforms with the approved burgundy infill and white stroke.
- **Do** keep Peterson burgundy as the defining color and pair it with warm sand, charcoal, cool stone, mist, and white.
- **Do** use authentic excavation photography and video as proof, with overlays only as needed for legibility.
- **Do** build hierarchy with decisive type scale, broad tonal chapters, crisp rules, and generous spacing.
- **Do** keep controls consistently rounded, tactile, accessible, and explicit about unavailable or pending actions.
- **Do** respect visible focus, reduced-motion behavior, and reachable mobile contact paths.

### Don't:

- **Don't** broaden copy or visual positioning into landscaping; the logo wording does not change the approved excavation scope.
- **Don't** alter, redraw, crop into, or add effects beyond the approved burgundy infill and white stroke to the supplied Peterson logo.
- **Don't** introduce black-and-yellow equipment-collage styling, badge-heavy contractor tropes, or novelty construction graphics.
- **Don't** make the system feel like a technology startup through blue glows, glassmorphism, pill controls, excessive gradients, or floating card stacks.
- **Don't** mix sharp-cornered fields or buttons into the rounded control system, or exaggerate the radius until standard controls read as pills.
- **Don't** invent project proof, credentials, reviews, or polished media when authentic approved evidence is unavailable.
- **Don't** treat the homepage's current first-viewport composition as a global layout requirement; surface briefs own page-specific composition.
