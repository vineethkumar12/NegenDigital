import { ArrowRight } from 'lucide-react'
import { capabilities } from '../data/content.js'

export default function Capabilities() {
  return (
    <section id="capabilities" className="section bg-white">
      <div className="container-x">
        <div data-aos="fade-up">
          <h2 className="text-2xl font-bold sm:text-3xl">Core Capabilities</h2>
          <p className="mt-2 text-sm text-muted sm:text-base">
            Strategic technology expertise to help you innovate, operate and achieve more.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(({ icon: Icon, title, text }, i) => (
            <div key={title} data-aos="fade-up" data-aos-delay={(i % 3) * 100}>
              <article className="group flex h-full flex-col rounded-xl border border-line bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-card">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-mint text-teal transition group-hover:bg-brand-gradient group-hover:text-white">
                  <Icon size={22} />
                </span>
                <h3 className="mt-4 text-base font-bold">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{text}</p>
                <ArrowRight size={16} className="mt-4 self-end text-electric transition group-hover:translate-x-1" />
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
