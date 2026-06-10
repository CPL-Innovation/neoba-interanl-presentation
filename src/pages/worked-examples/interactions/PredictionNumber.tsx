import { useState } from 'react'
import { useLocalStorage } from '../useLocalStorage'
import type { Station } from '../data'

export default function PredictionNumber({ station }: { station: Station }) {
  const ctx = station.context
  const { min, max, unit } = ctx.range
  const truth: number = ctx.reveal.value
  const [guesses, setGuesses] = useLocalStorage<number[]>(`we:${station.id}:guesses`, ctx.seedGuesses || [])
  const [mine, setMine] = useLocalStorage<number | null>(`we:${station.id}:mine`, null)
  const [followUps, setFollowUps] = useLocalStorage<string[]>(`we:${station.id}:followups`, [])
  const [draft, setDraft] = useState<number>(80)
  const [followDraft, setFollowDraft] = useState('')

  function submit() {
    setGuesses([...guesses, draft])
    setMine(draft)
  }
  function pctOf(v: number) {
    return Math.max(0, Math.min(100, ((v - min) / (max - min)) * 100))
  }

  return (
    <div className="we-context">
      <div className="we-context-label">Guess in {unit}</div>
      <div className="we-slider-wrap">
        <div className="we-slider-scale"><span>{min} {unit}</span><span>{max} {unit}</span></div>
        <div className="we-slider-track">
          {guesses.map((g, i) => (
            <span key={i} className="we-slider-seed" style={{ left: `${pctOf(g)}%` }} />
          ))}
          {mine != null && (
            <>
              <span className="we-slider-true" style={{ left: `${pctOf(truth)}%` }} />
              <span className="we-slider-true-cap" style={{ left: `${pctOf(truth)}%` }}>{truth} {unit}</span>
            </>
          )}
          <input
            type="range" min={min} max={max} value={mine != null ? mine : draft}
            disabled={mine != null}
            onChange={e => setDraft(Number(e.target.value))}
            className="we-slider-input"
          />
        </div>
        <div className="we-meter-scale">
          {ctx.scaleMarks.map((m: any, i: number) => (
            <div key={i} className="we-meter-mark" style={{ left: `${pctOf(m.at)}%` }}>{m.label}</div>
          ))}
        </div>
      </div>
      {mine == null && (
        <button className="we-btn we-btn-accent" onClick={submit}>Guess {draft} {unit}</button>
      )}
      {mine != null && (
        <>
          <div className="we-reveal-note">{ctx.reveal.caption}</div>
          {ctx.followUp && (
            <div className="we-input-row" style={{ marginTop: '0.7rem' }}>
              <input
                type="text" placeholder={ctx.followUp}
                value={followDraft}
                onChange={e => setFollowDraft(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter' && followDraft.trim()) {
                    setFollowUps([...followUps, followDraft.trim()])
                    setFollowDraft('')
                  }
                }}
              />
              <button className="we-btn" onClick={() => {
                if (followDraft.trim()) { setFollowUps([...followUps, followDraft.trim()]); setFollowDraft('') }
              }}>Add</button>
            </div>
          )}
          {followUps.length > 0 && (
            <div className="we-wall">
              {followUps.map((f, i) => <span key={i} className="we-chip we-chip-mine">{f}</span>)}
            </div>
          )}
        </>
      )}
    </div>
  )
}
