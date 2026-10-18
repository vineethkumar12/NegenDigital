import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { EMAIL, serviceOptions } from '../data/content.js'

const initial = { name: '', company: '', email: '', service: '', message: '' }

const field =
  'mt-1.5 w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70 focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20'

export default function ContactForm() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    const v = {}
    if (!form.name.trim()) v.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) v.email = 'Please enter a valid business email.'
    if (form.message.trim().length < 10) v.message = 'Please tell us a little more (10+ characters).'
    setErrors(v)
    if (Object.keys(v).length) return

    // No backend yet: open the visitor's mail client with the enquiry pre-filled.
    // Swap this for a form service or serverless endpoint when ready.
    const subject = encodeURIComponent(`Website enquiry${form.service ? ` – ${form.service}` : ''}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nService: ${form.service}\n\n${form.message}`
    )
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
    setForm(initial)
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-line bg-white p-5 shadow-card sm:p-7">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-xs font-semibold text-navy">Name *</label>
          <input id="name" name="name" value={form.name} onChange={onChange} className={field} placeholder="Your name" aria-invalid={!!errors.name} />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="company" className="text-xs font-semibold text-navy">Company</label>
          <input id="company" name="company" value={form.company} onChange={onChange} className={field} placeholder="Company name" />
        </div>
        <div>
          <label htmlFor="email" className="text-xs font-semibold text-navy">Business Email *</label>
          <input id="email" name="email" type="email" value={form.email} onChange={onChange} className={field} placeholder="you@company.com" aria-invalid={!!errors.email} />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="service" className="text-xs font-semibold text-navy">Service of Interest</label>
          <select id="service" name="service" value={form.service} onChange={onChange} className={field}>
            <option value="">Select a service</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="message" className="text-xs font-semibold text-navy">Message *</label>
        <textarea id="message" name="message" rows={4} value={form.message} onChange={onChange} className={field} placeholder="Tell us what you’d like to achieve" aria-invalid={!!errors.message} />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>
      <button type="submit" className="btn mt-6 w-full bg-gradient-to-r from-brand to-electric text-white hover:opacity-90">
        Submit Enquiry <ArrowRight size={16} />
      </button>
      {sent && (
        <p role="status" className="mt-4 rounded-lg bg-mint px-4 py-3 text-sm font-medium text-teal">
          Thanks! Your email app should open with your enquiry ready to send.
        </p>
      )}
    </form>
  )
}
