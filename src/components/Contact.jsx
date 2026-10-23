import { Mail, MapPin, ArrowUpRight } from 'lucide-react'
import { EMAIL } from '../data/content.js'

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-50/50 py-16 lg:py-24">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        
        {/* Left Text */}
        <div data-aos="fade-right">
          <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand">
            <span className="h-px w-6 bg-brand" /> Contact Us
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Let's discuss your next big project.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600">
            Whether you need to modernize your data platforms, implement Agentic AI, or scale your engineering team, we're here to help. Reach out directly and we'll get back to you within one business day.
          </p>
          
          <div className="mt-8 space-y-4">
            
            
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-white border border-slate-200 text-teal shadow-sm">
                <Mail size={22} />
              </span>
              <div>
                <p className="text-sm font-bold text-navy">Email Us</p>
                <a href={`mailto:${EMAIL}`} className="text-sm text-slate-600 hover:text-brand transition">
                  {EMAIL}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-white border border-slate-200 text-teal shadow-sm">
                <MapPin size={22} />
              </span>
              <div>
                <p className="text-sm font-bold text-navy">Location</p>
                <p className="text-sm text-slate-600">Hyderabad, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Card (Replaces Form) */}
        <div data-aos="fade-left" className="relative">
          <div className="absolute inset-0 bg-brand/10 rounded-3xl transform rotate-2 scale-105 transition-transform duration-500" />
          
          <div className="relative z-10 rounded-3xl bg-white p-8 sm:p-10 shadow-xl border border-slate-100">
            <h3 className="font-display text-2xl font-bold text-navy">
              Ready to start?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              Click the button below to send us an email with your project details. Our team will review it and schedule a discovery call.
            </p>
            
            <div className="mt-8 space-y-3">
              <a 
                href={`mailto:${EMAIL}?subject=Project Inquiry - Negen Digital`}
                className="group flex w-full items-center justify-between rounded-xl bg-navy px-6 py-4 text-sm font-bold text-white transition-all hover:bg-brand hover:shadow-lg hover:shadow-brand/20"
              >
                Email Our Team
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              
              {/* Optional: Add a Calendly or WhatsApp link here if you have one */}
              {/* 
              <a href="https://calendly.com/..." className="...">
                Book a Meeting
              </a> 
              */}
            </div>
            
            <p className="mt-6 text-center text-xs text-slate-400">
              We typically respond within 24 hours.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}