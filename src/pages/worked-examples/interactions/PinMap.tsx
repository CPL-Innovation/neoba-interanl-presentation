import { useRef, useState } from 'react'
import { useLocalStorage } from '../useLocalStorage'
import type { Station } from '../data'

type Pin = { x: number; y: number; label: string; seed?: boolean }

export default function PinMap({ station }: { station: Station }) {
  const map = station.context.map
  const seedPins: Pin[] = (station.context.seedPins || []).map((p: any) => ({ ...p, seed: true }))
  const [pins, setPins] = useLocalStorage<Pin[]>(`we:${station.id}:pins`, seedPins)
  const [draft, setDraft] = useState<{ x: number; y: number } | null>(null)
  const [draftLabel, setDraftLabel] = useState('')
  const [openEntity, setOpenEntity] = useState<number | null>(null)
  const [labelOn, setLabelOn] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    return new URLSearchParams(window.location.search).get('label') === 'on'
  })
  const ref = useRef<HTMLDivElement>(null)

  function onMapClick(e: React.MouseEvent) {
    const rect = ref.current!.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setDraft({ x, y })
    setOpenEntity(null)
  }

  function commitDraft() {
    if (!draft) return
    const label = draftLabel.trim() || 'a memory'
    setPins([...pins, { x: draft.x, y: draft.y, label }])
    setDraft(null)
    setDraftLabel('')
  }

  return (
    <div className="we-context">
      <div className="we-context-label">Neighborhood map · drop a memory-pin</div>
      <div className="we-map" ref={ref} onClick={onMapClick}>
        <svg className="we-map-streets" viewBox="0 0 100 75" preserveAspectRatio="none">
          <path d="M0 25 L100 22" stroke="#6c6457" strokeWidth="0.4" fill="none" />
          <path d="M0 50 L100 53" stroke="#6c6457" strokeWidth="0.4" fill="none" />
          <path d="M30 0 L28 75" stroke="#6c6457" strokeWidth="0.4" fill="none" />
          <path d="M65 0 L67 75" stroke="#6c6457" strokeWidth="0.4" fill="none" />
        </svg>
        {map.boundary?.show && (
          <>
            <svg className="we-boundary-svg" viewBox="0 0 100 75" preserveAspectRatio="none">
              {/* right-pointing triangle, echoing the real Forgotten Triangle rail boundary */}
              <polygon points="11,20 87,42 33,68" />
            </svg>
            {labelOn && map.boundary.abLabel && (
              <div className="we-boundary-label">{map.boundary.abLabel}</div>
            )}
          </>
        )}
        {map.entities.map((ent: any, i: number) => (
          <div
            key={i}
            className={`we-entity ${openEntity === i ? 'we-entity-open' : ''}`}
            style={{ left: `${ent.x}%`, top: `${ent.y}%` }}
            onClick={e => { e.stopPropagation(); if (ent.deeper) setOpenEntity(openEntity === i ? null : i); setDraft(null) }}
          >
            <span className="we-entity-dot" />
            <span className="we-entity-label">{ent.name}</span>
            {openEntity === i && ent.deeper && (
              <div className="we-popover" onClick={e => e.stopPropagation()}>
                <button className="we-popover-close" onClick={() => setOpenEntity(null)}>×</button>
                {ent.deeper}
              </div>
            )}
          </div>
        ))}
        {pins.map((p, i) => (
          <div
            key={`p${i}`}
            className={`we-pin ${p.seed ? '' : 'we-pin-mine'}`}
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            onClick={e => e.stopPropagation()}
          >
            <span className={`we-pin-label ${p.x > 55 ? 'we-pin-label-left' : ''}`}>{p.label}</span>
          </div>
        ))}
        {draft && (
          <div className="we-pin we-pin-mine" style={{ left: `${draft.x}%`, top: `${draft.y}%` }} />
        )}
      </div>
      <div className="we-map-help">
        <span>Click anywhere to drop a pin. {pins.length} pins so far.</span>
        <button className="we-toggle-btn" onClick={() => setLabelOn(v => !v)}>
          {labelOn ? 'Label: on' : 'Label: off'}
        </button>
      </div>
      {draft && (
        <div className="we-input-row" onClick={e => e.stopPropagation()}>
          <input
            type="text"
            placeholder="a few words — your memory here"
            value={draftLabel}
            onChange={e => setDraftLabel(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') commitDraft() }}
            autoFocus
          />
          <button className="we-btn" onClick={commitDraft}>Pin it</button>
        </div>
      )}
    </div>
  )
}
