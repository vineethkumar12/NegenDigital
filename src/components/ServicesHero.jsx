import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import codeImg  from '../assets/g1.png'

export default function ServicesHero() {
  return (
    <section className="bg-white pt-16 lg:pt-[72px]">
      <div className="container-x grid items-center gap-8 py-12 lg:grid-cols-2 lg:py-20">
        <div>
          <span data-aos="fade-down" className="eyebrow flex items-center gap-2">
            <span className="h-px w-6 bg-teal" /> Our Services
          </span>
          <h1 data-aos="fade-up" className="text-4xl font-extrabold leading-[1.1] sm:text-5xl">
            From strategy to execution, we help you <span className="gradient-text">deliver.</span>
          </h1>
          <p data-aos="fade-up" data-aos-delay="100" className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            Bring your technology ambitions to life with focused consulting, thoughtful
            architecture and access to the right technical talent.
          </p>
          <Link to="/about#contact" data-aos="fade-up" data-aos-delay="200" className="btn-primary mt-8">
            Discuss Your Requirements <ArrowRight size={16} />
          </Link>
        </div>
        <img data-aos="fade-left" src={codeImg} alt="Laptop showing software code" className="w-full rounded-2xl object-cover shadow-card" />
      </div>
    </section>
  )
}
