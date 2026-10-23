
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CtaBand({
  title = 'Let’s build a smarter future together.',
  text = 'AI, Data, Cloud, ServiceNow, and IT Staffing solutions to help your business grow.',
  button = 'Get in Touch',
}) {
  return (
    <section className="container-x py-6 sm:py-8">
      <div
        data-aos="fade-up"
        className="relative flex flex-col gap-4 overflow-hidden rounded-2xl bg-navy px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-7"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-20 h-48 w-48 rounded-full bg-brand/20 blur-3xl"
        />

        <div className="relative z-10">
          <h2 className="text-xl font-bold !text-white sm:text-2xl">
            {title}
          </h2>

          <p className="mt-1.5 text-sm text-white/70">
            {text}
          </p>
        </div>

        <Link
          to="/about#contact"
          className="btn-primary relative z-10 inline-flex shrink-0 items-center gap-2 self-start sm:self-auto"
        >
          {button}
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}
