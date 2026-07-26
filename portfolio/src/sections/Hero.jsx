import { useRef } from 'react'
import { motion } from 'framer-motion'
import Blob from '../components/Blob'
import { useMouseParallax } from '../hooks/useMouseParallax'

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Hero() {
  const heroRef = useRef(null)
  const parallax = useMouseParallax(heroRef)

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative flex h-screen min-h-[720px] items-center overflow-hidden px-6 lg:px-12"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-[55%_45%]">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-start gap-6"
        >
          <motion.span
            variants={item}
            className="rounded-full border border-border bg-white/[0.03] px-4 py-1.5 text-xs font-medium tracking-wide text-text-secondary"
          >
            Open to freelance &amp; remote work
          </motion.span>

          <motion.h1
            variants={item}
            className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Bentlemsani Mo. Amine
          </motion.h1>

          <motion.p
            variants={item}
            className="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary sm:text-2xl"
          >
            Full Stack Developer
          </motion.p>

          <motion.p
            variants={item}
            className="max-w-md text-base leading-relaxed text-text-secondary sm:text-lg"
          >
            I build scalable MVP software with modern web technologies.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4 pt-2">
            <motion.button
              type="button"
              onClick={() => scrollTo('projects')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-bg transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(108,99,255,0.35)]"
            >
              View projects
            </motion.button>

            <motion.button
              type="button"
              onClick={() => scrollTo('contact')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-white transition-colors hover:border-secondary/60"
            >
              Contact me
            </motion.button>
          </motion.div>
        </motion.div>

        <div
          aria-hidden="true"
          className="relative hidden h-[420px] md:block"
        >
          <Blob
            size={380}
            color="primary"
            parallax={parallax}
            parallaxStrength={26}
            floatDuration={11}
            className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />
          <Blob
            size={260}
            color="secondary"
            parallax={parallax}
            parallaxStrength={-18}
            floatDuration={14}
            className="left-1/2 top-1/2 -translate-x-[20%] -translate-y-[60%]"
          />
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(108,99,255,0.08),transparent_55%)]"
      />
    </section>
  )
}
