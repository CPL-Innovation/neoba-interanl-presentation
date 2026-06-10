import { useEffect, useRef, useState } from 'react'
import { useLocalStorage } from '../useLocalStorage'
import type { Station } from '../data'

type Pin = { x: number; y: number; label: string; seed?: boolean }

function resolve(path: string) {
  return path.startsWith('/') || /^https?:/.test(path) ? path : `/${path}`
}

const isVideo = (p: string) => /\.(mp4|webm|mov)$/i.test(p)

/** The present-day twin panel. For a video, it plays inline on click and can
 *  be expanded to a fullscreen lightbox. For an image, it shows a placeholder. */
function TwinMedia({ media }: { media: string }) {
  const [expanded, setExpanded] = useState(false)
  const inlineRef = useRef<HTMLVideoElement>(null)
  const src = resolve(media)

  // close the lightbox on Escape
  useEffect(() => {
    if (!expanded) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setExpanded(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [expanded])

  if (!isVideo(media)) {
    return <div className="we-twin-frame">{media}</div>
  }

  return (
    <>
      <div className="we-twin-frame we-twin-video">
        <video ref={inlineRef} src={src} playsInline controls preload="metadata" />
        <button
          className="we-twin-expand"
          onClick={() => { inlineRef.current?.pause(); setExpanded(true) }}
          aria-label="Expand video"
          title="Expand"
        >⤢</button>
      </div>
      {expanded && (
        <div className="we-lightbox" onClick={() => setExpanded(false)}>
          <button className="we-lightbox-close" aria-label="Close" onClick={() => setExpanded(false)}>×</button>
          <video
            className="we-lightbox-video"
            src={src}
            controls
            autoPlay
            playsInline
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}

export default function TwinPin({ station }: { station: Station }) {
  const twin = station.context.twin
  const seed: Pin[] = (station.context.seedPins || []).map((p: any) => ({ ...p, seed: true }))
  const [pins, setPins] = useLocalStorage<Pin[]>(`we:${station.id}:pins`, seed)
  const [draft, setDraft] = useState<{ x: number; y: number } | null>(null)
  const [draftLabel, setDraftLabel] = useState('')
  const mapRef = useRef<HTMLDivElement>(null)

  function onMapClick(e: React.MouseEvent) {
    const rect = mapRef.current!.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setDraft({ x, y })
  }
  function commitDraft() {
    if (!draft) return
    setPins([...pins, { x: draft.x, y: draft.y, label: draftLabel.trim() || 'here' }])
    setDraft(null); setDraftLabel('')
  }

  return (
    <div className="we-context">
      <div className="we-context-label">Present-day twin · drop your eclipse spot</div>
      <div className="we-twin">
        <div>
          <TwinMedia media={twin.media} />
          <div className="we-twin-cap">{twin.caption}</div>
        </div>
      </div>
      <div className="we-map we-twin-map" ref={mapRef} onClick={onMapClick}>
        <svg className="we-map-streets" viewBox="0 0 100 60" preserveAspectRatio="none">
          <path d="M0 30 L100 30" stroke="#6c6457" strokeWidth="0.3" fill="none" />
          <path d="M50 0 L50 60" stroke="#6c6457" strokeWidth="0.3" fill="none" />
          <circle cx="50" cy="30" r="2" fill="#6c6457" />
          <text x="52" y="29" fontSize="3" fill="#6c6457">Cleveland</text>
        </svg>
        {pins.map((p, i) => (
          <div key={i} className={`we-pin ${p.seed ? '' : 'we-pin-mine'}`} style={{ left: `${p.x}%`, top: `${p.y}%` }}>
            <span className={`we-pin-label ${p.x > 55 ? 'we-pin-label-left' : ''}`}>{p.label}</span>
          </div>
        ))}
        {draft && <div className="we-pin we-pin-mine" style={{ left: `${draft.x}%`, top: `${draft.y}%` }} />}
      </div>
      <div className="we-map-help"><span>Click the map to drop your spot. {pins.length} pins so far.</span></div>
      {draft && (
        <div className="we-input-row">
          <input
            type="text" placeholder="where were you?" value={draftLabel}
            onChange={e => setDraftLabel(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') commitDraft() }} autoFocus
          />
          <button className="we-btn" onClick={commitDraft}>Pin it</button>
        </div>
      )}
    </div>
  )
}
