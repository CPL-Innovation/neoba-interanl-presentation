import { Link } from 'react-router-dom'

const cards = [
  {
    to: '/presentation',
    label: 'Concept 1 Progress',
    description: 'NEOBA exhibit concept development — remix framework, curation strategy, and design direction.',
    accent: '#1a1a1a',
    bg: '#0d0d0d',
    textColor: '#f5f0e8',
    tagColor: '#7A7067',
  },
  {
    to: '/user-testing',
    label: 'Branches User Testing',
    description: 'Six playlists. Seven written responses. Findings from the April 28 multi-participant content session.',
    accent: '#4298B5',
    bg: '#f5f3ef',
    textColor: '#1a1a1a',
    tagColor: '#4298B5',
  },
]

export default function IndexPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#f5f3ef',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '3rem 1.5rem',
      fontFamily: "'Work Sans', -apple-system, sans-serif",
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <p style={{
          fontSize: '0.75rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#7A7067',
          marginBottom: '0.75rem',
        }}>
          LOCal Libraries Initiative — CPL × LOC
        </p>
        <h1 style={{
          fontFamily: "'Work Sans', -apple-system, sans-serif",
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 700,
          color: '#0d0d0d',
          lineHeight: 1.1,
          margin: 0,
        }}>
          NEOBA Project
        </h1>
        <p style={{
          fontFamily: "'Spectral', Georgia, serif",
          fontSize: '1.125rem',
          color: '#7A7067',
          marginTop: '0.75rem',
        }}>
          Cleveland Digital Public Library — Exhibit Development
        </p>
      </div>

      {/* Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem',
        width: '100%',
        maxWidth: '800px',
      }}>
        {cards.map((card) => (
          <Link
            key={card.to}
            to={card.to}
            style={{
              display: 'block',
              background: card.bg,
              borderRadius: '12px',
              padding: '2rem',
              textDecoration: 'none',
              border: '1px solid rgba(0,0,0,0.08)',
              transition: 'transform 0.18s ease, box-shadow 0.18s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'
              ;(e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
              ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
            }}
          >
            <p style={{
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: card.tagColor,
              marginBottom: '0.75rem',
            }}>
              Presentation
            </p>
            <h2 style={{
              fontFamily: "'Work Sans', -apple-system, sans-serif",
              fontSize: '1.375rem',
              fontWeight: 700,
              color: card.textColor,
              margin: '0 0 0.75rem 0',
              lineHeight: 1.2,
            }}>
              {card.label}
            </h2>
            <p style={{
              fontSize: '0.9rem',
              color: card.textColor,
              opacity: 0.7,
              lineHeight: 1.6,
              margin: '0 0 1.5rem 0',
            }}>
              {card.description}
            </p>
            <span style={{
              fontSize: '0.8rem',
              fontWeight: 600,
              color: card.tagColor,
            }}>
              Open →
            </span>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <p style={{
        marginTop: '3rem',
        fontSize: '0.75rem',
        color: '#CBC4BC',
        letterSpacing: '0.05em',
      }}>
        May 2026
      </p>
    </div>
  )
}
