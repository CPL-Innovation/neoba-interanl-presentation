import { ScrollReveal } from '../components/ScrollReveal'
import { content } from '../data/content'

export default function ConvergenceSignals() {
  const { heading, signals, caption } = content.convergenceSignals

  return (
    <section className="section">
      <div className="content-wrapper">
        <ScrollReveal>
          <h2
            style={{
              fontSize: 'var(--text-xl)',
              fontWeight: 'var(--weight-semibold)',
              marginBottom: 'var(--space-2xl)',
            }}
          >
            {heading}
          </h2>
        </ScrollReveal>

        {/* Staggered keyword tags */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--space-md)',
            marginBottom: 'var(--space-3xl)',
          }}
        >
          {signals.map((signal, i) => (
            <ScrollReveal key={signal} delay={i * 200}>
              <span
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 'var(--weight-medium)',
                  fontSize: 'var(--text-lg)',
                  padding: '8px 20px',
                  background: 'rgba(148, 183, 187, 0.12)',
                  borderBottom: '3px solid var(--color-teal)',
                  borderRadius: '4px 4px 0 0',
                }}
              >
                {signal}
              </span>
            </ScrollReveal>
          ))}
        </div>

        {/* Caption */}
        <ScrollReveal delay={1400}>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 'var(--text-md)',
              color: 'var(--color-black)',
              textAlign: 'center',
              maxWidth: 600,
              margin: '0 auto',
              lineHeight: 'var(--leading-relaxed)',
            }}
          >
            {caption}
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
