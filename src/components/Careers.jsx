import { careerRoles, careerAreas } from '../data/content.js'

export default function Careers() {
  return (
    <section id="careers" className="bg-slate-50/50 py-16 lg:py-24">
      <div className="container-x">
        
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between" data-aos="fade-up">
          <div className="max-w-2xl">
            <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand">
              <span className="h-px w-6 bg-brand" /> Join Our Team
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Careers at Negen Digital
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Join a team working on next-generation data, AI, cloud, and enterprise
              technology projects. We welcome experienced technology professionals who
              are passionate about solving complex challenges for our clients.
            </p>
          </div>
          
         
        </div>

        {/* Roles Grid */}
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {careerRoles.map(({ icon: Icon, title }, i) => (
            <li key={title} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="group flex h-full flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-navy/15 hover:shadow-xl">
                
                {/* Icon */}
                <span className="grid h-14 w-14 place-items-center rounded-full bg-slate-50 border border-slate-100 text-teal transition-colors duration-300 group-hover:bg-brand-gradient group-hover:text-white group-hover:border-transparent">
                  <Icon size={24} strokeWidth={2} />
                </span>
                
                {/* Title */}
                <h3 className="mt-5 font-display text-lg font-bold text-navy">
                  {title}
                </h3>
                
                {/* Subtext - updated to match company focus */}
                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                  Help build scalable, secure solutions for our enterprise clients.
                </p>
                
              </div>
            </li>
          ))}
        </ul>

        {/* Areas We Hire In */}
        <div data-aos="fade-up" className="mt-14 rounded-3xl border border-slate-200 bg-white p-8 text-center sm:p-10">
          <h3 className="font-display text-lg font-bold text-navy">
            Areas we hire in
          </h3>
          <ul className="mt-6 flex flex-wrap justify-center gap-3">
            {careerAreas.map((area) => (
              <li 
                key={area} 
                className="rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-sm font-medium text-slate-700 transition hover:border-brand/30 hover:bg-brand/5 hover:text-brand cursor-default"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}