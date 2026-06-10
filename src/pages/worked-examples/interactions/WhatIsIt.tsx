import { useState } from 'react'
import { useLocalStorage } from '../useLocalStorage'
import type { Station } from '../data'

export default function WhatIsIt({ station }: { station: Station }) {
  const ctx = station.context
  const [guesses, setGuesses] = useLocalStorage<string[]>(`we:${station.id}:guesses`, ctx.seedGuesses || [])
  const [mine, setMine] = useLocalStorage<string | null>(`we:${station.id}:mine`, null)
  const [draft, setDraft] = useState('')

  function submit() {
    const v = draft.trim()
    if (!v) return
    setGuesses([...guesses, v])
    setMine(v)
    setDraft('')
  }

  return (
    <div className="we-context">
      <div className="we-context-label">Your guess</div>
      {mine == null ? (
        <div className="we-input-row">
          <input
            type="text" placeholder="what is this thing?"
            value={draft} onChange={e => setDraft(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') submit() }}
          />
          <button className="we-btn we-btn-accent" onClick={submit}>Reveal</button>
        </div>
      ) : (
        <>
          <div className="we-reveal-card">
            <h4>{ctx.reveal.title}</h4>
            <p>{ctx.reveal.body}</p>
          </div>
          <div className="we-guess-list">
            <div>Others guessed:</div>
            <ul>{guesses.filter(g => g !== mine).slice(-6).map((g, i) => <li key={i}>{g}</li>)}</ul>
          </div>
        </>
      )}
    </div>
  )
}
