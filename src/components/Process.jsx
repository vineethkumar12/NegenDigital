import { processSteps } from '../data/content.js'

export default function Process() {
  return (
    <section id="process" className="section bg-white">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
          <span className="eyebrow">Our approach</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            A clear path from idea to impact
          </h2>
        </div>

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((p, i) => (
            <li
              key={p.step}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group rounded-2xl bg-mint p-6 transition-colors duration-300 hover:bg-white hover:shadow-lg hover:shadow-navy/5 motion-reduce:transition-none sm:p-7"
            >
              <span className="gradient-text font-display text-4xl font-extrabold">
                {p.step}
              </span>

              <h3 className="mt-3 text-lg font-bold text-navy">
                {p.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted">
                {p.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}