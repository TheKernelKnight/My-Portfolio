import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'

const PROJECTS = [
  {
    title: 'BookMe',
    status: 'Live',
    description:
      'An appointment booking platform for small businesses, barbershops, clinics, gyms, driving schools, and tutors, with client accounts, a business dashboard, and local payment support.',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Chargily'],
    href: 'https://bookeer.vercel.app',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border px-6 py-28 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <span className="text-sm font-mono text-secondary">02 / Projects</span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Selected work
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex items-center justify-center rounded-2xl border border-dashed border-border py-12 text-sm text-text-secondary"
          >
            More projects in progress — check back soon.
          </motion.div>
        </div>
      </div>
    </section>
  )
}
