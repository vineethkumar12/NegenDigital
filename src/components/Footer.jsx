import { Link } from 'react-router-dom'
import { Linkedin, Mail, MapPin, ArrowUpRight } from 'lucide-react'
import Logo from './Logo.jsx'
import { navLinks, EMAIL } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-x grid gap-8 py-8 md:grid-cols-[1.5fr_1fr_1fr] lg:gap-12 lg:py-10">
        
        {/* Brand & Description */}
        <div>
          <Link to="/" aria-label="Negen Digital home" className="inline-block">
            <div className="inline-flex items-center rounded-lg bg-white px-4 py-2 shadow-sm">
              <Logo />
            </div>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
          IT consulting and services to help businesses grow and succeed. We expertise in AI, data, cloud, and ServiceNow to simplify work, improve efficiency, and support digital transformation.       </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Quick Links
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition hover:text-brand">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact, Location & Socials */}
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
          Reach out
          </h3>
          <ul className="mt-3 space-y-2.5 text-sm text-white/70">
            
           

            {/* Email */}
            <li>
              <a 
                href={`mailto:${EMAIL}`} 
                className="group inline-flex items-center gap-2.5 transition hover:text-brand"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 transition group-hover:bg-brand/20">
                  <Mail size={13} className="transition group-hover:text-brand" /> 
                </span>
                {EMAIL}
              </a>
            </li>

            {/* LinkedIn */}
            <li>
              <a 
                href="https://www.linkedin.com/company/negen-digital/"
                target="_blank" 
                rel="noreferrer" 
                className="group inline-flex items-center gap-2.5 transition hover:text-brand"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 transition group-hover:bg-brand/20">
                  <Linkedin size={13} className="transition group-hover:text-brand" />
                </span>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-3 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Negen Digital. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="transition hover:text-white ">Privacy Policy</Link>
            <Link to="/terms-of-service" className="transition hover:text-white">Terms of Service</Link>
            
            <a href="#" className="group flex items-center gap-1 transition hover:text-white">
              Back to top
              <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}