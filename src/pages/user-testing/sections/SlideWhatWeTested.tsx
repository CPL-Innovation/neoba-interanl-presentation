import { ScrollReveal } from '../../../components/ScrollReveal'
import { utContent } from '../data'

export default function SlideWhatWeTested() {
  const { heading, headline, playlists, formatNotes, playlistLink } =
    utContent.whatWeTested

  return (
    <section className="ut-slide">
      <div className="ut-content">
        <ScrollReveal>
          <p className="ut-slide-label">Slide 2</p>
          <h2 className="ut-slide-heading">{heading}</h2>
          <p className="ut-slide-headline">{headline}</p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="ut-two-col">
            {/* Playlist table */}
            <div>
              <table className="ut-table">
                <thead>
                  <tr>
                    <th>Playlist</th>
                    <th>Content character</th>
                  </tr>
                </thead>
                <tbody>
                  {playlists.map((p) => (
                    <tr key={p.name}>
                      <td>{p.name}</td>
                      <td>{p.character}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Format notes */}
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 'var(--weight-semibold)',
                  fontSize: 'var(--text-sm)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: 'var(--color-warm-gray-text)',
                  marginBottom: 'var(--space-sm)',
                }}
              >
                Format notes
              </h3>
              <ul className="ut-bullet-list">
                {formatNotes.map((note, i) => (
                  <li key={i}>{note}</li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <a
            href={playlistLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: 'var(--space-lg)',
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--text-sm)',
              fontWeight: 600,
              color: '#fff',
              background: 'var(--color-blue-mid)',
              padding: '0.625rem 1.25rem',
              borderRadius: '6px',
              textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            View playlists →
          </a>
        </ScrollReveal>

      </div>
    </section>
  )
}
