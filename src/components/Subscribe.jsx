import { motion } from 'framer-motion'
import { Reveal } from './motion.jsx'

export default function Subscribe() {
  return (
    <section className="section subscribe-wrap">
      <Reveal>
        <div className="subscribe">
          <div className="rings" aria-hidden="true" />
          <div className="plus-dots" aria-hidden="true" />
          <motion.button
            className="send"
            aria-label="Send"
            whileHover={{ rotate: 15, scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24"><path d="M3 11l18-7-7 18-2.5-7.5z" fill="#fff" /></svg>
          </motion.button>
          <h3>Subscribe to get information, latest news and other interesting offers about Jadoo</h3>
          <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
            <label className="email-field">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9398A8" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
              <input type="email" placeholder="Your email" required aria-label="Your email" />
            </label>
            <motion.button type="submit" className="btn-subscribe" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              Subscribe
            </motion.button>
          </form>
        </div>
      </Reveal>
    </section>
  )
}
