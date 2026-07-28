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
  floatDuration = 6,
  className = '',
}) {
  const background =
    color === 'primary'
      ? 'radial-gradient(circle at 35% 35%, rgba(108,99,255,0.85), rgba(108,99,255,0.25) 55%, rgba(108,99,255,0) 72%)'
      : 'radial-gradient(circle at 35% 35%, rgba(79,139,255,0.8), rgba(79,139,255,0.22) 55%, rgba(79,139,255,0) 72%)'

  const glow =
    color === 'primary'
      ? '0 0 120px 40px rgba(108,99,255,0.45)'
      : '0 0 120px 40px rgba(79,139,255,0.4)'

  const parallaxX = parallax ? useTransform(parallax.x, (v) => v * parallaxStrength) : 0
  const parallaxY = parallax ? useTransform(parallax.y, (v) => v * parallaxStrength) : 0

  return (
    <motion.div
      aria-hidden="true"
      style={{ width: size, height: size, x: parallaxX, y: parallaxY }}
      className={`absolute ${className}`}
    >
      <motion.div
        style={{ width: '100%', height: '100%', background, boxShadow: glow }}
        className="rounded-full blur-xl"
        animate={{
          y: [0, -42, 10, -20, 0],
          x: [0, 30, -26, 18, 0],
          scale: [1, 1.1, 0.95, 1.05, 1],
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
