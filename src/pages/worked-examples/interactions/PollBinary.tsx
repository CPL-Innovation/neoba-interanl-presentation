import { useLocalStorage } from '../useLocalStorage'
import type { Station } from '../data'

type Votes = Record<string, number>

export default function PollBinary({ station }: { station: Station }) {
  const options: string[] = station.context.options
  const seed: Votes = station.context.seedVotes || {}
  const initial: Votes = options.reduce((acc, o) => ({ ...acc, [o]: seed[o] || 0 }), {} as Votes)
  const [votes, setVotes] = useLocalStorage<Votes>(`we:${station.id}:votes`, initial)
  const [mine, setMine] = useLocalStorage<string | null>(`we:${station.id}:mine`, null)
  const total = Object.values(votes).reduce((a, b) => a + b, 0) || 1

  function pick(o: string) {
    if (mine) return
    setVotes({ ...votes, [o]: (votes[o] || 0) + 1 })
    setMine(o)
  }
  const yesPct = Math.round(((votes[options[0]] || 0) / total) * 100)
  const noPct = 100 - yesPct

  return (
    <div className="we-context">
      <div className="we-context-label">One tap</div>
      <div className="we-options">
        {options.map(o => (
          <button key={o} className={`we-option ${mine === o ? 'we-option-picked' : ''}`} disabled={!!mine} onClick={() => pick(o)}>
            {o}
          </button>
        ))}
      </div>
      {mine && (
        <>
          <div className="we-tally">
            <div className="we-tally-seg we-tally-yes" style={{ width: `${yesPct}%` }}>{yesPct}%</div>
            <div className="we-tally-seg we-tally-no" style={{ width: `${noPct}%` }}>{noPct}%</div>
          </div>
          <div className="we-reveal-cap">{yesPct}% would throw · {total} responses</div>
        </>
      )}
    </div>
  )
}
