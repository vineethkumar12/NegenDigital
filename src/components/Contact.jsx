import { Mail } from 'lucide-react'
import ContactForm from './ContactForm.jsx'
import { EMAIL } from '../data/content.js'

export default function Contact() {
  return (
    <section id="contact" className="section bg-white !pt-10">
      <div className="container-x grid gap-8 lg:grid-cols-5 lg:gap-14">
        <div className="lg:col-span-2" data-aos="fade-right">
          <h2 className="text-2xl font-bold sm:text-3xl">Contact Us</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            For any questions or inquiries, please reach out to us at{' '}
            <a href={`mailto:${EMAIL}`} className="font-medium text-electric underline-offset-2 hover:underline">{EMAIL}</a>{' '}
            or use the form on this page.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-mint text-electric">
              <Mail size={20} />
            </span>
            <span>
              <a href={`mailto:${EMAIL}`} className="block text-sm font-semibold text-electric">{EMAIL}</a>
              <span className="block text-xs text-muted">We’re here to help.</span>
            </span>
          </div>
        </div>
        <div className="lg:col-span-3" data-aos="fade-left">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
