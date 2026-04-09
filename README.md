# Mix and Accidentally Learn

A scroll-based editorial storytelling website that accompanies a live presentation for the LOCal Libraries Initiative. The presenter narrates while scrolling through the site; the site surfaces keywords, frameworks, pull quotes, and visual structures that reinforce the spoken narrative.

**Presenter:** Jungu Guo, Cleveland Public Library, for the IDT  
**Audience:** Library of Congress Interactive Design Team  
**Date:** April 2026

---

## Quick Start

```bash
cd presentation
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in a browser. Best viewed at **1440px wide** (laptop/external monitor).

## Production Build

```bash
npm run build
npm run preview
```

---

## Structure

The site is one continuous scroll with **12 sections** (0-11), following a three-movement emotional arc:

| Movement | Sections | Color Accent | Register |
|---|---|---|---|
| **Opening** | 0 Hero | Brand blue | Clean, authoritative |
| **1: Discovery** | 1-6 | Teal / Blue | Cool, analytical |
| **2: People** | 7-8 Washingtons + Thursday Crew | Coral | Warm, human, narrative |
| **Bridge** | 9 The Biggest Unknown | Minimal | Austere, honest pause |
| **3: Proposal** | 10-11 | Green | Forward, confident |

### Sections

0. **Hero** — "Mix and Accidentally Learn" title, project info, attribution.
1. **Starting Point** — Six concept names in a compact grid + concept drawing image.
2. **Convergence Signals** — Six consensus themes, staggered fade-in.
3. **Concept Evolution** — Before/after toggle (click to compare) + concept rendering image.
4. **Constraints as Assets** — Three pairs with gold highlight reveals + LOC integration callout.
5. **Archive Discovery** — Big number (~60% → ~94%, both visible) + dashboard insights + two-layer content model with images.
6. **Remix Framework** — Showreel video + six beats: Encounter, Reach, Combine, Feel, Iterate, Claim.
7. **Washingtons Journey** — Emotional peak. Narrative walkthrough with prominent role labels (56px, conference-table readable) + journey image.
8. **Thursday Crew** — The floor case. Four teens, parallel control zones + compact Amara/Earl personas + journey image.
9. **Bridge** — "The Biggest Unknown." Generous whitespace, austere tone. The pause between warmth and proposal.
10. **Proposal** — "So — that gap." Opener, YouTube embed, logic chain, tests/doesn't-test, closing question.
11. **Footer** — Attribution.

---

## Content Editing

**All visible text lives in `src/data/content.ts`** — this is a hard requirement. To change wording, open that file and edit the strings. No component files need to be touched. Both the website and the Markdown export reflect changes automatically.

---

## Assets

### Images

Place images in **`public/images/`**. Colored placeholders show until the real file is dropped in.

| Filename | Section | What it shows |
|---|---|---|
| `six-concepts-drawing.jpg` | Where We Left Off | Drawing of the six concepts |
| `concept-rendering.jpg` | The Concept Reshaped | Concept 1 rendering |
| `layer1-remix-surface.jpg` | Archive Discovery | Layer 1 example (streets, weather) |
| `layer2-meaning-layer.jpg` | Archive Discovery | Layer 2 example (interviews, events) |
| `washingtons-journey.jpg` | The Washingtons | Family journey illustration |
| `thursday-crew.jpg` | The Thursday Crew | Teens at the mixing console |

Any format works (`.jpg`, `.png`, `.webp`).

### Video

The showreel is in `src/assets/video/showreel.mov` and displays in the Remix Framework section.

### YouTube

Set the YouTube video ID in `content.ts` under `proposal.youtubeId` (replace `YOUR_VIDEO_ID` with the part after `v=` in the URL).

---

## Export

Two export options accessible via floating buttons (bottom-right corner):

- **Export PDF** — Uses `window.print()` with a print stylesheet. All animations forced to final state, sections on separate pages.
- **Export Markdown** — Generates a `.md` file from `content.ts`. Downloads as `LOCal-Concept1-Progress-2026-04-08.md`.

---

## Design System

### Typography
- **Work Sans** (sans-serif) — headings, labels, keywords, UI
- **Spectral** (serif) — narrative moments, pull quotes, thesis statements

### Color Palette (CPL Brand)

| Token | Hex | Usage |
|---|---|---|
| Brand Primary | `#0057B7` | Primary accent, section indicators |
| Warm Yellow | `#E9E186` | Text selection highlight |
| Warm Gray | `#CBC4BC` | Muted text, dividers |
| Coral | `#FF8D7E` | Movement 2 (people, warmth) |
| Gold | `#F1C400` | Constraint-as-asset highlights |
| Teal | `#94B7BB` | Movement 1 (discovery, analysis) |
| Blue Mid | `#4298B5` | Secondary blue |
| Green | `#56944F` | Movement 3 (proposal, forward) |

### Animation Philosophy

> Animation is punctuation, not decoration.

- Fade-up on scroll (600ms, ease-out)
- Staggered entrance for lists (150-200ms between items)
- Gold highlight reveal (400ms, scaleX expansion)
- Archive stat: ~60% appears first, ~94% fades in after 1.2s delay (side by side)
- Before/after crossfade (300ms, click-triggered)
- `prefers-reduced-motion` fully supported

No parallax. No scroll-jacking. No bounce.

---

## Tech Stack

- **React + Vite** (TypeScript)
- **Framer Motion** — scroll-triggered animations, reduced motion support
- **CSS Custom Properties** — design tokens
- **Intersection Observer** — scroll detection

Bundle: ~112KB gzipped JS + 3.3KB CSS.

---

## File Structure

```
presentation/
  public/
    images/                      -- Drop real images here
  src/
    App.tsx                      -- Section composition + ExportControls
    data/content.ts              -- All text content (single source of truth)
    lib/exportMarkdown.ts        -- Markdown generation from content.ts
    styles/
      tokens.css                 -- CSS custom properties
      global.css                 -- Base styles, utilities
      print.css                  -- @media print overrides for PDF export
    hooks/
      useScrollReveal.ts         -- Intersection Observer hook
    components/
      ScrollReveal.tsx           -- Animated scroll-trigger wrapper
      HighlightText.tsx          -- Gold highlight expanding behind text
      VideoPlayer.tsx            -- Video embed with poster fallback
      BeforeAfter.tsx            -- Click toggle with crossfade
      ImagePlaceholder.tsx       -- Image with colored rectangle fallback
      ExportControls.tsx         -- PDF + Markdown export buttons
    sections/
      Hero.tsx                   -- Section 0
      StartingPoint.tsx          -- Section 1
      ConvergenceSignals.tsx     -- Section 2
      ConceptEvolution.tsx       -- Section 3
      ConstraintsAsAssets.tsx    -- Section 4
      ArchiveDiscovery.tsx       -- Section 5
      RemixFramework.tsx         -- Section 6
      WashingtonsJourney.tsx     -- Section 7
      ThursdayCrew.tsx           -- Section 8
      Bridge.tsx                 -- Section 9
      Proposal.tsx               -- Section 10
      Footer.tsx                 -- Section 11
    assets/video/                -- Video files (showreel.mov)
```

---

## Companion Documents

- `2026-04-08-presentation-website-requirements.md` — Full build spec
- `2026-04-08-idt-presentation-narrative.md` — Strategic framing
- `2026-04-08-idt-presentation-script.md` — Section-by-section script
