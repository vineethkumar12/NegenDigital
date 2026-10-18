import { ArrowRight } from 'lucide-react'
import { careerRoles, careerAreas } from '../data/content.js'

export default function Careers() {
  return (
    <section id="careers" className="section bg-white !pt-10 !pb-14 lg:!pb-20">
      <div className="container-x">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between" data-aos="fade-up">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold sm:text-3xl">Careers</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              Join a team working on next-generation data, AI, cloud and enterprise
              technology projects. We welcome experienced technology professionals who
              are passionate about problem solving.
            </p>
          </div>
          <p className="w-fit rounded-md bg-softblue px-3 py-2 text-xs font-medium text-electric">
            These are example roles, not confirmed vacancies.
          </p>
        </div>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {careerRoles.map(({ icon: Icon, title }, i) => (
            <li key={title} data-aos="fade-up" data-aos-delay={i * 80}>
              <div className="group flex h-full flex-col rounded-xl border border-line bg-white p-5 transition hover:-translate-y-1 hover:shadow-card">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-mint text-teal">
                  <Icon size={22} />
                </span>
                <h3 className="mt-4 text-base font-bold">{title}</h3>
                <ArrowRight size={16} className="mt-6 self-end text-electric transition group-hover:translate-x-1" />
              </div>
            </li>
          ))}
        </ul>

        <div data-aos="fade-up" className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">Areas we hire in</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {careerAreas.map((a) => (
              <li key={a} className="rounded-full border border-line bg-softblue px-4 py-1.5 text-xs font-medium text-navy">
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
