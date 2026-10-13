import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['Destinations', 'Hotels', 'Flights', 'Bookings']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <motion.header
      className="nav"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <a className="logo" href="#" aria-label="Jadoo home">
        Jadoo<span className="logo-dot">.</span>
      </a>
      <button
        className={`nav-toggle ${open ? 'active' : ''}`}
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span /><span /><span />
      </button>
      <nav className={`nav-links ${open ? 'open' : ''}`}>
        {links.map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>
        ))}
        <a href="#login" onClick={() => setOpen(false)}>Login</a>
        <a href="#signup" className="btn-outline" onClick={() => setOpen(false)}>Sign up</a>
        <button className="lang">EN <span className="chev">▾</span></button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.header>
  )
}
