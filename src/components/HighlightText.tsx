import { motion, useReducedMotion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

interface HighlightTextProps {
  children: React.ReactNode
  color?: string
  delay?: number
  className?: string
}

export function HighlightText({
  children,
  color = 'var(--color-gold)',
  delay = 0,
  className,
}: HighlightTextProps) {
  const { ref, isVisible } = useScrollReveal()
  const prefersReducedMotion = useReducedMotion()

  return (
    <span
      ref={ref}
      className={className}
      style={{ position: 'relative', display: 'inline' }}
    >
      <span style={{ position: 'relative', zIndex: 1 }}>{children}</span>
      <motion.span
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          left: -4,
          right: -4,
          height: '40%',
          background: color,
          opacity: 0.35,
          zIndex: 0,
          transformOrigin: 'left',
        }}
        initial={prefersReducedMotion ? false : { scaleX: 0 }}
        animate={isVisible ? { scaleX: 1 } : prefersReducedMotion ? { scaleX: 1 } : { scaleX: 0 }}
        transition={prefersReducedMotion ? { duration: 0 } : {
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1],
          delay: delay / 1000,
        }}
      />
    </span>
  )
}
