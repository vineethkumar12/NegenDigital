import { techStack } from '../data/content.js'

export default function TechStack() {
  return (
    <section className="section relative isolate overflow-hidden bg-navy">
      {/* Background glow effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 -z-10 h-96 w-96 rounded-full bg-electric/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-brand/20 blur-3xl"
      />

      <div className="container-x relative">
        {/* Section heading */}
        <div
          className="mx-auto max-w-3xl text-center"
          data-aos="fade-up"
        >
          <span className="eyebrow !text-brand">
            Our Technology Stack
          </span>

          <h2 className="mt-3 text-3xl font-bold leading-tight !text-white sm:text-4xl lg:text-5xl">
            The right technology.
            <span className="mt-1 block text-brand">
              Built for what’s next.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            We bring together modern platforms, proven tools, and
            engineering expertise to build secure, scalable, and
            future-ready business solutions.
          </p>
        </div>

        {/* Technology tags */}
        <ul
          aria-label="Technologies and platforms"
          className="mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-3 sm:mt-14 sm:gap-4"
        >
          {techStack.map((technology, index) => (
            <li
              key={technology}
              data-aos="fade-up"
              data-aos-delay={(index % 6) * 60}
            >
              <span className="group flex cursor-default items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-white/80 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/60 hover:bg-brand/10 hover:text-white hover:shadow-lg hover:shadow-brand/5 motion-reduce:transform-none motion-reduce:transition-none sm:px-5 sm:py-3 sm:text-base">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand/70 transition-colors duration-300 group-hover:bg-brand motion-reduce:transition-none"
                />
                {technology}
              </span>
            </li>
          ))}
        </ul>

        {/* Closing statement */}
        <div
          className="mx-auto mt-12 max-w-2xl border-t border-white/10 pt-6 text-center sm:mt-14"
          data-aos="fade-up"
        >
          <p className="text-sm leading-6 text-white/55 sm:text-base">
            Technology is only the beginning. We focus on turning it
            into meaningful business outcomes.
          </p>
        </div>
      </div>
    </section>
  )
}