import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { serviceBlocks } from '../data/content.js'
import { serviceImages } from '../assets/index.js'

export default function Services() {
  return (
    <section id="services" className="bg-white pb-6">
      <div className="container-x space-y-6">
        {serviceBlocks.map((b, i) => (
          <article
            key={b.id}
            data-aos="fade-up"
            className="grid items-center gap-6 rounded-2xl border border-line bg-white p-5 shadow-sm sm:p-8 lg:grid-cols-2 lg:gap-12"
          >
            <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
              <span className="gradient-text font-display text-sm font-extrabold">{b.id}</span>
              <h2 className="mt-1 text-2xl font-bold">{b.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{b.text}</p>
              <ul className="mt-5 space-y-2.5">
                {b.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-ink">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-brand" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link to="/about#contact" className="btn-primary mt-6 !py-2.5">
                {b.cta} <ArrowRight size={15} />
              </Link>
            </div>
            <img
              src={serviceImages[b.image]}
              alt={`${b.title} illustration`}
              className={`w-full rounded-xl object-cover ${i % 2 === 1 ? 'lg:order-1' : ''}`}
            />
          </article>
        ))}
      </div>
    </section>
  )
}
