import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="border-t border-border px-6 py-28 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-sm font-mono text-secondary"
        >
          00 / About
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-2xl leading-relaxed text-white sm:text-3xl"
        >
          I work at the point where a business problem turns into software:
          designing backend architecture that stays stable as it grows,
          pairing it with a modern frontend that feels effortless to use, and
          shaping the database underneath so both can move fast without
          breaking. My focus is getting a scalable MVP in front of real users
          quickly, then iterating on what they actually need.
        </motion.p>
      </div>
    </section>
  )
}
