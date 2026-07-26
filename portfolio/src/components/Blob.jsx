import { motion, useTransform } from 'framer-motion'

/**
 * A single soft, glowing blob. Combines a slow ambient float (via CSS-driven
 * Framer keyframes) with a subtle cursor parallax offset passed in as
 * springed motion values.
 */
export default function Blob({
  size = 420,
  color = 'primary',
  parallax,
  parallaxStrength = 24,
  floatDuration = 10,
  className = '',
}) {
  const background =
    color === 'primary'
      ? 'radial-gradient(circle at 35% 35%, rgba(108,99,255,0.55), rgba(108,99,255,0) 70%)'
      : 'radial-gradient(circle at 35% 35%, rgba(79,139,255,0.5), rgba(79,139,255,0) 70%)'

  const parallaxX = parallax ? useTransform(parallax.x, (v) => v * parallaxStrength) : 0
  const parallaxY = parallax ? useTransform(parallax.y, (v) => v * parallaxStrength) : 0

  return (
    <motion.div
      aria-hidden="true"
      style={{ width: size, height: size, x: parallaxX, y: parallaxY }}
      className={`absolute ${className}`}
    >
      <motion.div
        style={{ width: '100%', height: '100%', background }}
        className="rounded-full blur-2xl"
        animate={{
          y: [0, -18, 0, 14, 0],
          x: [0, 12, 0, -10, 0],
          scale: [1, 1.04, 1, 0.98, 1],
        }}
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  )
}
