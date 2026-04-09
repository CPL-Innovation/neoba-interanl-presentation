interface VideoPlayerProps {
  src?: string
  posterText?: string
  posterColor?: string
  fullBleed?: boolean
}

export function VideoPlayer({
  src,
  posterText = 'Video Mockup',
  posterColor = 'var(--color-coral)',
  fullBleed = false,
}: VideoPlayerProps) {
  const containerStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: fullBleed ? 'none' : 'var(--content-max-width)',
    aspectRatio: '16 / 9',
    borderRadius: 4,
    overflow: 'hidden',
    position: 'relative',
  }

  if (src) {
    return (
      <div style={containerStyle}>
        <video
          src={src}
          controls
          preload="metadata"
          aria-label={posterText}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <track kind="captions" label="English" srcLang="en" default />
        </video>
      </div>
    )
  }

  return (
    <div
      role="img"
      aria-label={`Video placeholder: ${posterText}`}
      style={{
        ...containerStyle,
        background: posterColor,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
      }}
    >
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <circle cx="32" cy="32" r="30" stroke="white" strokeWidth="2" opacity="0.8" />
        <path d="M26 20L46 32L26 44V20Z" fill="white" opacity="0.8" />
      </svg>
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 'var(--weight-medium)',
          fontSize: 'var(--text-sm)',
          color: '#1a1a1a',
          letterSpacing: '0.05em',
          textTransform: 'uppercase' as const,
        }}
      >
        {posterText}
      </span>
    </div>
  )
}
