# Awaken Wellness — Design Brainstorm

## Design Philosophy Options

<response>
<text>
### Idea 1: Organic Minimalism — "Still Water"

**Design Movement:** Wabi-sabi meets modern wellness editorial

**Core Principles:**
- Asymmetric layouts with intentional negative space that breathes
- Organic, hand-drawn-feeling dividers and section breaks
- Layered depth through translucent overlays and soft shadows
- Content hierarchy driven by scale contrast, not color contrast

**Color Philosophy:**
- Background: warm cream (#F7F3EE) — evokes parchment, naturalness, safety
- Primary: deep lotus purple (oklch(0.42 0.14 310)) — grounded, not garish
- Secondary: sage green (oklch(0.55 0.09 155)) — healing, earth
- Accent: soft lavender (oklch(0.82 0.06 300)) — calm, feminine
- Text: dark charcoal (oklch(0.22 0.01 65)) — readable, warm

**Layout Paradigm:**
- Split-screen hero: text left, image right with organic crop
- Staggered card grids with varying heights
- Full-bleed section breaks with subtle grain texture
- Left-aligned text throughout (not centered)

**Signature Elements:**
- Lotus petal SVG motif used as section dividers
- Thin horizontal rules in sage green
- Soft circular image crops with lavender border halos

**Interaction Philosophy:**
- Hover states: gentle upward float (translateY -4px) with shadow deepening
- CTA buttons: pill-shaped with subtle gradient fill
- Scroll: fade-in-up entrance animations

**Animation:**
- Entrance: opacity 0→1 + translateY 20px→0, 0.6s ease-out, staggered
- Hover: 0.2s ease transitions on all interactive elements
- No jarring motion; everything feels like breathing

**Typography System:**
- Headings: Cormorant Garamond (elegant serif, high contrast strokes)
- Body: DM Sans (clean, modern, highly readable)
- Accent labels: DM Sans 500 weight, letter-spacing 0.08em, uppercase
</text>
<probability>0.07</probability>
</response>

<response>
<text>
### Idea 2: Grounded Editorial — "Root & Rise"

**Design Movement:** Modern healthcare editorial meets botanical illustration

**Core Principles:**
- Strong typographic hierarchy with oversized serif display text
- Warm earth tones anchored by deep forest green
- Photography-forward with generous image real estate
- Trust built through structured, readable information architecture

**Color Philosophy:**
- Background: soft warm white (oklch(0.98 0.005 90)) — clean but not sterile
- Primary: forest green (oklch(0.38 0.10 155)) — grounding, authority, nature
- Secondary: lotus purple (oklch(0.50 0.12 310)) — healing, spiritual depth
- Accent: warm amber/earth (oklch(0.72 0.08 65)) — warmth, approachability
- Text: near-black warm (oklch(0.18 0.01 65))

**Layout Paradigm:**
- Horizontal banded sections alternating image-left/text-right
- Oversized H1 display text that bleeds into imagery
- Narrow max-width content columns (680px) for body text readability
- Sticky navigation with transparent-to-solid scroll behavior

**Signature Elements:**
- Thin vertical green line accent beside section headings
- Circular botanical illustration badges
- Full-width photography with dark gradient overlays for text legibility

**Interaction Philosophy:**
- Underline-draw hover effect on nav links
- Button hover: background fill slides in from left
- Card hover: border color shifts from muted to primary

**Animation:**
- Section reveal: slide-in from bottom, 0.5s ease
- Staggered list items: 0.1s delay between each
- Smooth page transitions via opacity fade

**Typography System:**
- Headings: Playfair Display (high-contrast serif, editorial gravitas)
- Body: Inter (clean, neutral, universally readable)
- Subheadings: Playfair Display Italic for warmth
</text>
<probability>0.06</probability>
</response>

<response>
<text>
### Idea 3: Serene Depth — "Lotus & Light" ← SELECTED

**Design Movement:** Contemplative wellness meets premium healthcare branding

**Core Principles:**
- Deep, layered backgrounds with luminous foreground elements
- Generous vertical rhythm with intentional breathing room
- Contrast between soft organic shapes and precise typographic grids
- Every section earns its place through purposeful content hierarchy

**Color Philosophy:**
- Background: warm cream-white (oklch(0.97 0.008 85)) — safe, inviting, not clinical
- Primary: rich lotus purple (oklch(0.44 0.13 308)) — healing, depth, trust
- Secondary: sage/forest green (oklch(0.48 0.10 152)) — nature, groundedness, health
- Accent: soft lavender (oklch(0.84 0.07 298)) — calm, gentle, feminine
- Earth accent: warm taupe (oklch(0.75 0.04 70)) — warmth, approachability
- Text: deep warm charcoal (oklch(0.20 0.012 65))

**Layout Paradigm:**
- Asymmetric hero: large image occupies 55% right, text anchored left with generous padding
- Diagonal section transitions (clip-path) between major content blocks
- Masonry-style condition cards with hover depth effects
- Sticky nav that transitions from transparent to frosted glass on scroll

**Signature Elements:**
- Lotus petal SVG watermark used as subtle background texture in hero
- Thin sage-green vertical accent lines beside H2 headings
- Pill-shaped CTAs with lotus purple gradient (left to right)

**Interaction Philosophy:**
- Hover: cards lift with shadow deepening + subtle scale(1.02)
- CTAs: gradient shifts on hover, slight glow effect
- Nav links: soft underline animation slides in from left

**Animation:**
- Hero: staggered entrance — headline first (0.3s), subtext (0.6s), CTA (0.9s)
- Sections: fade-up on scroll intersection (IntersectionObserver)
- Smooth 300ms transitions on all interactive elements

**Typography System:**
- Display/H1: Cormorant Garamond 600 — elegant, high-contrast, trustworthy
- H2/H3: Cormorant Garamond 500 Italic for warmth
- Body: DM Sans 400/500 — clean, modern, accessible
- Labels/Caps: DM Sans 600, letter-spacing 0.1em, uppercase
- Scale: 14/16/18/24/32/48/64px
</text>
<probability>0.09</probability>
</response>

---

## Selected Design: "Lotus & Light" (Idea 3)

Warm cream backgrounds, rich lotus purple as primary, sage green as secondary, Cormorant Garamond for headings, DM Sans for body. Asymmetric layouts, diagonal section breaks, frosted-glass nav, and staggered scroll animations.
