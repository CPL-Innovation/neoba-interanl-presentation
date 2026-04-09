import { ScrollReveal } from '../components/ScrollReveal'
import { ImagePlaceholder } from '../components/ImagePlaceholder'
import { content } from '../data/content'

export default function ThursdayCrew() {
  const { heading, subtitle, image, imageAlt, detail, narrative, finding, designFinding } =
    content.thursdayCrew
  const otherPersonas = content.otherPersonas

  return (
    <section
      className="section"
      style={{
        background:
          'linear-gradient(to bottom, rgba(255, 141, 126, 0.02), transparent 30%)',
        paddingTop: 'var(--space-3xl)',
        paddingBottom: 'var(--space-3xl)',
      }}
    >
      <div className="content-wrapper">
        {/* Section heading */}
        <ScrollReveal>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 'var(--weight-semibold)',
              fontSize: 'var(--text-2xl)',
              marginBottom: 'var(--space-xs)',
            }}
          >
            {heading}
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'var(--text-md)',
              color: 'var(--color-coral-text)',
              marginBottom: 'var(--space-xs)',
            }}
          >
            {subtitle}
          </p>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'var(--text-sm)',
              color: '#666',
              marginBottom: 'var(--space-2xl)',
            }}
          >
            {detail}
          </p>
        </ScrollReveal>

        {/* Journey image */}
        <ScrollReveal>
          <div style={{ marginBottom: 'var(--space-2xl)' }}>
            <ImagePlaceholder
              src={image}
              alt={imageAlt}
              placeholderColor="var(--color-coral)"
            />
          </div>
        </ScrollReveal>

        {/* Narrative blocks */}
        {narrative.map((line, i) => (
          <ScrollReveal key={i}>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'var(--text-base)',
                lineHeight: 'var(--leading-relaxed)',
                maxWidth: '55ch',
                marginBottom: 'var(--space-lg)',
              }}
            >
              {line}
            </p>
          </ScrollReveal>
        ))}

        {/* Finding */}
        <ScrollReveal>
          <blockquote
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 'var(--text-md)',
              color: 'var(--color-coral-text)',
              borderLeft: '4px solid var(--color-coral)',
              paddingLeft: 'var(--space-lg)',
              margin: 'var(--space-xl) 0',
              maxWidth: 600,
              lineHeight: 'var(--leading-snug)',
            }}
          >
            {finding}
          </blockquote>
        </ScrollReveal>

        {/* Design finding */}
        <ScrollReveal>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--text-sm)',
              color: 'var(--color-warm-gray-text)',
              marginBottom: 'var(--space-3xl)',
              lineHeight: 'var(--leading-relaxed)',
            }}
          >
            {designFinding}
          </p>
        </ScrollReveal>

        {/* Other personas (Amara + Earl) */}
        <ScrollReveal>
          <div
            style={{
              borderTop: '1px solid var(--color-warm-gray)',
              paddingTop: 'var(--space-xl)',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-lg)',
              }}
            >
              {otherPersonas.map((persona) => (
                <div
                  key={persona.name}
                  style={{
                    borderLeft: '3px solid var(--color-teal)',
                    paddingLeft: 'var(--space-md)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 'var(--weight-semibold)',
                      fontSize: 'var(--text-sm)',
                      marginBottom: 2,
                    }}
                  >
                    {persona.name}{' '}
                    <span
                      style={{
                        fontWeight: 'var(--weight-regular)',
                        color: '#666',
                      }}
                    >
                      {persona.detail}
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 'var(--text-sm)',
                      color: '#666',
                      marginBottom: 2,
                    }}
                  >
                    {persona.test}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-black)',
                      fontWeight: 'var(--weight-medium)',
                    }}
                  >
                    {persona.finding}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
