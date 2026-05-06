import { ScrollReveal } from '../../../components/ScrollReveal'
import { utContent } from '../data'

export default function SlideFinding5() {
  const { heading, headline, bullets, implication, image, imageAlt } =
    utContent.finding5

  return (
    <section className="ut-slide ut-slide--alt">
      <div className="ut-content">
        <ScrollReveal style={{ marginBottom: 'var(--space-xl)' }}>
          <p className="ut-slide-label">{heading}</p>
          <h2 className="ut-slide-heading ut-slide-heading--highlight" style={{ fontSize: 'var(--text-xl)' }}>
            {headline}
          </h2>
        </ScrollReveal>

        {/* Full-width image below heading */}
        <ScrollReveal>
          <div style={{ width: '100%', marginBottom: 'var(--space-xl)', borderRadius: 8, overflow: 'hidden' }}>
            <img src={image} alt={imageAlt} style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
            {/* PLACEHOLDER — replace with actual asset: intergenerational-session.jpg */}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <ul className="ut-bullet-list" style={{ marginBottom: 'var(--space-xl)' }}>
            {bullets.map((b, i) => {
              // Bold key phrases
              const html = b
                .replace(/knowledge holders/, '<strong>knowledge holders</strong>')
                .replace(/fresh-eye questions/, '<strong>fresh-eye questions</strong>')
                .replace(/70s, 50s, and 40s/, '<strong>70s, 50s, and 40s</strong>')
                .replace(/Leslie's facilitation/, '<strong>Leslie’s facilitation</strong>')
              return <li key={i} dangerouslySetInnerHTML={{ __html: html }} />
            })}
          </ul>
        </ScrollReveal>

        {/* Implication */}
        <ScrollReveal>
          <p className="ut-implication">{implication}</p>
        </ScrollReveal>

      </div>
    </section>
  )
}
