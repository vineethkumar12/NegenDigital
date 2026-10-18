import { Link } from 'react-router-dom'
import { Linkedin, Mail } from 'lucide-react'
import Logo from './Logo.jsx'
import { navLinks, EMAIL } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-x grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr] lg:py-14">
        <div>
          <Link to="/" aria-label="Negen Digital home">
            <Logo light />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
            IT consulting and services for a smarter, more connected tomorrow.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold !text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition hover:text-brand">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold !text-white">Contact</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            <li>
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 transition hover:text-brand">
                <Mail size={15} /> {EMAIL}
              </a>
            </li>
            <li>
              {/* TODO: replace with the company LinkedIn URL */}
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-brand">
                <Linkedin size={15} /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Negen Digital. All rights reserved.</p>
          <p className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
