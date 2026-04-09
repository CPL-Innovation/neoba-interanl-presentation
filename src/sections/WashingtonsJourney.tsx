import { ScrollReveal } from '../components/ScrollReveal'
import { ImagePlaceholder } from '../components/ImagePlaceholder'
import { content } from '../data/content'

export default function WashingtonsJourney() {
  const {
    heading,
    subtitle,
    image,
    imageAlt,
    personas,
    narrative,
    pullQuotes,
    finding,
  } = content.washingtonsJourney

  return (
    <section
      className="section"
      style={{
        background:
          'linear-gradient(to bottom, rgba(255, 141, 126, 0.04), transparent 40%)',
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
              marginBottom: 'var(--space-3xl)',
            }}
          >
            {personas.marcus.name}, {personas.marcus.age} &middot;{' '}
            {personas.denise.name}, {personas.denise.age} &middot;{' '}
            {personas.vivian.name}, {personas.vivian.age}
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

        {/* Opening narrative */}
        <ScrollReveal>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'var(--text-base)',
              lineHeight: 'var(--leading-relaxed)',
              maxWidth: '55ch',
              marginBottom: 'var(--space-xl)',
            }}
          >
            {narrative[0]}
          </p>
        </ScrollReveal>

        {/* Vivian stops */}
        <ScrollReveal>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'var(--text-base)',
              lineHeight: 'var(--leading-relaxed)',
              maxWidth: '55ch',
              marginBottom: 'var(--space-lg)',
            }}
          >
            {narrative[1]}
          </p>
        </ScrollReveal>

        {/* Pull quote: "That's Quincy Avenue." */}
        <ScrollReveal>
          <blockquote
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 'var(--text-2xl)',
              color: 'var(--color-coral-text)',
              textAlign: 'center',
              margin: 'var(--space-2xl) auto',
              maxWidth: 600,
              lineHeight: 'var(--leading-snug)',
            }}
          >
            {pullQuotes[0]}
          </blockquote>
        </ScrollReveal>

        {/* Roles distribute */}
        <ScrollReveal>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'var(--text-base)',
              lineHeight: 'var(--leading-relaxed)',
              maxWidth: '55ch',
              marginBottom: 'var(--space-xl)',
            }}
          >
            {narrative[2]}
          </p>
        </ScrollReveal>

        {/* Distributed roles — PROMINENT display (conference-table readable) */}
        <ScrollReveal>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 'var(--space-xl)',
              margin: 'var(--space-2xl) 0 var(--space-3xl)',
              textAlign: 'center',
              padding: 'var(--space-xl) 0',
            }}
          >
            {Object.values(personas).map((person) => (
              <div key={person.name}>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 'var(--weight-semibold)',
                    fontSize: 'var(--text-3xl)',
                    marginBottom: 12,
                    paddingBottom: 16,
                    borderBottom: '4px solid var(--color-coral)',
                  }}
                >
                  {person.name}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'var(--text-xl)',
                    color: 'var(--color-coral-text)',
                    marginTop: 12,
                    fontWeight: 'var(--weight-medium)',
                  }}
                >
                  {person.role}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Pull quote: distributed roles */}
        <ScrollReveal>
          <blockquote
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 'var(--text-lg)',
              color: 'var(--color-coral-text)',
              textAlign: 'center',
              margin: '0 auto var(--space-2xl)',
              maxWidth: 700,
              lineHeight: 'var(--leading-snug)',
            }}
          >
            {pullQuotes[1]}
          </blockquote>
        </ScrollReveal>

        {/* Marcus pulling clips */}
        <ScrollReveal>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'var(--text-base)',
              lineHeight: 'var(--leading-relaxed)',
              maxWidth: '55ch',
              marginBottom: 'var(--space-xl)',
            }}
          >
            {narrative[3]}
          </p>
        </ScrollReveal>

        {/* Vivian commenting */}
        <ScrollReveal>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 'var(--text-base)',
              lineHeight: 'var(--leading-relaxed)',
              maxWidth: '55ch',
              marginBottom: 'var(--space-xl)',
              color: '#444',
            }}
          >
            {narrative[4]}
          </p>
        </ScrollReveal>

        {/* The shift */}
        <ScrollReveal>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'var(--text-base)',
              lineHeight: 'var(--leading-relaxed)',
              maxWidth: '55ch',
              marginBottom: 'var(--space-lg)',
            }}
          >
            {narrative[5]}
          </p>
        </ScrollReveal>

        {/* Pull quote: "He learned something..." */}
        <ScrollReveal>
          <blockquote
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 'var(--text-xl)',
              color: 'var(--color-coral-text)',
              borderLeft: '4px solid var(--color-coral)',
              paddingLeft: 'var(--space-lg)',
              margin: 'var(--space-2xl) 0',
              maxWidth: 600,
              lineHeight: 'var(--leading-snug)',
            }}
          >
            {pullQuotes[2]}
          </blockquote>
        </ScrollReveal>

        {/* Save and share */}
        <ScrollReveal>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'var(--text-base)',
              lineHeight: 'var(--leading-relaxed)',
              maxWidth: '55ch',
              marginBottom: 'var(--space-lg)',
            }}
          >
            {narrative[7]}
          </p>
        </ScrollReveal>

        {/* "Made at CPL x LOC" */}
        <ScrollReveal>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 'var(--weight-medium)',
              fontSize: 'var(--text-lg)',
              color: 'var(--color-coral-text)',
              textAlign: 'center',
              margin: 'var(--space-xl) 0 var(--space-2xl)',
            }}
          >
            {pullQuotes[3]}
          </p>
        </ScrollReveal>

        {/* Finding */}
        <ScrollReveal>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 'var(--text-md)',
              textAlign: 'center',
              maxWidth: 600,
              margin: 'var(--space-2xl) auto 0',
              lineHeight: 'var(--leading-relaxed)',
            }}
          >
            {finding}
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
