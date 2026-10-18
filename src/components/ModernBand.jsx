import { qualities } from '../data/content.js'
import { codeImg } from '../assets/index.js'

export default function ModernBand() {
  return (
    <section className="container-x pb-12 lg:pb-20">
      <div data-aos="fade-up" className="relative overflow-hidden rounded-2xl bg-navy">
        <img
          src={codeImg}
          alt=""
          aria-hidden="true"
          className="absolute inset-y-0 right-0 hidden h-full w-3/5 object-cover opacity-70 [mask-image:linear-gradient(to_right,transparent,black_45%)] lg:block"
        />
        <div className="relative p-6 sm:p-10 lg:w-3/5">
          <h2 className="text-2xl font-bold !text-white sm:text-3xl">Modern. Secure. Scalable.</h2>
          <p className="mt-3 max-w-md text-sm text-white/70">
            Built with React.js and Tailwind CSS for performance, accessibility and a
            seamless user experience.
          </p>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {qualities.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/20 text-brand">
                  <Icon size={18} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">{title}</span>
                  <span className="block text-xs text-white/60">{text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
