import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useActiveSection } from '../hooks/useActiveSection'

const NAV_ITEMS = [
  { index: '0', label: 'About', id: 'about' },
  { index: '1', label: 'Skills', id: 'skills' },
  { index: '2', label: 'Projects', id: 'projects' },
  { index: '3', label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const activeId = useActiveSection(NAV_ITEMS.map((item) => item.id))

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 8)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleNavClick(event, id) {
    event.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={[
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-bg/70 backdrop-blur-md border-b border-border'
          : 'bg-transparent border-b border-transparent',
      ].join(' ')}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8"
      >
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, 'hero')}
          className="text-lg font-semibold tracking-tight text-white"
        >
          TheKernelKnight<span className="text-primary">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  aria-current={isActive ? 'true' : undefined}
                  className="group relative flex items-center gap-2 rounded-full px-4 py-2 text-sm text-text-secondary transition-colors hover:text-white"
                >
                  <span
                    className={[
                      'font-mono text-xs transition-colors',
                      isActive ? 'text-primary' : 'text-text-secondary/60',
                    ].join(' ')}
                  >
                    {item.index}
                  </span>
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 -z-10 rounded-full border border-border bg-white/[0.04]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, 'contact')}
          className="hidden rounded-full border border-border px-4 py-2 text-sm text-white transition-all hover:border-secondary hover:shadow-[0_0_20px_rgba(79,139,255,0.25)] md:inline-flex"
        >
          Get in touch
        </a>
      </nav>
    </motion.header>
  )
}
