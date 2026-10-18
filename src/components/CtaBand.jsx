import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CtaBand({
  title = 'Let’s turn your technology goals into outcomes.',
  text = 'Tell us what you want to build, modernize or improve.',
  button = 'Get in Touch',
}) {
  return (
    <section className="container-x py-12 lg:py-16">
      <div
        data-aos="fade-up"
        className="relative overflow-hidden rounded-2xl bg-navy px-6 py-10 sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-8"
      >
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 h-full w-2/3 opacity-90"
          viewBox="0 0 600 200"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="cta-g" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#12B76A" stopOpacity="0" />
              <stop offset="0.6" stopColor="#087F8C" stopOpacity="0.55" />
              <stop offset="1" stopColor="#1677E8" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <path d="M0 200 C150 190 250 60 600 0 L600 200 Z" fill="url(#cta-g)" />
          <path d="M120 200 C260 170 380 90 600 60" stroke="#12B76A" strokeOpacity=".5" strokeWidth="1.5" fill="none" />
        </svg>
        <div className="relative max-w-xl">
          <h2 className="text-xl font-bold !text-white sm:text-2xl">{title}</h2>
          <p className="mt-2 text-sm text-white/70">{text}</p>
        </div>
        <Link to="/about#contact" className="btn-primary relative mt-6 lg:mt-0">
          {button} <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}
