import { ScrollReveal } from '../components/ScrollReveal'
import { ImagePlaceholder } from '../components/ImagePlaceholder'
import { content } from '../data/content'

export default function StartingPoint() {
  const { heading, description, image, imageAlt, concepts } =
    content.startingPoint

  return (
    <section className="section">
      <div className="content-wrapper">
        <ScrollReveal>
          <h2
            style={{
              fontSize: 'var(--text-xl)',
              fontWeight: 'var(--weight-semibold)',
              marginBottom: 'var(--space-sm)',
            }}
          >
            {heading}
          </h2>
          <p
            style={{
              color: 'var(--color-warm-gray-text)',
              marginBottom: 'var(--space-xl)',
            }}
          >
            {description}
          </p>
        </ScrollReveal>

        {/* Concept drawing */}
        <ScrollReveal>
          <div style={{ marginBottom: 'var(--space-xl)' }}>
            <ImagePlaceholder
              src={image}
              alt={imageAlt}
              placeholderColor="var(--color-teal)"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 'var(--space-sm)',
            }}
          >
            {concepts.map((concept) => (
              <div
                key={concept.number}
                style={{
                  border: '1px solid var(--color-warm-gray)',
                  borderRadius: 4,
                  padding: '12px 20px',
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: 8,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 'var(--weight-medium)',
                    fontSize: 'var(--text-xs)',
                    color: 'var(--color-teal-text)',
                  }}
                >
                  {concept.number}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 'var(--weight-medium)',
                    fontSize: 'var(--text-sm)',
                  }}
                >
                  {concept.name}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
