import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Reveal } from './motion.jsx'

const data = [
  {
    quote: '“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”',
    name: 'Mike taylor',
    loc: 'Lahore, Pakistan',
    img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=120',
  },
  {
    quote: '“Jadoo made booking effortless. Flights, hotels and support were seamless from start to finish.”',
    name: 'Chris Thomas',
    loc: 'CEO of Red Button',
    img: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=120',
  },
  {
    quote: '“Best travel experience ever. The Greece trip was perfectly planned down to the last detail.”',
    name: 'Sara Khan',
    loc: 'Dubai, UAE',
    img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=120',
  },
]

export default function Testimonials() {
  const [idx, setIdx] = useState(0)
  const next = data[(idx + 1) % data.length]
  const prev = () => setIdx((idx - 1 + data.length) % data.length)
  const go = () => setIdx((idx + 1) % data.length)

  return (
    <section className="section testimonials" id="hotels">
      <div className="test-left">
        <Reveal><p className="section-eyebrow left">Testimonials</p></Reveal>
        <Reveal delay={0.08}><h2 className="left">What People Say<br />About Us.</h2></Reveal>
        <div className="dots">
          {data.map((_, i) => (
            <button key={i} aria-label={`Go to testimonial ${i + 1}`} className={`dot ${i === idx ? 'active' : ''}`} onClick={() => setIdx(i)} />
          ))}
        </div>
      </div>
      <div className="test-right">
        <AnimatePresence mode="wait">
          <motion.article
            key={idx}
            className="test-card main"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.45 }}
          >
            <img className="avatar" src={data[idx].img} alt={data[idx].name} />
            <p>{data[idx].quote}</p>
            <strong>{data[idx].name}</strong>
            <small>{data[idx].loc}</small>
          </motion.article>
        </AnimatePresence>
        <motion.article
          key={`next-${idx}`}
          className="test-card next"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <strong>{next.name}</strong>
          <small>{next.loc}</small>
        </motion.article>
        <div className="test-arrows">
          <motion.button whileTap={{ scale: 0.9 }} onClick={prev} aria-label="Previous">⌃</motion.button>
          <motion.button whileTap={{ scale: 0.9 }} className="down" onClick={go} aria-label="Next">⌄</motion.button>
        </div>
      </div>
    </section>
  )
}
