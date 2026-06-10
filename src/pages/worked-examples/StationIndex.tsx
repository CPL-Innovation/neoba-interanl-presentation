import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { stations } from './data'
import { maybeResetAll } from './useLocalStorage'

const interactionLabel: Record<string, string> = {
  'pin-map': 'pin map',
  'twin-pin': 'twin + pin',
  'prediction-reveal': 'predict → reveal',
  'slider-opinion': 'slider',
  'poll-binary': 'yes / no',
  'prediction-number': 'guess the number',
  'whatisit': 'what is it?',
  'caption-wall': 'caption wall',
}

export default function StationIndex() {
  const worked = stations.filter(s => s.set === 'worked')
  const teen = stations.filter(s => s.set === 'teen')
  const [didReset, setDidReset] = useState(false)

  // honor a ?reset URL (e.g. a bookmark) on a fresh load
  useEffect(() => {
    if (new URLSearchParams(window.location.search).has('reset')) {
      maybeResetAll()
      setDidReset(true)
    }
  }, [])

  function resetSession() {
    Object.keys(localStorage)
      .filter(k => k.startsWith('we:'))
      .forEach(k => localStorage.removeItem(k))
    setDidReset(true)
  }

  return (
    <div className="we-root">
      <header className="we-header">
        <Link to="/">← NEOBA</Link>
        <span className="we-source">Worked-examples mockup · user-testing sample</span>
        <span>v0.1</span>
      </header>
      <div className="we-index-wrap">
        <p className="we-index-eyebrow">Mockup site · 8 stations</p>
        <h1 className="we-index-title">Eight archival clips, eight short interactions.</h1>
        <p className="we-index-sub">
          Each station pairs a 1970s–80s WEWS clip with one low-effort prompt. Drop a pin, drag a slider, guess a number,
          add a caption. Aggregates accrete in <em>localStorage</em> so the room never feels empty.{' '}
          {didReset ? (
            <span style={{ color: 'var(--we-accent)' }}>Session cleared — every station is fresh again.</span>
          ) : (
            <>
              Hit{' '}
              <button type="button" onClick={resetSession} className="we-reset-link">reset</button>
              {' '}to clear a session.
            </>
          )}
        </p>

        <div className="we-index-group-label">Worked set — context & memory</div>
        <div className="we-index-grid">
          {worked.map((s, i) => (
            <Link key={s.id} to={`/worked-examples/${s.id}`} className="we-card">
              <div className="we-card-num">Station {i + 1}</div>
              <h2 className="we-card-title">{s.title}</h2>
              <div className="we-card-source">{s.source}</div>
              <div className="we-card-interaction">→ {interactionLabel[s.interaction]}</div>
            </Link>
          ))}
        </div>

        <div className="we-index-group-label">Teen-friendly set — fast, playful</div>
        <div className="we-index-grid">
          {teen.map((s, i) => (
            <Link key={s.id} to={`/worked-examples/${s.id}`} className="we-card">
              <div className="we-card-num">Station {worked.length + i + 1}</div>
              <h2 className="we-card-title">{s.title}</h2>
              <div className="we-card-source">{s.source}</div>
              <div className="we-card-interaction">→ {interactionLabel[s.interaction]}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
