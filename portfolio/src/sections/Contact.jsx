import { motion } from 'framer-motion'
import CopyEmailButton from '../components/CopyEmailButton'
import LinkCard from '../components/LinkCard'
import { IconCode, IconAperture, IconSignal } from '../components/icons'

const cardMotion = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border px-6 py-28 lg:px-12">
      <div className="mx-auto flex max-w-4xl flex-col items-start gap-10">
        <div>
          <span className="text-sm font-mono text-secondary">03 / Contact</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Let's build something.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-text-secondary">
            Have a project in mind or a role that needs a backend-focused full
            stack developer? Reach out, or take a look at what I've been
            building.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.1 }}
          className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2"
        >
          <motion.div variants={cardMotion} transition={{ duration: 0.5 }}>
            <CopyEmailButton email="thekernelknight@gmail.com" />
          </motion.div>

          <motion.div variants={cardMotion} transition={{ duration: 0.5 }}>
            <LinkCard
              label="GitHub"
              value="TheKernelKnight"
              href="https://github.com/TheKernelKnight"
              Icon={IconCode}
            />
          </motion.div>

          <motion.div variants={cardMotion} transition={{ duration: 0.5 }}>
            <LinkCard
              label="Instagram"
              value="@thekernelknight"
              href="https://www.instagram.com/thekernelknight/"
              Icon={IconAperture}
            />
          </motion.div>

          <motion.div variants={cardMotion} transition={{ duration: 0.5 }}>
            <LinkCard
              label="X"
              value="@TheKernelKnight"
              href="https://x.com/TheKernelKnight"
              Icon={IconSignal}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
