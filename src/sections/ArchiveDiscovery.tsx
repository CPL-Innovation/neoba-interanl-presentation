import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ScrollReveal } from '../components/ScrollReveal'
import { ImagePlaceholder } from '../components/ImagePlaceholder'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { content } from '../data/content'

function NumberTransition() {
  const { stat } = content.archiveDiscovery
  const { ref, isVisible } = useScrollReveal()
  const [showAfter, setShowAfter] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  if (isVisible && !showAfter) {
    if (prefersReducedMotion) {
      setShowAfter(true)
    } else {
      setTimeout(() => setShowAfter(true), 1200)
    }
  }

  return (
    <div
      ref={ref}
      style={{
        padding: 'var(--space-3xl) 0',
      }}
      aria-label={`Archive classification: from ${stat.before} ${stat.beforeLabel} to ${stat.after} ${stat.afterLabel}`}
    >
      {/* Side-by-side: before → after, both always visible once triggered */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'var(--space-2xl)',
        }}
      >
        {/* Before number */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <div
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 'var(--weight-light)',
              fontSize: 'var(--text-display)',
              color: 'var(--color-warm-gray)',
              lineHeight: 1,
              letterSpacing: '-0.03em',
            }}
            aria-hidden="true"
          >
            {stat.before}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--text-sm)',
              color: 'var(--color-warm-gray-text)',
              marginTop: 'var(--space-xs)',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
            aria-hidden="true"
          >
            {stat.beforeLabel}
          </div>
        </motion.div>

        {/* Arrow */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: isVisible ? 0.4 : 0 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.3 }}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--text-2xl)',
            color: 'var(--color-warm-gray)',
          }}
          aria-hidden="true"
        >
          &rarr;
        </motion.div>

        {/* After number */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: showAfter ? 1 : 0 }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
          }
          style={{ textAlign: 'center' }}
        >
          <div
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 'var(--weight-light)',
              fontSize: 'var(--text-display)',
              color: 'var(--color-brand-primary)',
              lineHeight: 1,
              letterSpacing: '-0.03em',
            }}
            aria-hidden="true"
          >
            {stat.after}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--text-sm)',
              color: 'var(--color-brand-primary)',
              marginTop: 'var(--space-xs)',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
            aria-hidden="true"
          >
            {stat.afterLabel}
          </div>
        </motion.div>
      </div>

      <div
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--text-xs)',
          color: 'var(--color-warm-gray-text)',
          marginTop: 'var(--space-lg)',
          textAlign: 'center',
        }}
      >
        {stat.caption}
      </div>
    </div>
  )
}

export default function ArchiveDiscovery() {
  const {
    heading,
    siobhanNote,
    dashboardLink,
    dashboardLabel,
    insights,
    twoLayers,
    positioning,
    hypothesisNote,
  } = content.archiveDiscovery

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
        </ScrollReveal>

        {/* Siobhan acknowledgment */}
        <ScrollReveal>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 'var(--text-sm)',
              color: 'var(--color-warm-gray-text)',
              marginTop: 'var(--space-md)',
              lineHeight: 'var(--leading-relaxed)',
            }}
          >
            {siobhanNote}
          </p>
        </ScrollReveal>

        {/* Big number moment */}
        <NumberTransition />

        {/* Dashboard link */}
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
            <a
              href={dashboardLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--text-sm)',
                color: 'var(--color-blue-mid)',
                textDecoration: 'none',
              }}
            >
              {dashboardLabel}
            </a>
          </div>
        </ScrollReveal>

        {/* Dashboard insights */}
        <ScrollReveal>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 'var(--space-md)',
              marginBottom: 'var(--space-2xl)',
            }}
          >
            {insights.map((insight) => (
              <div
                key={insight.label}
                style={{
                  padding: 'var(--space-md)',
                  background: 'rgba(148, 183, 187, 0.08)',
                  borderTop: '3px solid var(--color-teal)',
                  borderRadius: '0 0 4px 4px',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 'var(--weight-semibold)',
                    fontSize: 'var(--text-sm)',
                    marginBottom: 'var(--space-xs)',
                  }}
                >
                  {insight.label}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--text-xs)',
                    color: '#555',
                    lineHeight: 'var(--leading-relaxed)',
                  }}
                >
                  {insight.detail}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Two-layer model with images */}
        <ScrollReveal>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'var(--space-lg)',
              marginTop: 'var(--space-2xl)',
            }}
          >
            {/* Layer 1 */}
            <div>
              <div style={{ marginBottom: 'var(--space-sm)' }}>
                <ImagePlaceholder
                  src={twoLayers.layer1.image}
                  alt={twoLayers.layer1.imageAlt}
                  placeholderColor="var(--color-teal)"
                  aspectRatio="4 / 3"
                />
              </div>
              <div
                style={{
                  padding: 'var(--space-lg)',
                  borderTop: '4px solid var(--color-teal)',
                  background: 'rgba(148, 183, 187, 0.1)',
                  borderRadius: '0 0 4px 4px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 'var(--weight-semibold)',
                    fontSize: 'var(--text-sm)',
                    marginBottom: 'var(--space-sm)',
                    letterSpacing: '0.02em',
                  }}
                >
                  {twoLayers.layer1.label}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--text-sm)',
                    lineHeight: 'var(--leading-relaxed)',
                    color: '#444',
                  }}
                >
                  {twoLayers.layer1.description}
                </p>
              </div>
            </div>

            {/* Layer 2 */}
            <div>
              <div style={{ marginBottom: 'var(--space-sm)' }}>
                <ImagePlaceholder
                  src={twoLayers.layer2.image}
                  alt={twoLayers.layer2.imageAlt}
                  placeholderColor="var(--color-brand-primary)"
                  aspectRatio="4 / 3"
                />
              </div>
              <div
                style={{
                  padding: 'var(--space-lg)',
                  borderTop: '4px solid var(--color-brand-primary)',
                  background: 'rgba(0, 87, 183, 0.06)',
                  borderRadius: '0 0 4px 4px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 'var(--weight-semibold)',
                    fontSize: 'var(--text-sm)',
                    marginBottom: 'var(--space-sm)',
                    letterSpacing: '0.02em',
                  }}
                >
                  {twoLayers.layer2.label}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--text-sm)',
                    lineHeight: 'var(--leading-relaxed)',
                    color: '#444',
                  }}
                >
                  {twoLayers.layer2.description}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Connector */}
        <ScrollReveal>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 'var(--text-md)',
              textAlign: 'center',
              margin: 'var(--space-xl) auto',
            }}
          >
            {twoLayers.connector}
          </p>
        </ScrollReveal>

        {/* Positioning quote */}
        <ScrollReveal>
          <blockquote
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'var(--text-lg)',
              textAlign: 'center',
              maxWidth: 700,
              margin: 'var(--space-3xl) auto var(--space-xl)',
              lineHeight: 'var(--leading-snug)',
              color: 'var(--color-black)',
            }}
          >
            {positioning}
          </blockquote>
        </ScrollReveal>

        {/* Hypothesis note */}
        <ScrollReveal>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--text-sm)',
              color: 'var(--color-warm-gray-text)',
              textAlign: 'center',
              maxWidth: 600,
              margin: '0 auto var(--space-2xl)',
              lineHeight: 'var(--leading-relaxed)',
            }}
          >
            {hypothesisNote}
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
