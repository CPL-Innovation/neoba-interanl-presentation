import { ScrollReveal } from '../../../components/ScrollReveal'
import { utContent } from '../data'

export default function SlideFinding2() {
  const { heading, headline, quotes, implication, image, imageAlt } =
    utContent.finding2

  return (
    <section className="ut-slide ut-slide--alt">
      <div className="ut-content">
        <ScrollReveal style={{ marginBottom: 'var(--space-xl)' }}>
          <p className="ut-slide-label">{heading}</p>
          <h2 className="ut-slide-heading ut-slide-heading--highlight" style={{ fontSize: 'var(--text-xl)' }}>
            {headline}
          </h2>
        </ScrollReveal>

        {/* Police photo + quote */}
        <ScrollReveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', marginBottom: 'var(--space-xl)', maxWidth: 560 }}>
            <div className="ut-image-placeholder" style={{ margin: 0 }}>
              <img src={image} alt={imageAlt} style={{ borderRadius: 8 }} />
            </div>
            <div className="ut-quote" style={{ margin: 0 }}>
              <p>"{quotes[1].text}"</p>
              <cite>
                — {quotes[1].attribution}
                <br />
                <span style={{ fontStyle: 'italic' }}>{quotes[1].context}</span>
              </cite>
            </div>
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
