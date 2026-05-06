import { ScrollReveal } from '../../../components/ScrollReveal'
import { utContent } from '../data'

export default function SlideWhatItMeans() {
  const { heading, headline, implications } = utContent.whatItMeans

  return (
    <section className="ut-slide">
      <div className="ut-content">
        <ScrollReveal>
          <p className="ut-slide-label">Slide 10</p>
          <h2 className="ut-slide-heading">{heading}</h2>
          <p className="ut-slide-headline">{headline}</p>
        </ScrollReveal>

        <ScrollReveal>
          <ol className="ut-numbered-list">
            {implications.map((item, i) => {
              const boldEnd = item.indexOf('.')
              const boldText = item.slice(0, boldEnd + 1)
              const rest = item.slice(boldEnd + 1)
              return (
                <li key={i}>
                  <span>
                    <strong>{boldText}</strong>{rest}
                  </span>
                </li>
              )
            })}
          </ol>
        </ScrollReveal>
      </div>
    </section>
  )
}
