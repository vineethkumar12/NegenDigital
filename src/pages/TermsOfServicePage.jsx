import { EMAIL } from '../data/content.js'

export default function TermsOfServicePage() {
  return (
    <article className="container-x max-w-4xl py-16 pt-28 sm:py-20 sm:pt-32">
      <span className="eyebrow">Legal</span>
      <h1 className="text-3xl font-extrabold sm:text-4xl">Terms of Service</h1>
      <p className="mt-3 text-sm text-muted">Last updated: October 22, 2026</p>

      <div className="mt-10 space-y-8 text-sm leading-7 text-muted sm:text-base">
        <section>
          <h2 className="text-xl font-bold">Using this website</h2>
          <p className="mt-2">
            These terms apply to your use of the Negen Digital website. By using the
            website, you agree to use it lawfully and not to interfere with its security,
            availability, or operation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">Our services</h2>
          <p className="mt-2">
            Website content is provided for general information and does not constitute
            an offer or guarantee to provide a particular service. Any services we agree
            to provide will be governed by a separate written agreement between the
            relevant parties.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">Content and intellectual property</h2>
          <p className="mt-2">
            Unless otherwise indicated, the website and its content are owned by or
            licensed to Negen Digital. You may view and use the content for personal,
            non-commercial reference. You may not reproduce, modify, or distribute it for
            commercial purposes without prior permission, except where applicable law
            allows.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">Third-party links</h2>
          <p className="mt-2">
            Links to external websites are provided for convenience. We do not control
            and are not responsible for their content, availability, or terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">Disclaimers</h2>
          <p className="mt-2">
            The website is provided on an “as is” and “as available” basis. To the extent
            permitted by applicable law, Negen Digital makes no warranty that the website
            will be uninterrupted, error-free, or suitable for a particular purpose.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">Changes and contact</h2>
          <p className="mt-2">
            We may update these terms by revising this page. Continued use of the website
            after a revision means you accept the updated terms. Questions can be sent to{' '}
            <a className="font-semibold text-electric hover:underline" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>.
          </p>
        </section>
      </div>
    </article>
  )
}