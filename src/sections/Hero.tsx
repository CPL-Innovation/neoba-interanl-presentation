import { content } from '../data/content'

export default function Hero() {
  const { title, subtitle, attribution } = content.hero

  return (
    <section
      className="section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        {/* Brand mark */}
        <div
          aria-hidden="true"
          style={{
            width: 120,
            height: 4,
            background: 'var(--color-brand-primary)',
            margin: '0 auto var(--space-xl)',
          }}
        />

        {/* Title */}
        <h1
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 'var(--weight-light)',
            fontSize: 'var(--text-4xl)',
            letterSpacing: '-0.02em',
            lineHeight: 'var(--leading-tight)',
            color: 'var(--color-black)',
            marginBottom: 'var(--space-xs)',
          }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 'var(--weight-regular)',
            fontSize: 'var(--text-lg)',
            color: 'var(--color-brand-primary)',
            letterSpacing: '-0.01em',
            marginBottom: 'var(--space-xl)',
            maxWidth: 'none',
          }}
        >
          {subtitle}
        </p>

        {/* Divider */}
        <div
          aria-hidden="true"
          style={{
            width: 60,
            height: 1,
            background: 'var(--color-warm-gray)',
            margin: '0 auto var(--space-lg)',
          }}
        />

        {/* Attribution */}
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 'var(--weight-regular)',
            fontSize: 'var(--text-xs)',
            color: 'var(--color-warm-gray-text)',
            letterSpacing: '0.03em',
            maxWidth: 'none',
          }}
        >
          {attribution}
        </p>
      </div>
    </section>
  )
}
