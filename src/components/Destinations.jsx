import { motion } from 'framer-motion'
import { Reveal } from './motion.jsx'

const cards = [
  {
    img: 'https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=700',
    alt: 'Colosseum in Rome, Italy',
    place: 'Rome, Italy',
    price: '$5,42k',
    days: '10 Days Trip',
  },
  {
    img: 'https://images.pexels.com/photos/726484/pexels-photo-726484.jpeg?auto=compress&cs=tinysrgb&w=700',
    alt: 'Big Ben and Parliament in London, UK',
    place: 'London, UK',
    price: '$4.2k',
    days: '12 Days Trip',
  },
  {
    img: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=700',
    alt: 'Helsinki cathedral and harbour — Full Europe',
    place: 'Full Europe',
    price: '$15k',
    days: '28 Days Trip',
  },
]

export default function Destinations() {
  return (
    <section className="section destinations" id="destinations">
      <Reveal><p className="section-eyebrow">Top Selling</p></Reveal>
      <Reveal delay={0.08}><h2>Top Destinations</h2></Reveal>
      <div className="dest-wrap">
        <div className="dest-grid">
          {cards.map((c, i) => (
            <motion.article
              key={c.place}
              className="dest-card"
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -10, rotate: i === 1 ? 0 : i === 0 ? -0.6 : 0.6 }}
            >
              <div className="dest-img">
                <img src={c.img} alt={c.alt} loading="lazy" />
              </div>
              <div className="dest-body">
                <div className="dest-row">
                  <span>{c.place}</span>
                  <span>{c.price}</span>
                </div>
                <p className="dest-days">
                  <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M2 12l19-8-6 19-4-8z" fill="#080809" />
                  </svg>
                  {c.days}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
        <svg className="spiral" viewBox="0 0 120 200" aria-hidden="true">
          {[46, 38, 30, 22, 14].map((r, i) => (
            <ellipse key={r} cx="60" cy={100 + i * 4} rx={r} ry={r * 0.55} fill="none" stroke="#5E6282" strokeOpacity=".35" strokeWidth="1" />
          ))}
        </svg>
      </div>
    </section>
  )
}
