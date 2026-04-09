import { ScrollReveal } from '../components/ScrollReveal'
import { HighlightText } from '../components/HighlightText'
import { content } from '../data/content'

export default function ConstraintsAsAssets() {
  const { heading, pairs, locIntegration, transition } =
    content.constraintsAsAssets

  return (
    <section className="section">
      <div className="content-wrapper">
        <ScrollReveal>
          <h2
            style={{
              fontSize: 'var(--text-xl)',
              fontWeight: 'var(--weight-semibold)',
              marginBottom: 'var(--space-3xl)',
            }}
          >
            {heading}
          </h2>
        </ScrollReveal>

        {/* Constraint/Asset pairs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3xl)' }}>
          {pairs.map((pair, i) => (
            <div key={i}>
              {/* Constraint */}
              <ScrollReveal>
                <div style={{ marginBottom: 'var(--space-lg)' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 'var(--weight-regular)',
                      fontSize: 'var(--text-md)',
                      color: 'var(--color-warm-gray-text)',
                      marginBottom: 4,
                    }}
                  >
                    {pair.constraint}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 'var(--text-sm)',
                      color: '#757068',
                    }}
                  >
                    {pair.constraintDetail}
                  </div>
                </div>
              </ScrollReveal>

              {/* Arrow */}
              <ScrollReveal delay={150}>
                <div
                  aria-hidden="true"
                  style={{
                    color: 'var(--color-warm-gray)',
                    fontSize: 'var(--text-lg)',
                    marginBottom: 'var(--space-lg)',
                    letterSpacing: '0.1em',
                  }}
                >
                  &darr;
                </div>
              </ScrollReveal>

              {/* Asset with highlight */}
              <ScrollReveal delay={300}>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 'var(--weight-semibold)',
                      fontSize: 'var(--text-lg)',
                      marginBottom: 8,
                    }}
                  >
                    <HighlightText delay={600 + i * 200}>{pair.asset}</HighlightText>
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 'var(--text-sm)',
                      color: '#555',
                      maxWidth: '55ch',
                      lineHeight: 'var(--leading-relaxed)',
                    }}
                  >
                    {pair.assetDetail}
                  </div>
                  {'neighborhoods' in pair && pair.neighborhoods && (
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 8,
                        marginTop: 'var(--space-md)',
                      }}
                    >
                      {(pair.neighborhoods as string[]).map((name) => (
                        <span
                          key={name}
                          style={{
                            display: 'inline-block',
                            fontFamily: 'var(--font-sans)',
                            fontWeight: 'var(--weight-medium)',
                            fontSize: 'var(--text-xs)',
                            padding: '4px 12px',
                            background: 'rgba(241, 196, 0, 0.15)',
                            border: '1px solid rgba(241, 196, 0, 0.4)',
                            borderRadius: 100,
                            color: '#6B5A00',
                          }}
                        >
                          {name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>

        {/* LOC integration callout */}
        <ScrollReveal>
          <div
            style={{
              marginTop: 'var(--space-3xl)',
              padding: 'var(--space-lg)',
              borderLeft: '4px solid var(--color-brand-primary)',
              background: 'rgba(0, 87, 183, 0.04)',
              borderRadius: '0 4px 4px 0',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--text-sm)',
                lineHeight: 'var(--leading-relaxed)',
                color: '#444',
                maxWidth: 'none',
              }}
            >
              {locIntegration}
            </p>
          </div>
        </ScrollReveal>

        {/* Transition line */}
        <ScrollReveal>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 'var(--text-base)',
              textAlign: 'center',
              maxWidth: 600,
              margin: 'var(--space-3xl) auto 0',
              lineHeight: 'var(--leading-relaxed)',
            }}
          >
            {transition}
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
