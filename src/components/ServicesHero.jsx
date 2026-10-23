import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import codeImg from '../assets/g1.png'

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 lg:pt-[72px]">
      {/* Soft background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand/5 via-transparent to-transparent" />
      
      <div className="container-x grid items-center gap-12 py-12 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div className="max-w-xl">
          <span data-aos="fade-down" className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand">
            <span className="h-px w-6 bg-brand" /> Our Services
          </span>
          <h1 data-aos="fade-up" className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-[3.5rem]">
            From strategy to execution, we help you{' '}
            <span className="bg-gradient-to-r from-brand via-teal to-electric bg-clip-text text-transparent">
              deliver.
            </span>
          </h1>
          <p data-aos="fade-up" data-aos-delay="100" className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
            Bring your technology ambitions to life with focused consulting, thoughtful
            architecture, and access to the right technical talent. We build scalable solutions across Data & AI, Cloud, and ServiceNow.
          </p>
          <div data-aos="fade-up" data-aos-delay="200" className="mt-8 flex gap-4">
            <Link 
              to="/about#contact" 
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-6 py-3.5 text-sm font-bold text-white transition hover:bg-brand hover:shadow-lg hover:shadow-brand/20"
            >
              Discuss Your Requirements <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        
        <div data-aos="fade-left" className="relative">
          <div className="absolute inset-0 bg-brand-gradient blur-3xl opacity-10 rounded-full" />
          <img 
            src={codeImg} 
            alt="Software engineering and architecture" 
            className="relative z-10 w-full rounded-2xl object-cover shadow-2xl border border-slate-100" 
          />
        </div>
      </div>
    </section>
  )
}