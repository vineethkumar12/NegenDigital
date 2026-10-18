import { techStack } from '../data/content.js'

export default function TechStack() {
  return (
    <section className="section relative overflow-hidden bg-navy">
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-electric/20 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-brand/20 blur-3xl" />
      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
          <span className="eyebrow !text-brand">Technology</span>
          <h2 className="text-3xl font-bold !text-white sm:text-4xl">Modern technology, applied with care</h2>
          <p className="mt-4 text-white/70">The platforms and disciplines we use to deliver reliable, scalable solutions.</p>
        </div>
        <ul className="mt-12 flex flex-wrap justify-center gap-3">
          {techStack.map((c, i) => (
            <li key={c} data-aos="zoom-in" data-aos-delay={(i % 6) * 60}>
              <span className="block rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 transition hover:border-brand hover:bg-white/10 sm:px-5 sm:py-2.5">
                {c}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
