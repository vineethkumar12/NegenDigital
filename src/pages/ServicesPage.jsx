import ServicesHero from '../components/ServicesHero.jsx'
import Services from '../components/Services.jsx'
import CtaBand from '../components/CtaBand.jsx'

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <Services />
      <CtaBand
        title="Have a specific challenge in mind?"
        text="Let’s find the right solution together."
        button="Contact Us"
      />
    </>
  )
}
