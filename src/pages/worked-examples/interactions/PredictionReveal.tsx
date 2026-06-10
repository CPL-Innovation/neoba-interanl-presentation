import { useEffect, useState } from 'react'
import { useLocalStorage } from '../useLocalStorage'
import type { Station } from '../data'

type Votes = Record<string, number>

type Slide = { img: string; caption: string; source?: string }

/** A small slideshow: one image at a time with prev/next nav and dots.
 *  Missing images fall back to the labeled placeholder (filename). */
function Slideshow({ slides }: { slides: Slide[] }) {
  const [i, setI] = useState(0)
  const [failed, setFailed] = useState<Record<number, boolean>>({})
  const n = slides.length
  const go = (d: number) => setI(prev => (prev + d + n) % n)
  const cur = slides[i]
  const src = cur.img.startsWith('/') || /^https?:/.test(cur.img) ? cur.img : `/${cur.img}`

  return (
    <div className="we-slideshow">
      <div className="we-slide-frame">
        {failed[i] ? (
          <div className="we-slide-placeholder">{cur.img}</div>
        ) : (
          <img
            className="we-slide-img"
            src={src}
            alt={cur.caption}
            onError={() => setFailed(f => ({ ...f, [i]: true }))}
          />
        )}
        <button className="we-slide-nav we-slide-prev" onClick={() => go(-1)} aria-label="Previous">‹</button>
        <button className="we-slide-nav we-slide-next" onClick={() => go(1)} aria-label="Next">›</button>
        <span className="we-slide-count">{i + 1} / {n}</span>
      </div>
      <div className="we-slide-cap">
        {cur.caption}
        {cur.source && (
          <>
            {' '}
            <a className="we-slide-source" href={cur.source} target="_blank" rel="noopener noreferrer">
              source ↗
            </a>
          </>
        )}
      </div>
      <div className="we-slide-dots">
        {slides.map((_, d) => (
          <button
            key={d}
            className={`we-slide-dot ${d === i ? 'is-active' : ''}`}
            onClick={() => setI(d)}
            aria-label={`Go to image ${d + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function PredictionReveal({ station }: { station: Station }) {
  const options: string[] = station.context.options
  const seed: Votes = station.context.seedVotes || {}
  const initial: Votes = options.reduce((acc, o) => ({ ...acc, [o]: seed[o] || 0 }), {} as Votes)
  const [votes, setVotes] = useLocalStorage<Votes>(`we:${station.id}:votes`, initial)
  const [mine, setMine] = useLocalStorage<string | null>(`we:${station.id}:mine`, null)
  const total = Object.values(votes).reduce((a, b) => a + b, 0) || 1
  const revealed = mine != null

  // Self-heal when the option set in config changes: stored votes/vote from an
  // earlier version (e.g. a renamed option) would otherwise skew the aggregate.
  useEffect(() => {
    const keys = Object.keys(votes)
    const sameSet = keys.length === options.length && options.every(o => keys.includes(o))
    if (!sameSet) {
      const fresh = { ...initial }
      if (mine && options.includes(mine)) fresh[mine] = (fresh[mine] || 0) + 1
      setVotes(fresh)
    }
    if (mine && !options.includes(mine)) setMine(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function pick(o: string) {
    if (mine) return
    setVotes({ ...votes, [o]: (votes[o] || 0) + 1 })
    setMine(o)
  }

  return (
    <div className="we-context">
      <div className="we-context-label">Your call → then the record</div>
      <div className="we-options">
        {options.map(o => (
          <button key={o} className={`we-option ${mine === o ? 'we-option-picked' : ''}`} onClick={() => pick(o)} disabled={!!mine}>
            {o}
          </button>
        ))}
      </div>
      {revealed && (
        <>
          <div className="we-distribution">
            {options.map(o => {
              const pct = Math.round(((votes[o] || 0) / total) * 100)
              return (
                <div key={o} className="we-dist-row">
                  <span className="we-dist-label">{o}</span>
                  <span className="we-dist-bar"><span className="we-dist-fill" style={{ width: `${pct}%` }} /></span>
                  <span className="we-dist-pct">{pct}%</span>
                </div>
              )
            })}
          </div>
          <Slideshow slides={station.context.reveal} />
          <div className="we-reveal-note">{station.context.revealNote}</div>
          {station.context.hooks && (
            <ul className="we-hooks">
              {station.context.hooks.map((h: string, i: number) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  )
}
