import { ScrollReveal } from '../../../components/ScrollReveal'
import { utContent } from '../data'

export default function SlideFinding4() {
  const { heading, headline, promptStats, observations, defaultPrompt, implication } =
    utContent.finding4

  return (
    <section className="ut-slide">
      <div className="ut-content">
        <ScrollReveal style={{ marginBottom: 'var(--space-xl)' }}>
          <p className="ut-slide-label">{heading}</p>
          <h2 className="ut-slide-heading ut-slide-heading--highlight" style={{ fontSize: 'var(--text-xl)' }}>
            {headline}
          </h2>
        </ScrollReveal>

        {/* Prompt stats */}
        <ScrollReveal>
          <div style={{ marginBottom: 'var(--space-xl)', maxWidth: 560 }}>
            {promptStats.map((s, i) => (
              <div key={i} className="ut-stat-row">
                <span className="ut-stat-label">
                  {s.format}
                  {s.note && (
                    <span
                      style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--color-warm-gray-text)',
                        marginLeft: 8,
                      }}
                    >
                      ({s.note})
                    </span>
                  )}
                </span>
                <span className="ut-stat-value">{s.count}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Observations */}
        <ScrollReveal>
          <ul className="ut-bullet-list" style={{ marginBottom: 'var(--space-xl)' }}>
            {observations.map((o, i) => (
              <li key={i}>{o}</li>
            ))}
          </ul>
        </ScrollReveal>

        {/* Default prompt grammar */}
        <ScrollReveal>
          <div className="ut-callout">
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--text-sm)',
                color: 'var(--color-warm-gray-text)',
                marginBottom: 'var(--space-xs)',
              }}
            >
              The default prompt grammar across the exhibit should be:
            </p>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: 'var(--text-md)',
                color: 'var(--color-black)',
                lineHeight: 'var(--leading-snug)',
                maxWidth: 'none',
              }}
            >
              {defaultPrompt}
            </p>
          </div>
        </ScrollReveal>

        {/* Implication */}
        <ScrollReveal>
          <p className="ut-implication">{implication}</p>
        </ScrollReveal>
      </div>
    </section>
  )
}
