import { stats } from '../data/content.js'

export default function Stats() {
  return (
    <div className="border-y border-line bg-softblue/60">
      <dl className="container-x grid grid-cols-2 gap-6 py-8 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.label} data-aos="fade-up" data-aos-delay={i * 80} className="text-center lg:text-left">
            <dt className="font-display text-xl font-bold text-navy sm:text-2xl">{s.value}</dt>
            <dd className="mt-1 text-sm text-muted">{s.label}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
