import { motion } from 'framer-motion'
import CopyEmailButton from '../components/CopyEmailButton'

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border px-6 py-28 lg:px-12">
      <div className="mx-auto flex max-w-3xl flex-col items-start gap-8">
        <div>
          <span className="text-sm font-mono text-secondary">03 / Contact</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Let's build something.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-text-secondary">
            Have a project in mind or a role that needs a backend-focused full
            stack developer? Reach out and I'll get back to you.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <CopyEmailButton email="thekernelknight@gmail.com" />
        </motion.div>
      </div>
    </section>
  )
}
