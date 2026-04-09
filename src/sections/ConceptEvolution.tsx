import { ScrollReveal } from '../components/ScrollReveal'
import { BeforeAfter } from '../components/BeforeAfter'
import { ImagePlaceholder } from '../components/ImagePlaceholder'
import { content } from '../data/content'

export default function ConceptEvolution() {
  const { heading, image, imageAlt, methodology, before, after, welcomeTierNote } =
    content.conceptEvolution

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

        {/* Concept rendering */}
        <ScrollReveal>
          <div style={{ marginBottom: 'var(--space-2xl)' }}>
            <ImagePlaceholder
              src={image}
              alt={imageAlt}
              placeholderColor="var(--color-brand-primary)"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <BeforeAfter beforeItems={before} afterItems={after} />
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 'var(--text-base)',
              textAlign: 'center',
              maxWidth: 600,
              margin: 'var(--space-2xl) auto 0',
              lineHeight: 'var(--leading-relaxed)',
            }}
          >
            {methodology}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={600}>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--text-sm)',
              color: 'var(--color-warm-gray-text)',
              textAlign: 'center',
              maxWidth: 600,
              margin: 'var(--space-lg) auto 0',
              lineHeight: 'var(--leading-relaxed)',
            }}
          >
            {welcomeTierNote}
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
