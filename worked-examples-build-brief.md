# Build Brief — NEOBA Worked-Examples Mockup Site

**For:** a coding agent. **Goal:** a minimal, self-contained website that presents 8 archival-clip "stations" in a fixed two-column layout, each with a working low-effort interaction. This is a **user-testing sample** for a museum/library exhibit concept — fidelity is "clean and clear," not production. Build it to be opened locally and shown to people in a room.

> This brief is the *only* thing you need. It is derived from a longer design doc; you don't need that doc. Build exactly what's specified here.

---

## 1. Tech stack — your choice, within these constraints

Pick whatever you're fastest in, as long as it:
- **Runs locally with near-zero setup** (ideally open `index.html` directly, or one command like `npm run dev`). No backend, no database, no auth, no API keys.
- **Is data-driven from a single config** (see §5). All 8 stations are the *same template* with different content — do not hand-build 8 pages.
- **Persists interaction state in `localStorage`** so aggregates accrete during a testing session. No server.
- **Is easy to screenshot and host statically** (e.g., GitHub Pages / Netlify drop).

Vanilla HTML/CSS/JS is perfectly sufficient. A light framework is fine if it stays no-fuss.

---

## 2. Global layout

Every station is the **same page shell**:

```
┌─────────────────────────────┬──────────────────────────────┐
│  ambient header: SOURCE LABEL (full width, quiet, thin)     │
├─────────────────────────────┼──────────────────────────────┤
│                             │  PROMPT  (top)                │
│   LEFT ~60%                 │  the question(s) — large,     │
│   <video> clip              │  the only loud text           │
│   plays in place            ├──────────────────────────────┤
│                             │  VISUAL CONTEXT / INTERACTION  │
│                             │  (bottom) — map · reveal ·     │
│                             │  tally · captions             │
└─────────────────────────────┴──────────────────────────────┘
```

- **Two columns** after generous padding/margins. Left ≈ 60% (the clip), right ≈ 40% (the scaffolding).
- **Right column splits top/bottom:** prompt on top, visual context + interaction below.
- **Responsive:** below ~800px wide, columns stack (clip on top, scaffolding below).
- **Navigation:** a simple **index page** listing all 8 stations as cards/links, plus prev/next between stations. A station is reachable by URL (`/#kinsman` or `/kinsman`).

**Visual tone (make it look like evidence, not advertising):**
- Mostly black/neutral background; the video is the brightest thing on screen.
- Thin, restrained typography. One accent color, used sparingly (interaction affordances only).
- Context graphics read like **documents on a table**, not glossy infographics.
- No drop shadows-as-decoration, no marketing gradients. Generous whitespace.

---

## 3. The 7 interaction types (all functional)

Build these as a small set of reusable components, selected per station via config `interaction`:

| `interaction` | Behavior | Reveal / aggregate |
|---|---|---|
| `pin-map` | User drops a memory-pin on a map of labeled entities. | Pins persist + accrete; seeded with a few prior pins. |
| `twin-pin` | Shows a present-day "twin" media panel beside prompt, **plus** a pin-map. | Same as pin-map. |
| `prediction-reveal` | User picks one categorical option, then a **reveal** plays. | Vote distribution bar + the reveal sequence. |
| `slider-opinion` | User drags a continuum (e.g., Better↔Worse); on release, reveal. | Aggregate distribution marker + reveal text/image. |
| `poll-binary` | Yes/No tap. | Live tally bar (e.g., "78% would throw"). |
| `prediction-number` | User guesses a number on a slider, then reveal lands the true value on a labeled meter. | Marker on meter + optional follow-up prompt. |
| `whatisit` | Free-text guess, then a **reveal card** explains what it is. | Reveal card; optionally show others' guesses. |
| `caption-wall` | Free-text caption; joins an accreting wall. | Captions accrete; seeded with a few. |

**Shared behaviors for all interactions:**
- **Seed aggregates with 3–8 fake prior responses** per station so the "room" never looks empty (this is a testing sample shown to small groups). Mark seeds clearly in config.
- **Persist to `localStorage`**, keyed per station. New responses join the seeds.
- **Reset hook:** `?reset` (or a hidden corner button) clears `localStorage` for a fresh session.
- Keep effort **one tap / one short input.** No multi-step forms.

---

## 4. Assets — all placeholders for now

Real archival footage is rights-gated and not included. **Use placeholders the swap is trivial later:**
- **Video:** a labeled placeholder is fine — a solid panel showing the filename + the source label + a play affordance, OR a short sample/looping stand-in. Wire a real `<video>` element pointing at the path so swapping in an MP4 is drop-in.
- **Images** (maps, reveals): use simple placeholder graphics (labeled boxes / basic SVG) where a real asset isn't provided.

Expected asset paths (create the folders, use placeholders):
```
assets/video/{kinsman,eclipse,publicsquare,mayfield,dunktank,readingmachine,wmms,pizza}.mp4
assets/img/eclipse_2024_twin.{jpg}        ← present-day twin
assets/img/publicsquare_{1978,1986,2016}.{jpg}   ← palimpsest sequence
assets/img/mayfield_strip.svg             ← strip map (or build in code)
assets/img/kinsman_map.{svg|jpg}          ← neighborhood map (or build in code, see §6)
```

---

## 5. Station config (the data model — build all 8 from this)

Drive the whole site from one array. Copy these verbatim; prompt strings are final.

```json
[
  {
    "id": "kinsman",
    "set": "worked",
    "title": "Cleveland's Cleanup Gap",
    "source": "WEWS Eyewitness News · 1982 · Marge Banks",
    "clip": "assets/video/kinsman.mp4",
    "prompt": [
      "The reporter never names this place — just streets. Can you place it?",
      "Look at what's on these blocks now. Anything surprise you?"
    ],
    "interaction": "pin-map",
    "context": {
      "map": {
        "boundary": { "show": true, "label": null, "abLabel": "Forgotten Triangle" },
        "entities": [
          { "name": "Rid-All Green Partnership", "kind": "farm", "deeper": "Founded ~2009–11 by three men who grew up here; built an urban farm on the same blocks. (Optional: link a founder oral-history clip.)" },
          { "name": "vacant lot", "kind": "vacant" },
          { "name": "school", "kind": "civic" },
          { "name": "church", "kind": "civic" },
          { "name": "vacant lot", "kind": "vacant" },
          { "name": "corner store", "kind": "retail" },
          { "name": "clinic", "kind": "civic" }
        ]
      }
    },
    "notes": "A/B the boundary label: default OFF (no name). A toggle or ?label=on flips it to 'Forgotten Triangle' for testing. Do NOT spotlight Rid-All — it is one pin among many."
  },
  {
    "id": "eclipse",
    "set": "worked",
    "title": "A Ghost Town Waits for the Lunar Eclipse",
    "source": "WEWS · July 1982",
    "clip": "assets/video/eclipse.mp4",
    "prompt": ["Downtown emptied out for this. Where were YOU for the 2024 eclipse?"],
    "interaction": "twin-pin",
    "context": {
      "twin": { "media": "assets/img/eclipse_2024_twin.jpg", "caption": "April 8, 2024 — Cleveland in the path of totality. Equal billing; neither panel is captioned as 'better.'" },
      "map": { "boundary": { "show": false }, "entities": [] }
    },
    "notes": "Twin media gets EQUAL visual weight with the clip. 2024 footage is a separate rights basket — placeholder only."
  },
  {
    "id": "publicsquare",
    "set": "worked",
    "title": "Public Square Gets a Facelift",
    "source": "WEWS · 1982",
    "clip": "assets/video/publicsquare.mp4",
    "prompt": ["They promised an amphitheater & fountains here. Did it happen?"],
    "interaction": "prediction-reveal",
    "context": {
      "options": ["Yes", "No", "Sort of"],
      "reveal": [
        { "img": "assets/img/publicsquare_1978.jpg", "caption": "1978 — the plan" },
        { "img": "assets/img/publicsquare_1986.jpg", "caption": "1986 — built: a terraced plaza + waterfall (no amphitheater)" },
        { "img": "assets/img/publicsquare_2016.jpg", "caption": "2016 — torn out, rebuilt as the current green" }
      ],
      "revealNote": "Constant across all three: the Soldiers' & Sailors' Monument survived. The record answers — present it as a photo sequence, not a captioned argument."
    }
  },
  {
    "id": "mayfield",
    "set": "worked",
    "title": "Fifty-One Traffic Lights on Mayfield Road",
    "source": "WEWS / TV5 · 1979 · Tappy Phillips",
    "clip": "assets/video/mayfield.mp4",
    "prompt": ["Mayfield Road today — vs. 1979?"],
    "interaction": "slider-opinion",
    "context": {
      "scale": { "left": "Better", "right": "Worse" },
      "reveal": "The SAME four cities — Cleveland Hts, Lyndhurst, Mayfield Hts, South Euclid — still run a NOACA plan on this strip today. Same road, same complaint, 45 years on.",
      "stripMap": "assets/img/mayfield_strip.svg",
      "followUp": "What's YOUR Mayfield Road? (optional pin)"
    },
    "notes": "Strip map shows the four city boundaries chopping the road — explains the dysfunction spatially."
  },
  {
    "id": "dunktank",
    "set": "teen",
    "title": "Akron Festival Cop Dunk Spectacle",
    "source": "WEWS · 1982 · Akron",
    "clip": "assets/video/dunktank.mp4",
    "prompt": ["Would you throw?"],
    "interaction": "poll-binary",
    "context": { "options": ["Yes", "No"] }
  },
  {
    "id": "readingmachine",
    "set": "teen",
    "title": "Reading Machine Demonstration",
    "source": "WEWS / TV5 · 1979",
    "clip": "assets/video/readingmachine.mp4",
    "prompt": ["What does this machine do?"],
    "interaction": "whatisit",
    "context": {
      "reveal": {
        "title": "A 1979 reading machine",
        "body": "Early assistive technology: it scans printed text and reads it aloud — built for blind and low-vision readers."
      }
    }
  },
  {
    "id": "wmms",
    "set": "teen",
    "title": "WMMS Decibel Record and Flats Nightlife",
    "source": "WEWS · 1982 · Bill Yunkin",
    "clip": "assets/video/wmms.mp4",
    "prompt": ["Cleveland fans tried to set a world record for loudest crowd. How loud did they get?"],
    "interaction": "prediction-number",
    "context": {
      "range": { "min": 30, "max": 130, "unit": "dB" },
      "scaleMarks": [
        { "at": 30, "label": "whisper" },
        { "at": 60, "label": "conversation" },
        { "at": 110, "label": "rock concert" },
        { "at": 120, "label": "jet engine" }
      ],
      "reveal": { "value": 119, "caption": "119 dB ≈ a jet engine. Guinness-record territory." },
      "followUp": "Loudest crowd you've ever been in?"
    }
  },
  {
    "id": "pizza",
    "set": "teen",
    "title": "Family Makes Pizza Together",
    "source": "WEWS / TV5 · 1979",
    "clip": "assets/video/pizza.mp4",
    "prompt": ["This is 1979. What gives it away?"],
    "interaction": "caption-wall",
    "context": {
      "seedCaptions": ["the kitchen", "the TV in the background", "honestly nothing", "the clothes"]
    }
  }
]
```

---

## 6. Two components that need a little more spec

**The Kinsman map (`pin-map`).** A neighborhood map with:
- A drawn **boundary shape** around the area. Label is **OFF by default**; a toggle (or `?label=on`) turns on "Forgotten Triangle" — this is an A/B testing variable, so make flipping it trivial.
- **Labeled entity pins** from config (Rid-All among vacant lots, a school, a church, a store, a clinic). Rid-All must **not** be visually emphasized over the others.
- Clicking an entity with a `deeper` field opens a small popover with that text.
- Users can **drop their own memory-pin** anywhere; pins persist + accrete (seed a few).
- Implementation: a static map image with absolutely-positioned overlay pins is fine (no map API/keys needed). Leaflet is acceptable if simpler for you, but don't require an API key.

**The decibel meter (`prediction-number`).** A horizontal scale 30→130 dB with the labeled marks from config. User drags a guess marker; on submit, animate the **true value (119)** landing on the meter with its caption, then show the follow-up prompt as an optional second input.

---

## 7. Out of scope (do not build)

- No backend, accounts, or real data collection.
- No real archival video (placeholders only — rights-gated).
- No physical-install concerns (projection, multi-screen). This is a single-screen web sample.
- No analytics, no tracking.

---

## 8. Done = acceptance criteria

1. An **index** lists all 8 stations; each opens its page; prev/next works.
2. Every station renders the **two-column shell** (responsive stack on narrow screens) with clip-left, prompt-top-right, context/interaction-bottom-right.
3. **All 7 interaction types function**, show an aggregate or reveal, and **persist across reloads** via `localStorage`, seeded so they never look empty.
4. The **Kinsman boundary label** can be toggled on/off without a code change.
5. Runs locally with **minimal setup** and is **statically hostable**.
6. Swapping a placeholder MP4/image for a real file is a **drop-in path change**, no refactor.

---

*Build brief, 2026-06-10. Derived from the design sketch [[01 Develop/CPL NEOBA LOC/design/worked-examples-mockups.md|worked-examples-mockups.md]] — that doc holds the reasoning; this one holds the spec.*
