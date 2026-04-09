import { content } from '../data/content'

export function generateMarkdown(): string {
  const lines: string[] = []

  // Hero
  lines.push(`# ${content.hero.title}`)
  lines.push('')
  lines.push(content.hero.subtitle)
  lines.push('')
  lines.push(content.hero.attribution)
  lines.push('')

  // Starting Point
  lines.push(`## ${content.startingPoint.heading}`)
  lines.push('')
  lines.push(content.startingPoint.description)
  lines.push('')
  for (const c of content.startingPoint.concepts) {
    lines.push(`${c.number}. ${c.name}`)
  }
  lines.push('')

  // Convergence Signals
  lines.push(`## ${content.convergenceSignals.heading}`)
  lines.push('')
  for (const s of content.convergenceSignals.signals) {
    lines.push(`- ${s}`)
  }
  lines.push('')
  lines.push(`> ${content.convergenceSignals.caption}`)
  lines.push('')

  // Concept Evolution
  lines.push(`## ${content.conceptEvolution.heading}`)
  lines.push('')
  lines.push(
    '| Before (Original Sketch) | After (Resculpted) |',
  )
  lines.push('|---|---|')
  for (let i = 0; i < content.conceptEvolution.before.length; i++) {
    const b = content.conceptEvolution.before[i]
    const a = content.conceptEvolution.after[i]
    lines.push(`| ${b.label} — ${b.detail} | ${a.label} — ${a.detail} |`)
  }
  lines.push('')
  lines.push(`*${content.conceptEvolution.methodology}*`)
  lines.push('')
  lines.push(content.conceptEvolution.welcomeTierNote)
  lines.push('')

  lines.push('---')
  lines.push('')

  // Constraints as Assets
  lines.push(`## ${content.constraintsAsAssets.heading}`)
  lines.push('')
  lines.push('| Constraint | Asset |')
  lines.push('|---|---|')
  for (const p of content.constraintsAsAssets.pairs) {
    lines.push(
      `| ${p.constraint} — ${p.constraintDetail} | ${p.asset} — ${p.assetDetail} |`,
    )
  }
  lines.push('')
  lines.push(content.constraintsAsAssets.locIntegration)
  lines.push('')
  lines.push(`*${content.constraintsAsAssets.transition}*`)
  lines.push('')

  // Archive Discovery
  lines.push(`## ${content.archiveDiscovery.heading}`)
  lines.push('')
  lines.push(`*${content.archiveDiscovery.siobhanNote}*`)
  lines.push('')
  lines.push(
    `**${content.archiveDiscovery.stat.before} ${content.archiveDiscovery.stat.beforeLabel} → ${content.archiveDiscovery.stat.after} ${content.archiveDiscovery.stat.afterLabel}**`,
  )
  lines.push('')
  lines.push(content.archiveDiscovery.stat.caption)
  lines.push('')
  for (const insight of content.archiveDiscovery.insights) {
    lines.push(`- **${insight.label}:** ${insight.detail}`)
  }
  lines.push('')
  lines.push(`### ${content.archiveDiscovery.twoLayers.layer1.label}`)
  lines.push('')
  lines.push(content.archiveDiscovery.twoLayers.layer1.description)
  lines.push('')
  lines.push(`### ${content.archiveDiscovery.twoLayers.layer2.label}`)
  lines.push('')
  lines.push(content.archiveDiscovery.twoLayers.layer2.description)
  lines.push('')
  lines.push(`*${content.archiveDiscovery.twoLayers.connector}*`)
  lines.push('')
  lines.push(`> ${content.archiveDiscovery.positioning}`)
  lines.push('')
  lines.push(content.archiveDiscovery.hypothesisNote)
  lines.push('')

  // Remix Framework
  lines.push(`## ${content.remixFramework.heading}`)
  lines.push('')
  lines.push(content.remixFramework.preamble)
  lines.push('')
  for (const beat of content.remixFramework.beats) {
    lines.push(`- **${beat.word}** — ${beat.description}`)
  }
  lines.push('')

  lines.push('---')
  lines.push('')

  // Washingtons Journey
  lines.push(`## ${content.washingtonsJourney.heading}`)
  lines.push('')
  lines.push(`*${content.washingtonsJourney.subtitle}*`)
  lines.push('')
  const { marcus, denise, vivian } = content.washingtonsJourney.personas
  lines.push(
    `${marcus.name}, ${marcus.age} · ${denise.name}, ${denise.age} · ${vivian.name}, ${vivian.age}`,
  )
  lines.push('')
  for (const para of content.washingtonsJourney.narrative) {
    lines.push(para)
    lines.push('')
  }
  for (const quote of content.washingtonsJourney.pullQuotes) {
    lines.push(`> ${quote}`)
    lines.push('')
  }
  lines.push(`*${content.washingtonsJourney.finding}*`)
  lines.push('')

  // Thursday Crew
  lines.push(`## ${content.thursdayCrew.heading}`)
  lines.push('')
  lines.push(`*${content.thursdayCrew.subtitle}*`)
  lines.push('')
  lines.push(content.thursdayCrew.detail)
  lines.push('')
  for (const para of content.thursdayCrew.narrative) {
    lines.push(para)
    lines.push('')
  }
  lines.push(`> ${content.thursdayCrew.finding}`)
  lines.push('')
  lines.push(content.thursdayCrew.designFinding)
  lines.push('')

  // Other personas
  for (const p of content.otherPersonas) {
    lines.push(
      `- **${p.name}** (${p.detail}): ${p.test} → ${p.finding}`,
    )
  }
  lines.push('')

  lines.push('---')
  lines.push('')

  // Bridge
  lines.push(`## ${content.bridge.heading}`)
  lines.push('')
  lines.push(content.bridge.gap)
  lines.push('')
  lines.push(`*${content.bridge.question}*`)
  lines.push('')
  for (const item of content.bridge.openItems) {
    lines.push(`- ${item}`)
  }
  lines.push('')
  lines.push(`**${content.bridge.transition}**`)
  lines.push('')

  // Proposal
  lines.push('## Next Step: Test the Content')
  lines.push('')
  for (let i = 0; i < content.proposal.logicChain.length; i++) {
    lines.push(`${i + 1}. ${content.proposal.logicChain[i]}`)
  }
  lines.push('')
  lines.push('| What it tests | What it intentionally doesn\'t test |')
  lines.push('|---|---|')
  const maxLen = Math.max(
    content.proposal.tests.length,
    content.proposal.doesNotTest.length,
  )
  for (let i = 0; i < maxLen; i++) {
    const test = content.proposal.tests[i] || ''
    const noTest = content.proposal.doesNotTest[i] || ''
    lines.push(`| ${test} | ${noTest} |`)
  }
  lines.push('')
  lines.push(`*${content.proposal.doesNotTestNote}*`)
  lines.push('')
  lines.push(`**${content.proposal.closingQuestion}**`)
  lines.push('')

  // Footer
  lines.push('---')
  lines.push('')
  lines.push(
    `${content.footer.line1} · ${content.footer.line2} · ${content.footer.line3}`,
  )
  lines.push('')

  return lines.join('\n')
}
