import { utContent } from '../data'

export default function SlideTitle() {
  const { heading, headline, meta, image, imageAlt } = utContent.title

  return (
    <section className="ut-slide ut-slide--hero">
      <div className="ut-content" style={{ textAlign: 'center' }}>
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

        <h1
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 'var(--weight-light)',
            fontSize: 'var(--text-4xl)',
            letterSpacing: '-0.02em',
            lineHeight: 'var(--leading-tight)',
            color: 'var(--color-black)',
            marginBottom: 'var(--space-sm)',
          }}
        >
          {heading}
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'var(--text-lg)',
            color: 'var(--color-brand-primary)',
            marginBottom: 'var(--space-xl)',
            maxWidth: 'none',
          }}
        >
          {headline}
        </p>

        <div className="ut-divider" style={{ margin: '0 auto var(--space-lg)' }} />

        <ul style={{ listStyle: 'none', padding: 0, marginBottom: 'var(--space-2xl)' }}>
          {meta.map((line, i) => (
            <li
              key={i}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--text-sm)',
                color: 'var(--color-warm-gray-text)',
                lineHeight: 2,
              }}
            >
              {line}
            </li>
          ))}
        </ul>

        {/* PLACEHOLDER — replace with actual asset */}
        <div className="ut-image-placeholder ut-image-placeholder--hero">
          <img src={image} alt={imageAlt} />
          {/* PLACEHOLDER — replace with actual asset: session-overview.jpg */}
        </div>
      </div>
    </section>
  )
}
