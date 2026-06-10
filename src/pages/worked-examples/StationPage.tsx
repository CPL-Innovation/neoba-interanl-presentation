import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './worked-examples.css'
import { findStation, neighborStations, stations } from './data'
import { maybeResetAll } from './useLocalStorage'
import PinMap from './interactions/PinMap'
import TwinPin from './interactions/TwinPin'
import PredictionReveal from './interactions/PredictionReveal'
import SliderOpinion from './interactions/SliderOpinion'
import PollBinary from './interactions/PollBinary'
import PredictionNumber from './interactions/PredictionNumber'
import WhatIsIt from './interactions/WhatIsIt'
import CaptionWall from './interactions/CaptionWall'

function ClipFrame({ title, src }: { title: string; src: string }) {
  const [hasMedia, setHasMedia] = useState(false)
  // Files live in public/, served from the site root — ensure an absolute path
  // so relative station URLs (/worked-examples/kinsman) don't mis-resolve it.
  const resolved = src.startsWith('/') || /^https?:/.test(src) ? src : `/${src}`
  return (
    <div className="we-clip">
      <video
        controls
        preload="metadata"
        src={resolved}
        style={{ display: hasMedia ? 'block' : 'none' }}
        onLoadedData={() => setHasMedia(true)}
      />
      {!hasMedia && (
        <div className="we-clip-placeholder">
          <div className="we-play" />
          <div>{title}</div>
          <div className="we-clip-file">{src}</div>
        </div>
      )}
    </div>
  )
}

export default function StationPage() {
  const { stationId } = useParams<{ stationId: string }>()
  const station = findStation(stationId)

  useEffect(() => { maybeResetAll() }, [])

  if (!station) {
    return (
      <div className="we-root">
        <div className="we-station">
          <p>Station not found. <Link to="/worked-examples">Back to index</Link>.</p>
        </div>
      </div>
    )
  }

  const { prev, next } = neighborStations(station.id)
  const i = stations.findIndex(s => s.id === station.id) + 1

  const Interaction = (() => {
    switch (station.interaction) {
      case 'pin-map': return <PinMap station={station} />
      case 'twin-pin': return <TwinPin station={station} />
      case 'prediction-reveal': return <PredictionReveal station={station} />
      case 'slider-opinion': return <SliderOpinion station={station} />
      case 'poll-binary': return <PollBinary station={station} />
      case 'prediction-number': return <PredictionNumber station={station} />
      case 'whatisit': return <WhatIsIt station={station} />
      case 'caption-wall': return <CaptionWall station={station} />
    }
  })()

  return (
    <div className="we-root">
      <header className="we-header">
        <Link to="/worked-examples">← All stations</Link>
        <span className="we-source">{station.source}</span>
        <Link to="/">NEOBA</Link>
      </header>
      <div className="we-station">
        <div className="we-grid">
          <ClipFrame title={station.title} src={station.clip} />
          <div className="we-right">
            <div className="we-prompt">
              {station.prompt.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            {Interaction}
          </div>
        </div>

        <div className="we-pager">
          <div>{prev ? <Link to={`/worked-examples/${prev.id}`}>← {prev.title}</Link> : <span />}</div>
          <div className="we-station-counter">{i} / {stations.length} · {station.set}</div>
          <div>{next ? <Link to={`/worked-examples/${next.id}`}>{next.title} →</Link> : <span />}</div>
        </div>

        {station.notes && <div className="we-notes-foot">Note: {station.notes}</div>}
      </div>
    </div>
  )
}
