import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Destinations from './components/Destinations.jsx'
import Steps from './components/Steps.jsx'
import Testimonials from './components/Testimonials.jsx'
import Partners from './components/Partners.jsx'
import Subscribe from './components/Subscribe.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="page">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Destinations />
        <Steps />
        <Testimonials />
        <Partners />
        <Subscribe />
      </main>
      <Footer />
    </div>
  )
}
