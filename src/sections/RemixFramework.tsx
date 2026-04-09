import { ScrollReveal } from '../components/ScrollReveal'
import { VideoPlayer } from '../components/VideoPlayer'
import { content } from '../data/content'
import showreelSrc from '../assets/video/showreel.mov'

export default function RemixFramework() {
  const { heading, preamble, beats } = content.remixFramework

  return (
    <section className="section">
      <div className="content-wrapper">
        <ScrollReveal>
          <h2
            style={{
              fontSize: 'var(--text-xl)',
              fontWeight: 'var(--weight-semibold)',
              marginBottom: 'var(--space-sm)',
            }}
          >
            {heading}
          </h2>
          <p
            style={{
              color: '#666',
              marginBottom: 'var(--space-2xl)',
            }}
          >
            {preamble}
          </p>
        </ScrollReveal>

        {/* Showreel video */}
        <ScrollReveal>
          <div style={{ marginBottom: 'var(--space-3xl)' }}>
            <VideoPlayer
              src={showreelSrc}
              posterText={content.washingtonsJourney.videoPlaceholder}
              posterColor="var(--color-brand-primary)"
            />
          </div>
        </ScrollReveal>

        {/* Six beats */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 'var(--space-sm)',
          }}
        >
          {beats.map((beat, i) => (
            <ScrollReveal
              key={beat.word}
              delay={i * 150}
              style={{
                flex: 1,
                textAlign: 'center',
                position: 'relative',
              }}
            >
              {/* Connecting line */}
              {i < beats.length - 1 && (
                <div
                  style={{
                    position: 'absolute',
                    top: 14,
                    right: 0,
                    width: '50%',
                    height: 1,
                    background: 'var(--color-warm-gray)',
                  }}
                />
              )}
              {i > 0 && (
                <div
                  style={{
                    position: 'absolute',
                    top: 14,
                    left: 0,
                    width: '50%',
                    height: 1,
                    background: 'var(--color-warm-gray)',
                  }}
                />
              )}

              {/* Word */}
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 'var(--weight-semibold)',
                  fontSize: 'var(--text-lg)',
                  color: 'var(--color-brand-primary)',
                  marginBottom: 'var(--space-md)',
                  position: 'relative',
                }}
              >
                {beat.word}
              </div>

              {/* Description */}
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-warm-gray)',
                  lineHeight: 'var(--leading-normal)',
                  maxWidth: 120,
                  margin: '0 auto',
                }}
              >
                {beat.description}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
