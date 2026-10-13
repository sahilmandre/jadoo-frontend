import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { Reveal } from './motion.jsx'

const steps = [
  {
    color: '#F0BB1F',
    title: 'Choose Destination',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4" fill="none" stroke="#fff" strokeWidth="2" /><circle cx="12" cy="12" r="3" fill="#fff" /></svg>
    ),
  },
  {
    color: '#F15A2B',
    title: 'Make Payment',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="13" rx="3" fill="none" stroke="#fff" strokeWidth="2" /><path d="M2 10h20" stroke="#fff" strokeWidth="2" /></svg>
    ),
  },
  {
    color: '#006380',
    title: 'Reach Airport on Selected Date',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24"><path d="M5 16l2-6h8l3 6H5zM7 16v3M17 16v3" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" /><circle cx="8" cy="19" r="1.6" fill="#fff" /><circle cx="16" cy="19" r="1.6" fill="#fff" /></svg>
    ),
  },
]

export default function Steps() {
  const floatRef = useRef(null)
  const glowRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(floatRef.current, { y: -10, duration: 2.6, yoyo: true, repeat: -1, ease: 'sine.inOut' })
      gsap.to(glowRef.current, { scale: 1.06, opacity: 0.9, duration: 3, yoyo: true, repeat: -1, ease: 'sine.inOut' })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="section steps" id="flights">
      <div className="steps-left">
        <Reveal><p className="section-eyebrow left">Easy and Fast</p></Reveal>
        <Reveal delay={0.08}>
          <h2 className="left">Book Your Next Trip<br />In 3 Easy Steps</h2>
        </Reveal>
        <ul className="steps-list">
          {steps.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <motion.span
                className="step-icon"
                style={{ background: s.color }}
                whileHover={{ scale: 1.12, rotate: 6 }}
              >
                {s.icon}
              </motion.span>
              <div>
                <strong>{s.title}</strong>
                <p>{s.text}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
      <Reveal delay={0.15} className="steps-right">
        <div className="trip-glow" ref={glowRef} aria-hidden="true" />
        <motion.article
          className="trip-card"
          whileHover={{ y: -6 }}
          transition={{ type: 'spring', stiffness: 200, damping: 18 }}
        >
          <img
            src="https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=700"
            alt="Woman in red dress overlooking Santorini, Greece"
            loading="lazy"
          />
          <h4>Trip To Greece</h4>
          <p className="muted small"><span>14-29 June</span><span className="sep">|</span><span>by Robbin j</span></p>
          <div className="trip-icons">
            <span className="ticon">🍃</span><span className="ticon">🗺</span><span className="ticon">✈</span>
          </div>
          <p className="muted small going">🏢 24 people going</p>
          <motion.div className="ongoing" ref={floatRef}>
            <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100" alt="Traveller profile" />
            <div className="ongoing-text">
              <small className="ongoing-label">Ongoing</small>
              <strong>Trip to rome</strong>
              <small className="progress-label"><b>40%</b> completed</small>
              <div className="progress"><motion.span initial={{ width: 0 }} whileInView={{ width: '40%' }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.4 }} /></div>
            </div>
            <span className="heart">♡</span>
          </motion.div>
        </motion.article>
      </Reveal>
    </section>
  )
}
