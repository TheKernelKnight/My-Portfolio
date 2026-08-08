import { useState } from 'react'
import { motion } from 'framer-motion'
import Lightbox from './Lightbox'

export default function ImageGallery({ images, columns = 3 }) {
  const [active, setActive] = useState(null)

  const gridCols =
    columns === 1
      ? 'grid-cols-1'
      : columns === 2
        ? 'grid-cols-1 sm:grid-cols-2'
        : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'

  return (
    <>
      <div className={`grid gap-4 ${gridCols}`}>
        {images.map((image, index) => (
          <motion.button
            key={image.src}
            type="button"
            onClick={() => setActive(image)}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-secondary/60"
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </motion.button>
        ))}
      </div>

      <Lightbox
        src={active?.src}
        alt={active?.alt ?? ''}
        onClose={() => setActive(null)}
      />
    </>
  )
}
