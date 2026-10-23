import { ArrowDown } from 'lucide-react'
import Careers from '../components/Careers.jsx'

// 1. Import your background image here
import careersbg from '../assets/careerbg.png'

export default function CareersPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy pt-16 lg:pt-[72px]">
        
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <img
            src={careersbg}
            alt=""
            // Using object-top pulls the image down to show the top portion
            className="h-full w-full object-cover object-top"
          />
          
          {/* Dark navy overlay to ensure white text is readable */}
          <div className="absolute inset-0 bg-navy/85 mix-blend-multiply" />
          
          {/* Fade out at the bottom so it blends into the Careers component */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy to-transparent" />
        </div>

        {/* Content */}
        <div className="container-x relative py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <span data-aos="fade-down" className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand">
              <span className="h-px w-6 bg-brand" /> Careers at Negen Digital
            </span>
            
            <h1 data-aos="fade-up" className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Build technology that <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-brand via-teal to-electric bg-clip-text text-transparent">
                moves business forward.
              </span>
            </h1>
            
            <p data-aos="fade-up" data-aos-delay="100" className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Bring your curiosity and craft to work across data, AI, cloud, and enterprise
              technology. Explore the areas where our team works and the experience we value.
            </p>
            
            <div data-aos="fade-up" data-aos-delay="200" className="mt-10">
              <a
                href="#careers"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-bold text-navy transition-all hover:-translate-y-0.5 hover:bg-brand hover:text-white hover:shadow-lg hover:shadow-brand/30"
              >
                Explore career areas
                <ArrowDown size={18} className="transition-transform duration-300 group-hover:translate-y-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Careers />
    </>
  )
}