import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CopyEmailButton({ email }) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API unavailable; the email is still selectable as text.
    }
  }

  return (
    <motion.button
      type="button"
      onClick={handleCopy}
      whileTap={{ scale: 0.97 }}
      className="group relative inline-flex items-center gap-3 rounded-full border border-border bg-card px-6 py-3 text-white transition-colors hover:border-secondary/60"
      aria-label={`Copy email address ${email}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        className="h-4 w-4 text-secondary"
        fill="none"
      >
        <rect x="2.5" y="4.5" width="15" height="11" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3.5 5.5L10 11L16.5 5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>

      <span className="font-mono text-sm sm:text-base">{email}</span>

      <span className="ml-1 flex h-6 w-6 items-center justify-center rounded-full border border-border text-text-secondary transition-colors group-hover:text-white">
        <AnimatePresence mode="wait" initial={false}>
          {copied ? (
            <motion.svg
              key="check"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.15 }}
              viewBox="0 0 16 16"
              className="h-3.5 w-3.5 text-primary"
              fill="none"
            >
              <path d="M3 8.5L6.2 11.5L13 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
          ) : (
            <motion.svg
              key="copy"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.15 }}
              viewBox="0 0 16 16"
              className="h-3.5 w-3.5"
              fill="none"
            >
              <rect x="5.5" y="5.5" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
              <path d="M3 10.5V3.5C3 2.94772 3.44772 2.5 4 2.5H10.5" stroke="currentColor" strokeWidth="1.3" />
            </motion.svg>
          )}
        </AnimatePresence>
      </span>

      <span role="status" aria-live="polite" className="sr-only">
        {copied ? 'Email copied to clipboard' : ''}
      </span>
    </motion.button>
  )
}
