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
    thumbnail: {
      src: '/thumbnails/1/BookMe1.png',
      alt: 'BookMe product thumbnail',
    },
    caseStudy: {
      challenge: {
        title: 'Getting Chargily payments to actually be trustworthy',
        body: 'Stripe and PayPal don\u2019t support Algerian merchants, so local card payments (CIB, EDAHABIA) meant integrating Chargily \u2014 by far the hardest part of BookMe. The tricky bit wasn\u2019t the checkout call, it was everything after it: payment confirmation comes back asynchronously through a webhook, not the client redirect, so I couldn\u2019t trust "the user landed on the success page" as proof of payment. I had to verify Chargily\u2019s webhook signature server-side, handle out-of-order or duplicate webhook deliveries, and make sure a booking only ever got confirmed once the payment was independently verified \u2014 never from the frontend alone.',
      },
      solution: {
        title: 'A booking flow that can\u2019t be faked or double-booked',
        body: 'I built a reconciliation layer that treats the webhook as the single source of truth: a booking sits in a pending state until Chargily\u2019s server-to-server confirmation lands and its signature checks out, at which point the slot is locked and the client is notified. That closed the gap business owners cared most about \u2014 no more manually cross-checking WhatsApp messages against bank transfers to confirm a booking is real.',
      },
      screenshots: [
        { src: '/screenshots/1/BookMe3.png', alt: 'BookMe booking flow' },
        { src: '/screenshots/1/BookMe2.png', alt: 'BookMe business dashboard' },
        { src: '/screenshots/1/BookMe1.png', alt: 'BookMe payment confirmation' },
      ],
      architecture: [
        { src: '/architecture/1/DiagramBookMe.png', alt: 'BookMe system architecture diagram' },
      ],
    },
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
