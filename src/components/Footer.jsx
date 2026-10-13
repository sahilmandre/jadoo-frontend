import { motion } from 'framer-motion'

const socials = [
  {
    label: 'Facebook',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2-.1-2 0-3.4 1.2-3.4 3.5V11H8.5v3H11v7h2.5z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Twitter',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.9 4h2.6l-5.7 6.6L22.5 20h-5.3l-4.1-5.4L8.3 20H5.7l6.1-7L2.5 4H8l3.7 4.9L18.9 4zm-.9 14.3h1.4L7 5.5H5.5l12.5 12.8z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="f-brand">
          <p className="logo big">Jadoo.</p>
          <small className="muted">Book your trip in minute, get full Control for much longer.</small>
        </div>
        <div className="f-col">
          <strong>Company</strong>
          <a href="#">About</a><a href="#">Careers</a><a href="#">Mobile</a>
        </div>
        <div className="f-col">
          <strong>Contact</strong>
          <a href="#">Help/FAQ</a><a href="#">Press</a><a href="#">Affiliates</a>
        </div>
        <div className="f-col">
          <strong>More</strong>
          <a href="#">Airlinefees</a><a href="#">Airline</a><a href="#">Low fare tips</a>
        </div>
        <div className="f-app">
          <div className="social">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href="#"
                aria-label={s.label}
                whileHover={{ y: -3, scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                className="soc"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
          <p className="app-label">Discover our app</p>
          <div className="stores">
            <a className="store" href="#" aria-label="Get it on Google Play">
              <span className="store-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path d="M4 3.5v17l9.5-8.5L4 3.5z" fill="#fff" />
                  <path d="M16.5 9.2l-3 2.8 3 2.8 3.5-2c1-.6 1-2.2 0-2.8l-3.5-2.8z" fill="#fff" opacity=".85" />
                </svg>
              </span>
              <span className="store-text"><small>GET IT ON</small><b>Google Play</b></span>
            </a>
            <a className="store" href="#" aria-label="Download on the App Store">
              <span className="store-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
                  <path d="M16.7 12.9c0-2.4 2-3.6 2.1-3.7-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.9-3.2-.9-1.6 0-3.1 1-4 2.4-1.7 2.9-.4 7.3 1.2 9.7.8 1.2 1.8 2.5 3.1 2.4 1.2-.1 1.7-.8 3.2-.8s1.9.8 3.2.8c1.3 0 2.2-1.2 3-2.4.9-1.4 1.3-2.7 1.3-2.8-.1 0-2.7-1-2.7-3.7zM14.4 5.6c.7-.8 1.1-1.9 1-3-1 0-2.1.6-2.8 1.4-.6.7-1.2 1.9-1 3 1.1.1 2.1-.6 2.8-1.4z" />
                </svg>
              </span>
              <span className="store-text"><small>Available on</small><b>App Store</b></span>
            </a>
          </div>
        </div>
      </div>
      <p className="copy">All rights reserved@jadoo.co</p>
    </footer>
  )
}
