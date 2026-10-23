import logo from '../assets/newlogo.png'

export default function Logo({ light = false, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-1 ${className}`}>
      {/* The Icon Image */}
      <img
        src={logo}
        alt="Negen Icon"
        className="h-9 sm:h-10 w-auto shrink-0 object-contain"
      />

      {/* The Text */}
      <span
        className={`font-display text-2xl mt-1 font-bold tracking-tight ${
          light ? 'text-white' : 'text-navy'
        }`}
      >
        Digital
      </span>
    </span>
  )
}