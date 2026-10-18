import AboutHero from '../components/AboutHero.jsx'
import About from '../components/About.jsx'
import Careers from '../components/Careers.jsx'
import Contact from '../components/Contact.jsx'
import CtaBand from '../components/CtaBand.jsx'

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <About />
      <Careers />
      <Contact />
      <CtaBand
        title="Have a specific technology challenge?"
        text="Let’s talk about how we can help."
        button="Contact Us"
      />
    </>
  )
}
