import { ScrollReveal } from '../../../components/ScrollReveal'
import { utContent } from '../data'

export default function SlideWhatsNext() {
  const { heading, headline, steps } = utContent.whatsNext

  return (
    <section className="ut-slide ut-slide--alt">
      <div className="ut-content">
        <ScrollReveal>
          <p className="ut-slide-label">Slide 11</p>
          <h2 className="ut-slide-heading">{heading}</h2>
          <p className="ut-slide-headline">{headline}</p>
        </ScrollReveal>

        <ScrollReveal>
          <ol className="ut-numbered-list">
            {steps.map((step, i) => (
              <li key={i}>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </ScrollReveal>
      </div>
    </section>
  )
}
