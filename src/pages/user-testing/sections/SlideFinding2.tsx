import { ScrollReveal } from '../../../components/ScrollReveal'
import { utContent } from '../data'

export default function SlideFinding2() {
  const { heading, headline, quotes, implication, image, imageAlt, image2, image2Alt } =
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

        {/* Quote pairs — each quote with its photo */}
        <ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-xl)', marginBottom: 'var(--space-xl)' }}>

            {/* ERA quote + placeholder */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              {/* PLACEHOLDER — set image2 in data.ts to replace */}
              {image2 ? (
                <div className="ut-image-placeholder" style={{ margin: 0 }}>
                  <img src={image2} alt={image2Alt} style={{ borderRadius: 8 }} />
                </div>
              ) : (
                <div
                  style={{
                    border: '2px dashed #ccc',
                    borderRadius: 8,
                    aspectRatio: '4/3',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#f5f5f5',
                    color: '#999',
                    fontSize: 'var(--text-sm)',
                    fontFamily: 'var(--font-sans)',
                    textAlign: 'center',
                    padding: 'var(--space-md)',
                  }}
                >
                  PLACEHOLDER<br />ERA session photo
                </div>
              )}
              <div className="ut-quote" style={{ margin: 0 }}>
                <p>"{quotes[0].text}"</p>
                <cite>
                  — {quotes[0].attribution}
                  <br />
                  <span style={{ fontStyle: 'italic' }}>{quotes[0].context}</span>
                </cite>
              </div>
            </div>

            {/* Police quote + existing photo */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              {/* PLACEHOLDER — replace with actual asset: elder-participant.jpg */}
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
