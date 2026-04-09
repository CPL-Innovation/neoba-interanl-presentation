interface BeforeAfterItem {
  label: string
  detail: string
}

interface BeforeAfterProps {
  beforeItems: BeforeAfterItem[]
  afterItems: BeforeAfterItem[]
  beforeLabel?: string
  afterLabel?: string
}

export function BeforeAfter({
  beforeItems,
  afterItems,
  beforeLabel = 'Original Sketch',
  afterLabel = 'Resculpted Concept',
}: BeforeAfterProps) {
  return (
    <div
      role="group"
      aria-label="Concept comparison: original sketch versus resculpted concept"
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--space-2xl)',
        }}
      >
        {/* Before column */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 'var(--weight-semibold)',
              fontSize: 'var(--text-sm)',
              color: 'var(--color-warm-gray-text)',
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
              marginBottom: 'var(--space-lg)',
            }}
          >
            {beforeLabel}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-lg)',
            }}
          >
            {beforeItems.map((item, i) => (
              <div
                key={i}
                style={{
                  borderLeft: '3px solid var(--color-warm-gray)',
                  paddingLeft: 'var(--space-lg)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 'var(--weight-regular)',
                    fontSize: 'var(--text-md)',
                    color: 'var(--color-warm-gray-text)',
                    marginBottom: 4,
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 'var(--weight-regular)',
                    fontSize: 'var(--text-sm)',
                    color: '#757068',
                  }}
                >
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* After column */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 'var(--weight-semibold)',
              fontSize: 'var(--text-sm)',
              color: 'var(--color-brand-primary)',
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
              marginBottom: 'var(--space-lg)',
            }}
          >
            {afterLabel}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-lg)',
            }}
          >
            {afterItems.map((item, i) => (
              <div
                key={i}
                style={{
                  borderLeft: '3px solid var(--color-brand-primary)',
                  paddingLeft: 'var(--space-lg)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 'var(--weight-medium)',
                    fontSize: 'var(--text-md)',
                    color: 'var(--color-black)',
                    marginBottom: 4,
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 'var(--weight-regular)',
                    fontSize: 'var(--text-sm)',
                    color: '#555',
                  }}
                >
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
