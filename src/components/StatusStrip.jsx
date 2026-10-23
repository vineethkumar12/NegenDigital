import { useEffect, useState } from 'react'

const STATUS_ITEMS = [
  { kind: 'live', label: '3 client launches this month', href: '/work' },
  { kind: 'hiring', label: 'Hiring a senior React engineer', href: '/careers' },
  { kind: 'reading', label: 'Reading "Shape Up" by Basecamp', href: '/notes' },
]

const KIND_COLORS = {
  live: 'bg-brand',
  hiring: 'bg-electric',
  reading: 'bg-teal',
}

export default function StatusStrip() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % STATUS_ITEMS.length)
    }, 6000)
    return () => clearInterval(id)
  }, [])

  const item = STATUS_ITEMS[index]

  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-line bg-white/70 px-4 py-2 text-[13px] backdrop-blur-sm">
      <a
        href={item.href}
        className="group inline-flex items-center gap-2.5 text-ink transition hover:text-navy"
      >
        <span className={`h-1.5 w-1.5 rounded-full ${KIND_COLORS[item.kind]} animate-pulse`} />
        <span className="hidden uppercase tracking-[0.14em] text-[10px] font-medium text-muted sm:inline">
          {item.kind}
        </span>
        <span key={item.label} className="transition-opacity duration-300">
          {item.label}
        </span>
        <span className="text-muted transition-transform group-hover:translate-x-0.5">→</span>
      </a>

      <span className="hidden items-center gap-1.5 border-l border-line pl-3 sm:flex">
        {STATUS_ITEMS.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Show status ${i + 1}`}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === index ? 'w-5 bg-navy' : 'w-1.5 bg-line hover:bg-muted'
            }`}
          />
        ))}
      </span>
    </div>
  )
}