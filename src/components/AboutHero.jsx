export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-navy pt-16 lg:pt-[72px]">
      <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
        <defs>
          <linearGradient id="ab" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#12B76A" stopOpacity="0" />
            <stop offset="0.7" stopColor="#087F8C" stopOpacity="0.45" />
            <stop offset="1" stopColor="#1677E8" stopOpacity="0.55" />
          </linearGradient>
        </defs>
        <path d="M300 400 C600 380 800 120 1200 40 L1200 400 Z" fill="url(#ab)" />
        <path d="M500 400 C760 330 940 190 1200 130" stroke="#12B76A" strokeOpacity=".45" strokeWidth="2" fill="none" />
      </svg>
      <div className="container-x relative py-14 lg:py-24">
        <span data-aos="fade-down" className="eyebrow !text-brand">About Us</span>
        <h1 data-aos="fade-up" className="max-w-2xl text-3xl font-extrabold leading-tight !text-white sm:text-4xl lg:text-5xl">
          Innovators. Problem Solvers.{' '}
          <span className="gradient-text !bg-gradient-to-r from-brand to-electric">Your Technology Partner.</span>
        </h1>
        <p data-aos="fade-up" data-aos-delay="100" className="mt-5 max-w-lg text-sm text-white/70 sm:text-base">
          We help organizations modernize, integrate and scale with next-generation
          technology and industry expertise.
        </p>
      </div>
    </section>
  )
}
