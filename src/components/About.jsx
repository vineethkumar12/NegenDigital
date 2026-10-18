import { CheckCircle2 } from 'lucide-react'
import { values } from '../data/content.js'
import { aboutImg } from '../assets/index.js'

export default function About() {
  return (
    <section id="about" className="section bg-white !pb-10">
      <div className="container-x grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <div data-aos="fade-right">
          <h2 className="text-2xl font-bold sm:text-3xl">Who We Are</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Negen Digital is an IT consulting and services company driven by industry
            veterans with expertise in Advanced Analytics, AI and Agentic AI, ServiceNow,
            data platforms and enterprise integration.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            We partner with organizations to solve complex technology challenges,
            modernize digital capabilities and deliver secure, business-focused results.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {values.map((v) => (
              <li key={v} className="flex items-start gap-2 text-sm font-medium text-navy">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand" />
                {v}
              </li>
            ))}
          </ul>
        </div>
        <img data-aos="fade-left" src={aboutImg} alt="Team collaborating in a modern glass office" className="w-full rounded-2xl object-cover shadow-card" />
      </div>
    </section>
  )
}
