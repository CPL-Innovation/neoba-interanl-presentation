import { useState } from 'react'
import { useLocalStorage } from '../useLocalStorage'
import type { Station } from '../data'

type Resp = { text: string; mine?: boolean }

export default function SliderOpinion({ station }: { station: Station }) {
  const ctx = station.context
  const seed: number[] = ctx.seedSliders || []
  const [values, setValues] = useLocalStorage<number[]>(`we:${station.id}:slider`, seed)
  const [mine, setMine] = useLocalStorage<number | null>(`we:${station.id}:mine`, null)
  const [draft, setDraft] = useLocalStorage<number>(`we:${station.id}:draft`, 50)
  const submitted = mine != null

  const respSeed: Resp[] = (ctx.followUpSeeds || []).map((t: string) => ({ text: t }))
  const [responses, setResponses] = useLocalStorage<Resp[]>(`we:${station.id}:responses`, respSeed)
  const [respDraft, setRespDraft] = useState('')

  function submit() {
    setValues([...values, draft])
    setMine(draft)
  }
  function addResponse() {
    const v = respDraft.trim()
    if (!v) return
    setResponses([...responses, { text: v, mine: true }])
    setRespDraft('')
  }
  const avg = values.length ? Math.round(values.reduce((a, b) => a + b, 0) / values.length) : 50

  return (
    <div className="we-context">
      <div className="we-context-label">Where do you land?</div>
      <div className="we-slider-wrap">
        <div className="we-slider-scale"><span>{ctx.scale.left}</span><span>{ctx.scale.right}</span></div>
        <div className="we-slider-track">
          {values.map((v, i) => (
            <span key={i} className="we-slider-seed" style={{ left: `${v}%` }} />
          ))}
          {submitted && (
            <>
              <span className="we-slider-true" style={{ left: `${avg}%` }} />
              <span className="we-slider-true-cap" style={{ left: `${avg}%` }}>avg {avg}</span>
            </>
          )}
          <input
            type="range" min={0} max={100} value={submitted ? (mine as number) : draft}
            disabled={submitted}
            onChange={e => setDraft(Number(e.target.value))}
            className="we-slider-input"
          />
        </div>
      </div>
      {!submitted && <button className="we-btn we-btn-accent" onClick={submit}>Lock it in</button>}
      {submitted && (
        <>
          <div className="we-reveal-note">{ctx.reveal}</div>
          <div className="we-strip-map">
            <div>Mayfield Rd · 4-city strip</div>
            <div className="we-strip-cities">
              <span>Cleveland Hts</span><span>S. Euclid</span><span>Lyndhurst</span><span>Mayfield Hts</span>
            </div>
          </div>
          {ctx.followUp && (
            <div className="we-followup">
              <div className="we-context-label" style={{ marginBottom: '0.4rem' }}>{ctx.followUp}</div>
              <div className="we-input-row" style={{ marginTop: 0 }}>
                <input
                  type="text" placeholder="name a street"
                  value={respDraft}
                  onChange={e => setRespDraft(e.target.value)}
                  onKeyDown={e => { if (e.key === 'Enter') addResponse() }}
                />
                <button className="we-btn" onClick={addResponse}>Add</button>
              </div>
              <div className="we-wall">
                {responses.map((r, i) => (
                  <span key={i} className={`we-chip ${r.mine ? 'we-chip-mine' : ''}`}>{r.text}</span>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
