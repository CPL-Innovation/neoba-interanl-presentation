export type InteractionType =
  | 'pin-map'
  | 'twin-pin'
  | 'prediction-reveal'
  | 'slider-opinion'
  | 'poll-binary'
  | 'prediction-number'
  | 'whatisit'
  | 'caption-wall'

export type Entity = {
  name: string
  kind: 'farm' | 'vacant' | 'civic' | 'retail'
  deeper?: string
  /** position on map, percent of map width/height — assigned per-station for placeholder map */
  x?: number
  y?: number
}

export type Station = {
  id: string
  set: 'worked' | 'teen'
  title: string
  source: string
  clip: string
  prompt: string[]
  interaction: InteractionType
  context: any
  notes?: string
}

export const stations: Station[] = [
  {
    id: 'kinsman',
    set: 'worked',
    title: "Cleveland's Cleanup Gap",
    source: 'WEWS Eyewitness News · 1982 · Marge Banks',
    clip: 'assets/video/kinsman.mp4',
    prompt: [
      "The reporter never names this place — just streets. Can you place it?",
      "Look at what's on these blocks now. Anything surprise you?",
    ],
    interaction: 'pin-map',
    context: {
      map: {
        boundary: { show: true, label: null, abLabel: 'Forgotten Triangle' },
        entities: [
          { name: 'Rid-All Green Partnership', kind: 'farm', x: 52, y: 48, deeper: 'Founded ~2009–11 by three men who grew up here; built an urban farm on the same blocks. (Optional: link a founder oral-history clip.)' },
          { name: 'vacant lot', kind: 'vacant', x: 30, y: 35 },
          { name: 'school', kind: 'civic', x: 64, y: 41 },
          { name: 'church', kind: 'civic', x: 40, y: 62 },
          { name: 'vacant lot', kind: 'vacant', x: 72, y: 65 },
          { name: 'corner store', kind: 'retail', x: 22, y: 58 },
          { name: 'clinic', kind: 'civic', x: 58, y: 72 },
        ],
      },
      seedPins: [
        { x: 26, y: 22, label: 'grew up two blocks over' },
        { x: 80, y: 24, label: 'my grandma lived here' },
        { x: 44, y: 86, label: 'caught the bus near here' },
      ],
    },
    notes: "A/B the boundary label: default OFF (no name). A toggle or ?label=on flips it to 'Forgotten Triangle' for testing. Do NOT spotlight Rid-All — it is one pin among many.",
  },
  {
    id: 'eclipse',
    set: 'worked',
    title: 'A Ghost Town Waits for the Lunar Eclipse',
    source: 'WEWS · July 1982',
    clip: 'assets/video/eclipse.mp4',
    prompt: ['Downtown emptied out for this. Where were YOU for the 2024 eclipse?'],
    interaction: 'twin-pin',
    context: {
      twin: { media: 'assets/video/eclipse_2024_twin.mp4', caption: 'April 8, 2024 — Cleveland in the path of totality. Equal billing; neither panel is captioned as "better."' },
      seedPins: [
        { x: 38, y: 58, label: 'Edgewater' },
        { x: 52, y: 44, label: 'Public Sq' },
        { x: 30, y: 72, label: 'Lakewood' },
        { x: 68, y: 32, label: 'Sandusky' },
      ],
    },
  },
  {
    id: 'publicsquare',
    set: 'worked',
    title: 'Public Square Gets a Facelift',
    source: 'WEWS · 1982',
    clip: 'assets/video/publicsquare.mp4',
    prompt: ['Is Public Square getting better over time?'],
    interaction: 'prediction-reveal',
    context: {
      options: ['Yes', 'No', 'Mixed'],
      reveal: [
        { img: 'assets/img/publicsquare_1895.jpg', caption: '1895 — Public Square in the streetcar era' },
        { img: 'assets/img/publicsquare_1910.jpg', caption: '1910 — the monument and early plantings', source: 'https://www.loc.gov/pictures/resource/det.4a19145/' },
        { img: 'assets/img/publicsquare_1982.jpg', caption: '1982 — the Square when this report aired' },
        { img: 'assets/img/publicsquare_1986.jpg', caption: '1986 — built: a terraced plaza + waterfall (no amphitheater)' },
        { img: 'assets/img/publicsquare_2014.jpg', caption: '2014 — the plaza torn out, mid-reconstruction', source: 'https://www.facebook.com/groups/ClevelandStreets/posts/2042033929725372/' },
        { img: 'assets/img/publicsquare_2016.jpg', caption: '2016 — torn out, rebuilt as the current green' },
      ],
      revealNote: "Constant across every era: the Soldiers' & Sailors' Monument survived. The record answers — present it as a photo sequence, not a captioned argument.",
      hooks: [
        'They promised an amphitheater & fountains in 1978. Did those ever get built?',
        'And who was each version of the Square built for?',
      ],
      seedVotes: { Yes: 3, No: 4, Mixed: 3 },
    },
  },
  {
    id: 'mayfield',
    set: 'worked',
    title: 'Fifty-One Traffic Lights on Mayfield Road',
    source: 'WEWS / TV5 · 1979 · Tappy Phillips',
    clip: 'assets/video/mayfield.mp4',
    prompt: ['Mayfield Road today — vs. 1979?'],
    interaction: 'slider-opinion',
    context: {
      scale: { left: 'Better', right: 'Worse' },
      reveal: 'The SAME four cities — Cleveland Hts, Lyndhurst, Mayfield Hts, South Euclid — still run a NOACA plan on this strip today. Same road, same complaint, 45 years on.',
      stripMap: 'assets/img/mayfield_strip.svg',
      followUp: "What's YOUR Mayfield Road? Name a street.",
      followUpSeeds: [
        'Warrensville Center Rd — a light every block',
        'Pearl Rd in Parma, bumper to bumper',
        'Brookpark Rd by the airport',
        'Chagrin Blvd, endless red lights',
        'Detroit Ave in Lakewood at rush hour',
        'W. 117th, always backed up',
        'Lee Rd through the Heights',
        'Ridge Rd in Old Brooklyn',
      ],
      seedSliders: [22, 38, 55, 70, 78, 84],
    },
    notes: 'Strip map shows the four city boundaries chopping the road — explains the dysfunction spatially.',
  },
  {
    id: 'dunktank',
    set: 'teen',
    title: 'Akron Festival Cop Dunk Spectacle',
    source: 'WEWS · 1982 · Akron',
    clip: 'assets/video/dunktank.mp4',
    prompt: ['Who would YOU put in the dunk tank?'],
    interaction: 'caption-wall',
    context: {
      display: 'tagcloud',
      seedCaptions: ['my math teacher', 'the principal', 'my big brother', 'the mayor', 'my boss', 'whoever invented homework'],
      note: "Open-ended, not yes/no. Renders as a TAG CLOUD — repeated answers grow (folksonomy engine; these human tags also feed the human-vs-VLM pipeline comparison, so it's on-mission). Deliberately generalizes away from 'the cop': keeps it playful and sidesteps the police-relations thread (the same corpus holds NAACP / Michael Woods accountability clips). A facilitator can pull the heavier thread if a teen goes there — don't force it.",
    },
  },
  {
    id: 'readingmachine',
    set: 'teen',
    title: 'Reading Machine Demonstration',
    source: 'WEWS / TV5 · 1979',
    clip: 'assets/video/readingmachine.mp4',
    prompt: ['What does this machine do?'],
    interaction: 'whatisit',
    context: {
      reveal: {
        title: 'A 1979 reading machine',
        body: 'Early assistive technology: it scans printed text and reads it aloud — built for blind and low-vision readers.',
      },
      seedGuesses: ['a printer', 'a fax machine?', 'some kind of scanner', 'old computer'],
    },
  },
  {
    id: 'wmms',
    set: 'teen',
    title: 'WMMS Decibel Record and Flats Nightlife',
    source: 'WEWS · 1982 · Bill Yunkin',
    clip: 'assets/video/wmms.mp4',
    prompt: ['Cleveland fans tried to set a world record for loudest crowd. How loud did they get?'],
    interaction: 'prediction-number',
    context: {
      range: { min: 30, max: 130, unit: 'dB' },
      scaleMarks: [
        { at: 30, label: 'whisper' },
        { at: 60, label: 'conversation' },
        { at: 110, label: 'rock concert' },
        { at: 120, label: 'jet engine' },
      ],
      reveal: { value: 119, caption: '119 dB ≈ a jet engine. Guinness-record territory.' },
      followUp: "Loudest crowd you've ever been in?",
      seedGuesses: [85, 95, 102, 115, 125],
    },
  },
  {
    id: 'pizza',
    set: 'teen',
    title: 'Family Makes Pizza Together',
    source: 'WEWS / TV5 · 1979',
    clip: 'assets/video/pizza.mp4',
    prompt: ['Does your family still cook together? What do you make?'],
    interaction: 'caption-wall',
    context: {
      seedCaptions: ['tacos every Sunday', 'we mostly order out now', "my grandma's dumplings", 'spaghetti, but rarely', 'nobody cooks at my house'],
      note: 'Open-ended + personal, not spot-the-difference. Seeds deliberately span the range — families who still cook (often a cultural dish) AND families who don\'t — so the wall sparks talk and surfaces diversity on its own.',
    },
  },
]

export function findStation(id: string | undefined): Station | undefined {
  return stations.find(s => s.id === id)
}

export function neighborStations(id: string): { prev?: Station; next?: Station } {
  const i = stations.findIndex(s => s.id === id)
  if (i < 0) return {}
  return {
    prev: i > 0 ? stations[i - 1] : undefined,
    next: i < stations.length - 1 ? stations[i + 1] : undefined,
  }
}
