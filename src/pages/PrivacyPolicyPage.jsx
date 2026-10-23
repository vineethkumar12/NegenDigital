import { EMAIL } from '../data/content.js'

export default function PrivacyPolicyPage() {
  return (
    <article className="container-x max-w-4xl py-16 pt-28 sm:py-20 sm:pt-32">
      <span className="eyebrow">Legal</span>
      <h1 className="text-3xl font-extrabold sm:text-4xl">Privacy Policy</h1>
      <p className="mt-3 text-sm text-muted">Last updated: October 22, 2026</p>

      <div className="mt-10 space-y-8 text-sm leading-7 text-muted sm:text-base">
        <section>
          <h2 className="text-xl font-bold">Information you provide</h2>
          <p className="mt-2">
            If you use the contact form, the information you enter may include your name,
            company, email address, service of interest, and message. The form currently
            opens your device’s email application with this information filled in. It does
            not submit the form to a Negen Digital server. The message is sent only if you
            choose to send it from your email application.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">How we use information</h2>
          <p className="mt-2">
            Information you email to us is used to respond to your enquiry, communicate
            about our services, and maintain relevant business records. Please do not
            include sensitive personal information in a general enquiry.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">Hosting and third parties</h2>
          <p className="mt-2">
            Website hosting and email providers may process technical information or
            messages as part of providing their services. Their handling of that
            information is subject to their own privacy terms. This website may also link
            to third-party websites, which have separate privacy practices.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">Retention and your choices</h2>
          <p className="mt-2">
            We retain enquiry correspondence for as long as reasonably needed to respond,
            manage our business relationship, and meet applicable legal obligations. You
            may contact us to ask about personal information you have sent us or to
            request its correction or deletion, subject to applicable law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">Changes to this policy</h2>
          <p className="mt-2">
            We may update this policy when our website or practices change. The date at
            the top of this page indicates when it was most recently revised.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">Contact</h2>
          <p className="mt-2">
            For privacy questions, contact us at{' '}
            <a className="font-semibold text-electric hover:underline" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>.
          </p>
        </section>
      </div>
    </article>
  )
}