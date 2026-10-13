import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

export default function Hero() {
  const p1 = useRef(null)
  const p2 = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(p1.current, { x: 18, y: -14, rotation: 8, duration: 2.4, yoyo: true, repeat: -1, ease: 'sine.inOut' })
      gsap.to(p2.current, { x: -16, y: 12, rotation: -10, duration: 3, yoyo: true, repeat: -1, ease: 'sine.inOut' })
      gsap.to(imgRef.current, { y: -10, duration: 3.2, yoyo: true, repeat: -1, ease: 'sine.inOut' })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="hero">
      <div className="hero-bg-deco" aria-hidden="true" />
      <div className="hero-text">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          Best Destinations around the world
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Travel, <span className="brush">enjoy
            <svg viewBox="0 0 220 14" preserveAspectRatio="none" aria-hidden="true">
              <path d="M3 10 C 60 3, 150 3, 217 8" stroke="#DF6951" strokeWidth="6" fill="none" strokeLinecap="round" />
            </svg>
          </span><br /> and live a new<br /> and full life
        </motion.h1>
        <motion.p
          className="muted hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          Built Wicket longer admire do barton vanity itself do in it.
          Preferred to sportsmen it engrossed listening. Park gate
          sell they west hard for the.
        </motion.p>
        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <motion.a
            href="#destinations"
            className="btn-primary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Find out more
          </motion.a>
          <button className="play" onClick={() => document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })}>
            <motion.span
              className="play-icon"
              whileHover={{ scale: 1.12 }}
              animate={{ boxShadow: ['0 12px 24px rgba(223,105,81,.35)', '0 12px 32px rgba(223,105,81,.55)', '0 12px 24px rgba(223,105,81,.35)'] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14"><path d="M3 2l8 5-8 5z" fill="#fff" /></svg>
            </motion.span>
            <span className="play-label">Play Demo</span>
          </button>
        </motion.div>
      </div>
      <motion.div
        className="hero-media"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        <div className="hero-blob" aria-hidden="true" />
        <img
          ref={imgRef}
          src="https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=900"
          alt="Happy traveller in yellow sweater with backpack sitting on orange suitcase"
          loading="eager"
        />
        <div className="hero-fade" aria-hidden="true" />
        <svg ref={p1} className="plane p1" width="52" height="28" viewBox="0 0 52 28" aria-hidden="true">
          <path d="M2 16 L20 14 L30 4 L33 4 L26 14 L50 12 L48 16 L25 18 L20 26 L17 26 L19 18 Z" fill="#59B1E6" />
        </svg>
        <svg ref={p2} className="plane p2" width="44" height="24" viewBox="0 0 52 28" aria-hidden="true">
          <path d="M2 16 L20 14 L30 4 L33 4 L26 14 L50 12 L48 16 L25 18 L20 26 L17 26 L19 18 Z" fill="#59B1E6" opacity=".85" />
        </svg>
      </motion.div>
    </section>
  )
}
