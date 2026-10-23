import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { serviceBlocks } from '../data/content.js'
import { serviceImages } from '../assets/index.js'

export default function Services() {
  // Sort the blocks to match your specific order (Staffing, Architecture, Consultation)
  const orderedBlocks = [...serviceBlocks].sort((a, b) => {
    if (a.title.includes('Staffing')) return -1
    if (b.title.includes('Staffing')) return 1
    if (a.title.includes('Architecture')) return -1
    if (b.title.includes('Architecture')) return 1
    return 0
  })

  return (
    <section id="services" className="bg-slate-50/50 pb-16 pt-4 lg:pb-24">
      <div className="container-x space-y-8 lg:space-y-12">
        {orderedBlocks.map((b, i) => (
          <article
            key={b.id}
            data-aos="fade-up"
            className="group grid items-center gap-8 overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:shadow-xl sm:p-10 lg:grid-cols-2 lg:gap-16"
          >
            {/* Text Content */}
            <div className={`flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="flex items-center gap-3 mb-3">
                {/* Using i + 1 so the numbers stay sequential (01, 02, 03) based on the new order */}
                <span className="font-display text-lg font-extrabold text-brand">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="h-px w-8 bg-slate-200" />
              </div>
              
              <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                {b.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {b.text}
              </p>
              
              <ul className="mt-6 space-y-3">
                {b.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-teal" />
                    {p}
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <Link 
                  to="/about#contact" 
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-6 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-brand hover:shadow-lg hover:shadow-brand/20"
                >
                  {b.cta} <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Image Content */}
            <div className={`relative ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
              {/* Decorative background shape behind the image */}
              <div className="absolute inset-0 bg-brand-gradient rounded-2xl opacity-10 transform rotate-2 scale-105 transition-transform duration-500 group-hover:rotate-1 group-hover:scale-110" />
              
              <img
                src={serviceImages[b.image]}
                alt={`${b.title} illustration`}
                className="relative z-10 w-full rounded-2xl object-cover shadow-sm border border-slate-100"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}