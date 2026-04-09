export const content = {
  hero: {
    title: 'Mix and Accidentally Learn',
    subtitle: 'LOCal Libraries \u00b7 Concept 1 Progress \u00b7 April 2026',
    attribution: 'Jungu Guo \u00b7 Cleveland Public Library \u00b7 for the IDT',
  },

  startingPoint: {
    heading: 'Where We Left Off',
    image: '/images/six-concepts-drawing.jpg',
    imageAlt: 'Six concept drawings from the team feedback exercise',
    description:
      'The team converged on clear signals across all six concepts.',
    concepts: [
      { name: 'We Interrupt This Broadcast', number: 1 },
      { name: 'Channel Surfing', number: 2 },
      { name: 'TV Symphony', number: 3 },
      { name: "Don't Stop Believin'", number: 4 },
      { name: 'News Threads', number: 5 },
      { name: 'Cleveland: The Gathering', number: 6 },
    ],
  },

  convergenceSignals: {
    heading: 'Cross-Cutting Convergence Signals',
    caption:
      "These aren\u2019t Concept 1 things or Concept 3 things \u2014 they\u2019re design principles the whole team converged on.",
    signals: [
      'TV wall / multi-screen aesthetic',
      'Tangible interaction',
      'Take-home artifacts',
      'Branch activation',
      'Community contribution / citizen archivist',
      'Intergenerational conversation',
    ],
  },

  conceptEvolution: {
    heading: 'The Concept Reshaped',
    image: '/images/concept-rendering.jpg',
    imageAlt: 'Concept 1 rendering showing the resculpted experience',
    methodology:
      'Not fixing what was there \u2014 asking what the concept needs to become, given everything we now know.',
    before: [
      { label: 'Anchor desk is the center', detail: 'Core verb: perform' },
      {
        label: 'Community contribution',
        detail: 'Absent from the concept',
      },
      {
        label: 'Living room zone',
        detail:
          'Passive spectating \u2014 duplicated a function without adding its own creative mode',
      },
    ],
    after: [
      { label: 'Mixing console is the heart', detail: 'Core verb: mix' },
      {
        label: 'Community memory annotation',
        detail: 'First-class element',
      },
      {
        label: 'Monitor wall for welcome tier',
        detail:
          'Navigable archive \u2014 spectator tier gets its own creative mode',
      },
    ],
    welcomeTierNote:
      "Rachel\u2019s co-design team gave us three tiers: spectators, browsers, and remixers. The welcome tier needed its own creative mode, not just a couch to sit on.",
  },

  constraintsAsAssets: {
    heading: 'The constraints kept turning into assets',
    pairs: [
      {
        constraint: '1970s\u201382 timeframe',
        constraintDetail: 'A digitization accident, not a creative choice',
        asset: 'Intergenerational engine',
        assetDetail: 'Teen + grandparent + the same footage',
      },
      {
        constraint: '"You need a primary audience"',
        constraintDetail:
          "Rachel\u2019s co-design team: an experience for everyone loses its edge",
        asset: 'Teens as the sweet spot',
        assetDetail:
          'Studio 525 synergy \u00b7 mixing is their native verb \u00b7 analog materiality differentiates from EOLS',
      },
      {
        constraint:
          '2\u20135 second clips, watermarked, transformative only',
        constraintDetail: 'Rights framework restriction',
        asset: 'TikTok-native format',
        assetDetail:
          'Every restriction is a creative gift \u2014 because teens are the ones making the remixes',
      },
      {
        constraint: 'The exhibit lives downtown',
        constraintDetail: 'But the system serves 27 branches across neighborhoods',
        asset: 'Branch activation network',
        assetDetail:
          'Archive geographic data maps to neighborhood footage \u00b7 Mobile monitor wall module \u00b7 Branch-specific content',
        neighborhoods: ['Hough', 'Collinwood', 'Glenville', 'Near West Side'],
      },
    ],
    locIntegration:
      'LOC materials show up as feeds alongside NEOBA video. The broadcast metaphor holds non-video material naturally \u2014 photographs, maps, documents, sheet music.',
    transition:
      "So that\u2019s where the concept landed after the constraints. But there was one more tension \u2014 between the archive\u2019s nature and the remix idea. That one took working with real data to figure out.",
  },

  archiveDiscovery: {
    heading: 'The Archive Discovery',
    siobhanNote:
      "This work started with Siobhan Hagan\u2019s inventory \u2014 349 tapes, 14,242 items, descriptions from the original tape labels.",
    stat: {
      before: '~60%',
      beforeLabel: 'unknowable',
      after: '~94%',
      afterLabel: 'classified',
      caption:
        '14,242 items \u00b7 14 narrative threads \u00b7 entity extraction \u00b7 genre estimation',
    },
    dashboardLink: 'https://neoba-archive-explorer.vercel.app',
    dashboardLabel: 'Explore the dashboard \u2192',
    insights: [
      {
        label: 'Not a crime blotter',
        detail:
          'Crime tops at 20% \u2014 but Sports, Daily Life, and Community together are 41%. A portrait of a city holding itself together.',
      },
      {
        label: 'Lake Erie as texture',
        detail:
          "The #2 most-mentioned location \u2014 not as news, but as the station\u2019s weather backdrop. Pure Layer 1 material.",
      },
      {
        label: '1982 holds half the archive',
        detail:
          'The imbalance reflects institutional decisions about what to keep, not a uniform record. A design constraint worth knowing.',
      },
    ],
    twoLayers: {
      layer1: {
        label: 'Layer 1: Remix Surface',
        image: '/images/layer1-remix-surface.jpg',
        imageAlt: 'Layer 1 example — streets, storefronts, weather footage',
        description:
          'Streets, storefronts, lakefronts, weather, crowds. Narrative-neutral at the fragment level. The material teens grab because it looks interesting.',
      },
      layer2: {
        label: 'Layer 2: Meaning Layer',
        image: '/images/layer2-meaning-layer.jpg',
        imageAlt: 'Layer 2 example — interviews, speeches, historical events',
        description:
          'Interviews, speeches, events with historical weight. Kent State. The default. Hough. What gives the remix depth.',
      },
      connector: "They don\u2019t need to work the same way.",
    },
    positioning:
      'An art museum remix is all aesthetic, no weight. A documentary kiosk is all weight, no play. This could live in between.',
    hypothesisNote:
      "This is promising on paper \u2014 but it\u2019s a hypothesis. Whether Layer 1 hooks teens, whether Layer 2 surfaces through curiosity \u2014 that\u2019s what the next step is designed to test.",
  },

  remixFramework: {
    heading: 'The Remix Experience \u2014 Six Beats',
    preamble:
      'Designing the experience before designing the controls.',
    beats: [
      {
        word: 'Encounter',
        description: 'Content is already in motion \u2014 you wade into it',
      },
      {
        word: 'Reach',
        description:
          'Something catches your eye \u2014 you want to grab it',
      },
      {
        word: 'Combine',
        description:
          'You put fragments next to each other \u2014 curious what happens',
      },
      {
        word: 'Feel',
        description: 'You see what you made \u2014 and it hits you',
      },
      {
        word: 'Iterate',
        description: 'You swap something \u2014 the meaning shifts',
      },
      {
        word: 'Claim',
        description: "You save it, share it \u2014 it\u2019s yours",
      },
    ],
  },

  washingtonsJourney: {
    heading: 'The Washingtons',
    subtitle: 'The ceiling case \u2014 the aspirational visit',
    image: '/images/washingtons-journey.jpg',
    imageAlt: 'The Washingtons user journey — Marcus, Denise, and Vivian at the exhibit',
    personas: {
      marcus: { name: 'Marcus', age: 16, role: 'Technical fluency' },
      denise: { name: 'Denise', age: 42, role: 'Bridges' },
      vivian: { name: 'Vivian', age: 71, role: 'Lived memory' },
    },
    narrative: [
      'They come through the door and the monitor wall is already alive \u2014 dozens of feeds running, archival footage cycling.',
      'Vivian stops. She recognizes a street corner.',
      "Marcus drifts to the mixing console. Denise hangs back, watching him and watching her mother. The roles distribute themselves naturally \u2014 nobody assigned them.",
      "Marcus starts pulling clips \u2014 a blizzard, a Browns crowd, a street scene with wild 1970s cars. He\u2019s browsing by vibe, not by history.",
      "Vivian keeps commenting: the bus she used to take, the reporter who was on every night, the building that\u2019s gone now.",
      "Marcus puts a steel mill clip next to a lakefront clip. The juxtaposition is accidental but the meaning isn\u2019t.",
      'He learned something about his city without being taught it.',
      "Denise suggests they save it. Marcus names it. A 15-second remix \u2014 his aesthetic choices, his grandmother\u2019s context, his mother\u2019s encouragement.",
    ],
    pullQuotes: [
      '"Oh look, that\u2019s the corner where I grew up on!"',
      'Marcus has the technical fluency. Vivian has the lived memory. Denise bridges.',
      'He learned something about his city without being taught it.',
      '"Made at CPL \u00d7 LOC."',
    ],
    finding:
      "The intergenerational dynamic isn\u2019t something we need to design. The archive\u2019s timeframe does it for us.",
    videoPlaceholder: 'Video Mockup \u2014 Concept 1 Showreel',
  },

  thursdayCrew: {
    heading: 'The Thursday Crew',
    subtitle:
      'The floor case \u2014 the realistic Tuesday afternoon',
    image: '/images/thursday-crew.jpg',
    imageAlt: 'The Thursday Crew — four Studio 525 teens at the mixing console',
    detail: '4 Studio 525 teens',
    narrative: [
      'Four teens, they\u2019ve been making stuff in the studio already. No grandparent. No family narrative. Just teens and a mixing console.',
      "They don\u2019t take turns. They negotiate, overlap, argue, build on each other\u2019s choices.",
      'One grabs a blizzard clip. Another swaps it for a Browns crowd. A third layers in street footage.',
      "The browse-by-vibe instinct is the same. The \u2018accidentally learn\u2019 mechanism still works.",
    ],
    finding:
      'The concept holds without the intergenerational dynamic. The teen-only version is still compelling.',
    designFinding:
      "Console needs parallel control zones \u2014 four teens don\u2019t take turns.",
  },

  otherPersonas: [
    {
      name: 'Amara',
      detail: '14, solo',
      test: 'Does the content hook her in 5 seconds?',
      finding:
        'Starter mix mode is essential \u2014 teens transform, they don\u2019t create from nothing.',
    },
    {
      name: 'Earl',
      detail: '68, solo Cleveland native',
      test: 'Does the welcome tier have its own experience?',
      finding:
        'The monitor wall IS his experience. Community annotation IS his creative act.',
    },
  ],

  bridge: {
    heading: 'The Biggest Unknown',
    gap: "Every journey depends on the same assumption: a visitor encounters archival footage and wants to DO something with it. Encounter leads to reach. That transition is the entire concept \u2014 and it hasn\u2019t been tested.",
    question:
      'Will teens lean in to 1978 footage? Or check out after three seconds?',
    openItems: [
      'Spatial constraints \u2014 sound, visitor flow, accessibility \u2014 need design work with the fabrication vendor.',
      'LOC materials integration \u2014 sketched conceptually, but the mechanics of how visitors discover and pull LOC content into mixes needs more design.',
    ],
    transition:
      "That\u2019s the single biggest unknown. And it\u2019s what drives the next step.",
  },

  proposal: {
    youtubeId: 'd0mg9DxvfZE',
    heading: 'So \u2014 that gap.',
    headingAccent: '',
    opener: "The encounter-to-remix transition. The most fundamental thing we don\u2019t know yet is: does this content actually hook teens?",
    testsHeading: 'What it tests',
    doesNotTestHeading: "What it intentionally doesn\u2019t test",
    logicChain: [
      'Content engagement is the foundation.',
      'Test content and interface in sequence, not simultaneously.',
      'The cheapest test: a facilitated encounter.',
      'A host as a human-powered browse-by-vibe engine.',
    ],
    tests: [
      'Content hook',
      'Visual interest',
      'Spontaneous meaning-making',
      'Emotional register',
    ],
    doesNotTest: [
      'Self-directed interaction',
      'Interface design',
      'Full creative loop',
    ],
    doesNotTestNote:
      'These are the next question \u2014 not the first question.',
    closingQuestion: 'Does this feel like the right next test?',
  },

  footer: {
    line1: 'LOCal Libraries Initiative',
    line2: 'Cleveland Public Library \u00d7 Library of Congress',
    line3: 'April 2026',
  },
}
