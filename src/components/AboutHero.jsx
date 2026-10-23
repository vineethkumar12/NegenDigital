import aboutbg from '../assets/aboutbg.png'

export default function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy pt-16 lg:pt-[72px]">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {/* 
          Changed to object-top to pull the image down and show the top.
          If it's still not right, try object-[center_20%] or object-[center_30%] 
        */}
        <img
          src={aboutbg}
          alt=""
          className="h-full w-full object-cover object-top"
        />
        
        {/* Dark navy overlay to make text readable */}
        <div className="absolute inset-0 bg-navy/85 mix-blend-multiply" />
        
        {/* Fade out at the bottom */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy to-transparent" />
      </div>

      {/* Content */}
      <div className="container-x relative py-16 lg:py-24">
        <div className="max-w-3xl">
          <span data-aos="fade-down" className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand">
            <span className="h-px w-6 bg-brand" /> About Us
          </span>
          
          <h1 data-aos="fade-up" className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Innovators. Problem Solvers.{' '}
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-brand via-teal to-electric bg-clip-text text-transparent">
              Your Technology Partner.
            </span>
          </h1>
          
          <p data-aos="fade-up" data-aos-delay="100" className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            We help organizations modernize, integrate, and scale with next-generation
            technology and deep industry expertise. From Data & AI to ServiceNow, we deliver outcomes.
          </p>
        </div>
      </div>
    </section>
  )
}