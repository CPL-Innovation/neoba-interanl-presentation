import { ScrollReveal } from '../../../components/ScrollReveal'
import { utContent } from '../data'

export default function SlideCaveats() {
  const { heading, headline, heroQuote, items } = utContent.caveats

  return (
    <section className="ut-slide">
      <div className="ut-content">
        <ScrollReveal>
          <p className="ut-slide-label">Slide 12</p>
          <h2 className="ut-slide-heading">{heading}</h2>
          <p className="ut-slide-headline">{headline}</p>
        </ScrollReveal>

        <ScrollReveal>
          <blockquote style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'var(--text-xl)',
            fontStyle: 'italic',
            lineHeight: 'var(--leading-relaxed)',
            color: 'var(--color-black)',
            borderLeft: '4px solid var(--color-blue-mid)',
            paddingLeft: 'var(--space-lg)',
            margin: '0 0 var(--space-2xl) 0',
          }}>
            {heroQuote}
          </blockquote>
        </ScrollReveal>

        <ScrollReveal>
          <ul className="ut-caveat-list">
            {items.map((item, i) => {
              // Bold key terms in parentheses like (n=7), 45+, etc.
              const html = item
                .replace(/\(n=7\)/g, '<strong>(n=7)</strong>')
                .replace(/45\+/g, '<strong>45+</strong>')
                .replace(/five/g, '<strong>five</strong>')
                .replace(/Then & Now/g, '<strong>Then & Now</strong>')
              return <li key={i} dangerouslySetInnerHTML={{ __html: html }} />
            })}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  )
}
