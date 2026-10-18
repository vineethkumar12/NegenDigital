import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowRight, ChevronRight, Menu, X } from 'lucide-react'
import Logo from './Logo.jsx'
import { navLinks, EMAIL } from '../data/content.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const linkClass = ({ isActive }) =>
    `relative py-2 text-sm font-medium transition hover:text-electric ${
      isActive
        ? 'text-electric after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-electric'
        : 'text-navy'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition duration-300 ${
        scrolled
          ? 'border-line bg-white/90 shadow-sm backdrop-blur'
          : 'border-transparent bg-white'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between lg:h-[72px]" aria-label="Primary">
        <Link to="/" aria-label="Negen Digital home">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {navLinks.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end className={linkClass}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link to="/about#contact" className="btn-primary hidden !py-2.5 lg:inline-flex">
          Contact Us <ArrowRight size={15} />
        </Link>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg text-navy lg:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`fixed inset-0 z-[60] flex flex-col bg-white transition duration-300 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between">
          <Logo />
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-lg text-navy"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <X size={24} />
          </button>
        </div>
        <ul className="container-x mt-4 flex flex-col">
          {navLinks.map((l) => (
            <li key={l.to} className="border-b border-line">
              <NavLink
                to={l.to}
                end
                className={({ isActive }) =>
                  `flex items-center justify-between py-4 text-base font-medium ${
                    isActive ? 'text-electric' : 'text-navy'
                  }`
                }
              >
                {l.label} <ChevronRight size={18} className="text-muted" />
              </NavLink>
            </li>
          ))}
          <li className="pt-6">
            <Link to="/about#contact" className="btn-primary w-full">
              Contact Us <ArrowRight size={16} />
            </Link>
          </li>
        </ul>
        <p className="container-x mt-auto pb-8 text-xs text-muted">{EMAIL}</p>
      </div>
    </header>
  )
}
