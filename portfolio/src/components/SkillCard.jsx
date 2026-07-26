import { motion } from 'framer-motion'

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

export default function SkillCard({ name, Icon }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="group flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 transition-shadow duration-300 hover:border-secondary/60 hover:shadow-[0_0_30px_rgba(79,139,255,0.18)]"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-white/[0.03] text-secondary transition-colors group-hover:text-primary">
        <Icon className="h-[18px] w-[18px]" />
      </span>
      <span className="text-sm font-medium text-white">{name}</span>
    </motion.div>
  )
}
