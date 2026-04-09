import { content } from '../data/content'

export default function Footer() {
  const { line1, line2, line3 } = content.footer

  return (
    <footer
      style={{
        background: 'var(--color-black)',
        color: 'var(--color-white)',
        textAlign: 'center',
        padding: 'var(--space-2xl) var(--content-padding-x)',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 'var(--weight-semibold)',
          fontSize: 'var(--text-md)',
          marginBottom: 'var(--space-xs)',
        }}
      >
        {line1}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--text-sm)',
          opacity: 0.7,
          marginBottom: 'var(--space-xs)',
        }}
      >
        {line2}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--text-xs)',
          opacity: 0.5,
        }}
      >
        {line3}
      </div>
    </footer>
  )
}
