import { motion } from 'framer-motion'

export default function LinkCard({ label, value, href, Icon }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="group flex items-center gap-4 rounded-2xl border border-border bg-card px-6 py-5 transition-shadow duration-300 hover:border-secondary/60 hover:shadow-[0_0_40px_rgba(79,139,255,0.18)] sm:px-7 sm:py-6"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-white/[0.03] text-secondary transition-colors group-hover:text-primary">
        <Icon className="h-5 w-5" />
      </span>

      <span className="flex flex-col">
        <span className="text-xs font-medium uppercase tracking-wide text-text-secondary">
          {label}
        </span>
        <span className="font-mono text-base text-white sm:text-lg">{value}</span>
      </span>

      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        className="ml-auto h-4 w-4 shrink-0 text-text-secondary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
        fill="none"
      >
        <path
          d="M4 12L12 4M12 4H5.5M12 4V10.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.a>
  )
}
