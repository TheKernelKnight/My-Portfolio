import { motion } from 'framer-motion'

export default function ProjectCard({
  title,
  status,
  description,
  tags,
  href,
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-shadow duration-300 hover:border-secondary/50 hover:shadow-[0_0_60px_rgba(108,99,255,0.18)] sm:p-10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {title}
          </h3>
          {status && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white/[0.03] px-3 py-1 text-xs font-medium text-secondary">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              {status}
            </span>
          )}
        </div>

        <p className="max-w-xl text-base leading-relaxed text-text-secondary">
          {description}
        </p>

        <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md border border-border bg-white/[0.02] px-2.5 py-1 text-xs text-text-secondary"
            >
              {tag}
            </li>
          ))}
        </ul>

        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-bg transition-transform duration-300 hover:scale-[1.03]"
        >
          Visit project
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
        </a>
      </div>
    </motion.article>
  )
}
