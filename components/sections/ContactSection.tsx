// Server Component — NO 'use client'
import { siteContent } from '@/lib/content/i18n'
import ContactForm from '@/components/ui/ContactForm'

export default function ContactSection() {
  const content = siteContent['en'].contact

  return (
    <section
      id="contact"
      className="scroll-mt-16 py-20 px-6 bg-surface"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="contact-heading"
          className="text-3xl font-bold text-ink mb-3"
        >
          {content.heading}
        </h2>
        <p className="text-ink/70 mb-10 max-w-xl">{content.subheading}</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <ContactForm labels={content} />

          {/* Direct contact details */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-sm font-medium text-ink mb-1">Email</p>
              <a
                href={`mailto:${content.directEmail}`}
                className="text-brand hover:text-brand-dark transition-colors"
              >
                {content.directEmail}
              </a>
            </div>
            {/* <div>
              <p className="text-sm font-medium text-ink mb-1">
                {content.linkedinLabel}
              </p>
              <a
                href="https://www.linkedin.com/company/example"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:text-brand-dark transition-colors"
              >
                linkedin.com/company/example
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
