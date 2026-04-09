import { motion, useReducedMotion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
  style?: React.CSSProperties
}

export function ScrollReveal({ children, delay = 0, className, style }: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal()
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      data-scroll-reveal
      className={className}
      style={style}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={prefersReducedMotion ? { duration: 0 } : {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: delay / 1000,
      }}
    >
      {children}
    </motion.div>
  )
}
