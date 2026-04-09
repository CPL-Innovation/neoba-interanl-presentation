import { ScrollReveal } from '../components/ScrollReveal'
import { content } from '../data/content'

export default function Proposal() {
  const {
    youtubeId,
    heading,
    headingAccent,
    opener,
    testsHeading,
    doesNotTestHeading,
    logicChain,
    tests,
    doesNotTest,
    doesNotTestNote,
    closingQuestion,
  } = content.proposal

  return (
    <section className="section" style={{ paddingTop: 'var(--space-3xl)' }}>
      <div className="content-wrapper">
        {/* Green divider */}
        <div
          aria-hidden="true"
          style={{
            width: 80,
            height: 3,
            background: 'var(--color-green)',
            marginBottom: 'var(--space-2xl)',
          }}
        />

        <ScrollReveal>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'var(--text-2xl)',
              fontWeight: 'var(--weight-semibold)',
              marginBottom: 'var(--space-md)',
            }}
          >
            {heading}
            {headingAccent && (
              <span style={{ color: 'var(--color-green-text)' }}> {headingAccent}</span>
            )}
          </h2>
        </ScrollReveal>

        {/* Opener */}
        <ScrollReveal>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--text-md)',
              lineHeight: 'var(--leading-relaxed)',
              maxWidth: '55ch',
              marginBottom: 'var(--space-3xl)',
            }}
          >
            {opener}
          </p>
        </ScrollReveal>

        {/* YouTube video */}
        <ScrollReveal>
          <div
            style={{
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0,
              marginBottom: 'var(--space-3xl)',
              borderRadius: 4,
              overflow: 'hidden',
            }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}`}
              title="Concept 1 test video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
              }}
            />
          </div>
        </ScrollReveal>

        {/* Logic chain - sequential appearance */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-lg)',
            marginBottom: 'var(--space-3xl)',
          }}
        >
          {logicChain.map((line, i) => (
            <ScrollReveal key={i} delay={i * 200}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-md)' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 'var(--weight-semibold)',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-green)',
                    flexShrink: 0,
                    width: 24,
                    height: 24,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    background: 'rgba(86, 148, 79, 0.1)',
                  }}
                >
                  {i + 1}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 'var(--weight-regular)',
                    fontSize: 'var(--text-md)',
                    lineHeight: 'var(--leading-snug)',
                  }}
                >
                  {line}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Two columns: tests / doesn't test */}
        <ScrollReveal>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'var(--space-2xl)',
              marginBottom: 'var(--space-3xl)',
            }}
          >
            {/* What it tests */}
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 'var(--weight-semibold)',
                  fontSize: 'var(--text-sm)',
                  color: 'var(--color-green-text)',
                  letterSpacing: '0.02em',
                  marginBottom: 'var(--space-md)',
                  textTransform: 'uppercase',
                }}
              >
                {testsHeading}
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {tests.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 'var(--text-sm)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 10,
                      lineHeight: 'var(--leading-normal)',
                    }}
                  >
                    <span
                      style={{
                        color: 'var(--color-green)',
                        flexShrink: 0,
                        marginTop: 2,
                        fontSize: '0.7rem',
                      }}
                    >
                      &#9679;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* What it doesn't test */}
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 'var(--weight-semibold)',
                  fontSize: 'var(--text-sm)',
                  color: 'var(--color-warm-gray-text)',
                  letterSpacing: '0.02em',
                  marginBottom: 'var(--space-md)',
                  textTransform: 'uppercase',
                }}
              >
                {doesNotTestHeading}
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {doesNotTest.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-warm-gray-text)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 10,
                      lineHeight: 'var(--leading-normal)',
                    }}
                  >
                    <span style={{ flexShrink: 0, marginTop: 2, fontSize: '0.7rem' }}>
                      &#9679;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontStyle: 'italic',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-warm-gray-text)',
                  marginTop: 'var(--space-sm)',
                }}
              >
                {doesNotTestNote}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Closing question */}
        <ScrollReveal>
          <div style={{ padding: 'var(--space-3xl) 0 20vh' }}>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'var(--text-2xl)',
                textAlign: 'center',
                color: 'var(--color-black)',
                lineHeight: 'var(--leading-snug)',
                maxWidth: 600,
                margin: '0 auto',
              }}
            >
              {closingQuestion}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
