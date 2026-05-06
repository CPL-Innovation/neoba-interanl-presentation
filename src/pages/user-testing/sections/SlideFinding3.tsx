import { ScrollReveal } from '../../../components/ScrollReveal'
import { utContent } from '../data'

export default function SlideFinding3() {
  const { heading, headline, standouts, bigNumber, bigNumberCaption, eraQuote, quotes, implication } =
    utContent.finding3

  return (
    <section className="ut-slide">
      <div className="ut-content">
        <ScrollReveal style={{ marginBottom: 'var(--space-xl)' }}>
          <p className="ut-slide-label">{heading}</p>
          <h2 className="ut-slide-heading ut-slide-heading--highlight" style={{ fontSize: 'var(--text-xl)' }}>
            {headline}
          </h2>
        </ScrollReveal>

        {/* Standout table */}
        <ScrollReveal>
          <table className="ut-table" style={{ marginBottom: 'var(--space-xl)' }}>
            <thead>
              <tr>
                <th>Standout clip named by participant</th>
                <th>Likely playlist</th>
              </tr>
            </thead>
            <tbody>
              {standouts.map((s, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: 400 }}>{s.clip}</td>
                  <td
                    style={{
                      color:
                        s.playlist === 'Civic Headaches'
                          ? 'var(--color-brand-primary)'
                          : undefined,
                      fontWeight:
                        s.playlist === 'Civic Headaches' ? 600 : undefined,
                    }}
                  >
                    {s.playlist}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollReveal>

        {/* Big number callout */}
        <ScrollReveal>
          <div className="ut-callout ut-callout--stat">
            <div className="ut-big-number">{bigNumber}</div>
            <div className="ut-big-caption">{bigNumberCaption}</div>
          </div>
        </ScrollReveal>

        {/* ERA quote (moved from Finding 2) */}
        <ScrollReveal>
          <div className="ut-quote">
            <p>"{eraQuote.text}"</p>
            <cite>
              — {eraQuote.attribution}
              <br />
              <span style={{ fontStyle: 'italic' }}>{eraQuote.context}</span>
            </cite>
          </div>
        </ScrollReveal>

        {/* Quotes */}
        {quotes.map((q, i) => (
          <ScrollReveal key={i}>
            <div className="ut-quote">
              <p>"{q.text}"</p>
              <cite>
                — {q.attribution}
                {q.context && (
                  <>
                    <br />
                    <span style={{ fontStyle: 'italic' }}>({q.context})</span>
                  </>
                )}
              </cite>
            </div>
          </ScrollReveal>
        ))}

        {/* Implication */}
        <ScrollReveal>
          <p className="ut-implication">{implication}</p>
        </ScrollReveal>
      </div>
    </section>
  )
}
