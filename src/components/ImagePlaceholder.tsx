import { useState } from 'react'

interface ImagePlaceholderProps {
  src: string
  alt: string
  placeholderColor?: string
  aspectRatio?: string
}

export function ImagePlaceholder({
  src,
  alt,
  placeholderColor = 'var(--color-warm-gray)',
  aspectRatio = '16 / 9',
}: ImagePlaceholderProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        style={{
          aspectRatio,
          background: placeholderColor,
          borderRadius: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--text-sm)',
            color: 'var(--color-white)',
            opacity: 0.8,
            textAlign: 'center',
            padding: 'var(--space-md)',
          }}
        >
          {alt}
        </span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      style={{
        width: '100%',
        borderRadius: 4,
        display: 'block',
      }}
    />
  )
}
