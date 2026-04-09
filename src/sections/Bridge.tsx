import { ScrollReveal } from '../components/ScrollReveal'
import { content } from '../data/content'

export default function Bridge() {
  const { heading, gap, question, openItems, transition } = content.bridge

  return (
    <section
      className="section"
      style={{
        paddingTop: '20vh',
        paddingBottom: '16vh',
      }}
    >
      <div className="content-wrapper">
        {/* Heading */}
        <ScrollReveal>
          <h2
            style={{
              fontSize: 'var(--text-xl)',
              fontWeight: 'var(--weight-semibold)',
              textAlign: 'center',
              marginBottom: '12vh',
            }}
          >
            {heading}
          </h2>
        </ScrollReveal>

        {/* The gap statement — the core of this section */}
        <ScrollReveal>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 'var(--weight-medium)',
              fontSize: 'var(--text-lg)',
              lineHeight: 'var(--leading-relaxed)',
              textAlign: 'center',
              maxWidth: 650,
              margin: '0 auto 10vh',
            }}
          >
            {gap}
          </p>
        </ScrollReveal>

        {/* The question */}
        <ScrollReveal>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 'var(--text-xl)',
              textAlign: 'center',
              maxWidth: 600,
              margin: '0 auto 12vh',
              lineHeight: 'var(--leading-snug)',
            }}
          >
            {question}
          </p>
        </ScrollReveal>

        {/* Open items — footnote level */}
        <ScrollReveal>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-sm)',
              marginBottom: '8vh',
            }}
          >
            {openItems.map((item, i) => (
              <p
                key={i}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'var(--text-sm)',
                  color: 'var(--color-warm-gray-text)',
                  lineHeight: 'var(--leading-relaxed)',
                  maxWidth: 600,
                  margin: '0 auto',
                  textAlign: 'center',
                }}
              >
                {item}
              </p>
            ))}
          </div>
        </ScrollReveal>

        {/* Transition line — the hinge between Movement 2 and 3 */}
        <ScrollReveal>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 'var(--weight-semibold)',
              fontSize: 'var(--text-lg)',
              color: 'var(--color-brand-primary)',
              textAlign: 'center',
              maxWidth: 600,
              margin: '0 auto',
              lineHeight: 'var(--leading-snug)',
            }}
          >
            {transition}
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
