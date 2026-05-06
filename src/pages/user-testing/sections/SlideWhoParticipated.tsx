import { ScrollReveal } from '../../../components/ScrollReveal'
import { utContent } from '../data'

export default function SlideWhoParticipated() {
  const { heading, headline, demographics, feedbackLink, surveyLink } =
    utContent.whoParticipated

  return (
    <section className="ut-slide ut-slide--alt">
      <div className="ut-content">
        <ScrollReveal>
          <p className="ut-slide-label">Slide 3</p>
          <h2 className="ut-slide-heading">{heading}</h2>
          <p className="ut-slide-headline">{headline}</p>
        </ScrollReveal>

        <ScrollReveal>
          <table className="ut-table" style={{ maxWidth: 560 }}>
            <thead>
              <tr>
                <th>Age band</th>
                <th>Written responses</th>
              </tr>
            </thead>
            <tbody>
              {demographics.map((d) => (
                <tr key={d.ageBand}>
                  <td>{d.ageBand}</td>
                  <td>{d.responses}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollReveal>

        <ScrollReveal>
          <div style={{ display: 'flex', gap: 'var(--space-sm)', marginTop: 'var(--space-lg)', flexWrap: 'wrap' }}>
            <a
              href={feedbackLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                color: '#fff',
                background: 'var(--color-blue-mid)',
                padding: '0.625rem 1.25rem',
                borderRadius: '6px',
                textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              View full user feedback →
            </a>
            <a
              href={surveyLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                color: 'var(--color-blue-mid)',
                background: 'transparent',
                border: '2px solid var(--color-blue-mid)',
                padding: '0.625rem 1.25rem',
                borderRadius: '6px',
                textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              View survey summary →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
