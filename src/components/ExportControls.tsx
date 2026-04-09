import { generateMarkdown } from '../lib/exportMarkdown'

function handlePdf() {
  window.print()
}

function handleMarkdown() {
  const md = generateMarkdown()
  const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'LOCal-Concept1-Progress-2026-04-08.md'
  a.click()
  URL.revokeObjectURL(url)
}

export function ExportControls() {
  return (
    <div
      className="export-controls"
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 100,
        display: 'flex',
        gap: 8,
        opacity: 0.5,
        transition: 'opacity 200ms ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = '1'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = '0.5'
      }}
    >
      <button
        onClick={handlePdf}
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '12px',
          padding: '8px 14px',
          borderRadius: 100,
          border: '1px solid var(--color-warm-gray)',
          background: 'var(--color-white)',
          color: 'var(--color-black)',
          cursor: 'pointer',
        }}
      >
        Export PDF
      </button>
      <button
        onClick={handleMarkdown}
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '12px',
          padding: '8px 14px',
          borderRadius: 100,
          border: '1px solid var(--color-warm-gray)',
          background: 'var(--color-white)',
          color: 'var(--color-black)',
          cursor: 'pointer',
        }}
      >
        Export Markdown
      </button>
    </div>
  )
}
