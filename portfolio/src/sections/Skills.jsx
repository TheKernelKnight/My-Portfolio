import { motion } from 'framer-motion'
import SkillCard from '../components/SkillCard'
import {
  IconOrbit,
  IconHex,
  IconLayers,
  IconPrism,
  IconDatabase,
  IconStack,
  IconPen,
  IconBlueprint,
} from '../components/icons'

const SKILLS = [
  { name: 'React', Icon: IconOrbit },
  { name: 'Node.js', Icon: IconHex },
  { name: 'Express', Icon: IconLayers },
  { name: 'Prisma', Icon: IconPrism },
  { name: 'PostgreSQL', Icon: IconDatabase },
  { name: 'MariaDB', Icon: IconStack },
  { name: 'Figma', Icon: IconPen },
  { name: 'Backend Architecture', Icon: IconBlueprint },
]

const grid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border px-6 py-28 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <span className="text-sm font-mono text-secondary">01 / Skills</span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Tools I reach for
        </h2>

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {SKILLS.map((skill) => (
            <SkillCard key={skill.name} name={skill.name} Icon={skill.Icon} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
