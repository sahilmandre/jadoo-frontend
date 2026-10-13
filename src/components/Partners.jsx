import { motion } from 'framer-motion'
import { Reveal } from './motion.jsx'

export default function Partners() {
  const logos = [
    { n: 'axon', cls: 'l-axon' },
    { n: 'Jetstar', star: true, cls: 'l-jet' },
    { n: 'Expedia', cls: 'l-exp featured', dot: true },
    { n: 'QANTAS', cls: 'l-qan' },
    { n: 'Alitalia', cls: 'l-ali' },
  ]
  return (
    <Reveal>
      <section className="partners" aria-label="Partners">
        {logos.map((l, i) => (
          <motion.span
            key={l.n}
            className={`partner-logo ${l.cls}`}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ scale: 1.08, filter: 'grayscale(0)' }}
          >
            {l.dot && <span className="exp-globe">◉ </span>}{l.n}{l.star && ' ★'}
          </motion.span>
        ))}
      </section>
    </Reveal>
  )
}
