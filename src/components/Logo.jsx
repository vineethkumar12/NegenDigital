
import logo from '../assets/logo.png'

export default function Logo({ light = false, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <img
        src={logo}
        alt="Negen"
        className="h-16 w-auto shrink-0 object-contain"
      />

      <span
        className={`font-display text-xl -ml-3 mb-2 font-bold tracking-tight ${
          light ? 'text-white' : 'text-navy'
        }`}
      >
        Digital
      </span>
    </span>
  )
}
