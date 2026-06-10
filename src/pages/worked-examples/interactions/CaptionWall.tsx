import { useState } from 'react'
import { useLocalStorage } from '../useLocalStorage'
import type { Station } from '../data'

type Caption = { text: string; mine?: boolean }

type Tag = { text: string; count: number; mine: boolean }

/** Collapse captions into a folksonomy: identical answers (case-insensitive)
 *  merge into one tag whose count drives its size. */
function toTags(captions: Caption[]): Tag[] {
  const map = new Map<string, Tag>()
  for (const c of captions) {
    const key = c.text.trim().toLowerCase()
    if (!key) continue
    const existing = map.get(key)
    if (existing) {
      existing.count += 1
      existing.mine = existing.mine || !!c.mine
    } else {
      map.set(key, { text: c.text.trim(), count: 1, mine: !!c.mine })
    }
  }
  return [...map.values()].sort((a, b) => b.count - a.count)
}

export default function CaptionWall({ station }: { station: Station }) {
  const seed: Caption[] = (station.context.seedCaptions || []).map((t: string) => ({ text: t }))
  const [captions, setCaptions] = useLocalStorage<Caption[]>(`we:${station.id}:caps`, seed)
  const [draft, setDraft] = useState('')
  const tagcloud = station.context.display === 'tagcloud'

  function submit() {
    const v = draft.trim()
    if (!v) return
    setCaptions([...captions, { text: v, mine: true }])
    setDraft('')
  }

  const tags = tagcloud ? toTags(captions) : []
  const maxCount = tags.reduce((m, t) => Math.max(m, t.count), 1)

  return (
    <div className="we-context">
      <div className="we-context-label">{tagcloud ? 'Add to the cloud' : 'Add to the wall'}</div>
      <div className="we-input-row">
        <input
          type="text" placeholder={tagcloud ? 'a name' : 'a detail'}
          value={draft} onChange={e => setDraft(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') submit() }}
        />
        <button className="we-btn" onClick={submit}>Add</button>
      </div>
      {tagcloud ? (
        <div className="we-tagcloud">
          {tags.map((t, i) => {
            // scale font from 0.85rem → 1.7rem by relative frequency
            const size = 0.85 + (t.count - 1) / Math.max(1, maxCount - 1) * 0.85
            return (
              <span
                key={i}
                className={`we-tag ${t.mine ? 'we-tag-mine' : ''}`}
                style={{ fontSize: `${size}rem` }}
                title={t.count > 1 ? `${t.count} mentions` : undefined}
              >
                {t.text}{t.count > 1 && <sup className="we-tag-count">{t.count}</sup>}
              </span>
            )
          })}
        </div>
      ) : (
        <div className="we-wall">
          {captions.map((c, i) => (
            <span key={i} className={`we-chip ${c.mine ? 'we-chip-mine' : ''}`}>{c.text}</span>
          ))}
        </div>
      )}
    </div>
  )
}
