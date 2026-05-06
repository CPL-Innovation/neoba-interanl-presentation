export const utContent = {
  title: {
    heading: "Branches User Testing",
    headline:
      "Six playlists curated. Five branches visited. Eight sessions conducted. Seven written responses collected. What we learned.",
    meta: [
      "LOCal Libraries Initiative — CPL × LOC",
      "Testing date: April 28, 2026",
      "Synthesis: May 2026",
      "Presented by Jungu Guo",
    ],
    image: "./assets/images/session-overview.jpg",
    imageAlt: "Wide hero shot of a testing session",
    speakerNote:
      "Quick context — this was our first multi-participant content engagement test. Small sample, directional findings, but the patterns are clear.",
  },

  whatWeTested: {
    heading: "What we tested",
    headline: "Six curated playlists from the 1977–1982 NEOBA archive",
    playlistLink:
      "https://clevnet.sharepoint.com/:f:/s/LOCalCleveland2/IgBWGJZui0dWRbjYV6IKmmDuAXEqpaiCTR-ecD6x8JqPQO0?e=G5iszL",
    playlists: [
      {
        name: "Old Time Cleveland",
        character:
          "Streetscape and ambient period footage — no historical knowledge needed",
      },
      {
        name: "Then & Now",
        character:
          "Old technology and old ways of doing things — reading machines, period ads, yellow pages, leaf suckers",
      },
      {
        name: "Fun Moments",
        character: "Humor, levity, surprising clips",
      },
      {
        name: "Human Stories",
        character: "Daily life, ordinary people, human-interest",
      },
      {
        name: "Daily Debates",
        character:
          "Everyday civic — traffic, garbage cleanup, welfare applicants, downtown renovation",
      },
      {
        name: "Civic Headaches",
        character:
          "Political and speech-heavy — labor strikes, ERA, school taxes, formal speeches",
      },
    ],
    formatNotes: [
      "Each playlist paired with text prompts to spark reflection",
      "Sessions were viewer-paced",
      "Leslie facilitated where teens were present",
      "7 written responses + observed teen sessions",
    ],
    screenshots: [
      {
        src: "./assets/screenshots/playlist-old-time-cleveland.png",
        alt: "Old Time Cleveland playlist screenshot",
      },
      {
        src: "./assets/screenshots/playlist-then-and-now.png",
        alt: "Then & Now playlist screenshot",
      },
      {
        src: "./assets/screenshots/playlist-fun-moments.png",
        alt: "Fun Moments playlist screenshot",
      },
      {
        src: "./assets/screenshots/playlist-human-stories.png",
        alt: "Human Stories playlist screenshot",
      },
      {
        src: "./assets/screenshots/playlist-daily-debates.png",
        alt: "Daily Debates playlist screenshot",
      },
      {
        src: "./assets/screenshots/playlist-civic-headaches.png",
        alt: "Civic Headaches playlist screenshot",
      },
    ],
    speakerNote:
      "Six playlists. The names will turn out to matter — they encode the warm-up arc we found, in order from top to bottom.",
  },

  whoParticipated: {
    heading: "Who participated",
    headline: "Cross-age sample, skewed 45+",
    demographics: [
      { ageBand: "65+", responses: "3" },
      { ageBand: "45–64", responses: "1" },
      { ageBand: "25–44", responses: "2" },
      { ageBand: "18–24", responses: "1" },
      {
        ageBand: "Under 18",
        responses: "Observed only — no written feedback",
      },
    ],
    feedbackLink:
      "https://clevnet.sharepoint.com/:f:/s/LOCalCleveland2/IgDcjzysCrRASon40nPHFt7tAf6LRxAaXjj6bTcoomm4CNI?e=4d2Frx",
    surveyLink:
      "https://forms.cloud.microsoft/Pages/DesignPageV2.aspx?origin=NeoPortalPage&subpage=design&id=4GIkiTBmW02jEbkA_x5DN__S0NiQKcxDpxk8bO4FzDdURThBQVpCTEZaSUdKMTRVVFE0VTRFSkhMRC4u&analysis=true",
    speakerNote:
      "The single 18–24 voice and the absence of written teen feedback are the two sample limits worth holding in mind as we walk through the findings.",
  },

  finding1: {
    heading: "Finding 1",
    headline: "Age strongly shaped engagement, but not perfectly linear.",
    bullets: [
      "The 65+ participants were consistently very likely to keep watching, and their responses were often rooted in lived memory, nostalgia, or personal connection.",
      "Some younger and middle-aged viewers were also very likely to keep watching, especially when the clips connected to contemporary issues, debate, labor, taxes, schools, or surprise reveals.",
      "For teens, the archive is less a destination than a launchpad — it works when a facilitator helps turn old footage into a conversation they can actually enter.",
    ],
    engagementModes: [
      { age: "65+", mode: "memory retrieval device" },
      { age: "45–64", mode: "then-vs-now civic comparison" },
      { age: "25–44", mode: "debate / argumentative entry" },
      { age: "Under 25", mode: "stylistic / cultural-distance artifact" },
    ],
    implication:
      " It means the collection is not inherently “for older people.” It just needs different interpretive strategies for different audiences.",
    pullQuote: {
      text: "The different newscasters really stood out to me in their appearance and mannerisms.",
      attribution: "User 6, 18–24",
      reaction: "Enlightening",
      watchMore: "Not likely",
    },
    speakerNote:
      "The Enlightening / Not Likely pairing is the most diagnostic single response in the dataset. Intellectual value delivered, but did not earn continued viewing. That’s the gap to close for the youngest target band.",
  },

  finding2: {
    heading: "Finding 2",
    headline:
      "For elders, memory isn’t just a reaction to the footage — it is also the content",
    quotes: [
      {
        text: "ERA — and what was the actual outcome?",
        attribution: "User 1, 65+",
        context:
          "Watching the footage made her want to know the outcome, not the history.",
      },
      {
        text: "The Police search for fugitive Melvin Day clip.",
        attribution: "User 7, 65+",
        context:
          "Recognized the subject from his own career as a young Lakewood Housing police officer. One-word reaction: Memories.",
      },
    ],
    implication:
      "The exhibit needs a way to capture these retrieval moments. The strongest meaning-making moments in this round were memory retrievals — and we currently have no mechanism to catch them.",
    image: "./assets/images/elder-participant.jpg",
    imageAlt: "Photo from a senior session",
    image2: "./assets/images/elder-era.jpg",
    image2Alt: "ERA session photo",
    speakerNote:
      "An audio booth, a written-prompt card station, even a one-tap “tag this moment for myself” interaction — light-touch is fine. Just having the option is the difference between a memory exhibit and a memory-capture exhibit.",
  },

  finding3: {
    heading: "Finding 3",
    headline: "The HARDEST civic tier produced the strongest standout recall",
    standouts: [
      { clip: "ERA outcome (User 1)", playlist: "Civic Headaches" },
      { clip: "School strike (User 2)", playlist: "Civic Headaches" },
      { clip: "School taxes (User 3)", playlist: "Civic Headaches" },
      {
        clip: "Raises for janitors / union (User 4)",
        playlist: "Civic Headaches",
      },
      { clip: "ERA clip (User 5)", playlist: "Civic Headaches" },
      {
        clip: "Newscasters’ appearance (User 6)",
        playlist: "Unsure",
      },
      {
        clip: "Melvin Day police search (User 7)",
        playlist: "Ambiguous",
      },
    ],
    bigNumber: "5 of 7",
    bigNumberCaption:
      "standout clips sit in Civic Headaches — the hardest tier in the curation.",
    quotes: [
      {
        text: "I thought Civic Headaches was still relevant.",
        attribution: "User 2, 45–64",
        context: "chose Civic Headaches as most engaging playlist",
      },
      {
        text: "It was a topic I was more familiar with and it felt frustrating to feel that we are still in the same place 40–50 years later.",
        attribution: "User 6, 18–24",
        context: "",
      },
    ],
    implication:
      "Lighter content opens the door. Heavier content carries the meaning once people are inside. Don’t defer hard civic content — sequence around it. The 1977–1982 civic disputes have not aged. Patrons are auditing today against this footage.",
    speakerNote:
      "This is the most counterintuitive finding in the deck. Don’t defer hard civic content — sequence around it. The 1977–1982 civic disputes have not aged. Patrons are auditing today against this footage.",
  },

  finding4: {
    heading: "Finding 4",
    headline:
      "“Debate past vs. present” prompts beat memory prompts decisively",
    promptStats: [
      {
        format: "Debate past vs. present",
        count: "4 of 7",
        note: "across 65+, 45–64, and 25–44",
      },
      { format: "Memory / conversation", count: "2 of 7", note: "" },
      {
        format: "Short historical explanation",
        count: "1 of 7",
        note: "the disengaged 18–24",
      },
    ],
    observations: [
      "We had assumed memory triggering would be the universal interpretive grammar.",
      "The data says argumentative, comparison-mode prompts pull harder across age bands.",
      "Notably: the playlist names Daily Debates and Civic Headaches already lean argumentative. The category language and the prompt grammar reinforce each other.",
    ],
    defaultPrompt:
      "“Would the same thing happen today? Would you decide differently? What would your version of this fight look like?”",
    implication:
      "Memory prompts can stay — but as elder-targeted features, not as the universal interpretive layer.",
    speakerNote:
      "Counterintuitive but actionable. People are running counterfactuals against the past. The prompt format that names that activity outperforms prompts that ask for retrieval.",
  },

  finding5: {
    heading: "Finding 5",
    headline: "Mixed-age sessions outperformed single-generation",
    bullets: [
      "The session that produced the strongest dynamic mixed participants in their 70s, 50s, and 40s.",
      "Older participants served as knowledge holders.",
      "Younger participants brought fresh-eye questions and present-day comparisons.",
      "The content created the conversation rather than competing with it.",
      "In sessions with teens specifically, Leslie’s facilitation was the difference between content carrying and content checking out.",
    ],
    pullQuote: {
      text: "The senior participants became bridges between the footage and younger viewers. Even when younger participants did not recognize the names, places, or issues on screen, they could still access the content through the memories and explanations of older participants.",
      attribution: "Jungu, observation notes",
    },
    implication:
      "Empirical support for the intergenerational frame the project has been gravitating toward. Not yet a controlled comparison — but a directional finding from a session designed with care.",
    image: "./assets/images/intergenerational-session.jpg",
    imageAlt: "Photo from the 70s/50s/40s mixed group session",
    speakerNote:
      "This isn’t a measured effect yet — we’d want to see this hold up under closer observation in June. But the signal is consistent with what we’ve been hypothesizing.",
  },

  whatItMeans: {
    heading: "What it means",
    headline: "Six implications worth bringing into the team conversation",
    implications: [
      "Age strongly shaped engagement, but not perfectly linear. Seniors are not just viewers — they become interpreters. Younger viewers may respond to frustration, not nostalgia. Teens need facilitaion and framing that turn old footage into a conversation they can actually enter.",
      'Content strategy could propagate. "Human Stories" - Best for emotional connection, memory, and personal identification. "Civic Headaches" - Best for relevance, continuity, and “we still deal with this” reactions. "Daily Debates" - Best for prompting discussion, opinion, comparison, and intergenerational exchange. “Fun Moments” and “Old Time Cleveland” may still be useful as warm-up categories, but the deeper engagement seems to emerge from clips that combine local identity with emotional, civic, or conversational stakes. Civic issues may be more engaging than expected.',
      "The prompts worked — but not equally for everyone. Younger viewers may need context before conversation. A debate prompt only works if the viewer understands what they are looking at. Memory prompts reserved for elder-targeted features. ",
      "The intergenerational frame now has initial empirical support. Worth carrying into the June site visit and the co-creation strategy work.",
    ],
    speakerNote:
      "Six implications, all rooted in this round’s data. None of them require us to commit to anything we haven’t already been considering.",
  },

  whatsNext: {
    heading: "What’s next",
    headline: "Some moves from here to the June site visit",
    steps: [
      "Run a small intergenerational session before June — n=2+2, mixed-age pairs — to test the bridging effect we observed informally with more intent.",
      "Revisit remix as the core verb of the experience for teens, or do we still target teens as the primary audience? ",
      "Sketch the memory-capture feature: Ties back to our goal to document crow-sourced community memories and enhance meta-data generation.",
    ],
    speakerNote:
      "The June intergenerational focus groups are the natural place where these findings get tested at scale. Everything between now and then is preparation.",
  },

  caveats: {
    heading: "Overal Big Insight",
    headline: "the key takeaway",
    heroQuote:
      "The broadcast footage is most powerful when it becomes a bridge: between past and present, memory and discovery, local history and current civic life, older residents' lived experience and younger viewers' questions or frustrations.",
    items: [
      "For seniors, the archive activates memory.",
      "For middle-aged viewers, it activates recognition and relevance.",
      "For younger viewers, it needs context, surprise, and present-day connection.",
      "For teens, the archive needs facilitation, relevance, and a bridge into their own lived world.",
      "For intergenerational groups, it becomes a social engine.",
    ],
    speakerNote:
      "Naming these honestly because they affect how we should weight each finding when designing the next round.",
  },

  thanks: {
    heading: "Thanks",
    headline: "With gratitude to the participants and to Leslie",
    bullets: [
      "Thanks to the patrons and staff who participated.",
      "Thanks to Leslie Barrett for facilitating the teen sessions — that work is load-bearing, not background.",
    ],
    feedbackLink: "{{FULL_FEEDBACK_LINK}}",
    image: "./assets/images/session-overview.jpg",
    imageAlt: "Session overview photo",
    speakerNote: "Open the floor.",
  },
};
