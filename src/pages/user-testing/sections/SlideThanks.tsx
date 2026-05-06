import { ScrollReveal } from '../../../components/ScrollReveal'
import { utContent } from '../data'

export default function SlideThanks() {
  const { heading, headline, bullets } =
    utContent.thanks

  return (
    <section
      className="ut-slide"
      style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}
    >
      <div className="ut-content" style={{ width: '100%' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
            <div
              aria-hidden="true"
              style={{
                width: 60,
                height: 1,
                background: 'var(--color-warm-gray)',
                margin: '0 auto var(--space-xl)',
              }}
            />
            <h2 className="ut-slide-heading" style={{ textAlign: 'center' }}>
              {heading}
            </h2>
            <p
              className="ut-slide-headline"
              style={{ textAlign: 'center', margin: '0 auto var(--space-xl)' }}
            >
              {headline}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div style={{ textAlign: 'center' }}>
            {bullets.map((b, i) => {
              const html = b.replace(
                /Leslie Barrett/,
                '<strong>Leslie Barrett</strong>'
              )
              return (
                <p
                  key={i}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--text-base)',
                    marginBottom: 'var(--space-sm)',
                    maxWidth: 'none',
                  }}
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              )
            })}

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--text-base)',
                color: 'var(--color-warm-gray-text)',
                marginTop: 'var(--space-lg)',
                maxWidth: 'none',
              }}
            >
              Questions, pushback, alternative reads — all welcome.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
