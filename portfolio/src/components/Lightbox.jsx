import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg/90 p-6 backdrop-blur-sm"
        >
          <motion.img
            src={src}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="max-h-[85vh] max-w-full rounded-xl border border-border object-contain shadow-[0_0_80px_rgba(108,99,255,0.25)]"
          />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close image"
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-white transition-colors hover:border-secondary/60"
          >
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none">
              <path
                d="M4 4L12 12M12 4L4 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
