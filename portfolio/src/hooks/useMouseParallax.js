import { useEffect } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'

/**
 * Returns spring-smoothed x/y motion values (-1..1) representing the
 * cursor's offset from the center of a target element. Kept subtle by
 * design: consumers should scale these down further before applying
 * to transforms.
 */
export function useMouseParallax(targetRef) {
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, { stiffness: 60, damping: 20, mass: 0.5 })
  const y = useSpring(rawY, { stiffness: 60, damping: 20, mass: 0.5 })

  useEffect(() => {
    const node = targetRef?.current ?? window

    function handlePointerMove(event) {
      const width = window.innerWidth
      const height = window.innerHeight
      const offsetX = (event.clientX / width) * 2 - 1
      const offsetY = (event.clientY / height) * 2 - 1
      rawX.set(offsetX)
      rawY.set(offsetY)
    }

    node.addEventListener('pointermove', handlePointerMove)
    return () => node.removeEventListener('pointermove', handlePointerMove)
  }, [targetRef, rawX, rawY])

  return { x, y }
}
