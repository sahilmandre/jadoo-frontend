import { motion } from 'framer-motion'
import { Reveal } from './motion.jsx'

const services = [
  {
    title: 'Calculated Weather',
    text: 'Built Wicket longer admire do barton vanity itself do in it.',
    art: (
      <svg viewBox="0 0 64 64" width="52" height="52">
        <rect x="8" y="18" width="40" height="30" rx="8" fill="#FFF1DA" />
        <path d="M14 34a10 10 0 0 1 10-10h1a12 12 0 0 1 23 3 8 8 0 0 1-1 16H20a7 7 0 0 1-6-9z" fill="#9AD3F0" />
        <path d="M40 8l10 12-4 1 3 6-12-8 4-1z" fill="#4A6CF7" opacity=".8" />
      </svg>
    ),
  },
  {
    title: 'Best Flights',
    text: 'Engrossed listening. Park gate sell they west hard for the.',
    active: true,
    art: (
      <svg viewBox="0 0 64 64" width="56" height="56">
        <rect x="10" y="14" width="40" height="34" rx="10" fill="#E8F6FF" />
        <path d="M8 38 L26 36 L36 22 L40 22 L32 36 L56 34 L54 39 L30 41 L24 52 L20 52 L22 41 Z" fill="#2FA4E7" />
        <path d="M12 20l5-2M50 46l5-2" stroke="#2FA4E7" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Local Events',
    text: 'Barton vanity itself do in it. Preferd to men it engrossed listening.',
    art: (
      <svg viewBox="0 0 64 64" width="52" height="52">
        <rect x="14" y="12" width="36" height="36" rx="10" fill="#FFF3E8" />
        <rect x="28" y="14" width="8" height="20" rx="4" fill="#3A3A3A" />
        <path d="M22 36a10 10 0 0 0 20 0" stroke="#3A3A3A" strokeWidth="3" fill="none" strokeLinecap="round" />
        <rect x="30" y="44" width="4" height="8" rx="2" fill="#3A3A3A" />
      </svg>
    ),
  },
  {
    title: 'Customization',
    text: 'We deliver outsourced aviation services for military customers',
    art: (
      <svg viewBox="0 0 64 64" width="52" height="52">
        <rect x="12" y="14" width="40" height="34" rx="10" fill="#EDF0FF" />
        <g fill="none" stroke="#7C8DB0" strokeWidth="3">
          <circle cx="32" cy="31" r="7" />
          <path d="M32 20v-4M32 46v-4M21 31h-4M47 31h-4M24 23l-3-3M43 42l-3-3M40 23l3-3M25 42l3-3" strokeLinecap="round" />
        </g>
        <circle cx="32" cy="31" r="2.5" fill="#F1A501" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section className="section services" id="bookings">
      <div className="dots-deco" aria-hidden="true" />
      <Reveal><p className="section-eyebrow">Category</p></Reveal>
      <Reveal delay={0.08}><h2>We Offer Best Services</h2></Reveal>
      <div className="service-grid">
        {services.map((s, i) => (
          <motion.article
            key={s.title}
            className={`service-card ${s.active ? 'active' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
          >
            <div className="service-icon">{s.art}</div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            {s.active && <span className="corner" aria-hidden="true" />}
          </motion.article>
        ))}
      </div>
    </section>
  )
}
