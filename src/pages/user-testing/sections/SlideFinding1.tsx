import { ScrollReveal } from '../../../components/ScrollReveal'
import { utContent } from '../data'

export default function SlideFinding1() {
  const { heading, headline, bullets, implication } =
    utContent.finding1

  return (
    <section className="ut-slide">
      <div className="ut-content">
        <ScrollReveal style={{ marginBottom: 'var(--space-xl)' }}>
          <p className="ut-slide-label">{heading}</p>
          <h2 className="ut-slide-heading ut-slide-heading--highlight" style={{ fontSize: 'var(--text-xl)' }}>
            {headline}
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <ul className="ut-bullet-list" style={{ marginBottom: 'var(--space-xl)' }}>
            {bullets.map((b, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: b.replace(/"([^"]+)"/g, '<strong>"$1"</strong>').replace(/18–24/g, '<strong>18–24</strong>').replace(/6 of 7/g, '<strong>6 of 7</strong>') }} />
            ))}
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
